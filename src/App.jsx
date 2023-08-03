import {useEffect, useState} from 'react'
import PokeCard from "./components/PokeCard";
import pokemonService from "./services/pokemon"

const App = () => {
  //will use for testing purposes
  const [testPokemon, setTestPokemon] = useState(null)

  const colorMap = {
    "normal": "#A8A879",
    "fire": "#F08030",
    "fighting": "#C03028",
    "water": "#6790F0",
    "flying": "#A890EF",
    "grass": "#77C84F",
    "poison": "#A140A1",
    "electric": "#F8D130",
    "ground": "#E0C067",
    "psychic": "#F75888",
    "rock": "#B8A039",
    "ice": "#98D9D8",
    "bug": "#A8B920",
    "dragon": "#7038F7",
    "ghost": "#705898",
    "dark": "#705848",
    "steel": "#B8B8D0",
    "fairy": "#EE99AC",
    "???": "#67A090"
  }

  //useEffect on page load to fetch gengar and set test pokemon to data
  useEffect(() => {
    pokemonService.getPokemon(6)
    .then(res => setTestPokemon(res))
  }, [])

  return (
    <div className="container">
      <h1 className="is-size-1">Pokedex</h1>
      <div className="columns is-mobile mx-2">
        <div className="column is-one-quarter-desktop is-half-mobile is-one-third-table">
          {testPokemon !== null  
            ? <PokeCard pokemon={testPokemon} colors={testPokemon.types.map(type => colorMap[type.type.name])}/>
            : <div></div>
          }
        </div>      
      </div>
    </div>
  )
}

export default App;
