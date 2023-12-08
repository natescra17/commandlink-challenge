import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Form from "./pages/Form";
import Submission from "./pages/Submission";

import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/end" element={<Submission />} />
        </Routes>
      </Layout>
    </Provider>
  );
};

export default App;
