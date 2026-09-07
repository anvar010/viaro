import { env } from '../config/env';
import { logger } from '../utils/logger';

/**
 * Transactional email (password reset links).
 *
 * EMAIL_PROVIDER selects the adapter; `resend` is implemented against its REST API.
 * With nothing configured the message is logged instead of sent, so local runs work
 * without an account — and the reset token is printed so you can still test the flow.
 */
export interface EmailMessage {
  to: string;
  subject: string;
  text: string;
}

export async function sendEmail(message: EmailMessage): Promise<{ sent: boolean; provider: string }> {
  const provider = (env.EMAIL_PROVIDER || '').toLowerCase();

  if (!provider || !env.EMAIL_API_KEY) {
    logger.info('[email] no provider configured — message not sent', {
      to: message.to,
      subject: message.subject,
      text: message.text,
    });
    return { sent: false, provider: provider || 'none' };
  }

  try {
    if (provider !== 'resend') throw new Error(`Email provider '${provider}' not implemented`);

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.EMAIL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.EMAIL_FROM ?? 'Viaro <noreply@viaro.com>',
        to: [message.to],
        subject: message.subject,
        text: message.text,
      }),
    });

    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return { sent: true, provider };
  } catch (err) {
    logger.error('Email delivery failed', err);
    return { sent: false, provider };
  }
}
