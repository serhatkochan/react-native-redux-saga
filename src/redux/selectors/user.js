import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserFirstName = createSelector(
    [selectUser],
    user => user.data.name?.first
);

export const selectUserLoading = createSelector(
    [selectUser],
    user => user.loading
);
