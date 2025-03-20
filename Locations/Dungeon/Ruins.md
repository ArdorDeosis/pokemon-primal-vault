TODO: story plot that brings us here

late game: [[Ho-Oh]] 

Pokémon
---
- [[177|Natu]] and [[178|Xatu]]
- [[436|Bronzor]] and [[437|Bronzong]]
- [[344|Claydol]] (very rare, very strong)
- thought about [[81|Magnemite]] in a different form, less tech, more ancient civilization, maybe psychic?


```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.LinkedInCurrent(dv)
	)
);
```
