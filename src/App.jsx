import PokeCard from "./components/PokeCard";
import pokemonService from "./services/pokemon"

const App = () => {
  return (
    <div className="container">
      <div className="columns is-mobile mx-2">
        <div className="column is-one-quarter-desktop is-half-mobile is-one-third-table">
          <PokeCard />
        </div>      
        <div className="column is-one-quarter-desktop is-half-mobile is-one-third-tablet">
          <PokeCard />
        </div>      
        <div className="column is-one-quarter-desktop is-half-mobile is-one-third-tablet">
          <PokeCard />
        </div>      
      </div>
    </div>
  )
}

export default App;
