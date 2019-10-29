import TimeLineModel from "@dao/timelinemodel";
import util from "@/util"

export default {

    getTimeLinesFromMyJson(cb , url) {
        // fetch('https://71i2no6je7.execute-api.ap-northeast-1.amazonaws.com/default/getCurrentSec')
        fetch(url,{mode:'cors'})
            .then(response => response.json())
            .then(json => {
                timeLines.push(new TimeLineModel(
                    json.timelines[0]
                ));
                cb(timeLines);
            });
    }
    /**
     * 非同期処理のため、callback関数により値を反映させる。
     *
     * 今日のtimelineを取得する。
     *
     * @param cb
     */
    getTimeLines(cb , date){

        let timeLines = [];
        console.log(date);

        switch(date){
            [util.getYesterdayDate()] :
                this.getTimeLinesFromMyJson(cb , '');
                break;
            [util.getTodayDate()] :
                this.getTimeLinesFromMyJson(cb , '');
                break;
            default:
                this.getTimeLinesFromMyJson(cb , '');
                break;
        }
    },

    getYesterdayTimeLines(cb){
        this.getTimeLines(cb,util.getYesterdayDate());
    },

    getTodayTimeLines(cb){
        let today = new Date().toISOString().substr(0,10);
        this.getTimeLines(cb,util.getTodayDate());
    },

}