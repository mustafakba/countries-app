import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        countries:[],
    },
    actions: {
        getAllCountries({state}){
            fetch('https://restcountries.com/v2/all')
                .then(res => res.json())
                .then(data=>{
                    state.countries = data
                })
        }


    },

})

export default store ;