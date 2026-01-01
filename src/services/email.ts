import emailjs from '@emailjs/browser';

// EmailJS configuration - user needs to replace these with their own
const SERVICE_ID = 'service_rarl78n';
const TEMPLATE_ID = 'template_v97xk2s';
const PUBLIC_KEY = 'bC_Qofrib88P_mqQB';

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
