<template>
    <div class="container">
        <div>
            <b-table striped hover :items="items" :fields="fields">
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
            fields:["name","subregion","population","latlng",`currencies`,"timezones","button"],
            items:[],
        }
    },
    methods:{
        goAbout(countries){
            console.log('buttona basıldı' + ``)
            let id = countries.item.id
            this.$router.push(`/about/${id}`)
        },
    },

    created() {
        this.items = this.$store.state.countries
    },
    computed :{
        changeTable(){
            return this.$store.state.countries
        }
    },
    watch :{
        changeTable : function (value){
            this.items = value
            console.log(value)
        }
    }

}
</script>

<style scoped>

</style>