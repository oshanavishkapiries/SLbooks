import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import Container_wapper from "./components/Container_wapper.jsx";

import store from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <Provider store={store}>
    <Container_wapper>
      <Navbar />
      <App />
      <Footer />
    </Container_wapper>
  </Provider>
);
