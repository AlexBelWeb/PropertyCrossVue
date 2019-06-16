import nestoria from "../../services/api";

const getDefaultState = () => ({
  properties: null,
  property: null,
  location: null,
  hasMore: false,
  totalResults: 0,
  errorMessage: "",
  loading: false,
  page: 0
});

const state = getDefaultState();

const actions = {
  getProperties: async ({ commit }, { placeName, page }) => {
    try {
      commit("resetError");
      commit("setLoading", true);
      const { data } = await nestoria.get(
        `/locations/${placeName}/properties`,
        { params: { page } }
      );
      commit("loadProperties", data);
      commit("setLoading", false);
    } catch (error) {
      commit("setError", error);
      commit("setLoading", false);
    }
  },
  getProperty: async ({ commit }, { placeName, id }) => {
    try {
      commit("resetError");
      commit("setLoading", true);
      const { data } = await nestoria.get(
        `/locations/${placeName}/properties/${id}`
      );
      commit("loadProperty", data);
      commit("setLoading", false);
    } catch (error) {
      commit("setError", error);
      commit("setLoading", false);
    }
  },
  resetProperties: ({ commit }) => {
    commit("resetProperties");
  },
  resetProperty: ({ commit }) => {
    commit("resetProperty");
  }
};

const mutations = {
  setLoading: (state, value) => {
    state.loading = value;
  },
  resetError: state => {
    state.errorMessage = "";
  },
  setError: (state, error) => {
    state.errorMessage = error;
  },
  loadProperties: (
    state,
    { hasMore, location, page, properties, totalResults }
  ) => {
    state.hasMore = hasMore;
    state.location = location;
    state.page = page;
    state.properties = state.properties
      ? [...state.properties, ...properties]
      : properties;
    state.totalResults = totalResults;
  },
  resetProperties: state => {
    Object.assign(state, getDefaultState());
  },
  resetProperty: state => {
    state.property = null;
  },
  loadProperty: (state, property) => {
    state.property = property;
  }
};

const getters = {
  properties: state => state.properties,
  loading: state => state.loading,
  property: state => state.property,
  hasMore: state => state.hasMore,
  totalResults: state => state.totalResults,
  errorMessage: state => state.errorMessage,
  location: state => state.location,
  page: state => state.page
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
