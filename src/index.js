// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { store, persistor } from './app/store';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <Router>
//           <Routes>
//             <Route path="/*" element={<App />} />
//           </Routes>
//         </Router>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();



import {createRoot} from "react-dom/client";
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";



const container = document.getElementById("root");
const root = createRoot(container);

// let persisitor = persistStore(store);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
