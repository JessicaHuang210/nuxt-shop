import { getUserFromCookie } from "~/utils";

export const state = () => ({
  isReviewActive: false,
  isLoading: false
});
export const actions = {
  nuxtServerInit({ dispatch, commit }, { req }) {
    const uid = getUserFromCookie(req.headers.cookie, "uid");
    uid || dispatch("auth/getLoginState");
    uid &&
      commit("auth/setUser", {
        displayName: getUserFromCookie(req.headers.cookie, "displayName"),
        email: getUserFromCookie(req.headers.cookie, "email"),
        uid: uid,
        photoURL: getUserFromCookie(req.headers.cookie, "photoURL")
      });
    uid &&
      commit(
        "product/setCartCount",
        parseInt(getUserFromCookie(req.headers.cookie, "cartCount"))
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
