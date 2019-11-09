// http://myjson.com/

// getTimeLines('date')
// 引数で指定された日付のtimelineを返す。
// http://myjson.com/1fndd4
// https://api.myjson.com/bins/1fndd4
let get_time_lines_one_day = {
    "timelines": [
        { "pk": 1, "appli_user_pk": 6, "task_name": "睡眠", "date": "2019-10-18" ,"start_time": "2019-10-18T00:00:00.000+0900", "end_time": "2019-10-18T06:00:00.000+0900", "actual_time": "06:00:00" }
        ,{ "pk": 2, "appli_user_pk": 6, "task_name": "午前勤務", "date": "2019-10-18" ,"start_time": "2019-10-18T00:00:00.000+0900", "end_time": "2019-10-18T06:00:00.000+0900", "actual_time": "0:00:00" }
        ,{ "pk": 3, "appli_user_pk": 6, "task_name": "午前勤務", "date": "2019-10-18" ,"start_time": "2019-10-18T00:00:00.000+0900", "end_time": "2019-10-18T06:00:00.000+0900", "actual_time": "0:00:00" }
        ,{ "pk": 4, "appli_user_pk": 6, "task_name": "お昼ご飯", "date": "2019-10-18" ,"start_time": "2019-10-18T00:00:00.000+0900", "end_time": "2019-10-18T06:00:00.000+0900", "actual_time": "06:00:00" }
        ,{ "pk": 5, "appli_user_pk": 6, "task_name": "午後勤務", "date": "2019-10-18" ,"start_time": "2019-10-18T00:00:00.000+0900", "end_time": "2019-10-18T06:00:00.000+0900", "actual_time": "06:00:00" }
        ,{ "pk": 6, "appli_user_pk": 6, "task_name": "帰宅", "date": "2019-10-18" ,"start_time": "2019-10-18T00:00:00.000+0900", "end_time": "2019-10-18T06:00:00.000+0900", "actual_time": "06:00:00" }
        ,{ "pk": 7, "appli_user_pk": 6, "task_name": "夕飯", "date": "2019-10-18" ,"start_time": "2019-10-18T00:00:00.000+0900", "end_time": "2019-10-18T06:00:00.000+0900", "actual_time": "06:00:00" }
    ]
};

// Today
// http://myjson.com/1g8syw
// http://api.myjson.com/bins/1g8syw
let get_time_lines_today = {
    "timelines": [
        {
            "pk": 8,
            "appli_user_pk": 6,
            "task_name": "睡眠",
            "date": "2019-10-19",
            "start_time": "2019-10-19T00:00:00.000+0900",
            "end_time": "2019-10-19T06:00:00.000+0900",
            "actual_time": "06:00:00"
        }
        , {
            "pk": 9,
            "appli_user_pk": 6,
            "task_name": "移動",
            "date": "2019-10-19",
            "start_time": "2019-10-19T08:00:00.000+0900",
            "end_time": "2019-10-19T09:00:00.000+0900",
            "actual_time": "01:00:00"
        }
        , {
            "pk": 10,
            "appli_user_pk": 6,
            "task_name": "午前勤務",
            "date": "2019-10-19",
            "start_time": "2019-10-19T09:00:00.000+0900",
            "end_time": "2019-10-19T12:00:00.000+0900",
            "actual_time": "03:00:00"
        }
        , {
            "pk": 11,
            "appli_user_pk": 6,
            "task_name": "お昼ご飯",
            "date": "2019-10-19",
            "start_time": "2019-10-19T12:00:00.000+0900",
            "end_time": "2019-10-19T13:00:00.000+0900",
            "actual_time": "01:00:00"
        }
        , {
            "pk": 12,
            "appli_user_pk": 6,
            "task_name": "午後勤務",
            "date": "2019-10-19",
            "start_time": "2019-10-19T13:00:00.000+0900",
            "end_time": "2019-10-19T18:00:00.000+0900",
            "actual_time": "05:00:00"
        }
        , {
            "pk": 13,
            "appli_user_pk": 6,
            "task_name": "帰宅",
            "date": "2019-10-19",
            "start_time": "2019-10-19T18:00:00.000+0900",
            "end_time": "2019-10-19T19:00:00.000+0900",
            "actual_time": "01:00:00"
        }
        , {
            "pk": 14,
            "appli_user_pk": 6,
            "task_name": "夕飯",
            "date": "2019-10-19",
            "start_time": "2019-10-19T19:00:00.000+0900",
            "end_time": "2019-10-19T20:30:00.000+0900",
            "actual_time": "00:30:00"
        }
    ]
};

// getTimeLines('pk', 'date')
// ある一つのtimelineを返す。
// http://myjson.com/1bhc4o
// http://api.myjson.com/bins/1bhc4o
let get_time_lines_one = {
    "timelines": [
    { "pk": 1, "appli_user_pk": 6, "task_name": "睡眠", "date": "2019-10-18" ,"start_time": "2019-10-18T00:00:00.000+0900", "end_time": "2019-10-18T06:00:00.000+0900", "actual_time": "06:00:00" }
    ]
};

