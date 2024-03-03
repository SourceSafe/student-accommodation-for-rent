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
const Aberdeen = lazy(() => import('./pages/town/Aberdeen'));
const Aberystwyth = lazy(() => import('./pages/town/Aberystwyth'));
const Bangor = lazy(() => import('./pages/town/Bangor'));
const Belfast = lazy(() => import('./pages/town/Belfast'));
const Birmingham = lazy(() => import('./pages/town/Birmingham'));
const Bolton = lazy(() => import('./pages/town/Bolton'));
const Bradford = lazy(() => import('./pages/town/Bradford'));
const Brighton = lazy(() => import('./pages/town/Brighton'));
const Bristol = lazy(() => import('./pages/town/Bristol'));
const Buckingham = lazy(() => import('./pages/town/Buckingham'));
const Cambridge = lazy(() => import('./pages/town/Cambridge'));
const Canterbury = lazy(() => import('./pages/town/Canterbury'));
const Cardiff = lazy(() => import('./pages/town/Cardiff'));
const Carlisle = lazy(() => import('./pages/town/Carlisle'));
const Carmarthen = lazy(() => import('./pages/town/Carmarthen'));
const Chelmsford = lazy(() => import('./pages/town/Chelmsford'));
const Cheltenham = lazy(() => import('./pages/town/Cheltenham'));
const Chester = lazy(() => import('./pages/town/Chester'));
const Chichester = lazy(() => import('./pages/town/Chichester'));
const Cirencester = lazy(() => import('./pages/town/Cirencester'));
const Colchester = lazy(() => import('./pages/town/Colchester'));
const Coleraine = lazy(() => import('./pages/town/Coleraine'));
const Coventry = lazy(() => import('./pages/town/Coventry'));
const Cranfield = lazy(() => import('./pages/town/Cranfield'));
const Derby = lazy(() => import('./pages/town/Derby'));
const Dundee = lazy(() => import('./pages/town/Dundee'));
const Durham = lazy(() => import('./pages/town/Durham'));
const Ealing = lazy(() => import('./pages/town/Ealing'));
const Edinburgh = lazy(() => import('./pages/town/Edinburgh'));
const Egham = lazy(() => import('./pages/town/Egham'));
const Exeter = lazy(() => import('./pages/town/Exeter'));
const Falmouth = lazy(() => import('./pages/town/Falmouth'));
const Farnham = lazy(() => import('./pages/town/Farnham'));
const Glasgow = lazy(() => import('./pages/town/Glasgow'));
const Gloucester = lazy(() => import('./pages/town/Gloucester'));
const Guildford = lazy(() => import('./pages/town/Guildford'));
const Hatfield = lazy(() => import('./pages/town/Hatfield'));
const HighWycombe = lazy(() => import('./pages/town/HighWycombe'));
const Huddersfield = lazy(() => import('./pages/town/Huddersfield'));
const Hull = lazy(() => import('./pages/town/Hull'));
const Inverness = lazy(() => import('./pages/town/Inverness'));
const Ipswich = lazy(() => import('./pages/town/Ipswich'));
const Keele = lazy(() => import('./pages/town/Keele'));
const KingstonuponThames = lazy(() => import('./pages/town/KingstonuponThames'));
const Lancaster = lazy(() => import('./pages/town/Lancaster'));
const Leeds = lazy(() => import('./pages/town/Leeds'));
const Leicester = lazy(() => import('./pages/town/Leicester'));
const Lincoln = lazy(() => import('./pages/town/Lincoln'));
const Liverpool = lazy(() => import('./pages/town/Liverpool'));
const London = lazy(() => import('./pages/town/London'));
const Loughborough = lazy(() => import('./pages/town/Loughborough'));
const Luton = lazy(() => import('./pages/town/Luton'));
const Manchester = lazy(() => import('./pages/town/Manchester'));
const Middlesbrough = lazy(() => import('./pages/town/Middlesbrough'));
const NewcastleuponTyne = lazy(() => import('./pages/town/NewcastleuponTyne'));
const Newport = lazy(() => import('./pages/town/Newport'));
const Northampton = lazy(() => import('./pages/town/Northampton'));
const Norwich = lazy(() => import('./pages/town/Norwich'));
const Nottingham = lazy(() => import('./pages/town/Nottingham'));
const Ormskirk = lazy(() => import('./pages/town/Ormskirk'));
const Oxford = lazy(() => import('./pages/town/Oxford'));
const Paisley = lazy(() => import('./pages/town/Paisley'));
const Plymouth = lazy(() => import('./pages/town/Plymouth'));
const Pontypridd = lazy(() => import('./pages/town/Pontypridd'));
const Poole = lazy(() => import('./pages/town/Poole'));
const Portsmouth = lazy(() => import('./pages/town/Portsmouth'));
const Preston = lazy(() => import('./pages/town/Preston'));
const Reading = lazy(() => import('./pages/town/Reading'));
const Salford = lazy(() => import('./pages/town/Salford'));
const Sheffield = lazy(() => import('./pages/town/Sheffield'));
const Southampton = lazy(() => import('./pages/town/Southampton'));
const StAndrews = lazy(() => import('./pages/town/StAndrews'));
const Stirling = lazy(() => import('./pages/town/Stirling'));
const StokeonTrent = lazy(() => import('./pages/town/StokeonTrent'));
const Sunderland = lazy(() => import('./pages/town/Sunderland'));
const Swansea = lazy(() => import('./pages/town/Swansea'));
const Twickenham = lazy(() => import('./pages/town/Twickenham'));
const Uxbridge = lazy(() => import('./pages/town/Uxbridge'));
const Winchester = lazy(() => import('./pages/town/Winchester'));
const Wolverhampton = lazy(() => import('./pages/town/Wolverhampton'));
const Worcester = lazy(() => import('./pages/town/Worcester'));
const Wrexham = lazy(() => import('./pages/town/Wrexham'));
const York = lazy(() => import('./pages/town/York'));
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
const BathTwertonHill = lazy(() => import('./pages/town/BathTwertonHill'));
const BathTwertonHillHouse = lazy(() => import('./pages/town/BathTwertonHillHouse'));
const BathTwertonHillFlat = lazy(() => import('./pages/town/BathTwertonHillFlat'));
const BathTwertonHillStudio = lazy(() => import('./pages/town/BathTwertonHillStudio'));
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
const BathTheOval = lazy(() => import('./pages/town/BathTheOval'));
const BathTheOvalHouse = lazy(() => import('./pages/town/BathTheOvalHouse'));
const BathTheOvalFlat = lazy(() => import('./pages/town/BathTheOvalFlat'));
const BathTheOvalStudio = lazy(() => import('./pages/town/BathTheOvalStudio'));
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
const BathKingsway = lazy(() => import('./pages/town/BathKingsway'));
const BathKingswayHouse = lazy(() => import('./pages/town/BathKingswayHouse'));
const BathKingswayFlat = lazy(() => import('./pages/town/BathKingswayFlat'));
const BathKingswayStudio = lazy(() => import('./pages/town/BathKingswayStudio'));
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
const BathBloomfield = lazy(() => import('./pages/town/BathBloomfield'));
const BathBloomfieldHouse = lazy(() => import('./pages/town/BathBloomfieldHouse'));
const BathBloomfieldFlat = lazy(() => import('./pages/town/BathBloomfieldFlat'));
const BathBloomfieldStudio = lazy(() => import('./pages/town/BathBloomfieldStudio'));
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
const BathSouthdown = lazy(() => import('./pages/town/BathSouthdown'));
const BathSouthdownHouse = lazy(() => import('./pages/town/BathSouthdownHouse'));
const BathSouthdownFlat = lazy(() => import('./pages/town/BathSouthdownFlat'));
const BathSouthdownStudio = lazy(() => import('./pages/town/BathSouthdownStudio'));
const BathSouthdownFlat1 = lazy(() => import('./pages/town/BathSouthdownFlat1'));
const BathSouthdownHouse3 = lazy(() => import('./pages/town/BathSouthdownHouse3'));
const BathSouthdownHouse4 = lazy(() => import('./pages/town/BathSouthdownHouse4'));
const BathSouthdownHouse5 = lazy(() => import('./pages/town/BathSouthdownHouse5'));
const BathSouthdownHouse6 = lazy(() => import('./pages/town/BathSouthdownHouse6'));
const BathSouthdownHouse7 = lazy(() => import('./pages/town/BathSouthdownHouse7'));
const BathSouthdownHouse8 = lazy(() => import('./pages/town/BathSouthdownHouse8'));
const BathSouthdownHouse10 = lazy(() => import('./pages/town/BathSouthdownHouse10'));
const BathSouthTwerton = lazy(() => import('./pages/town/BathSouthTwerton'));
const BathSouthTwertonHouse = lazy(() => import('./pages/town/BathSouthTwertonHouse'));
const BathSouthTwertonFlat = lazy(() => import('./pages/town/BathSouthTwertonFlat'));
const BathSouthTwertonStudio = lazy(() => import('./pages/town/BathSouthTwertonStudio'));
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
const BathTwerton = lazy(() => import('./pages/town/BathTwerton'));
const BathTwertonHouse = lazy(() => import('./pages/town/BathTwertonHouse'));
const BathTwertonFlat = lazy(() => import('./pages/town/BathTwertonFlat'));
const BathTwertonStudio = lazy(() => import('./pages/town/BathTwertonStudio'));
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
const BathPennHill = lazy(() => import('./pages/town/BathPennHill'));
const BathPennHillHouse = lazy(() => import('./pages/town/BathPennHillHouse'));
const BathPennHillFlat = lazy(() => import('./pages/town/BathPennHillFlat'));
const BathPennHillStudio = lazy(() => import('./pages/town/BathPennHillStudio'));
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
const BathLowerWeston = lazy(() => import('./pages/town/BathLowerWeston'));
const BathLowerWestonHouse = lazy(() => import('./pages/town/BathLowerWestonHouse'));
const BathLowerWestonFlat = lazy(() => import('./pages/town/BathLowerWestonFlat'));
const BathLowerWestonStudio = lazy(() => import('./pages/town/BathLowerWestonStudio'));
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
const BathEastTwerton = lazy(() => import('./pages/town/BathEastTwerton'));
const BathEastTwertonHouse = lazy(() => import('./pages/town/BathEastTwertonHouse'));
const BathEastTwertonFlat = lazy(() => import('./pages/town/BathEastTwertonFlat'));
const BathEastTwertonStudio = lazy(() => import('./pages/town/BathEastTwertonStudio'));
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
const BathOddDown = lazy(() => import('./pages/town/BathOddDown'));
const BathOddDownHouse = lazy(() => import('./pages/town/BathOddDownHouse'));
const BathOddDownFlat = lazy(() => import('./pages/town/BathOddDownFlat'));
const BathOddDownStudio = lazy(() => import('./pages/town/BathOddDownStudio'));
const BathOddDownFlat2 = lazy(() => import('./pages/town/BathOddDownFlat2'));
const BathOddDownFlat3 = lazy(() => import('./pages/town/BathOddDownFlat3'));
const BathOddDownFlat4 = lazy(() => import('./pages/town/BathOddDownFlat4'));
const BathOddDownHouse2 = lazy(() => import('./pages/town/BathOddDownHouse2'));
const BathOddDownHouse3 = lazy(() => import('./pages/town/BathOddDownHouse3'));
const BathOddDownHouse4 = lazy(() => import('./pages/town/BathOddDownHouse4'));
const BathOddDownHouse5 = lazy(() => import('./pages/town/BathOddDownHouse5'));
const BathOddDownHouse6 = lazy(() => import('./pages/town/BathOddDownHouse6'));
const BathOddDownHouse7 = lazy(() => import('./pages/town/BathOddDownHouse7'));
const BathNewbridge = lazy(() => import('./pages/town/BathNewbridge'));
const BathNewbridgeHouse = lazy(() => import('./pages/town/BathNewbridgeHouse'));
const BathNewbridgeFlat = lazy(() => import('./pages/town/BathNewbridgeFlat'));
const BathNewbridgeStudio = lazy(() => import('./pages/town/BathNewbridgeStudio'));
const BathNewbridgeFlat1 = lazy(() => import('./pages/town/BathNewbridgeFlat1'));
const BathNewbridgeFlat2 = lazy(() => import('./pages/town/BathNewbridgeFlat2'));
const BathNewbridgeFlat3 = lazy(() => import('./pages/town/BathNewbridgeFlat3'));
const BathNewbridgeFlat5 = lazy(() => import('./pages/town/BathNewbridgeFlat5'));
const BathNewbridgeHouse3 = lazy(() => import('./pages/town/BathNewbridgeHouse3'));
const BathNewbridgeHouse4 = lazy(() => import('./pages/town/BathNewbridgeHouse4'));
const BathNewbridgeHouse5 = lazy(() => import('./pages/town/BathNewbridgeHouse5'));
const BathNewbridgeHouse6 = lazy(() => import('./pages/town/BathNewbridgeHouse6'));
const BathNewbridgeHouse7 = lazy(() => import('./pages/town/BathNewbridgeHouse7'));
const BathNewbridgeHouse8 = lazy(() => import('./pages/town/BathNewbridgeHouse8'));
const BathNewbridgeStudio1 = lazy(() => import('./pages/town/BathNewbridgeStudio1'));
const BathWidcombe = lazy(() => import('./pages/town/BathWidcombe'));
const BathWidcombeHouse = lazy(() => import('./pages/town/BathWidcombeHouse'));
const BathWidcombeFlat = lazy(() => import('./pages/town/BathWidcombeFlat'));
const BathWidcombeStudio = lazy(() => import('./pages/town/BathWidcombeStudio'));
const BathWidcombeFlat1 = lazy(() => import('./pages/town/BathWidcombeFlat1'));
const BathWidcombeFlat2 = lazy(() => import('./pages/town/BathWidcombeFlat2'));
const BathWidcombeFlat3 = lazy(() => import('./pages/town/BathWidcombeFlat3'));
const BathWidcombeFlat7 = lazy(() => import('./pages/town/BathWidcombeFlat7'));
const BathWidcombeHouse2 = lazy(() => import('./pages/town/BathWidcombeHouse2'));
const BathWidcombeHouse3 = lazy(() => import('./pages/town/BathWidcombeHouse3'));
const BathWidcombeHouse4 = lazy(() => import('./pages/town/BathWidcombeHouse4'));
const BathWidcombeHouse5 = lazy(() => import('./pages/town/BathWidcombeHouse5'));
const BathWidcombeHouse6 = lazy(() => import('./pages/town/BathWidcombeHouse6'));
const BathWidcombeHouse8 = lazy(() => import('./pages/town/BathWidcombeHouse8'));
const BathWidcombeStudio1 = lazy(() => import('./pages/town/BathWidcombeStudio1'));
const BathBearFlat = lazy(() => import('./pages/town/BathBearFlat'));
const BathBearFlatHouse = lazy(() => import('./pages/town/BathBearFlatHouse'));
const BathBearFlatFlat = lazy(() => import('./pages/town/BathBearFlatFlat'));
const BathBearFlatStudio = lazy(() => import('./pages/town/BathBearFlatStudio'));
const BathBearFlatFlat2 = lazy(() => import('./pages/town/BathBearFlatFlat2'));
const BathBearFlatFlat3 = lazy(() => import('./pages/town/BathBearFlatFlat3'));
const BathBearFlatHouse4 = lazy(() => import('./pages/town/BathBearFlatHouse4'));
const BathBearFlatHouse5 = lazy(() => import('./pages/town/BathBearFlatHouse5'));
const BathBearFlatHouse6 = lazy(() => import('./pages/town/BathBearFlatHouse6'));
const BathBearFlatHouse7 = lazy(() => import('./pages/town/BathBearFlatHouse7'));
const BathBearFlatHouse9 = lazy(() => import('./pages/town/BathBearFlatHouse9'));
const BathWeston = lazy(() => import('./pages/town/BathWeston'));
const BathWestonHouse = lazy(() => import('./pages/town/BathWestonHouse'));
const BathWestonFlat = lazy(() => import('./pages/town/BathWestonFlat'));
const BathWestonStudio = lazy(() => import('./pages/town/BathWestonStudio'));
const BathWestonFlat1 = lazy(() => import('./pages/town/BathWestonFlat1'));
const BathWestonFlat2 = lazy(() => import('./pages/town/BathWestonFlat2'));
const BathWestonFlat3 = lazy(() => import('./pages/town/BathWestonFlat3'));
const BathWestonFlat4 = lazy(() => import('./pages/town/BathWestonFlat4'));
const BathWestonFlat5 = lazy(() => import('./pages/town/BathWestonFlat5'));
const BathWestonHouse3 = lazy(() => import('./pages/town/BathWestonHouse3'));
const BathWestonHouse4 = lazy(() => import('./pages/town/BathWestonHouse4'));
const BathWestonHouse5 = lazy(() => import('./pages/town/BathWestonHouse5'));
const BathWestonHouse6 = lazy(() => import('./pages/town/BathWestonHouse6'));
const BathWestonHouse7 = lazy(() => import('./pages/town/BathWestonHouse7'));
const BathWestonHouse8 = lazy(() => import('./pages/town/BathWestonHouse8'));
const BathWestonHouse9 = lazy(() => import('./pages/town/BathWestonHouse9'));
const BathBailbrook = lazy(() => import('./pages/town/BathBailbrook'));
const BathBailbrookHouse = lazy(() => import('./pages/town/BathBailbrookHouse'));
const BathBailbrookFlat = lazy(() => import('./pages/town/BathBailbrookFlat'));
const BathBailbrookStudio = lazy(() => import('./pages/town/BathBailbrookStudio'));
const BathBailbrookFlat1 = lazy(() => import('./pages/town/BathBailbrookFlat1'));
const BathBailbrookFlat2 = lazy(() => import('./pages/town/BathBailbrookFlat2'));
const BathBailbrookFlat3 = lazy(() => import('./pages/town/BathBailbrookFlat3'));
const BathBailbrookFlat4 = lazy(() => import('./pages/town/BathBailbrookFlat4'));
const BathBailbrookHouse3 = lazy(() => import('./pages/town/BathBailbrookHouse3'));
const BathBailbrookHouse4 = lazy(() => import('./pages/town/BathBailbrookHouse4'));
const BathBailbrookHouse5 = lazy(() => import('./pages/town/BathBailbrookHouse5'));
const BathBailbrookHouse6 = lazy(() => import('./pages/town/BathBailbrookHouse6'));
const BathBailbrookHouse10 = lazy(() => import('./pages/town/BathBailbrookHouse10'));
const BathBailbrookStudio1 = lazy(() => import('./pages/town/BathBailbrookStudio1'));
const BathYomedePark = lazy(() => import('./pages/town/BathYomedePark'));
const BathYomedeParkHouse = lazy(() => import('./pages/town/BathYomedeParkHouse'));
const BathYomedeParkFlat = lazy(() => import('./pages/town/BathYomedeParkFlat'));
const BathYomedeParkStudio = lazy(() => import('./pages/town/BathYomedeParkStudio'));
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
const BathWestonPark = lazy(() => import('./pages/town/BathWestonPark'));
const BathWestonParkHouse = lazy(() => import('./pages/town/BathWestonParkHouse'));
const BathWestonParkFlat = lazy(() => import('./pages/town/BathWestonParkFlat'));
const BathWestonParkStudio = lazy(() => import('./pages/town/BathWestonParkStudio'));
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
const BathKensington = lazy(() => import('./pages/town/BathKensington'));
const BathKensingtonHouse = lazy(() => import('./pages/town/BathKensingtonHouse'));
const BathKensingtonFlat = lazy(() => import('./pages/town/BathKensingtonFlat'));
const BathKensingtonStudio = lazy(() => import('./pages/town/BathKensingtonStudio'));
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
const BathLarkhall = lazy(() => import('./pages/town/BathLarkhall'));
const BathLarkhallHouse = lazy(() => import('./pages/town/BathLarkhallHouse'));
const BathLarkhallFlat = lazy(() => import('./pages/town/BathLarkhallFlat'));
const BathLarkhallStudio = lazy(() => import('./pages/town/BathLarkhallStudio'));
const BathLarkhallFlat1 = lazy(() => import('./pages/town/BathLarkhallFlat1'));
const BathLarkhallFlat2 = lazy(() => import('./pages/town/BathLarkhallFlat2'));
const BathLarkhallFlat3 = lazy(() => import('./pages/town/BathLarkhallFlat3'));
const BathLarkhallFlat4 = lazy(() => import('./pages/town/BathLarkhallFlat4'));
const BathLarkhallHouse3 = lazy(() => import('./pages/town/BathLarkhallHouse3'));
const BathLarkhallHouse4 = lazy(() => import('./pages/town/BathLarkhallHouse4'));
const BathLarkhallHouse5 = lazy(() => import('./pages/town/BathLarkhallHouse5'));
const BathLarkhallHouse6 = lazy(() => import('./pages/town/BathLarkhallHouse6'));
const BathLarkhallHouse10 = lazy(() => import('./pages/town/BathLarkhallHouse10'));
const BathLarkhallStudio1 = lazy(() => import('./pages/town/BathLarkhallStudio1'));
const BathSnowHill = lazy(() => import('./pages/town/BathSnowHill'));
const BathSnowHillHouse = lazy(() => import('./pages/town/BathSnowHillHouse'));
const BathSnowHillFlat = lazy(() => import('./pages/town/BathSnowHillFlat'));
const BathSnowHillStudio = lazy(() => import('./pages/town/BathSnowHillStudio'));
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
const BathPrimroseHill = lazy(() => import('./pages/town/BathPrimroseHill'));
const BathPrimroseHillHouse = lazy(() => import('./pages/town/BathPrimroseHillHouse'));
const BathPrimroseHillFlat = lazy(() => import('./pages/town/BathPrimroseHillFlat'));
const BathPrimroseHillStudio = lazy(() => import('./pages/town/BathPrimroseHillStudio'));
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
const BathRaglands = lazy(() => import('./pages/town/BathRaglands'));
const BathRaglandsHouse = lazy(() => import('./pages/town/BathRaglandsHouse'));
const BathRaglandsFlat = lazy(() => import('./pages/town/BathRaglandsFlat'));
const BathRaglandsStudio = lazy(() => import('./pages/town/BathRaglandsStudio'));
const BathRaglandsFlat1 = lazy(() => import('./pages/town/BathRaglandsFlat1'));
const BathRaglandsFlat2 = lazy(() => import('./pages/town/BathRaglandsFlat2'));
const BathRaglandsFlat3 = lazy(() => import('./pages/town/BathRaglandsFlat3'));
const BathRaglandsFlat4 = lazy(() => import('./pages/town/BathRaglandsFlat4'));
const BathLocksbrook = lazy(() => import('./pages/town/BathLocksbrook'));
const BathLocksbrookHouse = lazy(() => import('./pages/town/BathLocksbrookHouse'));
const BathLocksbrookFlat = lazy(() => import('./pages/town/BathLocksbrookFlat'));
const BathLocksbrookStudio = lazy(() => import('./pages/town/BathLocksbrookStudio'));
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
const BathRaglandsFlat5 = lazy(() => import('./pages/town/BathRaglandsFlat5'));
const BathRaglandsHouse3 = lazy(() => import('./pages/town/BathRaglandsHouse3'));
const BathRaglandsHouse4 = lazy(() => import('./pages/town/BathRaglandsHouse4'));
const BathRaglandsHouse5 = lazy(() => import('./pages/town/BathRaglandsHouse5'));
const BathRaglandsHouse6 = lazy(() => import('./pages/town/BathRaglandsHouse6'));
const BathRaglandsHouse7 = lazy(() => import('./pages/town/BathRaglandsHouse7'));
const BathRaglandsHouse9 = lazy(() => import('./pages/town/BathRaglandsHouse9'));
const BathRaglandsStudio1 = lazy(() => import('./pages/town/BathRaglandsStudio1'));
const BathRosehill = lazy(() => import('./pages/town/BathRosehill'));
const BathRosehillHouse = lazy(() => import('./pages/town/BathRosehillHouse'));
const BathRosehillFlat = lazy(() => import('./pages/town/BathRosehillFlat'));
const BathRosehillStudio = lazy(() => import('./pages/town/BathRosehillStudio'));
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
const BathRudmorePark = lazy(() => import('./pages/town/BathRudmorePark'));
const BathRudmoreParkHouse = lazy(() => import('./pages/town/BathRudmoreParkHouse'));
const BathRudmoreParkFlat = lazy(() => import('./pages/town/BathRudmoreParkFlat'));
const BathRudmoreParkStudio = lazy(() => import('./pages/town/BathRudmoreParkStudio'));
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
const BathAvonPark = lazy(() => import('./pages/town/BathAvonPark'));
const BathAvonParkHouse = lazy(() => import('./pages/town/BathAvonParkHouse'));
const BathAvonParkFlat = lazy(() => import('./pages/town/BathAvonParkFlat'));
const BathAvonParkStudio = lazy(() => import('./pages/town/BathAvonParkStudio'));
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
const BathBeaconHill = lazy(() => import('./pages/town/BathBeaconHill'));
const BathBeaconHillHouse = lazy(() => import('./pages/town/BathBeaconHillHouse'));
const BathBeaconHillFlat = lazy(() => import('./pages/town/BathBeaconHillFlat'));
const BathBeaconHillStudio = lazy(() => import('./pages/town/BathBeaconHillStudio'));
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
const BathBeechenCliff = lazy(() => import('./pages/town/BathBeechenCliff'));
const BathBeechenCliffHouse = lazy(() => import('./pages/town/BathBeechenCliffHouse'));
const BathBeechenCliffFlat = lazy(() => import('./pages/town/BathBeechenCliffFlat'));
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
const BathCrescentGardens = lazy(() => import('./pages/town/BathCrescentGardens'));
const BathCrescentGardensHouse = lazy(() => import('./pages/town/BathCrescentGardensHouse'));
const BathCrescentGardensFlat = lazy(() => import('./pages/town/BathCrescentGardensFlat'));
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
const BathDolemeads = lazy(() => import('./pages/town/BathDolemeads'));
const BathDolemeadsHouse = lazy(() => import('./pages/town/BathDolemeadsHouse'));
const BathDolemeadsFlat = lazy(() => import('./pages/town/BathDolemeadsFlat'));
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
const BathHat = lazy(() => import('./pages/town/BathHat'));
const BathHatHouse = lazy(() => import('./pages/town/BathHatHouse'));
const BathHatFlat = lazy(() => import('./pages/town/BathHatFlat'));
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
const BathHatfieldBuildings = lazy(() => import('./pages/town/BathHatfieldBuildings'));
const BathHatfieldBuildingsHouse = lazy(() => import('./pages/town/BathHatfieldBuildingsHouse'));
const BathHatfieldBuildingsFlat = lazy(() => import('./pages/town/BathHatfieldBuildingsFlat'));
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
const BathKingsmead = lazy(() => import('./pages/town/BathKingsmead'));
const BathKingsmeadHouse = lazy(() => import('./pages/town/BathKingsmeadHouse'));
const BathKingsmeadFlat = lazy(() => import('./pages/town/BathKingsmeadFlat'));
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
const BathLambridge = lazy(() => import('./pages/town/BathLambridge'));
const BathLambridgeHouse = lazy(() => import('./pages/town/BathLambridgeHouse'));
const BathLambridgeFlat = lazy(() => import('./pages/town/BathLambridgeFlat'));
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
const BathLowerSwainswick = lazy(() => import('./pages/town/BathLowerSwainswick'));
const BathLowerSwainswickHouse = lazy(() => import('./pages/town/BathLowerSwainswickHouse'));
const BathLowerSwainswickFlat = lazy(() => import('./pages/town/BathLowerSwainswickFlat'));
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
const BathLyncombeHill = lazy(() => import('./pages/town/BathLyncombeHill'));
const BathLyncombeHillHouse = lazy(() => import('./pages/town/BathLyncombeHillHouse'));
const BathLyncombeHillFlat = lazy(() => import('./pages/town/BathLyncombeHillFlat'));
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
const BathLyncombeVale = lazy(() => import('./pages/town/BathLyncombeVale'));
const BathLyncombeValeHouse = lazy(() => import('./pages/town/BathLyncombeValeHouse'));
const BathLyncombeValeFlat = lazy(() => import('./pages/town/BathLyncombeValeFlat'));
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
const BathPerrymead = lazy(() => import('./pages/town/BathPerrymead'));
const BathPerrymeadHouse = lazy(() => import('./pages/town/BathPerrymeadHouse'));
const BathPerrymeadFlat = lazy(() => import('./pages/town/BathPerrymeadFlat'));
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
const BathRushHill = lazy(() => import('./pages/town/BathRushHill'));
const BathRushHillHouse = lazy(() => import('./pages/town/BathRushHillHouse'));
const BathRushHillFlat = lazy(() => import('./pages/town/BathRushHillFlat'));
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
const BathSionHill = lazy(() => import('./pages/town/BathSionHill'));
const BathSionHillHouse = lazy(() => import('./pages/town/BathSionHillHouse'));
const BathSionHillFlat = lazy(() => import('./pages/town/BathSionHillFlat'));
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
const BathSouthLyncombe = lazy(() => import('./pages/town/BathSouthLyncombe'));
const BathSouthLyncombeHouse = lazy(() => import('./pages/town/BathSouthLyncombeHouse'));
const BathSouthLyncombeFlat = lazy(() => import('./pages/town/BathSouthLyncombeFlat'));
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
const BathSydneyGardens = lazy(() => import('./pages/town/BathSydneyGardens'));
const BathSydneyGardensHouse = lazy(() => import('./pages/town/BathSydneyGardensHouse'));
const BathSydneyGardensFlat = lazy(() => import('./pages/town/BathSydneyGardensFlat'));
const BathSydneyGardensStudio = lazy(() => import('./pages/town/BathSydneyGardensStudio'));
const BathSydneyGardensFlat1 = lazy(() => import('./pages/town/BathSydneyGardensFlat1'));
const BathSydneyGardensFlat2 = lazy(() => import('./pages/town/BathSydneyGardensFlat2'));
const BathSydneyGardensFlat3 = lazy(() => import('./pages/town/BathSydneyGardensFlat3'));
const BathSydneyGardensFlat4 = lazy(() => import('./pages/town/BathSydneyGardensFlat4'));
const BathSydneyGardensFlat5 = lazy(() => import('./pages/town/BathSydneyGardensFlat5'));
const BathSydneyGardensFlat6 = lazy(() => import('./pages/town/BathSydneyGardensFlat6'));
const BathSydneyGardensFlat9 = lazy(() => import('./pages/town/BathSydneyGardensFlat9'));
const BathSydneyGardensFlat10 = lazy(() => import('./pages/town/BathSydneyGardensFlat10'));
const BathSydneyGardensStudio1 = lazy(() => import('./pages/town/BathSydneyGardensStudio1'));
const BathTwertonOnAvon = lazy(() => import('./pages/town/BathTwertonOnAvon'));
const BathTwertonOnAvonHouse = lazy(() => import('./pages/town/BathTwertonOnAvonHouse'));
const BathTwertonOnAvonFlat = lazy(() => import('./pages/town/BathTwertonOnAvonFlat'));
const BathTwertonOnAvonStudio = lazy(() => import('./pages/town/BathTwertonOnAvonStudio'));
const BathTwertonOnAvonFlat1 = lazy(() => import('./pages/town/BathTwertonOnAvonFlat1'));
const BathTwertonOnAvonFlat2 = lazy(() => import('./pages/town/BathTwertonOnAvonFlat2'));
const BathTwertonOnAvonHouse3 = lazy(() => import('./pages/town/BathTwertonOnAvonHouse3'));
const BathTwertonOnAvonHouse4 = lazy(() => import('./pages/town/BathTwertonOnAvonHouse4'));
const BathTwertonOnAvonHouse5 = lazy(() => import('./pages/town/BathTwertonOnAvonHouse5'));
const BathUpperWeston = lazy(() => import('./pages/town/BathUpperWeston'));
const BathUpperWestonHouse = lazy(() => import('./pages/town/BathUpperWestonHouse'));
const BathUpperWestonFlat = lazy(() => import('./pages/town/BathUpperWestonFlat'));
const BathUpperWestonStudio = lazy(() => import('./pages/town/BathUpperWestonStudio'));
const BathUpperWestonFlat1 = lazy(() => import('./pages/town/BathUpperWestonFlat1'));
const BathUpperWestonFlat2 = lazy(() => import('./pages/town/BathUpperWestonFlat2'));
const BathUpperWestonFlat3 = lazy(() => import('./pages/town/BathUpperWestonFlat3'));
const BathUpperWestonFlat4 = lazy(() => import('./pages/town/BathUpperWestonFlat4'));
const BathUpperWestonFlat5 = lazy(() => import('./pages/town/BathUpperWestonFlat5'));
const BathUpperWestonFlat6 = lazy(() => import('./pages/town/BathUpperWestonFlat6'));
const BathUpperWestonFlat9 = lazy(() => import('./pages/town/BathUpperWestonFlat9'));
const BathUpperWestonFlat10 = lazy(() => import('./pages/town/BathUpperWestonFlat10'));
const BathUpperWestonStudio1 = lazy(() => import('./pages/town/BathUpperWestonStudio1'));
const BathVillaFields = lazy(() => import('./pages/town/BathVillaFields'));
const BathVillaFieldsHouse = lazy(() => import('./pages/town/BathVillaFieldsHouse'));
const BathVillaFieldsFlat = lazy(() => import('./pages/town/BathVillaFieldsFlat'));
const BathVillaFieldsStudio = lazy(() => import('./pages/town/BathVillaFieldsStudio'));
const BathVillaFieldsFlat1 = lazy(() => import('./pages/town/BathVillaFieldsFlat1'));
const BathVillaFieldsFlat2 = lazy(() => import('./pages/town/BathVillaFieldsFlat2'));
const BathVillaFieldsFlat3 = lazy(() => import('./pages/town/BathVillaFieldsFlat3'));
const BathVillaFieldsFlat4 = lazy(() => import('./pages/town/BathVillaFieldsFlat4'));
const BathVillaFieldsFlat5 = lazy(() => import('./pages/town/BathVillaFieldsFlat5'));
const BathVillaFieldsFlat6 = lazy(() => import('./pages/town/BathVillaFieldsFlat6'));
const BathVillaFieldsFlat9 = lazy(() => import('./pages/town/BathVillaFieldsFlat9'));
const BathVillaFieldsFlat10 = lazy(() => import('./pages/town/BathVillaFieldsFlat10'));
const BathVillaFieldsStudio1 = lazy(() => import('./pages/town/BathVillaFieldsStudio1'));
const BathWilliamstowe = lazy(() => import('./pages/town/BathWilliamstowe'));
const BathWilliamstoweHouse = lazy(() => import('./pages/town/BathWilliamstoweHouse'));
const BathWilliamstoweFlat = lazy(() => import('./pages/town/BathWilliamstoweFlat'));
const BathWilliamstoweStudio = lazy(() => import('./pages/town/BathWilliamstoweStudio'));
const BathWilliamstoweFlat1 = lazy(() => import('./pages/town/BathWilliamstoweFlat1'));
const BathWilliamstoweFlat2 = lazy(() => import('./pages/town/BathWilliamstoweFlat2'));
const BathWilliamstoweFlat3 = lazy(() => import('./pages/town/BathWilliamstoweFlat3'));
const BathWilliamstoweFlat4 = lazy(() => import('./pages/town/BathWilliamstoweFlat4'));
const BathWilliamstoweFlat5 = lazy(() => import('./pages/town/BathWilliamstoweFlat5'));
const BathWilliamstoweFlat6 = lazy(() => import('./pages/town/BathWilliamstoweFlat6'));
const BathWilliamstoweFlat9 = lazy(() => import('./pages/town/BathWilliamstoweFlat9'));
const BathWilliamstoweFlat10 = lazy(() => import('./pages/town/BathWilliamstoweFlat10'));
const BathWilliamstoweStudio1 = lazy(() => import('./pages/town/BathWilliamstoweStudio1'));
const BathWalcot = lazy(() => import('./pages/town/BathWalcot'));
const BathWalcotHouse = lazy(() => import('./pages/town/BathWalcotHouse'));
const BathWalcotFlat = lazy(() => import('./pages/town/BathWalcotFlat'));
const BathWalcotStudio = lazy(() => import('./pages/town/BathWalcotStudio'));
const BathWalcotFlat1 = lazy(() => import('./pages/town/BathWalcotFlat1'));
const BathWalcotFlat2 = lazy(() => import('./pages/town/BathWalcotFlat2'));
const BathWalcotFlat3 = lazy(() => import('./pages/town/BathWalcotFlat3'));
const BathWalcotFlat4 = lazy(() => import('./pages/town/BathWalcotFlat4'));
const BathWalcotHouse2 = lazy(() => import('./pages/town/BathWalcotHouse2'));
const BathWalcotHouse3 = lazy(() => import('./pages/town/BathWalcotHouse3'));
const BathWalcotHouse4 = lazy(() => import('./pages/town/BathWalcotHouse4'));
const BathWalcotHouse5 = lazy(() => import('./pages/town/BathWalcotHouse5'));
const BathWalcotHouse6 = lazy(() => import('./pages/town/BathWalcotHouse6'));
const BathWhiteway = lazy(() => import('./pages/town/BathWhiteway'));
const BathWhitewayHouse = lazy(() => import('./pages/town/BathWhitewayHouse'));
const BathWhitewayFlat = lazy(() => import('./pages/town/BathWhitewayFlat'));
const BathWhitewayStudio = lazy(() => import('./pages/town/BathWhitewayStudio'));
const BathWhitewayHouse4 = lazy(() => import('./pages/town/BathWhitewayHouse4'));
const BathWhitewayHouse5 = lazy(() => import('./pages/town/BathWhitewayHouse5'));
const BathWhitewayHouse6 = lazy(() => import('./pages/town/BathWhitewayHouse6'));
const BathLansdown = lazy(() => import('./pages/town/BathLansdown'));
const BathLansdownHouse = lazy(() => import('./pages/town/BathLansdownHouse'));
const BathLansdownFlat = lazy(() => import('./pages/town/BathLansdownFlat'));
const BathLansdownStudio = lazy(() => import('./pages/town/BathLansdownStudio'));
const BathLansdownFlat1 = lazy(() => import('./pages/town/BathLansdownFlat1'));
const BathLansdownFlat2 = lazy(() => import('./pages/town/BathLansdownFlat2'));
const BathLansdownFlat3 = lazy(() => import('./pages/town/BathLansdownFlat3'));
const BathLansdownFlat4 = lazy(() => import('./pages/town/BathLansdownFlat4'));
const BathLansdownFlat5 = lazy(() => import('./pages/town/BathLansdownFlat5'));
const BathLansdownHouse4 = lazy(() => import('./pages/town/BathLansdownHouse4'));
const BathLansdownHouse5 = lazy(() => import('./pages/town/BathLansdownHouse5'));
const BathLansdownHouse9 = lazy(() => import('./pages/town/BathLansdownHouse9'));
const BathBathwick = lazy(() => import('./pages/town/BathBathwick'));
const BathBathwickHouse = lazy(() => import('./pages/town/BathBathwickHouse'));
const BathBathwickFlat = lazy(() => import('./pages/town/BathBathwickFlat'));
const BathBathwickStudio = lazy(() => import('./pages/town/BathBathwickStudio'));
const BathBathwickFlat2 = lazy(() => import('./pages/town/BathBathwickFlat2'));
const BathBathwickFlat3 = lazy(() => import('./pages/town/BathBathwickFlat3'));
const BathBathwickFlat5 = lazy(() => import('./pages/town/BathBathwickFlat5'));
const BathBathwickHouse5 = lazy(() => import('./pages/town/BathBathwickHouse5'));
const BathBathwickHouse7 = lazy(() => import('./pages/town/BathBathwickHouse7'));
const BathBathwickStudio1 = lazy(() => import('./pages/town/BathBathwickStudio1'));
const BathFairfieldPark = lazy(() => import('./pages/town/BathFairfieldPark'));
const BathFairfieldParkHouse = lazy(() => import('./pages/town/BathFairfieldParkHouse'));
const BathFairfieldParkFlat = lazy(() => import('./pages/town/BathFairfieldParkFlat'));
const BathFairfieldParkStudio = lazy(() => import('./pages/town/BathFairfieldParkStudio'));
const BathFairfieldParkFlat1 = lazy(() => import('./pages/town/BathFairfieldParkFlat1'));
const BathFairfieldParkFlat3 = lazy(() => import('./pages/town/BathFairfieldParkFlat3'));
const BathFairfieldParkHouse4 = lazy(() => import('./pages/town/BathFairfieldParkHouse4'));
const BathFairfieldParkHouse5 = lazy(() => import('./pages/town/BathFairfieldParkHouse5'));
const BathBradfordPark = lazy(() => import('./pages/town/BathBradfordPark'));
const BathBradfordParkHouse = lazy(() => import('./pages/town/BathBradfordParkHouse'));
const BathBradfordParkFlat = lazy(() => import('./pages/town/BathBradfordParkFlat'));
const BathBradfordParkStudio = lazy(() => import('./pages/town/BathBradfordParkStudio'));
const BathBradfordParkFlat2 = lazy(() => import('./pages/town/BathBradfordParkFlat2'));
const BathBradfordParkFlat3 = lazy(() => import('./pages/town/BathBradfordParkFlat3'));
const BathBradfordParkHouse2 = lazy(() => import('./pages/town/BathBradfordParkHouse2'));
const BathBradfordParkHouse3 = lazy(() => import('./pages/town/BathBradfordParkHouse3'));
const BathBradfordParkHouse4 = lazy(() => import('./pages/town/BathBradfordParkHouse4'));
const BathBradfordParkHouse5 = lazy(() => import('./pages/town/BathBradfordParkHouse5'));
const BathBradfordParkHouse6 = lazy(() => import('./pages/town/BathBradfordParkHouse6'));
const BathCombeDown = lazy(() => import('./pages/town/BathCombeDown'));
const BathCombeDownHouse = lazy(() => import('./pages/town/BathCombeDownHouse'));
const BathCombeDownFlat = lazy(() => import('./pages/town/BathCombeDownFlat'));
const BathCombeDownStudio = lazy(() => import('./pages/town/BathCombeDownStudio'));
const BathCombeDownFlat2 = lazy(() => import('./pages/town/BathCombeDownFlat2'));
const BathCombeDownFlat3 = lazy(() => import('./pages/town/BathCombeDownFlat3'));
const BathCombeDownHouse2 = lazy(() => import('./pages/town/BathCombeDownHouse2'));
const BathCombeDownHouse3 = lazy(() => import('./pages/town/BathCombeDownHouse3'));
const BathCombeDownHouse4 = lazy(() => import('./pages/town/BathCombeDownHouse4'));
const BathCombeDownHouse5 = lazy(() => import('./pages/town/BathCombeDownHouse5'));
const BathCombeDownHouse6 = lazy(() => import('./pages/town/BathCombeDownHouse6'));
const BathRalphAllenPark = lazy(() => import('./pages/town/BathRalphAllenPark'));
const BathRalphAllenParkHouse = lazy(() => import('./pages/town/BathRalphAllenParkHouse'));
const BathRalphAllenParkFlat = lazy(() => import('./pages/town/BathRalphAllenParkFlat'));
const BathRalphAllenParkStudio = lazy(() => import('./pages/town/BathRalphAllenParkStudio'));
const BathRalphAllenParkFlat2 = lazy(() => import('./pages/town/BathRalphAllenParkFlat2'));
const BathRalphAllenParkFlat3 = lazy(() => import('./pages/town/BathRalphAllenParkFlat3'));
const BathRalphAllenParkHouse2 = lazy(() => import('./pages/town/BathRalphAllenParkHouse2'));
const BathRalphAllenParkHouse3 = lazy(() => import('./pages/town/BathRalphAllenParkHouse3'));
const BathRalphAllenParkHouse4 = lazy(() => import('./pages/town/BathRalphAllenParkHouse4'));
const BathRalphAllenParkHouse5 = lazy(() => import('./pages/town/BathRalphAllenParkHouse5'));
const BathRalphAllenParkHouse6 = lazy(() => import('./pages/town/BathRalphAllenParkHouse6'));
const BathTyning = lazy(() => import('./pages/town/BathTyning'));
const BathTyningHouse = lazy(() => import('./pages/town/BathTyningHouse'));
const BathTyningFlat = lazy(() => import('./pages/town/BathTyningFlat'));
const BathTyningStudio = lazy(() => import('./pages/town/BathTyningStudio'));
const BathTyningFlat2 = lazy(() => import('./pages/town/BathTyningFlat2'));
const BathTyningFlat3 = lazy(() => import('./pages/town/BathTyningFlat3'));
const BathTyningFlat5 = lazy(() => import('./pages/town/BathTyningFlat5'));
const BathTyningHouse5 = lazy(() => import('./pages/town/BathTyningHouse5'));
const BathTyningHouse7 = lazy(() => import('./pages/town/BathTyningHouse7'));
const BathTyningStudio1 = lazy(() => import('./pages/town/BathTyningStudio1'));
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
<Route path="student-accommodation-in-aberdeen" element={<Aberdeen/>}/>
<Route path="student-accommodation-in-aberystwyth" element={<Aberystwyth/>}/>
<Route path="student-accommodation-in-bangor" element={<Bangor/>}/>
<Route path="student-accommodation-in-belfast" element={<Belfast/>}/>
<Route path="student-accommodation-in-birmingham" element={<Birmingham/>}/>
<Route path="student-accommodation-in-bolton" element={<Bolton/>}/>
<Route path="student-accommodation-in-bradford" element={<Bradford/>}/>
<Route path="student-accommodation-in-brighton" element={<Brighton/>}/>
<Route path="student-accommodation-in-bristol" element={<Bristol/>}/>
<Route path="student-accommodation-in-buckingham" element={<Buckingham/>}/>
<Route path="student-accommodation-in-cambridge" element={<Cambridge/>}/>
<Route path="student-accommodation-in-canterbury" element={<Canterbury/>}/>
<Route path="student-accommodation-in-cardiff" element={<Cardiff/>}/>
<Route path="student-accommodation-in-carlisle" element={<Carlisle/>}/>
<Route path="student-accommodation-in-carmarthen" element={<Carmarthen/>}/>
<Route path="student-accommodation-in-chelmsford" element={<Chelmsford/>}/>
<Route path="student-accommodation-in-cheltenham" element={<Cheltenham/>}/>
<Route path="student-accommodation-in-chester" element={<Chester/>}/>
<Route path="student-accommodation-in-chichester" element={<Chichester/>}/>
<Route path="student-accommodation-in-cirencester" element={<Cirencester/>}/>
<Route path="student-accommodation-in-colchester" element={<Colchester/>}/>
<Route path="student-accommodation-in-coleraine" element={<Coleraine/>}/>
<Route path="student-accommodation-in-coventry" element={<Coventry/>}/>
<Route path="student-accommodation-in-cranfield" element={<Cranfield/>}/>
<Route path="student-accommodation-in-derby" element={<Derby/>}/>
<Route path="student-accommodation-in-dundee" element={<Dundee/>}/>
<Route path="student-accommodation-in-durham" element={<Durham/>}/>
<Route path="student-accommodation-in-ealing" element={<Ealing/>}/>
<Route path="student-accommodation-in-edinburgh" element={<Edinburgh/>}/>
<Route path="student-accommodation-in-egham" element={<Egham/>}/>
<Route path="student-accommodation-in-exeter" element={<Exeter/>}/>
<Route path="student-accommodation-in-falmouth" element={<Falmouth/>}/>
<Route path="student-accommodation-in-farnham" element={<Farnham/>}/>
<Route path="student-accommodation-in-glasgow" element={<Glasgow/>}/>
<Route path="student-accommodation-in-gloucester" element={<Gloucester/>}/>
<Route path="student-accommodation-in-guildford" element={<Guildford/>}/>
<Route path="student-accommodation-in-hatfield" element={<Hatfield/>}/>
<Route path="student-accommodation-in-high-wycombe" element={<HighWycombe/>}/>
<Route path="student-accommodation-in-huddersfield" element={<Huddersfield/>}/>
<Route path="student-accommodation-in-hull" element={<Hull/>}/>
<Route path="student-accommodation-in-inverness" element={<Inverness/>}/>
<Route path="student-accommodation-in-ipswich" element={<Ipswich/>}/>
<Route path="student-accommodation-in-keele" element={<Keele/>}/>
<Route path="student-accommodation-in-kingston-upon-thames" element={<KingstonuponThames/>}/>
<Route path="student-accommodation-in-lancaster" element={<Lancaster/>}/>
<Route path="student-accommodation-in-leeds" element={<Leeds/>}/>
<Route path="student-accommodation-in-leicester" element={<Leicester/>}/>
<Route path="student-accommodation-in-lincoln" element={<Lincoln/>}/>
<Route path="student-accommodation-in-liverpool" element={<Liverpool/>}/>
<Route path="student-accommodation-in-london" element={<London/>}/>
<Route path="student-accommodation-in-loughborough" element={<Loughborough/>}/>
<Route path="student-accommodation-in-luton" element={<Luton/>}/>
<Route path="student-accommodation-in-manchester" element={<Manchester/>}/>
<Route path="student-accommodation-in-middlesbrough" element={<Middlesbrough/>}/>
<Route path="student-accommodation-in-newcastle-upon-tyne" element={<NewcastleuponTyne/>}/>
<Route path="student-accommodation-in-newport" element={<Newport/>}/>
<Route path="student-accommodation-in-northampton" element={<Northampton/>}/>
<Route path="student-accommodation-in-norwich" element={<Norwich/>}/>
<Route path="student-accommodation-in-nottingham" element={<Nottingham/>}/>
<Route path="student-accommodation-in-ormskirk" element={<Ormskirk/>}/>
<Route path="student-accommodation-in-oxford" element={<Oxford/>}/>
<Route path="student-accommodation-in-paisley" element={<Paisley/>}/>
<Route path="student-accommodation-in-plymouth" element={<Plymouth/>}/>
<Route path="student-accommodation-in-pontypridd" element={<Pontypridd/>}/>
<Route path="student-accommodation-in-poole" element={<Poole/>}/>
<Route path="student-accommodation-in-portsmouth" element={<Portsmouth/>}/>
<Route path="student-accommodation-in-preston" element={<Preston/>}/>
<Route path="student-accommodation-in-reading" element={<Reading/>}/>
<Route path="student-accommodation-in-salford" element={<Salford/>}/>
<Route path="student-accommodation-in-sheffield" element={<Sheffield/>}/>
<Route path="student-accommodation-in-southampton" element={<Southampton/>}/>
<Route path="student-accommodation-in-st-andrews" element={<StAndrews/>}/>
<Route path="student-accommodation-in-stirling" element={<Stirling/>}/>
<Route path="student-accommodation-in-stoke-on-trent" element={<StokeonTrent/>}/>
<Route path="student-accommodation-in-sunderland" element={<Sunderland/>}/>
<Route path="student-accommodation-in-swansea" element={<Swansea/>}/>
<Route path="student-accommodation-in-twickenham" element={<Twickenham/>}/>
<Route path="student-accommodation-in-uxbridge" element={<Uxbridge/>}/>
<Route path="student-accommodation-in-winchester" element={<Winchester/>}/>
<Route path="student-accommodation-in-wolverhampton" element={<Wolverhampton/>}/>
<Route path="student-accommodation-in-worcester" element={<Worcester/>}/>
<Route path="student-accommodation-in-wrexham" element={<Wrexham/>}/>
<Route path="student-accommodation-in-york" element={<York/>}/>
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
<Route path="student-accommodation-in-twerton-hill-bath" element={<BathTwertonHill/>}/>
<Route path="shared-houses-for-students-in-twerton-hill-bath" element={<BathTwertonHillHouse/>}/>
<Route path="shared-flats-for-students-in-twerton-hill-bath" element={<BathTwertonHillFlat/>}/>
<Route path="studio-apartments-for-students-in-twerton-hill-bath" element={<BathTwertonHillStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-twerton-hill-bath" element={<BathTwertonHillFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-twerton-hill-bath" element={<BathTwertonHillFlat2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-twerton-hill-bath" element={<BathTwertonHillHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-twerton-hill-bath" element={<BathTwertonHillHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-twerton-hill-bath" element={<BathTwertonHillHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-twerton-hill-bath" element={<BathTwertonHillHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-twerton-hill-bath" element={<BathTwertonHillHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-twerton-hill-bath" element={<BathTwertonHillHouse8/>}/>
<Route path="shared-10-bedroom-houses-for-students-in-twerton-hill-bath" element={<BathTwertonHillHouse10/>}/>
<Route path="studio-apartments-for-students-in-twerton-hill-bath" element={<BathTwertonHillStudio1/>}/>
<Route path="student-accommodation-in-the-oval-bath" element={<BathTheOval/>}/>
<Route path="shared-houses-for-students-in-the-oval-bath" element={<BathTheOvalHouse/>}/>
<Route path="shared-flats-for-students-in-the-oval-bath" element={<BathTheOvalFlat/>}/>
<Route path="studio-apartments-for-students-in-the-oval-bath" element={<BathTheOvalStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-the-oval-bath" element={<BathTheOvalFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-the-oval-bath" element={<BathTheOvalFlat2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-the-oval-bath" element={<BathTheOvalHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-the-oval-bath" element={<BathTheOvalHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-the-oval-bath" element={<BathTheOvalHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-the-oval-bath" element={<BathTheOvalHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-the-oval-bath" element={<BathTheOvalHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-the-oval-bath" element={<BathTheOvalHouse8/>}/>
<Route path="shared-10-bedroom-houses-for-students-in-the-oval-bath" element={<BathTheOvalHouse10/>}/>
<Route path="studio-apartments-for-students-in-the-oval-bath" element={<BathTheOvalStudio1/>}/>
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
<Route path="student-accommodation-in-kingsway-bath" element={<BathKingsway/>}/>
<Route path="shared-houses-for-students-in-kingsway-bath" element={<BathKingswayHouse/>}/>
<Route path="shared-flats-for-students-in-kingsway-bath" element={<BathKingswayFlat/>}/>
<Route path="studio-apartments-for-students-in-kingsway-bath" element={<BathKingswayStudio/>}/>
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
<Route path="student-accommodation-in-bloomfield-bath" element={<BathBloomfield/>}/>
<Route path="shared-houses-for-students-in-bloomfield-bath" element={<BathBloomfieldHouse/>}/>
<Route path="shared-flats-for-students-in-bloomfield-bath" element={<BathBloomfieldFlat/>}/>
<Route path="studio-apartments-for-students-in-bloomfield-bath" element={<BathBloomfieldStudio/>}/>
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
<Route path="student-accommodation-in-southdown-bath" element={<BathSouthdown/>}/>
<Route path="shared-houses-for-students-in-southdown-bath" element={<BathSouthdownHouse/>}/>
<Route path="shared-flats-for-students-in-southdown-bath" element={<BathSouthdownFlat/>}/>
<Route path="studio-apartments-for-students-in-southdown-bath" element={<BathSouthdownStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-southdown-bath" element={<BathSouthdownFlat1/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-southdown-bath" element={<BathSouthdownHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-southdown-bath" element={<BathSouthdownHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-southdown-bath" element={<BathSouthdownHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-southdown-bath" element={<BathSouthdownHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-southdown-bath" element={<BathSouthdownHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-southdown-bath" element={<BathSouthdownHouse8/>}/>
<Route path="shared-10-bedroom-houses-for-students-in-southdown-bath" element={<BathSouthdownHouse10/>}/>
<Route path="student-accommodation-in-south-twerton-bath" element={<BathSouthTwerton/>}/>
<Route path="shared-houses-for-students-in-south-twerton-bath" element={<BathSouthTwertonHouse/>}/>
<Route path="shared-flats-for-students-in-south-twerton-bath" element={<BathSouthTwertonFlat/>}/>
<Route path="studio-apartments-for-students-in-south-twerton-bath" element={<BathSouthTwertonStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-south-twerton-bath" element={<BathSouthTwertonFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-south-twerton-bath" element={<BathSouthTwertonFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-south-twerton-bath" element={<BathSouthTwertonFlat3/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-south-twerton-bath" element={<BathSouthTwertonFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-south-twerton-bath" element={<BathSouthTwertonHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-south-twerton-bath" element={<BathSouthTwertonHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-south-twerton-bath" element={<BathSouthTwertonHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-south-twerton-bath" element={<BathSouthTwertonHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-south-twerton-bath" element={<BathSouthTwertonHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-south-twerton-bath" element={<BathSouthTwertonHouse8/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-south-twerton-bath" element={<BathSouthTwertonHouse9/>}/>
<Route path="student-accommodation-in-twerton-bath" element={<BathTwerton/>}/>
<Route path="shared-houses-for-students-in-twerton-bath" element={<BathTwertonHouse/>}/>
<Route path="shared-flats-for-students-in-twerton-bath" element={<BathTwertonFlat/>}/>
<Route path="studio-apartments-for-students-in-twerton-bath" element={<BathTwertonStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-twerton-bath" element={<BathTwertonFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-twerton-bath" element={<BathTwertonFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-twerton-bath" element={<BathTwertonFlat3/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-twerton-bath" element={<BathTwertonFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-twerton-bath" element={<BathTwertonHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-twerton-bath" element={<BathTwertonHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-twerton-bath" element={<BathTwertonHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-twerton-bath" element={<BathTwertonHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-twerton-bath" element={<BathTwertonHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-twerton-bath" element={<BathTwertonHouse8/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-twerton-bath" element={<BathTwertonHouse9/>}/>
<Route path="studio-apartments-for-students-in-twerton-bath" element={<BathTwertonStudio1/>}/>
<Route path="student-accommodation-in-penn-hill-bath" element={<BathPennHill/>}/>
<Route path="shared-houses-for-students-in-penn-hill-bath" element={<BathPennHillHouse/>}/>
<Route path="shared-flats-for-students-in-penn-hill-bath" element={<BathPennHillFlat/>}/>
<Route path="studio-apartments-for-students-in-penn-hill-bath" element={<BathPennHillStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-penn-hill-bath" element={<BathPennHillFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-penn-hill-bath" element={<BathPennHillFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-penn-hill-bath" element={<BathPennHillFlat3/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-penn-hill-bath" element={<BathPennHillFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-penn-hill-bath" element={<BathPennHillHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-penn-hill-bath" element={<BathPennHillHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-penn-hill-bath" element={<BathPennHillHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-penn-hill-bath" element={<BathPennHillHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-penn-hill-bath" element={<BathPennHillHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-penn-hill-bath" element={<BathPennHillHouse8/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-penn-hill-bath" element={<BathPennHillHouse9/>}/>
<Route path="student-accommodation-in-lower-weston-bath" element={<BathLowerWeston/>}/>
<Route path="shared-houses-for-students-in-lower-weston-bath" element={<BathLowerWestonHouse/>}/>
<Route path="shared-flats-for-students-in-lower-weston-bath" element={<BathLowerWestonFlat/>}/>
<Route path="studio-apartments-for-students-in-lower-weston-bath" element={<BathLowerWestonStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-lower-weston-bath" element={<BathLowerWestonFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-lower-weston-bath" element={<BathLowerWestonFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-lower-weston-bath" element={<BathLowerWestonFlat3/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-lower-weston-bath" element={<BathLowerWestonFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-lower-weston-bath" element={<BathLowerWestonHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-lower-weston-bath" element={<BathLowerWestonHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-lower-weston-bath" element={<BathLowerWestonHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-lower-weston-bath" element={<BathLowerWestonHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-lower-weston-bath" element={<BathLowerWestonHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-lower-weston-bath" element={<BathLowerWestonHouse8/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-lower-weston-bath" element={<BathLowerWestonHouse9/>}/>
<Route path="student-accommodation-in-east-twerton-bath" element={<BathEastTwerton/>}/>
<Route path="shared-houses-for-students-in-east-twerton-bath" element={<BathEastTwertonHouse/>}/>
<Route path="shared-flats-for-students-in-east-twerton-bath" element={<BathEastTwertonFlat/>}/>
<Route path="studio-apartments-for-students-in-east-twerton-bath" element={<BathEastTwertonStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-east-twerton-bath" element={<BathEastTwertonFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-east-twerton-bath" element={<BathEastTwertonFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-east-twerton-bath" element={<BathEastTwertonFlat3/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-east-twerton-bath" element={<BathEastTwertonFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-east-twerton-bath" element={<BathEastTwertonHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-east-twerton-bath" element={<BathEastTwertonHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-east-twerton-bath" element={<BathEastTwertonHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-east-twerton-bath" element={<BathEastTwertonHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-east-twerton-bath" element={<BathEastTwertonHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-east-twerton-bath" element={<BathEastTwertonHouse8/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-east-twerton-bath" element={<BathEastTwertonHouse9/>}/>
<Route path="student-accommodation-in-odd-down-bath" element={<BathOddDown/>}/>
<Route path="shared-houses-for-students-in-odd-down-bath" element={<BathOddDownHouse/>}/>
<Route path="shared-flats-for-students-in-odd-down-bath" element={<BathOddDownFlat/>}/>
<Route path="studio-apartments-for-students-in-odd-down-bath" element={<BathOddDownStudio/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-odd-down-bath" element={<BathOddDownFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-odd-down-bath" element={<BathOddDownFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-odd-down-bath" element={<BathOddDownFlat4/>}/>
<Route path="shared-2-bedroom-houses-for-students-in-odd-down-bath" element={<BathOddDownHouse2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-odd-down-bath" element={<BathOddDownHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-odd-down-bath" element={<BathOddDownHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-odd-down-bath" element={<BathOddDownHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-odd-down-bath" element={<BathOddDownHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-odd-down-bath" element={<BathOddDownHouse7/>}/>
<Route path="student-accommodation-in-newbridge-bath" element={<BathNewbridge/>}/>
<Route path="shared-houses-for-students-in-newbridge-bath" element={<BathNewbridgeHouse/>}/>
<Route path="shared-flats-for-students-in-newbridge-bath" element={<BathNewbridgeFlat/>}/>
<Route path="studio-apartments-for-students-in-newbridge-bath" element={<BathNewbridgeStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-newbridge-bath" element={<BathNewbridgeFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-newbridge-bath" element={<BathNewbridgeFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-newbridge-bath" element={<BathNewbridgeFlat3/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-newbridge-bath" element={<BathNewbridgeFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-newbridge-bath" element={<BathNewbridgeHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-newbridge-bath" element={<BathNewbridgeHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-newbridge-bath" element={<BathNewbridgeHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-newbridge-bath" element={<BathNewbridgeHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-newbridge-bath" element={<BathNewbridgeHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-newbridge-bath" element={<BathNewbridgeHouse8/>}/>
<Route path="studio-apartments-for-students-in-newbridge-bath" element={<BathNewbridgeStudio1/>}/>
<Route path="student-accommodation-in-widcombe-bath" element={<BathWidcombe/>}/>
<Route path="shared-houses-for-students-in-widcombe-bath" element={<BathWidcombeHouse/>}/>
<Route path="shared-flats-for-students-in-widcombe-bath" element={<BathWidcombeFlat/>}/>
<Route path="studio-apartments-for-students-in-widcombe-bath" element={<BathWidcombeStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-widcombe-bath" element={<BathWidcombeFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-widcombe-bath" element={<BathWidcombeFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-widcombe-bath" element={<BathWidcombeFlat3/>}/>
<Route path="shared-7-bedroom-flats-for-students-in-widcombe-bath" element={<BathWidcombeFlat7/>}/>
<Route path="shared-2-bedroom-houses-for-students-in-widcombe-bath" element={<BathWidcombeHouse2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-widcombe-bath" element={<BathWidcombeHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-widcombe-bath" element={<BathWidcombeHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-widcombe-bath" element={<BathWidcombeHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-widcombe-bath" element={<BathWidcombeHouse6/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-widcombe-bath" element={<BathWidcombeHouse8/>}/>
<Route path="studio-apartments-for-students-in-widcombe-bath" element={<BathWidcombeStudio1/>}/>
<Route path="student-accommodation-in-bear-flat-bath" element={<BathBearFlat/>}/>
<Route path="shared-houses-for-students-in-bear-flat-bath" element={<BathBearFlatHouse/>}/>
<Route path="shared-flats-for-students-in-bear-flat-bath" element={<BathBearFlatFlat/>}/>
<Route path="studio-apartments-for-students-in-bear-flat-bath" element={<BathBearFlatStudio/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-bear-flat-bath" element={<BathBearFlatFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-bear-flat-bath" element={<BathBearFlatFlat3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-bear-flat-bath" element={<BathBearFlatHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-bear-flat-bath" element={<BathBearFlatHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-bear-flat-bath" element={<BathBearFlatHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-bear-flat-bath" element={<BathBearFlatHouse7/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-bear-flat-bath" element={<BathBearFlatHouse9/>}/>
<Route path="student-accommodation-in-weston-bath" element={<BathWeston/>}/>
<Route path="shared-houses-for-students-in-weston-bath" element={<BathWestonHouse/>}/>
<Route path="shared-flats-for-students-in-weston-bath" element={<BathWestonFlat/>}/>
<Route path="studio-apartments-for-students-in-weston-bath" element={<BathWestonStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-weston-bath" element={<BathWestonFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-weston-bath" element={<BathWestonFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-weston-bath" element={<BathWestonFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-weston-bath" element={<BathWestonFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-weston-bath" element={<BathWestonFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-weston-bath" element={<BathWestonHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-weston-bath" element={<BathWestonHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-weston-bath" element={<BathWestonHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-weston-bath" element={<BathWestonHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-weston-bath" element={<BathWestonHouse7/>}/>
<Route path="shared-8-bedroom-houses-for-students-in-weston-bath" element={<BathWestonHouse8/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-weston-bath" element={<BathWestonHouse9/>}/>
<Route path="student-accommodation-in-bailbrook-bath" element={<BathBailbrook/>}/>
<Route path="shared-houses-for-students-in-bailbrook-bath" element={<BathBailbrookHouse/>}/>
<Route path="shared-flats-for-students-in-bailbrook-bath" element={<BathBailbrookFlat/>}/>
<Route path="studio-apartments-for-students-in-bailbrook-bath" element={<BathBailbrookStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-bailbrook-bath" element={<BathBailbrookFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-bailbrook-bath" element={<BathBailbrookFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-bailbrook-bath" element={<BathBailbrookFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-bailbrook-bath" element={<BathBailbrookFlat4/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-bailbrook-bath" element={<BathBailbrookHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-bailbrook-bath" element={<BathBailbrookHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-bailbrook-bath" element={<BathBailbrookHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-bailbrook-bath" element={<BathBailbrookHouse6/>}/>
<Route path="shared-10-bedroom-houses-for-students-in-bailbrook-bath" element={<BathBailbrookHouse10/>}/>
<Route path="studio-apartments-for-students-in-bailbrook-bath" element={<BathBailbrookStudio1/>}/>
<Route path="student-accommodation-in-yomede-park-bath" element={<BathYomedePark/>}/>
<Route path="shared-houses-for-students-in-yomede-park-bath" element={<BathYomedeParkHouse/>}/>
<Route path="shared-flats-for-students-in-yomede-park-bath" element={<BathYomedeParkFlat/>}/>
<Route path="studio-apartments-for-students-in-yomede-park-bath" element={<BathYomedeParkStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-yomede-park-bath" element={<BathYomedeParkFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-yomede-park-bath" element={<BathYomedeParkFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-yomede-park-bath" element={<BathYomedeParkFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-yomede-park-bath" element={<BathYomedeParkFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-yomede-park-bath" element={<BathYomedeParkFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-yomede-park-bath" element={<BathYomedeParkHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-yomede-park-bath" element={<BathYomedeParkHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-yomede-park-bath" element={<BathYomedeParkHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-yomede-park-bath" element={<BathYomedeParkHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-yomede-park-bath" element={<BathYomedeParkHouse7/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-yomede-park-bath" element={<BathYomedeParkHouse9/>}/>
<Route path="studio-apartments-for-students-in-yomede-park-bath" element={<BathYomedeParkStudio1/>}/>
<Route path="student-accommodation-in-weston-park-bath" element={<BathWestonPark/>}/>
<Route path="shared-houses-for-students-in-weston-park-bath" element={<BathWestonParkHouse/>}/>
<Route path="shared-flats-for-students-in-weston-park-bath" element={<BathWestonParkFlat/>}/>
<Route path="studio-apartments-for-students-in-weston-park-bath" element={<BathWestonParkStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-weston-park-bath" element={<BathWestonParkFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-weston-park-bath" element={<BathWestonParkFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-weston-park-bath" element={<BathWestonParkFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-weston-park-bath" element={<BathWestonParkFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-weston-park-bath" element={<BathWestonParkFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-weston-park-bath" element={<BathWestonParkHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-weston-park-bath" element={<BathWestonParkHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-weston-park-bath" element={<BathWestonParkHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-weston-park-bath" element={<BathWestonParkHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-weston-park-bath" element={<BathWestonParkHouse7/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-weston-park-bath" element={<BathWestonParkHouse9/>}/>
<Route path="studio-apartments-for-students-in-weston-park-bath" element={<BathWestonParkStudio1/>}/>
<Route path="student-accommodation-in-kensington-bath" element={<BathKensington/>}/>
<Route path="shared-houses-for-students-in-kensington-bath" element={<BathKensingtonHouse/>}/>
<Route path="shared-flats-for-students-in-kensington-bath" element={<BathKensingtonFlat/>}/>
<Route path="studio-apartments-for-students-in-kensington-bath" element={<BathKensingtonStudio/>}/>
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
<Route path="student-accommodation-in-larkhall-bath" element={<BathLarkhall/>}/>
<Route path="shared-houses-for-students-in-larkhall-bath" element={<BathLarkhallHouse/>}/>
<Route path="shared-flats-for-students-in-larkhall-bath" element={<BathLarkhallFlat/>}/>
<Route path="studio-apartments-for-students-in-larkhall-bath" element={<BathLarkhallStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-larkhall-bath" element={<BathLarkhallFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-larkhall-bath" element={<BathLarkhallFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-larkhall-bath" element={<BathLarkhallFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-larkhall-bath" element={<BathLarkhallFlat4/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-larkhall-bath" element={<BathLarkhallHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-larkhall-bath" element={<BathLarkhallHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-larkhall-bath" element={<BathLarkhallHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-larkhall-bath" element={<BathLarkhallHouse6/>}/>
<Route path="shared-10-bedroom-houses-for-students-in-larkhall-bath" element={<BathLarkhallHouse10/>}/>
<Route path="studio-apartments-for-students-in-larkhall-bath" element={<BathLarkhallStudio1/>}/>
<Route path="student-accommodation-in-snow-hill-bath" element={<BathSnowHill/>}/>
<Route path="shared-houses-for-students-in-snow-hill-bath" element={<BathSnowHillHouse/>}/>
<Route path="shared-flats-for-students-in-snow-hill-bath" element={<BathSnowHillFlat/>}/>
<Route path="studio-apartments-for-students-in-snow-hill-bath" element={<BathSnowHillStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-snow-hill-bath" element={<BathSnowHillFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-snow-hill-bath" element={<BathSnowHillFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-snow-hill-bath" element={<BathSnowHillFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-snow-hill-bath" element={<BathSnowHillFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-snow-hill-bath" element={<BathSnowHillFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-snow-hill-bath" element={<BathSnowHillHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-snow-hill-bath" element={<BathSnowHillHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-snow-hill-bath" element={<BathSnowHillHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-snow-hill-bath" element={<BathSnowHillHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-snow-hill-bath" element={<BathSnowHillHouse7/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-snow-hill-bath" element={<BathSnowHillHouse9/>}/>
<Route path="studio-apartments-for-students-in-snow-hill-bath" element={<BathSnowHillStudio1/>}/>
<Route path="student-accommodation-in-primrose-hill-bath" element={<BathPrimroseHill/>}/>
<Route path="shared-houses-for-students-in-primrose-hill-bath" element={<BathPrimroseHillHouse/>}/>
<Route path="shared-flats-for-students-in-primrose-hill-bath" element={<BathPrimroseHillFlat/>}/>
<Route path="studio-apartments-for-students-in-primrose-hill-bath" element={<BathPrimroseHillStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-primrose-hill-bath" element={<BathPrimroseHillFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-primrose-hill-bath" element={<BathPrimroseHillFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-primrose-hill-bath" element={<BathPrimroseHillFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-primrose-hill-bath" element={<BathPrimroseHillFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-primrose-hill-bath" element={<BathPrimroseHillFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-primrose-hill-bath" element={<BathPrimroseHillHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-primrose-hill-bath" element={<BathPrimroseHillHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-primrose-hill-bath" element={<BathPrimroseHillHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-primrose-hill-bath" element={<BathPrimroseHillHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-primrose-hill-bath" element={<BathPrimroseHillHouse7/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-primrose-hill-bath" element={<BathPrimroseHillHouse9/>}/>
<Route path="studio-apartments-for-students-in-primrose-hill-bath" element={<BathPrimroseHillStudio1/>}/>
<Route path="student-accommodation-in-raglands-bath" element={<BathRaglands/>}/>
<Route path="shared-houses-for-students-in-raglands-bath" element={<BathRaglandsHouse/>}/>
<Route path="shared-flats-for-students-in-raglands-bath" element={<BathRaglandsFlat/>}/>
<Route path="studio-apartments-for-students-in-raglands-bath" element={<BathRaglandsStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-raglands-bath" element={<BathRaglandsFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-raglands-bath" element={<BathRaglandsFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-raglands-bath" element={<BathRaglandsFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-raglands-bath" element={<BathRaglandsFlat4/>}/>
<Route path="student-accommodation-in-locksbrook-bath" element={<BathLocksbrook/>}/>
<Route path="shared-houses-for-students-in-locksbrook-bath" element={<BathLocksbrookHouse/>}/>
<Route path="shared-flats-for-students-in-locksbrook-bath" element={<BathLocksbrookFlat/>}/>
<Route path="studio-apartments-for-students-in-locksbrook-bath" element={<BathLocksbrookStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-locksbrook-bath" element={<BathLocksbrookFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-locksbrook-bath" element={<BathLocksbrookFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-locksbrook-bath" element={<BathLocksbrookFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-locksbrook-bath" element={<BathLocksbrookFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-locksbrook-bath" element={<BathLocksbrookFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-locksbrook-bath" element={<BathLocksbrookHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-locksbrook-bath" element={<BathLocksbrookHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-locksbrook-bath" element={<BathLocksbrookHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-locksbrook-bath" element={<BathLocksbrookHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-locksbrook-bath" element={<BathLocksbrookHouse7/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-locksbrook-bath" element={<BathLocksbrookHouse9/>}/>
<Route path="studio-apartments-for-students-in-locksbrook-bath" element={<BathLocksbrookStudio1/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-raglands-bath" element={<BathRaglandsFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-raglands-bath" element={<BathRaglandsHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-raglands-bath" element={<BathRaglandsHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-raglands-bath" element={<BathRaglandsHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-raglands-bath" element={<BathRaglandsHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-raglands-bath" element={<BathRaglandsHouse7/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-raglands-bath" element={<BathRaglandsHouse9/>}/>
<Route path="studio-apartments-for-students-in-raglands-bath" element={<BathRaglandsStudio1/>}/>
<Route path="student-accommodation-in-rosehill-bath" element={<BathRosehill/>}/>
<Route path="shared-houses-for-students-in-rosehill-bath" element={<BathRosehillHouse/>}/>
<Route path="shared-flats-for-students-in-rosehill-bath" element={<BathRosehillFlat/>}/>
<Route path="studio-apartments-for-students-in-rosehill-bath" element={<BathRosehillStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-rosehill-bath" element={<BathRosehillFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-rosehill-bath" element={<BathRosehillFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-rosehill-bath" element={<BathRosehillFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-rosehill-bath" element={<BathRosehillFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-rosehill-bath" element={<BathRosehillFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-rosehill-bath" element={<BathRosehillHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-rosehill-bath" element={<BathRosehillHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-rosehill-bath" element={<BathRosehillHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-rosehill-bath" element={<BathRosehillHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-rosehill-bath" element={<BathRosehillHouse7/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-rosehill-bath" element={<BathRosehillHouse9/>}/>
<Route path="studio-apartments-for-students-in-rosehill-bath" element={<BathRosehillStudio1/>}/>
<Route path="student-accommodation-in-rudmore-park-bath" element={<BathRudmorePark/>}/>
<Route path="shared-houses-for-students-in-rudmore-park-bath" element={<BathRudmoreParkHouse/>}/>
<Route path="shared-flats-for-students-in-rudmore-park-bath" element={<BathRudmoreParkFlat/>}/>
<Route path="studio-apartments-for-students-in-rudmore-park-bath" element={<BathRudmoreParkStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-rudmore-park-bath" element={<BathRudmoreParkFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-rudmore-park-bath" element={<BathRudmoreParkFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-rudmore-park-bath" element={<BathRudmoreParkFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-rudmore-park-bath" element={<BathRudmoreParkFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-rudmore-park-bath" element={<BathRudmoreParkFlat5/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-rudmore-park-bath" element={<BathRudmoreParkHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-rudmore-park-bath" element={<BathRudmoreParkHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-rudmore-park-bath" element={<BathRudmoreParkHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-rudmore-park-bath" element={<BathRudmoreParkHouse6/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-rudmore-park-bath" element={<BathRudmoreParkHouse7/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-rudmore-park-bath" element={<BathRudmoreParkHouse9/>}/>
<Route path="studio-apartments-for-students-in-rudmore-park-bath" element={<BathRudmoreParkStudio1/>}/>
<Route path="student-accommodation-in-avon-park-bath" element={<BathAvonPark/>}/>
<Route path="shared-houses-for-students-in-avon-park-bath" element={<BathAvonParkHouse/>}/>
<Route path="shared-flats-for-students-in-avon-park-bath" element={<BathAvonParkFlat/>}/>
<Route path="studio-apartments-for-students-in-avon-park-bath" element={<BathAvonParkStudio/>}/>
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
<Route path="student-accommodation-in-beacon-hill-bath" element={<BathBeaconHill/>}/>
<Route path="shared-houses-for-students-in-beacon-hill-bath" element={<BathBeaconHillHouse/>}/>
<Route path="shared-flats-for-students-in-beacon-hill-bath" element={<BathBeaconHillFlat/>}/>
<Route path="studio-apartments-for-students-in-beacon-hill-bath" element={<BathBeaconHillStudio/>}/>
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
<Route path="student-accommodation-in-beechen-cliff-bath" element={<BathBeechenCliff/>}/>
<Route path="shared-houses-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffHouse/>}/>
<Route path="shared-flats-for-students-in-beechen-cliff-bath" element={<BathBeechenCliffFlat/>}/>
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
<Route path="student-accommodation-in-crescent-gardens-bath" element={<BathCrescentGardens/>}/>
<Route path="shared-houses-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensHouse/>}/>
<Route path="shared-flats-for-students-in-crescent-gardens-bath" element={<BathCrescentGardensFlat/>}/>
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
<Route path="student-accommodation-in-dolemeads-bath" element={<BathDolemeads/>}/>
<Route path="shared-houses-for-students-in-dolemeads-bath" element={<BathDolemeadsHouse/>}/>
<Route path="shared-flats-for-students-in-dolemeads-bath" element={<BathDolemeadsFlat/>}/>
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
<Route path="student-accommodation-in-hat-bath" element={<BathHat/>}/>
<Route path="shared-houses-for-students-in-hat-bath" element={<BathHatHouse/>}/>
<Route path="shared-flats-for-students-in-hat-bath" element={<BathHatFlat/>}/>
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
<Route path="student-accommodation-in-hatfield-buildings-bath" element={<BathHatfieldBuildings/>}/>
<Route path="shared-houses-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsHouse/>}/>
<Route path="shared-flats-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat/>}/>
<Route path="studio-apartments-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsFlat10/>}/>
<Route path="studio-apartments-for-students-in-hatfield-buildings-bath" element={<BathHatfieldBuildingsStudio1/>}/>
<Route path="student-accommodation-in-kingsmead-bath" element={<BathKingsmead/>}/>
<Route path="shared-houses-for-students-in-kingsmead-bath" element={<BathKingsmeadHouse/>}/>
<Route path="shared-flats-for-students-in-kingsmead-bath" element={<BathKingsmeadFlat/>}/>
<Route path="studio-apartments-for-students-in-kingsmead-bath" element={<BathKingsmeadStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-kingsmead-bath" element={<BathKingsmeadFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-kingsmead-bath" element={<BathKingsmeadFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-kingsmead-bath" element={<BathKingsmeadFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-kingsmead-bath" element={<BathKingsmeadFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-kingsmead-bath" element={<BathKingsmeadFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-kingsmead-bath" element={<BathKingsmeadFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-kingsmead-bath" element={<BathKingsmeadFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-kingsmead-bath" element={<BathKingsmeadFlat10/>}/>
<Route path="studio-apartments-for-students-in-kingsmead-bath" element={<BathKingsmeadStudio1/>}/>
<Route path="student-accommodation-in-lambridge-bath" element={<BathLambridge/>}/>
<Route path="shared-houses-for-students-in-lambridge-bath" element={<BathLambridgeHouse/>}/>
<Route path="shared-flats-for-students-in-lambridge-bath" element={<BathLambridgeFlat/>}/>
<Route path="studio-apartments-for-students-in-lambridge-bath" element={<BathLambridgeStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-lambridge-bath" element={<BathLambridgeFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-lambridge-bath" element={<BathLambridgeFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-lambridge-bath" element={<BathLambridgeFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-lambridge-bath" element={<BathLambridgeFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-lambridge-bath" element={<BathLambridgeFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-lambridge-bath" element={<BathLambridgeFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-lambridge-bath" element={<BathLambridgeFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-lambridge-bath" element={<BathLambridgeFlat10/>}/>
<Route path="studio-apartments-for-students-in-lambridge-bath" element={<BathLambridgeStudio1/>}/>
<Route path="student-accommodation-in-lower-swainswick-bath" element={<BathLowerSwainswick/>}/>
<Route path="shared-houses-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickHouse/>}/>
<Route path="shared-flats-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat/>}/>
<Route path="studio-apartments-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickFlat10/>}/>
<Route path="studio-apartments-for-students-in-lower-swainswick-bath" element={<BathLowerSwainswickStudio1/>}/>
<Route path="student-accommodation-in-lyncombe-hill-bath" element={<BathLyncombeHill/>}/>
<Route path="shared-houses-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillHouse/>}/>
<Route path="shared-flats-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat/>}/>
<Route path="studio-apartments-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillFlat10/>}/>
<Route path="studio-apartments-for-students-in-lyncombe-hill-bath" element={<BathLyncombeHillStudio1/>}/>
<Route path="student-accommodation-in-lyncombe-vale-bath" element={<BathLyncombeVale/>}/>
<Route path="shared-houses-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeHouse/>}/>
<Route path="shared-flats-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat/>}/>
<Route path="studio-apartments-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeFlat10/>}/>
<Route path="studio-apartments-for-students-in-lyncombe-vale-bath" element={<BathLyncombeValeStudio1/>}/>
<Route path="student-accommodation-in-perrymead-bath" element={<BathPerrymead/>}/>
<Route path="shared-houses-for-students-in-perrymead-bath" element={<BathPerrymeadHouse/>}/>
<Route path="shared-flats-for-students-in-perrymead-bath" element={<BathPerrymeadFlat/>}/>
<Route path="studio-apartments-for-students-in-perrymead-bath" element={<BathPerrymeadStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-perrymead-bath" element={<BathPerrymeadFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-perrymead-bath" element={<BathPerrymeadFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-perrymead-bath" element={<BathPerrymeadFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-perrymead-bath" element={<BathPerrymeadFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-perrymead-bath" element={<BathPerrymeadFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-perrymead-bath" element={<BathPerrymeadFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-perrymead-bath" element={<BathPerrymeadFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-perrymead-bath" element={<BathPerrymeadFlat10/>}/>
<Route path="studio-apartments-for-students-in-perrymead-bath" element={<BathPerrymeadStudio1/>}/>
<Route path="student-accommodation-in-rush-hill-bath" element={<BathRushHill/>}/>
<Route path="shared-houses-for-students-in-rush-hill-bath" element={<BathRushHillHouse/>}/>
<Route path="shared-flats-for-students-in-rush-hill-bath" element={<BathRushHillFlat/>}/>
<Route path="studio-apartments-for-students-in-rush-hill-bath" element={<BathRushHillStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-rush-hill-bath" element={<BathRushHillFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-rush-hill-bath" element={<BathRushHillFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-rush-hill-bath" element={<BathRushHillFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-rush-hill-bath" element={<BathRushHillFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-rush-hill-bath" element={<BathRushHillFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-rush-hill-bath" element={<BathRushHillFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-rush-hill-bath" element={<BathRushHillFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-rush-hill-bath" element={<BathRushHillFlat10/>}/>
<Route path="studio-apartments-for-students-in-rush-hill-bath" element={<BathRushHillStudio1/>}/>
<Route path="student-accommodation-in-sion-hill-bath" element={<BathSionHill/>}/>
<Route path="shared-houses-for-students-in-sion-hill-bath" element={<BathSionHillHouse/>}/>
<Route path="shared-flats-for-students-in-sion-hill-bath" element={<BathSionHillFlat/>}/>
<Route path="studio-apartments-for-students-in-sion-hill-bath" element={<BathSionHillStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-sion-hill-bath" element={<BathSionHillFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-sion-hill-bath" element={<BathSionHillFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-sion-hill-bath" element={<BathSionHillFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-sion-hill-bath" element={<BathSionHillFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-sion-hill-bath" element={<BathSionHillFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-sion-hill-bath" element={<BathSionHillFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-sion-hill-bath" element={<BathSionHillFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-sion-hill-bath" element={<BathSionHillFlat10/>}/>
<Route path="studio-apartments-for-students-in-sion-hill-bath" element={<BathSionHillStudio1/>}/>
<Route path="student-accommodation-in-south-lyncombe-bath" element={<BathSouthLyncombe/>}/>
<Route path="shared-houses-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeHouse/>}/>
<Route path="shared-flats-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat/>}/>
<Route path="studio-apartments-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeFlat10/>}/>
<Route path="studio-apartments-for-students-in-south-lyncombe-bath" element={<BathSouthLyncombeStudio1/>}/>
<Route path="student-accommodation-in-sydney-gardens-bath" element={<BathSydneyGardens/>}/>
<Route path="shared-houses-for-students-in-sydney-gardens-bath" element={<BathSydneyGardensHouse/>}/>
<Route path="shared-flats-for-students-in-sydney-gardens-bath" element={<BathSydneyGardensFlat/>}/>
<Route path="studio-apartments-for-students-in-sydney-gardens-bath" element={<BathSydneyGardensStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-sydney-gardens-bath" element={<BathSydneyGardensFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-sydney-gardens-bath" element={<BathSydneyGardensFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-sydney-gardens-bath" element={<BathSydneyGardensFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-sydney-gardens-bath" element={<BathSydneyGardensFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-sydney-gardens-bath" element={<BathSydneyGardensFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-sydney-gardens-bath" element={<BathSydneyGardensFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-sydney-gardens-bath" element={<BathSydneyGardensFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-sydney-gardens-bath" element={<BathSydneyGardensFlat10/>}/>
<Route path="studio-apartments-for-students-in-sydney-gardens-bath" element={<BathSydneyGardensStudio1/>}/>
<Route path="student-accommodation-in-twerton-on-avon-bath" element={<BathTwertonOnAvon/>}/>
<Route path="shared-houses-for-students-in-twerton-on-avon-bath" element={<BathTwertonOnAvonHouse/>}/>
<Route path="shared-flats-for-students-in-twerton-on-avon-bath" element={<BathTwertonOnAvonFlat/>}/>
<Route path="studio-apartments-for-students-in-twerton-on-avon-bath" element={<BathTwertonOnAvonStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-twerton-on-avon-bath" element={<BathTwertonOnAvonFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-twerton-on-avon-bath" element={<BathTwertonOnAvonFlat2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-twerton-on-avon-bath" element={<BathTwertonOnAvonHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-twerton-on-avon-bath" element={<BathTwertonOnAvonHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-twerton-on-avon-bath" element={<BathTwertonOnAvonHouse5/>}/>
<Route path="student-accommodation-in-upper-weston-bath" element={<BathUpperWeston/>}/>
<Route path="shared-houses-for-students-in-upper-weston-bath" element={<BathUpperWestonHouse/>}/>
<Route path="shared-flats-for-students-in-upper-weston-bath" element={<BathUpperWestonFlat/>}/>
<Route path="studio-apartments-for-students-in-upper-weston-bath" element={<BathUpperWestonStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-upper-weston-bath" element={<BathUpperWestonFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-upper-weston-bath" element={<BathUpperWestonFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-upper-weston-bath" element={<BathUpperWestonFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-upper-weston-bath" element={<BathUpperWestonFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-upper-weston-bath" element={<BathUpperWestonFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-upper-weston-bath" element={<BathUpperWestonFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-upper-weston-bath" element={<BathUpperWestonFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-upper-weston-bath" element={<BathUpperWestonFlat10/>}/>
<Route path="studio-apartments-for-students-in-upper-weston-bath" element={<BathUpperWestonStudio1/>}/>
<Route path="student-accommodation-in-villa-fields-bath" element={<BathVillaFields/>}/>
<Route path="shared-houses-for-students-in-villa-fields-bath" element={<BathVillaFieldsHouse/>}/>
<Route path="shared-flats-for-students-in-villa-fields-bath" element={<BathVillaFieldsFlat/>}/>
<Route path="studio-apartments-for-students-in-villa-fields-bath" element={<BathVillaFieldsStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-villa-fields-bath" element={<BathVillaFieldsFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-villa-fields-bath" element={<BathVillaFieldsFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-villa-fields-bath" element={<BathVillaFieldsFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-villa-fields-bath" element={<BathVillaFieldsFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-villa-fields-bath" element={<BathVillaFieldsFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-villa-fields-bath" element={<BathVillaFieldsFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-villa-fields-bath" element={<BathVillaFieldsFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-villa-fields-bath" element={<BathVillaFieldsFlat10/>}/>
<Route path="studio-apartments-for-students-in-villa-fields-bath" element={<BathVillaFieldsStudio1/>}/>
<Route path="student-accommodation-in-williamstowe-bath" element={<BathWilliamstowe/>}/>
<Route path="shared-houses-for-students-in-williamstowe-bath" element={<BathWilliamstoweHouse/>}/>
<Route path="shared-flats-for-students-in-williamstowe-bath" element={<BathWilliamstoweFlat/>}/>
<Route path="studio-apartments-for-students-in-williamstowe-bath" element={<BathWilliamstoweStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-williamstowe-bath" element={<BathWilliamstoweFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-williamstowe-bath" element={<BathWilliamstoweFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-williamstowe-bath" element={<BathWilliamstoweFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-williamstowe-bath" element={<BathWilliamstoweFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-williamstowe-bath" element={<BathWilliamstoweFlat5/>}/>
<Route path="shared-6-bedroom-flats-for-students-in-williamstowe-bath" element={<BathWilliamstoweFlat6/>}/>
<Route path="shared-9-bedroom-flats-for-students-in-williamstowe-bath" element={<BathWilliamstoweFlat9/>}/>
<Route path="shared-10-bedroom-flats-for-students-in-williamstowe-bath" element={<BathWilliamstoweFlat10/>}/>
<Route path="studio-apartments-for-students-in-williamstowe-bath" element={<BathWilliamstoweStudio1/>}/>
<Route path="student-accommodation-in-walcot-bath" element={<BathWalcot/>}/>
<Route path="shared-houses-for-students-in-walcot-bath" element={<BathWalcotHouse/>}/>
<Route path="shared-flats-for-students-in-walcot-bath" element={<BathWalcotFlat/>}/>
<Route path="studio-apartments-for-students-in-walcot-bath" element={<BathWalcotStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-walcot-bath" element={<BathWalcotFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-walcot-bath" element={<BathWalcotFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-walcot-bath" element={<BathWalcotFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-walcot-bath" element={<BathWalcotFlat4/>}/>
<Route path="shared-2-bedroom-houses-for-students-in-walcot-bath" element={<BathWalcotHouse2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-walcot-bath" element={<BathWalcotHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-walcot-bath" element={<BathWalcotHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-walcot-bath" element={<BathWalcotHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-walcot-bath" element={<BathWalcotHouse6/>}/>
<Route path="student-accommodation-in-whiteway-bath" element={<BathWhiteway/>}/>
<Route path="shared-houses-for-students-in-whiteway-bath" element={<BathWhitewayHouse/>}/>
<Route path="shared-flats-for-students-in-whiteway-bath" element={<BathWhitewayFlat/>}/>
<Route path="studio-apartments-for-students-in-whiteway-bath" element={<BathWhitewayStudio/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-whiteway-bath" element={<BathWhitewayHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-whiteway-bath" element={<BathWhitewayHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-whiteway-bath" element={<BathWhitewayHouse6/>}/>
<Route path="student-accommodation-in-lansdown-bath" element={<BathLansdown/>}/>
<Route path="shared-houses-for-students-in-lansdown-bath" element={<BathLansdownHouse/>}/>
<Route path="shared-flats-for-students-in-lansdown-bath" element={<BathLansdownFlat/>}/>
<Route path="studio-apartments-for-students-in-lansdown-bath" element={<BathLansdownStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-lansdown-bath" element={<BathLansdownFlat1/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-lansdown-bath" element={<BathLansdownFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-lansdown-bath" element={<BathLansdownFlat3/>}/>
<Route path="shared-4-bedroom-flats-for-students-in-lansdown-bath" element={<BathLansdownFlat4/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-lansdown-bath" element={<BathLansdownFlat5/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-lansdown-bath" element={<BathLansdownHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-lansdown-bath" element={<BathLansdownHouse5/>}/>
<Route path="shared-9-bedroom-houses-for-students-in-lansdown-bath" element={<BathLansdownHouse9/>}/>
<Route path="student-accommodation-in-bathwick-bath" element={<BathBathwick/>}/>
<Route path="shared-houses-for-students-in-bathwick-bath" element={<BathBathwickHouse/>}/>
<Route path="shared-flats-for-students-in-bathwick-bath" element={<BathBathwickFlat/>}/>
<Route path="studio-apartments-for-students-in-bathwick-bath" element={<BathBathwickStudio/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-bathwick-bath" element={<BathBathwickFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-bathwick-bath" element={<BathBathwickFlat3/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-bathwick-bath" element={<BathBathwickFlat5/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-bathwick-bath" element={<BathBathwickHouse5/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-bathwick-bath" element={<BathBathwickHouse7/>}/>
<Route path="studio-apartments-for-students-in-bathwick-bath" element={<BathBathwickStudio1/>}/>
<Route path="student-accommodation-in-fairfield-park-bath" element={<BathFairfieldPark/>}/>
<Route path="shared-houses-for-students-in-fairfield-park-bath" element={<BathFairfieldParkHouse/>}/>
<Route path="shared-flats-for-students-in-fairfield-park-bath" element={<BathFairfieldParkFlat/>}/>
<Route path="studio-apartments-for-students-in-fairfield-park-bath" element={<BathFairfieldParkStudio/>}/>
<Route path="shared-1-bedroom-flats-for-students-in-fairfield-park-bath" element={<BathFairfieldParkFlat1/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-fairfield-park-bath" element={<BathFairfieldParkFlat3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-fairfield-park-bath" element={<BathFairfieldParkHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-fairfield-park-bath" element={<BathFairfieldParkHouse5/>}/>
<Route path="student-accommodation-in-bradford-park-bath" element={<BathBradfordPark/>}/>
<Route path="shared-houses-for-students-in-bradford-park-bath" element={<BathBradfordParkHouse/>}/>
<Route path="shared-flats-for-students-in-bradford-park-bath" element={<BathBradfordParkFlat/>}/>
<Route path="studio-apartments-for-students-in-bradford-park-bath" element={<BathBradfordParkStudio/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-bradford-park-bath" element={<BathBradfordParkFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-bradford-park-bath" element={<BathBradfordParkFlat3/>}/>
<Route path="shared-2-bedroom-houses-for-students-in-bradford-park-bath" element={<BathBradfordParkHouse2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-bradford-park-bath" element={<BathBradfordParkHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-bradford-park-bath" element={<BathBradfordParkHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-bradford-park-bath" element={<BathBradfordParkHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-bradford-park-bath" element={<BathBradfordParkHouse6/>}/>
<Route path="student-accommodation-in-combe-down-bath" element={<BathCombeDown/>}/>
<Route path="shared-houses-for-students-in-combe-down-bath" element={<BathCombeDownHouse/>}/>
<Route path="shared-flats-for-students-in-combe-down-bath" element={<BathCombeDownFlat/>}/>
<Route path="studio-apartments-for-students-in-combe-down-bath" element={<BathCombeDownStudio/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-combe-down-bath" element={<BathCombeDownFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-combe-down-bath" element={<BathCombeDownFlat3/>}/>
<Route path="shared-2-bedroom-houses-for-students-in-combe-down-bath" element={<BathCombeDownHouse2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-combe-down-bath" element={<BathCombeDownHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-combe-down-bath" element={<BathCombeDownHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-combe-down-bath" element={<BathCombeDownHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-combe-down-bath" element={<BathCombeDownHouse6/>}/>
<Route path="student-accommodation-in-ralph-allen-park-bath" element={<BathRalphAllenPark/>}/>
<Route path="shared-houses-for-students-in-ralph-allen-park-bath" element={<BathRalphAllenParkHouse/>}/>
<Route path="shared-flats-for-students-in-ralph-allen-park-bath" element={<BathRalphAllenParkFlat/>}/>
<Route path="studio-apartments-for-students-in-ralph-allen-park-bath" element={<BathRalphAllenParkStudio/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-ralph-allen-park-bath" element={<BathRalphAllenParkFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-ralph-allen-park-bath" element={<BathRalphAllenParkFlat3/>}/>
<Route path="shared-2-bedroom-houses-for-students-in-ralph-allen-park-bath" element={<BathRalphAllenParkHouse2/>}/>
<Route path="shared-3-bedroom-houses-for-students-in-ralph-allen-park-bath" element={<BathRalphAllenParkHouse3/>}/>
<Route path="shared-4-bedroom-houses-for-students-in-ralph-allen-park-bath" element={<BathRalphAllenParkHouse4/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-ralph-allen-park-bath" element={<BathRalphAllenParkHouse5/>}/>
<Route path="shared-6-bedroom-houses-for-students-in-ralph-allen-park-bath" element={<BathRalphAllenParkHouse6/>}/>
<Route path="student-accommodation-in-tyning-bath" element={<BathTyning/>}/>
<Route path="shared-houses-for-students-in-tyning-bath" element={<BathTyningHouse/>}/>
<Route path="shared-flats-for-students-in-tyning-bath" element={<BathTyningFlat/>}/>
<Route path="studio-apartments-for-students-in-tyning-bath" element={<BathTyningStudio/>}/>
<Route path="shared-2-bedroom-flats-for-students-in-tyning-bath" element={<BathTyningFlat2/>}/>
<Route path="shared-3-bedroom-flats-for-students-in-tyning-bath" element={<BathTyningFlat3/>}/>
<Route path="shared-5-bedroom-flats-for-students-in-tyning-bath" element={<BathTyningFlat5/>}/>
<Route path="shared-5-bedroom-houses-for-students-in-tyning-bath" element={<BathTyningHouse5/>}/>
<Route path="shared-7-bedroom-houses-for-students-in-tyning-bath" element={<BathTyningHouse7/>}/>
<Route path="studio-apartments-for-students-in-tyning-bath" element={<BathTyningStudio1/>}/>
          {/* routeSectionEnd*/}          

          {/* <Route path="/aberdeen/aberdeen-city-centre" element={<AberdeenAberdeenCityCentre/>}/>
          <Route path="/aberdeen/middlefield" element={<AberdeenMiddlefield/>}/> */}

          <Route path="*" element={<NoPage />} />                                            
        </Route>
      </Routes>
      </Suspense>
    </Router>    
    </div>
  );
}

export default App;
