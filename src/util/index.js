import TimeLineModel from '@/dao/timelinemodel'

const getTodayDate = () => {
    let today = new Date();
    return today.toISOString().substr(0,10);
};

const getYesterdayDate = () => {
    let today = new Date();
    today.setDate(today.getDate() - 1);
    return today.toISOString().substr(0,10);
};

const buildTimeLineModels = (timelinesJson) => {

    const TimeLineModels = [];

    for(let timelineJson of timelinesJson){
        TimeLineModels.push(new TimeLineModel(timelineJson));
    }

    return TimeLineModels;
};

export default {
    getTodayDate,
    getYesterdayDate,
    buildTimeLineModels,
}
