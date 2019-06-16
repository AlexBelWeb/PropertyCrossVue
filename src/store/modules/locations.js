import nestoria from "../../services/api";

const INIT = "init";
const LOADING = "loading";
const SUCCESS = "success";
const ERROR = "error";

const getDefaultState = () => ({
  items: [],
  searchStatus: INIT,
  errorMessage: ""
});
const state = getDefaultState();

const actions = {
  getLocationsByName: async ({ commit }, placeName) => {
    try {
      commit("setStatus", LOADING);
      const { data } = await nestoria.get("/locations/searchByName", {
        params: { placeName }
      });
      commit("setLocations", data);
      commit("setStatus", SUCCESS);
    } catch (error) {
      commit("setError", error.response.data);
      commit("setStatus", ERROR);
    }
  },
  getLocationsByCoords: async ({ commit }, coords) => {
    try {
      commit("setStatus", LOADING);
      const { data } = await nestoria.get("/locations/searchByCoordinates", {
        params: coords
      });
      commit("setLocations", data);
      commit("setStatus", SUCCESS);
    } catch (error) {
      commit("setError", error.response.data);
      commit("setStatus", ERROR);
    }
  },
  resetSearch: ({ commit }) => {
    commit("resetSearch");
  }
};
const mutations = {
  setStatus: (state, status) => {
    state.searchStatus = status;
  },
  setLocations: (state, locations) => {
    state.items = locations;
  },
  setError: (state, error) => {
    state.errorMessage = error;
  },
  resetSearch: state => {
    Object.assign(state, getDefaultState());
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
