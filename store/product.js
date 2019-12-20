export const state = () => ({
  reviewProd: {}
});

export const mutations = {
  setReviewProd(state, payload) {
    state.reviewProd = payload;
  }
};
