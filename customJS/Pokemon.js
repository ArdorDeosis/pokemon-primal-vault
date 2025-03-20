class Pokemon {
    async LoadData(number) {
        const url = `https://pokeapi.co/api/v2/pokemon/${number}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    SpriteSource(number) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
    }

    LinkingToCurrent(dv) {
        const allNumbers = dv.pages('"Pokemon"')
            .where(p => p.file.outlinks.includes(dv.current().file.link) && Array.isArray(p.numbers))
            .flatMap(p => p.numbers);
        return Array.from(new Set(allNumbers)).sort((a, b) => a - b);
    }

    LinkedInCurrent(dv) {
        const allNumbers = dv.pages('"Pokemon"')
            .where(p => p.file.inlinks.includes(dv.current().file.link))
            .map(p => p.file.name);
        return Array.from(new Set(allNumbers)).sort((a, b) => a - b);
    }

    LinkedIn(dv, pageNames) {
        const pageLinks = pageNames.map(name => dv.page(name)?.file.link).filter(Boolean);
        const allNumbers = dv.pages('"Pokemon"')
            .where(p => pageLinks.some(link => p.file.inlinks.includes(link)))
            .map(p => p.file.name);
        return Array.from(new Set(allNumbers)).sort((a, b) => a - b);
    }

    OfType(dv, type) {
        const allNumbers = dv.pages('"Pokemon"')
        .where(p => p.file.tags.values.includes(`${type}`) &&
            Array.isArray(p.numbers)
        )
        .flatMap(p => p.numbers);
        return Array.from(new Set(allNumbers)).sort((a, b) => a - b);
    }

    constructor() {
        this.Render = {
            Sprite: (number) => {
                const img = document.createElement("img");
                img.src = this.SpriteSource(number);
                img.style = "background-color: dimgrey; border-radius: 4px;";
                return img;
            },
            SpriteList: (numbers) => {
                const flexbox = document.createElement("div");
                flexbox.style = "display: flex; flex-wrap: wrap; gap: 8px;"
                numbers.forEach(number => {
                	flexbox.appendChild(this.Render.Sprite(number));
                });
                return flexbox;
            }
        };

        this.Data = {

        };
    }
}
