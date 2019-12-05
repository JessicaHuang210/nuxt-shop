<template>
  <header class="header">
    <div class="logo"></div>
    <nav>
      <a class="nav-item">產品
        <fa :icon="['fas', 'coffee']" /></a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
<style lang="scss" src="./style.scss" scoped></style>
