<template>
    <div id="timeline">
        <b-row>
        <b-col>
            <b-button-group>
                <b-button v-on:click="showTodayTimeLines">today</b-button>
                <b-button v-on:click="showYesterdayTimeLines">yesterday</b-button>
            </b-button-group>
        </b-col>
        </b-row>

        <div v-for="timeLine of getTimeLine.show">
            <Achievement v-bind:timeline="timeLine"/>
        </div>

    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import Achievement from '@/components/Achievement'

    export default {
        name: "TimeLine",

        components: {
            Achievement,
        },

        created () {
            this.$store.dispatch('timeline/initTimeLines');
        },

        computed: {
            getTimeLine() {
                return this.$store.state.timeline;
            }
        },

        methods: {
                 ...mapActions('timeline',[
                    'showTodayTimeLines',
                    'showYesterdayTimeLines',
                     ])
         }
    }
</script>

<style scoped>
    #timeline {
        margin-top:1em;
        padding:4px;
        border: darkgray solid 1px ;
    }
</style>