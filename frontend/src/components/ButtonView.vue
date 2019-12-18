<template>
    <div id="send-container">
      <div id="send-area">
        <table>
          <tr>
            <td class="center">
              <div id="reset-btn-area">
                <div id="reset-btn" @click="sendBtn"></div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    sendBtn () {
      this.$socket.emit('buttonSelect', {
        obj: {
          type: true,
          value: this.$store.getters.getUser || localStorage.getItem('user_id')
        }
      })
    }
  },
  mounted () {
    var btn = document.getElementById('reset-btn-area')
    btn.addEventListener('touchstart', (e) => {
      btn.setAttribute('class', 'active')
    })

    btn.addEventListener('touchend', (e) => {
      btn.setAttribute('class', '')
    })
  }
}
</script>

<style scoped>
#send-container {
  width: 100%;
  height: 100%;
  padding: 30px;
}

#send-area {
  width: 100%;
  height: 100%;
  background-color: #baecdc;
  padding: 30px;
}

#send-area > table {
  width: 100%;
  height: 100%;
}

.center {
  text-align: center;
}
#reset-btn-area {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #c8c8c8;
  display: inline-block;
}

#reset-btn-area.active {
  background-color: #000000;
}

#reset-btn {
  width: 200px;
  height: 200px;
  line-height: 150px;
  display: inline-block;
  background-image: url('../assets/image/me.gif');
  background-size: cover;
}
</style>
