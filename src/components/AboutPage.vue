<template>
    <div class="container">
        {{this.$store.state.country[0] ? this.$store.state.country[0].name : "" }}
    </div>
</template>

<script>
export default {
    name: "AboutPage",
   data(){
        return{

        }
   },
    methods:{
        firstRun(){
        }
    },
    created() {
        let name = this.$route.params.name
        console.log(name)
        this.$store.dispatch("getDetail",name)
    },
}

</script>

<style scoped>

</style>