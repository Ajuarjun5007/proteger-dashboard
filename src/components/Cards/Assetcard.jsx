import { FiArrowRight } from "react-icons/fi";
import "./Assetcard.css"; // optional (or reuse Report.css)

export default function AssetCard({ asset, onClick }) {
  return (
    <div className="card-item asset-card" style={{background:'white',minHeight:'130px'}}>
      {/* Arrow Icon */}
      <div style={{position:'absolute',top:-10,right:-10}}>
<button className="arrow-btn" onClick={() => onClick?.(asset)}>
        <FiArrowRight size={14} />
      </button>

      </div>
      <div style={{position:'absolute',width:'89%',height:'90%',top:"13px",paddingRight:'20px'}}>

      <p className="row" >
        <span className="label">Asset name :</span>
        <span className="value">{asset.name}</span>
      </p>

      <p className="row">
        <span className="label">Asset code :</span>
        <span className="value">{asset.code}</span>
      </p>

      <p className="row">
        <span className="label">Start Date :</span>
        <span className="value">{asset.startDate}</span>
      </p>

      <p className="row">
        <span className="label">Clear Date :</span>
        <span className="value">{asset.clearDate}</span>
      </p>
      </div>

    </div>
  );
}
