import React from 'react';
import { FilterLabel, FilterInput } from './filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filtersSlice';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name:
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
}
