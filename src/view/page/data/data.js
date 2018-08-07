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
              vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
            }
          }
        }, [
          h('Button', '自定义删除')
        ])
      }
    ]
  }
]

export const orders = [
  {
    orderId: '20180013523',
    name: 'wangcj',
    email: 'wcj19@163.com',
    goods: '手表',
    createTime: '2018-08-01 14:25'
  },
  {
    orderId: '201800187434',
    goods: '手表',
    name: 'wangchangfjun',
    email: 'wcj19@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    orderId: '201800126262',
    goods: '手表',
    name: 'wcj',
    email: 'wcj19921220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    orderId: '201800163467',
    goods: '手表',
    name: 'guanbao',
    email: 'wcj12163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    orderId: '201800186422',
    goods: '手表',
    name: 'meimei',
    email: 'wcj199210@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    orderId: '20180011515',
    goods: '手表',
    name: 'renyan',
    email: 'wcj19920@3.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'xulihui',
    orderId: '468464646',
    goods: '手表',
    email: 'wcj19921@163.com',
    createTime: '2018-08-01 14:25'
  },

  {
    name: 'huiyuanyi',
    orderId: '20180015656884',
    goods: '手表',
    email: 'wcj11220@163.com',
    createTime: '2018-08-01 14:25'
  },

  {
    name: 'shentangk',
    orderId: '201800146226',
    goods: '手表',
    email: 'j19921220@163.com',
    createTime: '2018-08-01 14:25'
  },

  {
    name: 'wangfei',
    orderId: '20180015776',
    goods: '手表',
    email: '19921220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'fangah',
    orderId: '20180013156',
    goods: '手表',
    email: 'wcj21220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'xueyu',
    orderId: '2018001883725',
    goods: '手表',
    email: 'wcj19920@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'yikan',
    orderId: '2018001156464',
    goods: '手表',
    email: 'wcj121220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'xiaogui',
    orderId: '20180015234657',
    goods: '手表',
    email: 'wcj21220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'ziran',
    orderId: '2018001154656',
    goods: '手表',
    email: 'wcj19920@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'wangcj',
    orderId: '2018001654732',
    goods: '手表',
    email: 'wcj121220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'zengjia',
    orderId: '20180011565435',
    goods: '手表',
    email: 'wcj21220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'wangcj',
    orderId: '2018001646543',
    goods: '手表',
    email: 'wcj19920@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'mumu',
    orderId: '201800136446724',
    goods: '手表',
    email: 'wcj121220@163.com',
    createTime: '2018-08-01 14:25'
  },
  {
    name: 'fnanf',
    orderId: '201800134645215',
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
