<template>
    <div class="buttons-wrapper">
        <div class="join">
            Rejoignez-nous sur:
        </div>
        <div class="buttons">
            <a
                class="button discord"
                href="https://discord.gg/J7cUw4FAwG"
                target="_blank"
            >
                <FontAwesomeIcon :icon="['fab', 'discord']" />
                Discord
            </a>
            <a
                class="button reddit"
                href="https://www.reddit.com/r/franceplace/"
                target="_blank"
            >
                <FontAwesomeIcon :icon="['fab', 'reddit-alien']" />
                SubReddit
            </a>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "PButtons"
};
</script>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.buttons-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--length-gap-m);
}

.join {
    font-size: 1.2rem;
    color: var(--color-content-liter);
    text-align: center;
}

.buttons {
    display: flex;
    gap: var(--length-gap-m);
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--length-gap-s);
        font-size: 1.5rem;
        width: 200px;
        height: 48px;
        border-radius: var(--length-radius-l);
        border: 4px solid;
        transition: var(--transition-fast), transform var(--duration-fast);

        &:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 32px var(--color-background-0);
        }

        &.discord {
            background: #7289da;
            border-color: #53639d;
        }

        &.reddit {
            background: #ff4500;
            border-color: #d23901;
        }
    }
}
</style>
