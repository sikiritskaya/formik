import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const GET_USERS = 'GET_USERS'
const GET_POSTS = 'GET_POSTS'

const initialState = {
    posts: [],
    users: []
};

const reducer = (state = initialState, action) => {
    console.log('reducer', action)
    switch (action.type) {
        case GET_USERS:
          return {
            ...state,
            users: action.users
          }
          case GET_POSTS:
          return {
            ...state,
            posts: action.posts
          }
        default:
          return state;
      }
}

const setUsers= (users) => {
    return {
        type: GET_USERS,
        users
    }
}
const setPosts = (posts) => { 
    return {
        type: GET_POSTS,
        posts
    }

}


//const store = createStore(reducer, applyMiddleware(thunk));
const store = createStore(reducer);
export { setPosts, setUsers }

export default store;