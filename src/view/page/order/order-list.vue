<template>
  <div>
    <!-- <Card>
      <Tables 
        ref="tables" 
        editable 
        searchable 
        search-place="top" 
        v-model="pageTableData" 
        :columns="columns"
        @on-delete="handleDelete"
      />
    </Card> -->
    <Card>
      <div v-if="searchable && searchPlace === 'top'" class="search-con search-con-top">
        <Select v-model="searchKey" class="search-col">
          <Option v-for="item in this.columns" v-if="item.key !== 'handle'" :value="item.key" :key="`search-col-${item.key}`">{{ item.title }}</Option>
        </Select>
        <Input placeholder="输入关键字搜索" class="search-input" v-model="searchValue"/>
        <Button @click="handleSearch" class="search-btn" type="primary">搜索</Button>
      </div>
      <Table
        ref="tables"
        editable
        search-place="top"
        :columns="insideColumns"
        :data="pageInsideData"
        :border="border"
        :show-header="showHeader"
        :width="width"
        :height="height"
        :loading="loading"
        :highlight-row="highlightRow"
        :size="size"
        :no-data-text="noDataText"
        :no-filtered-data-text="noFilteredDataText"
        @on-delete="handleDelete"
        @on-select="onSelect"
        @on-select-cancel="onSelectCancel"
        @on-select-all="onSelectAll"
        @on-selection-change="onSelectionChange"
        @on-sort-change="onSortChange"
        @on-filter-change="onFilterChange"
        @on-row-click="onRowClick"
        @on-row-dblclick="onRowDblclick"
        @tableTool="tableTool"
      >
        <slot name="header" slot="header"></slot>
        <slot name="footer" slot="footer"></slot>
        <slot name="loading" slot="loading"></slot>
      </Table>
    </Card>
    <div style="margin-top:15px;text-align:center;">
      <Page 
        ref="pager"
        :total="pageTotal"
        :current="pageNum"
        :page-size="pageSize"
        show-elevator 
        show-total 
        placement="top"
        @on-change="changePage"
      >
      </Page>
    </div>
  </div>
</template>

<script>
import * as orderList from '../data/data'
import TablesEdit from './edit.vue'
import handleBtns from './handle-btns'

