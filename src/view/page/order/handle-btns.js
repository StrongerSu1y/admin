const btns = {
  delete: (h, params, vm) => {
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
      h('Button', {
        props: {
          type: 'text'
        }
      }, [
        h('Icon', {
          props: {
            type: 'md-trash',
            size: 18,
          }
        })
      ])
    ])
  }
}

export default btns
