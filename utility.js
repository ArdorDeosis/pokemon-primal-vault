function getPokemonNumbers() {
    const allNumbers = dv.pages('"Pokemon"')
        .where(p => p.file.outlinks.includes(dv.current().file.link) && Array.isArray(p.numbers))
        .flatMap(p => p.numbers);
    return Array.from(new Set(allNumbers)).sort((a, b) => a - b);
}

function getImagePath(number) {
    return app.vault.adapter.getResourcePath(`images/${String(num).padStart(3, "0")}.png`);
}

function renderImageGrid(links) {
    const container = dv.el("div", null, {
        style: "display: flex; flex-wrap: wrap; gap: 1em; padding: 1em;"
    });

    links.forEach(number => {
        const img = document.createElement("img");

        img.src = GetImagePath(number);
        img.alt = paddedNumber;
        img.style.width = "100px";
        img.style.height = "100px";

        container.appendChild(img);
    });
}
