<template>
  <div>
    <input type="text" :value="value" @input="updataVal($event.target.value)">
    <p>props: &nbsp;&nbsp;{{value}}</p>
  </div>
</template>

<script>
export default {
  name: 'Child2',
  // model: {
  //   prop: 'value',
  //   event: 'input'
  // },
  props: {
    value: ''
  },
  methods: {
    updataVal: function (val) {
      this.$emit('update:value', val)
    }
  }
}
</script>

<style scoped>

</style>
