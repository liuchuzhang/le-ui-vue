# le-ui-vue

# 安装插件
```
npm install le-ui-vue
```

### 全局引入插件
```
import xxx from 'le-ui-vue'
Vue.use(xxx)
```



### 文档
```
布局： <le-container></le-container> -----布局父级组件
      <le-main></le-main> ---- 主体内容包裹组件 
      <le-header></leheader>  -----头部组件
      <le-nav></le-nav> ------导航组件
      <le-aside></le-aside> ----- 左侧边栏组件
      <le-article></le-article> ----- 右侧边栏组件
      <le-fotter></le-fotter> ----- 底部组件
tips:  组件布局采用的是flex布局，默认采用的是flex-direction：column布局，两个父级组件,<le-container></le-container>  <le-main></le-main> , 其余都是嵌套在父级组件里的子组件, 所有组件上都有width和height属性，可直接对组件本身设置宽度和高度。
       如果对子组件设置了width， 那包裹它的父级组件flex布局则会变成flex-direction：row，除非强制在父级组件上指定direction属性，direction属性接收两个值，horizontal和vertical，分别代表强制指定父级组件水平布局和垂直布局
       例子：比如经典的上面导航，中间两栏布局 ，底部fotter，可以这样写：
       <le-container>
            <le-header></le-header>
            <le-nav></le-nav>
            <le-main direction="horizontal">
                  <le-aside></le-aside>
                  <le-article></le-article>
            </le-main>
            <le-fotter></le-fotter>
       </le-container>
       也可以这样写：
       <le-container>
            <le-header></le-header>
            <le-nav></le-nav>
            <le-main>
                  <le-aside width="...."></le-aside>
                  <le-article></le-article>
            </le-main>
            <le-fotter></le-fotter>
       </le-container>

轮播： <le-swiper></le-swiper> 
属性： leSwiperList: Array类型, 要轮播的数据

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