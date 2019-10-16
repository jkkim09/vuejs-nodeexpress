<template>
  <div id="index-page">
    <div id="header">
      <header-0 v-if="boxType === 0"></header-0>
      <header-1 v-if="boxType === 1"></header-1>
      <header-2 v-if="boxType === 2"></header-2>
      <header-3 v-if="boxType === 3"></header-3>
      <header-4 v-if="boxType === 4"></header-4>
      <header-5 v-if="boxType === 5"></header-5>
      <header-6 v-if="boxType === 6"></header-6>
    </div>
    <div id="box">
      <box-0 v-if="boxType === 0"></box-0>
      <box-1 v-if="boxType === 1"></box-1>
      <box-2 v-if="boxType === 2"></box-2>
      <box-3 v-if="boxType === 3"></box-3>
      <box-4 v-if="boxType === 4"></box-4>
      <box-5 v-if="boxType === 5"></box-5>
      <box-6 v-if="boxType === 6"></box-6>
    </div>
    <div v-if="count !== 0 " id="loding">
      <div></div>
      <table>
        <tr>
          <td id="loding-td">
            <div id="loding-item">{{ count }}</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      socket: {},
      user: this.$store.getters.getUser,
      boxType: this.$store.getters.getPage,
      count: 0
    }
  },
  created () {
    this.$socket.off('pageChange')
    this.$socket.on('pageChange', (e) => {
      if (this.$store.getters.getUser === 'admin2') {
        this.$store.commit('setPage', e.page)
      }
    })

    this.$store.watch(() => this.$store.getters['getPage'], (value) => {
      this.boxType = value
    })

    this.$store.watch(() => this.$store.getters['getUser'], (value) => {
      this.user = value
    })

    this.$store.watch(() => this.$store.getters['getCurrent'], (value) => {
      if (this.user !== 'admin1' && this.user !== 'admin2') {
        this.timeSet(value.startTime)
      }
    })
  },
  methods: {
    timeSet (time) {
      var clientTime = Date.now()
      var setTime = Math.floor((time - clientTime) / 1000)
      if (setTime > 1) {
        this.count = setTime
        var countSet = setInterval(() => {
          this.count = this.count - 1
          if (this.count === 0) {
            this.endEvent()
            clearInterval(countSet)
          }
        }, 1000)
      } else {
        this.count = 'End'
      }
    },
    endEvent () {
      var that = this
      setTimeout(function () {
        that.count = 'End'
      }, 5000)
    },
    getParams () {
      var param = {}
      var url = decodeURIComponent(location.href)
      url = decodeURIComponent(url)
      var params = url.substring(url.indexOf('?') + 1, url.length)
      params = params.split('&')
      var size = params.length
      var key, value
      for (var i = 0; i < size; i++) {
        key = params[i].split('=')[0]
        value = params[i].split('=')[1]
        param[key] = value
      }
      return param
    },
    connect (e) {
      console.log(e)
    },
    event (e) {
      console.log(e)
    },
    disconnect (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
#index-page {
  width: 100%;
  height: 100%;
  background-color: #d70051;
  padding: 60px 60px 0 60px;
}
#header {
  width: 100%;
  height: auto;
}
#box {
  width: 100%;
  height: 369px;
  background-image: url('../assets/image/img1.png');
  background-size: cover;
  padding: 10px;
}
#loding {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#loding > div:nth-child(1) {
  width: 100%;
  height: 100%;
  background-color: #000000;
  /* opacity: 0.9; */
}
#loding > table:nth-child(2) {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
#loding-td {
  text-align: center;
}
#loding-item {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 4px solid #fee101;
  border-radius: 50%;
  line-height: 100px;
  font-size: 60px;
  font-weight: bold;
  color: #ffffff;
}
</style>
