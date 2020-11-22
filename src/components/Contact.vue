<template>
  <section class="contact-wrapper" style="text-align: center">
    <h2>Contact Info</h2>
    <br />
    <p>Jeffrey David Whitaker</p>
    <p>Elgin, OR, 97827</p>
    <br />
    <a href="mailto:jeffrey.david.whitaker@gmail.com"
      ><i class="fas fa-envelope-square"></i>jeffrey.david.whitaker@gmail.com</a
    ><br />
    <a href="http://jeffreywhitaker.com"
      ><i class="fas fa-globe"></i>jeffreywhitaker.com</a
    ><br />
    <a href="http://github.com/jeffreywhitaker"
      ><i class="fab fa-github-square"></i>github.com/jeffreywhitaker</a
    ><br />
    <a href="http://linkedin.com/in/jeffrey-david-whitaker"
      ><i class="fab fa-linkedin"></i>linkedin.com/in/jeffrey-david-whitaker</a
    >
    <div class="spacer"></div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '../_settings.less';

.contact-wrapper {
  // border-bottom: 1px solid @font-color-main;
  padding-bottom: 10px;
  margin-bottom: 10px;

  i {
    margin: 2px 5px;
    max-height: 30px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
