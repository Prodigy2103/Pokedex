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

    statics = { // Deklariert 'statics' als Objekt, das die Basiswerte (Statistiken) des Pokemons enthält.
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0,
    }; // #endregion

    // Der 'constructor' ist die Methode, die automatisch aufgerufen wird, wenn ein neues Objekt der Klasse erstellt wird.
    constructor({cName, cSpiritOne, cSpiritTwo, cIndex, cType, cStatics, cAbilities, cWeight, cHeight,}) {
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

    for (let i = currentPokemonOffset + 1; i <= currentPokemonOffset + limit; i++) {
        const pokemonResponse = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
        const pokemonJson = await pokemonResponse.json();

        pokemonArray.push(
            new pokemonInfo({
                cAbilities: pokemonJson.abilities,
                cName: pokemonJson.name,
                cHeight: pokemonJson.height,
                cWeight: pokemonJson.weight,
                cIndex: pokemonJson.id,
                cSpiritOne: pokemonJson.sprites.front_default,
                cSpiritTwo: pokemonJson.sprites.other?.["official-artwork"]?.front_default || null,
                cType: pokemonJson.types,
                cStatics: pokemonJson.stats,
            })
        );
    }
    currentPokemonOffset += limit;
    spinnerEnd();
    renderCards(pokemonArray);}

function renderCards(array) {
    const cardSectionRef = document.getElementById("pokeCards");
    cardSectionRef.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        cardSectionRef.innerHTML += getCardInfo({
            spiritOne: array[i].spiritOne,
            id: array[i].id,
            name: array[i].name,
            index: i,
            type: array[i].type[0], // erster Typ
        });

        renderTypes(i, array); // falls du das definiert hast
    }
}

function renderTypes(index, array) {
    const typeDiv = document.getElementById(`type${index}`);
    if (typeDiv) {
        typeDiv.innerHTML = array[index].type.map(t => `<span class="type-tag ${t}">${t}</span>`).join('');
    }
}

function spinnerLoad() {
    const loadRef = document.getElementById('loadSpinner');
    loadRef.classList.add('d-flex');
}

function spinnerEnd() {
    const loadRef = document.getElementById('loadSpinner');
    loadRef.classList.add('d_none');
}

// Starte den Vorgang
getPokeApi();

// TODO next Step overview template function schreiben und render function und searchbar function
function renderViewCard() {
    const viewCardRef = document.getElementById('overView');

    viewCardRef.innerHTML = getViewCard({
        
    })
}
