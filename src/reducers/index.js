import { combineReducers } from 'redux';

import posts from './posts';

export const reducers = combineReducers({
    posts, // name same can be just posts, instead of posts: posts
});