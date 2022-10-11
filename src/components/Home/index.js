import TotalRevenue from "../TotalRevenue";
import OrderReceived from "../OrderReceived";
import NewUser from "../NewUser";
import UniqueVisits from "../UniqueVisits";
import RevenueChangeGraph from "../RevenueChangeGraph";
import TotalRevenueGraph from "../TotalRevenueGraph";
import CompanySummary from "../CompanySummary";

import "./index.css";

const Home = () => (
  <div className="home-bg">
    <div className="total-cont">
      <TotalRevenue />
      <OrderReceived />
      <NewUser />
      <UniqueVisits />
    </div>
    <div className="graphs">
      <RevenueChangeGraph />
      <TotalRevenueGraph />
      <CompanySummary />
    </div>
  </div>
);

export default Home;
