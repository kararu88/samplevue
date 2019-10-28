
// http://myjson.com/

// getTimeLines('date')
// 引数で指定された日付のtimelineを返す。
// http://myjson.com/zxl2s
// http://api.myjson.com/bins/zxl2s
let get_time_lines_one_day = {
    "timelines": [
         { "pk": 1, "appli_user_pk": 6, "task_name": "睡眠", "date": "2019-10-18" ,"start_time": "2019-10-18 00:00:00", "end_time": "2019-10-18 06:00:00", "actual_time": "06:00:00" }
        ,{ "pk": 2, "appli_user_pk": 6, "task_name": "午前勤務", "date": "2019-10-18" ,"start_time": "2019-10-18 00:00:00", "end_time": "2019-10-18 06:00:00", "actual_time": "0:00:00" }
        ,{ "pk": 3, "appli_user_pk": 6, "task_name": "午前勤務", "date": "2019-10-18" ,"start_time": "2019-10-18 00:00:00", "end_time": "2019-10-18 06:00:00", "actual_time": "0:00:00" }
        ,{ "pk": 4, "appli_user_pk": 6, "task_name": "お昼ご飯", "date": "2019-10-18" ,"start_time": "2019-10-18 00:00:00", "end_time": "2019-10-18 06:00:00", "actual_time": "06:00:00" }
        ,{ "pk": 5, "appli_user_pk": 6, "task_name": "午後勤務", "date": "2019-10-18" ,"start_time": "2019-10-18 00:00:00", "end_time": "2019-10-18 06:00:00", "actual_time": "06:00:00" }
        ,{ "pk": 6, "appli_user_pk": 6, "task_name": "帰宅", "date": "2019-10-18" ,"start_time": "2019-10-18 00:00:00", "end_time": "2019-10-18 06:00:00", "actual_time": "06:00:00" }
        ,{ "pk": 7, "appli_user_pk": 6, "task_name": "夕飯", "date": "2019-10-18" ,"start_time": "2019-10-18 00:00:00", "end_time": "2019-10-18 06:00:00", "actual_time": "06:00:00" }
    ]
};

// getTimeLines('pk', 'date')
// ある一つのtimelineを返す。
// http://myjson.com/j9g50
// http://api.myjson.com/bins/j9g50
let get_time_lines_one = {
    "timelines": [
    { "pk": 1, "appli_user_pk": 6, "task_name": "睡眠", "date": "2019-10-18" ,"start_time": "2019-10-18 00:00:00", "end_time": "2019-10-18 06:00:00", "actual_time": "06:00:00" }
    ]
};

