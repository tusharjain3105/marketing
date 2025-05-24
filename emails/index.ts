import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  to: string,
  subject: string,
  react: React.ReactNode,
) => {
  return await resend.emails.send({
    from: process.env.RESEND_FROM ?? "onboarding@resend.dev",
    to: process.env.RESEND_TO ?? to,
    subject: subject,
    react,
  });
};
