<template>
    <div class="TimeLine">
        <b-button-group>
            <b-button v-on:click="showTodayTimeLines">today</b-button>
            <b-button v-on:click="showYesterdayTimeLines">yesterday</b-button>
        </b-button-group>
        <b-table striped hover :items="getLength.timelines.show"></b-table>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'

    export default {
        name: "TimeLine",

        created () {
            this.$store.dispatch('timeline/initTimeLines');
        },

        computed: {
            getLength() {
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

</style>