#Ice 


Pokémon
---

- [[131|Lapras]]
- [[221|Piloswine]]
- [[698|Amaura]]

```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		[220, 221, 131, 698]
	)
);
```

style pokemon: ![[124|Jynx]] or ![[199|Slowking]]


```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.OfType(dv, "#Ice")
	)
);
```
