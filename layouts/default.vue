<template>
  <div class="main">
    <div class="main--left"
         :class="{active:isReviewActive}">
      <div @click="handleOverlayClick"
           class="main--left--overlay"></div>
      <Header />
      <div class="container">
        <nuxt />
      </div>
      <Footer />
    </div>
    <transition name="slideRtoL">
      <Review v-if="isReviewActive"
              class="main--right" />
    </transition>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Review from "~/components/Review";
export default {
  name: "layout",
  components: {
    Header,
    Footer,
    Review
  },
  computed: {
    ...mapState(["isReviewActive"])
  },
  methods: {
    handleOverlayClick() {
      this.$store.commit("setReviewActive", false);
    }
  }
};
</script>

