<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">nuxt-demo</h1>
      <h2 class="subtitle"></h2>
      <div class="links">
        <a class="button--green" href="https://nuxtjs.org/" target="_blank">Documentation</a>
        {{ price | commaFormat | dollarSign}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo
  },
  computed: {
    ...mapGetters({
      user: "auth/user"
    })
  },
  data() {
    return {
      price: 100000
    };
  },
  created() {
    // this.$store.dispatch("auth/getLoginState");
  }
};
</script>
