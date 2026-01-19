import { createBrowserRouter } from 'react-router-dom';
import { DashboardPage } from '@/features/dashboard/pages/DashboardPage';
import { UsersPage } from '@/features/users/pages/UsersPage';
import { NotFound } from '@/shared/components/fallback/NotFoundPage';
import { ErrorPage } from '@/shared/components/fallback/ErrorPage';
import { LayoutWrapper } from '@/shared/components/layout/LayoutWrapper';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
