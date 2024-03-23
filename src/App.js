import React, {Suspense, lazy} from "react";
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";


//*** js:import-townStart
const Bath = lazy(() => import('./pages/town/Bath'));
const BathOldfieldPark = lazy(() => import('./pages/town/BathOldfieldPark'));
const BathBathSpa = lazy(() => import('./pages/town/BathBathSpa'));
const BathBloomfield = lazy(() => import('./pages/town/BathBloomfield'));
const BathKingsway = lazy(() => import('./pages/town/BathKingsway'));
const BathMoorlands = lazy(() => import('./pages/town/BathMoorlands'));
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
const BathBathSpaHouse = lazy(() => import('./pages/town/BathBathSpaHouse'));
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
const BathBloomfieldHouse = lazy(() => import('./pages/town/BathBloomfieldHouse'));
const BathBloomfieldFlat1 = lazy(() => import('./pages/town/BathBloomfieldFlat1'));
const BathBloomfieldFlat2 = lazy(() => import('./pages/town/BathBloomfieldFlat2'));
const BathBloomfieldHouse3 = lazy(() => import('./pages/town/BathBloomfieldHouse3'));
const BathBloomfieldHouse4 = lazy(() => import('./pages/town/BathBloomfieldHouse4'));
const BathBloomfieldHouse5 = lazy(() => import('./pages/town/BathBloomfieldHouse5'));
const BathBloomfieldHouse6 = lazy(() => import('./pages/town/BathBloomfieldHouse6'));
const BathBloomfieldHouse7 = lazy(() => import('./pages/town/BathBloomfieldHouse7'));
const BathBloomfieldHouse8 = lazy(() => import('./pages/town/BathBloomfieldHouse8'));
const BathBloomfieldHouse10 = lazy(() => import('./pages/town/BathBloomfieldHouse10'));
const BathBloomfieldStudio1 = lazy(() => import('./pages/town/BathBloomfieldStudio1'));
const BathKingswayHouse = lazy(() => import('./pages/town/BathKingswayHouse'));
const BathKingswayFlat1 = lazy(() => import('./pages/town/BathKingswayFlat1'));
const BathKingswayFlat2 = lazy(() => import('./pages/town/BathKingswayFlat2'));
const BathKingswayHouse3 = lazy(() => import('./pages/town/BathKingswayHouse3'));
const BathKingswayHouse4 = lazy(() => import('./pages/town/BathKingswayHouse4'));
const BathKingswayHouse5 = lazy(() => import('./pages/town/BathKingswayHouse5'));
const BathKingswayHouse6 = lazy(() => import('./pages/town/BathKingswayHouse6'));
const BathKingswayHouse7 = lazy(() => import('./pages/town/BathKingswayHouse7'));
const BathKingswayHouse8 = lazy(() => import('./pages/town/BathKingswayHouse8'));
const BathKingswayHouse10 = lazy(() => import('./pages/town/BathKingswayHouse10'));
const BathKingswayStudio1 = lazy(() => import('./pages/town/BathKingswayStudio1'));
const BathMoorlandsHouse = lazy(() => import('./pages/town/BathMoorlandsHouse'));
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
const BathBathSpaFlat = lazy(() => import('./pages/town/BathBathSpaFlat'));
const BathAvonParkFlat = lazy(() => import('./pages/town/BathAvonParkFlat'));
const BathAvonParkFlat1 = lazy(() => import('./pages/town/BathAvonParkFlat1'));
const BathAvonParkFlat2 = lazy(() => import('./pages/town/BathAvonParkFlat2'));
const BathAvonParkFlat3 = lazy(() => import('./pages/town/BathAvonParkFlat3'));
const BathAvonParkFlat4 = lazy(() => import('./pages/town/BathAvonParkFlat4'));
const BathAvonParkFlat5 = lazy(() => import('./pages/town/BathAvonParkFlat5'));
const BathAvonParkHouse3 = lazy(() => import('./pages/town/BathAvonParkHouse3'));
const BathAvonParkHouse4 = lazy(() => import('./pages/town/BathAvonParkHouse4'));
const BathAvonParkHouse5 = lazy(() => import('./pages/town/BathAvonParkHouse5'));
const BathAvonParkHouse6 = lazy(() => import('./pages/town/BathAvonParkHouse6'));
const BathAvonParkHouse7 = lazy(() => import('./pages/town/BathAvonParkHouse7'));
const BathAvonParkHouse9 = lazy(() => import('./pages/town/BathAvonParkHouse9'));
const BathAvonParkStudio1 = lazy(() => import('./pages/town/BathAvonParkStudio1'));
const BathBeaconHillFlat = lazy(() => import('./pages/town/BathBeaconHillFlat'));
const BathBeaconHillFlat1 = lazy(() => import('./pages/town/BathBeaconHillFlat1'));
const BathBeaconHillFlat2 = lazy(() => import('./pages/town/BathBeaconHillFlat2'));
const BathBeaconHillFlat3 = lazy(() => import('./pages/town/BathBeaconHillFlat3'));
const BathBeaconHillFlat4 = lazy(() => import('./pages/town/BathBeaconHillFlat4'));
const BathBeaconHillFlat5 = lazy(() => import('./pages/town/BathBeaconHillFlat5'));
const BathBeaconHillHouse3 = lazy(() => import('./pages/town/BathBeaconHillHouse3'));
const BathBeaconHillHouse4 = lazy(() => import('./pages/town/BathBeaconHillHouse4'));
const BathBeaconHillHouse5 = lazy(() => import('./pages/town/BathBeaconHillHouse5'));
const BathBeaconHillHouse6 = lazy(() => import('./pages/town/BathBeaconHillHouse6'));
const BathBeaconHillHouse7 = lazy(() => import('./pages/town/BathBeaconHillHouse7'));
const BathBeaconHillHouse9 = lazy(() => import('./pages/town/BathBeaconHillHouse9'));
const BathBeaconHillStudio1 = lazy(() => import('./pages/town/BathBeaconHillStudio1'));
const BathKensingtonFlat = lazy(() => import('./pages/town/BathKensingtonFlat'));
const BathKensingtonFlat1 = lazy(() => import('./pages/town/BathKensingtonFlat1'));
const BathKensingtonFlat2 = lazy(() => import('./pages/town/BathKensingtonFlat2'));
const BathKensingtonFlat3 = lazy(() => import('./pages/town/BathKensingtonFlat3'));
const BathKensingtonFlat4 = lazy(() => import('./pages/town/BathKensingtonFlat4'));
const BathKensingtonFlat5 = lazy(() => import('./pages/town/BathKensingtonFlat5'));
const BathKensingtonHouse3 = lazy(() => import('./pages/town/BathKensingtonHouse3'));
const BathKensingtonHouse4 = lazy(() => import('./pages/town/BathKensingtonHouse4'));
const BathKensingtonHouse5 = lazy(() => import('./pages/town/BathKensingtonHouse5'));
const BathKensingtonHouse6 = lazy(() => import('./pages/town/BathKensingtonHouse6'));
const BathKensingtonHouse7 = lazy(() => import('./pages/town/BathKensingtonHouse7'));
const BathKensingtonHouse9 = lazy(() => import('./pages/town/BathKensingtonHouse9'));
const BathKensingtonStudio1 = lazy(() => import('./pages/town/BathKensingtonStudio1'));
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
const BathBeechenCliffStudio = lazy(() => import('./pages/town/BathBeechenCliffStudio'));
const BathBeechenCliffFlat1 = lazy(() => import('./pages/town/BathBeechenCliffFlat1'));
const BathBeechenCliffFlat2 = lazy(() => import('./pages/town/BathBeechenCliffFlat2'));
const BathBeechenCliffFlat3 = lazy(() => import('./pages/town/BathBeechenCliffFlat3'));
const BathBeechenCliffFlat4 = lazy(() => import('./pages/town/BathBeechenCliffFlat4'));
const BathBeechenCliffFlat5 = lazy(() => import('./pages/town/BathBeechenCliffFlat5'));
const BathBeechenCliffFlat6 = lazy(() => import('./pages/town/BathBeechenCliffFlat6'));
const BathBeechenCliffFlat9 = lazy(() => import('./pages/town/BathBeechenCliffFlat9'));
const BathBeechenCliffFlat10 = lazy(() => import('./pages/town/BathBeechenCliffFlat10'));
const BathBeechenCliffStudio1 = lazy(() => import('./pages/town/BathBeechenCliffStudio1'));
const BathCrescentGardensStudio = lazy(() => import('./pages/town/BathCrescentGardensStudio'));
const BathCrescentGardensFlat1 = lazy(() => import('./pages/town/BathCrescentGardensFlat1'));
const BathCrescentGardensFlat2 = lazy(() => import('./pages/town/BathCrescentGardensFlat2'));
const BathCrescentGardensFlat3 = lazy(() => import('./pages/town/BathCrescentGardensFlat3'));
const BathCrescentGardensFlat4 = lazy(() => import('./pages/town/BathCrescentGardensFlat4'));
const BathCrescentGardensFlat5 = lazy(() => import('./pages/town/BathCrescentGardensFlat5'));
const BathCrescentGardensFlat6 = lazy(() => import('./pages/town/BathCrescentGardensFlat6'));
const BathCrescentGardensFlat9 = lazy(() => import('./pages/town/BathCrescentGardensFlat9'));
const BathCrescentGardensFlat10 = lazy(() => import('./pages/town/BathCrescentGardensFlat10'));
const BathCrescentGardensStudio1 = lazy(() => import('./pages/town/BathCrescentGardensStudio1'));
const BathDolemeadsStudio = lazy(() => import('./pages/town/BathDolemeadsStudio'));
const BathDolemeadsFlat1 = lazy(() => import('./pages/town/BathDolemeadsFlat1'));
const BathDolemeadsFlat2 = lazy(() => import('./pages/town/BathDolemeadsFlat2'));
const BathDolemeadsFlat3 = lazy(() => import('./pages/town/BathDolemeadsFlat3'));
const BathDolemeadsFlat4 = lazy(() => import('./pages/town/BathDolemeadsFlat4'));
const BathDolemeadsFlat5 = lazy(() => import('./pages/town/BathDolemeadsFlat5'));
const BathDolemeadsFlat6 = lazy(() => import('./pages/town/BathDolemeadsFlat6'));
const BathDolemeadsFlat9 = lazy(() => import('./pages/town/BathDolemeadsFlat9'));
const BathDolemeadsFlat10 = lazy(() => import('./pages/town/BathDolemeadsFlat10'));
const BathDolemeadsStudio1 = lazy(() => import('./pages/town/BathDolemeadsStudio1'));
const BathHatStudio = lazy(() => import('./pages/town/BathHatStudio'));
const BathHatFlat1 = lazy(() => import('./pages/town/BathHatFlat1'));
const BathHatFlat2 = lazy(() => import('./pages/town/BathHatFlat2'));
const BathHatFlat3 = lazy(() => import('./pages/town/BathHatFlat3'));
const BathHatFlat4 = lazy(() => import('./pages/town/BathHatFlat4'));
const BathHatFlat5 = lazy(() => import('./pages/town/BathHatFlat5'));
const BathHatFlat6 = lazy(() => import('./pages/town/BathHatFlat6'));
const BathHatFlat9 = lazy(() => import('./pages/town/BathHatFlat9'));
const BathHatFlat10 = lazy(() => import('./pages/town/BathHatFlat10'));
const BathHatStudio1 = lazy(() => import('./pages/town/BathHatStudio1'));
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
          {/* routeSectionStart*/}                    
