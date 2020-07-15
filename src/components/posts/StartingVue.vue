<template>
    <section>
        <div>
            <h2 class="">{{ post.title }}</h2>
            <div>
                <div class="col-6 author">
                    <img src="../../assets/avatar.png" alt="avatar">
                    <strong class="font-italic">Felipe Valdez</strong>
                </div>
                <div class="col-6">
                    
                </div>
            </div>
            <img :src="require(`../../assets/${post.img}`)" :alt="post.imgInfo">
            <div class="content">
                <p>E ai pessoal como vocês estão?</p>
                <p>{{ post.content }}</p>
            </div>
            <pre class=" language-bash">
                <code class=" language-bash">npx react-native init authrn --template react-native-template-typescript
                </code>
            </pre>
            <span>{{ formatDate(post.date) }}</span>
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
section {
    width: 100%;
    max-width: 800px;
    padding: 50px;
    margin: 10px auto;
    background: #FFF;
    display: block;
    align-items: center;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 10px -2px gray;
}

h2 {
    cursor: pointer;
    font-size: 2.8em;
    font-weight: 700;
    color: #6854ea;
    line-height: 1.4em;
}

section div img {
    width: 100%;
    border-radius: 6px;
}

.content {
    font-size: 1.3rem;
    font-weight: 600;
}

section div pre {
}

section div pre> code {
}

.author {
    color: #999;
    padding: 10px 0;
}

.author img{
    width: 8%;
}
</style>