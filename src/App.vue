<template>
  <div class="outer" :class="isUsingDarkMode ? 'darkMode' : null">
    <Header :is-using-dark-mode="isUsingDarkMode" :toggleDM="toggleDM" />
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
      isUsingDarkMode: true,
    }
  },
  mounted() {
    if (localStorage.getItem('darkMode')) {
      this.isUsingDarkMode = localStorage.getItem('darkMode') === 'true'
    }
  },
  methods: {
    toggleDM() {
      this.isUsingDarkMode = !this.isUsingDarkMode
      localStorage.setItem('darkMode', this.isUsingDarkMode)
    },
  },
}
</script>

<style lang="less">
@import './_settings.less';

.container {
  max-width: 1100px;
  margin: 10px auto;
}
.outer {
  min-height: 100%;
  font-family: Calibri, sans-serif;
  line-height: 1.7;
  font-weight: 200;
  background-color: white;
  color: @font-color-main;
  transition: background-color 0.3s, color 0.3s;
  &.darkMode {
    background-color: @dm-background;
    color: @dm-font-color;
  }
  .router-link-exact-active {
    font-weight: 700;
  }
}

.darkMode {
  a {
    color: @dm-font-color;
  }
  .toggle {
    color: #f3d642;
  }
}
</style>
