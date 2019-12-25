export const state = () => ({
  reviewProd: {},
  cartCount: 0
});

export const mutations = {
  setReviewProd(state, payload) {
    state.reviewProd = payload;
  },
  setCartCount(state, payload) {
    state.cartCount = payload;
  }
};
