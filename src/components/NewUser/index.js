import { RiUserFill } from "react-icons/ri";

import "./index.css";

const NewUser = () => (
  <div className="new-user-bg">
    <div>
      <h1 className="h-user">237</h1>
      <p className="p-user">New users</p>
    </div>
    <div className="user-icon-bg">
      <RiUserFill className="user-icon" />
    </div>
  </div>
);

export default NewUser;
