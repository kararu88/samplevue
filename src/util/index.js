
const getTodayDate = () => {
    let today = new Date();
    return today.toISOString().substr(0,10);
};

const getYesterdayDate = () => {
    let today = new Date();
    today.setDate(today.getDate() - 1);
    return today.toISOString().substr(0,10);
};

export default {
    getTodayDate,
    getYesterdayDate,
}
