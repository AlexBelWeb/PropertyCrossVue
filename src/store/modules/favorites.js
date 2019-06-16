import storage from "../../services/local.storage";

const state = {
  items: storage.favorites
};

const actions = {
  addToFavorites: ({ commit }, property) => {
    storage.addPropertyToFavorites(property);
    commit("addItemToFaves", storage.favorites);
  },

  removeFromFavorites: ({ commit }, property) => {
    storage.removePropertyFromFavorites(property);
    commit("removeItemFromFaves", storage.favorites);
  }
};

const mutations = {
  addItemToFaves: (state, favorites) => {
    state.items = favorites;
  },
  removeItemFromFaves: (state, favorites) => {
    state.items = favorites;
  }
};

const getters = {
  favoritesToArray: state => Object.values(state.items)
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
