<template>
    <div class="tuto">
        <div class="tuto-wrapper">
            <h2>Installer le bot de r/FrancePlace</h2>
            <p>
                Le discord a créé un bot qui permet de placer automatiquement les pixels afin de protéger le territoire <b>r/Français</b>.<br>
                Pour l'utiliser, il vous suffit juste de garder un onglet <a
                    href="https://www.reddit.com/r/place"
                    target="_blank"
                >r/place</a> ouvert ! Voici comment l'installer.
            </p>
            <h3>Télécharger l'extension userscript pour votre navigateur</h3>
            <p>
                La première étape est de télécharger une extension qui va permettre l'exécution du script sur r/place.<br>
                Vous devez utiliser <b>Tampermonkey</b> sur Chrome, ou <b>Greasemonkey</b> sur Firefox.
            </p>
            <p class="buttons">
                <a
                    class="button"
                    href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=fr"
                    target="_blank"
                >
                    <span class="icon">
                        <FontAwesomeIcon :icon="['fab', 'chrome']" />
                    </span>
                    <span class="text">
                        Tampermonkey
                        <span class="browser">(Chrome)</span>
                    </span>
                </a>
                <a
                    class="button"
                    href="https://addons.mozilla.org/fr/firefox/addon/greasemonkey/"
                    target="_blank"
                >
                    <span class="icon">
                        <FontAwesomeIcon :icon="['fab', 'firefox']" />
                    </span>
                    <span class="text">
                        Greasmonkey
                        <span class="browser">(Firefox)</span>
                    </span>
                </a>
            </p>
            <h3>Ajouter le script à votre extension</h3>
            <p>
                Rendez-vous simplement sur le lien ci-dessous. Votre extension userscript devrait vous demandez si vous souhaitez l'installer.<br>
                Si rien ne s'affiche, vous pouvez toujours l'installer manuellement en copiant le texte du userscript et en le collant dans votre extension.
            </p>
            <p class="buttons">
                <a
                    class="button"
                    href="https://raw.githubusercontent.com/Skeeww/Bot/master/placenlbot.user.js"
                    target="_blank"
                >
                    <span class="icon">
                        <FontAwesomeIcon icon="download" />
                    </span>
                    <span class="text">
                        placenlbot.user.js
                        <span class="browser">(on GitHub)</span>
                    </span>
                </a>
            </p>
            <h3>C'est terminé !</h3>
            <p>
                Vous n'avez plus qu'à laisser un (et un seul) onglet ouvert sur <a
                    href="https://www.reddit.com/r/place"
                    target="_blank"
                >r/place</a>. Vous devrez voir des notifications apparaitre si le bot fonctionne.
            </p>
            <p class="buttons">
                <a
                    class="button"
                    href="https://www.reddit.com/r/place/"
                    target="_blank"
                >
                    <span class="icon">
                        <FontAwesomeIcon :icon="['fab', 'reddit']" />
                    </span>
                    <span class="text">
                        r/place
                        <span class="browser">(on Reddit)</span>
                    </span>
                </a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "PTuto"
};
</script>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.tuto {
    width: 100%;
    color: var(--color-content-liter);
    padding: var(--length-padding-l) 128px;
    box-sizing: border-box;
    font-size: 1.2rem;

    a {
        color: var(--color-background-4);
        text-decoration: none;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }

    .tuto-wrapper {
        //background: var(--color-background-1);
        border: 4px solid var(--color-background-0);
        padding: var(--length-padding-xl);
        border-radius: var(--length-radius-l);

    }

    h2, h3 {
        color: var(--color-content);
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        margin-top: var(--length-margin-m);
        font-size: 1.5rem;
    }

    p {
        margin: var(--length-margin-s) 0;
    }

    .buttons {
        display: flex;
        gap: var(--length-gap-m);
    }

    .button {
        width: 280px;
        text-decoration: none;
        color: var(--color-content);
        display: flex;
        align-items: center;
        background: var(--color-background-3);
        border: 4px solid var(--color-background-4);
        border-radius: var(--length-radius-l);
        padding: var(--length-padding-xs) var(--length-padding-l);
        gap: var(--length-gap-m);
        box-sizing: border-box;

        transition: var(--transition-fast), transform var(--duration-fast);

        &:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 32px var(--color-background-0);
            text-decoration: none;
        }

        .icon {
            font-size: 2.5rem;
            color: var(--color-content-litest);
        }

        .browser {
            display: block;
            font-size: 0.8rem;
            color: var(--color-content-liter);
        }
    }
}
</style>
