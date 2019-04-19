<template>
  <div>
    <le-container direction="vertical">
      <le-header class="header" >我是头部</le-header>
      <le-nav class="nav" height="60px" >我是导航</le-nav>
      <le-main direction="horizontal">
        <le-article class="article" >我是左边栏目</le-article>
        <le-aside class="aside"  height="200px" >我是右边栏</le-aside>
      </le-main>
      <le-fotter class="fotter" height="100px">我是页脚</le-fotter>
    </le-container>
  </div>  
</template>

<script>
import  { checkUserAgent } from '@/le-ui-vue-components/util/checkUseAgent'
export default {
  data() {
    return {
      
    }
  },
  created() {
    checkUserAgent()
  },
  mounted () {
  }
}
</script>

<style scoped>
  .header {
    height: 50px;
    background: blue;
    color: #fff;
  }
  .nav {
    color: #fff;
    background: red;
  }
  .article {
    color: #fff;
    background: pink;
    height: 70px;
  }
  .aside {
    background: yellow;
    height: 70px;
  }
  .fotter {
    background: #eee;
    height: 45px;
  }
</style>
