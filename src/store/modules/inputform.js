import util from '@/util/';
import TimeLineModel from "../../dao/timelinemodel";

const NEW_TIME_LINE = new TimeLineModel({
    pk : null,
    appli_user_pk : 6 ,
    task_name : "",
    start_time : util.getTodayDate(),
    end_time : util.getTodayDate(),
    actual_time : "00:00"
    }
);

// initial state
const state = {
    timeline : NEW_TIME_LINE
};

// getters
const getters = {
    isNewTimeLine: state => state.timeline.pk === null ,
};

// actions
const actions = {

    createTimeLine ({ commit }) {
        console.log("create");
        commit('clearInputForm');
    },
    updateTimeLine ({ commit }) {
        console.log("update");
        commit('clearInputForm');
    },
};

// mutations
const mutations = {

    setTimeLineData(state, timeline) {
        state.timeline = TimeLineModel.clone(timeline);
    },

    setTimeLineDataTaskName(state, taskName) {
        state.timeline.task_name = taskName;
    },

    setTimeLineDataStartTime(state, startTime) {
        state.timeline.start_time = startTime;
    },

    setTimeLineDataEndTime(state, endTime) {
        state.timeline.end_time = endTime;
    },

    setTimeLineDataActualTime(state, actualTime) {
        state.timeline.actual_time = actualTime;
    },

    clearInputForm(state) {
        state.timeline = NEW_TIME_LINE;
    },

    isNullTimeLine(state){
        return state.timeline === NEW_TIME_LINE ;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};