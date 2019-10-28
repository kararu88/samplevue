import TimeLineModel from "./timelinemodel";

export default {

    /**
     * 非同期処理のため、callback関数により値を反映させる。
     *
     * 今日のtimelineを取得する。
     *
     * @param cb
     */
    getTimeLines(cb){

        let timeLines = [];

        // fetch('https://71i2no6je7.execute-api.ap-northeast-1.amazonaws.com/default/getCurrentSec')
        fetch('http://api.myjson.com/bins/zxl2s',{mode:'cors'})
            .then(response => response.json())
            .then(json => {

                timeLines.push(new TimeLineModel(
                    json.timelines.pk
                    ,json.timelines.appli_user_pk
                    ,json.timelines.task_name
                    ,json.timelines.start_time
                    ,json.timelines.end_time
                    ,json.timelines.actual_time
                ));
                cb(timeLines);
            });

    }

}