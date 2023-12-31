// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { postDeleted } from '../actions/postActions';
// import { useHistory } from 'react-router-dom';

// const DeletePostButton = ({ postId }) => {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const handleDelete = () => {
//     if (window.confirm('Are you sure you want to delete this post?')) {
//       dispatch(postDeleted(postId));
//       history.push('/');
//     }
//   };

//   return (
//     <button onClick={handleDelete} className="delete-button">
//       Delete
//     </button>
//   );
// };

// export default DeletePostButton;



import React from 'react';
import { useDispatch } from 'react-redux';
import { postDeleted } from '../actions/postActions'; // Import your action appropriately
import { useNavigate } from 'react-router-dom';

const DeletePostButton = ({ postId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch(postDeleted(postId)); // Dispatch the postDeleted action with postId
      navigate('/');
    }
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete
    </button>
  );
};

export default DeletePostButton;
