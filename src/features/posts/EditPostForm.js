// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { postUpdated, selectPostById } from '../postsSlice';
// import './post.css';
// import { selectAllUsers } from "../users/usersSlice";



// const EditPostForm = () => {
//   const { postId } = useParams();
//   const navigate = useNavigate();

//   const post = useSelector((state) => selectPostById(state, postId));
//   const users = useSelector(selectAllUsers)
//   const dispatch = useDispatch();


//   const [title, setTitle] = useState(post?.title)
//   const [content, setContent] = useState(post?.body)
//   const [userId, setUserId] = useState(post?.userId)
//   const [requestStatus, setRequestStatus] = useState('idle');


//   useEffect(() => {
//     if (post) {
//       setTitle(post.title);
//       setContent(post.content);
//       setUserId(post.userId);
//     }
//   }, [post]);

//   if (!post) {
//     return (
//       <section>
//         <h2>Loading...</h2>
//       </section>
//     );
//   }

//   const onTitleChanged = (e) => setTitle(e.target.value);
//   const onContentChanged = (e) => setContent(e.target.value);
//   const onAuthorChanged = (e) => setUserId(Number(e.target.value));

//   // const canSave = [title, content, userId].every(Boolean) && requestStatus === 'idle';

//   const onSavePostClicked = () => {
//       try {
//         setRequestStatus('pending');
//         dispatch(postUpdated({ id: post.id, title, content, userId }));

//         setTitle('')
//         setContent('')
//         setUserId('')
//         navigate(`/post/${postId}`);
//       } catch (err) {
//         console.error('Failed to save the post', err);
//       } finally {
//         setRequestStatus('idle');
//       }
//   };


//   const usersOptions = users.map(user => (
//     <option
//         key={user.id}
//         value={user.id}
//     >{user.name}</option>
// ))



//   return (
//     <section>
//       <h2>Edit Post</h2>
//       <form>
//       <label htmlFor="postTitle">Post Title:</label>
//       <input
//           type="text"
//           id="postTitle"
//           name="postTitle"
//           value={title}
//           onChange={onTitleChanged}
//       />
//       <label htmlFor="postAuthor">Category:</label>
//       <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
//           <option value=""></option>
//           {/* {usersOptions} */}
//       </select>
//       <label htmlFor="postContent">Content:</label>
//       <textarea
//           id="postContent"
//           name="postContent"
//           value={content}
//           onChange={onContentChanged}
//       />
//         <button
//           type="button"
//           onClick={onSavePostClicked}
//         >
//           Save Post
//         </button>
//       </form>
//     </section>
//   );
// };

// export default EditPostForm;






import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postUpdated, selectPostById } from '../postsSlice';
import './post.css';
import { selectAllUsers } from "../users/usersSlice";

const EditPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, postId));
  const users = useSelector(selectAllUsers)
  const dispatch = useDispatch();

  const [title, setTitle] = useState(post?.title)
  const [content, setContent] = useState(post?.body)
  const [userId, setUserId] = useState(post?.userId)
  const [requestStatus, setRequestStatus] = useState('idle');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setUserId(post.userId);
    }
  }, [post]);

  if (!post) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(Number(e.target.value));

  const onSavePostClicked = () => {
    try {
      setRequestStatus('pending');
      dispatch(postUpdated({ id: post.id, title, content, userId }));
      setTitle('');
      setContent('');
      setUserId('');
      navigate(`/post/${postId}`);
    } catch (err) {
      console.error('Failed to save the post', err);
    } finally {
      setRequestStatus('idle');
    }
  };

  const usersOptions = users.map(user => (
    <option
      key={user.id}
      value={user.id}
    >
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Category:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {/* {usersOptions} */}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          type="button"
          onClick={onSavePostClicked}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
