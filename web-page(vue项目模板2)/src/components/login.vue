<template>
  <div id="test">
    <div class="span-login">
      <div class="l-top">
        <span th:text="${sysname}"></span>
      </div>
      <div class="login-content">
        <form action="">
          <div class="control-group">
            <label class="control-label">用户名:</label>
            <div class="controls">
              <input type="text" class="controls-text"  name="uname">
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">密码:</label>
            <div class="controls">
              <input type="password" class="controls-text" name="psw">
            </div>
          </div>
          <div class="control-group">
            <button type="button" class="btn btn-login" id="login-btn">登录</button>
          </div>

        </form>
      </div>
      <!-- Footer -->
      <footer class="page-footer font-small cyan darken-3 mt-4" style="position: absolute;
    bottom: 20px;width: 100%">

        <!-- Copyright -->
        <div class="footer-copyright text-center py-3" style="color: #b2c7cc;padding-bottom: 4px;margin-bottom: 0px;font-size: 12px;">
          <span th:text="${copyright}"></span>
          <div>版本： <span th:text="${version}"></span>   更新日期: <span th:text="${date}"></span></div>
        </div>
        <!-- Copyright -->

      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped>
  myElement {
    animate-duration: 2s;
    animate-delay: 1s;
    animate-iteration-count: infinite;
  }
</style>
