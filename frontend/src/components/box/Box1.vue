<template>
    <div id="box1">
      <div>
        <div id="q-number">문제{{this.index}}</div>
      </div>
      <div>
        {{this.title}}
      </div>
    </div>
</template>
<script>
export default {
  name: 'Box1',
  data () {
    return {
      index: 1,
      title: ''
    }
  },
  mounted () {
    if (!this.$store.getters.getEvent['viewSelectItem']) {
      this.$store.commit('setEvent', 'viewSelectItem')
      this.$socket.on('viewSelectItem', (e) => {
        console.log('selectitem', e)
        this.index = e.index
        this.title = e.title
      })
    }
  }
}
</script>
<style scoped>
  #box1 {
    padding: 40px 18px 18px 18px;
    width: 100%;
    height: 100%;
  }
  #box1 > div:nth-child(1) {
    width: 100%;
    height: 30px;
  }
  #q-number {
    width: 70px;
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
  #q-number:after {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 100%;
      width: 0;
      height: 0;
      border: 15px solid transparent;
      border-left-color: #f8b101;
  }

  #box1 > div:nth-child(2) {
    width: 100%;
    height: auto;
    margin-top: 50px;
    font-size: 28px;
    font-weight: bold;
  }
</style>
