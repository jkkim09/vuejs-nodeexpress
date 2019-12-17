<template>
    <div id="send-container">
      <div id="send-area">
        <table>
          <tr>
            <td class="center">
              <div id="reset-btn" @click="sendBtn"></div>
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
          value: this.$store.getters.getUser
        }
      })
    }
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

#reset-btn {
  width: 250px;
  height: 250px;
  line-height: 150px;
  font-size: 30px;
  font-weight: bold;
  border-radius: 50%;
  display: inline-block;
  background-color: #c8c8c8;
  color: #ffffff;
  background-image: url('../assets/image/me.gif');
  background-size: cover;
}
</style>
