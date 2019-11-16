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

    createTimeLines(timeline){
        // TODO moment.js の json 出力形式を変更できないか検討する。
        console.log(JSON.stringify(timeline));
    }
}