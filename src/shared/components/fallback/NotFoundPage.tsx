import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6 text-center transition-colors">
      <div className="max-w-md w-full">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-500 mb-4 opacity-20">404</h1>
        <div className="relative -mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('common.notFound', 'Page Not Found')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t(
              'common.notFoundDescription',
              "The page you are looking for doesn't exist or has been moved."
            )}
          </p>
          <Link to="/">
            <Button variant="primary">{t('common.backHome', 'Back to Home')}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
