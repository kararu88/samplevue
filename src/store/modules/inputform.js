import util from '@/util/'
import TimeLineModel from "../../dao/timelinemodel";

const NULL_TIME_LINE = new TimeLineModel({});

// initial state
const state = {
    timeline : NULL_TIME_LINE
};

// getters
const getters = {

    getStartTime: state => state.timeline.start_time !== null ? state.timeline.start_time.format(util.FMT_TIME) : null,
    getEndTime: state => state.timeline.end_time !== null ? state.timeline.end_time.format(util.FMT_TIME) : null,

};

// actions
const actions = {

};

// mutations
const mutations = {

    setTimeLineData(state, timeline) {
        state.timeline = timeline;
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
        state.timeline = NULL_TIME_LINE;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};