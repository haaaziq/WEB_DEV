import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";

// Action creator function addComment that will return the action object(type & payload)
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

// fetchDishes - Thunk - that will return a function- having access to dispatch and getState
//          instead of an action object
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES))
        }, 2000);
}

// addDishes, dishesLoading, dishesFailed - Action Creators, returns Action Object
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes,
});

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errMsg) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMsg,
});