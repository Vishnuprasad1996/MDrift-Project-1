import { HiLink } from "react-icons/hi";

import "./index.css";

const UniqueVisits = () => (
  <div className="unique-visits-bg">
    <div>
      <h1 className="h-unique-visits">5,726</h1>
      <p className="p-unique-visits">Unique visits</p>
    </div>
    <div className="link-icon-bg">
      <HiLink className="link-icon" />
    </div>
  </div>
);

export default UniqueVisits;
