<template>
  <div>
    <h1>组件通信</h1>

    <label>子组件1：</label>
    <child1 @returnBack="getEventFromChild1" masFromFather="我是父级组件的数据"></child1>
    <p>v-on: {{ msgFromChild1 }}</p>

    <br>

    <label>子组件2：</label>
<!--1. $emit & v-on-->
<!--    <child2 @input="onInput" :value="inputVal"></child2>-->

<!--2. v-model   -->
<!--    <child2 v-model="inputVal"></child2>-->

<!--3.  .sync  -->
    <child2 :value.sync="inputVal"></child2>

<!--4.  .sync语法糖实为@update  -->
<!--    <child2 :value="inputVal" @update:value="onInput"></child2>-->

    <p>inputVal: &nbsp&nbsp{{ inputVal }}</p>
    <button @click="changeInputval">changeInputval</button>

    <br>
    <br>
    <br>

    <label>子组件3：插槽</label>
    <child3>
      <template slot="todo" slot-scope="{ todo }">
        <span v-if="todo.isComplete">✓</span>
        {{ todo.text }}
      </template>
    </child3>

    <h1>动态组件</h1>
    <div >
    <button type="button"  @click="changeComponent(child1)">组件1</button>
    <button type="button"  @click="changeComponent(child2)">组件2</button>
      <br>
      <br>
      <keep-alive>
        <component :is="chooseComponent"></component>
      </keep-alive>
    </div>


    <h1>访问子组件实例或子元素</h1>
    <child2 :value.sync="inputVal" ref="usernameInput"></child2>
    <button @click="showMsgFromChild">显示子元素数据</button>
    <p>this.$refs.usernameInput.value: {{msg}}</p>
    <button @click="focus">聚焦</button>
  </div>
</template>

<script>
  import Child1 from './Child1'
  import Child2 from './Child2'
  import Child3 from './Child3'
  import ToDoList from './ToDoList'

  export default {
    name: 'Father',
    components: {ToDoList, Child3, Child1, Child2},
    data() {
      return {
        msgFromChild1: '',
        inputVal: '',
        chooseComponent: 'ToDoList',
        child1: 'ToDoList',
        child2: 'child2',
        msg: ''
      }
    },
    methods: {
      getEventFromChild1: function(msg) {
        this.msgFromChild1 = msg
      },
      onInput: function(val) {
        this.inputVal = val
      },
      changeInputval: function() {
        this.inputVal = "我变了"
      },
      changeComponent: function(index) {
        this.chooseComponent = index
      },
      showMsgFromChild: function() {
        this.msg = this.$refs.usernameInput.value
      },
      focus: function() {
        this.$refs.usernameInput.focus()
      }
    }
  }
</script>

<style scoped>

</style>
