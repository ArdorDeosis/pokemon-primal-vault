
```dataview
table length(rows) as Count
from "Pokemon"
flatten file.tags as Tag
group by Tag
sort length(rows) desc
```

