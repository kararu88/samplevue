<template>
    <div class="TaskForm">
        <b-container>

            <b-form @submit="onSubmit" @reset="onReset">
                <b-form-row>
                    <b-col>
                        <b-form-group
                                id="input-group-1"
                                label="Email address:"
                                label-for="input-1"
                                description="We'll never share your email with anyone else."
                        >
                            <b-form-input
                                    id="input-1"
                                    v-model="form.email"
                                    type="email"
                                    required
                                    placeholder="Enter email"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <b-form-row>
                    <b-col>
                        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                            <b-form-input
                                    id="input-2"
                                    v-model="form.name"
                                    required
                                    placeholder="Enter name"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <b-form-row>
                    <b-col>
                        <b-form-group id="input-group-3" label="Something:" label-for="input-3">
                            <b-form-input
                                    id="input-3"
                                    v-model="form.something"
                                    required
                                    placeholder="Enter name"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <b-form-row>
                    <b-col>
                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-col>
                </b-form-row>
            </b-form>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "TaskForm",
        data() {
            return {
                form: {
                    email:'',
                    name:'',
                    something:''
                }
            }
        },
        methods : {
            onSubmit(evt) {
                evt.preventDefault();
                fetch('https://71i2no6je7.execute-api.ap-northeast-1.amazonaws.com/default/getCurrentSec')
                    .then(response => response.json())
                    .then(json => {
                        this.form.email = json.current_all;
                        this.form.name = json.current_hours;
                        this.form.something = json.current_sec;
                    })
            },
            onReset(evt) {
                evt.preventDefault();
                this.form.email = '';
                this.form.name = '';
                this.form.something = '';
            },
        },
        computed :{
            getvalue : function (hoge) {
                return hoge + 2 ;
            }
        }
    }
</script>

<style scoped>

</style>