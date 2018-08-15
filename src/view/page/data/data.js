export const userTitle = [
  {
    key: 'username',
    title: '用户名'
  },
  {
    key: 'tel',
    title: '电话号码'
  },
  {
    key: 'password',
    title: '密码'
  },
  {
    key: 'nickname',
    title: '昵称'
  },
  {
    key: 'createdDate',
    title: '创建时间'
  },
  {
    key: 'avatar',
    title: '头像'
  },
  {
    key: 'salt',
    title: '电话号码'
  }
]

export const ordersTitle = [
  {title: '订单编号', key: 'orderId', sortable: true},
  {title: '姓名', key: 'name', editable: true},
  {title: '邮箱', key: 'email', editable: true},
  {title: '订单商品', key: 'goods', editable: true},
  {title: '订单时间', key: 'createTime'},
  {
    title: 'Handle',
    key: 'handle',
    options: ['delete'],
    button: [
      (h, params, vm) => {
        return h('Poptip', {
          props: {
            confirm: true,
            title: '你确定要删除吗?'
          },
          on: {
            'on-ok': () => {
              vm.$emit('on-delete', params)
              // vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
              vm.tableTool(params)
            }
          }
        }, [
          h('Button', '自定义删除')
        ])
      }
    ],
    tableData: []
  }
]

export const orders = [
  {
    orderId: '0001',
    name: 'wangcj',
    email: 'wcj19@163.com',
    goods: '手表',
    createTime: '2018-08-01 14:25'
  },
  {
    orderId: '0002',
    goods: '手表',
    name: 'wangchangfjun',
    email: 'wcj19@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    orderId: '0003',
    goods: '手表',
    name: 'wcj',
    email: 'wcj19921220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    orderId: '0004',
    goods: '手表',
    name: 'guanbao',
    email: 'wcj12163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    orderId: '0005',
    goods: '手表',
    name: 'meimei',
    email: 'wcj199210@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    orderId: '0006',
    goods: '手表',
    name: 'renyan',
    email: 'wcj19920@3.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'nihao',
    orderId: '0007',
    goods: '手表',
    email: 'wcj19921@163.com',
    createTime: '2018-08-01 14:25'
  },

  {
    name: 'huiyuanyi',
    orderId: '0008',
    goods: '手表',
    email: 'wcj11220@163.com',
    createTime: '2018-08-01 14:25'
  },

  {
    name: 'shentangk',
    orderId: '0009',
    goods: '手表',
    email: 'j19921220@163.com',
    createTime: '2018-08-01 14:25'
  },

  {
    name: 'wangfei',
    orderId: '0010',
    goods: '手表',
    email: '19921220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'fangah',
    orderId: '0011',
    goods: '手表',
    email: 'wcj21220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'xueyu',
    orderId: '0012',
    goods: '手表',
    email: 'wcj19920@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'yikan',
    orderId: '0013',
    goods: '手表',
    email: 'wcj121220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'xiaogui',
    orderId: '0014',
    goods: '手表',
    email: 'wcj21220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'ziran',
    orderId: '0015',
    goods: '手表',
    email: 'wcj19920@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'wangcj',
    orderId: '0016',
    goods: '手表',
    email: 'wcj121220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'zengjia',
    orderId: '0017',
    goods: '手表',
    email: 'wcj21220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'wangcj',
    orderId: '0018',
    goods: '手表',
    email: 'wcj19920@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'mumu',
    orderId: '0019',
    goods: '手表',
    email: 'wcj121220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'fnanf',
    orderId: '0020',
    goods: '手表',
    email: 'w19921220@163.com',
    createTime: '2018-08-01 14:25'
  }
]

export const roleTitle = [
  {
    key: 'name',
    title: '用户名'
  },
  {
    key: 'slug',
    title: '权限'
  },
  {
    key: 'createdDate',
    title: '创建时间'
  }
]
