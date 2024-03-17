<script setup>
    import { RouterView } from 'vue-router'
</script>

<template>
    <div class="w-full min-h-screen flex flex-col items-center justify-start global">
        <app-header />
        <RouterView />
        <app-footer />
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    export default {
        name: "App",
        components: {
            "app-header": Header,
            "app-footer": Footer
        }
    }
</script>

<style scoped>

</style>
