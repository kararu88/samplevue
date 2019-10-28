<template>
    <div class="TimeLine">
        <p>ほげほげ</p>
        <p>{{ getLength }}</p>
        <p>{{ getLength.timelines[0].pk }}</p>
        <p>{{ getLength.timelines[0].appli_user_pk }}</p>
        <p>{{ getLength.timelines[0].task_name }}</p>
        <p>{{ getLength.timelines[0].start_time }}</p>
        <p>{{ getLength.timelines[0].end_time }}</p>

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
        }
    }
</script>

<style scoped>

</style>