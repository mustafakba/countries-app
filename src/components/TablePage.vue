<template>
    <div class="container">
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
    </div>
</template>

<script>
export default {
    name: "TablePage",
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

    created() {
    },
    computed :{
        items(){
            return this.$store.state.countries
        }
    },
    watch :{

    }

}
</script>

<style scoped>

</style>