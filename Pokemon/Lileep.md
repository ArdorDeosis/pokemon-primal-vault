---
numbers:
  - "345"
  - "346"
---
#Rock #Grass #Fossil 

maybe only grass?

[[Swamp]]

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
