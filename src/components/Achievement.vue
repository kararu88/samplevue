<template>
    <b-row class="achv-row" :class="[{ 'mouse-over' : isMouseOver } , { 'row-selected' : isRowSelected }]"
           @click="setTimeLineAndRowSelected(timeline,true)"
           @mouseover="setMouseover(true)"
           @mouseout="setMouseover(false)"
    >
        <b-col md="3" class="arch-task-name achv-cell">
            {{ timeline.task_name }}
        </b-col>
        <b-col md="2" class="achv-cell">
            {{ timeline.start_time.substring(11,16) }}
        </b-col>
        <b-col md="2" class="achv-cell">
            {{ timeline.end_time.substring(11,16) }}
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
    import {mapMutations} from 'vuex'

    export default {
        name: "Achievement",
        props:{
            timeline: {
                type:Object,
                required:true
            },
        },
        data(){
            return {
                isMouseOver : false,
                isRowSelected : false ,
            }
        },
        methods: {
            ...mapMutations('inputform',[
                'setTimeLineData',
            ]),
            setTimeLineAndRowSelected(timeline, isSelected){
                this.setTimeLineData(timeline);
                this.setRowSelected(isSelected);
            },
            setMouseover(isOver) {
                this.isMouseOver = isOver;
            },
            setRowSelected(isSelected) {
                this.isRowSelected = isSelected;
            }
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