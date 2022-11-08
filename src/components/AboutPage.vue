<template>
    <div class="container d-flex justify-content-center align-items-center mt-5">
        <div class="card" style="width: 22rem;">
            <div class="card-body">
                <h5 class="card-title d-flex align-items-center justify-content-center">Country : {{this.$store.state.country[0] ? this.$store.state.country[0].name : ""}}</h5>
                <img class="w-100 h-100 my-3" :src="this.$store.state.country[0].flags.svg" alt="">
                <div class="card-text  d-flex align-items-center justify-content-center  ">
                    <span class="title">Bilinen Çağrışımlar:  </span> <br>
                   <div class="d-flex align-items-start justify-content-center flex-column  ">
                        <span class="comment ">{{this.$store.state.country[0] ? this.$store.state.country[0].altSpellings[3] : ""}},</span>
                        <span class="comment ">{{this.$store.state.country[0] ? this.$store.state.country[0].altSpellings[2] : ""}},</span>
                        <span class="comment ">{{this.$store.state.country[0] ? this.$store.state.country[0].altSpellings[1]: ""}} </span>
                    </div>
                </div>
                <p class="card-text  d-flex justify-content-center align-items-center text-center">
                    <span class="title ">Dil :  </span> <br>
                    <span class="comment ">{{this.$store.state.country[0].languages[0].nativeName}}</span>
                </p>
                <p class="card-text m-0 d-flex justify-content-center align-items-center text-center">
                    <span class="title ">Başkent :  </span> <br>
                    <span class="comment ">{{this.$store.state.country[0].capital}}</span>
                </p>
                <p class="card-text d-flex justify-content-center align-items-center text-center">
                    <span class="title ">Kıta :  </span> <br>
                    <span class="comment ">{{this.$store.state.country[0].region}}</span>
                </p>
                <p class="card-text  d-flex justify-content-center align-items-center text-center">
                    <span class="title ">Bağımsızlık : </span> <br>
                    <span class="comment ">{{ this.$store.state.country_ind}}</span>
                </p>
                <p class="card-text  d-flex justify-content-center align-items-center text-center">
                    <span class="title ">Nufüs : </span> <br>
                    <span class="comment ">{{ this.$store.state.country[0].area}}</span>
                </p>

                <p class="card-text d-flex justify-content-center align-items-center text-center">
                    <span class="title ">Domain : </span> <br>
                    <span class="comment ">{{this.$store.state.country[0].topLevelDomain[0]}}</span>
                </p>

            </div>
        </div>


<!--        {{this.$store.state.country[0] ? this.$store.state.country[0].name : "" }}-->
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

    },
    mounted() {
        this.$store.dispatch("checkIndependecy")

    },
    created() {
        let name = this.$route.params.name
        console.log(name)
        this.$store.dispatch("getDetail",name)
        this.$store.dispatch("checkIndependecy")

    },
    watch:{

    }
}

</script>

<style scoped>
.card-text{
    margin-top: 8px;
}
.title{
    min-width: 160px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;

}
.comment{
    min-width: 150px;
    text-align: left;
}
</style>