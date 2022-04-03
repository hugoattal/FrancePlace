<template>
    <div class="flag">
        <div class="blue" />
        <div class="white" />
        <div class="red" />
    </div>
</template>

<script lang="ts">
export default {
    name: "PFlag"
};
</script>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.flag {
    display: flex;

    .blue {
        flex-basis: 33%;
        flex-grow: 1;
        background: #000091;
    }

    .white {
        flex-basis: 33%;
        flex-grow: 1;
        background: #ffffff;
    }

    .red {
        flex-basis: 33%;
        flex-grow: 1;
        background: #e1000f;
    }
}
</style>
