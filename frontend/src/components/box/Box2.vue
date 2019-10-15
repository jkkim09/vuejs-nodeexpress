<template>
    <div id="box2">
      <div>문제{{this.config.index}} 정답자 {{this.config.count}}명</div>
      <div>
        <div v-for="(item, index) in items" :key="index">
          <span>{{index + 1}}등 : </span>{{item.user}} : {{item.time}}
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Box2',
  data () {
    return {
      config: {},
      items: []
    }
  },
  created () {
    this.$socket.emit('currentAnswer', {})
    this.$socket.off('currentAnswer')
    this.$socket.on('currentAnswer', (e) => {
      console.log(e)
      if (e.length === 0) {
        return
      }
      this.config = {
        index: e[0].index,
        count: e.length
      }
      this.items = e

      this.$http({
        url: '/lank',
        method: 'get',
        params: {
          item: this.items
        }
      }).then(response => {
        if (response.data.code === 0) {
          console.log(response.data)
        } else {
          alert(response.data.msg)
        }
      },
      error => {
        console.error(error)
        alert('server 접속 오류')
      })
    })
  }
}
</script>
<style scoped>
  #box2 {
    padding: 55px 18px 18px 18px;
    width: 100%;
    height: 100%;
  }
  #box2 > div:nth-child(1) {
    width: 100%;
    height: 40px;
    font-size: 23px;
    text-align: center;
    font-weight: bold;
  }
  #box2 > div:nth-child(2) {
    width: 100%;
    height: 250px;
    overflow: scroll;
  }

  #box2 > div:nth-child(2) > :nth-child(n) {
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 7px;
  }
</style>
