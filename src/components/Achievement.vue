<template>
    <b-row v-on:click="setTimeLineData(timeline)">
        <b-col md="5">
            {{ timeline.task_name }}
        </b-col>
        <b-col md="2">
            {{ timeline.start_time }}
        </b-col>
        <b-col md="2">
            {{ timeline.end_time }}
        </b-col>
        <b-col md="2">
            {{ timeline.actual_time }}
        </b-col>
        <b-col md="1">
            {{ timeline.append }}
        </b-col>
    </b-row>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "Achievement",
        props:{
            timeline: Object
        },
        methods: {
            ...mapMutations('inputform',[
                'setTimeLineData',
            ])
        },
    }
</script>

<style scoped>

</style>