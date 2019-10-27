import TimeLineModel from "./timelinemodel";

export default {

    async getTimeLines(){

        let timeLines = [];

        let response = await fetch('https://71i2no6je7.execute-api.ap-northeast-1.amazonaws.com/default/getCurrentSec');
        let data = response.json();

        timeLines.push(new TimeLineModel(
            data.pk
            , data.appli_user_pk
            , data.task_name
            , data.start_time
            , data.end_time
            , data.actual_time
        ));

        return timeLines;
    }

}