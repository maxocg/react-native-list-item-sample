import {fork} from 'redux-saga/effects'

import frontendSaga from './frontendSaga';
export default function* root() {
    try {
        console.log("iniciou sagas");
        yield fork(frontendSaga);    
    } catch (e) {
        console.error(e)
    }
}
