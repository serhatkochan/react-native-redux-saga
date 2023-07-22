import { all, fork } from 'redux-saga/effects';

import watchUser from "./user";

export default function* RootSaga() {
    yield all([
        fork(watchUser)
    ]);
}