<template>
    <div class="firstvueclass">
        <p>日本語も取り扱えちゃったりしちゃう系よ！</p>
        <p>args1 : {{ msg1 }}</p>
        <p>args1 : {{ msg2 }}</p>
    </div>
</template>

<script>
    export default {
        name: "FirstVueClass",
        props: {
            msg1: String,
            msg2: String
        }
    }
</script>

<style scoped>

</style>