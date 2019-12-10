import { getUserFromCookie } from "~/utils";
import Cookie from "js-cookie";
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
  }
};
