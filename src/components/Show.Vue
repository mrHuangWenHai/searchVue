<template>
<div>
  <el-input placeholder="请输入内容" v-model="input" prefix-icon="el-icon-search" class="inputText">
            <el-button slot="append" icon="el-icon-search" v-on:click="startSearch"></el-button>
  </el-input>
  <div class="showDiv">
      <div class="productShow" v-for="(item, index) in result" :key = index>
          <a :href ='item.url'>{{item.title}}</a>
          <el-card class="box-card">
              <img :src='item.image' class="image">
              <h2>产品介绍</h2>
              <div class="text item">
                  {{'平台: '+item.platform}}
              </div>
              <div class="text item price">
                  价格: <span>{{item.price}}</span>
              </div>
              <div>
                  {{'已售出: '+item.deal}}
              </div>
               <div class="text item">
                   {{'商店: '+item.shop}}
               </div>
               <div class="text item">
                   {{'地理位置: '+item.location}}
               </div>
          </el-card>
      </div>

      <el-pagination class="pagination"  background layout="prev, pager, next" :total="pageCount"  @current-change="pageChange"></el-pagination>
  </div>

</div>
</template>

<style scoped>
a {
    text-decoration:underline;
    color: Blue;
    display:block;
    text-align:left;
}

.inputText{
    width: 60%;
    float: left;
}

.showDiv{
    clear: both;
}
  .text {
    font-size: 14px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

  .productShow{
      margin-top: 30px;
  }

  .pagination {
      margin-top: 30px;
  }

  .price span{
      color: red;
  }
</style>

<script>
import {SearchData} from '@/util/getdata'
export default {
    data() {
    return {
      input: decodeURIComponent(this.$route.query.text),
      result:[],
      pageCount:0
    }
  },
  methods:{
       startSearch:function (event) {
       
       },
       pageChange(event) {
           let data = {
               'title':this.input,
               'page':event
           }

           SearchData(data).then(res => {
            if (res['meta']['code'] == '0') {
               this.result = res['data']['list']
               this.pageCount = parseInt(res['data']['count']) 
            } 
          })

       }
  },
  mounted: function () {
    let data = {
              'title':this.input
     }
   SearchData(data).then(res => {
            if (res['meta']['code'] == '0') {
               this.result = res['data']['list']
               this.pageCount = parseInt(res['data']['count']) 
            } 
          })
  }

}
</script>
