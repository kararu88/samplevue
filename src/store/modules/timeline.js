import dao from "@/dao/dao";

// initial state
const state = {
    timelines: [],
};

// getters
const getters = {
    getTimelines: (state) => {
        return state.timelines;
    },
};

// actions
const actions = {
    // Initialize
    initTimeLines ({ commit }) {
        commit('setTimeLines', dao.getTimeLines());
    },
};

// mutations
const mutations = {
    setTimeLines (state, timeLines) {
        state.timelines = timeLines ;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};