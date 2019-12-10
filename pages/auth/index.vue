<template>
  <div class="">
    <Btn @onPress="handleGoogleBtnClick"
         type="primary">
      <fa :icon="['fab', 'google']"
          class="fa" /> Login with Google
    </Btn>
    <div class="mb-2"></div>
    <Btn @onPress="handleBackBtnClick"
         type="primary">回首頁</Btn>
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
  methods: {
    async handleGoogleBtnClick() {
      await this.$store.dispatch("auth/googleLogin");
      this.$router.push({ path: "/" });
    },
    handleBackBtnClick() {
      this.$router.push({ path: "/" });
    }
  },
  created() {
    this.userLoggedIn && this.$router.push({ path: "/" });
  }
};
</script>
