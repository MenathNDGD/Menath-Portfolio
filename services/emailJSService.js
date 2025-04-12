import emailjs from "emailjs-com";

export const sendContactEmail = async (formData) => {
  const { firstName, lastName, email, phone, service, message } = formData;
  const fullName = `${firstName} ${lastName}`;

  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    {
      from_name: fullName,
      to_name: "Recipient Name",
      email,
      phone,
      service,
      message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
  );
};
