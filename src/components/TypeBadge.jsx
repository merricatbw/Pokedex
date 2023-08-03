const TypeBadge = ({ type, color }) => { 
  const style = {
    "borderColor": "black",
    "backgroundColor": color,
    "filter": "brightness(110%)"
  }
  return (
    <div className="tag is-rounded" style={style}>{type}</div>
  )
}

export default TypeBadge
