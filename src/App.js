import React, { useState, useEffect } from "react";
import Formulario from "./componentes/Form";
import Pokemons from "./componentes/Pokemons";
import usePokemonData from "./dataFuction";

const App = () => {
  const {
    pokemons,
    setBusqueda,
    setBusquedaTipo,
    cargarMasPokemon, 
    reset 
  } = usePokemonData();

  
  return (
    <div>
      <header>
        <h2>Buscar</h2>
        <Formulario setBusqueda={setBusqueda} />

        <button onClick={() => reset()}>Resetear</button>

        <button onClick={() => setBusquedaTipo("normal")}>prueba</button>
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
