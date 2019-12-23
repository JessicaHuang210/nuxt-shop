<template>
  <div class="section-xs addProduct">
    <ValidationObserver v-slot="{ invalid }">
      <div class="form">
        <div>
          <div class="form--item">
            <label>title : </label>
            <ValidationProvider rules="required"
                                v-slot="{ errors }">
              <input type="text"
                     v-model="formData.title" />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form--item">
            <label>description : </label>
            <ValidationProvider rules="required"
                                v-slot="{ errors }">
              <input type="text"
                     v-model="formData.description" />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form--item">
            <label>price : </label>
            <ValidationProvider rules="required"
                                v-slot="{ errors }">
              <input type="number"
                     v-model="formData.price" />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form--item">
            <label>imgURL : </label>
            <ValidationProvider rules="required"
                                v-slot="{ errors }">
              <input type="text"
                     v-model="formData.imgURL" />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <img :src="formData.imgURL" />
      </div>
      <Btn :disabled="invalid || isLoading"
           @onPress="handleAddBtnClick(invalid)"
           type="primary"
           block>
        <fa :icon="['fas', 'spinner']"
            class="fa fa-spin"
            v-if="isLoading" /> 新增</Btn>
    </ValidationObserver>
  </div>
</template>
<script>
import Btn from "~/components/Btn";
import { db } from "~/plugins/firebase";
import { deepCopy } from "~/utils";
const formDefaultData = {
  title: "",
  description: "",
  price: "",
  imgURL: ""
};
export default {
  name: "addProducts",
  components: { Btn },
  middleware: "check-auth",
  data() {
    return {
      isLoading: false,
      formData: deepCopy(formDefaultData)
    };
  },
  methods: {
    reset() {
      this.formData = deepCopy(formDefaultData);
    },
    async handleAddBtnClick(invalid) {
      if (invalid) return;

      this.isLoading = true;
      const newPostKey = db.ref("products").push().key;
      let updates = {};
      updates["/products/" + newPostKey] = this.formData;
      await db.ref().update(updates);
      this.isLoading = false;
      this.reset();
    }
  }
};
</script>
<style lang="scss" src="./style.scss" scoped></style>
