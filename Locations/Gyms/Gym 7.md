[[Town 9]]

Prairie themed

- [[128|Tauros]] multiple?
- [[85|Dodrio]]
- [[115|Kangaskhan]]
- [[628|Braviary]]?
- [[105|Marowak]]


```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		[128,128,128, 85, 115, 628, 105]
	)
);
```

style: ![[105|Marowak]]