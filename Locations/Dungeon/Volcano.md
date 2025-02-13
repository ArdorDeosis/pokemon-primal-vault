moltres only with rock smash

or with surf, maybe there is a volcanic cave, but to reach the summit, you need to surf?



```dataviewjs
function getPokemon() {
    const allNumbers = dv.pages('"Pokemon"')
        .where(p => p.file.outlinks.includes(dv.current().file.link) && Array.isArray(p.numbers))
        .flatMap(p => p.numbers);
    return Array.from(new Set(allNumbers)).sort((a, b) => a - b);
}

function getImagePath(number) {
    return app.vault.adapter.getResourcePath(`images/${String(number).padStart(3, "0")}.png`);
}

const container = dv.el("div", "# Pokémon", {
    style: "display: flex; flex-wrap: wrap; gap: 1em; background: red; padding: 1em;"
});

getPokemon().forEach(number => {
    const img = document.createElement("img");
    img.src = getImagePath(number);
    img.style.width = "100px";
    img.style.height = "100px";
    container.appendChild(img);
});
```
