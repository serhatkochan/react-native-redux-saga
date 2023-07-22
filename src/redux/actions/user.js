import {PENDING, SET_USER, GET_USER} from "../constants/user";

export const pending = () => ({
    type: PENDING,
})

export const getUser = () => ({
    type: GET_USER,
});

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});
