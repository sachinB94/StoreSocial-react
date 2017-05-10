import { createSelector } from 'reselect';
import findIndex from 'lodash.findindex';

export const contactSelector = ({ contact }) => contact;

export const selectedContactSelector = createSelector([contactSelector], ({
  list,
  selected
}) => {
  if (!selected) {
    return {};
  }

  const pos = findIndex(list, { _id: selected });
  if (pos === -1) {
    return {};
  }

  return list[pos];
});
