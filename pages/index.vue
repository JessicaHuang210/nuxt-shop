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
