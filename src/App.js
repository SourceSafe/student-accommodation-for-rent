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
const BathBathSpa = lazy(() => import('./pages/town/BathBathSpa'));
const BathBloomfield = lazy(() => import('./pages/town/BathBloomfield'));
const BathKingsway = lazy(() => import('./pages/town/BathKingsway'));
const BathMoorlands = lazy(() => import('./pages/town/BathMoorlands'));
const BathSladebrook = lazy(() => import('./pages/town/BathSladebrook'));
const BathTheOval = lazy(() => import('./pages/town/BathTheOval'));
const BathTwertonHill = lazy(() => import('./pages/town/BathTwertonHill'));
const BathSouthdown = lazy(() => import('./pages/town/BathSouthdown'));
const BathTwerton = lazy(() => import('./pages/town/BathTwerton'));
const BathEastTwerton = lazy(() => import('./pages/town/BathEastTwerton'));
const BathPennHill = lazy(() => import('./pages/town/BathPennHill'));
const BathSouthTwerton = lazy(() => import('./pages/town/BathSouthTwerton'));
const BathLowerWeston = lazy(() => import('./pages/town/BathLowerWeston'));
const BathWeston = lazy(() => import('./pages/town/BathWeston'));
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
const BathSladebrookHouse = lazy(() => import('./pages/town/BathSladebrookHouse'));
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
const BathTheOvalHouse = lazy(() => import('./pages/town/BathTheOvalHouse'));
const BathTheOvalFlat1 = lazy(() => import('./pages/town/BathTheOvalFlat1'));
const BathTheOvalFlat2 = lazy(() => import('./pages/town/BathTheOvalFlat2'));
const BathTheOvalHouse3 = lazy(() => import('./pages/town/BathTheOvalHouse3'));
const BathTheOvalHouse4 = lazy(() => import('./pages/town/BathTheOvalHouse4'));
const BathTheOvalHouse5 = lazy(() => import('./pages/town/BathTheOvalHouse5'));
const BathTheOvalHouse6 = lazy(() => import('./pages/town/BathTheOvalHouse6'));
const BathTheOvalHouse7 = lazy(() => import('./pages/town/BathTheOvalHouse7'));
const BathTheOvalHouse8 = lazy(() => import('./pages/town/BathTheOvalHouse8'));
const BathTheOvalHouse10 = lazy(() => import('./pages/town/BathTheOvalHouse10'));
const BathTheOvalStudio1 = lazy(() => import('./pages/town/BathTheOvalStudio1'));
const BathTwertonHillHouse = lazy(() => import('./pages/town/BathTwertonHillHouse'));
const BathTwertonHillFlat1 = lazy(() => import('./pages/town/BathTwertonHillFlat1'));
const BathTwertonHillFlat2 = lazy(() => import('./pages/town/BathTwertonHillFlat2'));
const BathTwertonHillHouse3 = lazy(() => import('./pages/town/BathTwertonHillHouse3'));
const BathTwertonHillHouse4 = lazy(() => import('./pages/town/BathTwertonHillHouse4'));
const BathTwertonHillHouse5 = lazy(() => import('./pages/town/BathTwertonHillHouse5'));
const BathTwertonHillHouse6 = lazy(() => import('./pages/town/BathTwertonHillHouse6'));
const BathTwertonHillHouse7 = lazy(() => import('./pages/town/BathTwertonHillHouse7'));
const BathTwertonHillHouse8 = lazy(() => import('./pages/town/BathTwertonHillHouse8'));
const BathTwertonHillHouse10 = lazy(() => import('./pages/town/BathTwertonHillHouse10'));
const BathTwertonHillStudio1 = lazy(() => import('./pages/town/BathTwertonHillStudio1'));
const BathSouthdownHouse = lazy(() => import('./pages/town/BathSouthdownHouse'));
const BathSouthdownFlat1 = lazy(() => import('./pages/town/BathSouthdownFlat1'));
const BathSouthdownHouse3 = lazy(() => import('./pages/town/BathSouthdownHouse3'));
const BathSouthdownHouse4 = lazy(() => import('./pages/town/BathSouthdownHouse4'));
const BathSouthdownHouse5 = lazy(() => import('./pages/town/BathSouthdownHouse5'));
const BathSouthdownHouse6 = lazy(() => import('./pages/town/BathSouthdownHouse6'));
const BathSouthdownHouse7 = lazy(() => import('./pages/town/BathSouthdownHouse7'));
const BathSouthdownHouse8 = lazy(() => import('./pages/town/BathSouthdownHouse8'));
const BathSouthdownHouse10 = lazy(() => import('./pages/town/BathSouthdownHouse10'));
const BathEastTwertonHouse = lazy(() => import('./pages/town/BathEastTwertonHouse'));
const BathEastTwertonFlat1 = lazy(() => import('./pages/town/BathEastTwertonFlat1'));
const BathEastTwertonFlat2 = lazy(() => import('./pages/town/BathEastTwertonFlat2'));
const BathEastTwertonFlat3 = lazy(() => import('./pages/town/BathEastTwertonFlat3'));
const BathEastTwertonFlat5 = lazy(() => import('./pages/town/BathEastTwertonFlat5'));
const BathEastTwertonHouse3 = lazy(() => import('./pages/town/BathEastTwertonHouse3'));
const BathEastTwertonHouse4 = lazy(() => import('./pages/town/BathEastTwertonHouse4'));
const BathEastTwertonHouse5 = lazy(() => import('./pages/town/BathEastTwertonHouse5'));
const BathEastTwertonHouse6 = lazy(() => import('./pages/town/BathEastTwertonHouse6'));
const BathEastTwertonHouse7 = lazy(() => import('./pages/town/BathEastTwertonHouse7'));
const BathEastTwertonHouse8 = lazy(() => import('./pages/town/BathEastTwertonHouse8'));
const BathEastTwertonHouse9 = lazy(() => import('./pages/town/BathEastTwertonHouse9'));
const BathPennHillHouse = lazy(() => import('./pages/town/BathPennHillHouse'));
const BathPennHillFlat1 = lazy(() => import('./pages/town/BathPennHillFlat1'));
const BathPennHillFlat2 = lazy(() => import('./pages/town/BathPennHillFlat2'));
const BathPennHillFlat3 = lazy(() => import('./pages/town/BathPennHillFlat3'));
const BathPennHillFlat5 = lazy(() => import('./pages/town/BathPennHillFlat5'));
const BathPennHillHouse3 = lazy(() => import('./pages/town/BathPennHillHouse3'));
const BathPennHillHouse4 = lazy(() => import('./pages/town/BathPennHillHouse4'));
const BathPennHillHouse5 = lazy(() => import('./pages/town/BathPennHillHouse5'));
const BathPennHillHouse6 = lazy(() => import('./pages/town/BathPennHillHouse6'));
const BathPennHillHouse7 = lazy(() => import('./pages/town/BathPennHillHouse7'));
const BathPennHillHouse8 = lazy(() => import('./pages/town/BathPennHillHouse8'));
const BathPennHillHouse9 = lazy(() => import('./pages/town/BathPennHillHouse9'));
const BathSouthTwertonHouse = lazy(() => import('./pages/town/BathSouthTwertonHouse'));
const BathSouthTwertonFlat1 = lazy(() => import('./pages/town/BathSouthTwertonFlat1'));
const BathSouthTwertonFlat2 = lazy(() => import('./pages/town/BathSouthTwertonFlat2'));
const BathSouthTwertonFlat3 = lazy(() => import('./pages/town/BathSouthTwertonFlat3'));
const BathSouthTwertonFlat5 = lazy(() => import('./pages/town/BathSouthTwertonFlat5'));
const BathSouthTwertonHouse3 = lazy(() => import('./pages/town/BathSouthTwertonHouse3'));
const BathSouthTwertonHouse4 = lazy(() => import('./pages/town/BathSouthTwertonHouse4'));
const BathSouthTwertonHouse5 = lazy(() => import('./pages/town/BathSouthTwertonHouse5'));
const BathSouthTwertonHouse6 = lazy(() => import('./pages/town/BathSouthTwertonHouse6'));
const BathSouthTwertonHouse7 = lazy(() => import('./pages/town/BathSouthTwertonHouse7'));
const BathSouthTwertonHouse8 = lazy(() => import('./pages/town/BathSouthTwertonHouse8'));
const BathSouthTwertonHouse9 = lazy(() => import('./pages/town/BathSouthTwertonHouse9'));
const BathTwertonHouse = lazy(() => import('./pages/town/BathTwertonHouse'));
const BathTwertonFlat1 = lazy(() => import('./pages/town/BathTwertonFlat1'));
const BathTwertonFlat2 = lazy(() => import('./pages/town/BathTwertonFlat2'));
const BathTwertonFlat3 = lazy(() => import('./pages/town/BathTwertonFlat3'));
const BathTwertonFlat5 = lazy(() => import('./pages/town/BathTwertonFlat5'));
const BathTwertonHouse3 = lazy(() => import('./pages/town/BathTwertonHouse3'));
const BathTwertonHouse4 = lazy(() => import('./pages/town/BathTwertonHouse4'));
const BathTwertonHouse5 = lazy(() => import('./pages/town/BathTwertonHouse5'));
const BathTwertonHouse6 = lazy(() => import('./pages/town/BathTwertonHouse6'));
const BathTwertonHouse7 = lazy(() => import('./pages/town/BathTwertonHouse7'));
const BathTwertonHouse8 = lazy(() => import('./pages/town/BathTwertonHouse8'));
const BathTwertonHouse9 = lazy(() => import('./pages/town/BathTwertonHouse9'));
const BathTwertonStudio1 = lazy(() => import('./pages/town/BathTwertonStudio1'));
const BathLowerWestonHouse = lazy(() => import('./pages/town/BathLowerWestonHouse'));
const BathLowerWestonFlat1 = lazy(() => import('./pages/town/BathLowerWestonFlat1'));
const BathLowerWestonFlat2 = lazy(() => import('./pages/town/BathLowerWestonFlat2'));
const BathLowerWestonFlat3 = lazy(() => import('./pages/town/BathLowerWestonFlat3'));
const BathLowerWestonFlat5 = lazy(() => import('./pages/town/BathLowerWestonFlat5'));
const BathLowerWestonHouse3 = lazy(() => import('./pages/town/BathLowerWestonHouse3'));
const BathLowerWestonHouse4 = lazy(() => import('./pages/town/BathLowerWestonHouse4'));
const BathLowerWestonHouse5 = lazy(() => import('./pages/town/BathLowerWestonHouse5'));
const BathLowerWestonHouse6 = lazy(() => import('./pages/town/BathLowerWestonHouse6'));
const BathLowerWestonHouse7 = lazy(() => import('./pages/town/BathLowerWestonHouse7'));
const BathLowerWestonHouse8 = lazy(() => import('./pages/town/BathLowerWestonHouse8'));
const BathLowerWestonHouse9 = lazy(() => import('./pages/town/BathLowerWestonHouse9'));
const BathOddDownHouse = lazy(() => import('./pages/town/BathOddDownHouse'));
const BathOddDownFlat2 = lazy(() => import('./pages/town/BathOddDownFlat2'));
const BathOddDownFlat3 = lazy(() => import('./pages/town/BathOddDownFlat3'));
const BathOddDownFlat4 = lazy(() => import('./pages/town/BathOddDownFlat4'));
const BathOddDownHouse2 = lazy(() => import('./pages/town/BathOddDownHouse2'));
const BathOddDownHouse3 = lazy(() => import('./pages/town/BathOddDownHouse3'));
const BathOddDownHouse4 = lazy(() => import('./pages/town/BathOddDownHouse4'));
const BathOddDownHouse5 = lazy(() => import('./pages/town/BathOddDownHouse5'));
const BathOddDownHouse6 = lazy(() => import('./pages/town/BathOddDownHouse6'));
const BathOddDownHouse7 = lazy(() => import('./pages/town/BathOddDownHouse7'));
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
const BathLocksbrookFlat = lazy(() => import('./pages/town/BathLocksbrookFlat'));
const BathLocksbrookFlat1 = lazy(() => import('./pages/town/BathLocksbrookFlat1'));
const BathLocksbrookFlat2 = lazy(() => import('./pages/town/BathLocksbrookFlat2'));
const BathLocksbrookFlat3 = lazy(() => import('./pages/town/BathLocksbrookFlat3'));
const BathLocksbrookFlat4 = lazy(() => import('./pages/town/BathLocksbrookFlat4'));
const BathLocksbrookFlat5 = lazy(() => import('./pages/town/BathLocksbrookFlat5'));
const BathLocksbrookHouse3 = lazy(() => import('./pages/town/BathLocksbrookHouse3'));
const BathLocksbrookHouse4 = lazy(() => import('./pages/town/BathLocksbrookHouse4'));
const BathLocksbrookHouse5 = lazy(() => import('./pages/town/BathLocksbrookHouse5'));
const BathLocksbrookHouse6 = lazy(() => import('./pages/town/BathLocksbrookHouse6'));
const BathLocksbrookHouse7 = lazy(() => import('./pages/town/BathLocksbrookHouse7'));
const BathLocksbrookHouse9 = lazy(() => import('./pages/town/BathLocksbrookHouse9'));
const BathLocksbrookStudio1 = lazy(() => import('./pages/town/BathLocksbrookStudio1'));
const BathPrimroseHillFlat = lazy(() => import('./pages/town/BathPrimroseHillFlat'));
const BathPrimroseHillFlat1 = lazy(() => import('./pages/town/BathPrimroseHillFlat1'));
const BathPrimroseHillFlat2 = lazy(() => import('./pages/town/BathPrimroseHillFlat2'));
const BathPrimroseHillFlat3 = lazy(() => import('./pages/town/BathPrimroseHillFlat3'));
const BathPrimroseHillFlat4 = lazy(() => import('./pages/town/BathPrimroseHillFlat4'));
const BathPrimroseHillFlat5 = lazy(() => import('./pages/town/BathPrimroseHillFlat5'));
const BathPrimroseHillHouse3 = lazy(() => import('./pages/town/BathPrimroseHillHouse3'));
const BathPrimroseHillHouse4 = lazy(() => import('./pages/town/BathPrimroseHillHouse4'));
const BathPrimroseHillHouse5 = lazy(() => import('./pages/town/BathPrimroseHillHouse5'));
const BathPrimroseHillHouse6 = lazy(() => import('./pages/town/BathPrimroseHillHouse6'));
const BathPrimroseHillHouse7 = lazy(() => import('./pages/town/BathPrimroseHillHouse7'));
const BathPrimroseHillHouse9 = lazy(() => import('./pages/town/BathPrimroseHillHouse9'));
const BathPrimroseHillStudio1 = lazy(() => import('./pages/town/BathPrimroseHillStudio1'));
const BathRaglandsFlat = lazy(() => import('./pages/town/BathRaglandsFlat'));
const BathRaglandsFlat1 = lazy(() => import('./pages/town/BathRaglandsFlat1'));
const BathRaglandsFlat2 = lazy(() => import('./pages/town/BathRaglandsFlat2'));
const BathRaglandsFlat3 = lazy(() => import('./pages/town/BathRaglandsFlat3'));
const BathRaglandsFlat4 = lazy(() => import('./pages/town/BathRaglandsFlat4'));
const BathRaglandsFlat5 = lazy(() => import('./pages/town/BathRaglandsFlat5'));
const BathRaglandsHouse3 = lazy(() => import('./pages/town/BathRaglandsHouse3'));
const BathRaglandsHouse4 = lazy(() => import('./pages/town/BathRaglandsHouse4'));
const BathRaglandsHouse5 = lazy(() => import('./pages/town/BathRaglandsHouse5'));
const BathRaglandsHouse6 = lazy(() => import('./pages/town/BathRaglandsHouse6'));
const BathRaglandsHouse7 = lazy(() => import('./pages/town/BathRaglandsHouse7'));
const BathRaglandsHouse9 = lazy(() => import('./pages/town/BathRaglandsHouse9'));
const BathRaglandsStudio1 = lazy(() => import('./pages/town/BathRaglandsStudio1'));
const BathRosehillFlat = lazy(() => import('./pages/town/BathRosehillFlat'));
const BathRosehillFlat1 = lazy(() => import('./pages/town/BathRosehillFlat1'));
const BathRosehillFlat2 = lazy(() => import('./pages/town/BathRosehillFlat2'));
const BathRosehillFlat3 = lazy(() => import('./pages/town/BathRosehillFlat3'));
const BathRosehillFlat4 = lazy(() => import('./pages/town/BathRosehillFlat4'));
const BathRosehillFlat5 = lazy(() => import('./pages/town/BathRosehillFlat5'));
const BathRosehillHouse3 = lazy(() => import('./pages/town/BathRosehillHouse3'));
const BathRosehillHouse4 = lazy(() => import('./pages/town/BathRosehillHouse4'));
const BathRosehillHouse5 = lazy(() => import('./pages/town/BathRosehillHouse5'));
const BathRosehillHouse6 = lazy(() => import('./pages/town/BathRosehillHouse6'));
const BathRosehillHouse7 = lazy(() => import('./pages/town/BathRosehillHouse7'));
const BathRosehillHouse9 = lazy(() => import('./pages/town/BathRosehillHouse9'));
const BathRosehillStudio1 = lazy(() => import('./pages/town/BathRosehillStudio1'));
const BathRudmoreParkFlat = lazy(() => import('./pages/town/BathRudmoreParkFlat'));
const BathRudmoreParkFlat1 = lazy(() => import('./pages/town/BathRudmoreParkFlat1'));
const BathRudmoreParkFlat2 = lazy(() => import('./pages/town/BathRudmoreParkFlat2'));
const BathRudmoreParkFlat3 = lazy(() => import('./pages/town/BathRudmoreParkFlat3'));
const BathRudmoreParkFlat4 = lazy(() => import('./pages/town/BathRudmoreParkFlat4'));
const BathRudmoreParkFlat5 = lazy(() => import('./pages/town/BathRudmoreParkFlat5'));
const BathRudmoreParkHouse3 = lazy(() => import('./pages/town/BathRudmoreParkHouse3'));
const BathRudmoreParkHouse4 = lazy(() => import('./pages/town/BathRudmoreParkHouse4'));
const BathRudmoreParkHouse5 = lazy(() => import('./pages/town/BathRudmoreParkHouse5'));
const BathRudmoreParkHouse6 = lazy(() => import('./pages/town/BathRudmoreParkHouse6'));
const BathRudmoreParkHouse7 = lazy(() => import('./pages/town/BathRudmoreParkHouse7'));
const BathRudmoreParkHouse9 = lazy(() => import('./pages/town/BathRudmoreParkHouse9'));
const BathRudmoreParkStudio1 = lazy(() => import('./pages/town/BathRudmoreParkStudio1'));
const BathSnowHillFlat = lazy(() => import('./pages/town/BathSnowHillFlat'));
const BathSnowHillFlat1 = lazy(() => import('./pages/town/BathSnowHillFlat1'));
const BathSnowHillFlat2 = lazy(() => import('./pages/town/BathSnowHillFlat2'));
const BathSnowHillFlat3 = lazy(() => import('./pages/town/BathSnowHillFlat3'));
const BathSnowHillFlat4 = lazy(() => import('./pages/town/BathSnowHillFlat4'));
const BathSnowHillFlat5 = lazy(() => import('./pages/town/BathSnowHillFlat5'));
const BathSnowHillHouse3 = lazy(() => import('./pages/town/BathSnowHillHouse3'));
const BathSnowHillHouse4 = lazy(() => import('./pages/town/BathSnowHillHouse4'));
const BathSnowHillHouse5 = lazy(() => import('./pages/town/BathSnowHillHouse5'));
const BathSnowHillHouse6 = lazy(() => import('./pages/town/BathSnowHillHouse6'));
const BathSnowHillHouse7 = lazy(() => import('./pages/town/BathSnowHillHouse7'));
const BathSnowHillHouse9 = lazy(() => import('./pages/town/BathSnowHillHouse9'));
const BathSnowHillStudio1 = lazy(() => import('./pages/town/BathSnowHillStudio1'));
const BathWestonParkFlat = lazy(() => import('./pages/town/BathWestonParkFlat'));
const BathWestonParkFlat1 = lazy(() => import('./pages/town/BathWestonParkFlat1'));
const BathWestonParkFlat2 = lazy(() => import('./pages/town/BathWestonParkFlat2'));
const BathWestonParkFlat3 = lazy(() => import('./pages/town/BathWestonParkFlat3'));
const BathWestonParkFlat4 = lazy(() => import('./pages/town/BathWestonParkFlat4'));
const BathWestonParkFlat5 = lazy(() => import('./pages/town/BathWestonParkFlat5'));
const BathWestonParkHouse3 = lazy(() => import('./pages/town/BathWestonParkHouse3'));
const BathWestonParkHouse4 = lazy(() => import('./pages/town/BathWestonParkHouse4'));
const BathWestonParkHouse5 = lazy(() => import('./pages/town/BathWestonParkHouse5'));
const BathWestonParkHouse6 = lazy(() => import('./pages/town/BathWestonParkHouse6'));
const BathWestonParkHouse7 = lazy(() => import('./pages/town/BathWestonParkHouse7'));
const BathWestonParkHouse9 = lazy(() => import('./pages/town/BathWestonParkHouse9'));
const BathWestonParkStudio1 = lazy(() => import('./pages/town/BathWestonParkStudio1'));
const BathYomedeParkFlat = lazy(() => import('./pages/town/BathYomedeParkFlat'));
const BathYomedeParkFlat1 = lazy(() => import('./pages/town/BathYomedeParkFlat1'));
const BathYomedeParkFlat2 = lazy(() => import('./pages/town/BathYomedeParkFlat2'));
const BathYomedeParkFlat3 = lazy(() => import('./pages/town/BathYomedeParkFlat3'));
const BathYomedeParkFlat4 = lazy(() => import('./pages/town/BathYomedeParkFlat4'));
const BathYomedeParkFlat5 = lazy(() => import('./pages/town/BathYomedeParkFlat5'));
const BathYomedeParkHouse3 = lazy(() => import('./pages/town/BathYomedeParkHouse3'));
const BathYomedeParkHouse4 = lazy(() => import('./pages/town/BathYomedeParkHouse4'));
const BathYomedeParkHouse5 = lazy(() => import('./pages/town/BathYomedeParkHouse5'));
const BathYomedeParkHouse6 = lazy(() => import('./pages/town/BathYomedeParkHouse6'));
const BathYomedeParkHouse7 = lazy(() => import('./pages/town/BathYomedeParkHouse7'));
const BathYomedeParkHouse9 = lazy(() => import('./pages/town/BathYomedeParkHouse9'));
const BathYomedeParkStudio1 = lazy(() => import('./pages/town/BathYomedeParkStudio1'));
const BathBeechenCliffFlat = lazy(() => import('./pages/town/BathBeechenCliffFlat'));
const BathBeechenCliffFlat1 = lazy(() => import('./pages/town/BathBeechenCliffFlat1'));
const BathBeechenCliffFlat2 = lazy(() => import('./pages/town/BathBeechenCliffFlat2'));
const BathBeechenCliffFlat3 = lazy(() => import('./pages/town/BathBeechenCliffFlat3'));
const BathBeechenCliffFlat4 = lazy(() => import('./pages/town/BathBeechenCliffFlat4'));
const BathBeechenCliffFlat5 = lazy(() => import('./pages/town/BathBeechenCliffFlat5'));
const BathBeechenCliffFlat6 = lazy(() => import('./pages/town/BathBeechenCliffFlat6'));
const BathBeechenCliffFlat9 = lazy(() => import('./pages/town/BathBeechenCliffFlat9'));
const BathBeechenCliffFlat10 = lazy(() => import('./pages/town/BathBeechenCliffFlat10'));
const BathBeechenCliffStudio1 = lazy(() => import('./pages/town/BathBeechenCliffStudio1'));
const BathCrescentGardensFlat = lazy(() => import('./pages/town/BathCrescentGardensFlat'));
const BathCrescentGardensFlat1 = lazy(() => import('./pages/town/BathCrescentGardensFlat1'));
const BathCrescentGardensFlat2 = lazy(() => import('./pages/town/BathCrescentGardensFlat2'));
const BathCrescentGardensFlat3 = lazy(() => import('./pages/town/BathCrescentGardensFlat3'));
const BathCrescentGardensFlat4 = lazy(() => import('./pages/town/BathCrescentGardensFlat4'));
const BathCrescentGardensFlat5 = lazy(() => import('./pages/town/BathCrescentGardensFlat5'));
const BathCrescentGardensFlat6 = lazy(() => import('./pages/town/BathCrescentGardensFlat6'));
const BathCrescentGardensFlat9 = lazy(() => import('./pages/town/BathCrescentGardensFlat9'));
const BathCrescentGardensFlat10 = lazy(() => import('./pages/town/BathCrescentGardensFlat10'));
const BathCrescentGardensStudio1 = lazy(() => import('./pages/town/BathCrescentGardensStudio1'));
const BathBeechenCliffStudio = lazy(() => import('./pages/town/BathBeechenCliffStudio'));
const BathCrescentGardensStudio = lazy(() => import('./pages/town/BathCrescentGardensStudio'));
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
const BathHatfieldBuildingsStudio = lazy(() => import('./pages/town/BathHatfieldBuildingsStudio'));
const BathHatfieldBuildingsFlat1 = lazy(() => import('./pages/town/BathHatfieldBuildingsFlat1'));
const BathHatfieldBuildingsFlat2 = lazy(() => import('./pages/town/BathHatfieldBuildingsFlat2'));
const BathHatfieldBuildingsFlat3 = lazy(() => import('./pages/town/BathHatfieldBuildingsFlat3'));
const BathHatfieldBuildingsFlat4 = lazy(() => import('./pages/town/BathHatfieldBuildingsFlat4'));
const BathHatfieldBuildingsFlat5 = lazy(() => import('./pages/town/BathHatfieldBuildingsFlat5'));
const BathHatfieldBuildingsFlat6 = lazy(() => import('./pages/town/BathHatfieldBuildingsFlat6'));
const BathHatfieldBuildingsFlat9 = lazy(() => import('./pages/town/BathHatfieldBuildingsFlat9'));
const BathHatfieldBuildingsFlat10 = lazy(() => import('./pages/town/BathHatfieldBuildingsFlat10'));
const BathHatfieldBuildingsStudio1 = lazy(() => import('./pages/town/BathHatfieldBuildingsStudio1'));
const BathKingsmeadStudio = lazy(() => import('./pages/town/BathKingsmeadStudio'));
const BathKingsmeadFlat1 = lazy(() => import('./pages/town/BathKingsmeadFlat1'));
const BathKingsmeadFlat2 = lazy(() => import('./pages/town/BathKingsmeadFlat2'));
const BathKingsmeadFlat3 = lazy(() => import('./pages/town/BathKingsmeadFlat3'));
const BathKingsmeadFlat4 = lazy(() => import('./pages/town/BathKingsmeadFlat4'));
const BathKingsmeadFlat5 = lazy(() => import('./pages/town/BathKingsmeadFlat5'));
const BathKingsmeadFlat6 = lazy(() => import('./pages/town/BathKingsmeadFlat6'));
const BathKingsmeadFlat9 = lazy(() => import('./pages/town/BathKingsmeadFlat9'));
const BathKingsmeadFlat10 = lazy(() => import('./pages/town/BathKingsmeadFlat10'));
const BathKingsmeadStudio1 = lazy(() => import('./pages/town/BathKingsmeadStudio1'));
const BathLambridgeStudio = lazy(() => import('./pages/town/BathLambridgeStudio'));
const BathLambridgeFlat1 = lazy(() => import('./pages/town/BathLambridgeFlat1'));
const BathLambridgeFlat2 = lazy(() => import('./pages/town/BathLambridgeFlat2'));
const BathLambridgeFlat3 = lazy(() => import('./pages/town/BathLambridgeFlat3'));
const BathLambridgeFlat4 = lazy(() => import('./pages/town/BathLambridgeFlat4'));
const BathLambridgeFlat5 = lazy(() => import('./pages/town/BathLambridgeFlat5'));
const BathLambridgeFlat6 = lazy(() => import('./pages/town/BathLambridgeFlat6'));
const BathLambridgeFlat9 = lazy(() => import('./pages/town/BathLambridgeFlat9'));
const BathLambridgeFlat10 = lazy(() => import('./pages/town/BathLambridgeFlat10'));
const BathLambridgeStudio1 = lazy(() => import('./pages/town/BathLambridgeStudio1'));
const BathLowerSwainswickStudio = lazy(() => import('./pages/town/BathLowerSwainswickStudio'));
const BathLowerSwainswickFlat1 = lazy(() => import('./pages/town/BathLowerSwainswickFlat1'));
const BathLowerSwainswickFlat2 = lazy(() => import('./pages/town/BathLowerSwainswickFlat2'));
const BathLowerSwainswickFlat3 = lazy(() => import('./pages/town/BathLowerSwainswickFlat3'));
const BathLowerSwainswickFlat4 = lazy(() => import('./pages/town/BathLowerSwainswickFlat4'));
const BathLowerSwainswickFlat5 = lazy(() => import('./pages/town/BathLowerSwainswickFlat5'));
const BathLowerSwainswickFlat6 = lazy(() => import('./pages/town/BathLowerSwainswickFlat6'));
const BathLowerSwainswickFlat9 = lazy(() => import('./pages/town/BathLowerSwainswickFlat9'));
const BathLowerSwainswickFlat10 = lazy(() => import('./pages/town/BathLowerSwainswickFlat10'));
const BathLowerSwainswickStudio1 = lazy(() => import('./pages/town/BathLowerSwainswickStudio1'));
const BathLyncombeHillStudio = lazy(() => import('./pages/town/BathLyncombeHillStudio'));
const BathLyncombeHillFlat1 = lazy(() => import('./pages/town/BathLyncombeHillFlat1'));
const BathLyncombeHillFlat2 = lazy(() => import('./pages/town/BathLyncombeHillFlat2'));
const BathLyncombeHillFlat3 = lazy(() => import('./pages/town/BathLyncombeHillFlat3'));
const BathLyncombeHillFlat4 = lazy(() => import('./pages/town/BathLyncombeHillFlat4'));
const BathLyncombeHillFlat5 = lazy(() => import('./pages/town/BathLyncombeHillFlat5'));
const BathLyncombeHillFlat6 = lazy(() => import('./pages/town/BathLyncombeHillFlat6'));
const BathLyncombeHillFlat9 = lazy(() => import('./pages/town/BathLyncombeHillFlat9'));
const BathLyncombeHillFlat10 = lazy(() => import('./pages/town/BathLyncombeHillFlat10'));
const BathLyncombeHillStudio1 = lazy(() => import('./pages/town/BathLyncombeHillStudio1'));
const BathLyncombeValeStudio = lazy(() => import('./pages/town/BathLyncombeValeStudio'));
const BathLyncombeValeFlat1 = lazy(() => import('./pages/town/BathLyncombeValeFlat1'));
const BathLyncombeValeFlat2 = lazy(() => import('./pages/town/BathLyncombeValeFlat2'));
const BathLyncombeValeFlat3 = lazy(() => import('./pages/town/BathLyncombeValeFlat3'));
const BathLyncombeValeFlat4 = lazy(() => import('./pages/town/BathLyncombeValeFlat4'));
const BathLyncombeValeFlat5 = lazy(() => import('./pages/town/BathLyncombeValeFlat5'));
const BathLyncombeValeFlat6 = lazy(() => import('./pages/town/BathLyncombeValeFlat6'));
const BathLyncombeValeFlat9 = lazy(() => import('./pages/town/BathLyncombeValeFlat9'));
const BathLyncombeValeFlat10 = lazy(() => import('./pages/town/BathLyncombeValeFlat10'));
const BathLyncombeValeStudio1 = lazy(() => import('./pages/town/BathLyncombeValeStudio1'));
const BathPerrymeadStudio = lazy(() => import('./pages/town/BathPerrymeadStudio'));
const BathPerrymeadFlat1 = lazy(() => import('./pages/town/BathPerrymeadFlat1'));
const BathPerrymeadFlat2 = lazy(() => import('./pages/town/BathPerrymeadFlat2'));
const BathPerrymeadFlat3 = lazy(() => import('./pages/town/BathPerrymeadFlat3'));
const BathPerrymeadFlat4 = lazy(() => import('./pages/town/BathPerrymeadFlat4'));
const BathPerrymeadFlat5 = lazy(() => import('./pages/town/BathPerrymeadFlat5'));
const BathPerrymeadFlat6 = lazy(() => import('./pages/town/BathPerrymeadFlat6'));
const BathPerrymeadFlat9 = lazy(() => import('./pages/town/BathPerrymeadFlat9'));
const BathPerrymeadFlat10 = lazy(() => import('./pages/town/BathPerrymeadFlat10'));
const BathPerrymeadStudio1 = lazy(() => import('./pages/town/BathPerrymeadStudio1'));
const BathRushHillStudio = lazy(() => import('./pages/town/BathRushHillStudio'));
const BathRushHillFlat1 = lazy(() => import('./pages/town/BathRushHillFlat1'));
const BathRushHillFlat2 = lazy(() => import('./pages/town/BathRushHillFlat2'));
const BathRushHillFlat3 = lazy(() => import('./pages/town/BathRushHillFlat3'));
const BathRushHillFlat4 = lazy(() => import('./pages/town/BathRushHillFlat4'));
const BathRushHillFlat5 = lazy(() => import('./pages/town/BathRushHillFlat5'));
const BathRushHillFlat6 = lazy(() => import('./pages/town/BathRushHillFlat6'));
const BathRushHillFlat9 = lazy(() => import('./pages/town/BathRushHillFlat9'));
const BathRushHillFlat10 = lazy(() => import('./pages/town/BathRushHillFlat10'));
const BathRushHillStudio1 = lazy(() => import('./pages/town/BathRushHillStudio1'));
const BathSionHillStudio = lazy(() => import('./pages/town/BathSionHillStudio'));
const BathSionHillFlat1 = lazy(() => import('./pages/town/BathSionHillFlat1'));
const BathSionHillFlat2 = lazy(() => import('./pages/town/BathSionHillFlat2'));
const BathSionHillFlat3 = lazy(() => import('./pages/town/BathSionHillFlat3'));
const BathSionHillFlat4 = lazy(() => import('./pages/town/BathSionHillFlat4'));
const BathSionHillFlat5 = lazy(() => import('./pages/town/BathSionHillFlat5'));
const BathSionHillFlat6 = lazy(() => import('./pages/town/BathSionHillFlat6'));
const BathSionHillFlat9 = lazy(() => import('./pages/town/BathSionHillFlat9'));
const BathSionHillFlat10 = lazy(() => import('./pages/town/BathSionHillFlat10'));
const BathSionHillStudio1 = lazy(() => import('./pages/town/BathSionHillStudio1'));
const BathSouthLyncombeStudio = lazy(() => import('./pages/town/BathSouthLyncombeStudio'));
const BathSouthLyncombeFlat1 = lazy(() => import('./pages/town/BathSouthLyncombeFlat1'));
const BathSouthLyncombeFlat2 = lazy(() => import('./pages/town/BathSouthLyncombeFlat2'));
const BathSouthLyncombeFlat3 = lazy(() => import('./pages/town/BathSouthLyncombeFlat3'));
const BathSouthLyncombeFlat4 = lazy(() => import('./pages/town/BathSouthLyncombeFlat4'));
const BathSouthLyncombeFlat5 = lazy(() => import('./pages/town/BathSouthLyncombeFlat5'));
const BathSouthLyncombeFlat6 = lazy(() => import('./pages/town/BathSouthLyncombeFlat6'));
const BathSouthLyncombeFlat9 = lazy(() => import('./pages/town/BathSouthLyncombeFlat9'));
const BathSouthLyncombeFlat10 = lazy(() => import('./pages/town/BathSouthLyncombeFlat10'));
const BathSouthLyncombeStudio1 = lazy(() => import('./pages/town/BathSouthLyncombeStudio1'));
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
          <Route path="enquire/:propertyId/:title/:tennancyDate/:add2/:billsOfferedByAgent" element={<Enquiry/>}/>
          <Route path="properties/:propertyId/:billsOfferedByAgent/:add2" element={<PropertyDetail/>}/>
          

          
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
<Route path="student-accommodation-in-bath-spa-bath" element={<BathBathSpa/>}/>
<Route path="student-accommodation-in-bloomfield-bath" element={<BathBloomfield/>}/>
<Route path="student-accommodation-in-kingsway-bath" element={<BathKingsway/>}/>
<Route path="student-accommodation-in-moorlands-bath" element={<BathMoorlands/>}/>
<Route path="student-accommodation-in-sladebrook-bath" element={<BathSladebrook/>}/>
<Route path="student-accommodation-in-the-oval-bath" element={<BathTheOval/>}/>
<Route path="student-accommodation-in-twerton-hill-bath" element={<BathTwertonHill/>}/>
<Route path="student-accommodation-in-southdown-bath" element={<BathSouthdown/>}/>
<Route path="student-accommodation-in-twerton-bath" element={<BathTwerton/>}/>
<Route path="student-accommodation-in-east-twerton-bath" element={<BathEastTwerton/>}/>
<Route path="student-accommodation-in-penn-hill-bath" element={<BathPennHill/>}/>
<Route path="student-accommodation-in-south-twerton-bath" element={<BathSouthTwerton/>}/>
<Route path="student-accommodation-in-lower-weston-bath" element={<BathLowerWeston/>}/>
<Route path="student-accommodation-in-weston-bath" element={<BathWeston/>}/>
<Route path="student-houses-in-bath-spa-bath" element={<BathBathSpaHouse/>}/>
<Route path="1-bedroom-student-flats-in-bath-spa-bath" element={<BathBathSpaFlat1/>}/>
<Route path="2-bedroom-student-flats-in-bath-spa-bath" element={<BathBathSpaFlat2/>}/>
<Route path="3-bedroom-student-flats-in-bath-spa-bath" element={<BathBathSpaFlat3/>}/>
<Route path="4-bedroom-student-flats-in-bath-spa-bath" element={<BathBathSpaFlat4/>}/>
<Route path="5-bedroom-student-flats-in-bath-spa-bath" element={<BathBathSpaFlat5/>}/>
<Route path="2-bedroom-student-houses-in-bath-spa-bath" element={<BathBathSpaHouse2/>}/>
<Route path="3-bedroom-student-houses-in-bath-spa-bath" element={<BathBathSpaHouse3/>}/>
<Route path="4-bedroom-student-houses-in-bath-spa-bath" element={<BathBathSpaHouse4/>}/>
<Route path="5-bedroom-student-houses-in-bath-spa-bath" element={<BathBathSpaHouse5/>}/>
<Route path="6-bedroom-student-houses-in-bath-spa-bath" element={<BathBathSpaHouse6/>}/>
<Route path="7-bedroom-student-houses-in-bath-spa-bath" element={<BathBathSpaHouse7/>}/>
<Route path="8-bedroom-student-houses-in-bath-spa-bath" element={<BathBathSpaHouse8/>}/>
<Route path="9-bedroom-student-houses-in-bath-spa-bath" element={<BathBathSpaHouse9/>}/>
<Route path="studio-apartments-for-students-in-bath-spa-bath" element={<BathBathSpaStudio1/>}/>
<Route path="student-houses-in-bloomfield-bath" element={<BathBloomfieldHouse/>}/>
<Route path="1-bedroom-student-flats-in-bloomfield-bath" element={<BathBloomfieldFlat1/>}/>
<Route path="2-bedroom-student-flats-in-bloomfield-bath" element={<BathBloomfieldFlat2/>}/>
<Route path="3-bedroom-student-houses-in-bloomfield-bath" element={<BathBloomfieldHouse3/>}/>
<Route path="4-bedroom-student-houses-in-bloomfield-bath" element={<BathBloomfieldHouse4/>}/>
<Route path="5-bedroom-student-houses-in-bloomfield-bath" element={<BathBloomfieldHouse5/>}/>
<Route path="6-bedroom-student-houses-in-bloomfield-bath" element={<BathBloomfieldHouse6/>}/>
<Route path="7-bedroom-student-houses-in-bloomfield-bath" element={<BathBloomfieldHouse7/>}/>
<Route path="8-bedroom-student-houses-in-bloomfield-bath" element={<BathBloomfieldHouse8/>}/>
<Route path="10-bedroom-student-houses-in-bloomfield-bath" element={<BathBloomfieldHouse10/>}/>
<Route path="studio-apartments-for-students-in-bloomfield-bath" element={<BathBloomfieldStudio1/>}/>
<Route path="student-houses-in-kingsway-bath" element={<BathKingswayHouse/>}/>
<Route path="1-bedroom-student-flats-in-kingsway-bath" element={<BathKingswayFlat1/>}/>
<Route path="2-bedroom-student-flats-in-kingsway-bath" element={<BathKingswayFlat2/>}/>
<Route path="3-bedroom-student-houses-in-kingsway-bath" element={<BathKingswayHouse3/>}/>
<Route path="4-bedroom-student-houses-in-kingsway-bath" element={<BathKingswayHouse4/>}/>
<Route path="5-bedroom-student-houses-in-kingsway-bath" element={<BathKingswayHouse5/>}/>
<Route path="6-bedroom-student-houses-in-kingsway-bath" element={<BathKingswayHouse6/>}/>
<Route path="7-bedroom-student-houses-in-kingsway-bath" element={<BathKingswayHouse7/>}/>
<Route path="8-bedroom-student-houses-in-kingsway-bath" element={<BathKingswayHouse8/>}/>
<Route path="10-bedroom-student-houses-in-kingsway-bath" element={<BathKingswayHouse10/>}/>
<Route path="studio-apartments-for-students-in-kingsway-bath" element={<BathKingswayStudio1/>}/>
<Route path="student-houses-in-moorlands-bath" element={<BathMoorlandsHouse/>}/>
<Route path="1-bedroom-student-flats-in-moorlands-bath" element={<BathMoorlandsFlat1/>}/>
<Route path="2-bedroom-student-flats-in-moorlands-bath" element={<BathMoorlandsFlat2/>}/>
<Route path="3-bedroom-student-houses-in-moorlands-bath" element={<BathMoorlandsHouse3/>}/>
<Route path="4-bedroom-student-houses-in-moorlands-bath" element={<BathMoorlandsHouse4/>}/>
<Route path="5-bedroom-student-houses-in-moorlands-bath" element={<BathMoorlandsHouse5/>}/>
<Route path="6-bedroom-student-houses-in-moorlands-bath" element={<BathMoorlandsHouse6/>}/>
<Route path="7-bedroom-student-houses-in-moorlands-bath" element={<BathMoorlandsHouse7/>}/>
<Route path="8-bedroom-student-houses-in-moorlands-bath" element={<BathMoorlandsHouse8/>}/>
<Route path="10-bedroom-student-houses-in-moorlands-bath" element={<BathMoorlandsHouse10/>}/>
<Route path="studio-apartments-for-students-in-moorlands-bath" element={<BathMoorlandsStudio1/>}/>
<Route path="student-houses-in-sladebrook-bath" element={<BathSladebrookHouse/>}/>
<Route path="1-bedroom-student-flats-in-sladebrook-bath" element={<BathSladebrookFlat1/>}/>
<Route path="2-bedroom-student-flats-in-sladebrook-bath" element={<BathSladebrookFlat2/>}/>
<Route path="3-bedroom-student-houses-in-sladebrook-bath" element={<BathSladebrookHouse3/>}/>
<Route path="4-bedroom-student-houses-in-sladebrook-bath" element={<BathSladebrookHouse4/>}/>
<Route path="5-bedroom-student-houses-in-sladebrook-bath" element={<BathSladebrookHouse5/>}/>
<Route path="6-bedroom-student-houses-in-sladebrook-bath" element={<BathSladebrookHouse6/>}/>
<Route path="7-bedroom-student-houses-in-sladebrook-bath" element={<BathSladebrookHouse7/>}/>
<Route path="8-bedroom-student-houses-in-sladebrook-bath" element={<BathSladebrookHouse8/>}/>
<Route path="10-bedroom-student-houses-in-sladebrook-bath" element={<BathSladebrookHouse10/>}/>
<Route path="studio-apartments-for-students-in-sladebrook-bath" element={<BathSladebrookStudio1/>}/>
<Route path="student-houses-in-the-oval-bath" element={<BathTheOvalHouse/>}/>
<Route path="1-bedroom-student-flats-in-the-oval-bath" element={<BathTheOvalFlat1/>}/>
<Route path="2-bedroom-student-flats-in-the-oval-bath" element={<BathTheOvalFlat2/>}/>
<Route path="3-bedroom-student-houses-in-the-oval-bath" element={<BathTheOvalHouse3/>}/>
<Route path="4-bedroom-student-houses-in-the-oval-bath" element={<BathTheOvalHouse4/>}/>
<Route path="5-bedroom-student-houses-in-the-oval-bath" element={<BathTheOvalHouse5/>}/>
<Route path="6-bedroom-student-houses-in-the-oval-bath" element={<BathTheOvalHouse6/>}/>
<Route path="7-bedroom-student-houses-in-the-oval-bath" element={<BathTheOvalHouse7/>}/>
<Route path="8-bedroom-student-houses-in-the-oval-bath" element={<BathTheOvalHouse8/>}/>
<Route path="10-bedroom-student-houses-in-the-oval-bath" element={<BathTheOvalHouse10/>}/>
<Route path="studio-apartments-for-students-in-the-oval-bath" element={<BathTheOvalStudio1/>}/>
<Route path="student-houses-in-twerton-hill-bath" element={<BathTwertonHillHouse/>}/>
<Route path="1-bedroom-student-flats-in-twerton-hill-bath" element={<BathTwertonHillFlat1/>}/>
<Route path="2-bedroom-student-flats-in-twerton-hill-bath" element={<BathTwertonHillFlat2/>}/>
<Route path="3-bedroom-student-houses-in-twerton-hill-bath" element={<BathTwertonHillHouse3/>}/>
<Route path="4-bedroom-student-houses-in-twerton-hill-bath" element={<BathTwertonHillHouse4/>}/>
<Route path="5-bedroom-student-houses-in-twerton-hill-bath" element={<BathTwertonHillHouse5/>}/>
<Route path="6-bedroom-student-houses-in-twerton-hill-bath" element={<BathTwertonHillHouse6/>}/>
<Route path="7-bedroom-student-houses-in-twerton-hill-bath" element={<BathTwertonHillHouse7/>}/>
<Route path="8-bedroom-student-houses-in-twerton-hill-bath" element={<BathTwertonHillHouse8/>}/>
<Route path="10-bedroom-student-houses-in-twerton-hill-bath" element={<BathTwertonHillHouse10/>}/>
<Route path="studio-apartments-for-students-in-twerton-hill-bath" element={<BathTwertonHillStudio1/>}/>
<Route path="student-houses-in-southdown-bath" element={<BathSouthdownHouse/>}/>
<Route path="1-bedroom-student-flats-in-southdown-bath" element={<BathSouthdownFlat1/>}/>
<Route path="3-bedroom-student-houses-in-southdown-bath" element={<BathSouthdownHouse3/>}/>
<Route path="4-bedroom-student-houses-in-southdown-bath" element={<BathSouthdownHouse4/>}/>
<Route path="5-bedroom-student-houses-in-southdown-bath" element={<BathSouthdownHouse5/>}/>
<Route path="6-bedroom-student-houses-in-southdown-bath" element={<BathSouthdownHouse6/>}/>
<Route path="7-bedroom-student-houses-in-southdown-bath" element={<BathSouthdownHouse7/>}/>
<Route path="8-bedroom-student-houses-in-southdown-bath" element={<BathSouthdownHouse8/>}/>
<Route path="10-bedroom-student-houses-in-southdown-bath" element={<BathSouthdownHouse10/>}/>
<Route path="student-houses-in-east-twerton-bath" element={<BathEastTwertonHouse/>}/>
<Route path="1-bedroom-student-flats-in-east-twerton-bath" element={<BathEastTwertonFlat1/>}/>
<Route path="2-bedroom-student-flats-in-east-twerton-bath" element={<BathEastTwertonFlat2/>}/>
<Route path="3-bedroom-student-flats-in-east-twerton-bath" element={<BathEastTwertonFlat3/>}/>
<Route path="5-bedroom-student-flats-in-east-twerton-bath" element={<BathEastTwertonFlat5/>}/>
<Route path="3-bedroom-student-houses-in-east-twerton-bath" element={<BathEastTwertonHouse3/>}/>
<Route path="4-bedroom-student-houses-in-east-twerton-bath" element={<BathEastTwertonHouse4/>}/>
<Route path="5-bedroom-student-houses-in-east-twerton-bath" element={<BathEastTwertonHouse5/>}/>
<Route path="6-bedroom-student-houses-in-east-twerton-bath" element={<BathEastTwertonHouse6/>}/>
<Route path="7-bedroom-student-houses-in-east-twerton-bath" element={<BathEastTwertonHouse7/>}/>
<Route path="8-bedroom-student-houses-in-east-twerton-bath" element={<BathEastTwertonHouse8/>}/>
<Route path="9-bedroom-student-houses-in-east-twerton-bath" element={<BathEastTwertonHouse9/>}/>
<Route path="student-houses-in-penn-hill-bath" element={<BathPennHillHouse/>}/>
<Route path="1-bedroom-student-flats-in-penn-hill-bath" element={<BathPennHillFlat1/>}/>
<Route path="2-bedroom-student-flats-in-penn-hill-bath" element={<BathPennHillFlat2/>}/>
<Route path="3-bedroom-student-flats-in-penn-hill-bath" element={<BathPennHillFlat3/>}/>
<Route path="5-bedroom-student-flats-in-penn-hill-bath" element={<BathPennHillFlat5/>}/>
<Route path="3-bedroom-student-houses-in-penn-hill-bath" element={<BathPennHillHouse3/>}/>
<Route path="4-bedroom-student-houses-in-penn-hill-bath" element={<BathPennHillHouse4/>}/>
<Route path="5-bedroom-student-houses-in-penn-hill-bath" element={<BathPennHillHouse5/>}/>
<Route path="6-bedroom-student-houses-in-penn-hill-bath" element={<BathPennHillHouse6/>}/>
<Route path="7-bedroom-student-houses-in-penn-hill-bath" element={<BathPennHillHouse7/>}/>
<Route path="8-bedroom-student-houses-in-penn-hill-bath" element={<BathPennHillHouse8/>}/>
<Route path="9-bedroom-student-houses-in-penn-hill-bath" element={<BathPennHillHouse9/>}/>
<Route path="student-houses-in-south-twerton-bath" element={<BathSouthTwertonHouse/>}/>
<Route path="1-bedroom-student-flats-in-south-twerton-bath" element={<BathSouthTwertonFlat1/>}/>
<Route path="2-bedroom-student-flats-in-south-twerton-bath" element={<BathSouthTwertonFlat2/>}/>
<Route path="3-bedroom-student-flats-in-south-twerton-bath" element={<BathSouthTwertonFlat3/>}/>
<Route path="5-bedroom-student-flats-in-south-twerton-bath" element={<BathSouthTwertonFlat5/>}/>
<Route path="3-bedroom-student-houses-in-south-twerton-bath" element={<BathSouthTwertonHouse3/>}/>
<Route path="4-bedroom-student-houses-in-south-twerton-bath" element={<BathSouthTwertonHouse4/>}/>
<Route path="5-bedroom-student-houses-in-south-twerton-bath" element={<BathSouthTwertonHouse5/>}/>
<Route path="6-bedroom-student-houses-in-south-twerton-bath" element={<BathSouthTwertonHouse6/>}/>
<Route path="7-bedroom-student-houses-in-south-twerton-bath" element={<BathSouthTwertonHouse7/>}/>
<Route path="8-bedroom-student-houses-in-south-twerton-bath" element={<BathSouthTwertonHouse8/>}/>
<Route path="9-bedroom-student-houses-in-south-twerton-bath" element={<BathSouthTwertonHouse9/>}/>
<Route path="student-houses-in-twerton-bath" element={<BathTwertonHouse/>}/>
<Route path="1-bedroom-student-flats-in-twerton-bath" element={<BathTwertonFlat1/>}/>
<Route path="2-bedroom-student-flats-in-twerton-bath" element={<BathTwertonFlat2/>}/>
<Route path="3-bedroom-student-flats-in-twerton-bath" element={<BathTwertonFlat3/>}/>
<Route path="5-bedroom-student-flats-in-twerton-bath" element={<BathTwertonFlat5/>}/>
<Route path="3-bedroom-student-houses-in-twerton-bath" element={<BathTwertonHouse3/>}/>
<Route path="4-bedroom-student-houses-in-twerton-bath" element={<BathTwertonHouse4/>}/>
<Route path="5-bedroom-student-houses-in-twerton-bath" element={<BathTwertonHouse5/>}/>
<Route path="6-bedroom-student-houses-in-twerton-bath" element={<BathTwertonHouse6/>}/>
<Route path="7-bedroom-student-houses-in-twerton-bath" element={<BathTwertonHouse7/>}/>
<Route path="8-bedroom-student-houses-in-twerton-bath" element={<BathTwertonHouse8/>}/>
<Route path="9-bedroom-student-houses-in-twerton-bath" element={<BathTwertonHouse9/>}/>
<Route path="studio-apartments-for-students-in-twerton-bath" element={<BathTwertonStudio1/>}/>
<Route path="student-houses-in-lower-weston-bath" element={<BathLowerWestonHouse/>}/>
<Route path="1-bedroom-student-flats-in-lower-weston-bath" element={<BathLowerWestonFlat1/>}/>
<Route path="2-bedroom-student-flats-in-lower-weston-bath" element={<BathLowerWestonFlat2/>}/>
<Route path="3-bedroom-student-flats-in-lower-weston-bath" element={<BathLowerWestonFlat3/>}/>
<Route path="5-bedroom-student-flats-in-lower-weston-bath" element={<BathLowerWestonFlat5/>}/>
<Route path="3-bedroom-student-houses-in-lower-weston-bath" element={<BathLowerWestonHouse3/>}/>
<Route path="4-bedroom-student-houses-in-lower-weston-bath" element={<BathLowerWestonHouse4/>}/>
<Route path="5-bedroom-student-houses-in-lower-weston-bath" element={<BathLowerWestonHouse5/>}/>
<Route path="6-bedroom-student-houses-in-lower-weston-bath" element={<BathLowerWestonHouse6/>}/>
<Route path="7-bedroom-student-houses-in-lower-weston-bath" element={<BathLowerWestonHouse7/>}/>
<Route path="8-bedroom-student-houses-in-lower-weston-bath" element={<BathLowerWestonHouse8/>}/>
<Route path="9-bedroom-student-houses-in-lower-weston-bath" element={<BathLowerWestonHouse9/>}/>
<Route path="student-houses-in-odd-down-bath" element={<BathOddDownHouse/>}/>
<Route path="2-bedroom-student-flats-in-odd-down-bath" element={<BathOddDownFlat2/>}/>
<Route path="3-bedroom-student-flats-in-odd-down-bath" element={<BathOddDownFlat3/>}/>
<Route path="4-bedroom-student-flats-in-odd-down-bath" element={<BathOddDownFlat4/>}/>
<Route path="2-bedroom-student-houses-in-odd-down-bath" element={<BathOddDownHouse2/>}/>
<Route path="3-bedroom-student-houses-in-odd-down-bath" element={<BathOddDownHouse3/>}/>
<Route path="4-bedroom-student-houses-in-odd-down-bath" element={<BathOddDownHouse4/>}/>
<Route path="5-bedroom-student-houses-in-odd-down-bath" element={<BathOddDownHouse5/>}/>
<Route path="6-bedroom-student-houses-in-odd-down-bath" element={<BathOddDownHouse6/>}/>
<Route path="7-bedroom-student-houses-in-odd-down-bath" element={<BathOddDownHouse7/>}/>
<Route path="student-flats-in-bath-spa-bath" element={<BathBathSpaFlat/>}/>
<Route path="student-flats-in-avon-park-bath" element={<BathAvonParkFlat/>}/>
<Route path="1-bedroom-student-flats-in-avon-park-bath" element={<BathAvonParkFlat1/>}/>
<Route path="2-bedroom-student-flats-in-avon-park-bath" element={<BathAvonParkFlat2/>}/>
<Route path="3-bedroom-student-flats-in-avon-park-bath" element={<BathAvonParkFlat3/>}/>
<Route path="4-bedroom-student-flats-in-avon-park-bath" element={<BathAvonParkFlat4/>}/>
<Route path="5-bedroom-student-flats-in-avon-park-bath" element={<BathAvonParkFlat5/>}/>
<Route path="3-bedroom-student-houses-in-avon-park-bath" element={<BathAvonParkHouse3/>}/>
<Route path="4-bedroom-student-houses-in-avon-park-bath" element={<BathAvonParkHouse4/>}/>
<Route path="5-bedroom-student-houses-in-avon-park-bath" element={<BathAvonParkHouse5/>}/>
<Route path="6-bedroom-student-houses-in-avon-park-bath" element={<BathAvonParkHouse6/>}/>
<Route path="7-bedroom-student-houses-in-avon-park-bath" element={<BathAvonParkHouse7/>}/>
<Route path="9-bedroom-student-houses-in-avon-park-bath" element={<BathAvonParkHouse9/>}/>
<Route path="studio-apartments-for-students-in-avon-park-bath" element={<BathAvonParkStudio1/>}/>
<Route path="student-flats-in-beacon-hill-bath" element={<BathBeaconHillFlat/>}/>
<Route path="1-bedroom-student-flats-in-beacon-hill-bath" element={<BathBeaconHillFlat1/>}/>
<Route path="2-bedroom-student-flats-in-beacon-hill-bath" element={<BathBeaconHillFlat2/>}/>
<Route path="3-bedroom-student-flats-in-beacon-hill-bath" element={<BathBeaconHillFlat3/>}/>
<Route path="4-bedroom-student-flats-in-beacon-hill-bath" element={<BathBeaconHillFlat4/>}/>
<Route path="5-bedroom-student-flats-in-beacon-hill-bath" element={<BathBeaconHillFlat5/>}/>
<Route path="3-bedroom-student-houses-in-beacon-hill-bath" element={<BathBeaconHillHouse3/>}/>
<Route path="4-bedroom-student-houses-in-beacon-hill-bath" element={<BathBeaconHillHouse4/>}/>
<Route path="5-bedroom-student-houses-in-beacon-hill-bath" element={<BathBeaconHillHouse5/>}/>
<Route path="6-bedroom-student-houses-in-beacon-hill-bath" element={<BathBeaconHillHouse6/>}/>
<Route path="7-bedroom-student-houses-in-beacon-hill-bath" element={<BathBeaconHillHouse7/>}/>
<Route path="9-bedroom-student-houses-in-beacon-hill-bath" element={<BathBeaconHillHouse9/>}/>
<Route path="studio-apartments-for-students-in-beacon-hill-bath" element={<BathBeaconHillStudio1/>}/>
<Route path="student-flats-in-kensington-bath" element={<BathKensingtonFlat/>}/>
<Route path="1-bedroom-student-flats-in-kensington-bath" element={<BathKensingtonFlat1/>}/>
<Route path="2-bedroom-student-flats-in-kensington-bath" element={<BathKensingtonFlat2/>}/>
<Route path="3-bedroom-student-flats-in-kensington-bath" element={<BathKensingtonFlat3/>}/>
<Route path="4-bedroom-student-flats-in-kensington-bath" element={<BathKensingtonFlat4/>}/>
<Route path="5-bedroom-student-flats-in-kensington-bath" element={<BathKensingtonFlat5/>}/>
<Route path="3-bedroom-student-houses-in-kensington-bath" element={<BathKensingtonHouse3/>}/>
<Route path="4-bedroom-student-houses-in-kensington-bath" element={<BathKensingtonHouse4/>}/>
<Route path="5-bedroom-student-houses-in-kensington-bath" element={<BathKensingtonHouse5/>}/>
<Route path="6-bedroom-student-houses-in-kensington-bath" element={<BathKensingtonHouse6/>}/>
<Route path="7-bedroom-student-houses-in-kensington-bath" element={<BathKensingtonHouse7/>}/>
<Route path="9-bedroom-student-houses-in-kensington-bath" element={<BathKensingtonHouse9/>}/>
<Route path="studio-apartments-for-students-in-kensington-bath" element={<BathKensingtonStudio1/>}/>
<Route path="student-flats-in-locksbrook-bath" element={<BathLocksbrookFlat/>}/>
<Route path="1-bedroom-student-flats-in-locksbrook-bath" element={<BathLocksbrookFlat1/>}/>
<Route path="2-bedroom-student-flats-in-locksbrook-bath" element={<BathLocksbrookFlat2/>}/>
<Route path="3-bedroom-student-flats-in-locksbrook-bath" element={<BathLocksbrookFlat3/>}/>
<Route path="4-bedroom-student-flats-in-locksbrook-bath" element={<BathLocksbrookFlat4/>}/>
<Route path="5-bedroom-student-flats-in-locksbrook-bath" element={<BathLocksbrookFlat5/>}/>
<Route path="3-bedroom-student-houses-in-locksbrook-bath" element={<BathLocksbrookHouse3/>}/>
<Route path="4-bedroom-student-houses-in-locksbrook-bath" element={<BathLocksbrookHouse4/>}/>
<Route path="5-bedroom-student-houses-in-locksbrook-bath" element={<BathLocksbrookHouse5/>}/>
<Route path="6-bedroom-student-houses-in-locksbrook-bath" element={<BathLocksbrookHouse6/>}/>
<Route path="7-bedroom-student-houses-in-locksbrook-bath" element={<BathLocksbrookHouse7/>}/>
<Route path="9-bedroom-student-houses-in-locksbrook-bath" element={<BathLocksbrookHouse9/>}/>
<Route path="studio-apartments-for-students-in-locksbrook-bath" element={<BathLocksbrookStudio1/>}/>
<Route path="student-flats-in-primrose-hill-bath" element={<BathPrimroseHillFlat/>}/>
<Route path="1-bedroom-student-flats-in-primrose-hill-bath" element={<BathPrimroseHillFlat1/>}/>
<Route path="2-bedroom-student-flats-in-primrose-hill-bath" element={<BathPrimroseHillFlat2/>}/>
<Route path="3-bedroom-student-flats-in-primrose-hill-bath" element={<BathPrimroseHillFlat3/>}/>
<Route path="4-bedroom-student-flats-in-primrose-hill-bath" element={<BathPrimroseHillFlat4/>}/>
<Route path="5-bedroom-student-flats-in-primrose-hill-bath" element={<BathPrimroseHillFlat5/>}/>
<Route path="3-bedroom-student-houses-in-primrose-hill-bath" element={<BathPrimroseHillHouse3/>}/>
<Route path="4-bedroom-student-houses-in-primrose-hill-bath" element={<BathPrimroseHillHouse4/>}/>
<Route path="5-bedroom-student-houses-in-primrose-hill-bath" element={<BathPrimroseHillHouse5/>}/>
<Route path="6-bedroom-student-houses-in-primrose-hill-bath" element={<BathPrimroseHillHouse6/>}/>
<Route path="7-bedroom-student-houses-in-primrose-hill-bath" element={<BathPrimroseHillHouse7/>}/>
<Route path="9-bedroom-student-houses-in-primrose-hill-bath" element={<BathPrimroseHillHouse9/>}/>
<Route path="studio-apartments-for-students-in-primrose-hill-bath" element={<BathPrimroseHillStudio1/>}/>
<Route path="student-flats-in-raglands-bath" element={<BathRaglandsFlat/>}/>
<Route path="1-bedroom-student-flats-in-raglands-bath" element={<BathRaglandsFlat1/>}/>
<Route path="2-bedroom-student-flats-in-raglands-bath" element={<BathRaglandsFlat2/>}/>
<Route path="3-bedroom-student-flats-in-raglands-bath" element={<BathRaglandsFlat3/>}/>
<Route path="4-bedroom-student-flats-in-raglands-bath" element={<BathRaglandsFlat4/>}/>
<Route path="5-bedroom-student-flats-in-raglands-bath" element={<BathRaglandsFlat5/>}/>
<Route path="3-bedroom-student-houses-in-raglands-bath" element={<BathRaglandsHouse3/>}/>
<Route path="4-bedroom-student-houses-in-raglands-bath" element={<BathRaglandsHouse4/>}/>
<Route path="5-bedroom-student-houses-in-raglands-bath" element={<BathRaglandsHouse5/>}/>
<Route path="6-bedroom-student-houses-in-raglands-bath" element={<BathRaglandsHouse6/>}/>
<Route path="7-bedroom-student-houses-in-raglands-bath" element={<BathRaglandsHouse7/>}/>
<Route path="9-bedroom-student-houses-in-raglands-bath" element={<BathRaglandsHouse9/>}/>
<Route path="studio-apartments-for-students-in-raglands-bath" element={<BathRaglandsStudio1/>}/>
<Route path="student-flats-in-rosehill-bath" element={<BathRosehillFlat/>}/>
<Route path="1-bedroom-student-flats-in-rosehill-bath" element={<BathRosehillFlat1/>}/>
<Route path="2-bedroom-student-flats-in-rosehill-bath" element={<BathRosehillFlat2/>}/>
<Route path="3-bedroom-student-flats-in-rosehill-bath" element={<BathRosehillFlat3/>}/>
<Route path="4-bedroom-student-flats-in-rosehill-bath" element={<BathRosehillFlat4/>}/>
<Route path="5-bedroom-student-flats-in-rosehill-bath" element={<BathRosehillFlat5/>}/>
<Route path="3-bedroom-student-houses-in-rosehill-bath" element={<BathRosehillHouse3/>}/>
<Route path="4-bedroom-student-houses-in-rosehill-bath" element={<BathRosehillHouse4/>}/>
<Route path="5-bedroom-student-houses-in-rosehill-bath" element={<BathRosehillHouse5/>}/>
<Route path="6-bedroom-student-houses-in-rosehill-bath" element={<BathRosehillHouse6/>}/>
<Route path="7-bedroom-student-houses-in-rosehill-bath" element={<BathRosehillHouse7/>}/>
<Route path="9-bedroom-student-houses-in-rosehill-bath" element={<BathRosehillHouse9/>}/>
<Route path="studio-apartments-for-students-in-rosehill-bath" element={<BathRosehillStudio1/>}/>
<Route path="student-flats-in-rudmore-park-bath" element={<BathRudmoreParkFlat/>}/>
<Route path="1-bedroom-student-flats-in-rudmore-park-bath" element={<BathRudmoreParkFlat1/>}/>
<Route path="2-bedroom-student-flats-in-rudmore-park-bath" element={<BathRudmoreParkFlat2/>}/>
<Route path="3-bedroom-student-flats-in-rudmore-park-bath" element={<BathRudmoreParkFlat3/>}/>
<Route path="4-bedroom-student-flats-in-rudmore-park-bath" element={<BathRudmoreParkFlat4/>}/>
<Route path="5-bedroom-student-flats-in-rudmore-park-bath" element={<BathRudmoreParkFlat5/>}/>
<Route path="3-bedroom-student-houses-in-rudmore-park-bath" element={<BathRudmoreParkHouse3/>}/>
<Route path="4-bedroom-student-houses-in-rudmore-park-bath" element={<BathRudmoreParkHouse4/>}/>
<Route path="5-bedroom-student-houses-in-rudmore-park-bath" element={<BathRudmoreParkHouse5/>}/>
<Route path="6-bedroom-student-houses-in-rudmore-park-bath" element={<BathRudmoreParkHouse6/>}/>
<Route path="7-bedroom-student-houses-in-rudmore-park-bath" element={<BathRudmoreParkHouse7/>}/>
<Route path="9-bedroom-student-houses-in-rudmore-park-bath" element={<BathRudmoreParkHouse9/>}/>
<Route path="studio-apartments-for-students-in-rudmore-park-bath" element={<BathRudmoreParkStudio1/>}/>
<Route path="student-flats-in-snow-hill-bath" element={<BathSnowHillFlat/>}/>
<Route path="1-bedroom-student-flats-in-snow-hill-bath" element={<BathSnowHillFlat1/>}/>
<Route path="2-bedroom-student-flats-in-snow-hill-bath" element={<BathSnowHillFlat2/>}/>
<Route path="3-bedroom-student-flats-in-snow-hill-bath" element={<BathSnowHillFlat3/>}/>
<Route path="4-bedroom-student-flats-in-snow-hill-bath" element={<BathSnowHillFlat4/>}/>
<Route path="5-bedroom-student-flats-in-snow-hill-bath" element={<BathSnowHillFlat5/>}/>
<Route path="3-bedroom-student-houses-in-snow-hill-bath" element={<BathSnowHillHouse3/>}/>
<Route path="4-bedroom-student-houses-in-snow-hill-bath" element={<BathSnowHillHouse4/>}/>
<Route path="5-bedroom-student-houses-in-snow-hill-bath" element={<BathSnowHillHouse5/>}/>
<Route path="6-bedroom-student-houses-in-snow-hill-bath" element={<BathSnowHillHouse6/>}/>
<Route path="7-bedroom-student-houses-in-snow-hill-bath" element={<BathSnowHillHouse7/>}/>
<Route path="9-bedroom-student-houses-in-snow-hill-bath" element={<BathSnowHillHouse9/>}/>
<Route path="studio-apartments-for-students-in-snow-hill-bath" element={<BathSnowHillStudio1/>}/>
<Route path="student-flats-in-weston-park-bath" element={<BathWestonParkFlat/>}/>
<Route path="1-bedroom-student-flats-in-weston-park-bath" element={<BathWestonParkFlat1/>}/>
<Route path="2-bedroom-student-flats-in-weston-park-bath" element={<BathWestonParkFlat2/>}/>
<Route path="3-bedroom-student-flats-in-weston-park-bath" element={<BathWestonParkFlat3/>}/>
<Route path="4-bedroom-student-flats-in-weston-park-bath" element={<BathWestonParkFlat4/>}/>
<Route path="5-bedroom-student-flats-in-weston-park-bath" element={<BathWestonParkFlat5/>}/>
<Route path="3-bedroom-student-houses-in-weston-park-bath" element={<BathWestonParkHouse3/>}/>
<Route path="4-bedroom-student-houses-in-weston-park-bath" element={<BathWestonParkHouse4/>}/>
<Route path="5-bedroom-student-houses-in-weston-park-bath" element={<BathWestonParkHouse5/>}/>
<Route path="6-bedroom-student-houses-in-weston-park-bath" element={<BathWestonParkHouse6/>}/>
<Route path="7-bedroom-student-houses-in-weston-park-bath" element={<BathWestonParkHouse7/>}/>
<Route path="9-bedroom-student-houses-in-weston-park-bath" element={<BathWestonParkHouse9/>}/>
<Route path="studio-apartments-for-students-in-weston-park-bath" element={<BathWestonParkStudio1/>}/>
<Route path="student-flats-in-yomede-park-bath" element={<BathYomedeParkFlat/>}/>
<Route path="1-bedroom-student-flats-in-yomede-park-bath" element={<BathYomedeParkFlat1/>}/>
<Route path="2-bedroom-student-flats-in-yomede-park-bath" element={<BathYomedeParkFlat2/>}/>
<Route path="3-bedroom-student-flats-in-yomede-park-bath" element={<BathYomedeParkFlat3/>}/>
<Route path="4-bedroom-student-flats-in-yomede-park-bath" element={<BathYomedeParkFlat4/>}/>
<Route path="5-bedroom-student-flats-in-yomede-park-bath" element={<BathYomedeParkFlat5/>}/>
<Route path="3-bedroom-student-houses-in-yomede-park-bath" element={<BathYomedeParkHouse3/>}/>
<Route path="4-bedroom-student-houses-in-yomede-park-bath" element={<BathYomedeParkHouse4/>}/>
<Route path="5-bedroom-student-houses-in-yomede-park-bath" element={<BathYomedeParkHouse5/>}/>
<Route path="6-bedroom-student-houses-in-yomede-park-bath" element={<BathYomedeParkHouse6/>}/>
<Route path="7-bedroom-student-houses-in-yomede-park-bath" element={<BathYomedeParkHouse7/>}/>
<Route path="9-bedroom-student-houses-in-yomede-park-bath" element={<BathYomedeParkHouse9/>}/>
<Route path="studio-apartments-for-students-in-yomede-park-bath" element={<BathYomedeParkStudio1/>}/>
<Route path="student-flats-in-beechen-cliff-bath" element={<BathBeechenCliffFlat/>}/>
<Route path="1-bedroom-student-flats-in-beechen-cliff-bath" element={<BathBeechenCliffFlat1/>}/>
<Route path="2-bedroom-student-flats-in-beechen-cliff-bath" element={<BathBeechenCliffFlat2/>}/>
<Route path="3-bedroom-student-flats-in-beechen-cliff-bath" element={<BathBeechenCliffFlat3/>}/>
<Route path="4-bedroom-student-flats-in-beechen-cliff-bath" element={<BathBeechenCliffFlat4/>}/>
<Route path="5-bedroom-student-flats-in-beechen-cliff-bath" element={<BathBeechenCliffFlat5/>}/>
<Route path="6-bedroom-student-flats-in-beechen-cliff-bath" element={<BathBeechenCliffFlat6/>}/>
<Route path="9-bedroom-student-flats-in-beechen-cliff-bath" element={<BathBeechenCliffFlat9/>}/>
<Route path="10-bedroom-student-flats-in-beechen-cliff-bath" element={<BathBeechenCliffFlat10/>}/>
<Route path="studio-apartments-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffStudio1/>}/>
<Route path="student-flats-in-crescent-gardens-bath" element={<BathCrescentGardensFlat/>}/>
<Route path="1-bedroom-student-flats-in-crescent-gardens-bath" element={<BathCrescentGardensFlat1/>}/>
<Route path="2-bedroom-student-flats-in-crescent-gardens-bath" element={<BathCrescentGardensFlat2/>}/>
<Route path="3-bedroom-student-flats-in-crescent-gardens-bath" element={<BathCrescentGardensFlat3/>}/>
<Route path="4-bedroom-student-flats-in-crescent-gardens-bath" element={<BathCrescentGardensFlat4/>}/>
<Route path="5-bedroom-student-flats-in-crescent-gardens-bath" element={<BathCrescentGardensFlat5/>}/>
<Route path="6-bedroom-student-flats-in-crescent-gardens-bath" element={<BathCrescentGardensFlat6/>}/>
<Route path="9-bedroom-student-flats-in-crescent-gardens-bath" element={<BathCrescentGardensFlat9/>}/>
<Route path="10-bedroom-student-flats-in-crescent-gardens-bath" element={<BathCrescentGardensFlat10/>}/>
<Route path="studio-apartments-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensStudio1/>}/>
<Route path="studio-apartments-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffStudio/>}/>
<Route path="studio-apartments-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensStudio/>}/>
<Route path="studio-apartments-for-students-in-dolemeads-bath" element={<BathDolemeadsStudio/>}/>
<Route path="1-bedroom-student-flats-in-dolemeads-bath" element={<BathDolemeadsFlat1/>}/>
<Route path="2-bedroom-student-flats-in-dolemeads-bath" element={<BathDolemeadsFlat2/>}/>
<Route path="3-bedroom-student-flats-in-dolemeads-bath" element={<BathDolemeadsFlat3/>}/>
<Route path="4-bedroom-student-flats-in-dolemeads-bath" element={<BathDolemeadsFlat4/>}/>
<Route path="5-bedroom-student-flats-in-dolemeads-bath" element={<BathDolemeadsFlat5/>}/>
<Route path="6-bedroom-student-flats-in-dolemeads-bath" element={<BathDolemeadsFlat6/>}/>
<Route path="9-bedroom-student-flats-in-dolemeads-bath" element={<BathDolemeadsFlat9/>}/>
<Route path="10-bedroom-student-flats-in-dolemeads-bath" element={<BathDolemeadsFlat10/>}/>
<Route path="studio-apartments-for-students-in-dolemeads-bath" element={<BathDolemeadsStudio1/>}/>
<Route path="studio-apartments-for-students-in-hat-bath" element={<BathHatStudio/>}/>
<Route path="1-bedroom-student-flats-in-hat-bath" element={<BathHatFlat1/>}/>
<Route path="2-bedroom-student-flats-in-hat-bath" element={<BathHatFlat2/>}/>
<Route path="3-bedroom-student-flats-in-hat-bath" element={<BathHatFlat3/>}/>
<Route path="4-bedroom-student-flats-in-hat-bath" element={<BathHatFlat4/>}/>
<Route path="5-bedroom-student-flats-in-hat-bath" element={<BathHatFlat5/>}/>
<Route path="6-bedroom-student-flats-in-hat-bath" element={<BathHatFlat6/>}/>
<Route path="9-bedroom-student-flats-in-hat-bath" element={<BathHatFlat9/>}/>
<Route path="10-bedroom-student-flats-in-hat-bath" element={<BathHatFlat10/>}/>
<Route path="studio-apartments-for-students-in-hat-bath" element={<BathHatStudio1/>}/>
<Route path="studio-apartments-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsStudio/>}/>
<Route path="1-bedroom-student-flats-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat1/>}/>
<Route path="2-bedroom-student-flats-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat2/>}/>
<Route path="3-bedroom-student-flats-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat3/>}/>
<Route path="4-bedroom-student-flats-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat4/>}/>
<Route path="5-bedroom-student-flats-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat5/>}/>
<Route path="6-bedroom-student-flats-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat6/>}/>
<Route path="9-bedroom-student-flats-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat9/>}/>
<Route path="10-bedroom-student-flats-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat10/>}/>
<Route path="studio-apartments-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsStudio1/>}/>
<Route path="studio-apartments-for-students-in-kingsmead-bath" element={<BathKingsmeadStudio/>}/>
<Route path="1-bedroom-student-flats-in-kingsmead-bath" element={<BathKingsmeadFlat1/>}/>
<Route path="2-bedroom-student-flats-in-kingsmead-bath" element={<BathKingsmeadFlat2/>}/>
<Route path="3-bedroom-student-flats-in-kingsmead-bath" element={<BathKingsmeadFlat3/>}/>
<Route path="4-bedroom-student-flats-in-kingsmead-bath" element={<BathKingsmeadFlat4/>}/>
<Route path="5-bedroom-student-flats-in-kingsmead-bath" element={<BathKingsmeadFlat5/>}/>
<Route path="6-bedroom-student-flats-in-kingsmead-bath" element={<BathKingsmeadFlat6/>}/>
<Route path="9-bedroom-student-flats-in-kingsmead-bath" element={<BathKingsmeadFlat9/>}/>
<Route path="10-bedroom-student-flats-in-kingsmead-bath" element={<BathKingsmeadFlat10/>}/>
<Route path="studio-apartments-for-students-in-kingsmead-bath" element={<BathKingsmeadStudio1/>}/>
<Route path="studio-apartments-for-students-in-lambridge-bath" element={<BathLambridgeStudio/>}/>
<Route path="1-bedroom-student-flats-in-lambridge-bath" element={<BathLambridgeFlat1/>}/>
<Route path="2-bedroom-student-flats-in-lambridge-bath" element={<BathLambridgeFlat2/>}/>
<Route path="3-bedroom-student-flats-in-lambridge-bath" element={<BathLambridgeFlat3/>}/>
<Route path="4-bedroom-student-flats-in-lambridge-bath" element={<BathLambridgeFlat4/>}/>
<Route path="5-bedroom-student-flats-in-lambridge-bath" element={<BathLambridgeFlat5/>}/>
<Route path="6-bedroom-student-flats-in-lambridge-bath" element={<BathLambridgeFlat6/>}/>
<Route path="9-bedroom-student-flats-in-lambridge-bath" element={<BathLambridgeFlat9/>}/>
<Route path="10-bedroom-student-flats-in-lambridge-bath" element={<BathLambridgeFlat10/>}/>
<Route path="studio-apartments-for-students-in-lambridge-bath" element={<BathLambridgeStudio1/>}/>
<Route path="studio-apartments-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickStudio/>}/>
<Route path="1-bedroom-student-flats-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat1/>}/>
<Route path="2-bedroom-student-flats-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat2/>}/>
<Route path="3-bedroom-student-flats-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat3/>}/>
<Route path="4-bedroom-student-flats-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat4/>}/>
<Route path="5-bedroom-student-flats-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat5/>}/>
<Route path="6-bedroom-student-flats-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat6/>}/>
<Route path="9-bedroom-student-flats-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat9/>}/>
<Route path="10-bedroom-student-flats-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat10/>}/>
<Route path="studio-apartments-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickStudio1/>}/>
<Route path="studio-apartments-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillStudio/>}/>
<Route path="1-bedroom-student-flats-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat1/>}/>
<Route path="2-bedroom-student-flats-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat2/>}/>
<Route path="3-bedroom-student-flats-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat3/>}/>
<Route path="4-bedroom-student-flats-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat4/>}/>
<Route path="5-bedroom-student-flats-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat5/>}/>
<Route path="6-bedroom-student-flats-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat6/>}/>
<Route path="9-bedroom-student-flats-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat9/>}/>
<Route path="10-bedroom-student-flats-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat10/>}/>
<Route path="studio-apartments-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillStudio1/>}/>
<Route path="studio-apartments-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeStudio/>}/>
<Route path="1-bedroom-student-flats-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat1/>}/>
<Route path="2-bedroom-student-flats-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat2/>}/>
<Route path="3-bedroom-student-flats-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat3/>}/>
<Route path="4-bedroom-student-flats-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat4/>}/>
<Route path="5-bedroom-student-flats-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat5/>}/>
<Route path="6-bedroom-student-flats-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat6/>}/>
<Route path="9-bedroom-student-flats-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat9/>}/>
<Route path="10-bedroom-student-flats-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat10/>}/>
<Route path="studio-apartments-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeStudio1/>}/>
<Route path="studio-apartments-for-students-in-perrymead-bath" element={<BathPerrymeadStudio/>}/>
<Route path="1-bedroom-student-flats-in-perrymead-bath" element={<BathPerrymeadFlat1/>}/>
<Route path="2-bedroom-student-flats-in-perrymead-bath" element={<BathPerrymeadFlat2/>}/>
<Route path="3-bedroom-student-flats-in-perrymead-bath" element={<BathPerrymeadFlat3/>}/>
<Route path="4-bedroom-student-flats-in-perrymead-bath" element={<BathPerrymeadFlat4/>}/>
<Route path="5-bedroom-student-flats-in-perrymead-bath" element={<BathPerrymeadFlat5/>}/>
<Route path="6-bedroom-student-flats-in-perrymead-bath" element={<BathPerrymeadFlat6/>}/>
<Route path="9-bedroom-student-flats-in-perrymead-bath" element={<BathPerrymeadFlat9/>}/>
<Route path="10-bedroom-student-flats-in-perrymead-bath" element={<BathPerrymeadFlat10/>}/>
<Route path="studio-apartments-for-students-in-perrymead-bath" element={<BathPerrymeadStudio1/>}/>
<Route path="studio-apartments-for-students-in-rush-hill-bath" element={<BathRushHillStudio/>}/>
<Route path="1-bedroom-student-flats-in-rush-hill-bath" element={<BathRushHillFlat1/>}/>
<Route path="2-bedroom-student-flats-in-rush-hill-bath" element={<BathRushHillFlat2/>}/>
<Route path="3-bedroom-student-flats-in-rush-hill-bath" element={<BathRushHillFlat3/>}/>
<Route path="4-bedroom-student-flats-in-rush-hill-bath" element={<BathRushHillFlat4/>}/>
<Route path="5-bedroom-student-flats-in-rush-hill-bath" element={<BathRushHillFlat5/>}/>
<Route path="6-bedroom-student-flats-in-rush-hill-bath" element={<BathRushHillFlat6/>}/>
<Route path="9-bedroom-student-flats-in-rush-hill-bath" element={<BathRushHillFlat9/>}/>
<Route path="10-bedroom-student-flats-in-rush-hill-bath" element={<BathRushHillFlat10/>}/>
<Route path="studio-apartments-for-students-in-rush-hill-bath" element={<BathRushHillStudio1/>}/>
<Route path="studio-apartments-for-students-in-sion-hill-bath" element={<BathSionHillStudio/>}/>
<Route path="1-bedroom-student-flats-in-sion-hill-bath" element={<BathSionHillFlat1/>}/>
<Route path="2-bedroom-student-flats-in-sion-hill-bath" element={<BathSionHillFlat2/>}/>
<Route path="3-bedroom-student-flats-in-sion-hill-bath" element={<BathSionHillFlat3/>}/>
<Route path="4-bedroom-student-flats-in-sion-hill-bath" element={<BathSionHillFlat4/>}/>
<Route path="5-bedroom-student-flats-in-sion-hill-bath" element={<BathSionHillFlat5/>}/>
<Route path="6-bedroom-student-flats-in-sion-hill-bath" element={<BathSionHillFlat6/>}/>
<Route path="9-bedroom-student-flats-in-sion-hill-bath" element={<BathSionHillFlat9/>}/>
<Route path="10-bedroom-student-flats-in-sion-hill-bath" element={<BathSionHillFlat10/>}/>
<Route path="studio-apartments-for-students-in-sion-hill-bath" element={<BathSionHillStudio1/>}/>
<Route path="studio-apartments-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeStudio/>}/>
<Route path="1-bedroom-student-flats-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat1/>}/>
<Route path="2-bedroom-student-flats-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat2/>}/>
<Route path="3-bedroom-student-flats-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat3/>}/>
<Route path="4-bedroom-student-flats-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat4/>}/>
<Route path="5-bedroom-student-flats-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat5/>}/>
<Route path="6-bedroom-student-flats-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat6/>}/>
<Route path="9-bedroom-student-flats-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat9/>}/>
<Route path="10-bedroom-student-flats-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat10/>}/>
<Route path="studio-apartments-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeStudio1/>}/>
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
