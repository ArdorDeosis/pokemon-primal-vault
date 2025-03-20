[[Town 3]]

Swamp themed gym

Pokémon (options)
---
- [[258|Mudkip]]
- [[345|Lileep]] (maybe not, if it is not accessible)
- [[88|Grimer]] or [[89|Muk]]
- [[193|Yanma]]

```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		[258, 345, 88, 89, 193]
	)
);
```

# Fluff
legends of fighting forces, land vs sea, why not merge?

style pokemon: ![[199|Slowking]] (if not taken by [[Gym 3]])