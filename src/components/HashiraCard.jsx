import { Link } from "react-router-dom"
function HashiraCard({ id, name, age, race, imageUrl }) {
  return (
    <Link to={`/hashiras/${id}`} className="card-link">
      <div className="card">
        <img src={imageUrl} alt={name} />

        <h2>#{id} {name} {age} {race}</h2>

      </div>
    </Link>
    
  )
}

export default HashiraCard