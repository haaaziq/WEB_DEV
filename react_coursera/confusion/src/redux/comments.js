import * as ActionTypes from './ActionTypes';

export const Comments = (state={
        errMsg : null,
        comments : [],    
    }, action) => {
    switch(action.type){

        case ActionTypes.ADD_COMMENTS:
            return {...state, errMsg:null, comments:action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMsg:action.payload, comments:[]};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            console.log("new comment: " + comment.comment + " - Author: " + comment.author);
            return {...state, comments: state.comments.concat(comment)};

        default:
            return state;
    }
}