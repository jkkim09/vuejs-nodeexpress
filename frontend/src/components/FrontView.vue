<template>
    <div id="front-container">
        <table>
          <tr>
            <td>
              <div id="view-area">
                <div>선택 받은 자!</div>
                <div>{{name}}</div>
                <div>차근차근 정답을 말해주세요</div>
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
      first: true,
      name: ''
    }
  },
  mounted () {
    this.$socket.on('buttonSelect', (e) => {
      if (e.type) {
        if (this.first) {
          this.first = false
          this.name = e.value
        }
      } else {
        this.first = true
        this.name = ''
      }
    })
  }
}
</script>

<style scoped>
#front-container {
  width: 100%;
  height: 100%;
  padding: 30px;
}

#front-container > table {
  width: 100%;
  height: 100%;
}
#view-area {
  width:  100%;
  height: 50%;
  background-color: #c8c8c8;
  padding: 10px;
}

#view-area > div:nth-child(1) {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

#view-area > div:nth-child(2) {
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  background-color:blue;
  color: #ffffff;
  padding: 30px;
}

#view-area > div:nth-child(3) {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
</style>
