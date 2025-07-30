class pokemonInfo {
    // #region attributes

    // Deklariert die Eigenschaft des Pokemons
    name;
    spiritOne;
    spiritTwo;
    id;
    weight;
    height;
    arrayIndex;
    type = [];
    abilities = [];

    statics = {
        // Deklariert 'statics' als Objekt, das die Basiswerte (Statistiken) des Pokemons enthält.
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0,
    }; // #endregion

    // Der 'constructor' ist die Methode, die automatisch aufgerufen wird, wenn ein neues Objekt der Klasse erstellt wird.
    constructor({
        cName,
        cSpiritOne,
        cSpiritTwo,
        cIndex,
        cType,
        cStatics,
        cAbilities,
        cWeight,
        cHeight,
    }) {
        this.name = cName;
        this.spiritOne = cSpiritOne;
        this.spiritTwo = cSpiritTwo;
        this.id = cIndex;
        this.type = cType.map((t) => t.type.name); // extrahiere Typnamen
        this.abilities = cAbilities.map((a) => a.ability.name);
        this.weight = cWeight;
        this.height = cHeight;
        // Weist den 'base_stat'-Wert den Elementen zu
        this.statics.hp = cStatics[0].base_stat;
        this.statics.attack = cStatics[1].base_stat;
        this.statics.defense = cStatics[2].base_stat;
        this.statics.specialAttack = cStatics[3].base_stat;
        this.statics.specialDefense = cStatics[4].base_stat;
        this.statics.speed = cStatics[5].base_stat;
    }
}

const pokemonArray = [];

let currentPokemonOffset = 0;

async function getPokeApi() {
    const limit = 30;
    spinnerLoad(); // Starte den Spinner beim Abrufen von Daten

    for (
        let i = currentPokemonOffset + 1; i <= currentPokemonOffset + limit; i++) {
        const pokemonResponse = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + i
        );
        const pokemonJson = await pokemonResponse.json();

        pokemonArray.push(
            new pokemonInfo({
                cAbilities: pokemonJson.abilities,
                cName: pokemonJson.name,
                cHeight: pokemonJson.height,
                cWeight: pokemonJson.weight,
                cIndex: pokemonJson.id,
                cSpiritOne: pokemonJson.sprites.front_default,
                cSpiritTwo:
                    pokemonJson.sprites.other?.["official-artwork"]
                        ?.front_default || null,
                cType: pokemonJson.types,
                cStatics: pokemonJson.stats,
            })
        );
    }
    currentPokemonOffset += limit;
    spinnerEnd(); // Beende den Spinner, nachdem die Daten abgerufen wurden
    renderCards(pokemonArray);
}

function renderCards(array) {
    const cardSectionRef = document.getElementById("pokeCards");
    cardSectionRef.innerHTML = ""; // Leere den Container vor dem Rendern

    for (let i = 0; i < array.length; i++) {
        cardSectionRef.innerHTML += getCardInfo({
            spiritOne: array[i].spiritOne,
            id: array[i].id,
            name: array[i].name,
            index: i,
            type: array[i].type[0], // erster Typ
        });

        // Stelle sicher, dass renderTypes korrekt aufgerufen wird
        renderTypes(i, array);
    }
}

function renderTypes(index, array) {
    const typeDiv = document.getElementById(`type${index}`);
    if (typeDiv) {
        typeDiv.innerHTML = array[index].type
            .map((t) => `<span class="type-tag ${t}">${t}</span>`)
            .join("");
    }
}

function spinnerLoad() {
    const loadRef = document.getElementById('loadSpinner');
    loadRef.classList.add('d-flex');
}

function spinnerEnd() {
    const loadRef = document.getElementById('loadSpinner');
    loadRef.classList.remove('d-flex');
}

// // Starte den Vorgang
getPokeApi();

// TODO next Step overview template function schreiben und render function und searchbar function

function renderViewCard(array) {
    const viewCardRef = document.getElementById("overView");
    viewCardRef.innerHTML = ""; // Leert den Container vor dem Rendern

    for (let i = 0; i < array.length; i++) {
        // Fügt die generierte View Card zum Container hinzu
        viewCardRef.innerHTML += getViewCard({
            spiritOne: array[i].spiritOne,
            id: array[i].id,
            name: array[i].name,
            index: i,
            abilities: array[i].abilities,
            type: array[i].type[0], // Erster Typ für die Headline-Klasse
            height: array[i].height,
            weight: array[i].weight,
        });

        // Ruft die Funktion zum Rendern der Typen auf, um die Typ-Tags in der View Card anzuzeigen
        renderTypes(i, array);
    }
}

function showViewCard() {
    const viewCardRef = document.getElementById("overView");
    if (viewCardRef) {
        viewCardRef.classList.remove("d_none");
        viewCardRef.classList.add("d-flex");
    }
}

function hideViewCard(event) {
    const viewCardRef = document.getElementById("overView");
    if (viewCardRef && event.target === viewCardRef) {
        viewCardRef.classList.remove("d-flex");
        viewCardRef.classList.add("d_none");
    }
}

// function search() {
//     const inputRef = document.getElementById('searchBar');
//     const inputValue = inputRef.value.toLowerCase();

//     if (inputValue.length >= 3) {
//         const result = pokemonArray.filter(pokemon => pokemon.nameLowerCase.includes(inputValue))

//         renderCardSection(result);
//     } if (inputValue == "") {
//         renderCardSection(pokemonArray);
//     }
// }

function search() {
    const inputRef = document.getElementById('searchBar');
    const inputValue = inputRef.value.toLowerCase(); // Den Input-Wert direkt in Kleinbuchstaben umwandeln

    // Filtere das pokemonArray basierend auf dem Namen.
    // Wir wandeln auch den Pokemon-Namen in Kleinbuchstaben um, um einen
    // "case-insensitiven" Vergleich zu gewährleisten.
    const result = pokemonArray.filter(pokemon => pokemon.name.toLowerCase().includes(inputValue));

    // Überprüfe die Länge des eingegebenen Suchbegriffs
    if (inputValue.length >= 3) {
        // Wenn der Suchbegriff 3 oder mehr Zeichen hat, zeige die gefilterten Ergebnisse an.
        renderCards(result); // Rufe deine vorhandene renderCards-Funktion auf
    } else if (inputValue === "") {
        // Wenn das Suchfeld leer ist, zeige wieder alle Pokemon an.
        renderCards(pokemonArray); // Zeige alle ursprünglichen Pokemon an
    }
    // Wenn der Input weniger als 3 Zeichen lang und nicht leer ist,
    // wird der aktuelle Zustand der Karten beibehalten, bis mehr eingegeben wird.
}