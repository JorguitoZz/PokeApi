import Pokemons from "../componentes/Pokemons"


const Home = ({ pokemons, cargarMasPokemon }) =>{

    return(
        <main>
            <Pokemons pokemons={pokemons} />
            <div>
                <button onClick={cargarMasPokemon}>Cargar más</button>
            </div>
      </main>
    )

}

export default Home