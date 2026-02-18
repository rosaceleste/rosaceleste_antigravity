import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
    console.warn('RESEND_API_KEY is missing. Emails will not be sent.');
}

export const resend = resendApiKey
    ? new Resend(resendApiKey)
    : ({ emails: { send: async () => { console.warn('Resend key missing, email not sent'); return { data: null, error: null } } } } as unknown as Resend);
