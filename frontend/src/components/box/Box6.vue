<template>
    <div id="box6">
      <div>
        <div v-for="(item, index) in q" :key="index">
          <span @click="selectItem(index)">--- {{ item.index }} 번 문제: {{ item.title }} ---</span><br>
          <span>-> {{ index + 1 }} 번 문제 정답 : {{ item.answer }}</span><br>
          <span v-for="(list, index) in item.list" :key="index">
            {{ index + 1 }}번 :{{ list }}<br>
          </span>
        </div>
      </div>
      <div>
        <input placeholder="문제 입력" v-model="insertItem.title"/>
        <input placeholder="힌트 ex) 1,2,3,4" v-model="insertItem.list"/>
        <input placeholder="정답 ex) 2" v-model="insertItem.answer"/>
        <button @click="insertClick">입력</button>
      </div>
      <div>
        <input placeholder="문제 삭제 ex) 2" v-model="deleteItem"/>
        <button @click="deleteClick">삭제</button>
      </div>
      <div>
        <button @click="pageChange(4)">정답</button>
        <button @click="pageChange(3)">순위</button>
        <button @click="pageChange(2)">문제정답자</button>
        <button @click="pageChange(1)">문제화면</button>
      </div>
    </div>
</template>
<script>
export default {
  name: 'box6',
  data () {
    return {
      q: [],
      insertItem: {
        title: '',
        answer: '',
        list: ''
      },
      deleteItem: ''
    }
  },
  created () {
    this.$http({
      url: '/itemList',
      method: 'get'
    }).then(response => {
      if (response.data.code === 0) {
        this.q = response.data.obj
      } else {
        alert(response.data.msg)
      }
    },
    error => {
      console.error(error)
    })

    // socket io
  },
  methods: {
    selectItem (index) {
      this.$socket.emit('viewSelectItem', {
        obj: this.q[index]
      })
    },
    pageChange (page) {
      this.$socket.emit('pageChange', {
        obj: {page: page}
      })
    },
    insertClick () {
      const itemTitle = this.insertItem.title
      const itemList = this.insertItem.list
      const itemAnswer = this.insertItem.answer
      if (itemTitle && itemList && itemAnswer) {
        const itemObject = {
          title: itemTitle,
          list: itemList,
          answer: Number(itemAnswer)
        }
        // db insert
        this.$http({
          url: '/itemInsert',
          method: 'get',
          params: {
            item: itemObject
          }
        }).then(response => {
          if (response.data.code === 0) {
            itemObject.list = this.listFunction(itemObject.list)
            this.q.push(itemObject)
            alert(response.data.msg)
          } else {
            alert(response.data.msg)
          }
        },
        error => {
          console.error(error)
        })
      } else {
        alert('정상적으로 입력해주세요.')
      }
    },
    deleteClick () {
      if (this.deleteItem) {
        const deleteNum = Number(this.deleteItem)
        this.$http({
          url: '/itemDelete',
          method: 'get',
          params: {
            item: deleteNum
          }
        }).then(response => {
          if (response.data.code === 0) {
            alert(response.data.msg)
            // this.q.splice(deleteNum - 1, 1)
          } else {
            alert(response.data.msg)
          }
        },
        error => {
          console.error(error)
        })
      } else {
        alert('삭제할 문제 번호를 입력해주세요')
      }
    },
    listFunction (item) {
      console.log(item, item.split(','))
      return item.split(',')
    }
  }
}
</script>
<style scoped>
  #box6 {
    padding: 10px 0px 0px 0px;
    width: 100%;
    height: 100%;
  }
  #box6 > div:nth-child(1) {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }

  #box6 > div:nth-child(1) > :nth-child(n) {
    width: 100%;
    height: auto;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
  }

  #box6 > div:nth-child(2) {
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  #box6 > div:nth-child(3) {
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 50px;
    left: 0;
  }

    #box6 > div:nth-child(4) {
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 100px;
    left: 0;
  }
</style>
