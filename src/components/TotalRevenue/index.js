import { BsCurrencyDollar } from "react-icons/bs";

import "./index.css";

const TotalRevenue = () => (
  <div className="total-revenue-bg">
    <div>
      <h1 className="h-revenue">$ 27,639</h1>
      <p className="p-revenue">Total revenue</p>
    </div>
    <div className="dollar-icon-bg">
      <BsCurrencyDollar className="dollar-icon" />
    </div>
  </div>
);

export default TotalRevenue;
