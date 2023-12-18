import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import Aberdeen from "./pages/town/Aberdeen";
import Bath from "./pages/town/Bath";
import Cheltenham from "./pages/town/Cheltenham";


import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aberdeen" element={<Aberdeen />} />
          <Route path="bath" element={<Bath />} />
          <Route path="cheltenham" element={<Cheltenham />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>    
    </div>
  );
}

export default App;
