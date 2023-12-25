import Pokemons from "../componentes/Pokemons";
import Loader from "../componentes/Loader"; 
import styled from "styled-components";


const ContainerDiv = styled.div`
    margin: 50px 0 100px;
`
const StyleButton = styled.button`
    font-size: 20px;
    padding: 15px 50px;
    display: block;
    margin: 0 auto;
    background: #000000;
    border: none;
    color: #fff;
    border-radius: 20px;
    font-size: 25px
`

const Home = ({ pokemons, cargarMasPokemon, isLoading }) => {
    return (
      <main>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Pokemons pokemons={pokemons} />
            {
             pokemons ? 
             <ContainerDiv>
                <StyleButton onClick={cargarMasPokemon}>Cargar más</StyleButton>
            </ContainerDiv> :
            null
            }
          </>
        )}
      </main>
    );
  };

export default Home;
