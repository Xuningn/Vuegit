<template>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <slot name="todo" v-bind:todo="todo">
        {{todo.text}}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Child3',
  data () {
    return {
      filteredTodos: [
        {
          id: 1,
          text: 'Finish HomeWork'
        },
        {
          id: 2,
          text: 'Do Some Exercise'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
