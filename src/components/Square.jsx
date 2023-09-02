

// eslint-disable-next-line react/prop-types
function Square({value,clickHandler}) {
  return (
    <div>
      <div className="square" onClick={clickHandler}>
        <h5>{value}</h5>
      </div>
    </div>
  )
}

export default Square
