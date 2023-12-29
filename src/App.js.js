import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";


//*** js:import-townStart
//*** js:import-townEnd

//*** jsStart:import-town-location
//*** jsEnd:import-town-location



import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />          
          {/* routeSectionStart*/}                    
<Route path="highwycombe" element={<HighWycombe/>}/>
          {/* routeSectionEnd*/}          

          {/* <Route path="/aberdeen/aberdeen-city-centre" element={<AberdeenAberdeenCityCentre/>}/>
          <Route path="/aberdeen/middlefield" element={<AberdeenMiddlefield/>}/> */}

          <Route path="*" element={<NoPage />} />                                            
        </Route>
      </Routes>
    </BrowserRouter>    
    </div>
  );
}

export default App;
