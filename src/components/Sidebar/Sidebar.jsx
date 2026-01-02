import "./Sidebar.css";
import dash from "../../assets/dashboard_asset/dashboard_icon.png"
import asset from "../../assets/dashboard_asset/Assets_icon.png"
import incident from "../../assets/dashboard_asset/incidents_icon.png"
import report from "../../assets/dashboard_asset/reports_icon.png"
import services from "../../assets/dashboard_asset/services_icon.png"
import requests from "../../assets/dashboard_asset/requests_icon.png"
import contact from "../../assets/dashboard_asset/requests_icon.png"
import users from "../../assets/dashboard_asset/users_icon.png"
import down_arrow from "../../assets/header_asset/down_arrow_icon.png"
import logo_icon from "../../assets/header_asset/c_dashboard.png"
import logout from "../../assets/dashboard_asset/logout_icon.png"
export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo" style={{width:'140px',paddingY:'10px', marginBottom:'20px'}}>
                <img style={{width: '100%', height: '50px', objectFit:'contain'}} src={logo_icon} alt="Proteger AI Logo" />
            </div>
            <nav>
                <ul>

                    <li


                        className="active">
                        <img className="sidebar-icon" src={dash} alt="Dashboard" />

                        Dashboard


                    </li>
                    <li><img className="sidebar-icon" src={asset} alt="Assets" /> Assets
                        <img className="down-arrow-icon" src={down_arrow} alt="Expand" style={{ marginLeft: '34px', background: '#0f1e36', height: '10px', width: '14px' }} />
                    </li>
                    <li><img className="sidebar-icon" src={incident} alt="Incidents" /> Incidents</li>
                    <li><img className="sidebar-icon" src={services} alt="Services" /> Services</li>
                    <li><img className="sidebar-icon" src={requests} alt="Requests" /> Requests</li>
                    <li><img className="sidebar-icon" src={users} alt="Users" /> Users
                     <img className="down-arrow-icon" src={down_arrow} alt="Expand" style={{ marginLeft: '36px', background: '#0f1e36', height: '10px', width: '14px' }} />
                    </li>
                    <li><img className="sidebar-icon" src={report} alt="Reports" /> Reports
                     <img className="down-arrow-icon" src={down_arrow} alt="Expand" style={{ marginLeft: '20px', background: '#0f1e36', height: '10px', width: '14px' }} />
                    </li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <ul>
                 <li style={{border:'1px solid white', borderRadius:'20px'}}><img className="sidebar-icon" src={contact} alt="Contact" /> Contact us
                    </li>
                    <li style={{border:'1px solid white', borderRadius:'20px'}}><img className="sidebar-icon" src={logout} alt="Logout" /> Log Out</li>
                    </ul>
            </div>
        </aside>
    );
}
