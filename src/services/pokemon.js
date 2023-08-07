import axios from 'axios'
const baseUrl = "https://pokeapi.co/api/v2/"

const getPokemon = (id) => {
    //get specific pokemon data my id or name
    const request = axios.get(`${baseUrl}pokemon/${id}`)
    return request.then(res => res.data)
}

const getPokemons = (limit, offset) => {
  const request = axios.get(`${baseUrl}pokemon/`, {params: {offset: offset, limit: limit}})
  return request.then(res => res.data)
}


export default {getPokemon, getPokemons}
