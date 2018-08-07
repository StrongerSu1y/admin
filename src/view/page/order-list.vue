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

export default {
  name: 'tables_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: orderList.ordersTitle,
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
    this.pageTotal = this.tableData.length
    this.pageTableData = this.tableData.slice(0, this.pageSize)
  }
}
</script>

<style>

</style>
