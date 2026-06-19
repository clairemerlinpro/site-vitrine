import { Flex, Paper, TextInput, Textarea, Alert } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { ContactFormValues } from '../../services/contactForm';
import { sendContactEmail } from '../../services/contactForm';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import { PaperPlaneRightIcon } from '@phosphor-icons/react';

export function ContactForm() {
  // -------- Params --------

  // -------- Store --------

  // -------- States & Refs --------
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  // -------- Init --------
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },

    validate: {
      name: (value) => (value.length > 0 ? null : 'Nom est requis'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalide'),
      message: (value) => (value.length > 0 ? null : 'Message est requis'),
    },
  });

  const isFormComplete =
    form.values.name.trim().length > 0 &&
    /^\S+@\S+$/.test(form.values.email.trim()) &&
    form.values.message.trim().length > 0;

  // -------- Helpers --------

  // -------- Callbacks --------
  const handleSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitFeedback(null);

    try {
      await sendContactEmail(values);
      setSubmitFeedback({ type: 'success', message: 'Message envoyé avec succès !' });
      form.reset();
    } catch (error) {
      setSubmitFeedback({
        type: 'error',
        message: error instanceof Error ? error.message : 'Une erreur est survenue.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // -------- Effects --------

  // -------- Renderers --------

  // -------- Loading --------

  // -------- Error --------

  // -------- Main renderer --------
  return (
    <Paper
      shadow="xl"
      p="xl"
      bg="var(--color-grey)"
      flex={1}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {submitFeedback ? (
        <Alert
          mb="md"
          color={submitFeedback.type === 'success' ? 'green' : 'red'}
          title={submitFeedback.type === 'success' ? 'Succès' : 'Erreur'}
        >
          {submitFeedback.message}
        </Alert>
      ) : (
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '100%', minHeight: 0 }}
        >
          <Flex direction="row" gap="md" mb="md">
            <TextInput
              flex={1}
              c="var(--color-text)"
              withAsterisk
              label="Nom"
              placeholder="john Doe"
              {...form.getInputProps('name')}
            />
            <TextInput
              flex={1}
              c="var(--color-text)"
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
            />
          </Flex>
          <Textarea
            flex={1}
            mb="md"
            c="var(--color-text)"
            withAsterisk
            label="Message"
            placeholder="Votre message"
            {...form.getInputProps('message')}
            styles={{
              root: { flex: 1, display: 'flex', flexDirection: 'column', minHeight: 200 },
              wrapper: { flex: 1, display: 'flex', minHeight: 200 },
              input: {
                flex: 1,
                height: '100%',
                minHeight: 200,
                resize: 'none',
                boxSizing: 'border-box',
              },
            }}
          />
          <PrimaryButton
            large={true}
            type="submit"
            label="Envoyer"
            loading={isSubmitting}
            disabled={isSubmitting || !isFormComplete}
            iconRight={<PaperPlaneRightIcon className="button__arrow" size={14} />}
          />
        </form>
      )}
    </Paper>
  );
}
