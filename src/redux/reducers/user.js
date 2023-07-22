import {PENDING, SET_USER} from "../constants/user";

const initialState = {
    loading: true,
    data: {},
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case PENDING:
            return {
                ...state,
                loading: true,
            }
        case SET_USER:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default user;
