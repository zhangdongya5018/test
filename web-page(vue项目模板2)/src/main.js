// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 解决IE不支持es6的问题
import 'babel-polyfill'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// JQuery
import 'jquery'

//bootstrap的日期和表格插件
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './lib/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css'
import './lib/bootstrap-table/bootstrap-table.min.css'
import './lib/bootstrap-3.3.7-dist/js/bootstrap.min'
import './lib/bootstrap-datetimepicker/bootstrap-datetimepicker.min'
import './lib/bootstrap-datetimepicker/bootstrap-datetimepicker.zh-CN'
import './lib/bootstrap-table/bootstrap-table.min'
import './lib/bootstrap-table/bootstrap-table-zh-CN.min'

import Animate from 'animate.css'

// 接口地址全局配置
import ajaxConfig from './lib/ajaxDomainConfig'

// zTree
import './lib/zTree/css/zTreeStyle/zTreeStyle.css'
import './lib/zTree/js/jquery.ztree.all.min'

// 全局样式
import './assets/css/reset.css'

// 公共工具
import './lib/utils/utils'

Vue.config.productionTip = false
Vue.prototype.$ajaxConfig = ajaxConfig
Vue.use(ElementUI)
Vue.use(store)
Vue.use(Animate)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted(){},
  components: { App },
  template: '<App/>'
})
