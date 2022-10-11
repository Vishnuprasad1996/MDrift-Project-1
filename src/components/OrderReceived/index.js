import { RiListOrdered } from "react-icons/ri";

import "./index.css";

const OrderReceived = () => (
  <div className="order-received-bg">
    <div>
      <h1 className="h-order-received">87,123</h1>
      <p className="p-order-received">Order received</p>
    </div>
    <div className="order-received-icon-bg">
      <RiListOrdered className="order-received-icon" />
    </div>
  </div>
);

export default OrderReceived;
