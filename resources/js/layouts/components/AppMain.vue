<template>
    <div class="main-content">
        <router-view :key="key" />
    </div>
</template>

<script>
    export default {
        name: "AppMain",
        computed: {
            key() {
                return this.$route.path
            }
        }
    }
</script>

<style scoped>

</style>
