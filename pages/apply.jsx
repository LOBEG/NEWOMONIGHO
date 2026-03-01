import Header from '../components/Header';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

export default function Apply() {
  const router = useRouter();
  const { job } = router.query;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [status, setStatus] = useState(null);

  async function onSubmit(data) {
    setStatus('submitting');
    const formData = new FormData();
    Object.entries(data).forEach(([k, v]) => {
      if (k === 'resume' && v && v[0]) formData.append('resume', v[0]);
      else formData.append(k, v);
    });
    formData.append('position', job || 'unspecified');

    try {
      // Netlify function endpoint
      const res = await axios.post('/.netlify/functions/submitApplication', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-3xl mx-auto p-6 flex-1">
        <h1 className="text-2xl font-semibold">Application</h1>
        <p className="text-sm mt-1">Position: {job || 'Not specified'}</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm">First name*</label>
            <input {...register('firstName', { required: true })} className="border px-3 py-2 w-full rounded" />
            {errors.firstName && <p className="text-red-500 text-sm">First name is required</p>}
          </div>

          <div>
            <label className="block text-sm">Last name*</label>
            <input {...register('lastName', { required: true })} className="border px-3 py-2 w-full rounded" />
          </div>

          <div>
            <label className="block text-sm">Email*</label>
            <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} className="border px-3 py-2 w-full rounded" />
            {errors.email && <p className="text-red-500 text-sm">Valid email required</p>}
          </div>

          <div>
            <label className="block text-sm">Phone*</label>
            <input {...register('phone', { required: true })} className="border px-3 py-2 w-full rounded" />
          </div>

          <div>
            <label className="block text-sm">Resume (PDF/DOCX, max 5MB)*</label>
            <input type="file" {...register('resume', { required: true })} accept=".pdf,.doc,.docx" className="mt-1" />
          </div>

          <div>
            <label className="block text-sm">Cover letter (optional)</label>
            <input type="file" {...register('coverLetter')} accept=".pdf,.doc,.docx" />
          </div>

          <div>
            <label className="block text-sm">Security clearance (select)</label>
            <select {...register('clearance')} className="border px-3 py-2 rounded">
              <option value="">Select...</option>
              <option value="none">None</option>
              <option value="eligible">Eligible</option>
              <option value="current">Current</option>
            </select>
          </div>

          <div>
            <button type="submit" className="bg-navy text-white px-4 py-2 rounded">Submit Application</button>
          </div>

          {status === 'submitting' && <p className="text-sm">Submitting...</p>}
          {status === 'success' && <p className="text-green-600 text-sm">Application submitted — check your email for confirmation.</p>}
          {status === 'error' && <p className="text-red-600 text-sm">There was an error submitting your application.</p>}
        </form>
      </main>
      <Footer />
    </div>
  );
}