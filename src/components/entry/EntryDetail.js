import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEntryDetailAction } from '../../redux/actions/entry/getEntryDetailAction';


class EntryDetail extends Component {
  state = {
    editEntry: false
  };

  componentDidMount() {
    const { getEntryDetailAction: getEntryDetailRequest } = this.props;
    getEntryDetailRequest();
  }

  // if (modifyBtn.style.display === 'none') {
  //   modifyBtn.style.display = 'block';
  // } else {
  //   modifyBtn.style.display === 'none';
  // }


  onClickHandler = () => {
    this.setState({ editEntry: true }, () => console.log(this.state, '>>>>>>>>>>>>>'));
  }

  render() {
    const { editEntry } = this.state;
    const { entry: { entry }, isLoading } = this.props;
    if (isLoading) {
      return (
        <p className="loader" />
      );
    }
    return (
      entry && (
      <div className="container-entry-detail">
        <div className="row">
          <div className="col-75-detail" id="title-detail" contentEditable={editEntry}>
            <h4>{entry.title}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-75-detail" id="entry-detail" contentEditable={editEntry}>
            {entry.entry}
          </div>
        </div>
        <div className="row">
          <div className="col-25=detail" contentEditable={editEntry}>
              Mood:
            { entry.mood}
          </div>
          <br />
          <div>
            <strong>
              {entry.createdat}
            </strong>
          </div>
        </div>
        <div className="row">
          <button className="myEditBtn" type="button" id="edit" onClick={this.onClickHandler}>Edit</button>
          {/* <span className="or"><button className="myModifyBtn" type="button" id="modify" style="display:none;" onClick={this.onClick}>Update Entry</button></span> */}
        </div>
      </div>
      )
    );
  }
}
EntryDetail.propTypes = {
  getEntryDetailAction: PropTypes.shape.isRequired,
  entry: PropTypes.shape.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  entry: state.getEntryDetailReducer.entry,
  isLoading: state.getEntryDetailReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getEntryDetailAction: () => (dispatch(getEntryDetailAction()))
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryDetail);
