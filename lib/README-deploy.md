Deployment & Environment variables
Set the following in Netlify UI (Site settings → Build & deploy → Environment):

- TELEGRAM_BOT_TOKEN = <bot-token-from-BotFather>
- TELEGRAM_CHAT_ID = <numeric-chat-or-group-id>
- DATABASE_URL = <your DB connection string> (e.g. MongoDB Atlas)
- STORAGE_PROVIDER = s3|gcs|none
- S3_BUCKET / GCS_BUCKET / S3_REGION etc. (if STORAGE_PROVIDER != none)
- NEXT_PUBLIC_API_BASE = <optional public API base>

Security
- Keep tokens secret (Netlify env is safe).
- Do not commit secrets to the repo.
- Use server-side scanning for uploaded files in production.

Testing locally
- Install Netlify CLI: npm i -g netlify-cli
- netlify dev (reads netlify.toml and runs functions locally)
- Use ngrok if you need external webhooks to reach local dev.

Notes
- This scaffold sends Telegram text messages and tries to send the resume file by its public URL. Prefer uploading resumes to a secure storage bucket and making a time-limited link for HR review.