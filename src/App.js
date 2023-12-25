import usePokemonData from "./dataFuction";
import Header from "./componentes/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon"
import styled from "styled-components";


const App = () => {
  const {
    pokemons,
    setBusqueda,
    setBusquedaTipo,
    cargarMasPokemon, 
    reset,
    setPokemons,
  } = usePokemonData();


  return (
    <>
      <Header setBusqueda={setBusqueda} setBusquedaTipo={setBusquedaTipo} reset={reset}/>

      <Routes>
        <Route path="/" element={<Home pokemons={pokemons} cargarMasPokemon={cargarMasPokemon} />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </>
  );
};

export default App;
