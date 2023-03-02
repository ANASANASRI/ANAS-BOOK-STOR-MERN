import { useState } from "react" 
import { Link } from "react-router-dom"
import "../assets/hommeCss.css"

function Home() {
    return(
        <div className="bodyy">
            <br/>
            <h1 className="h11">GO SEE THE BOOKS</h1>
            <Link to={"/books"}><div class="arrow"></div></Link>
        </div>
    );
}

export default Home
