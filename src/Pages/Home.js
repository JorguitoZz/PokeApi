import styled from "styled-components"
import Pokemons from "../componentes/Pokemons"

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

const Home = ({ pokemons, cargarMasPokemon }) =>{

    return(
        <main>
            <Pokemons pokemons={pokemons} />
            <div>
                <Button onClick={()=>{cargarMasPokemon(
                    )}}>Cargar Mas</Button>
            </div>
      </main>
    )

}

export default Home