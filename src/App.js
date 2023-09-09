import React from "react";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import Layout from './componets/Layout';
import { Routes, Route } from "react-router-dom";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import './componets/component.css'

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout/>}>
      <Route index element={<PostsList />} />
        <Route path="/add-post" element={<AddPostForm />} />
        <Route path="/view-all-blogs" element={<PostsList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route
            path="edit/:postId"
            element={
              <EditPostForm />
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
