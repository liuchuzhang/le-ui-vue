<template>
  <div class="le-button">
    <button :class="`le-button-${type} le-button-${size}`" @click="$emit('click')" :style="btnStyle">
      <span><slot></slot></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'leButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'middle'
    },
    btnStyle: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>
  .le-button {
    display: inline-block;
  }
  .le-button button {
    width: 100%;
    border-radius: 4px;
    outline: none;
    white-space: nowrap;
    transition: all 0.3s;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #dcdfe6;
  }
  .le-button .le-button-default:hover {
    background-color: #B0E2FF;
    color: #00B2EE;
    border-color: #7EC0EE;
  }
  .le-button .le-button-default:active {
    border-color: #1E90FF;
  }
  .le-button .le-button-default {
    background-color: #fff;
    color: #606266;
    border: 1px solid #dcdfe6;
  }
  .le-button .le-button-primary {
    background-color: #409eff;
    color: #fff;
    border-color:#409eff;
  }
  .le-button .le-button-primary:hover {
    opacity: .8;
  }
  .le-button .le-button-primary:active {
    opacity: 1;
  }
  .le-button .le-button-success {
    background-color: #67c23a;
    color: #fff;
    border-color: #67c23a;
  }
  .le-button .le-button-success:hover {
    opacity: .8;
  }
  .le-button .le-button-success:active {
    opacity: 1;
  }
  .le-button .le-button-danger {
    background-color: #f56c6c;
    color: #fff;
    border-color: #f56c6c;
  }
  .le-button .le-button-danger:hover {
    opacity: .8;
  }
  .le-button .le-button-danger:active {
    opacity: 1;
  }

  .le-button .le-button-large {
    padding: 16px 24px;
  }
  .le-button .le-button-middle {
    padding: 12px 20px;
  }
  .le-button .le-button-small {
    padding: 6px 9px;
    font-size: 12px;
  }
</style>