<template>
    <table id="box3">
      <tr>
        <td id="table-item-td">
          <div>
            <div>1위 : 홍길동</div>
            <div>1위 : 홍길동</div>
            <div>1위 : 홍길동</div>
            <div>1위 : 홍길동</div>
            <div>1위 : 홍길동</div>
            <div>1위 : 홍길동</div>
            <div>1위 : 홍길동</div>
            <div>1위 : 홍길동</div>
          </div>
        </td>
      </tr>
    </table>
</template>
<script>
export default {
  name: 'Box3',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
#box3 {
  width: 100%;
  height: 100%;
}
#table-item-td {
  width: 100%;
  height: 100%;
  text-align: center;
}
#table-item-td > div:nth-child(1) {
  width: 80%;
  height: 50%;
  display: inline-block;
  overflow: scroll;
}

#table-item-td > div:nth-child(1) > div:nth-child(n) {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
