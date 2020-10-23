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
  </header>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '../_settings.less';

header {
  .flexbox-property();
  padding: 20px 0;
  a {
    text-decoration: none;
    color: @font-color-main;
    padding: 20px 15px;
    margin: 10 15px;
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