<template>
  <div class="slider">
    <div class="slider--content">
      <div v-for="i in data"
           :key="i.id"
           class="slider--content--item"><img :src="i.url" /></div>
    </div>
    <div class="slider--dots">
      <div :class="{active:activeIndex === i.id}"
           @click="handleDotClick(i.id)"
           class="slider--dots--item"
           v-for="i in data"
           :key="i.id"></div>
    </div>
  </div>

</template>
<script>
export default {
  name: "slider",
  props: ["data"],
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    handleDotClick(id) {
      console.log(id);
      this.activeIndex = id;
    }
  }
};
</script>
<style lang="scss" src="./style.scss" scoped></style>