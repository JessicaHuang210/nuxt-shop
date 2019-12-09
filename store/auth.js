import firebase from "firebase";
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
  login({ commit }) {
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
      })
      .catch(function(error) {
        // An error happened.
      });
  }
};

export const mutations = {
  setUser(state, user) {
    state.user = user;
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
