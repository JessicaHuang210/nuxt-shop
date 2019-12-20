<template>
  <div class="card--wrap">
    <div class="card"
      v-for="(i, key) in data"
      :key="key">
      <img class="card--img"
        :src="i.imgURL" />
      <h1 class="card--title">{{ i.title }}</h1>
      <span class="card--description">{{ i.description }}</span>
      <div class="card--price">{{ i.price | commaFormat | dollarSign }}</div>
      <a @click.prevent="handleReviewBtnClick(key)"
        href="#"
        class="card--preview">
        <fa :icon="['fas', 'eye']"
          class="fa" /> 快速瀏覽</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: { data: { type: Object, default: () => {} } },
  data() {
    return {};
  },
  methods: {
    handleReviewBtnClick(key) {
      this.$store.commit("setReviewActive", true);
      this.$emit("onReviewPress", key);
    }
  }
};
</script>
<style lang="scss" src="./style.scss" scoped></style>
