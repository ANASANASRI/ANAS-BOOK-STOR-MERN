import { Link } from "react-router-dom"
import header from "../assets/headerCss.css"
import logo from "../assets/logo.png"



function Header() {
        return <div>
                    <nav>
                    <ul>
                        <Link to={"/"}><img alt="logo" src={logo} className="logo"/></Link>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/books"}>Books</Link></li>
                        {/* <li><Link to={"/add"}>AddBooks</Link></li> */}
                    </ul>
                    </nav>
                </div>
}
export default Header