// import shop from '../../api/shop'

import httpClient from "../../api/api";

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  name: null,
  email: null,
  services: [],
  token: localStorage.getItem("user-token") || "",
  isLoading: false,
});

// mutations
const mutations = {
  //   pushProductToCart(state, { id }) {
  //     state.items.push({
  //       id,
  //       quantity: 1,
  //     });
  //   },

  //   incrementItemQuantity(state, { id }) {
  //     const cartItem = state.items.find((item) => item.id === id);
  //     cartItem.quantity++;
  //   },

  //   setCartItems(state, { items }) {
  //     state.items = items;
  //   },

  //   setCheckoutStatus(state, status) {
  //     state.checkoutStatus = status;
  //   },

  setName(state, name) {
    state.name = name;
  },
  setEmail(state, email) {
    state.email = email;
  },
  setServices(state, services) {
    state.services = services;
  },
  isLoading(state, value) {
    state.isLoading = value;
  },
};

// getters
const getters = {
  isAuthenticated: (state) => !!state.token,
  // cartProducts: (state, getters, rootState) => {
  //   return state.items.map(({ id, quantity }) => {
  //     const product = rootState.products.all.find(
  //       (product) => product.id === id
  //     );
  //     return {
  //       title: product.title,
  //       price: product.price,
  //       quantity,
  //     };
  //   });
  // },

  // cartTotalPrice: (state, getters) => {
  //   return getters.cartProducts.reduce((total, product) => {
  //     return total + product.price * product.quantity;
  //   }, 0);
  // },
};

// actions
const actions = {
  //   checkout({ commit, state }, products) {
  //     const savedCartItems = [...state.items];
  //     commit("setCheckoutStatus", null);
  //     // empty cart
  //     commit("setCartItems", { items: [] });
  //     shop.buyProducts(
  //       products,
  //       () => commit("setCheckoutStatus", "successful"),
  //       () => {
  //         commit("setCheckoutStatus", "failed");
  //         // rollback to the cart saved before sending the request
  //         commit("setCartItems", { items: savedCartItems });
  //       }
  //     );
  //   },
  //   addProductToCart({ state, commit }, product) {
  //     commit("setCheckoutStatus", null);
  //     if (product.inventory > 0) {
  //       const cartItem = state.items.find((item) => item.id === product.id);
  //       if (!cartItem) {
  //         commit("pushProductToCart", { id: product.id });
  //       } else {
  //         commit("incrementItemQuantity", cartItem);
  //       }
  //       // remove 1 item from stock
  //       commit(
  //         "products/decrementProductInventory",
  //         { id: product.id },
  //         { root: true }
  //       );
  //     }
  //   },
  requestLogin({ commit }, { email, password }) {
    return new Promise((resolve, reject) => {
      // The Promise used for router redirect in login
      commit("isLoading", true);
      httpClient
        .post("/api/v1/login ", { email: email, password: password })
        .then((resp) => {
          commit("isLoading", false);
          // const token = resp.data.token;
          // localStorage.setItem("user-token", token); // store the token in localstorage
          // commit(AUTH_SUCCESS, token);
          // // you have your token, now log in your user :)
          // dispatch(USER_REQUEST);
          resolve(resp);
        })
        .catch((err) => {
          commit("isLoading", false);
          localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
          reject(err);
        });
    });
  },

  setUser({ commit }, user) {
    commit("setName", user.name);
    commit("setEmail", user.email);
    commit("setServices", user.services);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
