

import back from "../assets/header_asset/header_back_icon.png";
import "./Report.css";
import bell from "../assets/header_asset/bell_icon.png";
import qrCode from "../assets/header_asset/qr_code_icon.png";
import down_arrow from "../assets/header_asset/black_down_arrow.png";
import logo from "../assets/header_asset/c_logo.png";
import clndr from "../assets/header_asset/clndr_icon.png";
import dwnld from "../assets/header_asset/download_icon.png";
import logo_icon from "../assets/header_asset/logo_icon.png";
import location_icon from "../assets/header_asset/location_icon.png";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
export default function Reports() {
  const assetsData = [
    { name: "Working Assets", value: 150, fill: "#3B82F6" },
    { name: "Not working Assets", value: 30, fill: "#EC4899" },
    { name: "Discarded", value: 20, fill: "#94A3B8" },
  ];

  const chartsData = [
    { name: "Incidents", open: 22, closed: 19 },
    { name: "Work Order", open: 17, closed: 14 },
    { name: "Check outs", open: 0, closed: 25 },
  ];

  return (
    <div className="report-container">
      {/* Header Section */}
      <div className="report-header">
        {/* back button */}
        <div className="breadcrumb">
        <div style={{backgroundColor:'white',borderRadius:'48%',padding:'14px',display:'flex',
          justifyContent:'center',alignItems:'center',marginRight:'10px'}}>
          <img src={back} alt="Back" style={{ height: "12px", cursor: "pointer"}} />
        </div>
          <span style={{color:'#1B2535',fontWeight:'bold',fontSize:'40px'}}>Reports</span>
          <span className="breadcrumb-separator" style={{color:'#4690FF',fontWeight:500,fontSize:'40px' , margin:'0 10px'}}>   /   </span>
          <span className="highlight" style={{color:'#4690FF',fontWeight:700,fontSize:'30px',marginTop:'8px'}}>Bio Medical</span>
        </div>
        {/* second coantainer */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'15px', paddingBottom:'4px'}}>
        {/* name container */}
        {/* <div> */}
          <div className="branch" style={{display:'flex', alignItems:'center', 
          padding:'4px',borderRadius:'22px', 
             backgroundColor:'white', marginRight:'10px'}}>
            <span style={{backgroundColor:'#1B2535',color:'white',padding:'4px',
              borderRadius:'18px'}}>NB</span>
            <span style={{ fontWeight:'500',padding:'0px 12px', fontSize:'16px', color:'#1B2535'}}>Non Bio Medical</span>
          </div>
        {/* </div> */}
        {/* location container */}
         <div>
          <div className="branch" style={{display:'flex', width:'180px', alignItems:'center',
            justifyContent:'space-between',  borderRadius:'20px', padding:'6px 12px', backgroundColor:'white', marginRight:'10px'}}>
            <span style={{marginLeft:'10px', fontWeight:'500', fontSize:'18px', color:'#1B2535'}}>Vijaya Nagar</span>
            <span><img src={down_arrow} alt="Down Arrow" style={{ height: "12px", cursor: "pointer" }}/></span>
          </div>
        </div>
        {/* icon container */}
        
          <span style={{display:'flex',alignItems:'center', justifyContent:'center', backgroundColor:'white',padding:'11px', borderRadius:'50%'}}><img src={bell} alt="Bell" style={{ height: "20px", cursor: "pointer" }} /></span>
          <span style={{display:'flex',alignItems:'center', justifyContent:'center', backgroundColor:'white',padding:'11px', borderRadius:'50%'}}><img src={qrCode} alt="QR Code" style={{ height: "20px", cursor: "pointer",}} /></span>
          <span style={{backgroundColor:'#1B2535',color:'white', borderRadius:'80%', width:'42px', height:'42px', display:'flex', justifyContent:'center', alignItems:'center'}}>A</span>
        
      </div>
</div>
      {/* Report Content Section */}
      <div className="report-content">
        {/* report content header */}
        <div className="report-content-header">
          <img src={logo} alt="Logo" style={{height:'100%'}}/>
          <span className="report-content-title">Monthly Report</span>
          <div style={{display:'flex', justifyContent:'space-between', gap:'8px'}}>
            <span style={{border:'1px solid #8c8B8B', borderRadius:'20px', padding:'4px 12px', gap:'12px', display:'flex', justifyContent:'space-between',alignItems:'center', color:'#000000',fontWeight:'600'}}>
              <img src={down_arrow} alt="Down Arrow" style={{ height: "12px", cursor: "pointer", transform: "rotate(90deg)" }}/>
              June 2025
              <img src={clndr} alt="Down Arrow" style={{ height: "18px", cursor: "pointer"}}/>
              <img src={down_arrow} alt="Down Arrow" style={{ height: "12px", cursor: "pointer", transform: "rotate(-90deg)" }}/>
            </span>
            <span style={{backgroundColor:'#4690FF', color:'white', borderRadius:'20px', padding:'4px 12px', display:'flex', alignItems:'center', gap:'10px'}}> Download PDF
              <img src={dwnld} alt="Down Arrow" style={{ height: "18px", cursor: "pointer"}}/>
            </span>
          </div>
        </div>
        {/* institution container */}
        <div className="institution-container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 20px', }}>
          {/* institution details */}
          <div style={{backgroundColor:'#022A66',display:'flex', width:'30%',
            flexDirection:'column', justifyContent:'center', alignItems:'flex-start',  padding:'8px 18px', height:'220px', borderRadius:'8px', color:'white', fontWeight:'600', fontSize:'18px'}}>
            <span style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px'}}>
              <img src={logo_icon} alt="Logo" style={{ height: "55px", cursor: "pointer"}}/>
              <p style={{color:'white',fontSize:'20px'}}>sri siddhartha institute of medical science</p>
            </span>
             <span style={{display:'flex',justifyContent:'center',alignItems:'center', gap:'20px',marginBottom:'10px'}}>
              <img src={location_icon} alt="Location" style={{ height: "55px", cursor: "pointer"}}/>
              <p style={{color:'white',fontSize:'20px'}}>Vijaya Nagar</p>
            </span>
          </div>
          {/* pie chart container */}
          <div style={{ width: '33%', backgroundColor: 'white', borderRadius: '8px', padding: '20px' }}>
            <ResponsiveContainer  width="100%" height={180}>
              <PieChart>
                <Pie
                  data={assetsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {assetsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
             <Tooltip 
  contentStyle={{ 
    backgroundColor: '#a5badcff', 
    fontColor:'white',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 12px'
  }}
/>
                <Legend align="right" verticalAlign="middle" layout="vertical" />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* bar chart container */}
          <div style={{ width: '34%', backgroundColor: 'white', borderRadius: '8px'}}>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chartsData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }} barCategoryGap="30%">
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" />
                <YAxis />
               <Tooltip 
  contentStyle={{ 
    backgroundColor: '#1B2535', 
    color: 'white', 
    border: 'none',
    borderRadius: '6px',
    padding: '8px 12px'
  }}
/>
                <Legend />
                <Bar dataKey="open" fill="#1E40AF" name="Open" stackId="stack" maxBarSize={20} />
                <Bar dataKey="closed" fill="#60A5FA" name="Closed" stackId="stack" maxBarSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
