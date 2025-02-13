
# By Type

```dataview
table length(rows) as Count
from "Pokemon"
flatten file.tags as Tag
group by Tag
sort length(rows) desc
```




```dataviewjs
const types = [
	"#Water", "#Flying", "#Grass", "#Rock", "#Ground", "#Fire", "#Normal",
	"#Bug", "#Dark", "#Psychic", "#Poison", "#Fighting", "#Ice", "#Steel",
	"#Dragon", "#Electric", "#Fairy", "#Ghost"
];

function getPokemon(typeTag) {
    const allNumbers = dv.pages('"Pokemon"')
        .where(p => p.file.tags.values.includes(typeTag) && Array.isArray(p.numbers))
        .flatMap(p => p.numbers);
    return Array.from(new Set(allNumbers)).sort((a, b) => a - b);
}

function getImagePath(number) {
    return app.vault.adapter.getResourcePath(`images/${String(number).padStart(3, "0")}.png`);
}


for(let type of types) {

	const container = dv.el("div", type.replace("#", "# "), {
	    style: "display: flex; flex-wrap: wrap; gap: 1em; background: red; padding: 1em;"
	});

	getPokemon(type).forEach(number => {
	    const img = document.createElement("img");
	    img.src = getImagePath(number);
	    img.style.width = "100px";
	    img.style.height = "100px";
	    container.appendChild(img);
	});
}
```
