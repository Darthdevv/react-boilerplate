import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import { AlertTriangle } from 'lucide-react';

interface ErrorPageProps {
  title?: string;
  message?: string;
}

export const ErrorPage = ({ title, message }: ErrorPageProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6 text-center transition-colors">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-md w-full border border-gray-100 dark:border-gray-700">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {title || t('common.error', 'Something went wrong')}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {message ||
            t('common.errorDescription', 'An unexpected error occurred. Please try again later.')}
        </p>
        <Button onClick={() => (window.location.href = '/')} variant="primary" className="w-full">
          {t('common.backHome', 'Back to Home')}
        </Button>
      </div>
    </div>
  );
};
