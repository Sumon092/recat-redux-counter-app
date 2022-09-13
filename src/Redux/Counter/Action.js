import { INCREMENT, DECREMENT } from "./ActionTypes";

export const increment = (value) => {
    return {
        type: INCREMENT,
        payLoad: value
    };
};

export const decrement = (value) => {
    return {
        type: DECREMENT,
        payLoad: value
    };
};