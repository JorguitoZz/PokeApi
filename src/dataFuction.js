import { useState, useEffect } from "react";

const usePokemonData = () => {
  const [pokemons, setPokemons] = useState([]);
  const [carga, setCarga] = useState(20);
  const [busqueda, setBusqueda] = useState("");
  const [busquedaTipo, setBusquedaTipo] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const cargarPokemons = async (url) => {
    setLoading(true);

    const data = await fetchData(url);

    if (data) {
      if (data.results) {
        const pokemonData = await Promise.all(
          data.results.map(async (pokemon) => {
            const details = await fetchData(pokemon.url);
            return details ? transformarDatos(details) : null;
          })
        );

        // Si hay pokémons cargados, filtra duplicados antes de añadir
        if (pokemons.length > 0) {
          const filteredNewPokemonData = pokemonData.filter(
            (newPokemon) => !pokemons.some((currentPokemon) => currentPokemon.name === newPokemon.name)
          );
          setPokemons((prevPokemons) => [...prevPokemons, ...filteredNewPokemonData]);
        } else {
          setPokemons(pokemonData.filter((pokemon) => pokemon !== null));
        }
      } else if (data.pokemon) {
        const pokemonData = await Promise.all(
          data.pokemon.map(async (pokemon) => {
            const details = await fetchData(pokemon.pokemon.url);
            return details ? transformarDatos(details) : null;
          })
        );

        setPokemons(pokemonData.filter((pokemon) => pokemon !== null));
      } else {
        const details = await fetchData(url);
        if (details) {
          setPokemons([transformarDatos(details)]);
        }
      }
    }

    setLoading(false);
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

  const buscarPokemon = async () => {
    if (busqueda.trim() !== "") {
      const url = `https://pokeapi.co/api/v2/pokemon/${busqueda.toLowerCase()}`;
      cargarPokemons(url);
    } else if (busquedaTipo.trim() !== "") {
      const url = `https://pokeapi.co/api/v2/type/${busquedaTipo.toLowerCase()}`;
      cargarPokemons(url);
    } else {
      cargarPokemons(`https://pokeapi.co/api/v2/pokemon/?limit=${carga}`);
    }
  };

  useEffect(() => {
    buscarPokemon();
  }, [carga, busqueda, busquedaTipo]);

  const cargarMasPokemon = () => {
    setCarga((prevCarga) => prevCarga + 10);
  };

  const reset = () => {
    setBusquedaTipo("");
    setBusqueda("");
    setPokemons([])
  };

  return {
    pokemons,
    setBusqueda,
    setBusquedaTipo,
    cargarMasPokemon,
    reset,
    setPokemons,
    loading,
  };
};

export default usePokemonData;





