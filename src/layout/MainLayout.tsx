import Sidebar from "../components/Sidebar"
import Topnav from "../components/Topnav"
import {Outlet} from "react-router-dom"

const MainLayout = () => {
  return (
    <>
      <div className="app-container">
        <Topnav />
        <div className="main-content">
          <div className="side-nav">
            <Sidebar />
          </div>
          <div className="content-area">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout