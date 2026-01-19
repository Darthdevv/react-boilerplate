import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from '@/shared/components/global/LanguageSwitcher';
import { ThemeSwitcher } from '@/shared/components/global/ThemeSwitcher';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { label: t('home.title', 'Home'), path: '/' },
    { label: t('users.title', 'Users'), path: '/users' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            {t('app.name', 'React Boilerplate')}
          </Link>

          <nav className="flex items-center gap-6">
            <ul className="flex items-center gap-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                      location.pathname === item.path
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 border-s border-gray-200 dark:border-gray-700 ps-6">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {t('footer.rightsReserved', 'All rights reserved.')}
        </div>
      </footer>
    </div>
  );
};
