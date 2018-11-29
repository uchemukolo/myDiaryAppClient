import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEntryAction } from '../../redux/actions/entry/addEntryAction';


import validateInput from './validations';

class AddEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      mood: '',
      entry: '',
      errors: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value, errors: {} });
  }


  onSubmit(event) {
    event.preventDefault();
    const { addEntryRequest } = this.props;
    const { errors } = validateInput(this.state);
    const {
      title, mood, entry
    } = this.state;

    if (
      errors.title
      || errors.mood
      || errors.entry) {
      this.setState(() => ({
        errors
      }));
    } else {
      addEntryRequest({
        title,
        mood,
        entry
      });
      this.setState(() => ({
        errors: {},
      }));
    }
  }

  render() {
    const {
      title, mood, entry, redirect, errors
    } = this.state;

    if (redirect) {
      return <Redirect to="/entry-detail" />;
    }
    return (
      <div className="container-entry">
        <div className="new_entry">
          <h2>New Diary Entry</h2>
        </div>
        <form id="entry-form" className="position" onSubmit={this.onSubmit}>
          {errors.title
            && (
            <p id="signup-error" className="red-text">
              { errors.title }
            </p>
            )}
          <input
            value={title}
            onChange={this.onChange}
            type="text"
            id="title"
            name="title"
            placeholder="Enter title here.."
          />
          {errors.mood
            && (
            <p id="signup-error" className="red-text">
              { errors.mood }
            </p>
            )}
          <input
            value={mood}
            onChange={this.onChange}
            type="text"
            id="mood"
            name="mood"
            placeholder="Enter your mood here e.g happy, sad, tired..."
          />
          {errors.mood
            && (
            <p id="signup-error" className="red-text">
              { errors.mood }
            </p>
            )}
          <textarea
            value={entry}
            onChange={this.onChange}
            id="entry"
            name="entry"
            placeholder="Write something.."
            style={{ height: 200 }}
            defaultValue=""
          />
          <p id="entry-error" className="red-text" />
          <input type="submit" id="entryFormBtn" defaultValue="Save" />
        </form>
      </div>
    );
  }
}
AddEntryForm.propTypes = {
  addEntryRequest: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  error: state.auth.error,
  redirect: state.auth.redirect
});

const mapDispatchToProps = dispatch => ({
  addEntryRequest: newEntry => dispatch(addEntryAction(newEntry))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEntryForm);
