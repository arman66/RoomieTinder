import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListingItem from "../listings/ListingItem";

import { getListing } from "../../actions/listing";

const Listing = ({ getListing, listing: { listing, loading }, match }) => {
  useEffect(() => {
    getListing(match.params.id);
  }, [getListing, match.params.id]);

  return loading || listing === null ? (
    <h1>not loaded yet</h1>
  ) : (
    <Fragment>
      <Link to="/listings" className="btn">
        Back To Listings
      </Link>

      <ListingItem listing={listing} />
    </Fragment>
  );
};

Listing.propTypes = {
  getListing: PropTypes.func.isRequired,
  listing: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  listing: state.listing,
});
export default connect(mapStateToProps, { getListing })(Listing);
