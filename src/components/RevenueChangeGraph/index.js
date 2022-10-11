import { CgOptions } from "react-icons/cg";
import { FaExchangeAlt } from "react-icons/fa";

import "./index.css";

const RevenueChangeGraph = () => (
  <div className="revenue-change-graph-bg">
    <div className="revenue-button-cont">
      <div className="container">
        <FaExchangeAlt className="change-icon" />
        <h1 className="h-revenue-change">Revenue change</h1>
      </div>
      <button className="btn-options">
        <CgOptions className="option-icon" />
      </button>
    </div>
  </div>
);

export default RevenueChangeGraph;
