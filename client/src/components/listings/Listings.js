import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import ListingItem from "./ListingItem";
import { connect } from "react-redux";
import { getListings } from "../../actions/listing";

const Listings = ({ getListings, listing: { listings } }) => {
  useEffect(() => {
    getListings();
  }, [getListings]);
  return (
    <Fragment>
      <h1>Listing:</h1>

      <div>
        {listings.map((listing) => (
          <ListingItem key={listing._id} listing={listing} />
        ))}
      </div>
      {/* {ListingForm} */}
    </Fragment>
  );
};

Listings.propTypes = {
  getListings: PropTypes.func.isRequired,
  listing: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  listing: state.listing,
});

export default connect(mapStateToProps, { getListings })(Listings);
