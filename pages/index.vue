<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-demo
      </h1>
      <h2 class="subtitle"></h2>
      <div class="links">
        <a href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">
          Documentation
        </a>
        {{ price | commaFormat | dollarSign}}
        <a href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo
  },
  data() {
    return {
      price: 100000
    };
  }
};
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

.title {
  display: block;
  color: #35495e;
  letter-spacing: 1px;
  font-weight: 300;
  font-size: 100px;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.subtitle {
  padding-bottom: 15px;
  color: #526488;
  word-spacing: 5px;
  font-weight: 300;
  font-size: 42px;
}

.links {
  padding-top: 15px;
}
</style>
