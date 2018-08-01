import Main from '@/view/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          hideInMenu: true,
          notCache: true,
          title: '首页'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: Main,
    meta: {
      title: '用户',
    },
    children: [
      {
        path: '/user-list',
        name: 'user-list',
        meta: {
          icon: 'ios-contact',
          title: '用户管理'
        },
        component: () => import('@/view/page/user-list.vue')
      }
    ]
  },
  {
    path: '/pay',
    name: 'payment',
    meta: {
      icon: 'logo-buffer',
      title: '订单系统'
    },
    component: Main,
    children: [
      {
        path: '/pay-list',
        name: 'pay-list',
        meta: {
          icon: '_qq',
          title: '支付管理'
        },
        component: () => import('@/view/page/pay-list.vue')
      },
      {
        path: '/order-list',
        name: 'order-list',
        meta: {
          icon: '_qq',
          title: '订单管理'
        },
        component: () => import('@/view/page/order-list.vue')
      },
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      icon: 'ios-construct',
      title: '系统设置'
    },
    component: Main,
    children: [
      {
        path: '/my-info',
        name: 'my-info',
        meta: {
          icon: 'md-settings',
          title: '个人信息'
        },
        component: () => import('@/view/page/my-info.vue')
      },
      {
        path: '/refuse-pwd',
        name: 'refuse-pwd',
        meta: {
          icon: 'my-lock',
          title: '修改密码'
        },
        component: () => import('@/view/page/refuse-pwd.vue')
      },
    ]
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'logo-buffer',
      title: '组件'
    },
    component: Main,
    children: [
      {
        path: 'count_to_page',
        name: 'count_to_page',
        meta: {
          icon: 'md-trending-up',
          title: '数字渐变'
        },
        component: () => import('@/view/components/count-to/count-to.vue')
      },
      // {
      //   path: 'tables_page',
      //   name: 'tables_page',
      //   meta: {
      //     icon: 'md-grid',
      //     title: '多功能表格'
      //   },
      //   component: () => import('@/view/components/tables/tables.vue')
      // },
      {
        path: 'icons_page',
        name: 'icons_page',
        meta: {
          icon: '_bear',
          title: '自定义图标'
        },
        component: () => import('@/view/components/icons/icons.vue')
      }
    ]
  },
  // {
  //     path: '/update',
  //     name: 'update',
  //     meta: {
  //         icon: 'md-cloud-upload',
  //         title: '数据上传'
  //     },
  //     component: Main,
  //     children: [
  //         {
  //             path: 'update_table_page',
  //             name: 'update_table_page',
  //             meta: {
  //                 icon: 'ios-document',
  //                 title: '上传Csv'
  //             },
  //             component: () => import('@/view/update/update-table.vue')
  //         },
  //         {
  //             path: 'update_paste_page',
  //             name: 'update_paste_page',
  //             meta: {
  //                 icon: 'md-clipboard',
  //                 title: '粘贴表格数据'
  //             },
  //             component: () => import('@/view/update/update-paste.vue')
  //         }
  //     ]
  // },
  // {
  //     path: '/multilevel',
  //     name: 'multilevel',
  //     meta: {
  //         icon: 'md-menu',
  //         title: '多级菜单'
  //     },
  //     component: Main,
  //     children: [
  //         {
  //             path: 'level_2_1',
  //             name: 'level_2_1',
  //             meta: {
  //                 icon: 'arrow-graph-up-right',
  //                 title: '二级-1'
  //             },
  //             component: () => import('@/view/multilevel/level-2-1.vue')
  //         },
  //         {
  //             path: 'level_2_2',
  //             name: 'level_2_2',
  //             meta: {
  //                 access: ['super_admin'],
  //                 icon: 'arrow-graph-up-right',
  //                 showAlways: true,
  //                 title: '二级-2'
  //             },
  //             component: parentView,
  //             children: [
  //                 {
  //                     path: 'level_2_2_1',
  //                     name: 'level_2_2_1',
  //                     meta: {
  //                         icon: 'arrow-graph-up-right',
  //                         title: '三级'
  //                     },
  //                     component: () => import('@/view/multilevel/level-2-2/level-3-1.vue')
  //                 }
  //             ]
  //         },
  //         {
  //             path: 'level_2_3',
  //             name: 'level_2_3',
  //             meta: {
  //                 icon: 'arrow-graph-up-right',
  //                 title: '二级-3'
  //             },
  //             component: () => import('@/view/multilevel/level-2-3.vue')
  //         },
  //     ]
  // },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
