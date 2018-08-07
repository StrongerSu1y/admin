import Main from '@/view/main'

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
      title: '用户'
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
      }
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
          icon: 'md-lock',
          title: '修改密码'
        },
        component: () => import('@/view/page/refuse-pwd.vue')
      }
    ]
  },
  {
    path: '/role',
    name: 'role',
    component: Main,
    meta: {
      title: '角色'
    },
    children: [
      {
        path: '/role-list',
        name: 'role-list',
        meta: {
          icon: 'ios-contacts',
          title: '角色管理'
        },
        component: () => import('@/view/page/role-list.vue')
      }
    ]
  },
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
