<template>
  <header class="topbar__wrapper">
    <div class="topbar">
      <div class="topbar__main">
        <nuxt-link to="/timeline" class="logo">
          <img
            src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
            alt="掘金"
          />
        </nuxt-link>
        <ul>
          <nuxt-link
            v-for="item in navs"
            :key="item.id"
            :to="item.link"
            tag="li"
            class="nav-item"
            >name</nuxt-link
          >
        </ul>
      </div>
    </div>
  </header>
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
