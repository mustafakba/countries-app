<template>
    <div class="container">

        <div class="row height d-flex justify-content-center align-items-center">
            <div class="col-md-8">
                <div class="search">
                    <b-icon-search class="search-icon"></b-icon-search>
                    <input v-model="searchedText" type="text" class="form-control" placeholder="Herhangi Bir Ülkeyi Merak Mı Ediyorsunuz ? Arayın...">
                    <button @click="sendSearch" class="btn btn-primary">Search</button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    data(){
        return{
            searchedText : '',
        }
    },
    methods:{
        sendSearch(){
            this.$store.dispatch("searchCountry",this.searchedText)

        }
    },
}
</script>

<style scoped>


.container{
    margin-top: 15px;
    margin-bottom: 15px;
}
.search{
    position: relative;
    box-shadow: 0 0 40px rgba(51, 51, 51, .1);

}

.search input{

    height: 60px;
    text-indent: 25px;
    border: 2px solid #d6d4d4;


}


.search input:focus{

    box-shadow: none;
    border: 2px solid blue;


}

.search .search-icon{

    position: absolute;
    top: 20px;
    left: 16px;

}

.search button{

    position: absolute;
    top: 5px;
    right: 5px;
    height: 50px;
    width: 110px;
    background: blue;

}

</style>