// src/data/menuTree.jsx
import Dashboard from '../components/menuComponents/Dashboard';
import Reports from '../components/menuComponents/Reports';
import Settings from '../components/menuComponents/Settings';
import DailyReport from '../components/menuComponents/Reports/DailyReport';
import MonthlyReport from '../components/menuComponents/Reports/MonthlyReport';

export const menuTree = {
  title: 'Root',
  children: [
    {
      title: 'Dashboard',
      link: '/dashboard',
      component: Dashboard,
    },
    {
      title: 'Reports',
      link: '/reports',
      component: Reports,
      children: [
        {
          title: 'Daily Report',
          link: '/reports/daily',
          component: DailyReport
        },
        {
          title: 'Monthly Report',
          link: '/reports/monthly',
          component: MonthlyReport
        },
      ],
    },
    {
      title: 'Settings',
      link: '/settings',
      component: Settings,
    },
  ],
};
