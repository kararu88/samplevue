import dao from "@/dao/dao";

// initial state
const state = {
    timelines: [],
};

// getters
const getters = {
    getTimelines: (state) => {
        console.log(state.timelines);
    },
};

// actions
const actions = {
    // Initialize
    initTimeLines ({ commit }) {
        dao.getTimeLines(timelines =>  commit('setTimeLines', timelines));
    },
};

// mutations
const mutations = {
    setTimeLines (state, timeLines) {
        state.timelines = timeLines ;
        console.log("setTimeLines : " + JSON.stringify(state.timelines));
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};