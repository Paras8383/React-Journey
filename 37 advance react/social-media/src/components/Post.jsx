import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {

  const {deletePost} = useContext(PostList)

  const reactionsCount = (() => {
    if (post == null) return 0;
    const r = post.reactions;
    if (r == null) return 0;

    // If it's an object like { likes: 5, dislikes: 1 }, sum values
    if (typeof r === "object" && !Array.isArray(r)) {
      return Object.values(r).reduce((sum, v) => sum + (Number(v) || 0), 0);
    }

    // If it's number-like or a string, coerce to number (fallback 0)
    const num = Number(r);
    return Number.isFinite(num) ? num : 0;
  })();

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => {deletePost(post.id)}}>
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {reactionsCount} people
        </div>
      </div>
    </div>
  );
};

export default Post;
