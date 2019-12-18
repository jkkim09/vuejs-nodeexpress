<template>
    <table id="box3">
      <tr>
        <td id="table-item-td">
          <div>
            <div v-for="(item, index) in items" :key="index">
              {{index + 1}}위 : {{item.id}}({{item.total_point}}점)
              {{item.after_rank?((item.befor_rank ? item.befor_rank : item.after_rank) - item.after_rank): '-'}}
            </div>
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
      items: []
    }
  },
  created () {
    this.$http({
      url: '/totalRank',
      method: 'get'
    }).then(response => {
      if (response.data.code === 0) {
        this.items = response.data.items
      } else {
      }
    },
    error => {
      console.log(error)
    })
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
  height: 80%;
  display: inline-block;
  overflow: scroll;
}

#table-item-td > div:nth-child(1) > div:nth-child(n) {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
