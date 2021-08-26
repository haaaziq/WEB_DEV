import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

// =========== DISHES Action Creators ==============

    // fetchDishes - Thunk - that will return a function- having access to dispatch and getState
    //          instead of an action object
    export const fetchDishes = () => (dispatch) => {
        dispatch(dishesLoading(true));

        return fetch(baseUrl + 'dishes')
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)));
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

// =========== COMMENTS Action Creators ==============

    // Action creator function addComment that will return the action object(type & payload)
    // Action that will create new comment on Dish Detail Component
    export const addComment = (dishId, rating, author, comment) => ({
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    });

    // Thunk for fetching comments
    export const fetchComments = () => (dispatch) => {
        return fetch(baseUrl + 'comments')
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)));
    }

    export const addComments = (comments) => ({
        type: ActionTypes.ADD_COMMENTS,
        payload: comments,
    });

    export const commentsFailed = (errMsg) => ({
        type: ActionTypes.COMMENTS_FAILED,
        payload: errMsg,
    });


// =========== PROMOTIONS Action Creators ==============

    // Thunk for fetching promotions
    export const fetchPromotions = () => (dispatch) => {
        dispatch(promotionsLoading(true));

        return fetch(baseUrl + 'promotions')
            .then(response => response.json())
            .then(promotions => dispatch(addPromotions(promotions)));
    }

    export const addPromotions = (promos) => ({
        type: ActionTypes.ADD_PROMOS,
        payload: promos,
    });

    export const promotionsLoading = () => ({
        type: ActionTypes.PROMOS_LOADING,
    });

    export const promotionsFailed = (errMsg) => ({
        type: ActionTypes.PROMOS_FAILED,
        payload: errMsg,
    });