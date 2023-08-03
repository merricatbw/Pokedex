const TypeBadge = ({ type, color }) => { 
  const style = {
    "borderColor": "black",
    "backgroundColor": color,
    "filter": "brightness(110%)"
  }
  return (
    <div className="tag is-rounded m-1 has-text-light" style={style}>{type}</div>
  )
}

export default TypeBadge
