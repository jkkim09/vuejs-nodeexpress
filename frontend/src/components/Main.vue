<template>
  <div id="mainPage">
    <div id="logoArea">
      <table>
        <tr id="logoTrArea">
          <td>
            <div id="logo"></div>
          </td>
        </tr>
      </table>
    </div>
    <div id="buttonArea">
      <table>
        <tr id="buttonTrArea">
          <td>
            <button class="bgc-1" @click="login">로그인</button>
            <button class="top-10 bgc-1" @click="sinup">회원가입</button>
            <button class="top-10 bgc-2">NAVER 로그인</button>
            <button class="top-10 bgc-3">KAKAO 로그인</button>
            <div id="idpasswordText" @click="find">ID or Password 찾기</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'first kubnectes test vue.js and nodejs'
    }
  },
  methods: {
    test () {
      // proxy 설정을 통햇 localhost:8080 -> localhost:8001 로 전송
      this.$http.get('/test').then((e) => {
        console.log(e)
      })
    },
    sinup () {
      this.$router.push('signup')
    },
    find () {
      this.$router.push('finduserinfo')
    },
    login () {
      this.$router.push('login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainPage {
  width: 100%;
  height: 100%;
}

#logoArea {
  width: 100%;
  height: 250px;
}

#buttonArea > table, #logoArea > table {
  width: 100%;
  height: 100%;
}

#logoTrArea, #buttonTrArea {
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

#buttonArea {
  width: 100%;
  height: auto;
}

#buttonTrArea > td {
  width: 100%;
  height: auto;
  padding: 0px 55px;
}
button {
  width: 100%;
  height: 35px;
  border: none;
  color: white;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.bgc-1 {
  background-color: #5050f1;
}
.bgc-2 {
  background-color: #29a729;
}
.bgc-3 {
  background-color: #e0e04f;
}
#idpasswordText {
  width: 100%;
  height: 10px;
}
</style>
