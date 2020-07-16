<template>
    <section>
        <transition name="fade-view" mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        currentComponent: String
    },
}
</script>

<style scoped>
.fade-view-enter, .fade-view-leave-to {
    opacity: 0;
}
.fade-view-enter-active, .fade-view-leave-active {
    transition: opacity .5s ease-in-out;
}
</style>