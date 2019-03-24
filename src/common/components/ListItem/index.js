import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListItem = ({ data, linkPrefix }) => {
  return (
    <li className='list-group-item'>
      <Link to={ `/${ linkPrefix }/${ data.id }` }>

        { data.name }

      </Link>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  data: PropTypes.object.isRequired,
  linkPrefix: PropTypes.string.isRequired
};
