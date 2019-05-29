<template>
  <div id="mainPage">
    <top-header message="회원 가입"></top-header>
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
            <input class="bgc-1" placeholder="이름"/>
            <input class="top-10" placeholder="주민 등록 번호"/>
            <input class="top-10" placeholder="휴대폰 번호"/>
            <input class="top-10" placeholder="인증번호"/>
            <button class="top-10">인증 번호 요청</button>
            <div id="idpasswordText">
              <span>가입약관</span>
              <input type="checkbox">
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div id="bottonArea">
      <button>회원가입</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
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
  color: white;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.top-10 {
  margin-top: 10px
}
#idpasswordText {
  width: 100%;
  height: 21px;
  margin-top: 15px;
}
#idpasswordText span {
  float: left;
}

input[type="checkbox"] {
  width: 21px;
  height: 21px;
  float: left;
  margin-left: 7px;
}

#bottonArea {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
}
#bottonArea button {
  height: 100%;
  background-color: #2f36d6;
  border-radius: 0;
}
</style>
