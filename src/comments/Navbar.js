import {Link} from "react-router-dom";
import "../style/NavBar.css";

export default function NavFun(){
    return(
        <nav class="nav">
            <h1>Movies</h1>
            <Link to="/">Home</Link>
            <Link to="/favourite">Favourites</Link>
        </nav>
    )
}
