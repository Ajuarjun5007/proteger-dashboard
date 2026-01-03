

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
import img1 from "../assets/dashboard_asset/image_1.png";
import img2 from "../assets/dashboard_asset/image_2.png";
import img3 from "../assets/dashboard_asset/image_3.png";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
export default function Reports() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const assetsData = [
    { name: "Working Assets", value: 150, fill: "#1E3A8A" },
    { name: "Not working Assets", value: 30, fill: "#C26785" },
    { name: "Discarded", value: 20, fill: "#56ABF8" },
  ];

  const chartsData = [
    { name: "Incidents", open: 35, closed: 20 },
    { name: "Work Order", open: 10, closed: 5 },
    { name: "Check outs", open: 22, closed: 12 },
  ];

  // Pie chart dimensions
  const pieConfig = isMobile 
    ? { cx: "50%", cy: "35%", innerRadius: 30, outerRadius: 55 }
    : { cx: "50%", cy: "50%", innerRadius: 45, outerRadius: 75 };

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
          <div className='institution-details' style={{backgroundColor:'#022A66',display:'flex', width:'30%',
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
          <div className='institution-details' style={{ width: '33%', backgroundColor: 'white', borderRadius: '8px', padding: '10px' }}>
            <ResponsiveContainer  width="100%" height={200}>
              <PieChart>
                <Pie
                  data={assetsData}
                  cx={pieConfig.cx}
                  cy={pieConfig.cy}
                  innerRadius={pieConfig.innerRadius}
                  outerRadius={pieConfig.outerRadius}
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
                <Legend align="right" verticalAlign="middle" layout="vertical" className="pie-legend"/>
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* bar chart container */}
          <div className='institution-details' style={{ width: '34%', backgroundColor: 'white', borderRadius: '8px'}}>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chartsData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }} barCategoryGap="30%">

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
                
                <Bar dataKey="open" fill="#1E3A8A" name="Open" stackId="stack" maxBarSize={20} />
                <Bar dataKey="closed" fill="#56ABF8" name="Closed" stackId="stack" maxBarSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* image container */}
        <div className="image-container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 20px', }}>
        <div className="image-1" style={{backgroundColor:'#FAA5B9',width:'30%',height:'100px' , borderRadius:'20px'}}>
          <img src={img1} alt="Report Visual 1" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius:'8px' }} />
        </div>
        <div className="image-2" style={{backgroundColor:'#FFDFC1',width:'34%',height:'100px' , borderRadius:'20px'}}>
          <img src={img2} alt="Report Visual 1" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius:'8px' }} />
        </div>
          <div className="image-2" style={{backgroundColor:'#BEB5FF',width:'34%',height:'100px' , borderRadius:'20px'}}>
          <img src={img3} alt="Report Visual 1" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius:'8px' }} />
        </div>
      </div>
      {/* data container-1 */}
      <div className="data-container-1" style={{display:'flex', justifyContent:'space-between', alignItems:'stretch', padding:'12px 20px', gap:'15px'}}>
        {/* data-1 Check outs */}
        <div style={{backgroundColor:'white', borderRadius:'8px',  width:'32%', minHeight:'200px', boxShadow:'0 1px 3px rgba(0,0,0,0.1)'}}>
          <div style={{backgroundColor:'#D4EBFF',width:'100%',padding:'7px',borderRadius:'8px 8px 0 0'}}>
          <h3 style={{margin:'0 0 15px 0', color:'#1B2535', fontWeight:'600', fontSize:'16px'}}>Check outs</h3>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px', padding:'0px 10px'}}>
            <span style={{color:'#666', fontSize:'14px'}}>Checked in</span>
            <span style={{color:'#1B2535', fontWeight:'600', fontSize:'14px'}}>0</span>
          </div>
          <div style={{display:'flex', justifyContent:'space-between',padding:'0px 10px'}}>
            <span style={{color:'#666', fontSize:'14px'}}>Checked Out</span>
            <span style={{color:'#1B2535', fontWeight:'600', fontSize:'14px'}}>25</span>
          </div>
        </div>
          {/* data-2 Incidents */}
        <div style={{backgroundColor:'white', borderRadius:'8px', padding:'10px', width:'32%', minHeight:'200px', boxShadow:'0 1px 3px rgba(0,0,0,0.1)'}}>
           <div style={{backgroundColor:'#D4EBFF',width:'100%',padding:'7px',borderRadius:'8px 8px 0 0'}}>
          <h3 style={{margin:'0 0 15px 0', color:'#1B2535', fontWeight:'600', fontSize:'16px'}}>Incidents</h3>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px', padding:'0px 10px' }}>
            <span style={{color:'#666', fontSize:'14px'}}>Incidents</span>
            <span style={{color:'#1B2535', fontWeight:'600', fontSize:'14px'}}>22 Reported</span>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px', padding:'0px 10px'}}>
            <span style={{color:'#666', fontSize:'14px'}}>Total Downtime</span>
            <span style={{color:'#1B2535', fontWeight:'600', fontSize:'14px'}}>12 mins 10 sec</span>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px', padding:'0px 10px'}}>
            <span style={{color:'#666', fontSize:'14px'}}>Closed</span>
            <span style={{color:'#1B2535', fontWeight:'600', fontSize:'14px'}}>19</span>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px', padding:'0px 10px'}}>
            <span style={{color:'#666', fontSize:'14px'}}>Open</span>
            <span style={{color:'#1B2535', fontWeight:'600', fontSize:'14px'}}>3</span>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', padding:'0px 10px', paddingBottom:'8px'}}>
            <span style={{color:'#666', fontSize:'14px'}}>Budget spent</span>
            <span style={{color:'#4CAF50', fontWeight:'600', fontSize:'14px'}}>₹ 3,00,000</span>
          </div>
        </div>
          {/* data-3 Work Order */}
        <div style={{backgroundColor:'white', borderRadius:'8px', width:'32%', minHeight:'200px', boxShadow:'0 1px 3px rgba(0,0,0,0.1)'}}>
          <div style={{backgroundColor:'#D4EBFF',width:'100%',padding:'7px',borderRadius:'8px 8px 0 0'}}>
          <h3 style={{margin:'0 0 15px 0', color:'#1B2535', fontWeight:'600', fontSize:'16px'}}>Work Order</h3>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px', padding:'0px 10px'}}>
            <span style={{color:'#666', fontSize:'14px'}}>Work order</span>
            <span style={{color:'#1B2535', fontWeight:'600', fontSize:'14px'}}>17 requested</span>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px', padding:'0px 10px'}}>
            <span style={{color:'#666', fontSize:'14px'}}>Closed</span>
            <span style={{color:'#1B2535', fontWeight:'600', fontSize:'14px'}}>14</span>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px', padding:'0px 10px'}}>
            <span style={{color:'#666', fontSize:'14px'}}>Open</span>
            <span style={{color:'#1B2535', fontWeight:'600', fontSize:'14px'}}>3</span>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', padding:'0px 10px', paddingBottom:'8px'}}>
            <span style={{color:'#666', fontSize:'14px'}}>Budget spent</span>
            <span style={{color:'#4CAF50', fontWeight:'600', fontSize:'14px'}}>₹ 3,00,000</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
