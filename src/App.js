import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

//#import
import Aberdeen from "./pages/town/Aberdeen";
import Aberystwyth from "./pages/town/Aberystwyth";
import Bangor from "./pages/town/Bangor";
import Bath from "./pages/town/Bath";
import Belfast from "./pages/town/Belfast";



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
          <Route path="bath" element={<Bath />} />
          <Route path="belfast" element={<Belfast />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>    
    </div>
  );
}

export default App;
