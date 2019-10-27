<template>
    <div class="TimeLine">
        <p>ほげほげ</p>
        <p>{{ JSON.stringify(timelines) }}</p>

        <button
                @click="getTimelines()">
            get state
        </button>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'

    export default {
        name: "TimeLine",

        created () {
            this.$store.dispatch('timeline/initTimeLines');
        },

        methods: mapActions('timeline', [
            'getTimelines'
        ]),

        computed: mapState({
            timelines: state => state.timelines
        }),
    }
</script>

<style scoped>

</style>