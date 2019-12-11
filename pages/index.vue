<template>
  <div class="section-xs">
    <ProductCard :data="productList" />
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
    let arr = [];
    await db
      .ref("products")
      .once("value")
      .then(res => {
        arr = res.val();
      });
    return {
      productList: arr
    };
  },
  created() {}
};
</script>
