import styled from "styled-components"
import Pokemons from "../componentes/Pokemons"
import Loader from "../componentes/Loader"


const Button = styled.button`
    color: #fff;
    background: #000;
    border: none;
    padding: 15px 30px;
    border-radius: 20px;
    display: block;
    margin: 20px auto;
    cursor: pointer;
`

const Home = ({ pokemons, cargarMasPokemon, loading, clickTipo}) =>{

    return(
        <main>
          {loading ? <Loader/> : <Pokemons pokemons={pokemons} />}
            {!clickTipo ?
            <div>
                <Button onClick={()=>
                {cargarMasPokemon()}}>Cargar Mas</Button>
            </div>
            : null}
      </main>
    )

}

export default Home