export default {
  name: 'tables_page',
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    size: String,
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    border: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    highlightRow: {
      type: Boolean,
      default: false
    },
    context: {
      type: Object
    },
    noDataText: {
      type: String
    },
    noFilteredDataText: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * @description 全局设置是否可编辑
     */
    editable: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否可搜索
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * @description 搜索控件所在位置，'top' / 'bottom'
     */
    searchPlace: {
      type: String,
      default: 'top'
    }
  },
  data () {
    return {
      columns: orderList.ordersTitle, // table标题
      pageTotal: 0, // 总页数
      pageNum: 1, // 当前显示页码
      pageSize: 4, // 每页显示条数
      rawData: orderList.orders,
      tableData: [], // 加载全部数据
      insideColumns: [], // 列信息处理
      insideData: [], // 条件搜索后数据
      pageInsideData: [], // 当前条件下所展示数据
      edittingCellId: '',
      edittingText: '',
      searchValue: '', // 搜索关键字
      searchKey: '', // 条件搜索key,
      _start: 0,
      _end: 0,
      delBeforeData: []
    }
  },
  created () {
  },
  components: {
  },
  methods: {
    handleDelete (params) {
      console.log('on-delete')
      console.log(params)
    },
    // 删除行
    tableTool (params) {
      this.delBeforeData = params.tableData.filter((item, index) => index !== params.row.initRowIndex)
      this.rawData = this.delBeforeData
    },
    changePage (index) {
      this._start = (index - 1) * this.pageSize
      this._end = index * this.pageSize
      // this.pageInsideData = this.tableData.slice(this._start, this._end)
      // 给 insideDate 设置默认值    不改变tableDate情况下操作原始数据
      this.pageInsideData = this.insideData.slice(this._start, this._end)
    },
    handleColumns (col) {
      this.insideColumns = col.map((item, index) => {
        let res = item
        // if (res.editable) res = this.suportEdit(res, index)
        if (res.key === 'handle') res = this.surportHandle(res) // 自定义删除方法
        return res
      })
    },
    suportEdit (item, index) {
      item.render = (h, params) => {
        return h(TablesEdit, {
          props: {
            params: params,
            value: this.insideData[params.index][params.column.key],
            edittingCellId: this.edittingCellId,
            editable: this.editable
          },
          on: {
            'input': val => {
              console.log(val)
              this.edittingText = val
            },
            'on-start-edit': (params) => {
              this.edittingCellId = `editting-${params.index}-${params.column.key}`
              this.$emit('on-start-edit', params)
            },
            'on-cancel-edit': (params) => {
              this.edittingCellId = ''
              this.$emit('on-cancel-edit', params)
            },
            'on-save-edit': (params) => {
              this.value[params.index][params.column.key] = this.edittingText
              this.$emit('input', this.value)
              this.$emit('on-save-edit', Object.assign(params, {value: this.edittingText}))
              this.edittingCellId = ''
            }
          }
        })
      }
      return item
    },
    surportHandle (item) {
      let options = item.options || [] //delete
      let insideBtns = []
      options.forEach(item => { // delete
        if (handleBtns[item]) insideBtns.push(handleBtns[item])
      })
      let btns = item.button ? [].concat(insideBtns, item.button) : insideBtns
      item.render = (h, params) => {
        params.tableData = this.tableData
        return h('div', btns.map(item => item(h, params, this)))
      }
      return item
    },
    setDefaultSearchKey () {
      this.searchKey = this.columns[0].key !== 'handle' ? this.columns[0].key : (this.columns.length > 1 ? this.columns[1].key : '')
    },
    // 搜索
    handleSearch () {
      if (this.searchKey && this.searchValue) {
        // 筛选后数据
        this.insideData = this.tableData.filter(item => item[this.searchKey].indexOf(this.searchValue) > -1)
        // 更新筛选后数据
        this.updataPage()
      } else {
        this.$Message.warning('请选择搜索条件与关键字')
        this.handleTableData()
        this.page()
      }
    },
    // 渲染表格
    handleTableData () {
      this.insideData = this.tableData.map((item, index) => {
        let res = item
        res.initRowIndex = index
        return res
      })
      this.pageInsideData = this.insideData
    },
    // 多选回调方法
    onSelect (selection, row) {
      this.$emit('on-select', selection, row)
    },
    onSelectCancel (selection, row) {
      this.$emit('on-select-cancel', selection, row)
    },
    onSelectAll (selection) {
      this.$emit('on-select-all', selection)
    },
    onSelectionChange (selection) {
      this.$emit('on-selection-change', selection)
    },
    // 排序触发方法
    onSortChange (column, key, order) {
      this.$emit('on-sort-change', column, key, order)
    },
    // 筛选触发方法
    onFilterChange (row) {
      this.$emit('on-filter-change', row)
    },
    // 点击行触发
    onRowClick (row, index) {
      this.$emit('on-row-click', row, index)
    },
    onRowDblclick (row, index) {
      this.$emit('on-row-dblclick', row, index)
    },    
    // 重新赋值数据
    initialize () {
      this.tableData = this.rawData
      this.insideData = this.rawData
    },
    // 重新加载全部数据
    page () {
      // 重新渲染后将默认页码恢复
      this.$refs.pager.currentPage = 1
      // 数据总条数
      this.pageTotal = this.tableData.length
      // 默认显示第一页
      this.pageInsideData = this.tableData.slice(0, this.pageSize)
    },
    // 数据变化后展示处理
    updataPage () {
      this.pageTotal = this.insideData.length
      this.pageInsideData = this.insideData.slice(0, this.pageSize)
      // 重新渲染后将默认页码恢复
      this.$refs.pager.currentPage = 1
    }
  },
  mounted () {
    this.initialize()
    this.handleColumns(this.columns)
    this.handleTableData()
    this.page()
  },
  watch: {
    columns (columns) {
      this.handleColumns(columns)
      this.setDefaultSearchKey()
    },
    // 监听数据变化
    rawData () {
      this.initialize()
      this.handleTableData()
      this.updataPage()
    }
  }
}
</script>

<style lang="less" scoped>
  @import './index.less';
</style>

