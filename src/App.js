import React, {Suspense, lazy} from "react";
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import {PropertyDetail} from './portal/PropertyDetail/PropertyDetail'
import {Enquiry} from './portal/Enquiry/Enquiry'


//*** js:import-townStart
const Bath = lazy(() => import('./pages/town/Bath'));
const BathOldfieldPark = lazy(() => import('./pages/town/BathOldfieldPark'));
const BathHouse = lazy(() => import('./pages/town/BathHouse'));
const BathOldfieldParkHouse = lazy(() => import('./pages/town/BathOldfieldParkHouse'));
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
const BathHouse2 = lazy(() => import('./pages/town/BathHouse2'));
const BathHouse3 = lazy(() => import('./pages/town/BathHouse3'));
const BathHouse4 = lazy(() => import('./pages/town/BathHouse4'));
const BathHouse5 = lazy(() => import('./pages/town/BathHouse5'));
const BathHouse6 = lazy(() => import('./pages/town/BathHouse6'));
const BathHouse7 = lazy(() => import('./pages/town/BathHouse7'));
const BathHouse8 = lazy(() => import('./pages/town/BathHouse8'));
const BathHouse9 = lazy(() => import('./pages/town/BathHouse9'));
const BathHouse10 = lazy(() => import('./pages/town/BathHouse10'));
const BathFlat = lazy(() => import('./pages/town/BathFlat'));
const BathOldfieldParkFlat = lazy(() => import('./pages/town/BathOldfieldParkFlat'));
const BathFlat1 = lazy(() => import('./pages/town/BathFlat1'));
const BathFlat2 = lazy(() => import('./pages/town/BathFlat2'));
const BathFlat3 = lazy(() => import('./pages/town/BathFlat3'));
const BathFlat4 = lazy(() => import('./pages/town/BathFlat4'));
const BathFlat5 = lazy(() => import('./pages/town/BathFlat5'));
const BathFlat6 = lazy(() => import('./pages/town/BathFlat6'));
const BathFlat7 = lazy(() => import('./pages/town/BathFlat7'));
const BathFlat9 = lazy(() => import('./pages/town/BathFlat9'));
const BathFlat10 = lazy(() => import('./pages/town/BathFlat10'));
const BathStudio = lazy(() => import('./pages/town/BathStudio'));
const BathOldfieldParkStudio = lazy(() => import('./pages/town/BathOldfieldParkStudio'));
const BathStudio1 = lazy(() => import('./pages/town/BathStudio1'));
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
          <Route path="/enquire/:propertyId" element={<Enquiry/>}/>
          <Route path="properties/:propertyId/:billsOfferedByAgent" element={<PropertyDetail/>}/>
          

          
          {/* routeSectionStart*/}                    

