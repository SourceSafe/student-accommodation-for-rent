import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import Aberdeen from "./pages/town/Aberdeen";
import Aberystwyth from "./pages/town/Aberystwyth";
import Bangor from "./pages/town/Bangor";



import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aberdeen" element={<Aberdeen />} />
          <Route path="aberystwyth" element={<Aberystwyth />} />
          <Route path="bangor" element={<Bangor />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>    
    </div>
  );
}

export default App;
