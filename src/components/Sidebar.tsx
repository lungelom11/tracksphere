import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Link } from 'react-router-dom';

interface SidebarItem {
    name: string,
    icon?: React.ReactNode,
    link: string
}

const Sidebar = () => {
    const sidebarItems: SidebarItem[] = [
        { name: "Home", icon: <HomeIcon />, link: "/" },
        { name: "Finances", icon: <AttachMoneyIcon />, link: "/finances" },
        { name: "Fantasy", icon: <SportsSoccerIcon />, link: "/fantasy" },
        { name: "Betway", icon: <TrendingUpIcon />, link: "/betway" },
    ]
  return (
    <div className="side-nav">
      <ul className="menu-list">
        {sidebarItems.map((item) => (
          <Link to={item.link} key={item.name} className="list-item">
            <li>
              <span className="list-icon">{item.icon}</span>
              <span>{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar