<template>
  <div>
    <Header />
    <router-view class="container" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>

<style lang="less" scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>