#Ice 


Pokémon
---

- [[Lapras]]
- [[Swinub|Piloswine]]
- [[Amaura]]


```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.OfType(dv, "#Ice")
	)
);
```
