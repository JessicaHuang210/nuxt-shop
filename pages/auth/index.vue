<template>
  <div class="login">
    <Btn @onPress="handleGoogleBtnClick"
         type="primary">
      <fa :icon="['fab', 'google']"
          class="fa" /> Login with Google</Btn>
    <Btn @onPress="handleFacebookBtnClick"
         type="primary">
      <fa :icon="['fab', 'facebook']"
          class="fa" /> Login with Facebook</Btn>
  </div>
</template>
<script>
import Btn from "@/components/Btn";

export default {
  name: "auth",
  layout: "auth",
  components: {
    Btn
  },
  async created() {},
  computed: {},
  async fetch({ store, params }) {
    store.getters.userLoggedIn || (await store.dispatch("auth/getLoginState"));
  },
  methods: {
    async handleGoogleBtnClick() {
      await this.$store.dispatch("auth/googleLogin");
      this.$router.push({ path: "/" });
    }
  },
  created() {
    this.userLoggedIn && this.$router.push({ path: "/" });
  }
};
</script>
<style lang="scss" scoped>
[class^="btn"] {
  margin-bottom: 2rem;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  }
}
</style>
