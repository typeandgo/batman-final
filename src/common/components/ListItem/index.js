import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListItem = ({ data }) => {
  return (
    <li className='list-group-item'>
      <Link to={ `/episode/${data.id}` }>
        { data.name }
      </Link>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  data: PropTypes.object.isRequired
};
