<template>
    <b-row id="timeline">
        <b-col md="12">
            <b-row>
                <b-col offset-md="2" md="5">
                    <b-button-group>
                        <b-button v-on:click="showYesterdayTimeLines">昨日の実績</b-button>
                        <b-button v-on:click="showTodayTimeLines">今日の実績</b-button>
                    </b-button-group>
                </b-col>
                <b-col md="5">
                    <b-form-group id="input-group-2" label="日時:" label-for="input-datetime" label-cols-md="3"
                                  class="input-datetime-label">
                        <b-form-input
                                id="input-datetime"
                                type="date"
                                v-model="inputdate"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>

            <!-- タイトル行 -->
            <b-row v-if="getTimeLinePkListAt(inputdate).length">
                <b-col md="3" class="achv-title-row">
                    タスク名
                </b-col>
                <b-col md="2" class="achv-title-row">
                    作業開始時刻
                </b-col>
                <b-col md="2" class="achv-title-row">
                    作業終了時刻
                </b-col>
                <b-col md="2" class="achv-title-row">
                    実績時間
                </b-col>
                <b-col md="3" class="achv-title-row">
                    追加項目
                </b-col>
            </b-row>


            <div v-for="achi_pk of getTimeLinePkListAt(inputdate)" :key="achi_pk">
                <Achievement :date="inputdate" :pk="achi_pk" />
            </div>

        </b-col>
    </b-row>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import Achievement from '@/components/Achievement'
    import util from "@/util"

    export default {
        name: "TimeLine",

        data () {
            return {
                inputdate: util.getTodayDate(),
            }
        },

        components: {
            Achievement,
        },

        created () {
            this.$store.dispatch('timeline/initTimeLines');
        },

        computed: {
            ...mapGetters('timeline',[
                'getTimeLinePkListAt',
            ])
        },

        methods: {
            showYesterdayTimeLines(){
                this.getYesterdayTimeLines();
                this.inputdate = util.getYesterdayDate();
            },

            showTodayTimeLines(){
                this.getTodayTimeLines();
                this.inputdate = util.getTodayDate();
            },

            ...mapActions('timeline', [
                'getTodayTimeLines',
                'getYesterdayTimeLines',
            ]),

         }
    }
</script>

<style scoped>
    #timeline {
        margin-top:1em;
        padding:4px;
        border: darkgray solid 1px ;
    }

    .input-datetime-label {
        text-align: right;
    }

    .achv-title-row {
        background-color: darkblue ;
        padding-top: 3px ;
        padding-bottom: 3px ;
        color: white ;
        font-size : small ;
        border: white solid 1px ;
    }

</style>