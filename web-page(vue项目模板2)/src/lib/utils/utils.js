let local = {
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    },
    fetch(key){
        return JSON.parse(localStorage.getItem(key))
    },
    saveSession(key,value){
        sessionStorage.setItem(key,JSON.stringify(value))
    },
    fetchSession(key){
        return JSON.parse(sessionStorage.getItem(key))
    },
    //开始和单独的日期选择器
    publicDatetimepicker(id,endDate){
      $("#" + id).datetimepicker({
        format: 'yyyy-mm-dd',
        minView:'month',
        language: 'zh-CN',
        todayHighlight:true,
        keyboardNavigation:true,
        autoclose:true,
        endDate:endDate ? false : new Date()
      });
    },
    //结束的日期选择器
    publicDatetimepickerEnd(startId,id){
      $("#" + id).datetimepicker({
        format: 'yyyy-mm-dd',
        minView:'month',
        language: 'zh-CN',
        todayHighlight:true,
        keyboardNavigation:true,
        autoclose:true,
        endDate:new Date()
      }).on("click",function(){
        $("#" + id).datetimepicker("setStartDate",$("#" + startId).val())
      });
    },
    //时间转换
    formattingTime(time){
      if(time) {
        let y = new Date(time).getFullYear();
        let m = new Date(time).getMonth() + 1;
        let d = new Date(time).getDate();
        return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
      } else {
        return time;
      }
    }
}

export default {
    install:function (vm){
        vm.prototype.$local = local;
    }
}
