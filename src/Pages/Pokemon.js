import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <div>
    {pokemon && (
      <>
        <h3>{pokemon.name} N.º {pokemon.number}</h3>
        <div>
          <img src={pokemon.image} alt={pokemon.name} />
          <div>
            {pokemon.types.map((tipo, index) => (
                <p key={index}>{tipo.type.name}</p>
              ))}
            <p>Exp: {pokemon.exp}</p>
            <p>weight: {pokemon.weight}</p>
            {pokemon.abilities.map((abilite, index) => (
                <p key={index}>{abilite.ability.name}</p>
            ))}
            {pokemon.stats.map((stat, index) => (
                <p key={index}>{stat.stat.name}: {stat.base_stat}</p>
            ))}

          </div>
        </div>
         
      </>
    )}
    </div>
  );  
};

export default Pokemon;


