---
number: 63
stats: "310"
types: Psychic
numbers:
  - "63"
  - "64"
  - "65"
---
#Psychic

[[Tempered Forest]], maybe [[Tropical]] or [[Plains]]

make it evolve when given a spoon
make variants based on different items given?

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
