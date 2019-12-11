<template>
  <div class="section-md addProduct">
    <div class=" form">
      <div>
        <div class="form--item"><label>title : </label><input type="text"
                 v-model="title" /></div>
        <div class="form--item"><label>description : </label><input type="text"
                 v-model="description" /></div>
        <div class="form--item"><label>price : </label><input type="number"
                 v-model="price" /></div>
        <div class="form--item"><label>imgURL : </label><input type="text"
                 v-model="imgURL" /></div>
      </div>
      <img :src="imgURL" />
    </div>
    <Btn @click="handleAddBtnClick"
         type="primary"
         block>新增</Btn>
  </div>
</template>
<script>
import Btn from "~/components/Btn";
import { db } from "~/plugins/firebase";
export default {
  name: "addProducts",
  components: { Btn },
  middleware: "check-auth",
  data() {
    return {
      title: "",
      description: "",
      price: 0,
      imgURL: ""
    };
  },
  methods: {
    async handleAddBtnClick() {}
  }
};
</script>
<style lang="scss" src="./style.scss" scoped></style>