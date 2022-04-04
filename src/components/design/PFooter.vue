<template>
    <footer class="footer">
        <h2>Contributeurs</h2>
        <div class="team">
            <div
                v-for="member of members"
                :key="member.name"
                class="member"
            >
                <img
                    alt="profil"
                    :src="member.image"
                >
                <div class="description">
                    <div class="name">
                        {{ member.name }}
                    </div>
                    <div class="details">
                        {{ member.details }}
                    </div>
                    <div class="socials">
                        <a
                            v-if="member.socials.github"
                            :href="member.socials.github"
                            target="_blank"
                        ><FontAwesomeIcon :icon="['fab', 'github']" /></a>
                        <a
                            v-if="member.socials.twitter"
                            :href="member.socials.twitter"
                            target="_blank"
                        ><FontAwesomeIcon :icon="['fab', 'twitter']" /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
export default {
    name: "PFooter"
};
</script>

<script setup lang="ts">
type TMember = {
    name: string;
    details: string;
    image: string;
    socials: {
        github?: string;
        twitter?: string;
    };
}

const members: Array<TMember> = [
    {
        name: "Herobrine",
        details: "Overlay & Landing page",
        image: "https://cdn.discordapp.com/avatars/148576018137874441/edfaeddd67ebcbc8a1094b8de987db01.webp",
        socials: {
            github: "https://github.com/hugoattal",
            twitter: "https://twitter.com/hugoattal"
        }
    },
    {
        name: "Skew",
        details: "Bot & Backend",
        image: "https://pbs.twimg.com/profile_images/1398028648733679621/jor6LHHn_400x400.jpg",
        socials: {
            github: "https://github.com/Skeeww",
            twitter: "https://twitter.com/SkewRam"
        }
    },
    {
        name: "Alabate",
        details: "Bot update",
        image: "https://avatars.githubusercontent.com/u/6835111?v=4",
        socials: {
            github: "https://github.com/Alabate"
        }
    }
];
</script>

<style scoped lang="scss">
.footer {
    display: flex;
    flex-direction: column;
    gap: var(--length-gap-m);
    padding-bottom: var(--length-padding-xxl);

    h2 {
        text-align: center;
        color: var(--color-content-litest);
    }

    .team {
        display: flex;
        gap: var(--length-gap-m);
        flex-wrap: wrap;
        justify-content: center;

        .member {
            display: flex;
            align-items: center;
            gap: var(--length-gap-m);
            padding: var(--length-padding-m);
            width: 280px;

            img {
                height: 80px;
                width: 80px;
                border-radius: 40px;
                overflow: hidden;
                border: 4px solid var(--color-background-3);
                flex-grow: 0;
                flex-shrink: 0;
            }

            .description {
                display: flex;
                flex-direction: column;
                gap: var(--length-gap-s);
                flex-grow: 1;
                flex-shrink: 1;

                .name {
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                .details {
                    color: var(--color-content-liter);
                }

                .socials {
                    color: var(--color-content-litest);
                    font-size: 1.5rem;
                    display: flex;
                    gap: var(--length-gap-s);

                    a:hover {
                        color: var(--color-background-4);
                    }
                }
            }
        }
    }
}
</style>