// getTimeLines('date1', 'date2')
// date1～date2期間のtimelineを返す。
// http://myjson.com/1c4ww8
// http://api.myjson.com/bins/1c4ww8
let get_time_lines_three_day = {
    "timelines": [
        { "pk": 1, "appli_user_pk": 6, "task_name": "睡眠", "date": "2019-10-18" ,"start_time": "2019-10-18T00:00:00.000+0900", "end_time": "2019-10-18T06:00:00.000+0900", "actual_time": "06:00:00" }
        ,{ "pk": 2, "appli_user_pk": 6, "task_name": "移動", "date": "2019-10-18" ,"start_time": "2019-10-18T08:00:00.000+0900", "end_time": "2019-10-18T09:00:00.000+0900", "actual_time": "01:00:00" }
        ,{ "pk": 3, "appli_user_pk": 6, "task_name": "午前勤務", "date": "2019-10-18" ,"start_time": "2019-10-18T09:00:00.000+0900", "end_time": "2019-10-18T12:00:00.000+0900", "actual_time": "3:00:00" }
        ,{ "pk": 4, "appli_user_pk": 6, "task_name": "お昼ご飯", "date": "2019-10-18" ,"start_time": "2019-10-18T12:00:00.000+0900", "end_time": "2019-10-18T13:00:00.000+0900", "actual_time": "01:00:00" }
        ,{ "pk": 5, "appli_user_pk": 6, "task_name": "午後勤務", "date": "2019-10-18" ,"start_time": "2019-10-18T13:00:00.000+0900", "end_time": "2019-10-18T18:00:00.000+0900", "actual_time": "05:00:00" }
        ,{ "pk": 6, "appli_user_pk": 6, "task_name": "帰宅", "date": "2019-10-18" ,"start_time": "2019-10-18T18:00:00.000+0900", "end_time": "2019-10-18T19:00:00.000+0900", "actual_time": "01:00:00" }
        ,{ "pk": 7, "appli_user_pk": 6, "task_name": "夕飯", "date": "2019-10-18" ,"start_time": "2019-10-18T19:30:00.000+0900", "end_time": "2019-10-18T20:00:00.000+0900", "actual_time": "00:30:00" }
        ,{ "pk": 8, "appli_user_pk": 6, "task_name": "睡眠", "date": "2019-10-19" ,"start_time": "2019-10-19T00:00:00.000+0900", "end_time": "2019-10-19T06:00:00.000+0900", "actual_time": "06:00:00" }
        ,{ "pk": 9, "appli_user_pk": 6, "task_name": "移動", "date": "2019-10-19" ,"start_time": "2019-10-19T08:00:00.000+0900", "end_time": "2019-10-19T09:00:00.000+0900", "actual_time": "01:00:00" }
        ,{ "pk": 10, "appli_user_pk": 6, "task_name": "午前勤務", "date": "2019-10-19" ,"start_time": "2019-10-19T09:00:00.000+0900", "end_time": "2019-10-19T12:00:00.000+0900", "actual_time": "03:00:00" }
        ,{ "pk": 11, "appli_user_pk": 6, "task_name": "お昼ご飯", "date": "2019-10-19" ,"start_time": "2019-10-19T12:00:00.000+0900", "end_time": "2019-10-19T13:00:00.000+0900", "actual_time": "01:00:00" }
        ,{ "pk": 12, "appli_user_pk": 6, "task_name": "午後勤務", "date": "2019-10-19" ,"start_time": "2019-10-19T13:00:00.000+0900", "end_time": "2019-10-19T18:00:00.000+0900", "actual_time": "05:00:00" }
        ,{ "pk": 13, "appli_user_pk": 6, "task_name": "帰宅", "date": "2019-10-19" ,"start_time": "2019-10-19T18:00:00.000+0900", "end_time": "2019-10-19T19:00:00.000+0900", "actual_time": "01:00:00" }
        ,{ "pk": 14, "appli_user_pk": 6, "task_name": "夕飯", "date": "2019-10-19" ,"start_time": "2019-10-19T20:00:00.000+0900", "end_time": "2019-10-19T20:30:00.000+0900", "actual_time": "00:30:00" }
        ,{ "pk": 15, "appli_user_pk": 6, "task_name": "睡眠", "date": "2019-10-20" ,"start_time": "2019-10-20T00:00:00.000+0900", "end_time": "2019-10-20T06:00:00", "actual_time": "06:00:00" }
        ,{ "pk": 16, "appli_user_pk": 6, "task_name": "自宅作業", "date": "2019-10-20" ,"start_time": "2019-10-20T10:00:00.000+0900", "end_time": "2019-10-20T15:00:00", "actual_time": "03:00:00" }
        ,{ "pk": 17, "appli_user_pk": 6, "task_name": "お昼ご飯", "date": "2019-10-20" ,"start_time": "2019-10-20T13:00:00.000+0900", "end_time": "2019-10-20T14:00:00", "actual_time": "01:00:00" }
        ,{ "pk": 18, "appli_user_pk": 6, "task_name": "ジム", "date": "2019-10-20" ,"start_time": "2019-10-20T15:30:00.000+0900", "end_time": "2019-10-20T17:00:00", "actual_time": "01:30:00" }
        ,{ "pk": 19, "appli_user_pk": 6, "task_name": "夕飯", "date": "2019-10-20" ,"start_time": "2019-10-20T19:00:00.000+0900", "end_time": "2019-10-20T20:00:00", "actual_time": "01:00:00" }
        ,{ "pk": 20, "appli_user_pk": 6, "task_name": "ゲーム", "date": "2019-10-20" ,"start_time": "2019-10-20T21:00:00.000+0900", "end_time": "2019-10-20T23:00:00", "actual_time": "02:00:00" }
    ]
};