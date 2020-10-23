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
      <button @click="toggleDM">Toggle DM</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    toggleDM: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>
@import '../_settings.less';

header {
  .flexbox-property();
  margin: 0;
  padding: 20px 0;
  a {
    text-decoration: none;
    color: inherit;
    padding: 20px 15px;
    margin: 10 15px;
  }
  button {
    position: absolute;
    float: right;
  }
  .router-link-exact-active {
    color: lightpink;
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