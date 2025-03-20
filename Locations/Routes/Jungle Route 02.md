

Pokémon
---
- [[948|Toedscool]]
- [[114|Tangela]]
- [[43|Oddish]] or [[44|Gloom]]
- [[548|Petilil]] or [[549|Lilligant]]
- [[733|Toucannon]]
- [[151|Mew]] (very rare)


```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.LinkedInCurrent(dv)
	)
);
```
