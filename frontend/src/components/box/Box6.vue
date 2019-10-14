<template>
    <div id="box6">
      <div>
        <div v-for="(item, index) in q" :key="index">
          <span>--- {{ index + 1 }} 번 문제: {{ item.title }} ---</span><br>
          <span>-> {{ index + 1 }} 번 정답 : {{ item.answer }}</span><br>
          <span v-for="(list, index) in item.list" :key="index">
            {{ list }}<br>
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
    </div>
</template>
<script>
export default {
  name: 'box6',
  data () {
    return {
      q: [
        {
          title: '1번',
          answer: '1번 정답',
          list: ['1번 힌트', '2번 힌트', '3번 힌트', '4번 힌트']
        },
        {
          title: '2번',
          answer: '2번 정답',
          list: ['1번 힌트', '2번 힌트', '3번 힌트', '4번 힌트']
        },
        {
          title: '3번',
          answer: '3번 정답',
          list: ['1번 힌트', '2번 힌트', '3번 힌트', '4번 힌트']
        },
        {
          title: '4번',
          answer: '4번 정답',
          list: ['1번 힌트', '2번 힌트', '3번 힌트', '4번 힌트']
        },
        {
          title: '5번',
          answer: '5번 정답',
          list: ['1번 힌트', '2번 힌트', '3번 힌트', '4번 힌트']
        },
        {
          title: '6번',
          answer: '6번 정답',
          list: ['1번 힌트', '2번 힌트', '3번 힌트', '4번 힌트']
        },
        {
          title: '7번',
          answer: '7번 정답',
          list: ['1번 힌트', '2번 힌트', '3번 힌트', '4번 힌트']
        },
        {
          title: '8번',
          answer: '8번 정답',
          list: ['1번 힌트', '2번 힌트', '3번 힌트', '4번 힌트']
        },
        {
          title: '9번',
          answer: '9번 정답',
          list: ['1번 힌트', '2번 힌트', '3번 힌트', '4번 힌트']
        }
      ],
      insertItem: {
        title: '',
        answer: '',
        list: ''
      },
      deleteItem: ''
    }
  },
  methods: {
    insertClick () {
      const itemTitle = this.insertItem.title
      const itemList = this.insertItem.list
      const itemAnswer = this.insertItem.answer
      if (itemTitle && itemList && itemAnswer) {
        const itemObject = {
          title: itemTitle,
          list: this.listFunction(itemList),
          answer: Number(itemAnswer)
        }
        console.log(itemObject)
        this.q.push(itemObject)
      } else {
        alert('정상적으로 입력해주세요.')
      }
    },
    deleteClick () {
      if (this.deleteItem) {
        const deleteNum = Number(this.deleteItem)
        this.q.splice(deleteNum - 1, 1)
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
</style>
