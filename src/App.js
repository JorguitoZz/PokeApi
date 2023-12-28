import usePokemonData from "./dataFuction";
import Header from "./componentes/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon"

import { useState } from "react";



const App = () => {
  const [clickTipo, setClickTipo] = useState(false)

  const {
    pokemons,
    setBusqueda,
    setBusquedaTipo,
    cargarMasPokemon,
    reset,
    loading,
  } = usePokemonData();

  return (
    <>
      <Header setBusqueda={setBusqueda} setBusquedaTipo={setBusquedaTipo} reset={reset} clickTipo={clickTipo} setClickTipo={setClickTipo} />

        <Routes>
          <Route path="/" element={<Home pokemons={pokemons} cargarMasPokemon={cargarMasPokemon} loading={loading} clickTipo={clickTipo} setClickTipo={setClickTipo} />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Routes>

    </>
  );
};


export default App;
