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
        <fa :icon="['fas', 'spinner']"
            class="fa fa-spin text-secondary-light"
            v-if="isLoading" />
        <transition name="fade">
          <div v-if="!isLoading"
               class="container">
            <a :key="i.key"
               v-for="i in dataFormat"
               class="dropdown--content--item"
               href="#">{{ i.cateName }}</a>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState } from "vuex";
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
    },
    ...mapState({
      isLoading: state => state.isLoading
    })
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