<template>
  <div class="section-xs">
    <ProductCard :data="productList" />
  </div>
</template>

<script>
import ProductCard from "~/components/ProductCard";
export default {
  name: "home",
  components: { ProductCard },
  data() {
    return {
      productList: [
        {
          id: 7,
          title: "BJÖRKSNÄS",
          description: "床框, 樺木, 附lönset床底板條",
          price: 13000,
          imgURL:
            "https://www.ikea.com.tw/dairyfarm/tw/images/296/0629696_PE694429_S4.jpg"
        },
        {
          id: 8,
          title: "BJÖRKSNÄS",
          description: "床框, 樺木, 附lönset床底板條",
          price: 12500,
          imgURL:
            "https://www.ikea.com.tw/dairyfarm/tw/images/296/0629696_PE694429_S4.jpg"
        },
        {
          id: 9,
          title: "ASKVOLL",
          description: "床框, 白色, 附luröy床底板條",
          price: 6490,
          imgURL:
            "https://www.ikea.com.tw/dairyfarm/tw/images/375/0637517_PE698357_S4.jpg"
        },
        {
          id: 10,
          title: "ASKVOLL",
          description: "床框, 白色, 附luröy床底板條",
          price: 7290,
          imgURL:
            "https://www.ikea.com.tw/dairyfarm/tw/images/375/0637517_PE698357_S4.jpg"
        },
        {
          id: 11,
          title: "BJÖRKSNÄS",
          description: "床框, 樺木, 附lönset床底板條",
          price: 13000,
          imgURL:
            "https://www.ikea.com.tw/dairyfarm/tw/images/296/0629696_PE694429_S4.jpg"
        },
        {
          id: 12,
          title: "BJÖRKSNÄS",
          description: "床框, 樺木, 附lönset床底板條",
          price: 13000,
          imgURL:
            "https://www.ikea.com.tw/dairyfarm/tw/images/296/0629696_PE694429_S4.jpg"
        }
      ]
    };
  }
};
</script>
