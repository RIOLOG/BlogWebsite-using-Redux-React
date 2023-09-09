// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate} from "react-router-dom";
// import { selectAllPosts } from "../postsSlice";
// import PostAuthor from "./PostAuthor";
// import TimeAgo from "./TimeAgo";
// import ReactionButtons from "./ReactionButtons";
// import "./post.css"

// const PostsList = () => {
//   const posts = useSelector(selectAllPosts);
//   const navigate = useNavigate();

//   const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

//   const handlePostClick = (postId) => {
//     navigate(`/post/${postId}`);
//     // <Link to={`/posts/${postId}`}>View Post</Link>
//   };

//   return (
//     <section>
//       <h2>All Recent Posts</h2>
//       {orderedPosts.map((post) => (
//         <article key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.content?.substring(0, 100)}</p>

//           <p className="postCredit">
//             <PostAuthor userId={post.userId} />
//             <TimeAgo timestamp={post.date} />
//           </p>
//           <ReactionButtons post={post} />
//           <br />
//           <div>
//             <button onClick={() => handlePostClick(post.id)}>
//               Show Full Post
//             </button>
//           </div>
//         </article>
//       ))}
//     </section>
//   );
// };

// export default PostsList;












import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import {  useNavigate } from "react-router-dom";
import "./post.css";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const navigate = useNavigate();

  // Sort posts by date in descending order
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <section>
      <h1 className="post-title">All Recent Posts</h1>
      {orderedPosts.map((post) => (
        <article key={post.id}>
          <h1 className="post-title">{post.title}</h1>
          {post.content && (
            <p>{post.content.substring(0, 100)}</p>
          )}
          <p className="postCredit">
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
          </p>
          <ReactionButtons post={post} />
          <br />
          <div>
            <button onClick={() => handlePostClick(post.id)}>
              Show Full Post
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default PostsList;

