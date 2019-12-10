<template>
  <div class="section">
    <div class="profile--item"><span>displayName : </span>{{ this.user | emptyObj('displayName') }}</div>
    <div class="profile--item"><span>email : </span>{{ this.user | emptyObj('email') }}</div>
    <div class="profile--item"><span>uid : </span>{{ this.user | emptyObj('uid') }}</div>
    <div class="profile--item"><span>photoURL : </span>{{ this.user | emptyObj('photoURL') }}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import _ from "lodash";
export default {
  name: "profile",
  middleware: "check-auth",
  computed: {
    ...mapGetters({
      user: "auth/user"
    })
  },
  watch: {
    user(val) {
      val || this.$router.push({ path: "/auth" });
    }
  }
};
</script>
<style lang="scss" src="./style.scss" scoped></style>