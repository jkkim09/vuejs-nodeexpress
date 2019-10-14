<template>
    <div id="box2">
      <div>정답 선택</div>
      <div>
        <div><span>1번 : </span>홍길동</div>
        <div><span>2번 : </span>홍길동</div>
        <div><span>3번 : </span>홍길동</div>
        <div><span>4번 : </span>홍길동</div>
        <div><span>5번 : </span>홍길동</div>
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
    line-height: 40px;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    background-color: #fee101;
    border-radius: 7px;
    margin-bottom: 10px;
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
