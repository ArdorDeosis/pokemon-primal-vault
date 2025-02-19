---
numbers:
  - "129"
  - "130"
aliases:
  - Gyarados
---
#Water #Flying 


```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		dv.current().numbers
	)
);
```
