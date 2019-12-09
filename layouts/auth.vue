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
  background: linear-gradient(
    to bottom right,
    $bg-color-dark-1,
    $bg-color-dark-2
  );

  @include flex(center, center);
}
</style>