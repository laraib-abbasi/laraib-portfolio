import emailjs from '@emailjs/browser';

// EmailJS configuration - user needs to replace these with their own
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<void> => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_name: 'Laraib',
  };

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};

export const initEmailJS = (): void => {
  emailjs.init(PUBLIC_KEY);
};
