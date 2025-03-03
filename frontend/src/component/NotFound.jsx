import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="error404">
            <img src="https://www.hoyeseldia.es/wp-content/uploads/2024/05/error404-1115x664.jpg" style={{ maxWidth: "40%",margin: "0 auto"  }} alt="error" />
        <Link to="/" className="btn btn-primary">Ir al Home</Link>
    </div>
  )
}

export default NotFound