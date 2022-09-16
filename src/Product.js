
const Product = ({item}) => {
  return (
    <div className="card">
            <img src= {item.thumbnail} alt="" />
            <h2> {item.title} </h2>
            <p> Price : <b> {item.price}$ </b> </p>
            <p> Rating : <b> {item.rating} / 5 </b> </p>
        </div>
  )
}

export default Product