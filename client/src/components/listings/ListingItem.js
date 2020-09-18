import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { deleteListing } from "../../actions/listing";

const ListingItem = ({
  auth,
  deleteListing,
  listing: {
    description,
    _id,
    listingName,
    user,
    name,
    price,
    location,
    furnished,
  },
}) => (
  <Fragment>
    <div>
      <h2>this is the user: {user}</h2>
      <h2>this is auth.user._id: {auth.user._id}</h2>
      <h4>{listingName}</h4>
    </div>
    <div>
      <p>{description}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{location}</p>
      <p>{furnished}</p>
    </div>

    <Link to={`/listing/${_id}`}>Link to listing</Link>
    {!auth.loading && user === auth.user._id && (
      <button onClick={(e) => deleteListing(_id)}>delete listing</button>
    )}
  </Fragment>
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
