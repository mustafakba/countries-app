import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        countries:[],
        country:{},
        country_ind:{}
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

        },
        checkIndependecy({state}){
            console.log(state.country.independent)
            if(state.country.indepent == "false"){
                state.country_ind = "Bağımsız Değil"
            }
            else{
                state.country_ind = "Bağımsız Ülke"
            }
            return state.country_ind
        }


    },

})

export default store ;