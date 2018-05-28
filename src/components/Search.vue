<template>
    <div>
        <h2>面向主题的搜索引擎</h2>
        <div class="searchImg">
         <img src="../assets/img/searchImg.jpg">
        </div>

        <div class="inputDiv">
            <el-input v-model="input" placeholder="请输入内容">
               <el-button slot="append" icon="el-icon-search" v-on:click="startSearch"></el-button>
            </el-input>
        </div>
    </div>
</template>
<script>
export default {
     data() {
    return {
      input: ''
    }
  },
  methods:{
      startSearch:function (event) {
          let data = {
              'title':this.input
          }
          this.$router.push({
                path:'/show', 
               query:{'text':encodeURIComponent(this.input)}})
        //   SearchData(data).then(res => {
        //       if (res['meta']['code'] == '0') {
        //           this.$message.success('登录成功')
        //           this.$router.push({
        //           path:'/show', 
        //           query:{'text':encodeURIComponent(this.input)}})
        //       } else {
        //           this.$message.success('登录失败')
        //       }
              
        //   })
      }

  }
}
</script>

<style scoped>
.searchImg {
    width: 100%;
    height: 190px;
}

.searchImg img {
    width: 190px;
    height: 190px;
}

.inputDiv {
    margin: 0 auto;
    margin-top: 60px;
    width: 700px;
    text-align: center;
}
</style>