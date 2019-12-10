<template>
  <div>
    <Header />
    <div class="container">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "layout",
  components: {
    Footer,
    Header
  }
};
</script>

