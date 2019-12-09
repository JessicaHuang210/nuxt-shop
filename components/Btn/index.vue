<template>
  <a :class="btnType" @click.prevent="handleBtnClick" href="#">
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: "Btn",
  props: ["type"],
  computed: {
    btnType() {
      return `btn--${this.type || "primary"}`;
    }
  },
  methods: {
    handleBtnClick() {
      this.$emit("onPress");
    }
  }
};
</script>
<style lang="scss" src="./style.scss" scoped></style>