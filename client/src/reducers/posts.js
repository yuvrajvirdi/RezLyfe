import { FETCH_ALL, CREATE, FETCH_POST, FETCH_BY_SEARCH } from '../constants/constants';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_BY_SEARCH:
        return action.payload.data;
    case FETCH_POST:
        return action.payload.post;
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

