
export default class {

    constructor({pk = null, appli_user_pk = null, task_name = null, start_time = null ,end_time = null ,actual_time = null}) {
        this.pk = pk;
        this.appli_user_pk = appli_user_pk;
        this.task_name = task_name;
        this.start_time = start_time;
        this.end_time = end_time;
        this.actual_time = actual_time;
    }

    getJson(){
        return JSON.stringify(this);
    }

}