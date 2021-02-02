<template>
  <div class="topbar__wrapper">
    <div class="topbar">
      <div class="topbar__main">
        <nuxt-link to="/timeline" class="logo">
        <!--//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/logo.a7995ad.svg-->
          <img
            src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
            alt="掘金"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navs: [
        {
          name: "home",
          link: "/timeline",
        },
        {
          name: "pin",
          link: "/pins/recommend",
        },
        {
          name: "topic",
          link: "/topic",
        },
        {
          name: "book",
          link: "/book",
        },
      ],
    };
  },
};
</script>
<style lang="scss"  scoped>
.topbar__wrapper {
  z-index: 1000;
  position: relative;
  height: 60px;
  display: block;
  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    box-shadow: 0 0 4px #eee;
    transition: all 0.2s;
    .topbar__main {
      height: 100%;
      max-width: 960px;
      margin: 0 auto;
    }
  }
}
</style>