<Route path="student-accommodation-in-bath" element={<Bath/>}/>
<Route path="student-accommodation-in-oldfield-park-bath" element={<BathOldfieldPark/>}/>
<Route path="student-accommodation-in-bath-spa-bath" element={<BathBathSpa/>}/>
<Route path="student-accommodation-in-bloomfield-bath" element={<BathBloomfield/>}/>
<Route path="student-accommodation-in-kingsway-bath" element={<BathKingsway/>}/>
<Route path="student-accommodation-in-moorlands-bath" element={<BathMoorlands/>}/>
<Route path="shared-houses-for-students-in-bath" element={<BathHouse/>}/>
<Route path="shared-houses-for-students-in-oldfield-park-bath" element={<BathOldfieldParkHouse/>}/>
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
<Route path="shared-houses-for-students-in-bath-spa-bath" element={<BathBathSpaHouse/>}/>
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
<Route path="shared-houses-for-students-in-bloomfield-bath" element={<BathBloomfieldHouse/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-bloomfield-bath" element={<BathBloomfieldFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-bloomfield-bath" element={<BathBloomfieldFlat2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-bloomfield-bath" element={<BathBloomfieldHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-bloomfield-bath" element={<BathBloomfieldHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-bloomfield-bath" element={<BathBloomfieldHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-bloomfield-bath" element={<BathBloomfieldHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-bloomfield-bath" element={<BathBloomfieldHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-bloomfield-bath" element={<BathBloomfieldHouse8/>}/>
<Route path="shared-10-bedroom-houses-for-students-in-bloomfield-bath" element={<BathBloomfieldHouse10/>}/>
<Route path="studio-apartments-for-students-in-bloomfield-bath" element={<BathBloomfieldStudio1/>}/>
<Route path="shared-houses-for-students-in-kingsway-bath" element={<BathKingswayHouse/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-kingsway-bath" element={<BathKingswayFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-kingsway-bath" element={<BathKingswayFlat2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-kingsway-bath" element={<BathKingswayHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-kingsway-bath" element={<BathKingswayHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-kingsway-bath" element={<BathKingswayHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-kingsway-bath" element={<BathKingswayHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-kingsway-bath" element={<BathKingswayHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-kingsway-bath" element={<BathKingswayHouse8/>}/>
<Route path="shared-10-bedroom-houses-for-students-in-kingsway-bath" element={<BathKingswayHouse10/>}/>
<Route path="studio-apartments-for-students-in-kingsway-bath" element={<BathKingswayStudio1/>}/>
<Route path="shared-houses-for-students-in-moorlands-bath" element={<BathMoorlandsHouse/>}/>
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
<Route path="student-accommodation-in-bath-2-bedroom-houses" element={<BathHouse2/>}/>
<Route path="student-accommodation-in-bath-3-bedroom-houses" element={<BathHouse3/>}/>
<Route path="student-accommodation-in-bath-4-bedroom-houses" element={<BathHouse4/>}/>
<Route path="student-accommodation-in-bath-5-bedroom-houses" element={<BathHouse5/>}/>
<Route path="student-accommodation-in-bath-6-bedroom-houses" element={<BathHouse6/>}/>
<Route path="student-accommodation-in-bath-7-bedroom-houses" element={<BathHouse7/>}/>
<Route path="student-accommodation-in-bath-8-bedroom-houses" element={<BathHouse8/>}/>
<Route path="student-accommodation-in-bath-9-bedroom-houses" element={<BathHouse9/>}/>
<Route path="student-accommodation-in-bath-10-bedroom-houses" element={<BathHouse10/>}/>
<Route path="shared-flats-for-students-in-bath" element={<BathFlat/>}/>
<Route path="shared-flats-for-students-in-oldfield-park-bath" element={<BathOldfieldParkFlat/>}/>
<Route path="shared-flats-for-students-in-bath-spa-bath" element={<BathBathSpaFlat/>}/>
<Route path="shared-flats-for-students-in-avon-park-bath" element={<BathAvonParkFlat/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-avon-park-bath" element={<BathAvonParkFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-avon-park-bath" element={<BathAvonParkFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-avon-park-bath" element={<BathAvonParkFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-avon-park-bath" element={<BathAvonParkFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-avon-park-bath" element={<BathAvonParkFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-avon-park-bath" element={<BathAvonParkHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-avon-park-bath" element={<BathAvonParkHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-avon-park-bath" element={<BathAvonParkHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-avon-park-bath" element={<BathAvonParkHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-avon-park-bath" element={<BathAvonParkHouse7/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-avon-park-bath" element={<BathAvonParkHouse9/>}/>
<Route path="studio-apartments-for-students-in-avon-park-bath" element={<BathAvonParkStudio1/>}/>
<Route path="shared-flats-for-students-in-beacon-hill-bath" element={<BathBeaconHillFlat/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-beacon-hill-bath" element={<BathBeaconHillFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-beacon-hill-bath" element={<BathBeaconHillFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-beacon-hill-bath" element={<BathBeaconHillFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-beacon-hill-bath" element={<BathBeaconHillFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-beacon-hill-bath" element={<BathBeaconHillFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-beacon-hill-bath" element={<BathBeaconHillHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-beacon-hill-bath" element={<BathBeaconHillHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-beacon-hill-bath" element={<BathBeaconHillHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-beacon-hill-bath" element={<BathBeaconHillHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-beacon-hill-bath" element={<BathBeaconHillHouse7/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-beacon-hill-bath" element={<BathBeaconHillHouse9/>}/>
<Route path="studio-apartments-for-students-in-beacon-hill-bath" element={<BathBeaconHillStudio1/>}/>
<Route path="shared-flats-for-students-in-kensington-bath" element={<BathKensingtonFlat/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-kensington-bath" element={<BathKensingtonFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-kensington-bath" element={<BathKensingtonFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-kensington-bath" element={<BathKensingtonFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-kensington-bath" element={<BathKensingtonFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-kensington-bath" element={<BathKensingtonFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-kensington-bath" element={<BathKensingtonHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-kensington-bath" element={<BathKensingtonHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-kensington-bath" element={<BathKensingtonHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-kensington-bath" element={<BathKensingtonHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-kensington-bath" element={<BathKensingtonHouse7/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-kensington-bath" element={<BathKensingtonHouse9/>}/>
<Route path="studio-apartments-for-students-in-kensington-bath" element={<BathKensingtonStudio1/>}/>
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
<Route path="studio-apartments-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffFlat10/>}/>
<Route path="studio-apartments-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffStudio1/>}/>
<Route path="studio-apartments-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensFlat10/>}/>
<Route path="studio-apartments-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensStudio1/>}/>
<Route path="studio-apartments-for-students-in-dolemeads-bath" element={<BathDolemeadsStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-dolemeads-bath" element={<BathDolemeadsFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-dolemeads-bath" element={<BathDolemeadsFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-dolemeads-bath" element={<BathDolemeadsFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-dolemeads-bath" element={<BathDolemeadsFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-dolemeads-bath" element={<BathDolemeadsFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-dolemeads-bath" element={<BathDolemeadsFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-dolemeads-bath" element={<BathDolemeadsFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-dolemeads-bath" element={<BathDolemeadsFlat10/>}/>
<Route path="studio-apartments-for-students-in-dolemeads-bath" element={<BathDolemeadsStudio1/>}/>
<Route path="studio-apartments-for-students-in-hat-bath" element={<BathHatStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-hat-bath" element={<BathHatFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-hat-bath" element={<BathHatFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-hat-bath" element={<BathHatFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-hat-bath" element={<BathHatFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-hat-bath" element={<BathHatFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-hat-bath" element={<BathHatFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-hat-bath" element={<BathHatFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-hat-bath" element={<BathHatFlat10/>}/>
<Route path="studio-apartments-for-students-in-hat-bath" element={<BathHatStudio1/>}/>
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