<Route path="student-accommodation-in-bath" element={<Bath/>}/>
<Route path="student-accommodation-in-oldfield-park-bath" element={<BathOldfieldPark/>}/>
<Route path="student-houses-in-bath" element={<BathHouse/>}/>
<Route path="student-houses-in-oldfield-park-bath" element={<BathOldfieldParkHouse/>}/>
<Route path="1-bedroom-student-flats-in-oldfield-park-bath" element={<BathOldfieldParkFlat1/>}/>
<Route path="2-bedroom-student-flats-in-oldfield-park-bath" element={<BathOldfieldParkFlat2/>}/>
<Route path="3-bedroom-student-flats-in-oldfield-park-bath" element={<BathOldfieldParkFlat3/>}/>
<Route path="4-bedroom-student-flats-in-oldfield-park-bath" element={<BathOldfieldParkFlat4/>}/>
<Route path="5-bedroom-student-flats-in-oldfield-park-bath" element={<BathOldfieldParkFlat5/>}/>
<Route path="6-bedroom-student-flats-in-oldfield-park-bath" element={<BathOldfieldParkFlat6/>}/>
<Route path="9-bedroom-student-flats-in-oldfield-park-bath" element={<BathOldfieldParkFlat9/>}/>
<Route path="10-bedroom-student-flats-in-oldfield-park-bath" element={<BathOldfieldParkFlat10/>}/>
<Route path="2-bedroom-student-houses-in-oldfield-park-bath" element={<BathOldfieldParkHouse2/>}/>
<Route path="3-bedroom-student-houses-in-oldfield-park-bath" element={<BathOldfieldParkHouse3/>}/>
<Route path="4-bedroom-student-houses-in-oldfield-park-bath" element={<BathOldfieldParkHouse4/>}/>
<Route path="5-bedroom-student-houses-in-oldfield-park-bath" element={<BathOldfieldParkHouse5/>}/>
<Route path="6-bedroom-student-houses-in-oldfield-park-bath" element={<BathOldfieldParkHouse6/>}/>
<Route path="7-bedroom-student-houses-in-oldfield-park-bath" element={<BathOldfieldParkHouse7/>}/>
<Route path="8-bedroom-student-houses-in-oldfield-park-bath" element={<BathOldfieldParkHouse8/>}/>
<Route path="9-bedroom-student-houses-in-oldfield-park-bath" element={<BathOldfieldParkHouse9/>}/>
<Route path="10-bedroom-student-houses-in-oldfield-park-bath" element={<BathOldfieldParkHouse10/>}/>
<Route path="studio-apartments-for-students-in-oldfield-park-bath" element={<BathOldfieldParkStudio1/>}/>
<Route path="student-accommodation-in-bath-2-bedroom-houses" element={<BathHouse2/>}/>
<Route path="student-accommodation-in-bath-3-bedroom-houses" element={<BathHouse3/>}/>
<Route path="student-accommodation-in-bath-4-bedroom-houses" element={<BathHouse4/>}/>
<Route path="student-accommodation-in-bath-5-bedroom-houses" element={<BathHouse5/>}/>
<Route path="student-accommodation-in-bath-6-bedroom-houses" element={<BathHouse6/>}/>
<Route path="student-accommodation-in-bath-7-bedroom-houses" element={<BathHouse7/>}/>
<Route path="student-accommodation-in-bath-8-bedroom-houses" element={<BathHouse8/>}/>
<Route path="student-accommodation-in-bath-9-bedroom-houses" element={<BathHouse9/>}/>
<Route path="student-accommodation-in-bath-10-bedroom-houses" element={<BathHouse10/>}/>
<Route path="student-flats-in-bath" element={<BathFlat/>}/>
<Route path="student-flats-in-oldfield-park-bath" element={<BathOldfieldParkFlat/>}/>
<Route path="student-accommodation-in-bath-1-bedroom-flats" element={<BathFlat1/>}/>
<Route path="student-accommodation-in-bath-2-bedroom-flats" element={<BathFlat2/>}/>
<Route path="student-accommodation-in-bath-3-bedroom-flats" element={<BathFlat3/>}/>
<Route path="student-accommodation-in-bath-4-bedroom-flats" element={<BathFlat4/>}/>
<Route path="student-accommodation-in-bath-5-bedroom-flats" element={<BathFlat5/>}/>
<Route path="student-accommodation-in-bath-6-bedroom-flats" element={<BathFlat6/>}/>
<Route path="student-accommodation-in-bath-7-bedroom-flats" element={<BathFlat7/>}/>
<Route path="student-accommodation-in-bath-9-bedroom-flats" element={<BathFlat9/>}/>
<Route path="student-accommodation-in-bath-10-bedroom-flats" element={<BathFlat10/>}/>
<Route path="studio-apartments-for-students-in-bath" element={<BathStudio/>}/>
<Route path="studio-apartments-for-students-in-oldfield-park-bath" element={<BathOldfieldParkStudio/>}/>
<Route path="student-accommodation-in-bath-1-bedroom-studios" element={<BathStudio1/>}/>
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
