import './header.css';

function Header() {

   return(
    <header>
        <div className="logoCont">
            <h1><a href="index.html">OnePage</a></h1>
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Team</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div>
            <button className="darkLight">Dark</button>
        </div>
    
    </header>
   ) 
}

export default Header