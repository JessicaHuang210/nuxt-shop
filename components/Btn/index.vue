<template>
  <a :class="[btnType,btnWith]"
     @click.prevent="handleBtnClick"
     href="#">
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: "Btn",
  props: ["type", "block"],
  computed: {
    btnType() {
      return `btn--${this.type || "primary"}`;
    },
    btnWith() {
      return this.block !== undefined ? "btn--block" : "";
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