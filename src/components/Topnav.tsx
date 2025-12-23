import Logo from "../assets/logo-2.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';


const Topnav = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="menu-bar">
          <span className="menu-icon"><MenuIcon /></span>
        </div>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="profile">
          <span className="initials">LM</span>
          <span className="carriat">
            <KeyboardArrowDownIcon />
          </span>
        </div>
      </nav>
      <div className="divider">
        <Divider />
      </div>
      
    </>
 
  )
}

export default Topnav