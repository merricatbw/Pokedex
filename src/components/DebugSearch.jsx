const DebugSearch = ({handleSubmit, pokemon, handleInput}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input value={pokemon} name="pokeSearch" id="pokeSearch" type="text" onChange={handleInput}/>
        <button type="submit">Search</button>
      </div>
    </form>
  )
}

export default DebugSearch
