import React, {Suspense, lazy} from "react";
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";


//*** js:import-townStart
const Bath = lazy(() => import('./pages/town/Bath'));
const BathHouse = lazy(() => import('./pages/town/BathHouse'));
const BathFlat = lazy(() => import('./pages/town/BathFlat'));
const BathStudio = lazy(() => import('./pages/town/BathStudio'));
const BathFlat1 = lazy(() => import('./pages/town/BathFlat1'));
const BathFlat2 = lazy(() => import('./pages/town/BathFlat2'));
const BathFlat3 = lazy(() => import('./pages/town/BathFlat3'));
const BathFlat4 = lazy(() => import('./pages/town/BathFlat4'));
const BathFlat5 = lazy(() => import('./pages/town/BathFlat5'));
const BathFlat6 = lazy(() => import('./pages/town/BathFlat6'));
const BathFlat7 = lazy(() => import('./pages/town/BathFlat7'));
const BathFlat9 = lazy(() => import('./pages/town/BathFlat9'));
const BathFlat10 = lazy(() => import('./pages/town/BathFlat10'));
const BathHouse2 = lazy(() => import('./pages/town/BathHouse2'));
const BathHouse3 = lazy(() => import('./pages/town/BathHouse3'));
const BathHouse4 = lazy(() => import('./pages/town/BathHouse4'));
const BathHouse5 = lazy(() => import('./pages/town/BathHouse5'));
const BathHouse6 = lazy(() => import('./pages/town/BathHouse6'));
const BathHouse7 = lazy(() => import('./pages/town/BathHouse7'));
const BathHouse8 = lazy(() => import('./pages/town/BathHouse8'));
const BathHouse9 = lazy(() => import('./pages/town/BathHouse9'));
const BathHouse10 = lazy(() => import('./pages/town/BathHouse10'));
const BathStudio1 = lazy(() => import('./pages/town/BathStudio1'));
const BathOldfieldPark = lazy(() => import('./pages/town/BathOldfieldPark'));
const BathOldfieldParkHouse = lazy(() => import('./pages/town/BathOldfieldParkHouse'));
const BathOldfieldParkFlat = lazy(() => import('./pages/town/BathOldfieldParkFlat'));
const BathOldfieldParkStudio = lazy(() => import('./pages/town/BathOldfieldParkStudio'));
const BathOldfieldParkFlat1 = lazy(() => import('./pages/town/BathOldfieldParkFlat1'));
const BathOldfieldParkFlat2 = lazy(() => import('./pages/town/BathOldfieldParkFlat2'));
const BathOldfieldParkFlat3 = lazy(() => import('./pages/town/BathOldfieldParkFlat3'));
const BathOldfieldParkFlat4 = lazy(() => import('./pages/town/BathOldfieldParkFlat4'));
const BathOldfieldParkFlat5 = lazy(() => import('./pages/town/BathOldfieldParkFlat5'));
const BathOldfieldParkFlat6 = lazy(() => import('./pages/town/BathOldfieldParkFlat6'));
const BathOldfieldParkFlat9 = lazy(() => import('./pages/town/BathOldfieldParkFlat9'));
const BathOldfieldParkFlat10 = lazy(() => import('./pages/town/BathOldfieldParkFlat10'));
const BathOldfieldParkHouse2 = lazy(() => import('./pages/town/BathOldfieldParkHouse2'));
const BathOldfieldParkHouse3 = lazy(() => import('./pages/town/BathOldfieldParkHouse3'));
const BathOldfieldParkHouse4 = lazy(() => import('./pages/town/BathOldfieldParkHouse4'));
const BathOldfieldParkHouse5 = lazy(() => import('./pages/town/BathOldfieldParkHouse5'));
const BathOldfieldParkHouse6 = lazy(() => import('./pages/town/BathOldfieldParkHouse6'));
const BathOldfieldParkHouse7 = lazy(() => import('./pages/town/BathOldfieldParkHouse7'));
const BathOldfieldParkHouse8 = lazy(() => import('./pages/town/BathOldfieldParkHouse8'));
const BathOldfieldParkHouse9 = lazy(() => import('./pages/town/BathOldfieldParkHouse9'));
const BathOldfieldParkHouse10 = lazy(() => import('./pages/town/BathOldfieldParkHouse10'));
const BathOldfieldParkStudio1 = lazy(() => import('./pages/town/BathOldfieldParkStudio1'));
const BathBathSpa = lazy(() => import('./pages/town/BathBathSpa'));
const BathBathSpaHouse = lazy(() => import('./pages/town/BathBathSpaHouse'));
const BathBathSpaFlat = lazy(() => import('./pages/town/BathBathSpaFlat'));
const BathBathSpaStudio = lazy(() => import('./pages/town/BathBathSpaStudio'));
const BathBathSpaFlat1 = lazy(() => import('./pages/town/BathBathSpaFlat1'));
const BathBathSpaFlat2 = lazy(() => import('./pages/town/BathBathSpaFlat2'));
const BathBathSpaFlat3 = lazy(() => import('./pages/town/BathBathSpaFlat3'));
const BathBathSpaFlat4 = lazy(() => import('./pages/town/BathBathSpaFlat4'));
const BathBathSpaFlat5 = lazy(() => import('./pages/town/BathBathSpaFlat5'));
const BathBathSpaHouse2 = lazy(() => import('./pages/town/BathBathSpaHouse2'));
const BathBathSpaHouse3 = lazy(() => import('./pages/town/BathBathSpaHouse3'));
const BathBathSpaHouse4 = lazy(() => import('./pages/town/BathBathSpaHouse4'));
const BathBathSpaHouse5 = lazy(() => import('./pages/town/BathBathSpaHouse5'));
const BathBathSpaHouse6 = lazy(() => import('./pages/town/BathBathSpaHouse6'));
const BathBathSpaHouse7 = lazy(() => import('./pages/town/BathBathSpaHouse7'));
const BathBathSpaHouse8 = lazy(() => import('./pages/town/BathBathSpaHouse8'));
const BathBathSpaHouse9 = lazy(() => import('./pages/town/BathBathSpaHouse9'));
const BathBathSpaStudio1 = lazy(() => import('./pages/town/BathBathSpaStudio1'));
const BathMoorlands = lazy(() => import('./pages/town/BathMoorlands'));
const BathMoorlandsHouse = lazy(() => import('./pages/town/BathMoorlandsHouse'));
const BathMoorlandsFlat = lazy(() => import('./pages/town/BathMoorlandsFlat'));
const BathMoorlandsStudio = lazy(() => import('./pages/town/BathMoorlandsStudio'));
const BathMoorlandsFlat1 = lazy(() => import('./pages/town/BathMoorlandsFlat1'));
const BathMoorlandsFlat2 = lazy(() => import('./pages/town/BathMoorlandsFlat2'));
const BathMoorlandsHouse3 = lazy(() => import('./pages/town/BathMoorlandsHouse3'));
const BathMoorlandsHouse4 = lazy(() => import('./pages/town/BathMoorlandsHouse4'));
const BathMoorlandsHouse5 = lazy(() => import('./pages/town/BathMoorlandsHouse5'));
const BathMoorlandsHouse6 = lazy(() => import('./pages/town/BathMoorlandsHouse6'));
const BathMoorlandsHouse7 = lazy(() => import('./pages/town/BathMoorlandsHouse7'));
const BathMoorlandsHouse8 = lazy(() => import('./pages/town/BathMoorlandsHouse8'));
const BathMoorlandsHouse10 = lazy(() => import('./pages/town/BathMoorlandsHouse10'));
const BathMoorlandsStudio1 = lazy(() => import('./pages/town/BathMoorlandsStudio1'));
const BathSladebrook = lazy(() => import('./pages/town/BathSladebrook'));
const BathSladebrookHouse = lazy(() => import('./pages/town/BathSladebrookHouse'));
const BathSladebrookFlat = lazy(() => import('./pages/town/BathSladebrookFlat'));
const BathSladebrookStudio = lazy(() => import('./pages/town/BathSladebrookStudio'));
const BathSladebrookFlat1 = lazy(() => import('./pages/town/BathSladebrookFlat1'));
const BathSladebrookFlat2 = lazy(() => import('./pages/town/BathSladebrookFlat2'));
const BathSladebrookHouse3 = lazy(() => import('./pages/town/BathSladebrookHouse3'));
const BathSladebrookHouse4 = lazy(() => import('./pages/town/BathSladebrookHouse4'));
const BathSladebrookHouse5 = lazy(() => import('./pages/town/BathSladebrookHouse5'));
const BathSladebrookHouse6 = lazy(() => import('./pages/town/BathSladebrookHouse6'));
const BathSladebrookHouse7 = lazy(() => import('./pages/town/BathSladebrookHouse7'));
const BathSladebrookHouse8 = lazy(() => import('./pages/town/BathSladebrookHouse8'));
const BathSladebrookHouse10 = lazy(() => import('./pages/town/BathSladebrookHouse10'));
const BathSladebrookStudio1 = lazy(() => import('./pages/town/BathSladebrookStudio1'));
// //*** js:import-townEnd

