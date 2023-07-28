import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/system',
    name: 'system',
    component: Layout,
    redirect: '/system/dept',
    meta: { title: '系统管理', icon: 'setting' },
    children: [
      {
        path: 'dept',
        name: 'dept',
        component: () => import('@/pages/system/dept/index.vue'),
        meta: { title: '部门' },
      },
    ],
  },
];
