import dao from "@/dao/dao";
import util from "@/util/index"

// initial state
const state = {
    [util.getTodayDate()]: [],
    [util.getYesterdayDate()]: [],
    show: [],
};

// getters
const getters = {

};

// actions
const actions = {
    // Initialize
    initTimeLines ({ commit }) {
        dao.getTodayTimeLines(timelines =>  commit('initTimeLines', timelines));
    },

    showTodayTimeLines ({ commit }) {
        if(state[util.getTodayDate()].length === 0) {
            dao.getTodayTimeLines(timelines => commit('setTimeLines', { timelines:timelines, date:util.getTodayDate()}));
        }else{
            commit('showTimeLines', util.getTodayDate());
        }
    },

    showYesterdayTimeLines ({ commit }) {
        if(state[util.getYesterdayDate()].length === 0) {
            dao.getYesterdayTimeLines(timelines => commit('setTimeLines', { timelines:timelines, date:util.getYesterdayDate()}));
        }else{
            commit('showTimeLines', util.getYesterdayDate());
        }
    },
};

// mutations
const mutations = {
    initTimeLines (state, timeLines) {
        state[util.getTodayDate()] = timeLines ;
        state.show = timeLines ;
    },

    setTimeLines (state, payload) {
        state[payload.date] = payload.timelines ;
        state.show = payload.timelines ;
    },

    showTimeLines (state, date) {
        state.show = state[date] ;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};