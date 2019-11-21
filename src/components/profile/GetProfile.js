import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import transformDate from '../../redux/utils/transformDate';
import
{ getProfileAction }
  from '../../redux/actions/profile/getProfileAction';
import { getEntriesCount } from '../../redux/actions/entry/getEntriesAction';

class GetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { getProfileAction: getProfileReq } = this.props;
    getProfileReq();
  }

  static getDerivedStateFromProps(props, state) {// eslint-disable-line
    return {
      username: props.profile.username,
      email: props.profile.email,
      firstName: props.profile.firstName,
      lastName: props.profile.lastName
    };
  }

  render() {
    const { profile, isLoading, getEntriesCount: getEntriesReq } = this.props;
    console.log('I got here');
    console.log(this.props);
    // const {
    //   username, firstName, lastName, email
    // } = this.props;
    if (isLoading) {
      return (
        <p className="loader" />
      );
    }
    const { day, month, year } = transformDate(profile.joinedSince);
    return (
      <div className="container-wrapper">
        <div className="container-profilee">
          <h3 className="profile-heading" style={{ display: 'inline' }}>
      Welcome
            <span id="username" />
!
          </h3>
          <br />
          <p>Write down your thoughts and feelings PRIVATELY</p>
          <br />
          <div className="total-entries">
            <strong>
              <Link to="entries.html" id="total-entries" />
            </strong>
            <span>
              {getEntriesReq()}
              {' '}
              Total Entries
            </span>
          </div>
          <div className="profile-div" />
          {/* Trigger/Open Reminder Modal */}
          <div>
            <button type="button" id="myReminderBtn">Set Reminder</button>
          </div>
        </div>
        <div className="container-profile">
          <h3 className="profile-heading">
      My Profile
          </h3>
          <table className="u-full-width">
            <thead>
              <tr>
                <th>Name</th>
                <th className="content">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr id="profile-username">
                <td>Username</td>
                <td>{profile.username}</td>
              </tr>
              <tr>
                <td>First Name</td>
                <td id="first-name" contentEditable="false">{profile.firstName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td id="last-name" contentEditable="false">{profile.lastName}</td>
              </tr>
              <tr id="user-email">
                <td>Email</td>
                <td>{profile.email}</td>
              </tr>
              <tr id="user-email">
                <td>Joined Since</td>
                <td>{`${day} ${month} ${year}`}</td>
              </tr>
            </tbody>
          </table>

          <div className="row">
            <button type="button" id="myProfileBtn" onClick="edit();">
        Edit
            </button>
            <button
              type="button"
              className="updateProfileBtn"
              id="myProfileBtn2"
              style={{ display: 'none' }}
              onClick="updateProfile();"
            >
        Update Profile
            </button>
          </div>
        </div>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="closee">×</div>
            <form id="reminderForm">
              <div className="container-note">
                <h2>Get Notified</h2>
                <p>
            Do not forget to pen down your precious thoughts and
            feeling. Subscribe and get a notification daily.
                </p>
              </div>
              <div className="container-note">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  required
                />
                <input
                  type="text"
                  id="notify-email"
                  placeholder="Email address"
                  name="mail"
                  required
                />
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  name="subscribe"
                />
            Daily Reminder
              </div>
              <div className="container-note">
                <button id="myReminderBtn" type="submit">
            Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
GetProfile.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  getProfileAction: PropTypes.func.isRequired,
  getEntriesCount: PropTypes.number.isRequired,
  // username: PropTypes.string,
  // email: PropTypes.string,
  // firstName: PropTypes.string,
  // lastName: PropTypes.string,
  profile: PropTypes.shape({}),
};

GetProfile.defaultProps = {
  profile: null,
  // username: null,
  // email: null,
  // firstName: null,
  // lastName: null
};

const mapStateToProps = state => ({
  profile: state.getProfileReducer.profile,
  isLoading: state.getProfileReducer.isLoading,
});

export default connect(mapStateToProps, {
  getProfileAction, getEntriesCount
})(GetProfile);
