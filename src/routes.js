import Vue from 'vue';
import VueRouter from 'vue-router';

import Posts from './components/BlogSectionPost';
import StartingVue from './components/posts/StartingVue';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: Posts
    }, {
        path: '/posts/:idnotice',
        name: 'posts',
        component: StartingVue
    }]
})