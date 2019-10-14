<template>
    <div id="header-2">
        <div>퀴즈 이벤트</div>
        <div>정답 힌트</div>
    </div>
</template>
<script>
export default {
  name: 'Header2'
}
</script>
<style scoped>
#header-2 {
  width: 100%;
  height: 96px;
  margin-bottom: 10px;
}
#header-2 > div:nth-child(1) {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
  text-shadow: -1px -1px 3px #000, 1px -1px 3px #000, -1px 1px 3px #000, 1px 1px 3px #000;
}
#header-2 > div:nth-child(2) {
  width: 100%;
  height: 56px;
  line-height: 56px;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  color: #f8b101;
  text-shadow: -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000;
}
</style>
