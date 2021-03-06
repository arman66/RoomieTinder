import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn-primary">
        <i className="fas fa-user-circle text-primary" /> Edit Profile
      </Link>
      <Link to="/create-listing" className="btn-primary">
        <i className="fas fa-user-circle text-primary" /> Edit Listing
      </Link>
    </div>
  );
};

export default DashboardActions;
