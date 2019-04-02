<template>
  <div style="height:5000px">
    <le-button btnStyle="background:red;color:#fff">默认按钮</le-button>
   <le-button type='primary' @click="bb" style="margin-right:20px" class="nn">我是按钮</le-button>
   <le-button type='success' size='small' style="margin-right:20px">成功按钮</le-button>
   <le-button type="danger" size='large'>危险按钮</le-button>
     <le-dialog :visibilty.sync="visibilty" :onMask='false' title="就是" titleColor="red" >
      <le-button @click="aa">点击</le-button >
    </le-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibilty: false,
      tit: "color:red; font-size: 30px"
    }
  },
 
  methods: {
    aa () {
      this.visibilty = false
      console.log(this.visibilty,'bishi ')
    },
    bb () {
      console.log(222222)
    }
  },
}
</script>

<style scoped>
 
</style>
