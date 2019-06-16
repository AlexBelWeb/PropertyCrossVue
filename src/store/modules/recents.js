import storage from "../../services/local.storage";

const state = storage.recents;

const actions = {
  addLocationToRecents: ({ commit }, location) => {
    storage.addLocationToRecents(location);
    commit("addItemToRecents", storage.recents);
  }
};

const mutations = {
  addItemToRecents: (state, recents) => {
    state = recents;
  }
};

const getters = {
  items: state => state.slice().reverse()
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
