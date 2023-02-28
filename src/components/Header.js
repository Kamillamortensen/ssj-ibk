import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    
    return <div>
        <ul>
            <li><Link to="/">LOGO</Link></li>
            <li><Link to="/about">Om klubben</Link></li>
            <li><Link to="/teams">Lag og treningstider</Link></li>
            <li><Link to="/memberships">Medlemskap og priser</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
        </ul>
        </div>;
  };
  
  export default Header;