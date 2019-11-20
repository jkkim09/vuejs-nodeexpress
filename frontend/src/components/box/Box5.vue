<template>
    <div id="box5">
      <div>정답 선택</div>
      <div>
        <div v-for="(item, index) in list" :key="index" @click="checkItem(index + 1)" :id="index + 1 + '-button'">
          <span>{{index + 1}}번 : </span>{{item}}
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Box5',
  data () {
    return {
      list: [],
      current: {},
      checkClick: true
    }
  },
  created () {
    this.$socket.off('viewSelectItem')
    this.$socket.on('viewSelectItem', (e) => {
      this.current = e
      this.list = e.list
      this.$store.commit('setCurrent', e)
      this.checkClick = true
    })
  },
  methods: {
    checkItem (index) {
      if (!this.checkClick) {
        alert('중복 선택 불가.')
        return
      }

      let mySelect = false
      const answer = this.current.answer
      if (Number(answer) === Number(index)) {
        mySelect = true
      }
      const sendAnswer = {
        index: this.current.index,
        user: this.$store.getters.getUser,
        answer: mySelect,
        time: new Date().getTime()
      }
      this.$socket.emit('userAnswer', {
        obj: sendAnswer
      })
      this.checkClick = false
      let buttonEl = document.getElementById(index + '-button')
      buttonEl.setAttribute('class', 'active')
      setTimeout(() => {
        buttonEl.setAttribute('class', '')
      }, 5000)
    }
  }
}
</script>
<style scoped>
  #box5 {
    padding: 55px 18px 18px 18px;
    width: 100%;
    height: 100%;
  }
  #box5 > div:nth-child(1) {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    background-color: #fee101;
    border-radius: 7px;
    margin-bottom: 10px;
  }
  #box5 > div:nth-child(2) {
    width: 100%;
    height: 250px;
    overflow: scroll;
  }

  #box5 > div:nth-child(2) > :nth-child(n) {
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 7px;
    border: 1px solid #c8c8c8;
    border-radius: 7px;
  }
  .active {
    background-color: #fee101;
  }
</style>
