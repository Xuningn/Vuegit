<template>
  <div>
    <ul>
      <li v-for="(item) in storeMenus" :key="item.path">
        <router-link :to="item.path">
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  computed: {
    storeMenus() {
      return this.$store.state.menus
    }
  }
}
</script>

<style scoped>
  ul {
  display: inline;
  text-align: center;
}
  ul li{
    display: inline-block;
    margin: 10px;
  }
</style>
