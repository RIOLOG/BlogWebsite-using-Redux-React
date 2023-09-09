// import { createSlice, nanoid} from "@reduxjs/toolkit";
// import { sub } from 'date-fns';

// const initialState = [
//     {
//         id: '2',
//         title: 'Slices...',
//         content: "The more I say slice, the more I want pizza.",
//         date: sub(new Date(), { minutes: 5 }).toISOString(),
//         reactions: {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0
//         }
//     }
// ]

// const postsSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers: {
//         postAdded: {
//             reducer(state, action) {
//                 state.push(action.payload)
//             },
//             prepare(title, content, userId) {
//                 return {
//                     payload: {
//                         id: nanoid(),
//                         title,
//                         content,
//                         date: new Date().toISOString(),
//                         userId,
//                         reactions: {
//                             thumbsUp: 0,
//                             wow: 0,
//                             heart: 0,
//                             rocket: 0,
//                             coffee: 0
//                         }
//                     }
//                 }
//             }
//         },
//         reactionAdded(state, action) {
//             const { postId, reaction } = action.payload
//             const existingPost = state.find(post => post.id === postId)
//             if (existingPost) {
//                 existingPost.reactions[reaction]++
//             }
//         },
//         postUpdated(state, action) {
//             const { id, title, content } = action.payload;
//             const post = state.find((post) => post.id === id);
//             if (post) {
//               post.title = title;
//               post.content = content;
//             }
//           },
//           postDeleted(state, action) {
//             const postId = action.payload;
//             return state.filter((post) => post.id !== postId);
//           },
//         },
// })

// export const selectAllPosts = (state) => state.posts;

// export const { postAdded, postDeleted, postUpdated, reactionAdded } = postsSlice.actions

// export default postsSlice.reducer 




import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: '2',
    title: 'Data Structure',
    content: "Data Structure is most important in an Interview.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const post = state.find((post) => post.id === id);
      if (post) {
        post.title = title;
        post.content = content;
      }
    },
    postDeleted(state, action) {
      const postId = action.payload;
      return state.filter((post) => post.id !== postId);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

// Add a new selector to select a post by its id
export const selectPostById = (state, postId) =>
  state.posts.find((post) => post.id === postId);

export const { postAdded, postDeleted, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
