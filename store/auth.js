import firebase from "firebase";
import Cookie from "js-cookie";
export const state = () => ({
  user: null,
  isLoading: false
});

export const actions = {
  getLoginState({ commit }) {
    commit("setIsLoading", true);
    return firebase.auth().onAuthStateChanged(user => {
      user &&
        commit("setUser", {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL
        });
      commit("setIsLoading", false);
    });
  },
  googleLogin({ commit }) {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        commit("setUser", {
          displayName: result.user.displayName,
          email: result.user.email,
          uid: result.user.uid,
          photoURL: result.user.photoURL
        });
      })
      .catch(function(error) {
        console.log(err);
      });
  },
  logout({ commit }) {
    return firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        commit("setUser", null);
        Cookie.remove("displayName");
        Cookie.remove("email");
        Cookie.remove("uid");
        Cookie.remove("photoURL");
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  }
};

export const mutations = {
  setUser(state, user) {
    state.user = user;
    user && Cookie.set("displayName", user.displayName);
    user && Cookie.set("email", user.email);
    user && Cookie.set("uid", user.uid);
    user && Cookie.set("photoURL", user.photoURL);
  },
  setIsLoading(state, payload) {
    state.isLoading = payload;
  }
};
export const getters = {
  user: state => state.user,
  loginStatus: state => state.user !== null && state.user !== undefined,
  isLoading: state => state.isLoading
};
