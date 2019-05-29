<template>
    <div id="topHeaderArea">
        <h1>{{ message }}</h1>
        <div id="backButton" @click="backButton">back</div>
    </div>
</template>
<script>
export default {
  name: 'TopHeader',
  props: ['message'],
  methods: {
    backButton () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
#topHeaderArea {
    position: relative;
    width: 100%;
    height: 50px;
    overflow: hidden;
}
#backButton {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0;
    right: 0;
    background-color: #c8c8c8;
}
h1 {
    width: 100%;
    height: 100%;
    background-color:blue;
    text-align: center;
    color: #ffffff;
    font-size: 25px;
    line-height: 50px;
}
</style>
