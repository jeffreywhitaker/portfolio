<template>
  <div>
    <Header />
    <router-view class="container" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="less" scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>