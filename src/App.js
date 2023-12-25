import usePokemonData from "./dataFuction";
import Header from "./componentes/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon";
import Loader from "./componentes/Loader"; // Asegúrate de proporcionar la ruta correcta

const App = () => {
  const {
    pokemons,
    isLoading, // Agrega isLoading a la lista de variables extraídas
    setBusqueda,
    setBusquedaTipo,
    cargarMasPokemon,
    reset,
    setPokemons,
  } = usePokemonData();

  return (
    <>
      <Header
        setBusqueda={setBusqueda}
        setBusquedaTipo={setBusquedaTipo}
        reset={reset}
      />

      <Routes>
        <Route
          path="/"
          element={<Home pokemons={pokemons} cargarMasPokemon={cargarMasPokemon} isLoading={isLoading} />} // Pasa isLoading como prop
        />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </>
  );
};

export default App;
