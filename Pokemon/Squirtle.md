---
aliases:
  - Blastoise
numbers:
  - "7"
  - "8"
  - "9"
---
#Water #Starter 


```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		dv.current().numbers
	)
);
```
