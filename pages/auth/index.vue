<template>
  <div class="login">
    <Btn @onPress="handleBtnClick" type="primary">Login with Google</Btn>
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
    async handleBtnClick() {
      await this.$store.dispatch("auth/login");
      this.$router.push({ path: "/" });
    }
  },
  created() {
    this.userLoggedIn && this.$router.push({ path: "/" });
  }
};
</script>