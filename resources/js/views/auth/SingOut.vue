<template>

</template>

<script>
    export default {
        name: "SingOut",
        created() {
            this.$store.dispatch('destroyToken')
                .then(response => {
                    this.$router.push({ name: 'SignIn' });
                });
        }
    }
</script>

<style scoped>

</style>
