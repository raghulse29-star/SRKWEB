'use client';

import { Button } from '@/components/ui/Button';
import { Input, Label, Select, Textarea } from '@/components/ui/Input';
import { useNetlifyForm } from './useNetlifyForm';

/** Quote-request form — emails the request via the serverless SMTP mailer. */
export function QuoteForm({ services }: { services: Array<{ slug: string; title: string }> }) {
  const { status, handleSubmit } = useNetlifyForm('/api/send-mail');

  if (status === 'success') {
    return (
      <div className="rounded-[var(--radius-lg)] border border-success/30 bg-success/10 p-6 text-center">
        <p className="font-semibold text-success">Thanks — your quote request is in.</p>
        <p className="mt-1 text-sm text-muted-foreground">Our team will reach out within one business day.</p>
      </div>
    );
  }

  return (
    <form name="quote" method="POST" onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="quote" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="q-name">Name</Label>
          <Input id="q-name" name="name" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="q-email">Email</Label>
          <Input id="q-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="q-phone">Phone</Label>
          <Input id="q-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div>
          <Label htmlFor="q-service">Service needed</Label>
          <Select id="q-service" name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other / Not sure</option>
          </Select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="q-location">Project location</Label>
          <Input id="q-location" name="location" />
        </div>
        <div>
          <Label htmlFor="q-budget">Estimated budget (optional)</Label>
          <Input id="q-budget" name="budget" />
        </div>
      </div>

      <div>
        <Label htmlFor="q-details">Project details</Label>
        <Textarea id="q-details" name="details" required />
      </div>

      {status === 'error' ? (
        <p className="text-sm text-destructive">Something went wrong. Please try again or call us.</p>
      ) : null}

      <Button type="submit" variant="accent" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting…' : 'Request Quote'}
      </Button>
    </form>
  );
}
