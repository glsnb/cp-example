/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from "../components/layout/default";

export default [
  {
    path: "/",
    redirect: "/home",
    component: Main,
    children: [
      {
        path: "/home",
        component: () => import(/* webpackChunkName: "home" */ "../page/home")
      },
      {
        path: "/data-report",
        component: () =>
          import(/* webpackChunkName: "data-report" */ "../page/data-report")
      }
    ]
  }
  // {
  //     path: '/401',
  //     name: 'error_401',
  //     meta: {
  //         hideInMenu: true
  //     },
  //     component: () => import('@/view/error-strategy/401.vue')
  // },
  // {
  //     path: '/500',
  //     name: 'error_500',
  //     meta: {
  //         hideInMenu: true
  //     },
  //     component: () => import('@/view/error-page/500.vue')
  // },
  // {
  //     path: '*',
  //     name: 'error_404',
  //     meta: {
  //         hideInMenu: true
  //     },
  //     component: () => import('@/view/error-page/404.vue')
  // }
];
