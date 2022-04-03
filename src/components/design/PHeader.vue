<template>
    <header>
        <div class="title-wrapper">
            <div class="intro">
                Bienvenue sur
            </div>
            <h1 class="title">
                r/FrancePlace
            </h1>
            <PFlag class="flag" />
        </div>
    </header>
</template>

<script lang="ts">
export default {
    name: "PHeader"
};
</script>

<script setup lang="ts">

import PFlag from "@/components/design/PFlag.vue";
</script>

<style scoped lang="scss">
header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: var(--length-padding-xxl);
    padding-bottom: var(--length-padding-l);

    .title-wrapper {
        display: flex;
        flex-direction: column;
        padding: var(--length-padding-xl);

        .intro {
            font-size: 1.5rem;
            color: var(--color-content-liter);
        }

        h1 {
            font-weight: 600;
            font-size: 4rem;
            text-shadow: 0 0 32px var(--color-primary);

            @media (max-width: 480px) {
                font-size: 3rem;
            }
        }

        .flag {
            height: 8px;
        }
    }


}
</style>
