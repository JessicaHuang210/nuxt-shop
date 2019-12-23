import { getUserFromCookie } from "~/utils";

export const state = () => ({
  isReviewActive: false,
  isLoading: false
});
export const actions = {
  nuxtServerInit({ dispatch, commit }, { req }) {
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
