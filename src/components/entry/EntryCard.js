import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const EntryCard = ({
  createdat, title, entry, id
}) => (
  <div id="output" className="card-header">
    <div className="card-header-date">
      <h5 id="display-date">
          Date:
        {createdat}
      </h5>
    </div>
    <div id="entries">
      <span id="display-entries">
        <Link to={`entry-detail/${id}`}>
          <h5>
            {title}
          </h5>
        </Link>
      </span>
      <p id="display-entries" className="ellipsis">
        {entry}
      </p>
    </div>
  </div>
);
EntryCard.propTypes = {
  id: PropTypes.number.isRequired,
  createdat: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  entry: PropTypes.string
};

EntryCard.defaultProps = {
  entry: '',
};

export default EntryCard;
