

Pokémon
---
- [[Toedscool]]
- [[Tangela]]
- [[Oddish]]
- [[Petilil]]
- [[Pikipek|Toucannon]]
- [[Mew]] (very rare)


```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.LinkedInCurrent(dv)
	)
);
```
