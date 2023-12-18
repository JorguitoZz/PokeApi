import { Link } from "react-router-dom";
import styled from "styled-components";
import GetColor from "../GetColor";

const Container = styled.div`
  margin: 40px auto 0px;
  width: 90%;
  display:flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  @media (min-width: 600px) {
    width: 98%
  }
  @media (min-width: 1000px) {
    gap:20px
  }
  
` 

const BoxPrincipal = styled.div`
  width:48%;
  @media (min-width: 600px) {
    width: 30%
  }
  @media (min-width: 900px) {
    width: 20%
  }
  @media (min-width: 1000px) {
    width: 14%
  }
`
const PokemonImg = styled.img`
  display:block;
  width:100%;
  background:#D9D9D9;
  border-radius: 10px
`
const BoxSecundario = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between; 
  margin: 10px 0px 15px;
`
const Name = styled.p`
  font-size: 30px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #000
`
const Type = styled.p`
  background-color: ${(props) => GetColor(props.name)};
  display: inline-block;
  padding: 5px 20px;
  border-radius: 20px
`
const BoxType = styled.div`
  display: flex;
  gap: 5px;
  color: #fff;
  margin: 15px 0 20px
`

const Pokemons = ({ pokemons, estatus }) => {
  return (
    <Container>
      {pokemons.map((pokemon, index) => (
        <BoxPrincipal key={index}>

          {pokemon && (

            <StyledLink to={`/pokemon/${pokemon.name}`}>
            
              {pokemon.image && <PokemonImg src={pokemon.image} alt={pokemon.name} />}
              
              <BoxSecundario>
                <p>#{pokemon.number}</p>
                <p>Exp: {pokemon.exp}</p>
              </BoxSecundario>
              
              <Name>{pokemon.name}</Name>
              
              <BoxType>
                {pokemon.types &&
                  pokemon.types.map((e) => (
                    <Type key={e.type.name} name={e.type.name}>{e.type.name}</Type>
                    
                  ))}

              </BoxType>
            </StyledLink>
          )}
        </BoxPrincipal>
      ))}
    </Container>
  );
};

export default Pokemons;