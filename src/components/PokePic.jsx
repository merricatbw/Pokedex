const PokePic = ({url, alt}) => {
  return (
    <figure className="image is-128x128">
      <img src={url} alt={alt} />
    </figure>
  )
}

export default PokePic
