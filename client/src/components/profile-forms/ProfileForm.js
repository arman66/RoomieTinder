import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const initialState = {
  sex: "",
  bio: "",
  age: "",
  job: "",
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.listing) {
        if (key in profileData) profileData[key] = profile.listing[key];
      }
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(", ");

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { sex, bio, age, job } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <div>
      <Fragment>
        <section className="forms">
          <h1 className="large"> Profile</h1>
          <p className="register">Edit your profile</p>
          <form action="" className="profile-form" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Sex"
                name="sex"
                value={sex}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <textarea
                type="text"
                placeholder="A Short Bio of yourself"
                name="bio"
                value={bio}
                onChange={onChange}
              />
              <small className="form-text">
                Tell us a little about yourself
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Age"
                name="age"
                value={age}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="job or occupation"
                name="job"
                value={job}
                onChange={onChange}
              />
            </div>

            <input type="submit" className="btn" value="Submit" />
          </form>
        </section>
      </Fragment>
    </div>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  createProfile,
  getCurrentProfile,
})(ProfileForm);
