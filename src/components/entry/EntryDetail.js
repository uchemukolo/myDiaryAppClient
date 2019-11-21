import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import transformDate from '../../redux/utils/transformDate';
import
{ getEntryDetailAction }
  from '../../redux/actions/entry/getEntryDetailAction';
import { updateEntryAction } from '../../redux/actions/entry/updateEntryAction';


class EntryDetail extends Component {
  constructor() {
    super();
    this.titleRef = React.createRef();
    this.moodRef = React.createRef();
    this.entryRef = React.createRef();

    this.state = {
      editEntry: false
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { getEntryDetailAction: getEntryDetailRequest, match } = this.props;
    getEntryDetailRequest(match.params.id);
  }

  static getDerivedStateFromProps(props, state) {// eslint-disable-line
    return {
      title: props.entry.entry.title,
      entry: props.entry.entry.entry,
      mood: props.entry.entry.mood
    };
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onClickHandler = () => {
    this.setState({ editEntry: true });
  }

  onUpdateHandler = () => {
    const { updateEntryAction: updateEntryRequest, match } = this.props;
    const updateObject = {
      title: this.titleRef.current.textContent,
      mood: this.moodRef.current.textContent,
      entry: this.entryRef.current.textContent
    };
    updateEntryRequest(match.params.id, updateObject);
    this.setState({ editEntry: false });
  }


  render() {
    const { editEntry, title, mood } = this.state;
    const { entry: { entry }, isLoading } = this.props;
    if (isLoading) {
      return (
        <p className="loader" />
      );
    }
    const { day, month, year } = transformDate(entry.createdat);
    return entry && (
    <div className="container-entry-detail">
      <div className="row">
        <div
          className="col-75-detail"
          id="title-detail"
          ref={this.titleRef}
          name="title"
          value={title}
          onChange={this.onChange}
          contentEditable={editEntry}
        >
          <h4>{entry.title}</h4>
          <div>
          Mood:
            <span
              className="mood-span"
              ref={this.moodRef}
              name="mood"
              value={mood}
              onChange={this.onChange}
              contentEditable={editEntry}
            >
              {' '}
              {entry.mood}
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-75-detail"
          id="entry-detail"
          ref={this.entryRef}
          name="entry"
          value={entry}
          onChange={this.onChange}
          contentEditable={editEntry}
        >
          {entry.entry}
        </div>
      </div>
      <div className="dateRow">
        <strong><em>{`${day} ${month} ${year}`}</em></strong>
      </div>
      <div className="row">
        {!editEntry ? (
          <button
            className="myEditBtn"
            type="button"
            id="edit"
            onClick={this.onClickHandler}
          >
                Edit
          </button>
        ) : (
          <span className="or">
            <button
              className="myModifyBtn"
              type="button"
              id="modify"
              onClick={this.onUpdateHandler}
              contentEditable={editEntry}
            >
                  Update Entry
            </button>
          </span>
        )}
      </div>
    </div>
    );
  }
}
EntryDetail.propTypes = {
  getEntryDetailAction: PropTypes.func.isRequired,
  updateEntryAction: PropTypes.func.isRequired,
  entry: PropTypes.shape({}),
  match: PropTypes.shape(),
  isLoading: PropTypes.bool.isRequired
};

EntryDetail.defaultProps = {
  entry: null,
  match: null
};

const mapStateToProps = state => ({
  entry: state.getEntryDetailReducer.entry,
  isLoading: state.getEntryDetailReducer.isLoading,
});

export default connect(mapStateToProps, {
  updateEntryAction, getEntryDetailAction
})(EntryDetail);
