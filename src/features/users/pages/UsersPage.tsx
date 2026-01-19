import { UsersTable } from '../components/UsersTable';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const UsersPage = () => {
  const { t } = useTranslation();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
        >
          <ArrowLeft size={20} />
          {t('common.backHome')}
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
        {t('users.title')}
      </h1>
      <UsersTable />
    </div>
  );
};
