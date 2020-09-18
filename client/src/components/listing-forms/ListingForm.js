import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createListing, getCurrentListing } from "../../actions/listing";

const initialState = {
  listingName: "",
  description: "",
  price: "",
  location: "",
  furnished: "",
};

const ListingForm = ({
  listing: { listing, loading },
  createListing,
  getCurrentListing,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!listing) getCurrentListing();
    if (!loading && listing) {
      const listingData = { ...initialState };
      for (const key in listing) {
        if (key in listingData) listingData[key] = listing[key];
      }

      setFormData(listingData);
    }
  }, [loading, getCurrentListing, listing]);

  const { listingName, description, price, location, furnished } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createListing(formData, history, listing ? true : false);
  };

  return (
    <Fragment>
      <section className="forms">
        <h1 className="large"> Listing</h1>
        <p className="register">Edit your listing</p>
        <form action="" className="profile-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="listing name"
              name="listingName"
              value={listingName}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <textarea
              type="text"
              placeholder="Describe your place"
              name="description"
              value={description}
              onChange={onChange}
            />
            <small className="form-text">Tell us a little about yourself</small>
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Price"
              name="price"
              value={price}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Furnished"
              name="furnished"
              value={furnished}
              onChange={onChange}
            />
          </div>

          <input type="submit" className="btn" value="Submit" />
        </form>
      </section>
    </Fragment>
  );
};

ListingForm.propTypes = {
  createListing: PropTypes.func.isRequired,
  getCurrentListing: PropTypes.func.isRequired,
  listing: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  listing: state.listing,
});

export default connect(mapStateToProps, { createListing, getCurrentListing })(
  ListingForm
);
