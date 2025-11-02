import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [{
    id: '1',
    title: 'Going to mumbai',
    body: 'Hi friends i am going to mumbai for my vacations. Hope to enjoy a lot. PEACE OUT',
    reactions: 0,
    userId: 'user-9',
    tags : ['vacation','Mumbai','Enjoying']
},
{
    id: '2',
    title: 'Pass ho gye',
    body: '4 saal ki masti ke baad bhi hogye hai pass, hard to believe!!!',
    reactions: 15,
    userId: 'user-12',
    tags : ['graduating','unbelievable']
}
]

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    return currPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{postList, addPost, deletePost,}}
    >
      {children}
    </PostList.Provider>
  );
};



export default PostListProvider;
