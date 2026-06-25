import { useTranslation } from 'react-i18next';
import { PrimaryButton } from './PrimaryButton';
import resumeFRPdf from '../../assets/CVFR.pdf';
import resumeENPdf from '../../assets/CVEN.pdf';
import { DownloadSimpleIcon } from '@phosphor-icons/react';

export function ResumeButton() {
  // -------- Params --------
  const { t, i18n } = useTranslation();

  // -------- Store --------

  // -------- States & Refs --------

  // -------- Init --------

  // -------- Helpers --------

  // -------- Callbacks --------
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = i18n.language === 'fr' ? resumeFRPdf : resumeENPdf;
    link.download = i18n.language === 'fr' ? 'CVFR.pdf' : 'CVEN.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // -------- Effects --------

  // -------- Renderers --------

  // -------- Loading --------

  // -------- Error --------

  // -------- Main renderer --------
  return (
    <PrimaryButton
      ariaLabel={t('home.about.downloadResume')}
      bg="var(--color-green)"
      iconRight={<DownloadSimpleIcon className="button_icon" size={14} />}
      onClick={handleDownloadResume}
      label={t('home.about.downloadResume')}
    />
  );
}
