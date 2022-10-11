import { BsCurrencyDollar } from "react-icons/bs";

import "./index.css";

const TotalRevenueGraph = () => (
  <div className="total-revenue-graph-bg">
    <div className="total-revenue-graph-icon-cont">
      <div className="container-revenue-graph">
        <h1 className="h-total-revenue-graph">$ 27,639</h1>
        <p className="p-total-revenue-graph">Total revenue</p>
      </div>
      <div className="icon-dollar-cont">
        <BsCurrencyDollar className="dollar-icon-graph" />
      </div>
    </div>
  </div>
);

export default TotalRevenueGraph;
