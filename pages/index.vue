<template>
  <div class="section-xs">
    <ProductCard :data="productList"
      @onReviewPress="onReviewPress" />
  </div>
</template>

<script>
import ProductCard from "~/components/ProductCard";
import { db } from "~/plugins/firebase";
export default {
  name: "home",
  components: { ProductCard },
  data() {
    return {
      productList: []
    };
  },
  async asyncData(context) {
    // 從firebase database取資料
    let list = {};
    await db
      .ref("products")
      .once("value")
      .then(res => {
        list = res.val();
      });
    return {
      productList: list
    };
  },
  methods: {
    async onReviewPress(key) {
      let obj = {};
      this.$store.commit("setIsLoading", true);
      await db
        .ref("products/" + key)
        .once("value")
        .then(res => {
          obj = res.val();
          this.$store.commit("product/setReviewProd", obj);
          this.$store.commit("setIsLoading", false);
        });
    }
  }
};
</script>
