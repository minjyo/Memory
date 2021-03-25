import { createAction, handleActions } from "redux-actions";
import { createRequestAction } from "./createRequestAction";
import mp from "../assets/main.png";

export const [SETTEXT, SETTEXT_SUCCESS, SETTEXT_FAIL] = createRequestAction("SETTEXT");
export const [SETIMG, SETIMG_SUCCESS, SETIMG_FAIL] = createRequestAction("SETIMG");

export const setText = createAction(SETTEXT, (text) => text);
export const setImg = createAction(SETIMG, (img) => img);

const initialState = {
    img: mp,
    text: "text",
};

const memory = handleActions(
    {
        [SETTEXT]: (state, { payload: text }) => ({
            ...state,
            text: text,
        }),
        [SETIMG]: (state, { payload: img }) => ({
            ...state,
            img: img,
        }),
    },
    initialState
);

export default memory;
