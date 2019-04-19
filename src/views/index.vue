<template>
  <div>
    <le-container>
      <le-aside width="20%" class="aa">11</le-aside>
      <le-main class="bb" >
        <le-header class="header">header</le-header>
        <le-article class="main">
          <le-button type='success' style="margin-left:50px">按钮</le-button>
        </le-article>
        <le-fotter class="fotter">底部</le-fotter>
      </le-main>
    </le-container>
  </div>
</template>

<style scoped>
  .aa {
    background: red;
  }
  .bb {
    background: pink;
  }
  .header {
    height: 40px;
    background: yellow;
  }
  .main {
    background: #e5e5e5;
    min-height: 600px;
  }
  .fotter {
    height: 30px;
    background: #eee;
  }
</style>
