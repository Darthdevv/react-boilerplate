import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Languages } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label={t('common.switchLanguage', 'Switch Language')}
      title={
        i18n.language === 'en'
          ? t('common.switchToAr', 'Switch to Arabic')
          : t('common.switchToEn', 'Switch to English')
      }
    >
      <Languages size={20} />
    </button>
  );
};
