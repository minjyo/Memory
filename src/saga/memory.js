import { call, put, takeLatest } from "redux-saga/effects";
// import { REMINDER, REMINDER_SUCCESS, REMINDER_FAIL } from 'store/user';
import axios from "axios";
import { serverURL } from "./index";

// function* getUserSaga(action) {
//     try {
//         //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

//         // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

//         const headers = {
//             Authorization: `jwt ${localStorage.getItem("accessToken")}`,
//         };
//         const res = yield call([axios, "get"], `${serverURL}/profile/${action.payload.id}/`, {
//             headers: headers,
//         });

//         console.log("getUser: ", res);
//         if (res.data.response === "success") {
//             const backgroundItems = res.data.message.jorang_items.filter((item) => item.item.item_type === "background");
//             console.log(backgroundItems);
//             const etcItems = res.data.message.jorang_items.filter((item) => item.item.item_type === "etc");
//             const items = {
//                 background: backgroundItems.length !== 0 ? backgroundItems[0].item.item_detail : null,
//                 etc: etcItems.length !== 0 ? etcItems[0].item.item_detail : null,
//             };
//             yield put({
//                 type: GETUSER_SUCCESS,
//                 payload: {
//                     user: res.data.message,
//                     jorang_color: res.data.message.jorang_items.filter((item) => item.item.item_type === "jorang_color")[0].item.item_detail,
//                     jorang_items: items,
//                 },
//             });
//         } else {
//             yield put({
//                 type: GETUSER_FAIL,
//                 payload: res.data.message,
//                 error: true,
//             });
//         }
//     } catch (e) {
//         console.log(e);
//         yield put({
//             type: GETUSER_FAIL,
//             payload: e,
//             error: true,
//         });
//     }
// }
// //OK
// function* setUserSaga(action) {
//     try {
//         //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

//         // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

//         const headers = {
//             Authorization: `jwt ${localStorage.getItem("accessToken")}`,
//         };

//         const param = {
//             title: action.payload.title,
//             nickname: action.payload.nickname,
//         };
//         const res = yield call([axios, "post"], `${serverURL}/profile/${action.payload.id}/`, param, {
//             headers: headers,
//         });

//         console.log("getUser: ", res);
//         if (res.data.response === "success") {
//             yield put({
//                 type: SETUSER_SUCCESS,
//                 payload: res.data.message,
//             });
//         } else {
//             yield put({
//                 type: SETUSER_FAIL,
//                 payload: res.data.message,
//                 error: true,
//             });
//         }
//     } catch (e) {
//         yield put({
//             type: SETUSER_FAIL,
//             payload: e,
//             error: true,
//         });
//     }
// }

export function* memorySaga() {
    // yield takeLatest(GETUSER, getUserSaga);
}
