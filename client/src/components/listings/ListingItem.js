import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { deleteListing } from "../../actions/listing";

const ListingItem = ({
  listing: {
    _id,
    description,
    listingname,
    user,
    name,
    price,
    location,
    furnished,
  },
  auth,
  deleteListing,
}) => (
  <div>
    <div>
      <h2>this is the user: {user}</h2>
      <h2>this is auth.user._id: {auth.user._id}</h2>
      <h4>{listingname}</h4>
    </div>
    <div>
      <p>{description}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{location}</p>
      <p>{furnished}</p>
    </div>

    {!auth.loading && user === auth.user._id && (
      <button onClick={(e) => deleteListing(_id)}>delete listing</button>
    )}
  </div>
);

ListingItem.propTypes = {
  listing: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteListing: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteListing })(ListingItem);
