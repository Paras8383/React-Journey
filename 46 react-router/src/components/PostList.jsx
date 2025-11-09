import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";
import WelcomeMessage from "./WelcomeMessage";

const PostList=()=>{
    
    const { postList, fetching } = useContext(PostListData)

    return(
        <>
        {fetching && <LoadingSpinner/>}
        {!fetching && postList.length === 0 && <WelcomeMessage/>}
        {!fetching && postList.map((post) => <Post key={post.id} post={post}/>)}
        </>
    )
}

export default PostList;