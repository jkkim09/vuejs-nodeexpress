<template>
    <table id="box4">
      <tr>
        <td id="table-item-td">
          <div>
            <div>문제{{this.current.index}}번 정답</div>
            <div>{{this.current.list[this.current.answer - 1]}}</div>
          </div>
        </td>
      </tr>
    </table>
</template>
<script>
export default {
  name: 'box4',
  data () {
    return {
      current: {}
    }
  },
  mounted () {
    this.current = this.$store.getters.getCurrent

    this.$store.watch(() => this.$store.getters['getCurrent'], (value) => {
      this.current = value
    })
  }
}
</script>
<style scoped>
#box4 {
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
  height: 30%;
  display: inline-block;
}

#table-item-td > div:nth-child(1) > div:nth-child(1) {
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}
#table-item-td > div:nth-child(1) > div:nth-child(2) {
  width: 100%;
  height: 55px;
  line-height: 55px;
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  background-color: #fee100;
  border-radius: 7px;
}
</style>
