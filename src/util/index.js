import moment from 'moment'
// TODO getTodayDateと

const FMT_TIME = "HH:mm" ;
const FMT_DATE = "YYYY-MM-DD";

const getTodayDate = () => {
    let today = new moment();
    return today.format(FMT_DATE);
};

const getYesterdayDate = () => {
    let yesterday = new moment().add( - 1, 'd');
    return yesterday.format(FMT_DATE);
};

export default {
    FMT_TIME,
    FMT_DATE,
    getTodayDate,
    getYesterdayDate,
}
