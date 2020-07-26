import httpClient from "../../api/api";
import isEmpty from "is-empty";
import router from "./../../router/index";
// initial state
// shape: [{ id, quantity }]
const state = () => ({
  name: null,
  email: null,
  services: [],
  token: localStorage.getItem("user-token"),
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
  isAuthenticated: (state) => !isEmpty(state.token),
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
  requestLogin({ state, commit, dispatch }, { email, password }) {
    return new Promise((resolve, reject) => {
      commit("isLoading", true);
      httpClient
        .post("/v1/login", { email: email, password: password })
        .then((resp) => {
          console.log(resp);
          commit("isLoading", false);
          // const token = resp.data.token;
          // localStorage.setItem("user-token", token); // store the token in localstorage
          // commit(AUTH_SUCCESS, token);
          // // you have your token, now log in your user :)
          // dispatch(USER_REQUEST);

          dispatch("setUser", resp.data);
          const token = resp.data.token?.accessToken;
          if (isEmpty(token)) {
            throw "Token can't be empty in response";
          }
          const refreshToken = resp.data.token?.refreshToken;
          if (isEmpty(refreshToken)) {
            throw "Refresh token can't be empty in response";
          }
          localStorage.setItem("user-token", token);
          localStorage.setItem("refresh-token", refreshToken);
          state.token = localStorage.getItem("user-token");
          resolve(resp);
        })
        .catch((err) => {
          commit("isLoading", false);
          reject(err);
        });
    });
  },
  requestSignup({ state, commit, dispatch }, { name, email, password }) {
    return new Promise((resolve, reject) => {
      commit("isLoading", true);
      httpClient
        .post("/v1/register", {
          name: name,
          email: email,
          password: password,
        })
        .then((resp) => {
          console.log(resp);
          commit("isLoading", false);
          // const token = resp.data.token;
          // localStorage.setItem("user-token", token); // store the token in localstorage
          // commit(AUTH_SUCCESS, token);
          // // you have your token, now log in your user :)
          // dispatch(USER_REQUEST);

          dispatch("setUser", resp.data);
          const token = resp.data.token;
          if (isEmpty(token)) {
            throw "Token can't be empty in response";
          }
          console.log(token);
          localStorage.setItem("user-token", token);
          state.token = localStorage.getItem("user-token");
          resolve(resp);
        })
        .catch((err) => {
          commit("isLoading", false);
          reject(err);
        });
    });
  },

  logout({ state }) {
    localStorage.removeItem("user-token");
    state.token = null;
    router.push("/login");
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
