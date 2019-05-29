<template>
  <div class="hello">
    <h1>{{ msg }} 확인 절차2</h1>
    <h2 @click="test">kubernectes test</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'first kubnectes test vue.js and nodejs'
    }
  },
  methods: {
    test () {
      // proxy 설정을 통햇 localhost:8080 -> localhost:8001 로 전송
      this.$http.get('/test').then((e) => {
        console.log(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
