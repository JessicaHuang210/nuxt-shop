<template>
  <div class="center-container">
    <nuxt />
  </div>
</template>
<script>
export default {
  name: "auth"
};
</script>

<style lang="scss" scoped>
.center-container {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #3d4e66, #232f49);

  @include flex(center, center);
}
</style>