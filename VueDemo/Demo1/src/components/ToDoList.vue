<template>
  <div>
    <form>
      <label for="new-todo">Add a todo</label>
      <input id="new-todo" v-model="newTodoText" placeholder="todo">
      <button @click="addNewToDo">add</button>
    </form>
    <ul>
      <li v-for="(item, index) in toDos" :key="item.id" :title="item.title">
        {{item.title}}
        <button type="button" @click="remove(index)">remove</button>
      </li>
    </ul>
    <!--         复选按钮       -->
    <div>
      <input type="checkbox" id="jack" v-model="checkedNames" value="Jack">
      <label for="jack">Jack</label>
      <input type="checkbox" id="tom" v-model="checkedNames" value="Tom">
      <label for="tom">Tom</label>
      <input type="checkbox" id="mike" v-model="checkedNames" value="Mike">
      <label for="mike">Mike</label>
      <p>You have Choosed: {{checkedNames}}</p>
    </div>

    <!--        单选按钮       -->
    <div>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <p>You have Picked: {{picked}}</p>
    </div>

    <!--        选择框         -->
    <div>
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <!--        label值为A, value值为A-->
        <option label="BB">B</option>
        <!--        label值为BB, value值为B-->
        <option value="CCC">C</option>
        <!--        abel值为C, value值为CCC-->
      </select>
      <br>
      <p>You have Selected: {{selected}}</p>
    </div>

    <input v-model.lazy="msg" @input="showFun">
    <span>{{msg}}</span>

    <div @click="log(1)" @click.capture="log(11)">
      <div @click="log(2)" @click.capture="log(22)">
        <div @click="log(3)" @click.capture="log(33)">
          <a @click="log(4)" @click.capture="log(44)" href="javascript: console.log(5)">点击</a>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      newTodoText: '',
      toDos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        }
      ],
      nextToDoId: 3,
      // 表单输入
      checkedNames: [],
      picked: '',
      selected: '',
      msg: '123'
    }
  },
  methods: {
    remove: function (index) {
      this.toDos.splice(index, 1)
    },
    addNewToDo: function () {
      this.toDos.push(
        {
          id: this.nextToDoId++,
          title: this.newTodoText
        })
      this.newTodoText = ''
    },
    log: function (x) {
      console.log(x)
    },
    showFun: function () {
      console.log(this.msg)
    }
  }
}
</script>

<style scoped>

</style>
