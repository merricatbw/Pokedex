import TypeBadgeList from "./TybeBadgeList";
import PokePic from "./PokePic";

import { useEffect, useState } from "react";

const PokeCard = ({ pokemon, colors }) => {
  const [types, setTypes] = useState([])

  //Gives gradient if there are more than two types and a solid color for just one. 
  const backgroundColor = colors.length === 1 
    ? {
      "backgroundColor": colors[0],
      
    }
    : {
      "backgroundColor": colors[0],
      "background": `linear-gradient(45deg, ${colors[0]} 0%, ${colors[1]} 100%)`
    }
  useEffect(() => {
    const typeKV = []
    pokemon.types.forEach((type, index) => {
      const obj = {type: "", color: ""}
      obj.type = type.type.name
      obj.color = colors[index]
      typeKV.push(obj)
    })
    setTypes(typeKV)
  }, [])

  return (
    <div className="box" style={backgroundColor}>
      <div className="columns">
        <div className="column is-half">
          <h2 className="is-size-5 is-capitalized has-text-weight-semibold has-text-light">
            {pokemon.name}
          </h2>
          <TypeBadgeList types={types} />
        </div>
        <div>
          <PokePic url={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
        </div>
      </div>
    </div>
  ); 
};

export default PokeCard;
