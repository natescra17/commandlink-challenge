import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Form from "./pages/Form";
import Submission from "./pages/Submission";


function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/end" element={<Submission/>} />
      </Routes>
    </Layout>
  );
}

export default App;
