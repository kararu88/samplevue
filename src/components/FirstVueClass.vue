<template>
    <!-- Vue.jsでは、この書き方を単一ファイルコンポーネントというみたい -->
    <div class="firstvueclass">
        <p>日本語も取り扱えちゃったりしちゃう系よ！</p>
        <p>args1 : {{ msg1 }}</p>
        <p>args1 : {{ msg2 }}</p>
        <ul>
            <li v-for="product in products">
                {{ product }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "FirstVueClass",
        props: {
            msg1: String,
            msg2: String
        },
        data () {
            return {
                products: []
            }
        },
        created () {
            fetch('https://api.myjson.com/bins/74l63')
                .then(response => response.json())
                .then(json => {
                    this.products = json.products
                })
        }
    }
</script>

<style scoped>

</style>