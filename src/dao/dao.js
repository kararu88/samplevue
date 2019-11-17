import TimeLineModel from "./timelinemodel";
import util from "@/util"

export default {

    getTimeLinesFromMyJson(cb , url) {
        let timeLines = null;

        // fetch('https://71i2no6je7.execute-api.ap-northeast-1.amazonaws.com/default/getCurrentSec')
        fetch(url,{mode:'cors'})
            .then(response => response.json())
            .then(json => {
                timeLines = TimeLineModel.buildTimeLineModels(json.timelines);
                cb(timeLines);
            });
    },
    /**
     * 非同期処理のため、callback関数により値を反映させる。
     *
     * 今日のtimelineを取得する。
     *
     * @param cb
     */
    getTimeLines(cb , date){

        switch(date){
            case util.getTodayDate() :
                this.getTimeLinesFromMyJson(cb , 'http://api.myjson.com/bins/1g8syw');
                break;
            case util.getYesterdayDate():
                this.getTimeLinesFromMyJson(cb , 'https://api.myjson.com/bins/1fndd4');
                break;
            default:
                this.getTimeLinesFromMyJson(cb , 'http://api.myjson.com/bins/1c4ww8');
                break;
        }
    },


    // https://hw95acmuxa.execute-api.ap-northeast-1.amazonaws.com/default/GetTodayDateTime
    createTimeLines(timeline){

        const url ="https://hw95acmuxa.execute-api.ap-northeast-1.amazonaws.com/default/GetTodayDateTime";
        const method = "PUT";
        const body = timeline.toJSON();
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        fetch(url, {mode:'cors', method, headers, body})
            .then((res) => res.json())
            .then(console.log)
            .catch(console.error);
    }
}