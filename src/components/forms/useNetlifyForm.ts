'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/** URL-encode a FormData payload for Netlify's form endpoint. */
function encode(data: FormData): string {
  const params = new URLSearchParams();
  data.forEach((value, key) => params.append(key, value.toString()));
  return params.toString();
}

/**
 * Shared submit handler for Netlify Forms on a static site.
 * POSTs the form (including its `form-name`) to "/" as urlencoded data.
 */
export function useNetlifyForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(new FormData(form)),
      });
      if (!res.ok) throw new Error(`Submit failed: ${res.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return { status, handleSubmit };
}
