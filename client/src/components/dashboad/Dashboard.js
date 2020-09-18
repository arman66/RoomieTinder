import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getCurrentProfile } from "../../actions/profile";
import { getCurrentListing } from "../../actions/listing";

import DashboardActions from "./DashboardActions";

const Dashboard = ({
  auth: { user },
  getCurrentProfile,
  getCurrentListing,

  profile: { profile, loading },
  listing: { listing },
}) => {
  useEffect(() => {
    getCurrentProfile();
    getCurrentListing();
  }, [getCurrentProfile, getCurrentListing]);

  return (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>

      {profile !== null || loading ? (
        <Fragment>
          <DashboardActions />
        </Fragment>
      ) : (
        <Fragment>
          <p>You hace not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn-primary">
            Create Profile
          </Link>
        </Fragment>
      )}
      {listing !== null ? (
        <Fragment>
          <h3>Listing Name: {listing.listingName}</h3>
        </Fragment>
      ) : (
        <Fragment>
          <p>You hace not yet setup a listing, please add some info</p>
          <Link to="/create-listing" className="btn-primary">
            Create Listing
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  listing: PropTypes.object.isRequired,
  getCurrentListing: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  listing: state.listing,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  getCurrentListing,
})(Dashboard);
