---
numbers:
  - "56"
  - "57"
stats: 305
aliases:
  - Primeape
---
#Fighting 

[[Tropical]] [[Tempered Forest]]

kinda like this one as early game or even starter

TODO: remove Annihilape

```dataviewjs
function getImagePath(number) {
    return app.vault.adapter.getResourcePath(`images/${String(number).padStart(3, "0")}.png`);
}

const container = dv.el("div", "", {
    style: "display: flex; flex-wrap: wrap; gap: 1em; background: red; padding: 1em;"
});

dv.current().numbers.forEach(number => {
    const img = document.createElement("img");
    img.src = getImagePath(number);
    img.style.width = "100px";
    img.style.height = "100px";
    container.appendChild(img);
});
```
