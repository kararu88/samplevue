import TimeLineModel from "./timelinemodel";

export default {

    getTimeLines(){

        let timeLines = [];

        fetch('https://71i2no6je7.execute-api.ap-northeast-1.amazonaws.com/default/getCurrentSec')
            .then(response => response.json())
            .then(json => {

                timeLines.push(new TimeLineModel(
                    json.pk
                    ,json.appli_user_pk
                    ,json.task_name
                    ,json.start_time
                    ,json.end_time
                    ,json.actual_time
                ));

            });

        return timeLines;
    }

}