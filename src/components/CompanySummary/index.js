import { MdComputer } from "react-icons/md";

import "./index.css";

const CompanySummary = () => (
  <div className="company-summary-bg">
    <div className="company-summary-content">
      <div className="heading-container">
        <MdComputer className="icon-pc" />
        <p className="p-company-summary">Company summary</p>
      </div>
      <ul className="list-cont">
        <li className="card-cont">
          <p className="card-title">Monthly income</p>
          <div className="card-details-cont">
            <div className="details-cont">
              <p className="details-title">Total</p>
              <p className="details-value">$65,880</p>
            </div>
            <div className="details-cont">
              <p className="details-title">Change</p>
              <p className="details-value">+15%</p>
            </div>
            <div className="details-cont">
              <p className="details-title">Sales</p>
              <p className="details-value">554</p>
            </div>
          </div>
        </li>
        <li className="card-cont">
          <p className="card-title">Employee amount</p>
          <div className="card-details-cont">
            <div className="details-cont">
              <p className="details-title">Total</p>
              <p className="details-value">1250</p>
            </div>
            <div className="details-cont">
              <p className="details-title">Change</p>
              <p className="details-value">-2%</p>
            </div>
            <div className="details-cont">
              <p className="details-title">Active</p>
              <p className="details-value">1120</p>
            </div>
          </div>
        </li>
        <li className="card-cont">
          <p className="card-title">Product sales</p>
          <div className="card-details-cont">
            <div className="details-cont">
              <p className="details-title">Total</p>
              <p className="details-value">2350</p>
            </div>
            <div className="details-cont">
              <p className="details-title">Change</p>
              <p className="details-value">+10%</p>
            </div>
            <div className="details-cont">
              <p className="details-title">Last report</p>
              <p className="details-value">2220</p>
            </div>
          </div>
        </li>
        <li className="card-cont">
          <p className="card-title">Monthly profit</p>
          <div className="card-details-cont">
            <div className="details-cont">
              <p className="details-title">Total</p>
              <p className="details-value">$502,100</p>
            </div>
            <div className="details-cont">
              <p className="details-title">Change</p>
              <p className="details-value">+15%</p>
            </div>
            <div className="details-cont">
              <p className="details-title">Last month</p>
              <p className="details-value">$453,000</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <button className="button" type="button">
      View all packages
    </button>
  </div>
);

export default CompanySummary;
