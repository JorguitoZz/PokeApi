import { Link } from "react-router-dom";

const Pokemons = ({ pokemons, estatus }) => {
  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <div key={index}>

          {pokemon && (

            <Link to={`/pokemon/${pokemon.name}`}>
            
              {pokemon.image && <img src={pokemon.image} alt={pokemon.name} />}
              
              <div>
                <p>#{pokemon.number}</p>
                <p>Exp: {pokemon.exp}</p>
              </div>
              
              <p>{pokemon.name}</p>
              
              <div>
                {pokemon.types &&
                  pokemon.types.map((e) => (
                    <p key={e.type.name}>{e.type.name}</p>
                  ))}

              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pokemons;