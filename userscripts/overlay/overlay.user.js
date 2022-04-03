// ==UserScript==
// @name         r/FrancePlace Overlay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Overlay pour r/place
// @author       Herobrine
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://place.luna-park.fr/favicon.png
// @grant        none
// ==/UserScript==

if (window.top !== window.self) {
    window.addEventListener("load", () => {
        const overlay = document.createElement("img");
        overlay.src = `https://place.luna-park.fr/overlay.png?time=${ (new Date()).getTime().toString() }`;
        overlay.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";

        document.getElementsByTagName("mona-lisa-embed")[0]
            .shadowRoot.children[0]
            .getElementsByTagName("mona-lisa-canvas")[0]
            .shadowRoot.children[0]
            .appendChild(overlay);
    }, false);
}
