<template>
  <div id="loginPage">
    <top-header message="로그인"></top-header>
    <div id="logoArea">
      <table>
        <tr id="logoTrArea">
          <td>
            <div id="logo"></div>
          </td>
        </tr>
      </table>
    </div>
    <div id="inputArea">
      <table>
        <tr id="inputTrArea">
          <td>
            <input class="bgc-1" placeholder="아이디"/>
            <input class="top-10" placeholder="비밀번호"/>
            <button class="top-10" @click="login">로그인</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login () {
      this.$router.push('listpage')
    }
  }
}
</script>

<style scoped>
#loginPage {
  width: 100%;
  height: 100%;
}

#logoArea {
  width: 100%;
  height: 250px;
}

#inputArea > table, #logoArea > table {
  width: 100%;
  height: 100%;
}

#logoTrArea, #inputTrArea {
  width: 100%;
  height: 100%;
}

#logoTrArea > td {
  width: 100%;
  height: 200px;
  text-align: center;
}

#logo {
  width: 110px;
  height: 110px;
  background-color: red;
  display: inline-block;
}

#inputArea {
  width: 100%;
  height: auto;
}

#inputTrArea > td {
  width: 100%;
  height: auto;
  padding: 0px 55px;
}
input {
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  border: 1px solid #000000;
  text-align: center;
  font-size: 15px
}

button {
  width: 100%;
  height: 35px;
  border: none;
  color: #000000;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background-color: #ffff00;
}

.top-10 {
  margin-top: 10px
}
</style>
