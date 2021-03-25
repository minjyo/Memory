import { createAction, handleActions } from "redux-actions";
import { createRequestAction } from "./createRequestAction";

export const [SETTEXT, SETTEXT_SUCCESS, SETTEXT_FAIL] = createRequestAction("SETTEXT");
export const [SETIMG, SETIMG_SUCCESS, SETIMG_FAIL] = createRequestAction("SETIMG");

export const setText = createAction(SETTEXT, (text) => ({ text }));
export const setImg = createAction(SETIMG, (img) => ({ img }));

const initialState = {
    img: null,
    text: "",
};

const memory = handleActions(
    {
        [SETTEXT_SUCCESS]: (state, { payload: text }) => ({
            ...state,
            text: text,
        }),
        [SETTEXT_SUCCESS_FAIL]: (state, { payload: error }) => ({
            ...state,
        }),
        [SETIMG_SUCCESS]: (state, { payload: img }) => ({
            ...state,
            img: img,
        }),
        [SETIMG_SUCCESS_FAIL]: (state, { payload: error }) => ({
            ...state,
        }),
    },
    initialState
);

export default memory;
