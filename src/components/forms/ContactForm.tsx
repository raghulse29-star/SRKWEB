'use client';

import { Button } from '@/components/ui/Button';
import { Input, Label, Textarea } from '@/components/ui/Input';
import { useNetlifyForm } from './useNetlifyForm';

/** Contact form wired to Netlify Forms (form name: "contact"). */
export function ContactForm() {
  const { status, handleSubmit } = useNetlifyForm();

  if (status === 'success') {
    return (
      <div className="rounded-[var(--radius-lg)] border border-success/30 bg-success/10 p-6 text-center">
        <p className="font-semibold text-success">Thanks — your message has been sent.</p>
        <p className="mt-1 text-sm text-muted-foreground">We&apos;ll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div>
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required />
      </div>

      {status === 'error' ? (
        <p className="text-sm text-destructive">Something went wrong. Please try again or call us.</p>
      ) : null}

      <Button type="submit" variant="accent" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  );
}
