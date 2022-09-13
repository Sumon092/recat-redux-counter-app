import { INCREMENT, DECREMENT } from "./ActionTypes";

const increment = (value) => {
    return {
        type: INCREMENT,
        payLoad: value
    };
};

const decrement = (value) => {
    return {
        type: DECREMENT,
        payLoad: value
    };
};