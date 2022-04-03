<template>
    <div class="app">
        <PHeader />
        <PButtons />
        <PTuto />
        <PFooter />
    </div>
</template>

<script setup lang="ts">
import PHeader from "@/components/design/PHeader.vue";
import PButtons from "@/components/content/PButtons.vue";
import PTuto from "@/components/content/PTuto.vue";
import PFooter from "@/components/content/PFooter.vue";
</script>

<style lang="scss">
@use "style";

.html, body {
    color: var(--color-content);
    margin: 0;
    background: radial-gradient(circle at center 180%, var(--color-background-2) 0%, var(--color-background-1) 60%, var(--color-background-0) 90%) fixed;
    height: 100vh;
    overflow-y: auto;
}

.app {
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: var(--length-gap-m);
}

</style>
