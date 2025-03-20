[[Town 8]]
Turtle themed

Pokémon
---
- [[389|Torterra]] (525)
- [[324|Torkoal]] (470)
- [[565|Carracosta]] (495)
- [[9|Blastoise]] (530) or [[8|Wartortle]]
- [[834|Drednaw]] (485)

```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		[389, 324, 565]
	)
);
```
optional:
```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		[9, 834]
	)
);
```
style: old lady?