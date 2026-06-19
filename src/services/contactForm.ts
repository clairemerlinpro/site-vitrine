export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail(values: ContactFormValues): Promise<void> {
  const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      'Configuration manquante : ajoutez REACT_APP_WEB3FORMS_ACCESS_KEY dans votre fichier .env',
    );
  }

  const formData = new FormData();
  formData.append('access_key', accessKey);
  formData.append('name', values.name);
  formData.append('email', values.email);
  formData.append('message', values.message);
  formData.append('subject', `Message depuis le portfolio - ${values.name}`);

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "L'envoi du message a échoué.");
  }
}
