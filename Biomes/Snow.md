High elevation area in [[Tempered Forest]]

```dataviewjs
const { Pokemon } = await cJS();
dv.el("div").replaceChildren(
	Pokemon.Render.SpriteList(
		Pokemon.LinkedIn(dv, [
			"Ice Mountain",
			"Ice Sea"
		])
	)
);
```
