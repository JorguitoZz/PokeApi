
const Pokemons = ({ pokemons }) => {
    return(
        <div>
        {pokemons.map((pokemon, index) => (
            <div key={index}>
                <img src={pokemon.image} alt={pokemon.name} />
                <div>
                    <p>#{pokemon.number}</p>
                    <p>Exp: {pokemon.exp}</p>
                </div>
                <p>{pokemon.name}</p>
                <div>
                    {pokemon.types.map((e) => (
                        <p key={e.type.name}>{e.type.name}</p>
                    ))}
                </div>
            </div>
        ))}
    </div> 
    )
}

export default Pokemons