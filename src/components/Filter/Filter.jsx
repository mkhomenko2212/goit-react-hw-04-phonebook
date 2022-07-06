import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChangeFilter }) => {
    return (
        
        <label> 
            <span >
                Find contacts by name
                </span>
           
            <input
                type="text"
                id="filter"
                value={value}
                onChange={onChangeFilter}
            />
           
        
  </label>  ); 
}

Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func,
}
