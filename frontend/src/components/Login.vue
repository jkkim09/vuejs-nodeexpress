<template>
    <div id="login-contain">
        <table id="login-table">
          <tr>
            <td>
              <div id="login-area">
                <div id="title-area">로그인</div>
                <div id="input-area">
                  <input placeholder="ID" v-model="userName">
                  <input placeholder="PWD" class="m-t-10" v-model="userPwd">
                </div>
                <button id="login-btn" class="m-t-10" @click="login">로그인</button>
              </div>
            </td>
          </tr>
        </table>
    </div>
</template>
<script>
export default {
  data () {
    return {
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
            localStorage.setItem('user_id', this.userName)
            localStorage.setItem('user_pwd', this.userPwd)
            this.$store.commit('setUser', this.userName)
            if (this.userName === 'admin1') {
              this.$router.push('admin')
            } else if (this.userName === 'admin2') {
              this.$router.push('front')
            } else {
              this.$router.push('view')
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
    }
  }
}
</script>

<style scoped>
#login-contain {
  width: 100%;
  height: 100%;
  background-color: #baecdc;
}

#login-table {
  width: 100%;
  height: 100%;
  padding: 60px;
}

#login-area {
  width: 100%;
  height: auto;
  background-color: #c8c8c8;
  padding: 10px;
  border-radius: 7px;
}

#title-area {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
#input-area {
  width: 100%;
  height: auto;
}

#input-area > input {
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.m-t-10 {
  margin-top: 10px;
}

#login-btn {
  width: 100%;
  height: 35px;
}
</style>
