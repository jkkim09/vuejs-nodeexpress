<template>
    <div id="box6">
      <div>
        <div v-for="(item, index) in q" :key="index">
          <span class="send_button_class" @click="selectItem(index)">--- {{ item.index }} 번 문제: {{ item.title }} ---</span><br>
          <span>-> {{ index + 1 }} 번 문제 정답 : {{ item.answer }}</span><br>
          <span v-for="(list, index) in item.list" :key="index">
            {{ index + 1 }}번 :{{ list }}<br>
          </span>
        </div>
      </div>
      <div id="option_area" v-if="optionButton">
        <input placeholder="문제 입력" v-model="insertItem.title"/>
        <input placeholder="힌트 ex) 1,2,3,4" v-model="insertItem.list"/>
        <input placeholder="정답 ex) 2" v-model="insertItem.answer"/>
        <button @click="insertClick" class="button_1">입력</button>
        <input placeholder="문제 삭제 ex) 2" v-model="deleteItem"/>
        <button @click="deleteClick" class="button_1">삭제</button>
        <button @click="pageChange(1)" class="button_2">문제화면</button>
        <button @click="pageChange(4)" class="button_2">정답</button>
        <button @click="pageChange(2)" class="button_2">문제정답자</button>
        <button @click="pageChange(3)" class="button_2">순위</button>
        <button @click="pointDelete" class="button_2">point 초기화</button>
      </div>
      <div id="option_button" @click="optionFunction">X</div>
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
      deleteItem: '',
      optionButton: true
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
    pointDelete () {
      this.$http({
        url: '/pointDelete',
        method: 'get'
      }).then(response => {
        if (response.data.code === 0) {
          alert('초기화 완료')
        }
      })
    },
    listFunction (item) {
      console.log(item, item.split(','))
      return item.split(',')
    },
    optionFunction () {
      this.optionButton = !this.optionButton
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

  #option_area {
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 30px;
    background-color: #cdcdcd;
  }
  #option_area > * {
    float: left;
  }

  #option_area > input {
    width: 100%;
    height: 35px;
    margin-top: 10px;
    font-size: 15px;
  }

  #option_button {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #000000;
    color: #ffffff;
    text-align: center;
    line-height: 25px;
  }
  .button_1 {
    width: 100%;
    height: 35px;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .button_2 {
    width: 100px;
    height: 35px;
    font-size: 15px;
  }
  .send_button_class {
    background-color: #000000;
    color: #ffffff;
    border-radius: 7px;
  }
</style>
