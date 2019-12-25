<template>
  <div class="section-xs">
    <ValidationObserver v-slot="{ invalid }">
      <div class="form">
        <div>
          <div class="form--item">
            <label>上層 : </label>
            <select v-model="parent">
              <option value="">無上層</option>
              <option v-for="i in parentList"
                :key="i.key"
                :value="i.key">{{ i.cateName}}</option>
            </select>
          </div>
          <div class="form--item">
            <label>分類名稱 : </label>
            <ValidationProvider rules="required"
              v-slot="{ errors }">
              <input type="text"
                v-model="formData.cateName" />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
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
import { mapState } from "vuex";
import { db } from "~/plugins/firebase";
import Btn from "~/components/Btn";
import { deepCopy } from "~/utils";
const formDefaultData = {
  cateName: ""
};
export default {
  name: "addCate",
  components: { Btn },
  middleware: "check-auth",
  data() {
    return {
      parentList: [],
      parent: "",
      formData: deepCopy(formDefaultData)
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    })
  },
  methods: {
    reset() {
      this.formData = deepCopy(formDefaultData);
    },
    async handleAddBtnClick(invalid) {
      if (invalid) return;
      this.$store.commit("setIsLoading", true);

      const newPostKey = db.ref("cate").push().key;
      let updates = {};
      this.parent || (updates["/cate/" + newPostKey] = this.formData);
      this.parent &&
        (updates[
          "/cate/" + `${this.parent}/child/` + newPostKey
        ] = this.formData);
      await db.ref().update(updates);
      this.$store.commit("setIsLoading", false);
      await this.getParentList();
      this.reset();
    },
    async getParentList() {
      this.parentList = [];
      await db
        .ref("cate")
        .once("value")
        .then(res => {
          Object.keys(res.val()).forEach(i => {
            this.parentList.push({ ...res.val()[i], key: i });
          });
        });
    }
  },
  async mounted() {
    await this.getParentList();
  }
};
</script>