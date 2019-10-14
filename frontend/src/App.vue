<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Gothic A1', sans-serif;
}
html, body, #app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
