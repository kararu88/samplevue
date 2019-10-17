<template>
    <div class="CheckBoxComponent">
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
    </div>
</template>

<script>
    export default {
        name: "CheckBoxComponent",
        data(){
            return {
                checked:false
            }
        }
    }
</script>

<style scoped>

</style>