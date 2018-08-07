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
          用户名&nbsp;&nbsp;&nbsp;&nbsp;<Input v-model="searchConName" @on-change="handleSearch2" icon="search"
                                            placeholder="请输入姓名..."
                                            style="width: 200px"/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;手机号码&nbsp;&nbsp;&nbsp;&nbsp;<Input v-model="searchConTel"
                                                                                             @on-change="handleSearch2"
                                                                                             icon="search"
                                                                                             placeholder="请输入手机号..."
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
import axios from 'axios'

export default {
  name: 'searchable-table',
  data () {
    return {
      searchConName: '',
      searchConTel: '',
      columns1: data.userTitle,
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
      var url = 'http://10.0.0.24:8100/admin/user/list'
      axios({
        method: 'get',
        url: url,
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGUiOjE1MzM1NDQyNzk2OTAsImV4cCI6MTUzNDE0OTA3OSwidXNlcm5hbWUiOiJ3YW5nY2oifQ.bEOoAqmgT1_x8cXgHato_TwxwSEhaco7OJsvaA8mDG4'
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
      this.userList = this.search(this.userList, {username: this.searchConName, tel: this.searchConTel})
      this.pageTotal = this.userList.length
      this.pageUserList = this.userList.slice(0, this.pageSize)
    }

  },
  mounted () {
    this.init()
  }
}
</script>
