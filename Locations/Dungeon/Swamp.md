

Pokémon
---
### Grass
- [[755|Morelull]]
- [[88|Grimer]]
- [[23|Ekans]]
- [[193|Yanma]]

### Fishing
#### [[Old Rod]]
- any fish?
- [[60|Poliwag]]
- [[194|Wooper]]

### Surf
- [[258|Mudkip]]
- [[283|Surskit]]
- [[270|Lotad]]





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

```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.LinkedInCurrent(dv)
	)
);
```
