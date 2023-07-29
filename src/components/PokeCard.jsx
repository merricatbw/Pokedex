const PokeCard = ({ pokemon, colors }) => {

  //Gives gradient if there are more than two types and a solid color for just one. 
  const backgroundColor = colors.length === 1 
    ? {"backgroundColor": colors[0]}
    : {
      "backgroundColor": colors[0],
      "background": `linear-gradient(45deg, ${colors[0]} 0%, ${colors[1]} 100%)`
    }
  return (
    <div className="box" style={backgroundColor}>
      <div className="columns">
        <div className="column is-half">
          <h2>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
        </div>
        <div> 

        </div>
      </div>
    </div>
  );
};

export default PokeCard;
