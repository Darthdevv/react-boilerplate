import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Card = ({ title, children, className = '' }: CardProps) => {
  return (
    <div
      className={`bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 transition-all hover:shadow-md ${className}`}
    >
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      )}
      <div className="text-gray-600 dark:text-gray-300">{children}</div>
    </div>
  );
};
