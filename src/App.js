import usePokemonData from "./dataFuction";
import Header from "./componentes/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon"
import styled from "styled-components";
import Loader from "./componentes/Loader";


const App = () => {
  const {
    pokemons,
    setBusqueda,
    setBusquedaTipo,
    cargarMasPokemon,
    reset,
    setPokemons,
    loading,
  } = usePokemonData();

  return (
    <>
      <Header setBusqueda={setBusqueda} setBusquedaTipo={setBusquedaTipo} reset={reset} />

      {/* Condición para mostrar el loader */}
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home pokemons={pokemons} cargarMasPokemon={cargarMasPokemon} />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Routes>
      )}
    </>
  );
};


export default App;
