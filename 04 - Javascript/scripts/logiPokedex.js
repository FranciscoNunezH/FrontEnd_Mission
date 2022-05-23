

/* Funcion Principal */
const datosPokemon = () => {

    const pokemonName = document.getElementById('searchBox');
    var pokeInput = pokemonName.value.toLowerCase();
    var url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    var species = `https://pokeapi.co/api/v2/pokemon-species/${pokeInput}`;

    console.log(url);

    fetch(url).then((res) => {
        if (res.status != "200") {
            changeImage("./images/error.png");
            changeName("Error");
            changeId("");
            changeHP("0");
            changeAtk("0");
            changeDef("0");
            changeSpAtk("0");
            changeSpeed("0");
            changeWeight("0");
            changeType("")
            changeFlavorText("This happens because you are trying to find a wrong id or name.");
        }
        else {
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        
        /* Variables de la data */
        const pokemon = {
            nombre: data.name,
            imagen : data.sprites.other[`official-artwork`].front_default,
            experiencia: data.base_experience,
            peso: data.weight,
            idNumero: "Nº " + data.id,
            hp: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial: data.stats[3].base_stat,
            velocidad: data.stats[5].base_stat,
          };

          // Algunos pokemons pueden tener mas de un estado.
          try {
            tipo = data.types[0].type.name + " / " + data.types[1].type.name;

          } catch (error) {
            tipo = data.types[0].type.name

            
          }

        /* Llamamos las funciones dandoles como parametros la consulta pokeApi */
        changeImage(pokemon.imagen);
        changeName(pokemon.nombre);
        changeId(pokemon.idNumero);
        changeHP(pokemon.hp);
        changeAtk(pokemon.ataque);
        changeDef(pokemon.defensa);
        changeSpAtk(pokemon.defensa);
        changeSpeed(pokemon.velocidad);
        changeWeight(pokemon.peso);
        changeType(tipo) // Se usa la variable que establecimos en el try catch
        
        
    })

    /* Otra Consulta al Api */
    fetch(species).then((resB) => {
        return resB.json()}).then((dataB) => {

        /* Obtenemos la data */
        const pokemonSp = {
            flavorText : dataB.flavor_text_entries[10].flavor_text,
          };

        /* Llamamos las funciones para usar la data anterior */
        changeFlavorText(pokemonSp.flavorText);
    })
}




/* Nombre Pokemon */
const changeName = (url) => {
    const pokeName = document.getElementById("pokeName");
    // Cambiamos a mayuscula la primera letra del Nombre
    const str = url;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    // Cambiamos el texto en HTML por el contenido de la str2
    pokeName.textContent = str2;
}

/*

/* Cambiar Imagen del Pokemon */
const changeImage = (url) => {
    const pokeImagen = document.getElementById("pokeImage");
    pokeImagen.src = url; 
}

/* Numero de Pokemon */
const changeId = (url) => {
    const pokeId = document.getElementById("pokeId");
    pokeId.textContent = url; 
}

/* Puntos de HP del Pokemon */
const changeHP = (url) => {
    const pokeHp = document.getElementById("pokeHP");
    pokeHp.textContent = url;
}

/* puntos de ataque del Pokemon */
const changeAtk = (url) => {
    const pokeAtk = document.getElementById("pokeAtk");
    pokeAtk.textContent = url;
}

/* Puntos de Defensa del Pokemon */
const changeDef = (url) => {
    const pokeDef = document.getElementById("pokeDef");
    pokeDef.textContent = url;
}

/* Puntos de Ataque Especial del Pokemon */
const changeSpAtk = (url) => {
    const pokeSpec = document.getElementById("pokeSpecial");
    pokeSpec.textContent = url;
}

/* Puntos de Velocidad del Pokemon */
const changeSpeed = (url) => {
    const pokeSpd = document.getElementById("pokeSpeed");
    pokeSpd.textContent = url;
}

/* Peso en KG del Pokemon  */
const changeWeight = (url) => {
    const pokeWt = document.getElementById("pokeWeight");
    pokeWt.textContent = url + " Kg";
}

/* Tipo(s) del Pokemon */
const changeType = (url) => {
    const pokeType = document.getElementById("pokeType");
    pokeType.textContent =  url;
}


/* Texto descriptivo del Pokemon  */
const changeFlavorText = (species) => {
    const pokeText = document.getElementById("pokeFlavorText");
    pokeText.textContent = species;
}




