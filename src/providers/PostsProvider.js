import { createContext } from 'react';

import { useProvideAuth, useProvidePosts } from '../hooks';
const initialState = {
  posts: [],
  loading: true,
  addPostToState: () => {},
};

export const PostsContext = createContext(initialState);

export const PostsProvider = ({ children }) => {
  const auth = useProvidePosts();
  return <PostsContext.Provider value={auth}>{children}</PostsContext.Provider>;
};
