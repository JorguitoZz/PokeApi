import React, { useEffect, useState } from "react";
import Formulario from "./componentes/Form";
import Pokemons from "./componentes/Pokemons";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [carga, setCarga] = useState(20);
  const [busqueda, setBusqueda] = useState("");

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
    const data = await fetchData(url);
    if (data) {
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const details = await fetchData(pokemon.url);
          if (details) {
            return {
              name: details.name,
              image: details.sprites.front_default,
              number: details.order,
              exp: details.base_experience,
              types: details.types,
            };
          }
          return null;
        })
      );
      setPokemons(pokemonData.filter((pokemon) => pokemon !== null));
    }
  };

  const buscarPokemon = async () => {
    if (busqueda.trim() !== "") {
      const url = `https://pokeapi.co/api/v2/pokemon/${busqueda}`;
      cargarPokemons(url);
    } else {
      cargarPokemons(` https://pokeapi.co/api/v2/pokemon/?limit=${carga}`);
    }
  };

  useEffect(() => {
    buscarPokemon();
  }, [carga, busqueda]);

  const cargarMasPokemon = () => {
    setCarga(carga + 10);
  };

  return (
    <div>
      <header>
        <h2>Buscar</h2>
        <Formulario setBusqueda={setBusqueda} />
      </header>
      <main>
        <Pokemons pokemons={pokemons} />
        <div>
          <button onClick={cargarMasPokemon}>Cargar más</button>
        </div>
      </main>
    </div>
  );
};

export default App;

