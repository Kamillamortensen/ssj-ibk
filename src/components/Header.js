import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../assets/logo-transparent.png';
import './Header.css';

const Header = () => {
    
    return <div>
        <AppBar component="nav" position="sticky">
            <Toolbar className="toolbar">
                <img src={logo} alt="Logo sandnessjøen innebandyklubb"/>
                <ul>
                    <li><Link to="/about">Om klubben</Link></li>
                    <li><Link to="/teams">Lag og treningstider</Link></li>
                    <li><Link to="/memberships">Medlemskap og priser</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                </ul>
            </Toolbar>
      </AppBar>
        </div>;
  };
  
  export default Header;