<template>
    <div id="box2">
      <div>문제10 정답자 60명</div>
      <div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
        <div><span>1등 : </span>홍길동 00:00:00</div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Box2',
  data () {
    return {
    }
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
