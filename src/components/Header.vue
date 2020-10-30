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
    <a @click="toggleDM" class="toggle"
      ><i :class="setToggleIcon" aria-hidden="true" />
    </a>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isUsingDarkMode: {
      type: Boolean,
      required: true,
    },
    toggleDM: {
      type: Function,
      required: true,
    },
  },
  computed: {
    setToggleIcon() {
      return this.isUsingDarkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'
    },
  },
}
</script>

<style lang="less" scoped>
@import '../_settings.less';

header {
  .flexbox-property();
  margin: 0;
  nav {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-grow: 1;
  }
  a {
    text-decoration: none;
    color: inherit;
    padding: 20px 15px;
    position: relative;
    &:after {
      transition: width 0.5s;
      width: 0%;
      position: absolute;
      content: '';
      height: 2px;
      bottom: 15px;
      margin: 0 auto;
      left: 0;
      right: 0;
    }
    &:hover:after {
      animation-name: underline;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      background-color: #f2e5d7;
      width: 40%;
    }
  }

  @keyframes underline {
    from {
      background-color: #f2e5d7;
      width: 40%;
    }
    to {
      background-color: #ffbcb5;
      width: 80%;
    }
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
