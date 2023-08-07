import PokeCard from "./PokeCard";

const PokeCardList = ({pokemons, colorMap}) => { 
  return (
    <>
      {pokemons.map(pokemon => {
        return(
          <div className="m-2">
            <PokeCard pokemon={pokemon} colors={pokemon.types.map(type => colorMap[type.type.name])} key={pokemon.id}/>
          </div>
        )
      })}
    </>
  )
}

export default PokeCardList
