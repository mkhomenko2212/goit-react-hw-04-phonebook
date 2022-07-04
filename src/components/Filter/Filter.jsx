import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
    return (
        <div>
        <label> 
            <span >
                Find contacts by name
                </span>
            </label>
            <input
                value={filter}
                onChange={onChangeFilter}
            />
           
        </div>
    );
}

Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func,
}
