import {useEffect, useState} from 'react'

import pokemonService from "./services/pokemon"
import PokeCardList from './components/PokeCardList';

const App = () => {
  //will use for testing purposes
  const [pokemons, setPokemons] = useState([])

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

  //generate a list of pokemon names to be rendered
  useEffect(() => {
    const current = []
    pokemonService.getPokemons(20, 0)
      .then(data => {
        data.results.forEach(pokemon => {   
          pokemonService.getPokemon(pokemon.name)
            .then(res => {
              current.push(res)
            })
        })
      })
    console.log(current)
  }, [])

  return (
    <div className="container">
      <h1 className="is-size-1">Pokedex</h1>
      <div className="is-flex is-flex-wrap-wrap">
        <PokeCardList pokemons={pokemons} colorMap={colorMap} />
      </div>
    </div>
  )
}

export default App;
