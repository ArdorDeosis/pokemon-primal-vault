Pokemon
---
Coast
---
```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.LinkedIn(dv, [
			"Town 5",
			"Town 6"
		])
	)
);
```

Routes
---
```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.LinkedIn(dv, [
			"Jungle Route 01",
			"Jungle Route 02",
		])
	)
);
```

Dungeons
---
```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.LinkedIn(dv, [
			"Ruins",
			"Volcano"
		])
	)
);
```


# Planned Pokémon

```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.LinkingToCurrent(dv)
	)
);
```