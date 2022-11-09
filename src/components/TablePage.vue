<template>
    <div class="container">
        <HeaderComponent></HeaderComponent>
        <div>
            <b-table striped hover :items="items" :fields="fields">
                <template #cell(currencies)="prop">
                    {{prop.item.currencies ? prop.item.currencies[0].symbol : ""}}
                </template>
                <template #cell(timezones)="prop">
                    {{prop.item.timezones ? prop.item.timezones[0] : ""}}
                </template>
                <template #cell(button)="prop">
                    <b-button @click="goAbout(prop)">
                        Detay
                    </b-button>
                </template>
            </b-table>
        </div>
        <b-skeleton-wrapper :loading="loading">
            <template #loading>
                <b-card>
                    <b-skeleton width="85%"></b-skeleton>
                    <b-skeleton width="55%"></b-skeleton>
                    <b-skeleton width="70%"></b-skeleton>
                </b-card>
            </template>

            <b-card>

            </b-card>
        </b-skeleton-wrapper>
    </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
export default {
    name: "TablePage",
    components: {HeaderComponent},
    data(){
        return{
            fields:["name","subregion","population",`currencies`,"timezones","button"],
        }
    },
    methods:{
        goAbout(countries){
            console.log(countries)
            let name = countries.item.name
            console.log(name)
            this.$router.push(`/about/${name}`)

        },
    },
    beforeCreate() {
        this.$store.dispatch("getAllCountries")


    },

    mounted() {
    },
    computed :{
        items(){
            console.log(this.$store.state.countries)
            return this.$store.state.countries
        }
    },
    watch :{

    }

}
</script>

<style scoped>

</style>