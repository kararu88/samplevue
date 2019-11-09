<template>

    <b-row class="achv-row" :class="[{ 'mouse-over' : isMouseOver } , { 'row-selected' : isEditing(date, timeline.pk) }]"
           @click="setTimeLineAndRowSelected()"
           @mouseover="setMouseover(true)"
           @mouseout="setMouseover(false)"
    >
        <b-col md="3" class="arch-task-name achv-cell">
            {{ timeline.task_name }}
        </b-col>
        <b-col md="2" class="achv-cell">
            {{ getTimelineStartTime }}
        </b-col>
        <b-col md="2" class="achv-cell">
            {{ getTimelineEndTime }}
        </b-col>
        <b-col md="2" class="achv-cell">
            {{ timeline.actual_time.substring(0,5) }}
        </b-col>
        <b-col md="3" class="achv-cell">
            なし
        </b-col>
    </b-row>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    import util from '@/util/'

    export default {
        name: "Achievement",
        props:{
            date: {
                type : String,
                required : true,
            },
            pk: {
                type : Number,
                required : true,
            }
        },
        data(){
            return {
                timeline: null,
                isMouseOver : false,
            }
        },
        beforeMount(){
            this.timeline = this.$store.getters['timeline/getTimeLineAt'](this.date, this.pk);
        },

        computed: {
            ...mapGetters('timeline',[
                'isEditing',
            ]),
            getTimelineStartTime(){
                return this.timeline.start_time.format(util.FMT_TIME);
            },
            getTimelineEndTime(){
                return this.timeline.end_time.format(util.FMT_TIME);
            },
        },

        methods: {
            ...mapMutations('inputform',[
                'setTimeLineData',
                'setEditing',
            ]),
            ...mapMutations('timeline',[
                'setEditing',
                'clearAllEditing',
            ]),
            setTimeLineAndRowSelected(){
                this.clearAllEditing(this.date);
                this.setTimeLineData(this.timeline);
                this.setEditing({
                    date:this.date,
                    pk:this.timeline.pk,
                    editing:true
                });
            },
            setMouseover(isOver) {
                this.isMouseOver = isOver;
            },
        },
    }
</script>

<style scoped>

    .mouse-over {
        border: red solid 1px !important;
    }

    .row-selected {
        background-color: antiquewhite ;
    }

    .achv-row {
        margin-top: 5px ;
        margin-bottom: 5px ;
        border: white solid 1px ;
    }

    .arch-task-name{
        font-size: larger ;
    }


</style>