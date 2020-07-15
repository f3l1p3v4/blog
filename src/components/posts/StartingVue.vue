<template>
    <section class="section-news">
        <div class="container">
            <div class="row div-news">
                
                <div class="col-6">
                    <img :src="require(`../../assets/${post.img}`)" :alt="post.imgInfo">
                </div>
                
                <div class="col-6">
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.content }}</p>
                    <span>{{ formatDate(post.date) }}</span>
                </div>
           
            </div>
        </div>
    </section>
</template>

<script>
import Utils from  '../../mixins/UtilsMixin';

export default {
    computed: {
        post() {
            return this.$store.getters.getNewFromId(this.$route.params.idnotice);
        }
    },
    mixins: [ Utils ],
    //NÃO FUNCIONOU
    // beforeRouteEnter: (to, from, next) => {

    //     let indece = to.params;

    //     if (!indece.idnotice > 0) {
    //         next('/');
    //     }
    //     next();    
    // }
}
</script>

<style scoped>
img {
    width: 200px;
}

h2 {
    cursor: auto;
    color: #000;
}
</style>