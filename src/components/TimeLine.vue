<template>
    <div class="TimeLine">
        <p>ほげほげ</p>
        <p>{{ JSON.stringify(timelines) }}</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "TimeLine",

        created () {
            this.$store.dispatch('timeline/initTimeLines');
        },

        computed: mapState({
            timelines: state => state.timelines
        }),
    }
</script>

<style scoped>

</style>