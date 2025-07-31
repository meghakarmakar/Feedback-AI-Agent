import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendFeedbackEmail(narrative) {
  try {
    await resend.emails.send({
      from: 'noreply@megh.me <onboarding@resend.dev>',
      to:'karmakarmegha01@gmail.com',
      subject: "Feedback from Round 2 of DT Actualize",
      html: `<h2>Congratulations!! 🎉</h2><p>Here's our feedback on the case study you attempted:</p><p>${narrative}</p>`,
    });
    console.log(`Email sent`);
  } catch (error) {
    console.error(`Failed to send email: `, error);
  }
}


// onboarding@resend.dev