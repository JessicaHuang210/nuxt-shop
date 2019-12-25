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
          <fa :icon="['fas', 'spinner']"
            class="fa fa-spin text-secondary-light"
            v-if="isLoading" />
          <a @click.prevent="handleLoginBtnClick"
            href="#"
            v-if="!userLoggedIn && !isLoading">登入或註冊/購物清單</a>
          <div v-if="userLoggedIn && !isLoading">
            <a @click.prevent="handleProfileBtnClick"
              href="#">Hi, {{ this.userProfile.displayName }}</a>
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
          <!-- 左邊 -->
          <div>
            <div @click="handleLogoClick"
              class="logo">
              <img src="/IKEA_logo.svg" />
            </div>
            <nav class="main-header--menu">
              <DropDownMenuItem :data="productMenuArr"
                class="main-header--menu--item"
                iconName="chevron-down"
                label="產品" />
              <DropDownMenuItem :data="spaceMenuArr"
                class="main-header--menu--item"
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
          <!-- 右邊 -->
          <div>
            <div class="search-input">
              <input placeholder="搜尋看看沙發、地毯"
                type="text" />
              <fa :icon="['fas', 'search']"
                class="fa" />
            </div>
            <a href="#"
              class="cart">
              <fa :icon="['fas', 'shopping-cart']"
                class="fa" />
              <div v-if="cartCount"
                class="cart--badge">{{ cartCount }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { db } from "~/plugins/firebase";
import Cookie from "js-cookie";
import { mapGetters, mapState } from "vuex";
import DropDownMenuItem from "@/components/DropDownMenuItem";
export default {
  name: "Header",
  components: { DropDownMenuItem },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      cartCount: state => state.product.cartCount,
      productMenuArr: state => state.header.productMenuArr,
      spaceMenuArr: state => state.header.spaceMenuArr
    }),
    ...mapGetters({
      userProfile: "auth/user",
      userLoggedIn: "auth/loginStatus"
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
    },
    handleLogoClick() {
      this.$router.push({ path: "/" });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" src="./style.scss" scoped></style>
