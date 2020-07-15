<template>
    <section class="section-posts">
        <div class="container">
            <PostsIndividual
                v-for="post in posts"
                :key="post.id"
                :img-name="post.img"
                :img-info="post.imgInfo"
                :news-title="post.title"
                :news-date="post.date"
            >
                <template #title>
                    <router-link :to="{ name: 'posts', params: {idnotice: post.id} }" tag="h2" >{{ post.title }}</router-link>
                </template>

                <p>{{ post.content | truncate(150) }}</p>
            </PostsIndividual>


        </div>
    </section>
</template>

<script>
import PostsIndividual from './BlogSectionPostIndividual';
import { mapGetters } from 'vuex'

export default {
    components: {
        PostsIndividual
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({
            posts: 'getPosts'
        })
    }, 
    methods: {

    }
}
</script>

<style>
.section-posts {
    width: 100%;
    max-width: 1000px;
    padding: 50px 0;
    margin: 10px auto;
}
</style>