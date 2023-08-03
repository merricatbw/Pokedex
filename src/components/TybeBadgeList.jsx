import TypeBadge from "./TypeBadge"

const TypeBadgeList = ({types}) => {
  console.log(types)
  return (
    <div>
      {types.map((type, index) => {
        console.log(type.key)
        return <TypeBadge key={index} type={type.type} color={type.color} />
      })}
    </div>
  )
}

export default TypeBadgeList
