
// initial state
const state = {
    timeline : {
        type: Object,
    }
};

// getters
const getters = {

    getStartTime: state => state.timeline.start_time !== null ? state.timeline.start_time.substr(11) : null,
    getEndTime: state => state.timeline.end_time !== null ? state.timeline.end_time.substr(11) : null,

};

// actions
const actions = {

};

// mutations
const mutations = {

    setTimeLineData(state, timeline) {
        state.timeline = timeline;
    },

    clearInputForm(state) {
        state.timeline = null;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};