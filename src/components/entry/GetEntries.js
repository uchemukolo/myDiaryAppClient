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
    const { entry: { entry }, isLoading } = this.props;

    const noEntries = (
      <div style={{ textAlign: 'center', padding: '5%' }}>
        <h5>No Entries Yet, click on Add New Entry to add your First Entry</h5>
      </div>
    );

    if (isLoading) {
      return (
        <p className="loader" />
      );
    }

    if (!isLoading && (!entry || !entry.length)) {
      return noEntries;
    }

    return (
      <div>
        <div id="output" className="container-entries">
          {entry.map(data => (
            <EntryCard key={data.id} {...data} />
          ))}
        </div>
      </div>
    );
  }
}

GetEntries.propTypes = {
  entry: PropTypes.shape({}),
  isLoading: PropTypes.bool.isRequired
};

GetEntries.defaultProps = {
  entry: null,
};

const mapStateToProps = state => ({
  entry: state.getEntriesReducer.entry,
  isLoading: state.getEntriesReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getEntries: () => (dispatch(getEntries()))
});

export default connect(mapStateToProps, mapDispatchToProps)(GetEntries);
