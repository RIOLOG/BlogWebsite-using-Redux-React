// import { useState, useEffect } from "react";
// import {useDispatch , useSelector} from "react-redux";
// import { postAdded } from "../postsSlice";
// import {selectAllUsers} from "../users/usersSlice"
// import { useNavigate } from "react-router-dom";


// const AddPostForm = () => {
//     const LOCAL_STORAGE_KEY = "ankit"

//     const dispatch = useDispatch()
//     const [title, setTitle] = useState('')
//     const [content, setContent] = useState('')
//     const [userId, setUserId] = useState('')
//     const navigate = useNavigate();

//     const users = useSelector(selectAllUsers)

//     const onTitleChanged = e => setTitle(e.target.value);
//     const onContentChanged = e => setContent(e.target.value);
//     const onAuthorChanged = e => setUserId(e.target.value);


//     const onSavePostClicked = () => {
//         if (title && content)
//         {
//             dispatch
//             (
//                 postAdded(title,content, userId)
//             )
//             setTitle('')
//             setContent('')
//             navigate('/view-all-blogs');
//         }
//     }

//     useEffect(() => {
//         localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify({title,content,userId}));
//     },[title, content, userId]);


//     useEffect(() => {
//         const retrivedata = localStorage.getItem(LOCAL_STORAGE_KEY);
//         if (retrivedata)
//         {
//             const parsedata = JSON.parse(retrivedata);
//             setTitle(parsedata.setItem);
//             setContent(parsedata.setContent);
//             setUserId(parsedata.setUserId);
//         }
//     },[]);




//     const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    

//     const usersOptions = users.map(user => (
//         <option key={user.id} value={user.id}>
//             {user.name}
//         </option>
//     ))


    
//     return (
//         <section>
//             <h2>Add a New Post</h2>
//             <form>
//                 <label htmlFor="postTitle">Post Title:</label>
//                 <input 
//                     type="text"
//                     id="postTitle"
//                     name="postTitle"
//                     value={title}
//                     onChange={onTitleChanged}
//                     />

//                     <label htmlFor="postAuthor">Category:</label>
//                     <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
//                         <option value=""></option>
//                         {usersOptions}
//                     </select>


//                     <label htmlFor="postContent">Content:</label>
//                     <textarea
//                     id="postContent"
//                     name="postContent"
//                     value={content}
//                     onChange={onContentChanged}
//                     />
//                     <button 
//                     type="button"
//                     onClick={onSavePostClicked}
//                     disabled={!canSave}
//                     >Save Post</button>
//             </form>
//         </section>
//     )
// }

// export default AddPostForm



import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../postsSlice";
import { selectAllUsers } from "../users/usersSlice";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  // const LOCAL_STORAGE_KEY = "ankit";

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        dispatch(postAdded(title, content, userId));
        setTitle('');
        setContent('');
        setUserId('');
        navigate('/');
      } catch (err) {
        console.error('Failed to save the post', err);
      }
    }
  };
  // useEffect(() => {
  //   const retrivedata = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   if (retrivedata) {
  //     const parsedata = JSON.parse(retrivedata);
  //     setTitle(parsedata.title);
  //     setContent(parsedata.content);
  //     setUserId(parsedata.userId);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(
  //     LOCAL_STORAGE_KEY,
  //     JSON.stringify({ title, content, userId })
  //   );
  // }, [title, content, userId]);


  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
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
          {usersOptions}
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
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
