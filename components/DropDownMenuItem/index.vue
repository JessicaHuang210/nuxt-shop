<template>
  <div class="dropdown">
    <a @click="handleMenuDropdownClick"
      class="dropdown--item"
      href="#"
      ref="dropdownItem">
      {{ label }}
      <fa :class="{active:isOpen}"
        :icon="['fas', iconName]"
        class="fa" />
    </a>
    <transition name="fade">
      <div class="dropdown--content"
        v-if="isOpen">
        <div class="container">
          <a :key="i.key"
            v-for="i in dataFormat"
            class="dropdown--content--item"
            href="#">{{ i.label}}</a>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "DropDownMenuItem",
  props: {
    label: { type: String, default: "未確認" },
    iconName: { type: String, default: "chevron-down" },
    data: { type: Array, default: () => [] }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    dataFormat() {
      return this.data || [];
    }
  },
  methods: {
    handleMenuDropdownClick() {
      this.isOpen = !this.isOpen;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    }
  },
  mounted() {
    window.addEventListener("click", this.close);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.close);
  }
};
</script>
<style lang="scss" src="./style.scss" scoped></style>