import dao from "@/dao/dao";
import util from "@/util/index"

// initial state
const state = {
    [util.getTodayDate()]: [],
    [util.getYesterdayDate()]: [],
};

// getters
const getters = {

    getTimeLinePkListAt: (state) => (date) => {
        let achi_pk_list = [];

        for(let achi of state[date]){
            achi_pk_list.push(achi.pk);
        }

        return achi_pk_list;
    },

    // TODO filterのため、長さ１の配列で帰ってくる。そのため[0]と先頭のデータを取得している。
    // エラーハンドリングを導入するか検討する必要あり。想定外の長さの配列が返ってくる可能性を考える。
    getTimeLineAt: (state) => (date, pk) => {
        return state[date].filter( (item) => item.pk === pk )[0];
    },

    /**
     * 引数payloadオブジェクトのdateとpkで指定した
     * オブジェクトが、編集中かどうか返す。
     * @param state
     * @param payload
     */
    isEditing: (state, getters) => (date, pk) => {
        const arch = getters.getTimeLineAt(date, pk);

        if(arch.editing){
            return arch.editing;
        }else{
            return false;
        }
    },
};

// actions
const actions = {
    // Initialize
    initTimeLines ({ commit }) {
        dao.getTimeLines(timelines => commit('setTimeLines', { timelines:timelines, date:util.getTodayDate()}), util.getTodayDate());
    },

    getTimeLinesAt ({ commit }, payload) {
        if(state[payload.date].length === 0) {
            dao.getTimeLines(timelines => commit('setTimeLines', { timelines:timelines, date:payload.date}), payload.date);
        }
    },

    getTodayTimeLines ({ commit }) {
        if(state[util.getTodayDate()].length === 0) {
            dao.getTimeLines(timelines => commit('setTimeLines', { timelines:timelines, date:util.getTodayDate()}), util.getTodayDate());
        }
    },

    getYesterdayTimeLines ({ commit }) {
        if(state[util.getYesterdayDate()].length === 0) {
            dao.getTimeLines(timelines => commit('setTimeLines', { timelines:timelines, date:util.getYesterdayDate()}), util.getYesterdayDate());
        }
    },
};

// mutations
const mutations = {

    /**
     *
     * @param state
     * @param payload
     */
    setTimeLines (state, payload) {
        state[payload.date] = payload.timelines ;
    },

    /**
     * 引数payloadオブジェクトのdateとpkで指定したオブジェクトが、
     * 編集中または編集終了か設定する。
     * @param state
     * @param payload
     */
    setEditing(state, payload) {

        const arch = state[payload.date].filter( (item) => item.pk === payload.pk )[0];
        arch.editing = payload.editing;
    },

    clearAllEditing(state, date) {
        for(let arch of state[date]){
            if(arch.editing){
                arch.editing = false;
            }
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};