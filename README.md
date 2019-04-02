# le-ui-vue

# 安装插件
```
npm install le-ui-vue
```

### 全局引入插件
```
import xxx from 'le-ui-vue'
```

### 引入样式
```
import xxx from 'le-ui-vue/lib/@le-ui-vue.css'
```

### 文档
```
对话框：<le-dialog></le-dialog>
属性: onMask: Boolean值,是否点击蒙版消失，默认true
      title: String类型，对话框标题
      visibilty.sync: Boolean类型，是否显示对话框
      titleStyle: String类型，标题样式，用法同style

按钮: <le-button></le-button>
属性： type: String类型，按钮类型, 默认值为default，可能值为： default，primary，success，danger
       size: String类型， 按钮大小，默认值为middle，可能值为： small,middle,large
       btnStyle： String类型， 按钮自定义样式， 用法同style
```