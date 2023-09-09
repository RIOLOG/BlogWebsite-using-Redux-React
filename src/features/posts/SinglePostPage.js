// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectPostById, postDeleted } from "../postsSlice";
// import PostAuthor from "./PostAuthor";
// import TimeAgo from "./TimeAgo";
// import ReactionButtons from "./ReactionButtons";
// import { useParams, Link, useNavigate} from "react-router-dom";
// import "./post.css";

// const SinglePostPage = () => {
//   const { postId } = useParams();
//   const post = useSelector((state) => selectPostById(state, postId));
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   // const location = useLocation();

//   if (!post) {
//     return (
//       <section className="single-post-page">
//         <h2 className="post-not-found">Post not found!</h2>
//       </section>
//     );
//   }

//   const handleDelete = () => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       dispatch(postDeleted(post.id));
//       navigate("/view-all-blogs");
//     }
//   };

//   return (
//     <>
//       <h2>Your Post</h2>
//     <section className="single-post-page">
//       <article className="post-content">
//         <h1 className="post-title">{post.title}</h1>
//         <p className="post-text">{post.content}</p>
//         <div className="post-details">
//           <PostAuthor userId={post.userId} />
//           <TimeAgo timestamp={post.date} />
//         </div>
//         <ReactionButtons post={post} />
//       </article>
//       <div className="post-actions">
//         <Link
//           to={`/post/edit/${post.id}`}
//           className="edit-button"
//           state={{ post }} // Pass the 'post' data to the Edit Post link
//         >
//           Edit Post
//         </Link>
//         <button onClick={handleDelete} className="delete-button">
//           Delete Post
//         </button>
//       </div>

//       {/* Display the EditPostForm component */}
//     </section>
//     </>
//   );
// };

// export default SinglePostPage;








import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPostById, postDeleted } from "../postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams, useNavigate } from "react-router-dom";
import "./post.css";
import { Link } from "react-router-dom";


const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check if the post is not found or undefined
  if (!post) {
    return (
      <section className="single-post-page">
        <h2 className="post-not-found">Post not found!</h2>
      </section>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(postDeleted(post.id));
      navigate("/view-all-blogs");
    }
  };

  return (
    <>
      <h2>Your Post</h2>
      <section className="single-post-page">
        <article className="post-content">
          <h1 className="post-title">{post.title}</h1>
          <p className="post-text">{post.content}</p>
          <div className="post-details">
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
          </div>
          <ReactionButtons post={post} />
        </article>
        <div className="post-actions">
          <Link to={`/post/edit/${post.id}`} className="edit-button">
            Edit Post
          </Link>
          <button onClick={handleDelete} className="delete-button">
            Delete Post
          </button>
        </div>
        {/* Display the EditPostForm component */}
      </section>
    </>
  );
};

export default SinglePostPage;

