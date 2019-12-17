<template>
    <div id="admin-container">
      <div id="reset-area">
        <table>
          <tr>
            <td class="center">
              <div id="reset-btn" @click="resetBtn">Reset</div>
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
    resetBtn () {
      this.$socket.emit('buttonReset', {
        obj: {
          type: false
        }
      })
    }
  }
}
</script>

<style scoped>
#admin-container {
  width: 100%;
  height: 100%;
  padding: 30px;
}

#reset-area {
  width: 100%;
  height: 100%;
  background-color: #baecdc;
  padding: 30px;
}

#reset-area > table {
  width: 100%;
  height: 100%;
}

.center {
  text-align: center;
}

#reset-btn {
  width: 150px;
  height: 150px;
  line-height: 150px;
  font-size: 30px;
  font-weight: bold;
  border-radius: 50%;
  display: inline-block;
  background-color: #fb5151;
  color: #ffffff;
}
</style>
