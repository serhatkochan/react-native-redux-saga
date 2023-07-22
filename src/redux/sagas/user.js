import { call, put, takeLatest } from "redux-saga/effects";
import actions from "../actions";
import { GET_USER, GET_ALL_USERS } from "../constants/user";
import services from "../services";

const {
    user: {pending, setUser}
} = actions;
const {
    user: {getUserService}
} = services;

export default function* user() {
    yield takeLatest(GET_USER, fetchUserSaga);
    yield takeLatest(GET_ALL_USERS, fetchAllUsersSaga);
}

function* fetchUserSaga() {
    try {
        yield put(pending());
        const response = yield call(getUserService);
        yield put(setUser(response.data.results[0]));
    } catch (error) {
        console.error(error);
    }
}

function* fetchAllUsersSaga() {
    try {
        console.log('Hehe');
    } catch (error) {
        console.error(error);
    }
}