import dao from "@/dao/dao";
import util from "@/util/"

// initial state
const state = {
    timelines: {
        [util.getTodayDate()]:[],
        [util.getYesterdayDate()]:[],
        show:[],
    },
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
        dao.getTodayTimeLines(timelines =>  commit('initTimeLines', timelines));
    },

    showTodayTimeLines ({ commit }) {
        if(state.timelines[util.getTodayDate()].length === 0) {
            dao.getTodayTimeLines(timelines => commit('setTimeLines', timelines, util.getTodayDate()));
        }

        commit('showTimeLines', util.getTodayDate());
    },

    showYesterdayTimeLines ({ commit }) {
        if(state.timelines[util.getYesterdayDate()].length === 0) {
            dao.getYesterdayTimeLines(timelines => commit('setTimeLines', timelines, util.getYesterdayDate()));
        }

        commit('showTimeLines', util.getYesterdayDate());
    },
};

// mutations
const mutations = {
    initTimeLines (state, timeLines) {
        state.timelines[util.getTodayDate()] = timeLines ;
        state.timelines.show = timeLines ;
    },

    setTimeLines (state, timeLines, date) {
        state.timelines[date] = timeLines ;
    },

    showTimeLines (state, date) {
        state.timelines.show = state.timelines[date] ;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};