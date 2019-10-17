<template>
    <div class="TextInput">
        <textarea v-model="text" placeholder="this text will show in the textarea"></textarea>
        <p>{{ text }}</p>
    </div>
</template>

<script>
    export default {
        name: "TextInput",
        data(){
            return {
                text : "this text will show in the textarea"
            }
        }
    }
</script>

<style scoped>

</style>