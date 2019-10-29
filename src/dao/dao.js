import TimeLineModel from "./timelinemodel";
import util from "@/util"

export default {

    getTimeLinesFromMyJson(cb , url) {
        let timeLines = null;

        // fetch('https://71i2no6je7.execute-api.ap-northeast-1.amazonaws.com/default/getCurrentSec')
        fetch(url,{mode:'cors'})
            .then(response => response.json())
            .then(json => {
                timeLines = util.buildTimeLineModels(json.timelines);
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

        console.log(date);

        switch(date){
            case util.getTodayDate() :
                this.getTimeLinesFromMyJson(cb , 'http://api.myjson.com/bins/zxl2s');
                break;
            case util.getYesterdayDate():
                this.getTimeLinesFromMyJson(cb , 'http://api.myjson.com/bins/wzbgk');
                break;
            default:
                this.getTimeLinesFromMyJson(cb , 'http://api.myjson.com/bins/txbl0');
                break;
        }
    },

    getYesterdayTimeLines(cb){
        this.getTimeLines(cb,util.getYesterdayDate());
    },

    getTodayTimeLines(cb){
        this.getTimeLines(cb,util.getTodayDate());
    },

}