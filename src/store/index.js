import { getUserFromCookie } from "~/utils";
import { db } from "~/plugins/firebase";
export const state = () => ({
  isReviewActive: false,
  isLoading: false
});
export const actions = {
  async nuxtServerInit({ dispatch, commit }, { req }) {
    const cookie = ((req || {}).headers || {}).cookie || "";
    const uid = getUserFromCookie(cookie, "uid");
    uid || dispatch("auth/getLoginState");
    uid &&
      commit("auth/setUser", {
        displayName: getUserFromCookie(cookie, "displayName"),
        email: getUserFromCookie(cookie, "email"),
        uid: uid,
        photoURL: getUserFromCookie(cookie, "photoURL")
      });
    uid &&
      commit(
        "product/setCartCount",
        parseInt(getUserFromCookie(cookie, "cartCount"))
      );

    //產品下拉選單
    let pArr = [];
    await db
      .ref("cate/-Lww7H87mF6wQNkgtlfo")
      .once("value")
      .then(res => {
        Object.keys(res.val().child).forEach(i => {
          pArr.push({ ...res.val().child[i], key: i });
        });
        commit("header/setProductMenuArr", pArr);
      });
    // 空間拉選單
    let sArr = [];
    await db
      .ref("cate/-LwwCOXdUFVwA8_AbaKX")
      .once("value")
      .then(res => {
        Object.keys(res.val().child).forEach(i => {
          sArr.push({ ...res.val().child[i], key: i });
        });
        commit("header/setSpaceMenuArr", sArr);
      });
  }
};

export const mutations = {
  setReviewActive(state, payload) {
    state.isReviewActive = payload;
  },
  setIsLoading(state, payload) {
    state.isLoading = payload;
  }
};

export const getters = {};
