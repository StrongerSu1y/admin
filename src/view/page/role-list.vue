<style lang="less">
  @import '../../style/common.less';
  @import './user/table.less';
</style>

<template>
  <div style="height: 100%">
    <Row :gutter="10">
      <Col span="24">
      <Card>
        <p slot="title">
          <Icon type="help-buoy"></Icon>
          请输入查询条件
        </p>
        <Row>
          用户名
          <Input 
            class="nameInput" 
            v-model="searchConName" 
            @on-change="handleSearch2" 
            icon="search"
            placeholder="请输入姓名..."
            style="width: 200px"/>
        </Row>
        <Row class="margin-top-10 searchable-table-con1">
          <Table :columns="columns1" :data="pageUserList"></Table>
        </Row>
      </Card>
      </Col>
    </Row>
    <div class="page-style">
      <Page :total="pageTotal" :current="pageNum" :page-size="pageSize" show-elevator show-total placement="top"
            @on-change="changePage"></Page>
    </div>
  </div>
</template>

<script>
import * as data from './data/data'
import * as consts from './data/const'
import axios from 'axios'
import { getToken } from '@/libs/util'

export default {
  name: 'searchable-table',
  data () {
    return {
      searchConName: '',
      columns1: data.roleTitle,
      userList: [],
      pageUserList: [],
      initTable: [],
      pageTotal: 0,
      pageNum: 1,
      pageSize: 15
    }
  },
  methods: {
    init () {
      var self = this
      var url = consts.baseUrl + 'admin/role/list'
      var token = 'Bearer ' + getToken()
      axios({
        method: 'get',
        url: url,
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        withCredentials: true
      }).then(function (response) {
        console.log('用户', response.data.data.data)
        self.userList = self.initTable = response.data.data.data
        self.pageTotal = self.userList.length
        self.pageUserList = self.userList.slice(0, self.pageSize)
      }).catch(function (error) {
        console.log(error)
      })
    },

    changePage (index) {
      var _start = (index - 1) * this.pageSize
      var _end = index * this.pageSize
      this.pageUserList = this.userList.slice(_start, _end)
    },
    search (data, argumentObj) {
      let res = data
      let dataClone = data
      for (let argu in argumentObj) {
        if (argumentObj[argu].length > 0) {
          res = dataClone.filter(d => {
            return d[argu].indexOf(argumentObj[argu]) > -1
          })
          dataClone = res
        }
      }
      return res
    },
    handleSearch2 () {
      this.userList = this.initTable
      this.userList = this.search(this.userList, {username: this.searchConName})
      this.pageTotal = this.userList.length
      this.pageUserList = this.userList.slice(0, this.pageSize)
    }

  },
  mounted () {
    this.init()
  }
}
</script>
