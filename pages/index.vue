<template>
  <div class="section-xs">
    <Slider :data="slider1" />
  </div>
</template>

<script>
import Slider from "~/components/Slider";
export default {
  name: "home",
  components: {
    Slider
  },
  data() {
    return {
      slider1: [
        {
          id: 0,
          url:
            "https://www.ikea.com.tw/dairyfarm/tw/uploader/image/1573639304_667.jpg"
        },
        {
          id: 1,
          url:
            "https://www.ikea.com.tw/dairyfarm/tw/uploader/image/1570536568_223.jpg"
        }
      ]
    };
  }
};
</script>
