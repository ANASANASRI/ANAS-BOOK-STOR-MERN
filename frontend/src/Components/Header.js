import { Link } from "react-router-dom"
import header from "../assets/headerCss.css"
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function Header() {
        return <div>
                    <nav>
                    <ul>
                        <li><Link to={"/"}><img alt="logo" src={logo} className="logo"/></Link></li>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/books"}>Books</Link></li>
                        {/* <li><Link to={"/add"}>AddBooks</Link></li> */}
                        <li><Link to={"/login"}><FontAwesomeIcon icon={faUser} /></Link></li>
                    </ul>
                    </nav>
                </div>
}
export default Header