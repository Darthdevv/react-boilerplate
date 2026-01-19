import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/components/ui/Card';
import { Users, DollarSign, Activity, Server, UserPlus } from 'lucide-react';

export const DashboardPage = () => {
  const { t } = useTranslation();

  const stats = [
    {
      title: t('dashboard.activeUsers', 'Active Users'),
      value: '1,234',
      change: '+12%',
      isPositive: true,
      icon: Users,
    },
    {
      title: t('dashboard.revenue', 'Revenue'),
      value: '$12,345',
      change: '+5%',
      isPositive: true,
      icon: DollarSign,
    },
    {
      title: t('dashboard.bounceRate', 'Bounce Rate'),
      value: '42%',
      change: '-2%',
      isPositive: true,
      icon: Activity,
    },
    {
      title: t('dashboard.serverLoad', 'Server Load'),
      value: '23%',
      change: '+1%',
      isPositive: false,
      icon: Server,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {t('dashboard.welcome', 'Welcome Back!')}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {t('dashboard.subtitle', 'Here is what is happening with your projects today.')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</h3>
              <stat.icon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </div>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
              <span
                className={`text-sm font-medium ${stat.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
              >
                {stat.change}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title={t('dashboard.recentActivity', 'Recent Activity')} className="min-h-[300px]">
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-3 border-b border-gray-100 dark:border-gray-700 last:border-0"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <UserPlus size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {t('dashboard.newUserJoined', 'New user Registered')}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {t('dashboard.justNow', 'Just now')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title={t('dashboard.systemStatus', 'System Status')} className="min-h-[300px]">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('dashboard.cpuUsage', 'CPU Usage')}
                </span>
                <span className="text-sm text-gray-500">45%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('dashboard.memoryUsage', 'Memory')}
                </span>
                <span className="text-sm text-gray-500">60%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('dashboard.storageUsage', 'Storage')}
                </span>
                <span className="text-sm text-gray-500">75%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
