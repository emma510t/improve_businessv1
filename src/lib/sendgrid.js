import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(to, subject, text, html) {
  const message = {
    to,
    from: "emil00y1@stud.kea.dk", // Use the email address verified with SendGrid
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(message);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email", error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
}
