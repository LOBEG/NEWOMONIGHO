// Note: Netlify functions run on Node.js. This function handles multipart/form-data
// For production: validate thoroughly, scan uploads for malware, and persist files to S3/GCS and metadata to DB.

const axios = require('axios');
const FormData = require('form-data');
const multiparty = require('multiparty');
const crypto = require('crypto');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  // Parse multipart form
  const form = new multiparty.Form();
  const parse = () => new Promise((resolve, reject) => {
    form.parse(event, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

  try {
    const { fields, files } = await parse();

    // Extract simple fields (fields are arrays)
    const applicant = {
      firstName: getField(fields, 'firstName'),
      lastName: getField(fields, 'lastName'),
      email: getField(fields, 'email'),
      phone: getField(fields, 'phone'),
      position: getField(fields, 'position'),
      clearance: getField(fields, 'clearance'),
      timestamp: new Date().toISOString()
    };

    // Generate application reference number
    const ref = `APP-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;

    // TODO: Save metadata to DB (MongoDB / PostgreSQL / Firestore)
    // Example: await saveToDB({ ...applicant, ref, status: 'Received' });

    // Handle file upload: if you configure S3/GCS, upload here and get a public URL
    // For the example: Build a fake URL or store as base64 (not recommended for production)
    let resumePublicUrl = null;
    if (files.resume && files.resume[0]) {
      // If you have S3 credentials, upload the file buffer to S3 and set resumePublicUrl.
      // This scaffold does not include S3 code; add it here.
      resumePublicUrl = `https://example.com/resumes/${ref}.pdf`; // placeholder
    }

    // Send Telegram notification
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const message = `
New application received
Name: ${applicant.firstName} ${applicant.lastName}
Position: ${applicant.position}
Email: ${applicant.email}
Phone: ${applicant.phone}
Ref: ${ref}
Time: ${applicant.timestamp}
${resumePublicUrl ? `Resume: ${resumePublicUrl}` : 'No resume URL available'}
      `;
      // Send as a message
      await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text: message
      });

      // Optional: send resume as document if you uploaded and have an accessible URL
      if (resumePublicUrl) {
        try {
          await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`, {
            chat_id: TELEGRAM_CHAT_ID,
            document: resumePublicUrl
          });
        } catch (err) {
          console.warn('Failed to send document to Telegram:', err.message);
        }
      }
    } else {
      console.warn('Telegram not configured — set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID');
    }

    // Return success with application reference
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, ref })
    };
  } catch (err) {
    console.error('submitApplication error', err);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: err.message }) };
  }
};

function getField(fields, name) {
  return fields && fields[name] && fields[name][0] ? fields[name][0] : '';
}