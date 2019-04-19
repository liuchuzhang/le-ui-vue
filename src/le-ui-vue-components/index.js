import { layoutList } from './layout/index.js'
import { viewList } from './viewComponents/index.js'
// import leContainer from './layout/le-container'
// import leHeader from './layout/le-header'
// import leNav from './layout/le-nav'
// import leMain from './layout/le-main'
//   import leArticle from './layout/le-article'
// // import leAside from './'

// import leDialog from './le-dialog'
// import leButton from './le-button'

const commentsList = [].concat(layoutList).concat(viewList)

// const commentsList = [
//    leHeader, leNav, leMain, leArticle, leDialog, leButton
// ]

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