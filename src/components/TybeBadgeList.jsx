import TypeBadge from "./TypeBadge"

const TypeBadgeList = ({types}) => {
  return (
    <div className="column">
      {types.map((type, index) => {
        return <TypeBadge key={index} type={type.type} color={type.color} />
      })}
    </div>
  )
}

export default TypeBadgeList
