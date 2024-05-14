import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "test@example.com",
  from: "you@example.com",
  subject: "SendGrid test",
  text: "This is a test email from SendGrid",
};

sendgrid
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
