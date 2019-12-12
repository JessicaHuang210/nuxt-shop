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
  created() {},
  methods: {
    onReviewPress(key) {
      console.log(key);
    }
  }
};
</script>
