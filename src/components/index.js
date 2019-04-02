import leDialog from './le-dialog.vue'
import leButton from './le-button.vue'

const commentsList = [
  leDialog,leButton
]

const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  commentsList.map(component => Vue.component(component.name, component))
}

// 检测到 Vue 才执行
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


export default {
  install,
  ...commentsList
}