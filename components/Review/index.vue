<template>
  <div class="review">
    <transition name="fadeFast">
      <div v-if="isLoading"
        class="review--overlay">
        <fa :icon="['fas', 'spinner']"
          class="fa fa-spin text-secondary-light" />
      </div>
    </transition>
    <div @click="handleCloseClick"
      class="review--close">關閉
      <fa :icon="['fas', 'times']"
        class="fa" />
    </div>
    <div class="review--container">
      <img class="review--img"
        :src="data.imgURL" />
      <h3 class="review--title">{{data.title}}</h3>
      <p class="review--sub-title">{{data.description}}</p>
      <div class="review--price">
        <span class="review--price--origin">{{ 8900 | commaFormat | dollarSign }}</span>
        <span class="review--price--sale">{{ data.price | commaFormat | dollarSign }}</span>
      </div>
      <span>產品編號：103.397.36</span>
      <Btn class="review--add-to-cart"
        block>加入購物車</Btn>
    </div>
  </div>
</template>
<script>
import Btn from "@/components/Btn";
import { mapState } from "vuex";
export default {
  name: "Review",
  components: {
    Btn
  },
  computed: {
    ...mapState({
      data: state => state.product.reviewProd,
      isLoading: state => state.isLoading
    })
  },
  methods: {
    handleCloseClick() {
      this.$store.commit("setReviewActive", false);
    }
  }
};
</script>
<style lang="scss" src="./style.scss" scoped></style>