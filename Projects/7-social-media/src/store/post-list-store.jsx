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
  let newPostList  = currPostList
    if (action.type === 'DELETE_POST'){
      newPostList = currPostList.filter((post) => post.id !== action.payload.id)
    }
    else if (action.type==='ADD_POST'){
      newPostList = [action.payload, ...currPostList]
    }

    return newPostList;
}



const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload:{
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags : tags
      }
    })
  };
  const deletePost = (id) => {
    dispatchPostList({
      type:'DELETE_POST',
      payload:{
        id
      }
    })
  };

  return (
    <PostList.Provider
      value={{postList, addPost, deletePost,}}
    >
      {children}
    </PostList.Provider>
  );
};



export default PostListProvider;
