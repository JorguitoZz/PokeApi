import React, { useState, useEffect } from "react";

const usePokemonData = () => {

  const [pokemons, setPokemons] = useState([]);
  const [carga, setCarga] = useState(20);
  const [busqueda, setBusqueda] = useState("");
  const [busquedaTipo, setBusquedaTipo] = useState("");
 

  // Función asincrónica para obtener datos de la API
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    
    // Manejar errores de manera adecuada (imprimir en consola y devolver null)
    console.error(error);
    return null;
  }
};

const cargarPokemons = async (url) => {
  const data = await fetchData(url);

  if (data) {
    
    if (data.results) {
      // Estamos tratando con una lista de Pokémon

      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const details = await fetchData(pokemon.url);
          
          return details ? transformarDatos(details) : null;
        })
      );
      setPokemons(pokemonData.filter((pokemon) => pokemon !== null));
    
    }else if(data.pokemon) {



      const pokemonData = await Promise.all(
        data.pokemon.map(async (pokemon) => {
          const details = await fetchData(pokemon.pokemon.url);
          return details ? transformarDatos(details) : null;
        })
      );
      setPokemons(pokemonData.filter((pokemon) => pokemon !== null));

    } else {
    
      // Estamos tratando con la búsqueda de un solo Pokémon
      const details = await fetchData(url);
      if (details) {
        setPokemons([transformarDatos(details)]);
      }
    
    }
  }
};

const transformarDatos = (details) => {
  return {
    name: details.name,
    image: details.sprites.front_default,
    number: details.order,
    exp: details.base_experience,
    types: details.types,
  };
};

// Función para buscar Pokémon según el término de búsqueda
const buscarPokemon = async () => {
  if (busqueda.trim() !== "") {
    // Construir la URL para buscar un Pokémon específico
    const url = `https://pokeapi.co/api/v2/pokemon/${busqueda.toLowerCase()}`;
    cargarPokemons(url);
  }else if (busquedaTipo.trim() !=="") {

    const url = `https://pokeapi.co/api/v2/type/${busquedaTipo.toLowerCase()}`;
    cargarPokemons(url)
  } else {
    // Construir la URL para cargar más Pokémon
    cargarPokemons(`https://pokeapi.co/api/v2/pokemon/?limit=${carga}`);
  }
};

// Efecto que se ejecuta al cambiar la carga o el término de búsqueda
useEffect(() => {
  buscarPokemon();
}, [carga, busqueda, busquedaTipo]);

// Función para cargar más Pokémon al hacer clic en el botón
const cargarMasPokemon = () => {
  setCarga(carga + 10);
};

const reset = () => {
  setBusquedaTipo("")
  setBusqueda("")
}

return {
  pokemons,
  setBusqueda,
  setBusquedaTipo,
  cargarMasPokemon, 
  reset 
};

}

export default usePokemonData





