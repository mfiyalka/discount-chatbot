<template>
    <div>
        <sidenav />
        <app-main />
    </div>
</template>

<script>
    import { AppMain, Sidenav } from './components'
    export default {
        name: "index",
        components: {
            AppMain,
            Sidenav
        },
    }
</script>

<style scoped>

</style>
