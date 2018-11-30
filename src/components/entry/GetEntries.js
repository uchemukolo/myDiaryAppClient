import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEntries } from '../../redux/actions/entry/getEntriesAction';
import EntryCard from './EntryCard';

class GetEntries extends Component {
  componentDidMount() {
    const { getEntries: getEntriesRequest } = this.props;
    getEntriesRequest();
  }

  render() {
    const { entry: fetchedEntry, isLoading } = this.props;
    console.log(isLoading);
    return (
      <div>
        <div id="output" className="container-entries">
          {!fetchedEntry.entry
            ? <p className="red-text">No Entries Yet, click on Add New Entry to add your First Entry</p>
            : fetchedEntry.entry && fetchedEntry.entry.map(data => (
              <EntryCard key={data.id} {...data} />
            ))}
        </div>
      </div>
    );
  }
}

GetEntries.propTypes = {
  entry: PropTypes.shape.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  entry: state.getEntriesReducer.entry,
  isLoading: state.getEntriesReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getEntries: () => (dispatch(getEntries()))
});

export default connect(mapStateToProps, mapDispatchToProps)(GetEntries);
