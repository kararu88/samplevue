<template>

    <b-form @submit.prevent="submitInputForm" @reset="resetInputForm">

        <b-form-group
                id="input-group-1"
                label="タスク名："
                label-for="input-1"
                label-cols-md="2"
                class="input-label"
                label-size="lg"
        >
            <b-form-input
                    id="input-1"
                    v-model="task_name"
                    type="text"
                    required
                    placeholder="タスク名を入力してください"
                    size="lg"
            ></b-form-input>
        </b-form-group>

        <b-form-row>
            <b-col md="4">
                <b-form-group id="input-group-2" label="作業開始時間:" label-for="input-2" label-cols-md="6"
                              class="input-label">
                    <b-form-input
                            id="input-2"
                            v-model="start_time"
                            type="time"
                    ></b-form-input>
                </b-form-group>
            </b-col>
            <b-col md="1">
                ～
            </b-col>
            <b-col md="4">
                <b-form-group id="input-group-3" label="終了時間:" label-for="input-3" label-cols-md="6"
                              class="input-label">
                    <b-form-input
                            id="input-3"
                            v-model="end_time"
                            type="time"
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-form-row>


        <b-form-row>
            <b-col md="4">
        <b-form-group id="input-group-4" label="作業実績時間:" label-for="input-4" label-cols-md="6" class="input-label">
            <b-form-input
                    id="input-4"
                    v-model="actual_time"
                    type="time"
            ></b-form-input>
        </b-form-group>
            </b-col>
        </b-form-row>


        <b-form-row>
            <b-col offset-md="9" md="3">
                <b-button type="submit" variant="primary">{{ isNewTimeLine  ? '追加' : '更新' }}</b-button>
                <b-button type="reset" variant="danger">リセット</b-button>
            </b-col>
        </b-form-row>
    </b-form>
</template>

<script>
    import util from '@/util/'
    import dao from "@/dao/dao";
    import {mapActions, mapGetters, mapMutations} from 'vuex'

    export default {
        name: "TaskForm",
        methods :{
            ...mapMutations('inputform',[
                'setTimeLineData',
                'setTimeLineDataTaskName',
                'setTimeLineDataStartTime',
                'setTimeLineDataEndTime',
                'setTimeLineDataActualTime',
                'clearInputForm',
                'isNullTimeLine',
            ]),

            ...mapActions('inputform',[
                'createTimeLine',
                'updateTimeLine',
            ]),

            submitInputForm() {
                dao.createTimeLines(this.$store.state.inputform.timeline);
            },

            resetInputForm(){
                if(this.isNullTimeLine()){
                    return ;
                }
                this.clearInputForm();
            }
        },
        computed :{

            task_name :{
                get (){
                    return this.$store.state.inputform.timeline.task_name;
                },
                set (value){
                    this.$store.commit('inputform/setTimeLineDataTaskName',value);
                }
            },

            start_time :{
                get (){
                    return this.$store.state.inputform.timeline.start_time.format(util.FMT_TIME);
                },
                set (time){

                    const [hour,  minute, second] = time.split(":");
                    const start_time = this.$store.state.inputform.timeline.start_time;

                    start_time.hour(hour);
                    start_time.minute(minute);
                    start_time.second(second);

                    this.$store.commit('inputform/setTimeLineDataStartTime',start_time);
                }
            },

            end_time :{
                get (){
                    return this.$store.state.inputform.timeline.end_time.format(util.FMT_TIME);
                },
                set (time){

                    const [hour,  minute, second] = time.split(":");
                    const end_time = this.$store.state.inputform.timeline.end_time;

                    end_time.hour(hour);
                    end_time.minute(minute);
                    end_time.second(second);

                    this.$store.commit('inputform/setTimeLineDataEndTime',end_time);
                }
            },

            actual_time :{
                get (){
                    return this.$store.state.inputform.timeline.actual_time;
                },
                set (value){
                    this.$store.commit('inputform/setTimeLineDataActualTime',value);
                }
            },

            ...mapGetters('inputform',[
                'isNewTimeLine',
            ]),
        },
    }
</script>

<style scoped>

    .input-label {
        text-align : left ;
    }

</style>