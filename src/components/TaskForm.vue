<template>
    <div class="taskform">
        <p>{{ current_sec }}</p>
    </div>
</template>

<script>
    export default {
        name: "TaskForm",
        data() {
            return {
                current_sec : 0
            }
        },
        beforeCreate() {
            fetch('https://71i2no6je7.execute-api.ap-northeast-1.amazonaws.com/default/getCurrentSec')
                .then(response => response.json())
                .then(json => {
                        this.current_sec = json
                })
        }
    }
</script>

<style scoped>

</style>