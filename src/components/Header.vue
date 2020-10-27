<template>
  <header>
    <nav class="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <!-- <router-link to="/blog">Blog</router-link> -->
      <a
        target="_blank"
        href="https://drive.google.com/open?id=1lPcfiK6UE7d8oni8ZjtaOvahiPdBnU8K"
        >Resume</a
      >
      <router-link to="/contact">Contact</router-link>
    </nav>
    <a @click="toggleDM" class="toggle"><i :class="setToggleIcon" aria-hidden="true" />
</a>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isUsingDarkMode: {
      type: Boolean,
      required: true
    },
    toggleDM: {
      type: Function,
      required: true,
    },
  },
  computed: {
    setToggleIcon() {
      return this.isUsingDarkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'
    }
  }
}
</script>

<style lang="less" scoped>
@import '../_settings.less';

header {
  .flexbox-property();
  margin: 0;
  padding: 20px 0;
  nav {
    margin: 0 auto;
  }
  a {
    text-decoration: none;
    color: inherit;
    padding: 20px 15px;
    // test github commit
  }
  .toggle {
    // position: absolute;
    float: right;
  }
  a:hover {
    .hover();
  }
  @media only screen and (max-width: 360px) {
    margin: 0px;
    nav {
      display: flex;
      flex-direction: column-reverse;
      a {
        padding: 5px 20px;
        border-bottom: 1px solid darkgray;
      }
    }
  }
}
</style>