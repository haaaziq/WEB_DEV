import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

// =========== DISHES Action Creators ==============

    // fetchDishes - Thunk - that will return a function- having access to dispatch and getState
    //          instead of an action object
    export const fetchDishes = () => (dispatch) => {
        dispatch(dishesLoading(true));

        return fetch(baseUrl + 'dishes')
            .then(response => {
                if(response.ok)
                    return response;
                else{ // occur when there is response from the Server which contains error (means, app is able to communicate with the server)
                    var error = new Error('Error! ' + response.status + ' ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => { // occur when there is no response from the server, maybe when server is not running
                var errorMsg = new Error(error.message);
                throw errorMsg;
            })
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message))); // in catch block we'll cath above error
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
            .then(response => {
                if(response.ok)
                    return response;
                else{
                    var error = new Error('Error! ' + response.status + ' ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => {
                var errorMsg = new Error(error.message);
                throw errorMsg;
            })
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)))
            .catch(error => dispatch(commentsFailed(error.message)));
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
            .then(response => {
                if(response.ok)
                    return response;
                else{
                    var error = new Error('Error! ' + response.status + ' ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => {
                var errorMsg = new Error(error.message);
                throw errorMsg;
            })
            .then(response => response.json())
            .then(promotions => dispatch(addPromotions(promotions)))
            .catch(error => dispatch(promotionsFailed(error.message)));
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