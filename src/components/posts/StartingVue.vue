<template>
    <section>
        <div class="container">
            <div class=" div-news">
                <div>
                    <h2 class="">{{ post.title }}</h2>
                    <div class="author">
                        <span class="font-italic">por <strong>Felipe Valdez</strong></span>
                    </div>
                    <h3>Introdução</h3>
                    <p class="content">{{ post.content }}</p>
                    <pre class=" language-bash">
                        <code class=" language-bash">npx react-native init authrn --template react-native-template-typescript
                        </code>
                    </pre>
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
section {
    width: 100%;
    max-width: 900px;
    padding: 50px;
    margin: 10px auto;
    background: #FFF;
    display: flex;
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

h3 {
    font-size: 2.4em;
    font-weight: 700;
}

.content {
    font-size: 1.3rem;
    font-weight: 600;
}

pre {
    background: rgba(40, 41, 54, 1) !important;
    border-radius: 0.5em;
    padding: 0.8em;
    margin: 0.5em 0;
    overflow: auto;
    height: auto;
    --lightense-z-index: 999999;
    --lightense-backdrop: rgba(255, 255, 255, .98);
    --lightense-backdrop-safari: rgba(255, 255, 255, 0.6859999999999999);
    --lightense-duration: 300ms;
    --lightense-timing-func: cubic-bezier(.2, 0, .1, 1);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    font-weight: var(--font-weight-primary-regular);
    background: rgba(40, 41, 54, 1) !important;
    border-radius: 0.5em;
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    height: auto;
    color: #ccc;
    text-shadow: none;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.8;
    font-size: 16px;
    tab-size: 4;
    hyphens: none;
}

pre code {
    display: block;
    padding: 20px 5px;
    color: #ccc;
    background: rgb(40, 41, 54);
    text-shadow: none;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
}

.author {
    color: #999;
    padding: 10px 0;
}
</style>