//*** jsStart:import-town-location
//*** jsEnd:import-town-location





const  App = ()  =>{
  
  return (
    <div className="App">        
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<Layout />}>          
          <Route index element={<Home />} />                    
          {/* routeSectionStart*/}                    
<Route path="student-accommodation-in-bath" element={<Bath/>}/>
<Route path="shared-houses-for-students-in-bath" element={<BathHouse/>}/>
<Route path="shared-flats-for-students-in-bath" element={<BathFlat/>}/>
<Route path="studio-apartments-for-students-in-bath" element={<BathStudio/>}/>
<Route path="student-accommodation-in-bath-1-bedroom-flats" element={<BathFlat1/>}/>
<Route path="student-accommodation-in-bath-2-bedroom-flats" element={<BathFlat2/>}/>
<Route path="student-accommodation-in-bath-3-bedroom-flats" element={<BathFlat3/>}/>
<Route path="student-accommodation-in-bath-4-bedroom-flats" element={<BathFlat4/>}/>
<Route path="student-accommodation-in-bath-5-bedroom-flats" element={<BathFlat5/>}/>
<Route path="student-accommodation-in-bath-6-bedroom-flats" element={<BathFlat6/>}/>
<Route path="student-accommodation-in-bath-7-bedroom-flats" element={<BathFlat7/>}/>
<Route path="student-accommodation-in-bath-9-bedroom-flats" element={<BathFlat9/>}/>
<Route path="student-accommodation-in-bath-10-bedroom-flats" element={<BathFlat10/>}/>
<Route path="student-accommodation-in-bath-2-bedroom-houses" element={<BathHouse2/>}/>
<Route path="student-accommodation-in-bath-3-bedroom-houses" element={<BathHouse3/>}/>
<Route path="student-accommodation-in-bath-4-bedroom-houses" element={<BathHouse4/>}/>
<Route path="student-accommodation-in-bath-5-bedroom-houses" element={<BathHouse5/>}/>
<Route path="student-accommodation-in-bath-6-bedroom-houses" element={<BathHouse6/>}/>
<Route path="student-accommodation-in-bath-7-bedroom-houses" element={<BathHouse7/>}/>
<Route path="student-accommodation-in-bath-8-bedroom-houses" element={<BathHouse8/>}/>
<Route path="student-accommodation-in-bath-9-bedroom-houses" element={<BathHouse9/>}/>
<Route path="student-accommodation-in-bath-10-bedroom-houses" element={<BathHouse10/>}/>
<Route path="student-accommodation-in-bath-1-bedroom-studios" element={<BathStudio1/>}/>
<Route path="student-accommodation-in-oldfield-park-bath" element={<BathOldfieldPark/>}/>
<Route path="shared-houses-for-students-in-oldfield-park-bath" element={<BathOldfieldParkHouse/>}/>
<Route path="shared-flats-for-students-in-oldfield-park-bath" element={<BathOldfieldParkFlat/>}/>
<Route path="studio-apartments-for-students-in-oldfield-park-bath" element={<BathOldfieldParkStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-oldfield-park-bath" element={<BathOldfieldParkFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-oldfield-park-bath" element={<BathOldfieldParkFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-oldfield-park-bath" element={<BathOldfieldParkFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-oldfield-park-bath" element={<BathOldfieldParkFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-oldfield-park-bath" element={<BathOldfieldParkFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-oldfield-park-bath" element={<BathOldfieldParkFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-oldfield-park-bath" element={<BathOldfieldParkFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-oldfield-park-bath" element={<BathOldfieldParkFlat10/>}/>
<Route path="shared-2-bedroom-houses-for-students-in-oldfield-park-bath" element={<BathOldfieldParkHouse2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-oldfield-park-bath" element={<BathOldfieldParkHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-oldfield-park-bath" element={<BathOldfieldParkHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-oldfield-park-bath" element={<BathOldfieldParkHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-oldfield-park-bath" element={<BathOldfieldParkHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-oldfield-park-bath" element={<BathOldfieldParkHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-oldfield-park-bath" element={<BathOldfieldParkHouse8/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-oldfield-park-bath" element={<BathOldfieldParkHouse9/>}/>
<Route path="shared-10-bedroom-houses-for-students-in-oldfield-park-bath" element={<BathOldfieldParkHouse10/>}/>
<Route path="studio-apartments-for-students-in-oldfield-park-bath" element={<BathOldfieldParkStudio1/>}/>
<Route path="student-accommodation-in-bath-spa-bath" element={<BathBathSpa/>}/>
<Route path="shared-houses-for-students-in-bath-spa-bath" element={<BathBathSpaHouse/>}/>
<Route path="shared-flats-for-students-in-bath-spa-bath" element={<BathBathSpaFlat/>}/>
<Route path="studio-apartments-for-students-in-bath-spa-bath" element={<BathBathSpaStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-bath-spa-bath" element={<BathBathSpaFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-bath-spa-bath" element={<BathBathSpaFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-bath-spa-bath" element={<BathBathSpaFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-bath-spa-bath" element={<BathBathSpaFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-bath-spa-bath" element={<BathBathSpaFlat5/>}/>
<Route path="shared-2-bedroom-houses-for-students-in-bath-spa-bath" element={<BathBathSpaHouse2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-bath-spa-bath" element={<BathBathSpaHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-bath-spa-bath" element={<BathBathSpaHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-bath-spa-bath" element={<BathBathSpaHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-bath-spa-bath" element={<BathBathSpaHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-bath-spa-bath" element={<BathBathSpaHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-bath-spa-bath" element={<BathBathSpaHouse8/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-bath-spa-bath" element={<BathBathSpaHouse9/>}/>
<Route path="studio-apartments-for-students-in-bath-spa-bath" element={<BathBathSpaStudio1/>}/>
<Route path="student-accommodation-in-moorlands-bath" element={<BathMoorlands/>}/>
<Route path="shared-houses-for-students-in-moorlands-bath" element={<BathMoorlandsHouse/>}/>
<Route path="shared-flats-for-students-in-moorlands-bath" element={<BathMoorlandsFlat/>}/>
<Route path="studio-apartments-for-students-in-moorlands-bath" element={<BathMoorlandsStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-moorlands-bath" element={<BathMoorlandsFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-moorlands-bath" element={<BathMoorlandsFlat2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-moorlands-bath" element={<BathMoorlandsHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-moorlands-bath" element={<BathMoorlandsHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-moorlands-bath" element={<BathMoorlandsHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-moorlands-bath" element={<BathMoorlandsHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-moorlands-bath" element={<BathMoorlandsHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-moorlands-bath" element={<BathMoorlandsHouse8/>}/>
<Route path="shared-10-bedroom-houses-for-students-in-moorlands-bath" element={<BathMoorlandsHouse10/>}/>
<Route path="studio-apartments-for-students-in-moorlands-bath" element={<BathMoorlandsStudio1/>}/>
<Route path="student-accommodation-in-sladebrook-bath" element={<BathSladebrook/>}/>
<Route path="shared-houses-for-students-in-sladebrook-bath" element={<BathSladebrookHouse/>}/>
<Route path="shared-flats-for-students-in-sladebrook-bath" element={<BathSladebrookFlat/>}/>
<Route path="studio-apartments-for-students-in-sladebrook-bath" element={<BathSladebrookStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-sladebrook-bath" element={<BathSladebrookFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-sladebrook-bath" element={<BathSladebrookFlat2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-sladebrook-bath" element={<BathSladebrookHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-sladebrook-bath" element={<BathSladebrookHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-sladebrook-bath" element={<BathSladebrookHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-sladebrook-bath" element={<BathSladebrookHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-sladebrook-bath" element={<BathSladebrookHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-sladebrook-bath" element={<BathSladebrookHouse8/>}/>
<Route path="shared-10-bedroom-houses-for-students-in-sladebrook-bath" element={<BathSladebrookHouse10/>}/>
<Route path="studio-apartments-for-students-in-sladebrook-bath" element={<BathSladebrookStudio1/>}/>
          {/* routeSectionEnd*/}                    
          <Route path="*" element={<NoPage />} />                                            
        </Route>
      </Routes>
      </Suspense>
    </Router>    
    </div>
  );
}

export default App;
