import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import GetColor from "../GetColor";


const H3 = styled.h2`
  font-size: 40px;
  font-weight:400
`

const Contenedor = styled.div`
  margin-top:30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PokemonContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
  justify-content: center;
  margin: 20px;
  align-items: center;
  @media (min-width: 600px) {
    gap: 20px;
    
  }
  
`
const PokemonImg = styled.img`
  width:90%;
  object-fit: cover;
  background: #D9D9D9;
  border-radius: 10px;
  @media (min-width: 600px) {
    width: 45%
  }
`
const PokemonStat = styled.div`
  width:90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0 0 40px 0;
  @media (min-width: 600px) {
    width: 45% 
  }
`

const Type = styled.p`
  background-color: ${(props) => GetColor(props.name)};
  display: inline-block;
  padding: 5px 20px;
  border-radius: 20px;
  color:#fff;
  font-size: 30px;
`

const ContainerData = styled.div`
  background: #30A7D7;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  color: #fcfcfc;
`
const Parrafo = styled.div`
  font-size: 30px
`


const Pokemon = () => {
  const { name } = useParams();
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, setPokemon] = useState(null);

  const transformarDatos = (details) => {
    return {
      name: details.name,
      image: details.sprites?.front_default || 'URL_POR_DEFECTO', // Proporciona una URL por defecto si no hay imagen
      number: details.order,
      exp: details.base_experience,
      types: details.types,
      stats: details.stats,
      abilities: details.abilities,
      weight: details.weight,
    };
  };
  

  console.log(pokemon)

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        setPokemon(transformarDatos(data));

      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonData();
  }, [pokemonUrl]);

  console.log(pokemon);

  return (
    <Contenedor>
    {pokemon && (
      <>
        <H3>{pokemon.name} N.º {pokemon.number}</H3>
        <PokemonContainer>
          <PokemonImg src={pokemon.image} alt={pokemon.name} />
          <PokemonStat>
            <div>
            {pokemon.types.map((tipo, index) => (
                <Type key={index} name={tipo.type.name}>{tipo.type.name}</Type>
              ))}

            </div>
            <ContainerData>
              <Parrafo>Exp: {pokemon.exp}</Parrafo>
              <Parrafo>weight: {pokemon.weight}</Parrafo>
              {pokemon.abilities.map((abilite, index) => (
                  <Parrafo key={index}>Habilidad: {abilite.ability.name}</Parrafo>
              ))}
              {pokemon.stats.map((stat, index) => (
                  <Parrafo key={index}>{stat.stat.name}: {stat.base_stat}</Parrafo>
              ))}
            </ContainerData>
          </PokemonStat>
        </PokemonContainer>
         
      </>
    )}
    </Contenedor>
  );  
};

export default Pokemon;


