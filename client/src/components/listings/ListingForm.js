import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addListing } from "../../actions/listing";

const initialState = {
  listingname: "",
  location: "",
  price: "",
  description: "",
};

const ListingForm = ({ addListing }) => {
  const [formData, setFormDate] = useState(initialState);

  return (
    <Fragment>
      <section className="forms">
        <h1 className="large"> Listing</h1>
        <p className="register">Edit your profile</p>
        <form action="" className="profile-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="description"
              name="description"
              value={description}
              //onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              //onChange={onChange}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              placeholder="A Short Bio of yourself"
              name="listingname"
              value={listingname}
              //onChange={onChange}
            />
            <small className="form-text">Tell us a little about yourself</small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={price}
              //onChange={onChange}
            />
          </div>

          <input type="submit" className="btn" value="Submit" />
        </form>
      </section>
    </Fragment>
  );
};

ListingForm.propTypes = {
  addListing: PropTypes.object.isRequired,
};

export default connect(null, { addListing })(ListingForm);
