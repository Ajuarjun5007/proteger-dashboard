import "./Sidebar.css";
import dash from "../../assets/dashboard_asset/dashboard_icon.png"
import asset from "../../assets/dashboard_asset/Assets_icon.png"
import incident from "../../assets/dashboard_asset/incidents_icon.png"
import report from "../../assets/dashboard_asset/reports_icon.png"
import services from "../../assets/dashboard_asset/services_icon.png"
import requests from "../../assets/dashboard_asset/requests_icon.png"
import users from "../../assets/dashboard_asset/users_icon.png"
import down_arrow from "../../assets/header_asset/down_arrow_icon.png"
// import logout from "../assets/dashboard_asset/logout_icon.png"
export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo">Vajra</div>
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
        </aside>
    );
}
