<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable search-place="top" v-model="pageTableData" :columns="columns"
              @on-delete="handleDelete"/>
    </Card>
    <div style="margin-top:15px;text-align:center;">
      <Page :total="pageTotal" :current="pageNum" :page-size="pageSize" show-elevator show-total placement="top"
            @on-change="changePage"></Page>

    </div>
  </div>
</template>

<script>
import * as orderList from './data/data'
import Tables from './order/tables'
import {getTableData} from '@/api/data'

export default {
  name: 'tables_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
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
      ],
      pageTotal: 0,
      pageNum: 1,
      pageSize: 15,
      pageTableData: [],
      tableData: orderList.orders
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    },
    changePage (index) {
      var _start = (index - 1) * this.pageSize
      var _end = index * this.pageSize
      this.pageTableData = this.tableData.slice(_start, _end)
    }
  },
  mounted () {
    getTableData().then(res => {
      // this.tableData = res.data
      this.pageTotal = this.tableData.length
      this.pageTableData = this.tableData.slice(0, this.pageSize)
    })
  }
}
</script>

<style>

</style>
