<template>
  <div id="app">
    <el-form id="inner" :rules="rules" ref="userForm" :model="userForm" label-width="120px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>ログイン</span>
          <el-button style="float: right; padding: 3px 0" type="text">パスワードを忘れた方</el-button>
        </div>
        <el-form-item label="ユーザID" prop="userId">
          <el-input id="login-input" v-model="userForm.userId" placeholder="Please user id" />
        </el-form-item>
        <el-form-item label="パスワード" prop="password">
          <el-input
            id="login-input"
            v-model="userForm.password"
            placeholder="Please password"
            show-password
          />
        </el-form-item>
        <el-form-item class="button-form">
          <Button buttonstyle="primary" @click="login()">ログイン</Button>
        </el-form-item>
        <div class="button-form">
          <el-link type="primary">新規登録はコチラ</el-link>
        </div>
      </el-card>
    </el-form>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button.vue";
import loginApi from "../../api/LoginApi";
import router from "../../router";

export default {
  name: "Login",
  components: {
    Button
  },
  data() {
    return {
      userForm: {
        userId: "",
        password: ""
      },
      rules: {
        userId: [
          {
            required: true,
            message: "ユーザIDを入力してください",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "パスワードを入力してください",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    async login() {
      try {
        await loginApi.login(this.userForm.userId, this.userForm.password);
        console.log("login success");
        document.location = "/home";
      } catch {
        this.$message.error("ログインに失敗しました。 ");
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #000000;
  margin: 200px 200px 200px 200px;
}
#inner {
  width: 450px;
  min-height: 300px;
  color: #000000;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1.5%;
  margin-bottom: 1.5%;
  background-color: #ffffff;
  line-height: 1.5em;
  border-radius: 15px;
}
#login-input {
  display: inline-block;
}
.button-form {
  margin-right: 5px;
  text-align: right;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 480px;
}
</style>
