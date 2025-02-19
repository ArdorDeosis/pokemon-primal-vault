TODO: story plot that brings us here

late game: [[Ho-Oh]] 

Pokémon
---
- [[Natu]]
- [[Bronzor]]
- [[Sigilyph]] (very rare, very strong)
- maybe [[Hawlucha]]


```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.LinkedInCurrent(dv)
	)
);
```
