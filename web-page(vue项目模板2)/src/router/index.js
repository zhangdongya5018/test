import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '',
  scrollBehavior (to, from, savedPosition) {
    //关于我们页面的路由跳转，把滚动条top值设置为0
    // $('#app').scrollTop(0);
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.matched.some((item)=>item.meta.login)){ //此路由需要验证，请检查是否已登录,如果没有，则重定向到登录页面
    // var info = router.app.$local.fetch('');
    // console.log(1)
    // if(info){
    //   console.log(2)
    //   if(info.login){
    //     console.log(3)
    //     next();
    //   }
    // }else{
    //   console.log(4)
    //   router.push({name:'Login'});
    // }
  }else{
    next();
  }

  //上面导航
  // if(to.path == '/workView'){
  //   console.log($(".nav"))
  // }
});
