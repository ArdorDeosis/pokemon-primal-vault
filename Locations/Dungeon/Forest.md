on [[Route 02]]

Pokémon
---
- [[56|Mankey]]
- [[48|Venonat]]
- [[13|Weedle]]
- [[10|Caterpie]]

```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.LinkedInCurrent(dv)
	)
);
```
