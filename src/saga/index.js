import { all, fork } from "redux-saga/effects";
import { memorySaga } from "./memory";

export const serverURL = "https://api.dahaengback.shop";

export default function* rootSaga() {
    //all: 여러 사가를 합쳐줌
    yield all([fork(memorySaga)]);
}
