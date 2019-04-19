<template>
 <transition name="le-dialog-fade">
    <div v-if="loading">
      <div class="le-dialog" >
        <!-- <i class="close-icon"></i> -->
        <div v-if="title" class="le-dialog-title" :style="titleStyle">{{title}}</div>
          <slot></slot>
        </div> 
      <div class="mask" @click="onMask ? onClose() : null " v-if="loading"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'leDialog',
  props: {
    visibilty: {
      type: Boolean,
      default: false
    },
    onMask: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    },
    titleStyle: {
      type: String,
      default: ""
    }
  },
  methods: {
    onClose () {
      this.$emit("update:visibilty",false)
    }
  },
  computed: {
    loading () {
      if(this.visibilty) {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      }
      else {
        document.getElementsByTagName('body')[0].style.overflow = 'visible'
      }
      return this.visibilty || false
    }
  },
}
</script>
<style scoped>
  @import url('../theme/p-class.css');
  @import url('../theme/icon.css');
</style>

<style scoped>
  .le-dialog {
    z-index: 1001;
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff; 
    border-radius: 5px;
  } 
  .le-dialog-title {
    font-size: 20px;
    color: #696969;
  }
  .le-dialog-fade-enter-active, .le-dialog-fade-leave-active {
    transition: all .5s;
  }
  .le-dialog-fade-enter, .le-dialog-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>