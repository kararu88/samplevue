<template>

    <b-form @reset="clearInputForm">

                <b-form-group
                        id="input-group-1"
                        label="タスク名："
                        label-for="input-1"
                        label-cols-md="2"
                        class="input-label"
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
            <b-col md="5">
                <b-form-group id="input-group-2" label="作業開始時間:" label-for="input-2" label-cols-md="5" class="input-label">
                    <b-form-input
                            id="input-2"
                            v-model="getStartTime"
                            type="time"
                    ></b-form-input>
                </b-form-group>
            </b-col>
            <b-col md="2">
                ～
            </b-col>
            <b-col md="5">
                <b-form-group id="input-group-3" label="作業終了時間:" label-for="input-3" label-cols-md="5" class="input-label">
                    <b-form-input
                            id="input-3"
                            v-model="getEndTime"
                            type="time"
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-form-row>

        <b-form-row>
            <b-col>
                <b-form-group id="input-group-4" label="作業実績時間:" label-for="input-4" label-cols-md="5" class="input-label">
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
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-col>
        </b-form-row>
    </b-form>
</template>

<script>
    import {mapGetters, mapMutations, mapState} from 'vuex'

    export default {
        name: "TaskForm",
        methods :{
            ...mapMutations('inputform',[
                'clearInputForm',
            ]),
        },
        computed :{
            ...mapState({
                pk: state => state.inputform.pk,
                appli_user_pk: state => state.inputform.appli_user_pk,
                task_name: state => state.inputform.task_name,
                actual_time: state => state.inputform.actual_time,
                append: state => state.inputform.append,
            }),
            ...mapGetters('inputform',[
                'getStartTime',
                'getEndTime',
            ]),
        },
    }
</script>

<style scoped>

    .input-label {
        text-align : left ;
    }

</style>