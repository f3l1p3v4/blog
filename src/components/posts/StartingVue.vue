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
            <img class="image-post" :src="require(`../../assets/${post.img}`)" :alt="post.imgInfo">
            <div class="content">
                <p>E ai pessoal como vocês estão?</p>
                <p>{{ post.content }}</p>
            </div>
            <!-- <pre class=" language-bash">
                <code class=" language-bash">npx react-native init authrn --template react-native-template-typescript
                </code>
            </pre> -->
            <p>Eu vou utilizar o simulador do iOS aqui, você pode utilizar o do Android ou até mesmo criar um projeto com Expo, isso não vai impedir de você seguir o tutorial.</p>
            <p>Então depois de criar o projeto, posso executar:</p>
            <!-- <pre class=" language-bash">
                <code class=" language-bash">cd authrn && yarn ios</code>
            </pre> -->

            <div id="highlighter_521370" class="syntaxhighlighter  bash">
                <table border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr>
                            <!-- <td class="gutter">
                                <div class="line number1 index0 alt2">1</div>
                                <div class="line number2 index1 alt1">2</div>
                            </td> -->
                            <td class="code">
                                <div class="container">
                                    <div class="line number1 index0 alt2">
                                        <code class="bash comments">npx react-native init authrn --template react-native-template-typescript</code>
                                    </div>
                                    <!-- <div class="line number2 index1 alt1">
                                        <code class="bash plain">$ npm </code>
                                        <code class="bash functions">install</code> 
                                        <code class="bash plain">vue</code>
                                    </div> -->
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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

.image-post {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 20px;
}

p {
    font-size: 1.3rem;
    /* font-weight: 500; */
}

/* section div pre {
    display: block;
    font-family: monospace;
    white-space: pre;
    font-family: monospace, monospace;
    font-size: 1em;
    background: rgba(40, 41, 54, 1) !important;
    border-radius: 0.5em;
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    height: auto;
}

section div pre> code {
    display: block;
    padding: 10px 15px;
    white-space: pre-wrap;
    font-size: 90%;
    margin: 0;
    padding: 2px 5px;
    border-radius: var(--border-radius-secondary);
    background-color: var(--color-bg-code);
    color: #e1e1e6;
} */

div {
    /* display: block; */
}

.author {
    color: #999;
    padding: 10px 0;
}

.author img{
    width: 8%;
}

.syntaxhighlighter {
    line-height: 35px;
    color: rgba(40, 41, 54, 1) !important;
    font-size: 18px;
    -webkit-tap-highlight-color: transparent;
    padding: 20px;
    overflow-x: auto !important;
    width: 100% !important;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #263238 !important;
    outline: none;
}

table {
    -webkit-border-horizontal-spacing: 0px;
    -webkit-border-vertical-spacing: 0px;
    -webkit-tap-highlight-color: transparent;
    border-collapse: initial;
    border: none;
    margin: 0;
    color: #fff;
    line-height: 1;
    font-size: inherit;
    outline: none;
}
/* 
table tbody {
    border-collapse: initial;
    color: inherit;
    line-height: 1;
    font-size: inherit;
    -webkit-tap-highlight-color: transparent;
    outline: none;
} */

/* table tbody tr {
    border-collapse: initial;
    color: inherit;
    line-height: 1;
    font-size: inherit;
    -webkit-tap-highlight-color: transparent;
    outline: none;
} */

/* .gutter {
    border-collapse: initial;
    line-height: 1;
    font-size: inherit;
    -webkit-tap-highlight-color: transparent;
    color: #afafaf !important;
    border: none;
    padding: 0;
    outline: none;
} */

.comments {
    color: #FFF;
}
</style>