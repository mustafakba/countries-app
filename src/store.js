import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        countries:[],
        country:{}
    },
    actions: {
        getAllCountries({state}){
            fetch('https://restcountries.com/v2/all')
                .then(res => res.json())
                .then(data=>{
                    state.countries = data
                })
        },
        getDetail({state},name){
            fetch(`https://restcountries.com/v2/name/${name}`)
                .then(res => res.json())
                .then(data=>{
                    state.country = data
                    console.log(data)
                })

        }


    },

})

export default store ;