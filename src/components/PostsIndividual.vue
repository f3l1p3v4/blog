<template>
    <div class="row div-posts">

        <div class="col-3">
            <img :src="require('../assets/' + this.imgName)" :alt="imgInfo">
        </div>

        <div class="col-9">
            
            <slot name="title"></slot>

            <slot>Notícia Padrão</slot>
        
            <span class="font-italic"> Publicado em: <strong>{{ formatDate(newsDate) }}</strong> por <strong>Felipe Valdez</strong></span>
        </div>

    </div>
</template>

<script>
import Utils from '../mixins/UtilsMixin'

export default {
    props: {
        imgName: {
            type: String,
            required: true
        },
        imgInfo: {
            type: String,
            required: true
        },
        newsDate: {
            type: String,
            required: true
        }
    },
    mixins: [Utils]
}
</script>

<style>
.div-posts {
    padding: 50px 0;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 10px -2px gray;
}
.div-posts div img {
    width: 100%;
    border-radius: 6px;
}
.div-posts div h2 {
    cursor: pointer;
    color: #11141E;
    font-size: 1.8em;
    font-weight: 700;
    color: #6854ea;
    line-height: 1.3em;
}
.div-posts div h2:hover {
    opacity: 0.8;
}
.div-posts div p {
    color: #444;
    font-weight: 600;
    font-size: 1em;
    line-height: 1.4em;
}
.div-posts div span {
    color: #999;
}
</style>