<template>
  <div :class="isUsingDarkMode ? 'darkMode' : null">
    <Header :toggleDM="toggleDM" />
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
  data() {
    return {
      isUsingDarkMode: false,
    }
  },
  mounted() {
    if (localStorage.getItem('darkMode')) {
      this.isUsingDarkMode = localStorage.getItem('darkMode')
    }
  },
  methods: {
    toggleDM() {
      this.isUsingDarkMode = !this.isUsingDarkMode
    },
  },
}
</script>

<style lang="less" scoped>
@import './_settings.less';

.container {
  max-width: 1100px;
  margin: 0 auto;
}
.darkMode {
  background-color: @dm-background;
  color: @dm-font-color;
}
</style>