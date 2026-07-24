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
 * Shared submit handler for form POSTs on a static site.
 * Both site forms pass "/api/send-mail" — the serverless function that
 * relays the submission as an email via Gmail SMTP.
 */
export function useNetlifyForm(endpoint = '/') {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');
    try {
      const res = await fetch(endpoint, {
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
