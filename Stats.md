
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

const { Pokemon } = await cJS();


dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.LinkedInCurrent(dv)
	)
);

for(let type of types) {
	dv.header(4, type.replace("#", "# "));
	dv.el("div").replaceChildren(
		Pokemon.Render.SpriteList(
			Pokemon.OfType(dv, type)
		)
	);
}
```
