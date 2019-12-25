export const state = () => ({
  productMenuArr: [],
  spaceMenuArr: []
});

export const mutations = {
  setProductMenuArr(state, payload) {
    state.productMenuArr = payload;
  },
  setSpaceMenuArr(state, payload) {
    state.spaceMenuArr = payload;
  }
};
