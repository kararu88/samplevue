
// initial state
const state = {
    pk: null,
    appli_user_pk: null,
    task_name: null,
    start_time: null,
    end_time: null,
    actual_time: null,
    append:null,
};

// getters
const getters = {

    getStartTime: state => state.start_time !== null ? state.start_time.substr(11) : null,
    getEndTime: state => state.end_time !== null ? state.end_time.substr(11) : null,

};

// actions
const actions = {

};

// mutations
const mutations = {

    setTimeLineData(state, timeline) {
        state.pk = timeline.pk;
        state.appli_user_pk = timeline.appli_user_pk;
        state.task_name = timeline.task_name;
        state.start_time = timeline.start_time;
        state.end_time = timeline.end_time;
        state.actual_time = timeline.actual_time;
    },

    clearInputForm(state) {
        state.pk = null;
        state.appli_user_pk = null;
        state.task_name = null;
        state.start_time = null;
        state.end_time = null;
        state.actual_time = null;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};