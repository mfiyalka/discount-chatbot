<template>
    <div class="box"><div class="sbl-circ"></div></div>
</template>

<script>
    export default {
        name: "Spinner"
    }
</script>

<style scoped>
    .box {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .sbl-circ {
        height: 42px;
        width: 42px;
        color: #669dfc;
        position: relative;
        display: inline-block;
        border: 3px solid;
        border-radius: 50%;
        border-top-color: transparent;
        animation: rotate 1s linear infinite; }

    @keyframes rotate {
        0% {
            transform: rotate(0); }
        100% {
            transform: rotate(360deg); } }
</style>
