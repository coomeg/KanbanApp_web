<template>
  <div id="app">
    <span class="login-input">ログインID</span>
    <el-input v-model="loginId" placeholder="Please input" />
    <span class="login-input">パスワード</span>
    <el-input v-model="password" placeholder="Please input" show-password />
    <el-button type="primary" @click="login">
      ログイン
    </el-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginId: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log("test");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