// getTimeLines('date1', 'date2')
// date1～date2期間のtimelineを返す。
// http://myjson.com/txbl0
// http://api.myjson.com/bins/txbl0
let get_time_lines_three_day = {
    "timelines": [
        { "pk": 1, "appli_user_pk": 6, "task_name": "睡眠", "date": "2019-10-18" ,"start_time": "2019-10-18 00:00:00", "end_time": "2019-10-18 06:00:00", "actual_time": "06:00:00" }
        ,{ "pk": 2, "appli_user_pk": 6, "task_name": "移動", "date": "2019-10-18" ,"start_time": "2019-10-18 08:00:00", "end_time": "2019-10-18 09:00:00", "actual_time": "01:00:00" }
        ,{ "pk": 3, "appli_user_pk": 6, "task_name": "午前勤務", "date": "2019-10-18" ,"start_time": "2019-10-18 09:00:00", "end_time": "2019-10-18 12:00:00", "actual_time": "3:00:00" }
        ,{ "pk": 4, "appli_user_pk": 6, "task_name": "お昼ご飯", "date": "2019-10-18" ,"start_time": "2019-10-18 12:00:00", "end_time": "2019-10-18 13:00:00", "actual_time": "01:00:00" }
        ,{ "pk": 5, "appli_user_pk": 6, "task_name": "午後勤務", "date": "2019-10-18" ,"start_time": "2019-10-18 13:00:00", "end_time": "2019-10-18 18:00:00", "actual_time": "05:00:00" }
        ,{ "pk": 6, "appli_user_pk": 6, "task_name": "帰宅", "date": "2019-10-18" ,"start_time": "2019-10-18 18:00:00", "end_time": "2019-10-18 19:00:00", "actual_time": "01:00:00" }
        ,{ "pk": 7, "appli_user_pk": 6, "task_name": "夕飯", "date": "2019-10-18" ,"start_time": "2019-10-18 19:30:00", "end_time": "2019-10-18 20:00:00", "actual_time": "00:30:00" }
        ,{ "pk": 8, "appli_user_pk": 6, "task_name": "睡眠", "date": "2019-10-19" ,"start_time": "2019-10-19 00:00:00", "end_time": "2019-10-19 06:00:00", "actual_time": "06:00:00" }
        ,{ "pk": 9, "appli_user_pk": 6, "task_name": "移動", "date": "2019-10-19" ,"start_time": "2019-10-19 08:00:00", "end_time": "2019-10-19 09:00:00", "actual_time": "01:00:00" }
        ,{ "pk": 10, "appli_user_pk": 6, "task_name": "午前勤務", "date": "2019-10-19" ,"start_time": "2019-10-19 09:00:00", "end_time": "2019-10-19 12:00:00", "actual_time": "03:00:00" }
        ,{ "pk": 11, "appli_user_pk": 6, "task_name": "お昼ご飯", "date": "2019-10-19" ,"start_time": "2019-10-19 12:00:00", "end_time": "2019-10-19 13:00:00", "actual_time": "01:00:00" }
        ,{ "pk": 12, "appli_user_pk": 6, "task_name": "午後勤務", "date": "2019-10-19" ,"start_time": "2019-10-19 13:00:00", "end_time": "2019-10-19 18:00:00", "actual_time": "05:00:00" }
        ,{ "pk": 13, "appli_user_pk": 6, "task_name": "帰宅", "date": "2019-10-19" ,"start_time": "2019-10-19 18:00:00", "end_time": "2019-10-19 19:00:00", "actual_time": "01:00:00" }
        ,{ "pk": 14, "appli_user_pk": 6, "task_name": "夕飯", "date": "2019-10-19" ,"start_time": "2019-10-19 20:00:00", "end_time": "2019-10-19 20:30:00", "actual_time": "00:30:00" }
        ,{ "pk": 15, "appli_user_pk": 6, "task_name": "睡眠", "date": "2019-10-20" ,"start_time": "2019-10-20 00:00:00", "end_time": "2019-10-20 06:00:00", "actual_time": "06:00:00" }
        ,{ "pk": 16, "appli_user_pk": 6, "task_name": "自宅作業", "date": "2019-10-20" ,"start_time": "2019-10-20 10:00:00", "end_time": "2019-10-20 15:00:00", "actual_time": "03:00:00" }
        ,{ "pk": 17, "appli_user_pk": 6, "task_name": "お昼ご飯", "date": "2019-10-20" ,"start_time": "2019-10-20 13:00:00", "end_time": "2019-10-20 14:00:00", "actual_time": "01:00:00" }
        ,{ "pk": 18, "appli_user_pk": 6, "task_name": "ジム", "date": "2019-10-20" ,"start_time": "2019-10-20 15:30:00", "end_time": "2019-10-20 17:00:00", "actual_time": "01:30:00" }
        ,{ "pk": 19, "appli_user_pk": 6, "task_name": "夕飯", "date": "2019-10-20" ,"start_time": "2019-10-20 19:00:00", "end_time": "2019-10-20 20:00:00", "actual_time": "01:00:00" }
        ,{ "pk": 20, "appli_user_pk": 6, "task_name": "ゲーム", "date": "2019-10-20" ,"start_time": "2019-10-20 21:00:00", "end_time": "2019-10-20 23:00:00", "actual_time": "02:00:00" }
    ]
};