<template>
    <div class="container">
        <div class="d-flex justify-content-center align-items-center">
            <HeaderComponent></HeaderComponent>
            <export-excel
                worksheet="Countries App"
                name="Countries"
                :data="items"
                :fields="jsonProperties"
            >
                <b-button variant="info">Tabloyu Excel Olarak İndir</b-button>
            </export-excel>
        </div>
        <div>


            <b-table striped hover :items="items" :fields="fields" :per-page="perPage" :current-page="currentPage">

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
            <p class="mt-3">Sayfa Numarası: {{ currentPage }}</p>

            <b-pagination
                class="mt-3"
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
            ></b-pagination>
        </div>
    </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
export default {
    name: "TablePage",
    components: {HeaderComponent},
    data(){
        return{
            fields:["name","capital","subregion","population",`currencies`,"timezones","button"],
            jsonProperties:{
                "Ülke İsmi" : "name",
                "Ülke Başkenti" : "capital",
                "Ülke Kıtası" : "subregion",
                "Nufüs" : "population",
                "Zaman Dilimi" : "timezones",
            },
            perPage:25,
            currentPage:1
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
        },
        rows(){
            return this.items.length
        }
    },
    watch :{

    }

}
</script>

<style scoped>

</style>