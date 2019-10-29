import Vue from 'vue'
import Vuex from 'vuex'
import timeline from '@/store/modules/timeline'
import inputform from '@/store/modules/inputform'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        timeline,
        inputform,
    },
})