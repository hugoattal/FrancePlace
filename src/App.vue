<template>
    <div class="app">
        <PHeader />
        <PButtons />
    </div>
</template>

<script setup lang="ts">
import PHeader from "@/components/design/PHeader.vue";
import PButtons from "@/components/content/PButtons.vue";
</script>

<style lang="scss">
@use "style";

.html, body {
    color: var(--color-content);
    margin: 0;
    background: radial-gradient(circle at center 180%, var(--color-background-2) 0%, var(--color-background-1) 60%, var(--color-background-0) 90%);
    min-height: 100vh;
}


.app {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: var(--length-gap-xxl);
}

</style>
