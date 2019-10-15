<template>
    <div id="box0">
      <div>
        <div id="q-number">{{title}}</div>
      </div>
      <div v-if="loginPage">
        <input placeholder="이름 입력" v-model="userName">
        <input placeholder="PASSWORD" v-model="userPwd">
        <button @click="login">로그인</button>
        <div class="pageChange" @click="addUser_page">회원가입</div>
      </div>
      <div v-if="!loginPage">
        <input placeholder="회원가입 이름 입력" v-model="userName">
        <input placeholder="회원가입 PASSWORD" v-model="userPwd">
        <button @click="addUser">회원가입</button>
        <div class="pageChange" @click="login_page">로그인</div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'box0',
  data () {
    return {
      title: '로그인',
      loginPage: true,
      userName: '',
      userPwd: ''
    }
  },
  methods: {
    login () {
      if (this.userName.trim() !== '' && this.userPwd.trim() !== '') {
        this.$http({
          url: '/login',
          method: 'get',
          params: {
            userName: this.userName,
            userPwd: this.userPwd
          }
        }).then(response => {
          if (response.data.code === 0) {
            alert(this.userName + '님 ' + response.data.msg)
            this.$store.commit('setUser', this.userName)
            if (this.userName === 'admin1') {
              this.$store.commit('setPage', 6)
            } else if (this.userName === 'admin2') {
              this.$store.commit('setPage', 1)
            } else {
              this.$store.commit('setPage', 5)
            }
          } else {
            alert(response.data.msg)
          }
        },
        error => {
          console.error(error)
          alert('server 접속 오류')
        })
      } else {
        alert('이름 or 비밀번호 입력 하세요')
      }
    },
    addUser () {
      if (this.userName.trim() !== '' && this.userPwd.trim() !== '') {
        this.$http({
          url: '/addUser',
          method: 'get',
          params: {
            userName: this.userName,
            userPwd: this.userPwd
          }
        }).then(response => {
          if (response.data.code === 0) {
            alert(response.data.msg)
          } else {
            alert(response.data.msg)
          }
        },
        error => {
          console.log(error)
        })
      } else {
        alert('이름 or 비밀번호 입력 하세요')
      }
    },
    login_page () {
      this.title = '로그인'
      this.loginPage = true
    },
    addUser_page () {
      this.title = '회원가입'
      this.loginPage = false
    }
  }
}
</script>
<style scoped>
  #box0 {
    padding: 40px 18px 18px 18px;
    width: 100%;
    height: 100%;
  }
  #box0 > div:nth-child(1) {
    width: 100%;
    height: 30px;
  }
  #q-number {
    width: 100%;
    height: 30px;
    float: left;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
  }

  #q-number {
    display: inline-block;
    position: relative;
    margin: 0 15px 0 0;
    padding: 0;
    background: #f8b101;

  }

  #box0 > div:nth-child(2) {
    width: 100%;
    height: auto;
    margin-top: 50px;
    font-weight: bold;
  }

  #box0 > div:nth-child(2) > input:nth-child(1) {
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: 20px;
  }

  #box0 > div:nth-child(2) > input:nth-child(2) {
    width: 100%;
    height: 50px;
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
  }

  #box0 > div:nth-child(2) > button:nth-child(3) {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .pageChange {
    width: auto;
    height: auto;
    margin-top: 7px;
    font-size: 13px;
  }

  #box0 > div:nth-child(3) {
    width: 100%;
    height: auto;
    margin-top: 50px;
    font-weight: bold;
  }

  #box0 > div:nth-child(3) > input:nth-child(1) {
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: 20px;
  }

  #box0 > div:nth-child(3) > input:nth-child(2) {
    width: 100%;
    height: 50px;
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
  }

  #box0 > div:nth-child(3) > button:nth-child(3) {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }
</style>
