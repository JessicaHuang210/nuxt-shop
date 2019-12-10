<template>
  <header class="header">
    <!-- 上面小選單 -->
    <div class="sub-header-wrap">
      <div class="container">
        <div class="sub-header">
          <span class="sub-header--country">台灣</span>

          <nav class="sub-header--menu">
            <a class="sub-header--menu--item"
               href="#">宜家卡</a>
            <a class="sub-header--menu--item"
               href="#">IKEA 企業業務</a>
            <a class="sub-header--menu--item"
               href="#">分店資訊</a>
            <a class="sub-header--menu--item"
               href="#">瑞典餐廳</a>
          </nav>

          <fa :icon="['fas','spinner']"
              class="fa fa-spin text-secondary-light"
              v-if="isLoading" />
          <a @click.prevent="handleLoginBtnClick"
             href="#"
             v-if="!userLoggedIn && !isLoading">登入或註冊/購物清單</a>
          <div v-if="userLoggedIn && !isLoading">
            <a @click.prevent="handleProfileBtnClick"
               href="#">Hi, {{this.userProfile.displayName}}
            </a>
            |
            <a @click.prevent="handleLogoutBtnClick"
               href="#">登出</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 主要選單 -->
    <div class="main-header-wrap">
      <div class="container">
        <div class="main-header">
          <div class="logo">
            <!-- <img src="/IKEA_logo.svg" /> -->
          </div>
          <nav class="main-header--menu">
            <DropDownMenuItem :data="productMenuArr"
                              class="main-header--menu--item"
                              iconName="chevron-down"
                              label="產品" />
            <DropDownMenuItem class="main-header--menu--item"
                              iconName="chevron-down"
                              label="空間" />
            <a class="main-header--menu--item"
               href="#">佈置靈感</a>
            <a class="main-header--menu--item"
               href="#">再創低價</a>
            <a class="main-header--menu--item"
               href="#">新品專區</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import DropDownMenuItem from "@/components/DropDownMenuItem";
export default {
  name: "Header",
  components: { DropDownMenuItem },
  data() {
    return {
      productMenuArr: [
        {
          col: 0,
          data: [
            { key: 1, label: "雙人床" },
            { key: 2, label: "泡綿/乳膠床墊" },
            { key: 3, label: "彈簧床墊" },
            { key: 4, label: "系統衣櫃 - PAX系列" },
            { key: 5, label: "衣櫃" },
            { key: 6, label: "抽屜櫃" },
            { key: 7, label: "棉被" }
          ]
        },
        {
          col: 2,
          data: [
            { key: 1, label: "雙人床" },
            { key: 2, label: "泡綿/乳膠床墊" },
            { key: 3, label: "彈簧床墊" },
            { key: 4, label: "系統衣櫃 - PAX系列" },
            { key: 5, label: "衣櫃" },
            { key: 6, label: "抽屜櫃" },
            { key: 7, label: "棉被" }
          ]
        },
        {
          col: 3,
          data: [
            { key: 1, label: "雙人床" },
            { key: 2, label: "泡綿/乳膠床墊" },
            { key: 3, label: "彈簧床墊" },
            { key: 4, label: "系統衣櫃 - PAX系列" },
            { key: 5, label: "衣櫃" },
            { key: 6, label: "抽屜櫃" },
            { key: 7, label: "棉被" }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      userProfile: "auth/user",
      userLoggedIn: "auth/loginStatus",
      isLoading: "auth/isLoading"
    })
  },
  methods: {
    handleLoginBtnClick() {
      this.$router.push({ path: "/auth" });
    },
    handleLogoutBtnClick() {
      this.$store.dispatch("auth/logout");
    },
    handleProfileBtnClick() {
      this.$router.push({ path: "/profile" });
    }
  },
  async created() {}
};
</script>
<style lang="scss" src="./style.scss" scoped></style>
