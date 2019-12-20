<template>
  <a class="btn"
     :class="[btnType,btnWith,btnDisabled]"
     @click.prevent="handleBtnClick"
     href="#">
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: "Btn",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    block: {
      type: String,
      default: undefined
    },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    btnType() {
      return `btn--${this.type}`;
    },
    btnWith() {
      return this.block !== undefined ? "btn--block" : "";
    },
    btnDisabled() {
      return this.disabled ? "disabled" : "";
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