import { Link } from "react-router-dom"
import header from "../assets/headerCss.css"

function Header() {
        return <div>
                    <nav>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/books"}>Books</Link></li>
                        <li><Link to={"/add"}>AddBooks</Link></li>
                        <li><Link to={"/"}>About</Link></li>
                    </ul>
                    </nav>
                </div>
}
export default Header