import TimeLineModel from "./timelinemodel";

export default {

    /**
     * 非同期処理のため、callback関数により値を反映させる。
     * @param cb
     */
    getTimeLines(cb){

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
                cb(timeLines);
            });

    }

}