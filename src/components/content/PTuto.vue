<template>
    <div class="tuto">
        <div class="tuto-wrapper">
            <h2>Installer le bot de r/FrancePlace</h2>
            <p>
                Le discord a créé un bot qui permet de place automatiquement les pixels pour protéger le territoire r/Français.<br>
                Pour l'utiliser, il vous suffira juste de garder un onglet r/place ouvert ! Voici comment l'installer.
            </p>
            <h3>Télécharger l'extension userscript pour votre navigateur</h3>
            <p>
                La première étape est de télécharge une extension qui va permettre l'exécution du script sur r/place.<br>
                Vous devez utiliser <b>GreaseMonkey</b> sur Chrome, ou <b>TamperMonkey</b> sur Firefox.
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

    .tuto-wrapper {
        //background: var(--color-background-1);
        border: 4px solid var(--color-background-0);
        padding: var(--length-padding-xl);
        border-radius: var(--length-radius-l);

    }

    h2, h3 {
        color: var(--color-content);
    }
}
</style>
