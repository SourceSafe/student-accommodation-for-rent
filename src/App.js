import React, {Suspense, lazy} from "react";
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";


//*** js:import-townStart
const Aberdeen = lazy(() => import('./pages/town/Aberdeen'));
const Aberystwyth = lazy(() => import('./pages/town/Aberystwyth'));
const Bangor = lazy(() => import('./pages/town/Bangor'));
const Bath = lazy(() => import('./pages/town/Bath'));
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
const AberdeenAberdeenCityCentre = lazy(() => import('./pages/town/AberdeenAberdeenCityCentre'));
const AberdeenMiddlefield = lazy(() => import('./pages/town/AberdeenMiddlefield'));
const AberdeenRuthrieston = lazy(() => import('./pages/town/AberdeenRuthrieston'));
const AberdeenKittybrewster = lazy(() => import('./pages/town/AberdeenKittybrewster'));
const AberdeenHilton = lazy(() => import('./pages/town/AberdeenHilton'));
const AberdeenRosehill = lazy(() => import('./pages/town/AberdeenRosehill'));
const AberdeenFerryhill = lazy(() => import('./pages/town/AberdeenFerryhill'));
const AberdeenRosemount = lazy(() => import('./pages/town/AberdeenRosemount'));
const AberdeenTorry = lazy(() => import('./pages/town/AberdeenTorry'));
const AberdeenGarthdee = lazy(() => import('./pages/town/AberdeenGarthdee'));
const AberdeenAberdeenWestEnd = lazy(() => import('./pages/town/AberdeenAberdeenWestEnd'));
const AberdeenForritBrae = lazy(() => import('./pages/town/AberdeenForritBrae'));
const AberdeenBankhead = lazy(() => import('./pages/town/AberdeenBankhead'));
const AberdeenChapelOfStoneywood = lazy(() => import('./pages/town/AberdeenChapelOfStoneywood'));
const AberdeenGreenburn = lazy(() => import('./pages/town/AberdeenGreenburn'));
const AberdeenNewhills = lazy(() => import('./pages/town/AberdeenNewhills'));
const AberdeenUpperPersley = lazy(() => import('./pages/town/AberdeenUpperPersley'));
const AberdeenTillydrone = lazy(() => import('./pages/town/AberdeenTillydrone'));
const AberdeenBucksburn = lazy(() => import('./pages/town/AberdeenBucksburn'));
const AberdeenHayton = lazy(() => import('./pages/town/AberdeenHayton'));
const AberdeenWoodside = lazy(() => import('./pages/town/AberdeenWoodside'));
const AberdeenTownhead = lazy(() => import('./pages/town/AberdeenTownhead'));
const AberdeenMarybrae = lazy(() => import('./pages/town/AberdeenMarybrae'));
const AberdeenAltries = lazy(() => import('./pages/town/AberdeenAltries'));
const AberdeenKingcausie = lazy(() => import('./pages/town/AberdeenKingcausie'));
const AberdeenKirktonOfMaryculter = lazy(() => import('./pages/town/AberdeenKirktonOfMaryculter'));
const AberdeenStranog = lazy(() => import('./pages/town/AberdeenStranog'));
const AberdeenWedderhill = lazy(() => import('./pages/town/AberdeenWedderhill'));
const AberdeenDyce = lazy(() => import('./pages/town/AberdeenDyce'));
const AberdeenStoneywood = lazy(() => import('./pages/town/AberdeenStoneywood'));
const AberystwythPenparke = lazy(() => import('./pages/town/AberystwythPenparke'));
const AberystwythWaunfawr = lazy(() => import('./pages/town/AberystwythWaunfawr'));
const AberystwythGelliangharad = lazy(() => import('./pages/town/AberystwythGelliangharad'));
const AberystwythSalem = lazy(() => import('./pages/town/AberystwythSalem'));
const AberystwythCaeffynnon = lazy(() => import('./pages/town/AberystwythCaeffynnon'));
const AberystwythPenLlwyn = lazy(() => import('./pages/town/AberystwythPenLlwyn'));
const AberystwythWallog = lazy(() => import('./pages/town/AberystwythWallog'));
const AberystwythCwmErfin = lazy(() => import('./pages/town/AberystwythCwmErfin'));
const AberystwythPenBontRhydybeddau = lazy(() => import('./pages/town/AberystwythPenBontRhydybeddau'));
const AberystwythDollwen = lazy(() => import('./pages/town/AberystwythDollwen'));
const AberystwythOldGoginan = lazy(() => import('./pages/town/AberystwythOldGoginan'));
const AberystwythParcYLlyn = lazy(() => import('./pages/town/AberystwythParcYLlyn'));
const AberystwythRhydYFelin = lazy(() => import('./pages/town/AberystwythRhydYFelin'));
const AberystwythBroginin = lazy(() => import('./pages/town/AberystwythBroginin'));
const AberystwythPenRhiwNewydd = lazy(() => import('./pages/town/AberystwythPenRhiwNewydd'));
const AberystwythTroedYrHenRiw = lazy(() => import('./pages/town/AberystwythTroedYrHenRiw'));
const AberystwythSouthGate = lazy(() => import('./pages/town/AberystwythSouthGate'));
const BangorGarddDenman = lazy(() => import('./pages/town/BangorGarddDenman'));
const BangorNantPorth = lazy(() => import('./pages/town/BangorNantPorth'));
const BangorCaellepa = lazy(() => import('./pages/town/BangorCaellepa'));
const BangorFfriddoedd = lazy(() => import('./pages/town/BangorFfriddoedd'));
const BangorGlanAdda = lazy(() => import('./pages/town/BangorGlanAdda'));
const BangorHirael = lazy(() => import('./pages/town/BangorHirael'));
const BangorMaesYGeirchen = lazy(() => import('./pages/town/BangorMaesYGeirchen'));
const BangorTyddynLlwydyn = lazy(() => import('./pages/town/BangorTyddynLlwydyn'));
const BangorUpperGarth = lazy(() => import('./pages/town/BangorUpperGarth'));
const BangorVictoriaPark = lazy(() => import('./pages/town/BangorVictoriaPark'));
const BangorUpperBangor = lazy(() => import('./pages/town/BangorUpperBangor'));
const BangorPendref = lazy(() => import('./pages/town/BangorPendref'));
const BangorPortPenrhyn = lazy(() => import('./pages/town/BangorPortPenrhyn'));
const BangorPenchwintan = lazy(() => import('./pages/town/BangorPenchwintan'));
const BangorPenlon = lazy(() => import('./pages/town/BangorPenlon'));
const BangorPenrhosGarnedd = lazy(() => import('./pages/town/BangorPenrhosGarnedd'));
const BangorSiliwen = lazy(() => import('./pages/town/BangorSiliwen'));
const BangorTanYMaes = lazy(() => import('./pages/town/BangorTanYMaes'));
const BangorWaenPentir = lazy(() => import('./pages/town/BangorWaenPentir'));
const BangorParcVaynol = lazy(() => import('./pages/town/BangorParcVaynol'));
const BangorBryn = lazy(() => import('./pages/town/BangorBryn'));
const BangorParcPenrhyn = lazy(() => import('./pages/town/BangorParcPenrhyn'));
const BathOldfieldPark = lazy(() => import('./pages/town/BathOldfieldPark'));
const BathBathSpa = lazy(() => import('./pages/town/BathBathSpa'));
const BathSladebrook = lazy(() => import('./pages/town/BathSladebrook'));
const BathTwertonHill = lazy(() => import('./pages/town/BathTwertonHill'));
const BathTheOval = lazy(() => import('./pages/town/BathTheOval'));
const BathMoorlands = lazy(() => import('./pages/town/BathMoorlands'));
const BathKingsway = lazy(() => import('./pages/town/BathKingsway'));
const BathBloomfield = lazy(() => import('./pages/town/BathBloomfield'));
const BathSouthdown = lazy(() => import('./pages/town/BathSouthdown'));
const BathSouthTwerton = lazy(() => import('./pages/town/BathSouthTwerton'));
const BathTwerton = lazy(() => import('./pages/town/BathTwerton'));
const BathPennHill = lazy(() => import('./pages/town/BathPennHill'));
const BathLowerWeston = lazy(() => import('./pages/town/BathLowerWeston'));
const BathEastTwerton = lazy(() => import('./pages/town/BathEastTwerton'));
const BathOddDown = lazy(() => import('./pages/town/BathOddDown'));
const BathNewbridge = lazy(() => import('./pages/town/BathNewbridge'));
const BathWidcombe = lazy(() => import('./pages/town/BathWidcombe'));
const BathBearFlat = lazy(() => import('./pages/town/BathBearFlat'));
const BathWeston = lazy(() => import('./pages/town/BathWeston'));
const BathBailbrook = lazy(() => import('./pages/town/BathBailbrook'));
const BathYomedePark = lazy(() => import('./pages/town/BathYomedePark'));
const BathWestonPark = lazy(() => import('./pages/town/BathWestonPark'));
const BathKensington = lazy(() => import('./pages/town/BathKensington'));
const BathLarkhall = lazy(() => import('./pages/town/BathLarkhall'));
const BathSnowHill = lazy(() => import('./pages/town/BathSnowHill'));
const BathPrimroseHill = lazy(() => import('./pages/town/BathPrimroseHill'));
const BathRaglands = lazy(() => import('./pages/town/BathRaglands'));
const BathRosehill = lazy(() => import('./pages/town/BathRosehill'));
const BathRudmorePark = lazy(() => import('./pages/town/BathRudmorePark'));
const BathLocksbrook = lazy(() => import('./pages/town/BathLocksbrook'));
const BathAvonPark = lazy(() => import('./pages/town/BathAvonPark'));
const BathBeaconHill = lazy(() => import('./pages/town/BathBeaconHill'));
const BathTwertonOnAvon = lazy(() => import('./pages/town/BathTwertonOnAvon'));
const BathHat = lazy(() => import('./pages/town/BathHat'));
const BathLyncombeHill = lazy(() => import('./pages/town/BathLyncombeHill'));
const BathHatfieldBuildings = lazy(() => import('./pages/town/BathHatfieldBuildings'));
const BathKingsmead = lazy(() => import('./pages/town/BathKingsmead'));
const BathUpperWeston = lazy(() => import('./pages/town/BathUpperWeston'));
const BathBeechenCliff = lazy(() => import('./pages/town/BathBeechenCliff'));
const BathSionHill = lazy(() => import('./pages/town/BathSionHill'));
const BathSouthLyncombe = lazy(() => import('./pages/town/BathSouthLyncombe'));
const BathPerrymead = lazy(() => import('./pages/town/BathPerrymead'));
const BathSydneyGardens = lazy(() => import('./pages/town/BathSydneyGardens'));
const BathVillaFields = lazy(() => import('./pages/town/BathVillaFields'));
const BathWilliamstowe = lazy(() => import('./pages/town/BathWilliamstowe'));
const BathCrescentGardens = lazy(() => import('./pages/town/BathCrescentGardens'));
const BathDolemeads = lazy(() => import('./pages/town/BathDolemeads'));
const BathLambridge = lazy(() => import('./pages/town/BathLambridge'));
const BathLowerSwainswick = lazy(() => import('./pages/town/BathLowerSwainswick'));
const BathLyncombeVale = lazy(() => import('./pages/town/BathLyncombeVale'));
const BathRushHill = lazy(() => import('./pages/town/BathRushHill'));
const BathWalcot = lazy(() => import('./pages/town/BathWalcot'));
const BathWhiteway = lazy(() => import('./pages/town/BathWhiteway'));
const BathLansdown = lazy(() => import('./pages/town/BathLansdown'));
const BathFairfieldPark = lazy(() => import('./pages/town/BathFairfieldPark'));
const BathBathwick = lazy(() => import('./pages/town/BathBathwick'));
const BathBradfordPark = lazy(() => import('./pages/town/BathBradfordPark'));
const BathRalphAllenPark = lazy(() => import('./pages/town/BathRalphAllenPark'));
const BathCombeDown = lazy(() => import('./pages/town/BathCombeDown'));
const BathTyning = lazy(() => import('./pages/town/BathTyning'));
const BirminghamSellyOak = lazy(() => import('./pages/town/BirminghamSellyOak'));
const BirminghamStirchleyStreet = lazy(() => import('./pages/town/BirminghamStirchleyStreet'));
const BirminghamTenAcres = lazy(() => import('./pages/town/BirminghamTenAcres'));
const BirminghamHazelwell = lazy(() => import('./pages/town/BirminghamHazelwell'));
const BirminghamWinsonGreenOuterCircleTramStop = lazy(() => import('./pages/town/BirminghamWinsonGreenOuterCircleTramStop'));
const BirminghamBournville = lazy(() => import('./pages/town/BirminghamBournville'));
const BirminghamBournbrook = lazy(() => import('./pages/town/BirminghamBournbrook'));
const BirminghamEdgbaston = lazy(() => import('./pages/town/BirminghamEdgbaston'));
const BirminghamSellyPark = lazy(() => import('./pages/town/BirminghamSellyPark'));
const BirminghamHarborne = lazy(() => import('./pages/town/BirminghamHarborne'));
const BirminghamHartsGreen = lazy(() => import('./pages/town/BirminghamHartsGreen'));
const BirminghamGravelBank = lazy(() => import('./pages/town/BirminghamGravelBank'));
const BirminghamLadywood = lazy(() => import('./pages/town/BirminghamLadywood'));
const BirminghamStirchley = lazy(() => import('./pages/town/BirminghamStirchley'));
const BirminghamJewelleryQuarter = lazy(() => import('./pages/town/BirminghamJewelleryQuarter'));
const BirminghamRottonPark = lazy(() => import('./pages/town/BirminghamRottonPark'));
const BirminghamStCuthberts = lazy(() => import('./pages/town/BirminghamStCuthberts'));
const BirminghamSummerfield = lazy(() => import('./pages/town/BirminghamSummerfield'));
const BirminghamSummerfieldPark = lazy(() => import('./pages/town/BirminghamSummerfieldPark'));
const BirminghamHockley = lazy(() => import('./pages/town/BirminghamHockley'));
const BirminghamNechellsGreen = lazy(() => import('./pages/town/BirminghamNechellsGreen'));
const BirminghamBalsallHeath = lazy(() => import('./pages/town/BirminghamBalsallHeath'));
const BirminghamBournvilleStation = lazy(() => import('./pages/town/BirminghamBournvilleStation'));
const BirminghamTheVale = lazy(() => import('./pages/town/BirminghamTheVale'));
const BirminghamPakenhamVillage = lazy(() => import('./pages/town/BirminghamPakenhamVillage'));
const BirminghamBordesleyGreen = lazy(() => import('./pages/town/BirminghamBordesleyGreen'));
const BirminghamFiveWays = lazy(() => import('./pages/town/BirminghamFiveWays'));
const BirminghamCalthorpeFields = lazy(() => import('./pages/town/BirminghamCalthorpeFields'));
const BirminghamCalthorpeEstates = lazy(() => import('./pages/town/BirminghamCalthorpeEstates'));
const BirminghamBeechLanes = lazy(() => import('./pages/town/BirminghamBeechLanes'));
const BirminghamNechells = lazy(() => import('./pages/town/BirminghamNechells'));
const BirminghamBrindley = lazy(() => import('./pages/town/BirminghamBrindley'));
const BirminghamTheWharf = lazy(() => import('./pages/town/BirminghamTheWharf'));
const BirminghamBordesley = lazy(() => import('./pages/town/BirminghamBordesley'));
const BirminghamDuddeston = lazy(() => import('./pages/town/BirminghamDuddeston'));
const BirminghamAshted = lazy(() => import('./pages/town/BirminghamAshted'));
const BirminghamNetchellsGreen = lazy(() => import('./pages/town/BirminghamNetchellsGreen'));
const BirminghamKingsNorton = lazy(() => import('./pages/town/BirminghamKingsNorton'));
const BirminghamAlvechurchStation = lazy(() => import('./pages/town/BirminghamAlvechurchStation'));
const BirminghamCannonHill = lazy(() => import('./pages/town/BirminghamCannonHill'));
const BirminghamCotteridge = lazy(() => import('./pages/town/BirminghamCotteridge'));
const BirminghamBrownhillsGreen = lazy(() => import('./pages/town/BirminghamBrownhillsGreen'));
const BirminghamWeoleyCastle = lazy(() => import('./pages/town/BirminghamWeoleyCastle'));
const BirminghamHighgate = lazy(() => import('./pages/town/BirminghamHighgate'));
const BirminghamBrownshillGreen = lazy(() => import('./pages/town/BirminghamBrownshillGreen'));
const BirminghamDigbeth = lazy(() => import('./pages/town/BirminghamDigbeth'));
const BirminghamChinatown = lazy(() => import('./pages/town/BirminghamChinatown'));
const BirminghamChadValley = lazy(() => import('./pages/town/BirminghamChadValley'));
const BirminghamQuinton = lazy(() => import('./pages/town/BirminghamQuinton'));
const BirminghamNorthfield = lazy(() => import('./pages/town/BirminghamNorthfield'));
const BirminghamAlumRock = lazy(() => import('./pages/town/BirminghamAlumRock'));
const BirminghamHandsworth = lazy(() => import('./pages/town/BirminghamHandsworth'));
const BirminghamMoseley = lazy(() => import('./pages/town/BirminghamMoseley'));
const BirminghamGreatBarr = lazy(() => import('./pages/town/BirminghamGreatBarr'));
const BirminghamHallGreen = lazy(() => import('./pages/town/BirminghamHallGreen'));
const BirminghamPerryBarr = lazy(() => import('./pages/town/BirminghamPerryBarr'));
const BirminghamSmallHeath = lazy(() => import('./pages/town/BirminghamSmallHeath'));
const BirminghamSparkhill = lazy(() => import('./pages/town/BirminghamSparkhill'));
const BirminghamStechford = lazy(() => import('./pages/town/BirminghamStechford'));
const BirminghamSaltley = lazy(() => import('./pages/town/BirminghamSaltley'));
const BirminghamAston = lazy(() => import('./pages/town/BirminghamAston'));
const BirminghamWinsonGreen = lazy(() => import('./pages/town/BirminghamWinsonGreen'));
const BirminghamMoorGreen = lazy(() => import('./pages/town/BirminghamMoorGreen'));
const BirminghamTurvesGreen = lazy(() => import('./pages/town/BirminghamTurvesGreen'));
const BirminghamDeritend = lazy(() => import('./pages/town/BirminghamDeritend'));
const BirminghamSpringVale = lazy(() => import('./pages/town/BirminghamSpringVale'));
const BirminghamChurchHill = lazy(() => import('./pages/town/BirminghamChurchHill'));
const BirminghamColehall = lazy(() => import('./pages/town/BirminghamColehall'));
const BirminghamHawkesley = lazy(() => import('./pages/town/BirminghamHawkesley'));
const BirminghamLeeBank = lazy(() => import('./pages/town/BirminghamLeeBank'));
const BirminghamUpperWitton = lazy(() => import('./pages/town/BirminghamUpperWitton'));
const BirminghamWakeGreen = lazy(() => import('./pages/town/BirminghamWakeGreen'));
const BirminghamBearwood = lazy(() => import('./pages/town/BirminghamBearwood'));
const BirminghamNorthfieldStation = lazy(() => import('./pages/town/BirminghamNorthfieldStation'));
const BoltonDixonGreen = lazy(() => import('./pages/town/BoltonDixonGreen'));
const BoltonFarnworth = lazy(() => import('./pages/town/BoltonFarnworth'));
const BoltonNewBury = lazy(() => import('./pages/town/BoltonNewBury'));
const BoltonRosehill = lazy(() => import('./pages/town/BoltonRosehill'));
const BoltonSpringfield = lazy(() => import('./pages/town/BoltonSpringfield'));
const BoltonAstleyBridge = lazy(() => import('./pages/town/BoltonAstleyBridge'));
const BoltonHarperGreen = lazy(() => import('./pages/town/BoltonHarperGreen'));
const BoltonMosesGate = lazy(() => import('./pages/town/BoltonMosesGate'));
const BoltonOakenBottom = lazy(() => import('./pages/town/BoltonOakenBottom'));
const BoltonTongeMoor = lazy(() => import('./pages/town/BoltonTongeMoor'));
const BoltonGreatLever = lazy(() => import('./pages/town/BoltonGreatLever'));
const BoltonHallIthWood = lazy(() => import('./pages/town/BoltonHallIthWood'));
const BoltonTheHaulgh = lazy(() => import('./pages/town/BoltonTheHaulgh'));
const BoltonTongeFold = lazy(() => import('./pages/town/BoltonTongeFold'));
const BoltonTopOThBrow = lazy(() => import('./pages/town/BoltonTopOThBrow'));
const BoltonBurnden = lazy(() => import('./pages/town/BoltonBurnden'));
const BradfordPrinceville = lazy(() => import('./pages/town/BradfordPrinceville'));
const BradfordDirkHill = lazy(() => import('./pages/town/BradfordDirkHill'));
const BradfordChapelGreen = lazy(() => import('./pages/town/BradfordChapelGreen'));
const BradfordHolmeTop = lazy(() => import('./pages/town/BradfordHolmeTop'));
const BradfordEastbrook = lazy(() => import('./pages/town/BradfordEastbrook'));
const BradfordBroomfields = lazy(() => import('./pages/town/BradfordBroomfields'));
const BradfordWapping = lazy(() => import('./pages/town/BradfordWapping'));
const BradfordLidgetGreen = lazy(() => import('./pages/town/BradfordLidgetGreen'));
const BradfordClayton = lazy(() => import('./pages/town/BradfordClayton'));
const BradfordFairweatherGreen = lazy(() => import('./pages/town/BradfordFairweatherGreen'));
const BradfordHeatonGrove = lazy(() => import('./pages/town/BradfordHeatonGrove'));
const BradfordHortonBankBottom = lazy(() => import('./pages/town/BradfordHortonBankBottom'));
const BradfordParadiseGreen = lazy(() => import('./pages/town/BradfordParadiseGreen'));
const BradfordBarkerend = lazy(() => import('./pages/town/BradfordBarkerend'));
const BradfordBirks = lazy(() => import('./pages/town/BradfordBirks'));
const BradfordCrossleyHall = lazy(() => import('./pages/town/BradfordCrossleyHall'));
const BradfordHillSideVillas = lazy(() => import('./pages/town/BradfordHillSideVillas'));
const BradfordNewLeeds = lazy(() => import('./pages/town/BradfordNewLeeds'));
const BradfordScholemoor = lazy(() => import('./pages/town/BradfordScholemoor'));
const BradfordUpperGreen = lazy(() => import('./pages/town/BradfordUpperGreen'));
const BradfordBradfordForsterSquareStation = lazy(() => import('./pages/town/BradfordBradfordForsterSquareStation'));
const BristolBedminsterStation = lazy(() => import('./pages/town/BristolBedminsterStation'));
const BristolBristolCityCentre = lazy(() => import('./pages/town/BristolBristolCityCentre'));
const BristolClifton = lazy(() => import('./pages/town/BristolClifton'));
const BristolFilton = lazy(() => import('./pages/town/BristolFilton'));
const BristolHorfield = lazy(() => import('./pages/town/BristolHorfield'));
const BristolStPauls = lazy(() => import('./pages/town/BristolStPauls'));
const BristolStMichaels = lazy(() => import('./pages/town/BristolStMichaels'));
const BristolMoorfields = lazy(() => import('./pages/town/BristolMoorfields'));
const BristolPileMarsh = lazy(() => import('./pages/town/BristolPileMarsh'));
const BristolBrandonHill = lazy(() => import('./pages/town/BristolBrandonHill'));
const BristolFishponds = lazy(() => import('./pages/town/BristolFishponds'));
const BristolRedland = lazy(() => import('./pages/town/BristolRedland'));
const BristolBishopston = lazy(() => import('./pages/town/BristolBishopston'));
const BristolCotham = lazy(() => import('./pages/town/BristolCotham'));
const BristolTyndallsPark = lazy(() => import('./pages/town/BristolTyndallsPark'));
const BristolKingsdown = lazy(() => import('./pages/town/BristolKingsdown'));
const BristolWoolcottPark = lazy(() => import('./pages/town/BristolWoolcottPark'));
const BristolStokesCroft = lazy(() => import('./pages/town/BristolStokesCroft'));
const BristolClayBottom = lazy(() => import('./pages/town/BristolClayBottom'));
const BristolRoseGreen = lazy(() => import('./pages/town/BristolRoseGreen'));
const BristolCroftsEnd = lazy(() => import('./pages/town/BristolCroftsEnd'));
const BristolHuddsBarton = lazy(() => import('./pages/town/BristolHuddsBarton'));
const BristolStokePark = lazy(() => import('./pages/town/BristolStokePark'));
const BristolTankardsClose = lazy(() => import('./pages/town/BristolTankardsClose'));
const BristolTemple = lazy(() => import('./pages/town/BristolTemple'));
const BristolAshleyDown = lazy(() => import('./pages/town/BristolAshleyDown'));
const BristolCanonsMarsh = lazy(() => import('./pages/town/BristolCanonsMarsh'));
const BristolCathay = lazy(() => import('./pages/town/BristolCathay'));
const BristolStokeGifford = lazy(() => import('./pages/town/BristolStokeGifford'));
const BristolAvonmouthStation = lazy(() => import('./pages/town/BristolAvonmouthStation'));
const BristolNorthville = lazy(() => import('./pages/town/BristolNorthville'));
const BristolWestburyOnTrym = lazy(() => import('./pages/town/BristolWestburyOnTrym'));
const BristolStapleton = lazy(() => import('./pages/town/BristolStapleton'));
const BristolGoldenHill = lazy(() => import('./pages/town/BristolGoldenHill'));
const BristolCheswickVillage = lazy(() => import('./pages/town/BristolCheswickVillage'));
const BristolSouthmead = lazy(() => import('./pages/town/BristolSouthmead'));
const BristolTheGalleries = lazy(() => import('./pages/town/BristolTheGalleries'));
const BristolStAndrews = lazy(() => import('./pages/town/BristolStAndrews'));
const BristolHotwells = lazy(() => import('./pages/town/BristolHotwells'));
const BristolLockleaze = lazy(() => import('./pages/town/BristolLockleaze'));
const BristolBedminster = lazy(() => import('./pages/town/BristolBedminster'));
const BristolStAugustines = lazy(() => import('./pages/town/BristolStAugustines'));
const BristolCliftonWood = lazy(() => import('./pages/town/BristolCliftonWood'));
const BristolEastville = lazy(() => import('./pages/town/BristolEastville'));
const BristolOldburyCourtEstate = lazy(() => import('./pages/town/BristolOldburyCourtEstate'));
const BristolHillfields = lazy(() => import('./pages/town/BristolHillfields'));
const BristolOldburyCourt = lazy(() => import('./pages/town/BristolOldburyCourt'));
const BristolStGeorge = lazy(() => import('./pages/town/BristolStGeorge'));
const BristolRussellTown = lazy(() => import('./pages/town/BristolRussellTown'));
const BristolTheDings = lazy(() => import('./pages/town/BristolTheDings'));
const BristolWestburyPark = lazy(() => import('./pages/town/BristolWestburyPark'));
const BristolSummerHill = lazy(() => import('./pages/town/BristolSummerHill'));
const BristolNetham = lazy(() => import('./pages/town/BristolNetham'));
const BristolKingswood = lazy(() => import('./pages/town/BristolKingswood'));
const BristolMontpelier = lazy(() => import('./pages/town/BristolMontpelier'));
const BristolStPhilips = lazy(() => import('./pages/town/BristolStPhilips'));
const BristolSouthville = lazy(() => import('./pages/town/BristolSouthville'));
const BristolBurchellsGreen = lazy(() => import('./pages/town/BristolBurchellsGreen'));
const BristolBrislington = lazy(() => import('./pages/town/BristolBrislington'));
const BristolLowerEaston = lazy(() => import('./pages/town/BristolLowerEaston'));
const BristolMayfieldPark = lazy(() => import('./pages/town/BristolMayfieldPark'));
const BristolPottersWood = lazy(() => import('./pages/town/BristolPottersWood'));
const BristolEaston = lazy(() => import('./pages/town/BristolEaston'));
const BristolRockleaze = lazy(() => import('./pages/town/BristolRockleaze'));
const BristolWatleysEnd = lazy(() => import('./pages/town/BristolWatleysEnd'));
const BristolTwoMileHill = lazy(() => import('./pages/town/BristolTwoMileHill'));
const BristolCockshottHill = lazy(() => import('./pages/town/BristolCockshottHill'));
const BristolHopewellHill = lazy(() => import('./pages/town/BristolHopewellHill'));
const BristolLowerSoundwell = lazy(() => import('./pages/town/BristolLowerSoundwell'));
const BristolChesterPark = lazy(() => import('./pages/town/BristolChesterPark'));
const BristolAirBalloonHill = lazy(() => import('./pages/town/BristolAirBalloonHill'));
const BristolBellHill = lazy(() => import('./pages/town/BristolBellHill'));
const BristolChessels = lazy(() => import('./pages/town/BristolChessels'));
const BristolMerrywood = lazy(() => import('./pages/town/BristolMerrywood'));
const BristolBrentry = lazy(() => import('./pages/town/BristolBrentry'));
const BristolStapleHill = lazy(() => import('./pages/town/BristolStapleHill'));
const BristolRedcliffe = lazy(() => import('./pages/town/BristolRedcliffe'));
const BristolKensingtonHill = lazy(() => import('./pages/town/BristolKensingtonHill'));
const BristolConham = lazy(() => import('./pages/town/BristolConham'));
const BristolJeffriesHill = lazy(() => import('./pages/town/BristolJeffriesHill'));
const BristolKensingtonPark = lazy(() => import('./pages/town/BristolKensingtonPark'));
const BristolHanhamGreen = lazy(() => import('./pages/town/BristolHanhamGreen'));
const BristolEmersonsGreen = lazy(() => import('./pages/town/BristolEmersonsGreen'));
const BristolDownend = lazy(() => import('./pages/town/BristolDownend'));
const BristolUpperEastville = lazy(() => import('./pages/town/BristolUpperEastville'));
const BristolWarmleyHill = lazy(() => import('./pages/town/BristolWarmleyHill'));
const BristolWhitesHill = lazy(() => import('./pages/town/BristolWhitesHill'));
const BristolWindmillHill = lazy(() => import('./pages/town/BristolWindmillHill'));
const BristolWoodstock = lazy(() => import('./pages/town/BristolWoodstock'));
const BristolStoneHill = lazy(() => import('./pages/town/BristolStoneHill'));
const BristolTheBatch = lazy(() => import('./pages/town/BristolTheBatch'));
const BristolSandyPark = lazy(() => import('./pages/town/BristolSandyPark'));
const BristolCadburyHeath = lazy(() => import('./pages/town/BristolCadburyHeath'));
const BristolParkWall = lazy(() => import('./pages/town/BristolParkWall'));
const BristolNorthCommon = lazy(() => import('./pages/town/BristolNorthCommon'));
const BristolLanternBottom = lazy(() => import('./pages/town/BristolLanternBottom'));
const BristolCockroadBottom = lazy(() => import('./pages/town/BristolCockroadBottom'));
const BristolMountHill = lazy(() => import('./pages/town/BristolMountHill'));
const BristolWarmleyTower = lazy(() => import('./pages/town/BristolWarmleyTower'));
const BristolOldland = lazy(() => import('./pages/town/BristolOldland'));
const BristolHenleaze = lazy(() => import('./pages/town/BristolHenleaze'));
const BristolHanham = lazy(() => import('./pages/town/BristolHanham'));
const BristolPucklechurch = lazy(() => import('./pages/town/BristolPucklechurch'));
const BristolSoundwell = lazy(() => import('./pages/town/BristolSoundwell'));
const BristolRedfield = lazy(() => import('./pages/town/BristolRedfield'));
const BristolBroomHill = lazy(() => import('./pages/town/BristolBroomHill'));
const BristolTotterdown = lazy(() => import('./pages/town/BristolTotterdown'));
const BristolLydeGreen = lazy(() => import('./pages/town/BristolLydeGreen'));
const BristolLeeWoods = lazy(() => import('./pages/town/BristolLeeWoods'));
const BristolBristolTempleMeadsStation = lazy(() => import('./pages/town/BristolBristolTempleMeadsStation'));
const BristolTempleQuay = lazy(() => import('./pages/town/BristolTempleQuay'));
const BristolChewtonKeynsham = lazy(() => import('./pages/town/BristolChewtonKeynsham'));
const BristolWellsway = lazy(() => import('./pages/town/BristolWellsway'));
const BristolThePark = lazy(() => import('./pages/town/BristolThePark'));
const BristolBartonHill = lazy(() => import('./pages/town/BristolBartonHill'));
const BristolArnosVale = lazy(() => import('./pages/town/BristolArnosVale'));
const BristolKnowle = lazy(() => import('./pages/town/BristolKnowle'));
const BristolPatchway = lazy(() => import('./pages/town/BristolPatchway'));
const BristolKeynsham = lazy(() => import('./pages/town/BristolKeynsham'));
const BristolGreenbank = lazy(() => import('./pages/town/BristolGreenbank'));
const BristolHambrook = lazy(() => import('./pages/town/BristolHambrook'));
const BristolHenbury = lazy(() => import('./pages/town/BristolHenbury'));
const BristolLeighWoods = lazy(() => import('./pages/town/BristolLeighWoods'));
const BristolMangotsfield = lazy(() => import('./pages/town/BristolMangotsfield'));
const BristolShirehampton = lazy(() => import('./pages/town/BristolShirehampton'));
const BristolSpeedwell = lazy(() => import('./pages/town/BristolSpeedwell'));
const BristolStAgnes = lazy(() => import('./pages/town/BristolStAgnes'));
const BristolStWerburghs = lazy(() => import('./pages/town/BristolStWerburghs'));
const BristolStokeBishop = lazy(() => import('./pages/town/BristolStokeBishop'));
const BristolWhitehall = lazy(() => import('./pages/town/BristolWhitehall'));
const BristolYate = lazy(() => import('./pages/town/BristolYate'));
const BristolBarrsCourt = lazy(() => import('./pages/town/BristolBarrsCourt'));
const BristolBradleyStoke = lazy(() => import('./pages/town/BristolBradleyStoke'));
const BristolBlackhorse = lazy(() => import('./pages/town/BristolBlackhorse'));
const BristolCatbrain = lazy(() => import('./pages/town/BristolCatbrain'));
const BristolHengrovePark = lazy(() => import('./pages/town/BristolHengrovePark'));
const BristolVinneyGreen = lazy(() => import('./pages/town/BristolVinneyGreen'));
const BristolBlaise = lazy(() => import('./pages/town/BristolBlaise'));
const BristolBlaiseHamlet = lazy(() => import('./pages/town/BristolBlaiseHamlet'));
const BristolCribbsCauseway = lazy(() => import('./pages/town/BristolCribbsCauseway'));
const BristolFilwood = lazy(() => import('./pages/town/BristolFilwood'));
const BristolFilwoodPark = lazy(() => import('./pages/town/BristolFilwoodPark'));
const BristolHursleyHill = lazy(() => import('./pages/town/BristolHursleyHill'));
const BristolLowerKnowle = lazy(() => import('./pages/town/BristolLowerKnowle'));
const BristolPenPole = lazy(() => import('./pages/town/BristolPenPole'));
const BristolStockwellHill = lazy(() => import('./pages/town/BristolStockwellHill'));
const BristolVinnyGreen = lazy(() => import('./pages/town/BristolVinnyGreen'));
const BristolNorthavon = lazy(() => import('./pages/town/BristolNorthavon'));
const BristolKingsWeston = lazy(() => import('./pages/town/BristolKingsWeston'));
const BristolSistonHill = lazy(() => import('./pages/town/BristolSistonHill'));
const BristolWappingWharf = lazy(() => import('./pages/town/BristolWappingWharf'));
const BuckinghamMountPleasant = lazy(() => import('./pages/town/BuckinghamMountPleasant'));
const BuckinghamBoneHill = lazy(() => import('./pages/town/BuckinghamBoneHill'));
const BuckinghamBourtonville = lazy(() => import('./pages/town/BuckinghamBourtonville'));
const BuckinghamPrebendEnd = lazy(() => import('./pages/town/BuckinghamPrebendEnd'));
const CambridgeRomseyTown = lazy(() => import('./pages/town/CambridgeRomseyTown'));
const CambridgeBrookfields = lazy(() => import('./pages/town/CambridgeBrookfields'));
const CambridgeColdhamsCommon = lazy(() => import('./pages/town/CambridgeColdhamsCommon'));
const CambridgeDittonFields = lazy(() => import('./pages/town/CambridgeDittonFields'));
const CambridgeFenDitton = lazy(() => import('./pages/town/CambridgeFenDitton'));
const CambridgeMidsummerCommon = lazy(() => import('./pages/town/CambridgeMidsummerCommon'));
const CambridgeBroadEnd = lazy(() => import('./pages/town/CambridgeBroadEnd'));
const CambridgeDelverEnd = lazy(() => import('./pages/town/CambridgeDelverEnd'));
const CambridgeLowbridgeHole = lazy(() => import('./pages/town/CambridgeLowbridgeHole'));
const CambridgeFallowField = lazy(() => import('./pages/town/CambridgeFallowField'));
const CambridgeJesusGreen = lazy(() => import('./pages/town/CambridgeJesusGreen'));
const CambridgeNewChesterton = lazy(() => import('./pages/town/CambridgeNewChesterton'));
const CambridgeBrockleyEnd = lazy(() => import('./pages/town/CambridgeBrockleyEnd'));
const CambridgeChilderley = lazy(() => import('./pages/town/CambridgeChilderley'));
const CambridgeCommercialEnd = lazy(() => import('./pages/town/CambridgeCommercialEnd'));
const CambridgeEddington = lazy(() => import('./pages/town/CambridgeEddington'));
const CambridgeBurwell = lazy(() => import('./pages/town/CambridgeBurwell'));
const CambridgeChestertonFenRoadEstate = lazy(() => import('./pages/town/CambridgeChestertonFenRoadEstate'));
const CanterburyStThomassHill = lazy(() => import('./pages/town/CanterburyStThomassHill'));
const CanterburyThaningtonWithout = lazy(() => import('./pages/town/CanterburyThaningtonWithout'));
const CanterburyParkwood = lazy(() => import('./pages/town/CanterburyParkwood'));
const CanterburyHalesPlace = lazy(() => import('./pages/town/CanterburyHalesPlace'));
const CanterburyHoneyHill = lazy(() => import('./pages/town/CanterburyHoneyHill'));
const CanterburyHallPlace = lazy(() => import('./pages/town/CanterburyHallPlace'));
const CanterburyDaneJohn = lazy(() => import('./pages/town/CanterburyDaneJohn'));
const CanterburyStMartins = lazy(() => import('./pages/town/CanterburyStMartins'));
const CanterburyVauxhallEstate = lazy(() => import('./pages/town/CanterburyVauxhallEstate'));
const CanterburyVauxhallRoadEstate = lazy(() => import('./pages/town/CanterburyVauxhallRoadEstate'));
const CanterburyWhitefriars = lazy(() => import('./pages/town/CanterburyWhitefriars'));
const CanterburyOldpark = lazy(() => import('./pages/town/CanterburyOldpark'));
const CanterburySpringLane = lazy(() => import('./pages/town/CanterburySpringLane'));
const CanterburyMartyrsField = lazy(() => import('./pages/town/CanterburyMartyrsField'));
const CanterburyBartonEstate = lazy(() => import('./pages/town/CanterburyBartonEstate'));
const CanterburyBartonRoadEstate = lazy(() => import('./pages/town/CanterburyBartonRoadEstate'));
const CanterburySouthCanterbury = lazy(() => import('./pages/town/CanterburySouthCanterbury'));
const CanterburyThanington = lazy(() => import('./pages/town/CanterburyThanington'));
const CanterburyNunneryFields = lazy(() => import('./pages/town/CanterburyNunneryFields'));
const CanterburyStDunstans = lazy(() => import('./pages/town/CanterburyStDunstans'));
const CanterburyLondonRoadEstate = lazy(() => import('./pages/town/CanterburyLondonRoadEstate'));
const CanterburyBlackPrincesChantry = lazy(() => import('./pages/town/CanterburyBlackPrincesChantry'));
const CanterburyWincheap = lazy(() => import('./pages/town/CanterburyWincheap'));
const CanterburyRoughCommon = lazy(() => import('./pages/town/CanterburyRoughCommon'));
const CanterburyTylerHill = lazy(() => import('./pages/town/CanterburyTylerHill'));
const CanterburyHarbledown = lazy(() => import('./pages/town/CanterburyHarbledown'));
const CanterburyPettyFrance = lazy(() => import('./pages/town/CanterburyPettyFrance'));
const CanterburyBekesbourneStation = lazy(() => import('./pages/town/CanterburyBekesbourneStation'));
const CardiffCardiffCity = lazy(() => import('./pages/town/CardiffCardiffCity'));
const CardiffPlasnewydd = lazy(() => import('./pages/town/CardiffPlasnewydd'));
const CardiffRoathPark = lazy(() => import('./pages/town/CardiffRoathPark'));
const CardiffCathays = lazy(() => import('./pages/town/CardiffCathays'));
const CardiffCardiffCityCentre = lazy(() => import('./pages/town/CardiffCardiffCityCentre'));
const CardiffRoath = lazy(() => import('./pages/town/CardiffRoath'));
const CardiffAdamsdown = lazy(() => import('./pages/town/CardiffAdamsdown'));
const CardiffYRhath = lazy(() => import('./pages/town/CardiffYRhath'));
const CardiffCardiffDo = lazy(() => import('./pages/town/CardiffCardiffDo'));
const CardiffRhydypennau = lazy(() => import('./pages/town/CardiffRhydypennau'));
const CardiffTheWharf = lazy(() => import('./pages/town/CardiffTheWharf'));
const CardiffYLanfa = lazy(() => import('./pages/town/CardiffYLanfa'));
const CardiffOceanPark = lazy(() => import('./pages/town/CardiffOceanPark'));
const CardiffQueenAlexanderDock = lazy(() => import('./pages/town/CardiffQueenAlexanderDock'));
const CardiffButeDocks = lazy(() => import('./pages/town/CardiffButeDocks'));
const CardiffButetown = lazy(() => import('./pages/town/CardiffButetown'));
const CardiffCapitalWaterside = lazy(() => import('./pages/town/CardiffCapitalWaterside'));
const CardiffCardiffWorkshops = lazy(() => import('./pages/town/CardiffCardiffWorkshops'));
const CardiffGlanfaIwerydd = lazy(() => import('./pages/town/CardiffGlanfaIwerydd'));
const CardiffGlannaurBrifddinas = lazy(() => import('./pages/town/CardiffGlannaurBrifddinas'));
const CardiffLoudounSquare = lazy(() => import('./pages/town/CardiffLoudounSquare'));
const CardiffAtlanticWharf = lazy(() => import('./pages/town/CardiffAtlanticWharf'));
const CardiffQueensArcade = lazy(() => import('./pages/town/CardiffQueensArcade'));
const CardiffCapitolExchange = lazy(() => import('./pages/town/CardiffCapitolExchange'));
const CardiffStDavidsCentre = lazy(() => import('./pages/town/CardiffStDavidsCentre'));
const CardiffQueensWest = lazy(() => import('./pages/town/CardiffQueensWest'));
const CardiffMaendy = lazy(() => import('./pages/town/CardiffMaendy'));
const CardiffHeath = lazy(() => import('./pages/town/CardiffHeath'));
const CardiffMaindy = lazy(() => import('./pages/town/CardiffMaindy'));
const CardiffGlenwood = lazy(() => import('./pages/town/CardiffGlenwood'));
const CardiffCathaysPark = lazy(() => import('./pages/town/CardiffCathaysPark'));
const CardiffHillRise = lazy(() => import('./pages/town/CardiffHillRise'));
const CardiffSpringwood = lazy(() => import('./pages/town/CardiffSpringwood'));
const CardiffSplott = lazy(() => import('./pages/town/CardiffSplott'));
const CardiffGabalfa = lazy(() => import('./pages/town/CardiffGabalfa'));
const CardiffRiverside = lazy(() => import('./pages/town/CardiffRiverside'));
const CardiffTreganna = lazy(() => import('./pages/town/CardiffTreganna'));
const CardiffPenhill = lazy(() => import('./pages/town/CardiffPenhill'));
const CardiffWholesaleFruitCentre = lazy(() => import('./pages/town/CardiffWholesaleFruitCentre'));
const CardiffYSblot = lazy(() => import('./pages/town/CardiffYSblot'));
const CardiffCantwn = lazy(() => import('./pages/town/CardiffCantwn'));
const CardiffPenylan = lazy(() => import('./pages/town/CardiffPenylan'));
const CardiffCityGardens = lazy(() => import('./pages/town/CardiffCityGardens'));
const CardiffGripolyMills = lazy(() => import('./pages/town/CardiffGripolyMills'));
const CardiffLakeside = lazy(() => import('./pages/town/CardiffLakeside'));
const CardiffSovereignChase = lazy(() => import('./pages/town/CardiffSovereignChase'));
const CardiffCyncoed = lazy(() => import('./pages/town/CardiffCyncoed'));
const CardiffRoathLake = lazy(() => import('./pages/town/CardiffRoathLake'));
const CardiffWindsorQuay = lazy(() => import('./pages/town/CardiffWindsorQuay'));
const CardiffCarltonGardens = lazy(() => import('./pages/town/CardiffCarltonGardens'));
const CardiffGrangetown = lazy(() => import('./pages/town/CardiffGrangetown'));
const CardiffBishopswood = lazy(() => import('./pages/town/CardiffBishopswood'));
const CardiffCennenMead = lazy(() => import('./pages/town/CardiffCennenMead'));
const CardiffChatfieldPark = lazy(() => import('./pages/town/CardiffChatfieldPark'));
const CardiffGlynCleddau = lazy(() => import('./pages/town/CardiffGlynCleddau'));
const CardiffPontcanna = lazy(() => import('./pages/town/CardiffPontcanna'));
const CardiffCeiriogPark = lazy(() => import('./pages/town/CardiffCeiriogPark'));
const CardiffConwayPark = lazy(() => import('./pages/town/CardiffConwayPark'));
const CardiffPontprennau = lazy(() => import('./pages/town/CardiffPontprennau'));
const CardiffWhitchurch = lazy(() => import('./pages/town/CardiffWhitchurch'));
const CardiffCastleton = lazy(() => import('./pages/town/CardiffCastleton'));
const CardiffCyntwell = lazy(() => import('./pages/town/CardiffCyntwell'));
const CardiffPengam = lazy(() => import('./pages/town/CardiffPengam'));
const CardiffMynyddBychan = lazy(() => import('./pages/town/CardiffMynyddBychan'));
const CardiffSplottlands = lazy(() => import('./pages/town/CardiffSplottlands'));
const CardiffSweldon = lazy(() => import('./pages/town/CardiffSweldon'));
const CardiffTheExchange = lazy(() => import('./pages/town/CardiffTheExchange'));
const CardiffYWaun = lazy(() => import('./pages/town/CardiffYWaun'));
const CardiffCasBach = lazy(() => import('./pages/town/CardiffCasBach'));
const CardiffTrelai = lazy(() => import('./pages/town/CardiffTrelai'));
const CardiffRoathDocks = lazy(() => import('./pages/town/CardiffRoathDocks'));
const CardiffMaerun = lazy(() => import('./pages/town/CardiffMaerun'));
const CardiffLlanbedrGwynllwg = lazy(() => import('./pages/town/CardiffLlanbedrGwynllwg'));
const CardiffCoedYGores = lazy(() => import('./pages/town/CardiffCoedYGores'));
const CardiffWatfordPark = lazy(() => import('./pages/town/CardiffWatfordPark'));
const CardiffEly = lazy(() => import('./pages/town/CardiffEly'));
const ChelmsfordBeaulieu = lazy(() => import('./pages/town/ChelmsfordBeaulieu'));
const ChelmsfordNewlandsSpring = lazy(() => import('./pages/town/ChelmsfordNewlandsSpring'));
const ChelmsfordFambridgeEnd = lazy(() => import('./pages/town/ChelmsfordFambridgeEnd'));
const ChelmsfordPeppersGreen = lazy(() => import('./pages/town/ChelmsfordPeppersGreen'));
const ChelmsfordBoytonCross = lazy(() => import('./pages/town/ChelmsfordBoytonCross'));
const ChelmsfordChalkEnd = lazy(() => import('./pages/town/ChelmsfordChalkEnd'));
const ChelmsfordClatterfordEnd = lazy(() => import('./pages/town/ChelmsfordClatterfordEnd'));
const ChelmsfordHoeStreet = lazy(() => import('./pages/town/ChelmsfordHoeStreet'));
const ChelmsfordSoutherCross = lazy(() => import('./pages/town/ChelmsfordSoutherCross'));
const ChelmsfordStagdenCross = lazy(() => import('./pages/town/ChelmsfordStagdenCross'));
const ChelmsfordChignalStJames = lazy(() => import('./pages/town/ChelmsfordChignalStJames'));
const ChelmsfordHighEaster = lazy(() => import('./pages/town/ChelmsfordHighEaster'));
const ChelmsfordChatley = lazy(() => import('./pages/town/ChelmsfordChatley'));
const ChelmsfordGubbionsGreen = lazy(() => import('./pages/town/ChelmsfordGubbionsGreen'));
const ChelmsfordBrookEnd = lazy(() => import('./pages/town/ChelmsfordBrookEnd'));
const ChelmsfordChelmerVillage = lazy(() => import('./pages/town/ChelmsfordChelmerVillage'));
const CheltenhamWymansBrook = lazy(() => import('./pages/town/CheltenhamWymansBrook'));
const CheltenhamHasbury = lazy(() => import('./pages/town/CheltenhamHasbury'));
const CheltenhamLeckhampton = lazy(() => import('./pages/town/CheltenhamLeckhampton'));
const CheltenhamBourtonOnTheWater = lazy(() => import('./pages/town/CheltenhamBourtonOnTheWater'));
const CheltenhamWyckRissington = lazy(() => import('./pages/town/CheltenhamWyckRissington'));
const CheltenhamBenhall = lazy(() => import('./pages/town/CheltenhamBenhall'));
const CheltenhamLilleyBrook = lazy(() => import('./pages/town/CheltenhamLilleyBrook'));
const CheltenhamMoorend = lazy(() => import('./pages/town/CheltenhamMoorend'));
const CheltenhamUpEnd = lazy(() => import('./pages/town/CheltenhamUpEnd'));
const CheltenhamLittleHerberts = lazy(() => import('./pages/town/CheltenhamLittleHerberts'));
const ChesterTwoMills = lazy(() => import('./pages/town/ChesterTwoMills'));
const ChesterBache = lazy(() => import('./pages/town/ChesterBache'));
const ChesterAbbotsMeads = lazy(() => import('./pages/town/ChesterAbbotsMeads'));
const ChesterAbbottsMead = lazy(() => import('./pages/town/ChesterAbbottsMead'));
const ChesterBalmoralPark = lazy(() => import('./pages/town/ChesterBalmoralPark'));
const ChesterLaylandsGreen = lazy(() => import('./pages/town/ChesterLaylandsGreen'));
const ChesterGardenLane = lazy(() => import('./pages/town/ChesterGardenLane'));
const ChesterHoole = lazy(() => import('./pages/town/ChesterHoole'));
const ChesterTarvinBridge = lazy(() => import('./pages/town/ChesterTarvinBridge'));
const ChesterNewton = lazy(() => import('./pages/town/ChesterNewton'));
const ChesterPipersAsh = lazy(() => import('./pages/town/ChesterPipersAsh'));
const ChesterBoughton = lazy(() => import('./pages/town/ChesterBoughton'));
const ChesterBoughtonHeath = lazy(() => import('./pages/town/ChesterBoughtonHeath'));
const ChesterBroughtonHeath = lazy(() => import('./pages/town/ChesterBroughtonHeath'));
const ChesterBlacon = lazy(() => import('./pages/town/ChesterBlacon'));
const ChesterMoldJunction = lazy(() => import('./pages/town/ChesterMoldJunction'));
const ChesterRoodee = lazy(() => import('./pages/town/ChesterRoodee'));
const ChesterCaldecott = lazy(() => import('./pages/town/ChesterCaldecott'));
const ChesterChristleton = lazy(() => import('./pages/town/ChesterChristleton'));
const ChesterCrabwell = lazy(() => import('./pages/town/ChesterCrabwell'));
const ChesterDeeHillsPark = lazy(() => import('./pages/town/ChesterDeeHillsPark'));
const ChesterFlookersbrook = lazy(() => import('./pages/town/ChesterFlookersbrook'));
const ChesterLittleSaughall = lazy(() => import('./pages/town/ChesterLittleSaughall'));
const ChesterNewtonBank = lazy(() => import('./pages/town/ChesterNewtonBank'));
const ChesterNewtonByChester = lazy(() => import('./pages/town/ChesterNewtonByChester'));
const ChesterHoolePark = lazy(() => import('./pages/town/ChesterHoolePark'));
const ChesterIrishHill = lazy(() => import('./pages/town/ChesterIrishHill'));
const ChesterTheCastle = lazy(() => import('./pages/town/ChesterTheCastle'));
const ChichesterPortfield = lazy(() => import('./pages/town/ChichesterPortfield'));
const ChichesterRumboldswhyke = lazy(() => import('./pages/town/ChichesterRumboldswhyke'));
const ChichesterWhyke = lazy(() => import('./pages/town/ChichesterWhyke'));
const CirencesterTheBeeches = lazy(() => import('./pages/town/CirencesterTheBeeches'));
const CirencesterKingsHill = lazy(() => import('./pages/town/CirencesterKingsHill'));
const CirencesterWatermoor = lazy(() => import('./pages/town/CirencesterWatermoor'));
const CirencesterBeechesEstate = lazy(() => import('./pages/town/CirencesterBeechesEstate'));
const CirencesterChesterton = lazy(() => import('./pages/town/CirencesterChesterton'));
const CirencesterMercianClose = lazy(() => import('./pages/town/CirencesterMercianClose'));
const CirencesterPhoenixWay = lazy(() => import('./pages/town/CirencesterPhoenixWay'));
const CirencesterSperringate = lazy(() => import('./pages/town/CirencesterSperringate'));
const CirencesterSunhill = lazy(() => import('./pages/town/CirencesterSunhill'));
const CirencesterWiggold = lazy(() => import('./pages/town/CirencesterWiggold'));
const CirencesterAblington = lazy(() => import('./pages/town/CirencesterAblington'));
const CirencesterKilkenny = lazy(() => import('./pages/town/CirencesterKilkenny'));
const CirencesterMaiseyhampton = lazy(() => import('./pages/town/CirencesterMaiseyhampton'));
const ColchesterParsonsHeath = lazy(() => import('./pages/town/ColchesterParsonsHeath'));
const ColchesterWelshwoodPark = lazy(() => import('./pages/town/ColchesterWelshwoodPark'));
const ColchesterGreenstead = lazy(() => import('./pages/town/ColchesterGreenstead'));
const ColchesterWivenhoe = lazy(() => import('./pages/town/ColchesterWivenhoe'));
const ColchesterNewQuay = lazy(() => import('./pages/town/ColchesterNewQuay'));
const ColchesterTheHythe = lazy(() => import('./pages/town/ColchesterTheHythe'));
const ColchesterMiddlewick = lazy(() => import('./pages/town/ColchesterMiddlewick'));
const ColchesterOldHeath = lazy(() => import('./pages/town/ColchesterOldHeath'));
const ColchesterPottsGreen = lazy(() => import('./pages/town/ColchesterPottsGreen'));
const ColchesterCopfordGreen = lazy(() => import('./pages/town/ColchesterCopfordGreen'));
const ColchesterLongGreen = lazy(() => import('./pages/town/ColchesterLongGreen'));
const ColchesterBroadGreen = lazy(() => import('./pages/town/ColchesterBroadGreen'));
const ColchesterMonksdown = lazy(() => import('./pages/town/ColchesterMonksdown'));
const ColchesterMarksHall = lazy(() => import('./pages/town/ColchesterMarksHall'));
const ColchesterTeyCross = lazy(() => import('./pages/town/ColchesterTeyCross'));
const ColchesterCoggeshall = lazy(() => import('./pages/town/ColchesterCoggeshall'));
const ColchesterKelvedon = lazy(() => import('./pages/town/ColchesterKelvedon'));
const ColchesterEastBay = lazy(() => import('./pages/town/ColchesterEastBay'));
const ColchesterRiversidePark = lazy(() => import('./pages/town/ColchesterRiversidePark'));
const ColchesterChandlersRow = lazy(() => import('./pages/town/ColchesterChandlersRow'));
const ColchesterCowdrayCentre = lazy(() => import('./pages/town/ColchesterCowdrayCentre'));
const ColchesterEastHill = lazy(() => import('./pages/town/ColchesterEastHill'));
const ColchesterGorePit = lazy(() => import('./pages/town/ColchesterGorePit'));
const ColchesterBirchHolt = lazy(() => import('./pages/town/ColchesterBirchHolt'));
const ColchesterLittleBirchHolt = lazy(() => import('./pages/town/ColchesterLittleBirchHolt'));
const CoventryStoke = lazy(() => import('./pages/town/CoventryStoke'));
const CoventryCanley = lazy(() => import('./pages/town/CoventryCanley'));
const CoventryGosfordGreen = lazy(() => import('./pages/town/CoventryGosfordGreen'));
const CoventryWestwoodHeath = lazy(() => import('./pages/town/CoventryWestwoodHeath'));
const CoventryKirbyCorner = lazy(() => import('./pages/town/CoventryKirbyCorner'));
const CoventryTileHill = lazy(() => import('./pages/town/CoventryTileHill'));
const CoventryEarlsdon = lazy(() => import('./pages/town/CoventryEarlsdon'));
const CoventryFoleshill = lazy(() => import('./pages/town/CoventryFoleshill'));
const CoventryUpperStoke = lazy(() => import('./pages/town/CoventryUpperStoke'));
const CoventryStokePark = lazy(() => import('./pages/town/CoventryStokePark'));
const CoventryGibbetHill = lazy(() => import('./pages/town/CoventryGibbetHill'));
const CoventryWestwoodGardens = lazy(() => import('./pages/town/CoventryWestwoodGardens'));
const CoventryBeechwoodGardens = lazy(() => import('./pages/town/CoventryBeechwoodGardens'));
const CoventryCanleyGardens = lazy(() => import('./pages/town/CoventryCanleyGardens'));
const CoventryPinley = lazy(() => import('./pages/town/CoventryPinley'));
const CoventryPinleyGardens = lazy(() => import('./pages/town/CoventryPinleyGardens'));
const CoventryStokeAldermoor = lazy(() => import('./pages/town/CoventryStokeAldermoor'));
const CoventryHillfields = lazy(() => import('./pages/town/CoventryHillfields'));
const CoventrySponEnd = lazy(() => import('./pages/town/CoventrySponEnd'));
const CoventryWalsgrave = lazy(() => import('./pages/town/CoventryWalsgrave'));
const CoventryBishopgateGreen = lazy(() => import('./pages/town/CoventryBishopgateGreen'));
const CoventryEdgwick = lazy(() => import('./pages/town/CoventryEdgwick'));
const CoventryFourLanesEnd = lazy(() => import('./pages/town/CoventryFourLanesEnd'));
const CoventryMarketEnd = lazy(() => import('./pages/town/CoventryMarketEnd'));
const CoventryNewdigateColliery = lazy(() => import('./pages/town/CoventryNewdigateColliery'));
const CoventryParadise = lazy(() => import('./pages/town/CoventryParadise'));
const CoventryPartingOfTheHeaths = lazy(() => import('./pages/town/CoventryPartingOfTheHeaths'));
const CoventryGreatHeath = lazy(() => import('./pages/town/CoventryGreatHeath'));
const CoventryHarnall = lazy(() => import('./pages/town/CoventryHarnall'));
const CoventryChapelfields = lazy(() => import('./pages/town/CoventryChapelfields'));
const CoventryWhoberley = lazy(() => import('./pages/town/CoventryWhoberley'));
const CoventryStokeGreen = lazy(() => import('./pages/town/CoventryStokeGreen'));
const CoventryCoundon = lazy(() => import('./pages/town/CoventryCoundon'));
const CoventryRadford = lazy(() => import('./pages/town/CoventryRadford'));
const CoventryCoventryCityCentre = lazy(() => import('./pages/town/CoventryCoventryCityCentre'));
const CoventryDrapersField = lazy(() => import('./pages/town/CoventryDrapersField'));
const CoventryStivichall = lazy(() => import('./pages/town/CoventryStivichall'));
const CoventryKingsHill = lazy(() => import('./pages/town/CoventryKingsHill'));
const CoventryCheylesmore = lazy(() => import('./pages/town/CoventryCheylesmore'));
const CoventryGreenLane = lazy(() => import('./pages/town/CoventryGreenLane'));
const CoventryWyken = lazy(() => import('./pages/town/CoventryWyken'));
const CoventryLimeTreePark = lazy(() => import('./pages/town/CoventryLimeTreePark'));
const CoventryPickford = lazy(() => import('./pages/town/CoventryPickford'));
const CoventryBinley = lazy(() => import('./pages/town/CoventryBinley'));
const CoventryBinleyCollieryVillage = lazy(() => import('./pages/town/CoventryBinleyCollieryVillage'));
const CoventryFinham = lazy(() => import('./pages/town/CoventryFinham'));
const CoventryStyvechale = lazy(() => import('./pages/town/CoventryStyvechale'));
const DerbyTheHolmes = lazy(() => import('./pages/town/DerbyTheHolmes'));
const DerbyStruttsPark = lazy(() => import('./pages/town/DerbyStruttsPark'));
const DerbyMoorway = lazy(() => import('./pages/town/DerbyMoorway'));
const DerbyOwensBank = lazy(() => import('./pages/town/DerbyOwensBank'));
const DerbyDerbyCityCentre = lazy(() => import('./pages/town/DerbyDerbyCityCentre'));
const DerbyLittleChester = lazy(() => import('./pages/town/DerbyLittleChester'));
const DerbyDarleyAbbey = lazy(() => import('./pages/town/DerbyDarleyAbbey'));
const DerbyNewNormanton = lazy(() => import('./pages/town/DerbyNewNormanton'));
const DerbyKegworth = lazy(() => import('./pages/town/DerbyKegworth'));
const DerbyLittleover = lazy(() => import('./pages/town/DerbyLittleover'));
const DerbyAlvaston = lazy(() => import('./pages/town/DerbyAlvaston'));
const DerbyAllenton = lazy(() => import('./pages/town/DerbyAllenton'));
const DerbyRoseHill = lazy(() => import('./pages/town/DerbyRoseHill'));
const DundeeDundeeWestEnd = lazy(() => import('./pages/town/DundeeDundeeWestEnd'));
const DundeeDundeeCityCentre = lazy(() => import('./pages/town/DundeeDundeeCityCentre'));
const DundeeStannergate = lazy(() => import('./pages/town/DundeeStannergate'));
const DundeeDundeeTechnologyPark = lazy(() => import('./pages/town/DundeeDundeeTechnologyPark'));
const DundeeBroughtyFerryStation = lazy(() => import('./pages/town/DundeeBroughtyFerryStation'));
const DundeeBroughtyFerry = lazy(() => import('./pages/town/DundeeBroughtyFerry'));
const DurhamGilesgate = lazy(() => import('./pages/town/DurhamGilesgate'));
const DurhamStocktonOnTees = lazy(() => import('./pages/town/DurhamStocktonOnTees'));
const DurhamLowBurnhall = lazy(() => import('./pages/town/DurhamLowBurnhall'));
const DurhamMerryoaks = lazy(() => import('./pages/town/DurhamMerryoaks'));
const DurhamNewElvet = lazy(() => import('./pages/town/DurhamNewElvet'));
const DurhamPottersBank = lazy(() => import('./pages/town/DurhamPottersBank'));
const DurhamTheDowns = lazy(() => import('./pages/town/DurhamTheDowns'));
const DurhamByersGarth = lazy(() => import('./pages/town/DurhamByersGarth'));
const DurhamBroomside = lazy(() => import('./pages/town/DurhamBroomside'));
const DurhamDeernessJunction = lazy(() => import('./pages/town/DurhamDeernessJunction'));
const DurhamWesternHill = lazy(() => import('./pages/town/DurhamWesternHill'));
const DurhamWhartonPark = lazy(() => import('./pages/town/DurhamWhartonPark'));
const DurhamWhitesmocks = lazy(() => import('./pages/town/DurhamWhitesmocks'));
const DurhamHighGrangeEstate = lazy(() => import('./pages/town/DurhamHighGrangeEstate'));
const DurhamBelmont = lazy(() => import('./pages/town/DurhamBelmont'));
const DurhamDryburn = lazy(() => import('./pages/town/DurhamDryburn'));
const DurhamNewtonHallEstate = lazy(() => import('./pages/town/DurhamNewtonHallEstate'));
const DurhamLowCarrs = lazy(() => import('./pages/town/DurhamLowCarrs'));
const DurhamNewtonHall = lazy(() => import('./pages/town/DurhamNewtonHall'));
const DurhamMeadowGreen = lazy(() => import('./pages/town/DurhamMeadowGreen'));
const DurhamDerepark = lazy(() => import('./pages/town/DurhamDerepark'));
const DurhamPitHouse = lazy(() => import('./pages/town/DurhamPitHouse'));
const DurhamLangleyMoor = lazy(() => import('./pages/town/DurhamLangleyMoor'));
const DurhamFramwellgateMoor = lazy(() => import('./pages/town/DurhamFramwellgateMoor'));
const DurhamGilesgateMoor = lazy(() => import('./pages/town/DurhamGilesgateMoor'));
const DurhamMeadowfield = lazy(() => import('./pages/town/DurhamMeadowfield'));
const DurhamNevillesCross = lazy(() => import('./pages/town/DurhamNevillesCross'));
const DurhamPityMe = lazy(() => import('./pages/town/DurhamPityMe'));
const DurhamCarrville = lazy(() => import('./pages/town/DurhamCarrville'));
const DurhamShottonColliery = lazy(() => import('./pages/town/DurhamShottonColliery'));
const DurhamHartside = lazy(() => import('./pages/town/DurhamHartside'));
const DurhamHaswell = lazy(() => import('./pages/town/DurhamHaswell'));
const DurhamSacriston = lazy(() => import('./pages/town/DurhamSacriston'));
const DurhamSherburn = lazy(() => import('./pages/town/DurhamSherburn'));
const DurhamBrandon = lazy(() => import('./pages/town/DurhamBrandon'));
const DurhamEdmondsleyFell = lazy(() => import('./pages/town/DurhamEdmondsleyFell'));
const DurhamCrossgateMoor = lazy(() => import('./pages/town/DurhamCrossgateMoor'));
const EalingNorthfields = lazy(() => import('./pages/town/EalingNorthfields'));
const EdinburghEdinburghSouth = lazy(() => import('./pages/town/EdinburghEdinburghSouth'));
const EdinburghEdinburghNorth = lazy(() => import('./pages/town/EdinburghEdinburghNorth'));
const EdinburghLeith = lazy(() => import('./pages/town/EdinburghLeith'));
const EdinburghEdinburghEast = lazy(() => import('./pages/town/EdinburghEdinburghEast'));
const EdinburghEdinburghWest = lazy(() => import('./pages/town/EdinburghEdinburghWest'));
const EdinburghGorgie = lazy(() => import('./pages/town/EdinburghGorgie'));
const EdinburghNewington = lazy(() => import('./pages/town/EdinburghNewington'));
const EdinburghLochend = lazy(() => import('./pages/town/EdinburghLochend'));
const EdinburghDalry = lazy(() => import('./pages/town/EdinburghDalry'));
const EdinburghHermitsCroft = lazy(() => import('./pages/town/EdinburghHermitsCroft'));
const EdinburghTerrarsCroft = lazy(() => import('./pages/town/EdinburghTerrarsCroft'));
const EdinburghMarionville = lazy(() => import('./pages/town/EdinburghMarionville'));
const EdinburghTollcross = lazy(() => import('./pages/town/EdinburghTollcross'));
const EdinburghRestalrig = lazy(() => import('./pages/town/EdinburghRestalrig'));
const EdinburghAbbeyhill = lazy(() => import('./pages/town/EdinburghAbbeyhill'));
const EdinburghBonnington = lazy(() => import('./pages/town/EdinburghBonnington'));
const EdinburghBruntsfield = lazy(() => import('./pages/town/EdinburghBruntsfield'));
const EdinburghMayfield = lazy(() => import('./pages/town/EdinburghMayfield'));
const EdinburghMerchiston = lazy(() => import('./pages/town/EdinburghMerchiston'));
const EdinburghBoroughmuirhead = lazy(() => import('./pages/town/EdinburghBoroughmuirhead'));
const EdinburghGrange = lazy(() => import('./pages/town/EdinburghGrange'));
const EdinburghTheGrange = lazy(() => import('./pages/town/EdinburghTheGrange'));
const EdinburghCausewayside = lazy(() => import('./pages/town/EdinburghCausewayside'));
const EdinburghMeadows = lazy(() => import('./pages/town/EdinburghMeadows'));
const EdinburghTheMeadows = lazy(() => import('./pages/town/EdinburghTheMeadows'));
const EdinburghOldTown = lazy(() => import('./pages/town/EdinburghOldTown'));
const EdinburghPilrig = lazy(() => import('./pages/town/EdinburghPilrig'));
const EdinburghPrestonfield = lazy(() => import('./pages/town/EdinburghPrestonfield'));
const EdinburghTheInch = lazy(() => import('./pages/town/EdinburghTheInch'));
const EdinburghCraigmillarPark = lazy(() => import('./pages/town/EdinburghCraigmillarPark'));
const EdinburghBlackford = lazy(() => import('./pages/town/EdinburghBlackford'));
const EdinburghLiberton = lazy(() => import('./pages/town/EdinburghLiberton'));
const EdinburghMeadowbank = lazy(() => import('./pages/town/EdinburghMeadowbank'));
const EdinburghWardieburn = lazy(() => import('./pages/town/EdinburghWardieburn'));
const EdinburghLauriston = lazy(() => import('./pages/town/EdinburghLauriston'));
const EdinburghChesser = lazy(() => import('./pages/town/EdinburghChesser'));
const EdinburghMorningside = lazy(() => import('./pages/town/EdinburghMorningside'));
const EdinburghStenhouse = lazy(() => import('./pages/town/EdinburghStenhouse'));
const EdinburghSaughton = lazy(() => import('./pages/town/EdinburghSaughton'));
const EdinburghGranton = lazy(() => import('./pages/town/EdinburghGranton'));
const EdinburghSlateford = lazy(() => import('./pages/town/EdinburghSlateford'));
const EdinburghDean = lazy(() => import('./pages/town/EdinburghDean'));
const EdinburghDeanVillage = lazy(() => import('./pages/town/EdinburghDeanVillage'));
const EdinburghNewTown = lazy(() => import('./pages/town/EdinburghNewTown'));
const EdinburghNewhaven = lazy(() => import('./pages/town/EdinburghNewhaven'));
const EdinburghEdinburghNorthWest = lazy(() => import('./pages/town/EdinburghEdinburghNorthWest'));
const EdinburghTrinity = lazy(() => import('./pages/town/EdinburghTrinity'));
const EdinburghWestEnd = lazy(() => import('./pages/town/EdinburghWestEnd'));
const EdinburghBoswall = lazy(() => import('./pages/town/EdinburghBoswall'));
const EdinburghGreenbank = lazy(() => import('./pages/town/EdinburghGreenbank'));
const EdinburghKingsBuildingsUniversity = lazy(() => import('./pages/town/EdinburghKingsBuildingsUniversity'));
const EdinburghComelyBank = lazy(() => import('./pages/town/EdinburghComelyBank'));
const EdinburghCrewe = lazy(() => import('./pages/town/EdinburghCrewe'));
const EdinburghDuddingstonVillage = lazy(() => import('./pages/town/EdinburghDuddingstonVillage'));
const EdinburghGracemount = lazy(() => import('./pages/town/EdinburghGracemount'));
const EdinburghInch = lazy(() => import('./pages/town/EdinburghInch'));
const EdinburghKaimes = lazy(() => import('./pages/town/EdinburghKaimes'));
const EdinburghMurrayfield = lazy(() => import('./pages/town/EdinburghMurrayfield'));
const EdinburghSouthfield = lazy(() => import('./pages/town/EdinburghSouthfield'));
const EdinburghStockbridge = lazy(() => import('./pages/town/EdinburghStockbridge'));
const EdinburghBarnton = lazy(() => import('./pages/town/EdinburghBarnton'));
const EdinburghBraepark = lazy(() => import('./pages/town/EdinburghBraepark'));
const EdinburghFishwivesCausewayIndustEstate = lazy(() => import('./pages/town/EdinburghFishwivesCausewayIndustEstate'));
const EdinburghCramond = lazy(() => import('./pages/town/EdinburghCramond'));
const EdinburghPortobello = lazy(() => import('./pages/town/EdinburghPortobello'));
const EdinburghRoyston = lazy(() => import('./pages/town/EdinburghRoyston'));
const EdinburghCraigleith = lazy(() => import('./pages/town/EdinburghCraigleith'));
const EdinburghGilmerton = lazy(() => import('./pages/town/EdinburghGilmerton'));
const EghamWick = lazy(() => import('./pages/town/EghamWick'));
const EghamEnglefieldGreen = lazy(() => import('./pages/town/EghamEnglefieldGreen'));
const EghamBellWeirLock = lazy(() => import('./pages/town/EghamBellWeirLock'));
const EghamBishopsgate = lazy(() => import('./pages/town/EghamBishopsgate'));
const EghamGlanty = lazy(() => import('./pages/town/EghamGlanty'));
const ExeterPennsylvania = lazy(() => import('./pages/town/ExeterPennsylvania'));
const ExeterDuryard = lazy(() => import('./pages/town/ExeterDuryard'));
const ExeterStDavids = lazy(() => import('./pages/town/ExeterStDavids'));
const ExeterHeavitreePark = lazy(() => import('./pages/town/ExeterHeavitreePark'));
const ExeterEastWonford = lazy(() => import('./pages/town/ExeterEastWonford'));
const ExeterNorthernhay = lazy(() => import('./pages/town/ExeterNorthernhay'));
const ExeterPolsloePark = lazy(() => import('./pages/town/ExeterPolsloePark'));
const ExeterPolsloe = lazy(() => import('./pages/town/ExeterPolsloe'));
const ExeterPolsloeBridge = lazy(() => import('./pages/town/ExeterPolsloeBridge'));
const ExeterPolsloePriory = lazy(() => import('./pages/town/ExeterPolsloePriory'));
const ExeterNewtown = lazy(() => import('./pages/town/ExeterNewtown'));
const ExeterLionsHolt = lazy(() => import('./pages/town/ExeterLionsHolt'));
const ExeterStJames = lazy(() => import('./pages/town/ExeterStJames'));
const ExeterBeaconHeathEstate = lazy(() => import('./pages/town/ExeterBeaconHeathEstate'));
const ExeterStokeHill = lazy(() => import('./pages/town/ExeterStokeHill'));
const ExeterHeavitree = lazy(() => import('./pages/town/ExeterHeavitree'));
const ExeterStLeonards = lazy(() => import('./pages/town/ExeterStLeonards'));
const ExeterRedCowVillage = lazy(() => import('./pages/town/ExeterRedCowVillage'));
const ExeterWonford = lazy(() => import('./pages/town/ExeterWonford'));
const ExeterHavenBanks = lazy(() => import('./pages/town/ExeterHavenBanks'));
const ExeterHigherWear = lazy(() => import('./pages/town/ExeterHigherWear'));
const ExeterSouthWonford = lazy(() => import('./pages/town/ExeterSouthWonford'));
const ExeterBeaconHeath = lazy(() => import('./pages/town/ExeterBeaconHeath'));
const ExeterBedfordPrecinct = lazy(() => import('./pages/town/ExeterBedfordPrecinct'));
const ExeterFriarsGreen = lazy(() => import('./pages/town/ExeterFriarsGreen'));
const ExeterMountRadford = lazy(() => import('./pages/town/ExeterMountRadford'));
const ExeterBarnfield = lazy(() => import('./pages/town/ExeterBarnfield'));
const ExeterTheClose = lazy(() => import('./pages/town/ExeterTheClose'));
const ExeterMountDinham = lazy(() => import('./pages/town/ExeterMountDinham'));
const ExeterExeIsland = lazy(() => import('./pages/town/ExeterExeIsland'));
const ExeterStJohn = lazy(() => import('./pages/town/ExeterStJohn'));
const ExeterStepcoteHill = lazy(() => import('./pages/town/ExeterStepcoteHill'));
const ExeterBroadfields = lazy(() => import('./pages/town/ExeterBroadfields'));
const ExeterHalsfordwood = lazy(() => import('./pages/town/ExeterHalsfordwood'));
const ExeterExwick = lazy(() => import('./pages/town/ExeterExwick'));
const ExeterStThomas = lazy(() => import('./pages/town/ExeterStThomas'));
const ExeterStLoyes = lazy(() => import('./pages/town/ExeterStLoyes'));
const ExeterCowick = lazy(() => import('./pages/town/ExeterCowick'));
const ExeterStHillAlphington = lazy(() => import('./pages/town/ExeterStHillAlphington'));
const ExeterCowley = lazy(() => import('./pages/town/ExeterCowley'));
const ExeterGreatShilhay = lazy(() => import('./pages/town/ExeterGreatShilhay'));
const ExeterMarshBarton = lazy(() => import('./pages/town/ExeterMarshBarton'));
const ExeterRedhills = lazy(() => import('./pages/town/ExeterRedhills'));
const ExeterTheFairways = lazy(() => import('./pages/town/ExeterTheFairways'));
const FalmouthTregatreath = lazy(() => import('./pages/town/FalmouthTregatreath'));
const FalmouthBareppa = lazy(() => import('./pages/town/FalmouthBareppa'));
const FalmouthBrill = lazy(() => import('./pages/town/FalmouthBrill'));
const FalmouthCarvedras = lazy(() => import('./pages/town/FalmouthCarvedras'));
const FalmouthNancenoy = lazy(() => import('./pages/town/FalmouthNancenoy'));
const FalmouthPolwheveral = lazy(() => import('./pages/town/FalmouthPolwheveral'));
const FalmouthPonjeravah = lazy(() => import('./pages/town/FalmouthPonjeravah'));
const FalmouthSeworgan = lazy(() => import('./pages/town/FalmouthSeworgan'));
const FalmouthTrewardreva = lazy(() => import('./pages/town/FalmouthTrewardreva'));
const FalmouthTregew = lazy(() => import('./pages/town/FalmouthTregew'));
const FalmouthPenjerrick = lazy(() => import('./pages/town/FalmouthPenjerrick'));
const FalmouthBrillwater = lazy(() => import('./pages/town/FalmouthBrillwater'));
const FalmouthDurgan = lazy(() => import('./pages/town/FalmouthDurgan'));
const FalmouthPenwerris = lazy(() => import('./pages/town/FalmouthPenwerris'));
const FalmouthSwanvale = lazy(() => import('./pages/town/FalmouthSwanvale'));
const FalmouthTheBeacon = lazy(() => import('./pages/town/FalmouthTheBeacon'));
const FarnhamMountPleasant = lazy(() => import('./pages/town/FarnhamMountPleasant'));
const FarnhamBridgeField = lazy(() => import('./pages/town/FarnhamBridgeField'));
const FarnhamWeybourne = lazy(() => import('./pages/town/FarnhamWeybourne'));
const FarnhamWrecclesham = lazy(() => import('./pages/town/FarnhamWrecclesham'));
const FarnhamBentley = lazy(() => import('./pages/town/FarnhamBentley'));
const FarnhamAliceHolt = lazy(() => import('./pages/town/FarnhamAliceHolt'));
const FarnhamEwshot = lazy(() => import('./pages/town/FarnhamEwshot'));
const GlasgowBlantyreStation = lazy(() => import('./pages/town/GlasgowBlantyreStation'));
const GlasgowAirblesStation = lazy(() => import('./pages/town/GlasgowAirblesStation'));
const GlasgowWestertonStation = lazy(() => import('./pages/town/GlasgowWestertonStation'));
const GlasgowGlasgowWest = lazy(() => import('./pages/town/GlasgowGlasgowWest'));
const GlasgowGlasgowWestEnd = lazy(() => import('./pages/town/GlasgowGlasgowWestEnd'));
const GlasgowGlasgowEast = lazy(() => import('./pages/town/GlasgowGlasgowEast'));
const GlasgowGlasgowSouth = lazy(() => import('./pages/town/GlasgowGlasgowSouth'));
const GlasgowGlasgowCentral = lazy(() => import('./pages/town/GlasgowGlasgowCentral'));
const GlasgowPartick = lazy(() => import('./pages/town/GlasgowPartick'));
const GlasgowMaryhill = lazy(() => import('./pages/town/GlasgowMaryhill'));
const GlasgowHillhead = lazy(() => import('./pages/town/GlasgowHillhead'));
const GlasgowKelvingrove = lazy(() => import('./pages/town/GlasgowKelvingrove'));
const GlasgowFinnieston = lazy(() => import('./pages/town/GlasgowFinnieston'));
const GlasgowDowanhill = lazy(() => import('./pages/town/GlasgowDowanhill'));
const GlasgowBroomhill = lazy(() => import('./pages/town/GlasgowBroomhill'));
const GlasgowGlasgowNorth = lazy(() => import('./pages/town/GlasgowGlasgowNorth'));
const GlasgowThornwood = lazy(() => import('./pages/town/GlasgowThornwood'));
const GlasgowKirklee = lazy(() => import('./pages/town/GlasgowKirklee'));
const GlasgowDennistoun = lazy(() => import('./pages/town/GlasgowDennistoun'));
const GlasgowBalshagray = lazy(() => import('./pages/town/GlasgowBalshagray'));
const GlasgowNorthKelvin = lazy(() => import('./pages/town/GlasgowNorthKelvin'));
const GlasgowHyndland = lazy(() => import('./pages/town/GlasgowHyndland'));
const GlasgowKelvinbridge = lazy(() => import('./pages/town/GlasgowKelvinbridge'));
const GlasgowBowlingStation = lazy(() => import('./pages/town/GlasgowBowlingStation'));
const GlasgowTradeston = lazy(() => import('./pages/town/GlasgowTradeston'));
const GlasgowPortDundas = lazy(() => import('./pages/town/GlasgowPortDundas'));
const GlasgowGarnethill = lazy(() => import('./pages/town/GlasgowGarnethill'));
const GlasgowPartickhill = lazy(() => import('./pages/town/GlasgowPartickhill'));
const GlasgowAnderston = lazy(() => import('./pages/town/GlasgowAnderston'));
const GlasgowDixonBlazes = lazy(() => import('./pages/town/GlasgowDixonBlazes'));
const GlasgowCranstonhill = lazy(() => import('./pages/town/GlasgowCranstonhill'));
const GlasgowKevinbridge = lazy(() => import('./pages/town/GlasgowKevinbridge'));
const GlasgowKingston = lazy(() => import('./pages/town/GlasgowKingston'));
const GlasgowWoodside = lazy(() => import('./pages/town/GlasgowWoodside'));
const GlasgowAnnieslandStation = lazy(() => import('./pages/town/GlasgowAnnieslandStation'));
const GlasgowBailliestonStation = lazy(() => import('./pages/town/GlasgowBailliestonStation'));
const GlasgowMuranoStreetVillage = lazy(() => import('./pages/town/GlasgowMuranoStreetVillage'));
const GlasgowFirhill = lazy(() => import('./pages/town/GlasgowFirhill'));
const GlasgowBridgeton = lazy(() => import('./pages/town/GlasgowBridgeton'));
const GlasgowGallowgate = lazy(() => import('./pages/town/GlasgowGallowgate'));
const GlasgowClaythorne = lazy(() => import('./pages/town/GlasgowClaythorne'));
const GlasgowKelvinside = lazy(() => import('./pages/town/GlasgowKelvinside'));
const GlasgowMeadowside = lazy(() => import('./pages/town/GlasgowMeadowside'));
const GlasgowWellpark = lazy(() => import('./pages/town/GlasgowWellpark'));
const GlasgowGovanhill = lazy(() => import('./pages/town/GlasgowGovanhill'));
const GlasgowKelvindale = lazy(() => import('./pages/town/GlasgowKelvindale'));
const GlasgowMerchantCity = lazy(() => import('./pages/town/GlasgowMerchantCity'));
const GlasgowShawlands = lazy(() => import('./pages/town/GlasgowShawlands'));
const GlasgowArgyleStreetStation = lazy(() => import('./pages/town/GlasgowArgyleStreetStation'));
const GlasgowGarrowhill = lazy(() => import('./pages/town/GlasgowGarrowhill'));
const GlasgowYoker = lazy(() => import('./pages/town/GlasgowYoker'));
const GlasgowYorkhill = lazy(() => import('./pages/town/GlasgowYorkhill'));
const GlasgowTrongate = lazy(() => import('./pages/town/GlasgowTrongate'));
const GlasgowQueensPark = lazy(() => import('./pages/town/GlasgowQueensPark'));
const GlasgowShettleston = lazy(() => import('./pages/town/GlasgowShettleston'));
const GlasgowSaltmarket = lazy(() => import('./pages/town/GlasgowSaltmarket'));
const GlasgowMansewood = lazy(() => import('./pages/town/GlasgowMansewood'));
const GlasgowKinningPark = lazy(() => import('./pages/town/GlasgowKinningPark'));
const GlasgowPollokshaws = lazy(() => import('./pages/town/GlasgowPollokshaws'));
const GlasgowKennishead = lazy(() => import('./pages/town/GlasgowKennishead'));
const GlasgowCrosshill = lazy(() => import('./pages/town/GlasgowCrosshill'));
const GlasgowIbrox = lazy(() => import('./pages/town/GlasgowIbrox'));
const GlasgowGorbals = lazy(() => import('./pages/town/GlasgowGorbals'));
const GlasgowCandleriggs = lazy(() => import('./pages/town/GlasgowCandleriggs'));
const GlasgowWyndford = lazy(() => import('./pages/town/GlasgowWyndford'));
const GlasgowBroomielaw = lazy(() => import('./pages/town/GlasgowBroomielaw'));
const GlasgowOatlands = lazy(() => import('./pages/town/GlasgowOatlands'));
const GlasgowGovan = lazy(() => import('./pages/town/GlasgowGovan'));
const GlasgowHaghill = lazy(() => import('./pages/town/GlasgowHaghill'));
const GlasgowEastwood = lazy(() => import('./pages/town/GlasgowEastwood'));
const GlasgowAnniesland = lazy(() => import('./pages/town/GlasgowAnniesland'));
const GlasgowBaillieston = lazy(() => import('./pages/town/GlasgowBaillieston'));
const GlasgowRutherglen = lazy(() => import('./pages/town/GlasgowRutherglen'));
const GlasgowBishopbriggs = lazy(() => import('./pages/town/GlasgowBishopbriggs'));
const GlasgowAccademyPark = lazy(() => import('./pages/town/GlasgowAccademyPark'));
const GlasgowBailheston = lazy(() => import('./pages/town/GlasgowBailheston'));
const GlasgowBarnhill = lazy(() => import('./pages/town/GlasgowBarnhill'));
const GlasgowCrossmyloof = lazy(() => import('./pages/town/GlasgowCrossmyloof'));
const GlasgowPlantation = lazy(() => import('./pages/town/GlasgowPlantation'));
const GlasgowPollokshields = lazy(() => import('./pages/town/GlasgowPollokshields'));
const GlasgowTemple = lazy(() => import('./pages/town/GlasgowTemple'));
const GlasgowAuchinairn = lazy(() => import('./pages/town/GlasgowAuchinairn'));
const GlasgowCalton = lazy(() => import('./pages/town/GlasgowCalton'));
const GlasgowCamphill = lazy(() => import('./pages/town/GlasgowCamphill'));
const GlasgowCarntyne = lazy(() => import('./pages/town/GlasgowCarntyne'));
const GlasgowCathcart = lazy(() => import('./pages/town/GlasgowCathcart'));
const GlasgowDalmarnock = lazy(() => import('./pages/town/GlasgowDalmarnock'));
const GlasgowHighCarntyne = lazy(() => import('./pages/town/GlasgowHighCarntyne'));
const GlasgowJordanhill = lazy(() => import('./pages/town/GlasgowJordanhill'));
const GlasgowKnightswood = lazy(() => import('./pages/town/GlasgowKnightswood'));
const GlasgowPolmadie = lazy(() => import('./pages/town/GlasgowPolmadie'));
const GlasgowRuchill = lazy(() => import('./pages/town/GlasgowRuchill'));
const GlasgowScotstoun = lazy(() => import('./pages/town/GlasgowScotstoun'));
const GlasgowScotstounWest = lazy(() => import('./pages/town/GlasgowScotstounWest'));
const GlasgowSighthill = lazy(() => import('./pages/town/GlasgowSighthill'));
const GlasgowSpringburn = lazy(() => import('./pages/town/GlasgowSpringburn'));
const GlasgowStrathbungo = lazy(() => import('./pages/town/GlasgowStrathbungo'));
const GlasgowTollcross = lazy(() => import('./pages/town/GlasgowTollcross'));
const GlasgowBarrachnie = lazy(() => import('./pages/town/GlasgowBarrachnie'));
const GlasgowSpringhillFarm = lazy(() => import('./pages/town/GlasgowSpringhillFarm'));
const GlasgowDrumpark = lazy(() => import('./pages/town/GlasgowDrumpark'));
const GlasgowWoodhill = lazy(() => import('./pages/town/GlasgowWoodhill'));
const GlasgowMillhall = lazy(() => import('./pages/town/GlasgowMillhall'));
const GlasgowGarscaden = lazy(() => import('./pages/town/GlasgowGarscaden'));
const GlasgowHutchesontown = lazy(() => import('./pages/town/GlasgowHutchesontown'));
const GlasgowPossilPark = lazy(() => import('./pages/town/GlasgowPossilPark'));
const GlasgowEaglesham = lazy(() => import('./pages/town/GlasgowEaglesham'));
const GloucesterTredworth = lazy(() => import('./pages/town/GloucesterTredworth'));
const GloucesterBownham = lazy(() => import('./pages/town/GloucesterBownham'));
const GloucesterWottonVillage = lazy(() => import('./pages/town/GloucesterWottonVillage'));
const GloucesterHoundscroft = lazy(() => import('./pages/town/GloucesterHoundscroft'));
const GloucesterLlanthony = lazy(() => import('./pages/town/GloucesterLlanthony'));
const GloucesterGluocester = lazy(() => import('./pages/town/GloucesterGluocester'));
const GloucesterHighOrchard = lazy(() => import('./pages/town/GloucesterHighOrchard'));
const GloucesterKingsholm = lazy(() => import('./pages/town/GloucesterKingsholm'));
const GloucesterSandyleaze = lazy(() => import('./pages/town/GloucesterSandyleaze'));
const GloucesterStPauls = lazy(() => import('./pages/town/GloucesterStPauls'));
const GloucesterPoolMeadow = lazy(() => import('./pages/town/GloucesterPoolMeadow'));
const GloucesterTheIsland = lazy(() => import('./pages/town/GloucesterTheIsland'));
const GloucesterLinden = lazy(() => import('./pages/town/GloucesterLinden'));
const GloucesterBarton = lazy(() => import('./pages/town/GloucesterBarton'));
const GuildfordParkBarn = lazy(() => import('./pages/town/GuildfordParkBarn'));
const GuildfordWoodbridgeHill = lazy(() => import('./pages/town/GuildfordWoodbridgeHill'));
const GuildfordPinksHill = lazy(() => import('./pages/town/GuildfordPinksHill'));
const GuildfordPitchPlace = lazy(() => import('./pages/town/GuildfordPitchPlace'));
const GuildfordRydeshill = lazy(() => import('./pages/town/GuildfordRydeshill'));
const GuildfordStoughton = lazy(() => import('./pages/town/GuildfordStoughton'));
const GuildfordBellfields = lazy(() => import('./pages/town/GuildfordBellfields'));
const GuildfordSlyfield = lazy(() => import('./pages/town/GuildfordSlyfield'));
const GuildfordSlyfieldGreen = lazy(() => import('./pages/town/GuildfordSlyfieldGreen'));
const GuildfordStokePark = lazy(() => import('./pages/town/GuildfordStokePark'));
const GuildfordWorplesdon = lazy(() => import('./pages/town/GuildfordWorplesdon'));
const GuildfordOnslowVillage = lazy(() => import('./pages/town/GuildfordOnslowVillage'));
const GuildfordPewleyHill = lazy(() => import('./pages/town/GuildfordPewleyHill'));
const GuildfordBushyHill = lazy(() => import('./pages/town/GuildfordBushyHill'));
const GuildfordCharlotteville = lazy(() => import('./pages/town/GuildfordCharlotteville'));
const GuildfordPewleyCommon = lazy(() => import('./pages/town/GuildfordPewleyCommon'));
const GuildfordStCatherines = lazy(() => import('./pages/town/GuildfordStCatherines'));
const GuildfordGuildfordPark = lazy(() => import('./pages/town/GuildfordGuildfordPark'));
const GuildfordAsh = lazy(() => import('./pages/town/GuildfordAsh'));
const GuildfordWhitmoor = lazy(() => import('./pages/town/GuildfordWhitmoor'));
const GuildfordKeensPark = lazy(() => import('./pages/town/GuildfordKeensPark'));
const HatfieldRoeGreen = lazy(() => import('./pages/town/HatfieldRoeGreen'));
const HatfieldWilkinsGreen = lazy(() => import('./pages/town/HatfieldWilkinsGreen'));
const HatfieldSymondsHyde = lazy(() => import('./pages/town/HatfieldSymondsHyde'));
const HatfieldNastHyde = lazy(() => import('./pages/town/HatfieldNastHyde'));
const HatfieldRoestock = lazy(() => import('./pages/town/HatfieldRoestock'));
const HatfieldHatfieldGardenVillage = lazy(() => import('./pages/town/HatfieldHatfieldGardenVillage'));
const HatfieldEllenbrook = lazy(() => import('./pages/town/HatfieldEllenbrook'));
const HatfieldAstwick = lazy(() => import('./pages/town/HatfieldAstwick'));
const HatfieldSouthHatfield = lazy(() => import('./pages/town/HatfieldSouthHatfield'));
const HatfieldOxlease = lazy(() => import('./pages/town/HatfieldOxlease'));
const HatfieldMarshmoor = lazy(() => import('./pages/town/HatfieldMarshmoor'));
const HatfieldMountPleasant = lazy(() => import('./pages/town/HatfieldMountPleasant'));
const HatfieldTheRyde = lazy(() => import('./pages/town/HatfieldTheRyde'));
const HatfieldBullStagGreen = lazy(() => import('./pages/town/HatfieldBullStagGreen'));
const HatfieldBatterdale = lazy(() => import('./pages/town/HatfieldBatterdale'));
const HatfieldNewTown = lazy(() => import('./pages/town/HatfieldNewTown'));
const HatfieldBirchwood = lazy(() => import('./pages/town/HatfieldBirchwood'));
const HatfieldBirchwoodEstate = lazy(() => import('./pages/town/HatfieldBirchwoodEstate'));
const HatfieldBrookmansPark = lazy(() => import('./pages/town/HatfieldBrookmansPark'));
const HatfieldDixonsHill = lazy(() => import('./pages/town/HatfieldDixonsHill'));
const HatfieldMillGreen = lazy(() => import('./pages/town/HatfieldMillGreen'));
const HatfieldWaterEnd = lazy(() => import('./pages/town/HatfieldWaterEnd'));
const HatfieldTheRookery = lazy(() => import('./pages/town/HatfieldTheRookery'));
const HatfieldBishopsHatfield = lazy(() => import('./pages/town/HatfieldBishopsHatfield'));
const HatfieldHawkeshead = lazy(() => import('./pages/town/HatfieldHawkeshead'));
const HatfieldOldHatfield = lazy(() => import('./pages/town/HatfieldOldHatfield'));
const HatfieldWarrengateEstate = lazy(() => import('./pages/town/HatfieldWarrengateEstate'));
const HatfieldBrookmansParkStation = lazy(() => import('./pages/town/HatfieldBrookmansParkStation'));
const HighWycombeWestWycombeVillage = lazy(() => import('./pages/town/HighWycombeWestWycombeVillage'));
const HighWycombeWestWycombe = lazy(() => import('./pages/town/HighWycombeWestWycombe'));
const HighWycombeBooker = lazy(() => import('./pages/town/HighWycombeBooker'));
const HighWycombeMicklefield = lazy(() => import('./pages/town/HighWycombeMicklefield'));
const HighWycombeTerriers = lazy(() => import('./pages/town/HighWycombeTerriers'));
const HighWycombeTotteridge = lazy(() => import('./pages/town/HighWycombeTotteridge'));
const HighWycombeBowerdean = lazy(() => import('./pages/town/HighWycombeBowerdean'));
const HighWycombeDownleyCommon = lazy(() => import('./pages/town/HighWycombeDownleyCommon'));
const HighWycombeHighWycombeStation = lazy(() => import('./pages/town/HighWycombeHighWycombeStation'));
const HuddersfieldFollyHall = lazy(() => import('./pages/town/HuddersfieldFollyHall'));
const HuddersfieldRashcliffe = lazy(() => import('./pages/town/HuddersfieldRashcliffe'));
const HuddersfieldSpringwood = lazy(() => import('./pages/town/HuddersfieldSpringwood'));
const HuddersfieldGledholt = lazy(() => import('./pages/town/HuddersfieldGledholt'));
const HuddersfieldEdgerton = lazy(() => import('./pages/town/HuddersfieldEdgerton'));
const HuddersfieldBayHall = lazy(() => import('./pages/town/HuddersfieldBayHall'));
const HuddersfieldLowerFold = lazy(() => import('./pages/town/HuddersfieldLowerFold'));
const HuddersfieldPaddockFoot = lazy(() => import('./pages/town/HuddersfieldPaddockFoot'));
const HuddersfieldJohnnyMooresHill = lazy(() => import('./pages/town/HuddersfieldJohnnyMooresHill'));
const HuddersfieldLockwood = lazy(() => import('./pages/town/HuddersfieldLockwood'));
const HuddersfieldBradleyMills = lazy(() => import('./pages/town/HuddersfieldBradleyMills'));
const HuddersfieldWoodEnd = lazy(() => import('./pages/town/HuddersfieldWoodEnd'));
const HuddersfieldPaddockBrow = lazy(() => import('./pages/town/HuddersfieldPaddockBrow'));
const HuddersfieldSeedHill = lazy(() => import('./pages/town/HuddersfieldSeedHill'));
const HuddersfieldShearingCross = lazy(() => import('./pages/town/HuddersfieldShearingCross'));
const HuddersfieldMarshFold = lazy(() => import('./pages/town/HuddersfieldMarshFold'));
const HuddersfieldLeeHead = lazy(() => import('./pages/town/HuddersfieldLeeHead'));
const HuddersfieldCloseHill = lazy(() => import('./pages/town/HuddersfieldCloseHill'));
const HuddersfieldHallBower = lazy(() => import('./pages/town/HuddersfieldHallBower'));
const HuddersfieldNewsomeCross = lazy(() => import('./pages/town/HuddersfieldNewsomeCross'));
const HuddersfieldTunnacliffeHill = lazy(() => import('./pages/town/HuddersfieldTunnacliffeHill'));
const HuddersfieldStileCommon = lazy(() => import('./pages/town/HuddersfieldStileCommon'));
const HuddersfieldNewsome = lazy(() => import('./pages/town/HuddersfieldNewsome'));
const HuddersfieldMoldgreen = lazy(() => import('./pages/town/HuddersfieldMoldgreen'));
const HuddersfieldAspley = lazy(() => import('./pages/town/HuddersfieldAspley'));
const HuddersfieldRoundHillBottom = lazy(() => import('./pages/town/HuddersfieldRoundHillBottom'));
const HuddersfieldTrough = lazy(() => import('./pages/town/HuddersfieldTrough'));
const HuddersfieldDalton = lazy(() => import('./pages/town/HuddersfieldDalton'));
const HuddersfieldEllandUpperEdge = lazy(() => import('./pages/town/HuddersfieldEllandUpperEdge'));
const HuddersfieldGrimescar = lazy(() => import('./pages/town/HuddersfieldGrimescar'));
const HuddersfieldCowcliffe = lazy(() => import('./pages/town/HuddersfieldCowcliffe'));
const HuddersfieldCroftHollow = lazy(() => import('./pages/town/HuddersfieldCroftHollow'));
const HuddersfieldBadgerHill = lazy(() => import('./pages/town/HuddersfieldBadgerHill'));
const HuddersfieldBurn = lazy(() => import('./pages/town/HuddersfieldBurn'));
const HuddersfieldSeventyAcres = lazy(() => import('./pages/town/HuddersfieldSeventyAcres'));
const HuddersfieldCowcliffeSide = lazy(() => import('./pages/town/HuddersfieldCowcliffeSide'));
const HuddersfieldStorth = lazy(() => import('./pages/town/HuddersfieldStorth'));
const HuddersfieldTopOfCowcliffe = lazy(() => import('./pages/town/HuddersfieldTopOfCowcliffe'));
const HuddersfieldScotgate = lazy(() => import('./pages/town/HuddersfieldScotgate'));
const HuddersfieldNetheroydHill = lazy(() => import('./pages/town/HuddersfieldNetheroydHill'));
const HuddersfieldDaltonFold = lazy(() => import('./pages/town/HuddersfieldDaltonFold'));
const HuddersfieldDaltonGreen = lazy(() => import('./pages/town/HuddersfieldDaltonGreen'));
const HuddersfieldLongLaneBottom = lazy(() => import('./pages/town/HuddersfieldLongLaneBottom'));
const HuddersfieldRawthorpe = lazy(() => import('./pages/town/HuddersfieldRawthorpe'));
const HuddersfieldGrovePlace = lazy(() => import('./pages/town/HuddersfieldGrovePlace'));
const HuddersfieldKidroyd = lazy(() => import('./pages/town/HuddersfieldKidroyd'));
const HuddersfieldPrimroseHill = lazy(() => import('./pages/town/HuddersfieldPrimroseHill'));
const HuddersfieldBenomley = lazy(() => import('./pages/town/HuddersfieldBenomley'));
const HuddersfieldGreenside = lazy(() => import('./pages/town/HuddersfieldGreenside'));
const HuddersfieldLongley = lazy(() => import('./pages/town/HuddersfieldLongley'));
const HuddersfieldGolcar = lazy(() => import('./pages/town/HuddersfieldGolcar'));
const HuddersfieldLongwood = lazy(() => import('./pages/town/HuddersfieldLongwood'));
const HuddersfieldCliffEnd = lazy(() => import('./pages/town/HuddersfieldCliffEnd'));
const HuddersfieldDodlee = lazy(() => import('./pages/town/HuddersfieldDodlee'));
const HuddersfieldLeymoor = lazy(() => import('./pages/town/HuddersfieldLeymoor'));
const HuddersfieldRoydsHall = lazy(() => import('./pages/town/HuddersfieldRoydsHall'));
const HuddersfieldColneValley = lazy(() => import('./pages/town/HuddersfieldColneValley'));
const HullNewlandPark = lazy(() => import('./pages/town/HullNewlandPark'));
const HullSulcoates = lazy(() => import('./pages/town/HullSulcoates'));
const HullSculcoates = lazy(() => import('./pages/town/HullSculcoates'));
const HullStoneferry = lazy(() => import('./pages/town/HullStoneferry'));
const HullCrossBridges = lazy(() => import('./pages/town/HullCrossBridges'));
const HullInglemire = lazy(() => import('./pages/town/HullInglemire'));
const HullBransholme = lazy(() => import('./pages/town/HullBransholme'));
const HullDerringhamBank = lazy(() => import('./pages/town/HullDerringhamBank'));
const HullBrooklandsPark = lazy(() => import('./pages/town/HullBrooklandsPark'));
const HullParagon = lazy(() => import('./pages/town/HullParagon'));
const HullPrioryGrange = lazy(() => import('./pages/town/HullPrioryGrange'));
const IpswichBixleyHeath = lazy(() => import('./pages/town/IpswichBixleyHeath'));
const IpswichRedhousePark = lazy(() => import('./pages/town/IpswichRedhousePark'));
const IpswichCalifornia = lazy(() => import('./pages/town/IpswichCalifornia'));
const IpswichPrioryHeath = lazy(() => import('./pages/town/IpswichPrioryHeath'));
const IpswichStJohns = lazy(() => import('./pages/town/IpswichStJohns'));
const IpswichWarrenHeath = lazy(() => import('./pages/town/IpswichWarrenHeath'));
const KingstonuponThamesKingstonUponThames = lazy(() => import('./pages/town/KingstonuponThamesKingstonUponThames'));
const KingstonuponThamesNorbiton = lazy(() => import('./pages/town/KingstonuponThamesNorbiton'));
const LancasterPrimroseHill = lazy(() => import('./pages/town/LancasterPrimroseHill'));
const LancasterTheGreaves = lazy(() => import('./pages/town/LancasterTheGreaves'));
const LancasterWestfieldWarMemorialVillage = lazy(() => import('./pages/town/LancasterWestfieldWarMemorialVillage'));
const LancasterHallPark = lazy(() => import('./pages/town/LancasterHallPark'));
const LancasterAbrahamHeights = lazy(() => import('./pages/town/LancasterAbrahamHeights'));
const LancasterMarsh = lazy(() => import('./pages/town/LancasterMarsh'));
const LancasterBulk = lazy(() => import('./pages/town/LancasterBulk'));
const LancasterScotforth = lazy(() => import('./pages/town/LancasterScotforth'));
const LancasterSkerton = lazy(() => import('./pages/town/LancasterSkerton'));
const LancasterScaleHall = lazy(() => import('./pages/town/LancasterScaleHall'));
const LancasterHolleth = lazy(() => import('./pages/town/LancasterHolleth'));
const LancasterWardHouses = lazy(() => import('./pages/town/LancasterWardHouses'));
const LancasterBleaTarn = lazy(() => import('./pages/town/LancasterBleaTarn'));
const LancasterKnoweHill = lazy(() => import('./pages/town/LancasterKnoweHill'));
const LancasterHampsonGreen = lazy(() => import('./pages/town/LancasterHampsonGreen'));
const LancasterGalgate = lazy(() => import('./pages/town/LancasterGalgate'));
const LancasterEllel = lazy(() => import('./pages/town/LancasterEllel'));
const LancasterHaverbreaks = lazy(() => import('./pages/town/LancasterHaverbreaks'));
const LeedsHydePark = lazy(() => import('./pages/town/LeedsHydePark'));
const LeedsHeadingley = lazy(() => import('./pages/town/LeedsHeadingley'));
const LeedsWoodhouse = lazy(() => import('./pages/town/LeedsWoodhouse'));
const LeedsMilesHill = lazy(() => import('./pages/town/LeedsMilesHill'));
const LeedsBurley = lazy(() => import('./pages/town/LeedsBurley'));
const LeedsHeadingleyHill = lazy(() => import('./pages/town/LeedsHeadingleyHill'));
const LeedsHydeParkCorner = lazy(() => import('./pages/town/LeedsHydeParkCorner'));
const LeedsNewHuddersfield = lazy(() => import('./pages/town/LeedsNewHuddersfield'));
const LeedsBurleyLawns = lazy(() => import('./pages/town/LeedsBurleyLawns'));
const LeedsWoodhouseCarr = lazy(() => import('./pages/town/LeedsWoodhouseCarr'));
const LeedsWoodhouseCliff = lazy(() => import('./pages/town/LeedsWoodhouseCliff'));
const LeedsFarHeadingley = lazy(() => import('./pages/town/LeedsFarHeadingley'));
const LeedsKirkstall = lazy(() => import('./pages/town/LeedsKirkstall'));
const LeedsMeanwood = lazy(() => import('./pages/town/LeedsMeanwood'));
const LeedsBuslingthorpe = lazy(() => import('./pages/town/LeedsBuslingthorpe'));
const LeedsHarehillsCorner = lazy(() => import('./pages/town/LeedsHarehillsCorner'));
const LeedsSheepscar = lazy(() => import('./pages/town/LeedsSheepscar'));
const LeedsQueenswood = lazy(() => import('./pages/town/LeedsQueenswood'));
const LeedsWeetwood = lazy(() => import('./pages/town/LeedsWeetwood'));
const LeedsHorsforthWoodside = lazy(() => import('./pages/town/LeedsHorsforthWoodside'));
const LeedsSteander = lazy(() => import('./pages/town/LeedsSteander'));
const LeedsPotteryField = lazy(() => import('./pages/town/LeedsPotteryField'));
const LeedsSchoolClose = lazy(() => import('./pages/town/LeedsSchoolClose'));
const LeedsMint = lazy(() => import('./pages/town/LeedsMint'));
const LeedsFearnsIsland = lazy(() => import('./pages/town/LeedsFearnsIsland'));
const LeedsKnowsthorpe = lazy(() => import('./pages/town/LeedsKnowsthorpe'));
const LeedsFarRoyds = lazy(() => import('./pages/town/LeedsFarRoyds'));
const LeedsCampField = lazy(() => import('./pages/town/LeedsCampField'));
const LeedsCavalierHill = lazy(() => import('./pages/town/LeedsCavalierHill'));
const LeedsCrownPoint = lazy(() => import('./pages/town/LeedsCrownPoint'));
const LeedsBagbyFields = lazy(() => import('./pages/town/LeedsBagbyFields'));
const LeedsWestPark = lazy(() => import('./pages/town/LeedsWestPark'));
const LeedsScottHall = lazy(() => import('./pages/town/LeedsScottHall'));
const LeedsHorsforth = lazy(() => import('./pages/town/LeedsHorsforth'));
const LeedsWiringField = lazy(() => import('./pages/town/LeedsWiringField'));
const LeedsGreenHill = lazy(() => import('./pages/town/LeedsGreenHill'));
const LeedsBeestonRoyds = lazy(() => import('./pages/town/LeedsBeestonRoyds'));
const LeedsArmley = lazy(() => import('./pages/town/LeedsArmley'));
const LeedsBurmantofts = lazy(() => import('./pages/town/LeedsBurmantofts'));
const LeedsParklands = lazy(() => import('./pages/town/LeedsParklands'));
const LeedsTheLeylands = lazy(() => import('./pages/town/LeedsTheLeylands'));
const LeedsLittleLondon = lazy(() => import('./pages/town/LeedsLittleLondon'));
const LeedsGraveleythorpe = lazy(() => import('./pages/town/LeedsGraveleythorpe'));
const LeedsHoltPark = lazy(() => import('./pages/town/LeedsHoltPark'));
const LeedsCookridge = lazy(() => import('./pages/town/LeedsCookridge'));
const LeedsHawksworth = lazy(() => import('./pages/town/LeedsHawksworth'));
const LeedsSwinnowMoor = lazy(() => import('./pages/town/LeedsSwinnowMoor'));
const LeedsTheOval = lazy(() => import('./pages/town/LeedsTheOval'));
const LeedsMabgate = lazy(() => import('./pages/town/LeedsMabgate'));
const LeedsBrianside = lazy(() => import('./pages/town/LeedsBrianside'));
const LeedsSeacroft = lazy(() => import('./pages/town/LeedsSeacroft'));
const LeedsHunslet = lazy(() => import('./pages/town/LeedsHunslet'));
const LeedsHolbeck = lazy(() => import('./pages/town/LeedsHolbeck'));
const LeedsPotternewton = lazy(() => import('./pages/town/LeedsPotternewton'));
const LeedsRoundhay = lazy(() => import('./pages/town/LeedsRoundhay'));
const LeedsYeadon = lazy(() => import('./pages/town/LeedsYeadon'));
const LeedsBeeston = lazy(() => import('./pages/town/LeedsBeeston'));
const LeedsChapelAllerton = lazy(() => import('./pages/town/LeedsChapelAllerton'));
const LeedsGambleHill = lazy(() => import('./pages/town/LeedsGambleHill'));
const LeedsHillEnd = lazy(() => import('./pages/town/LeedsHillEnd'));
const LeedsRichmondHill = lazy(() => import('./pages/town/LeedsRichmondHill'));
const LeedsSwallowHill = lazy(() => import('./pages/town/LeedsSwallowHill'));
const LeedsWortley = lazy(() => import('./pages/town/LeedsWortley'));
const LeedsHenshaw = lazy(() => import('./pages/town/LeedsHenshaw'));
const LeedsCabbageHill = lazy(() => import('./pages/town/LeedsCabbageHill'));
const LeedsCarrCrofts = lazy(() => import('./pages/town/LeedsCarrCrofts'));
const LeedsFarFold = lazy(() => import('./pages/town/LeedsFarFold'));
const LeedsGreenThorpeEstate = lazy(() => import('./pages/town/LeedsGreenThorpeEstate'));
const LeedsHoughSide = lazy(() => import('./pages/town/LeedsHoughSide'));
const LeedsLaneEnds = lazy(() => import('./pages/town/LeedsLaneEnds'));
const LeedsLowMoorSide = lazy(() => import('./pages/town/LeedsLowMoorSide'));
const LeedsParkspring = lazy(() => import('./pages/town/LeedsParkspring'));
const LeedsDeanHead = lazy(() => import('./pages/town/LeedsDeanHead'));
const LeedsScotland = lazy(() => import('./pages/town/LeedsScotland'));
const LeedsOakwood = lazy(() => import('./pages/town/LeedsOakwood'));
const LeedsFarnley = lazy(() => import('./pages/town/LeedsFarnley'));
const LeicesterClarendonPark = lazy(() => import('./pages/town/LeicesterClarendonPark'));
const LeicesterLeicesterCityCentre = lazy(() => import('./pages/town/LeicesterLeicesterCityCentre'));
const LeicesterKnighton = lazy(() => import('./pages/town/LeicesterKnighton'));
const LeicesterSparkenhoe = lazy(() => import('./pages/town/LeicesterSparkenhoe'));
const LeicesterSouthfields = lazy(() => import('./pages/town/LeicesterSouthfields'));
const LeicesterStoneygate = lazy(() => import('./pages/town/LeicesterStoneygate'));
const LeicesterEvington = lazy(() => import('./pages/town/LeicesterEvington'));
const LeicesterAylestonePark = lazy(() => import('./pages/town/LeicesterAylestonePark'));
const LeicesterKnightonFields = lazy(() => import('./pages/town/LeicesterKnightonFields'));
const LeicesterWoodHill = lazy(() => import('./pages/town/LeicesterWoodHill'));
const LeicesterSpinneyHills = lazy(() => import('./pages/town/LeicesterSpinneyHills'));
const LeicesterHighfields = lazy(() => import('./pages/town/LeicesterHighfields'));
const LeicesterParkVale = lazy(() => import('./pages/town/LeicesterParkVale'));
const LeicesterWesternPark = lazy(() => import('./pages/town/LeicesterWesternPark'));
const LeicesterWestBridge = lazy(() => import('./pages/town/LeicesterWestBridge'));
const LeicesterDaneHills = lazy(() => import('./pages/town/LeicesterDaneHills'));
const LeicesterKirbyFrith = lazy(() => import('./pages/town/LeicesterKirbyFrith'));
const LeicesterAylestone = lazy(() => import('./pages/town/LeicesterAylestone'));
const LeicesterDominionEstate = lazy(() => import('./pages/town/LeicesterDominionEstate'));
const LeicesterNewParksEstate = lazy(() => import('./pages/town/LeicesterNewParksEstate'));
const LeicesterNewfoundPool = lazy(() => import('./pages/town/LeicesterNewfoundPool'));
const LeicesterBraunstoneFrith = lazy(() => import('./pages/town/LeicesterBraunstoneFrith'));
const LeicesterBraunstonePark = lazy(() => import('./pages/town/LeicesterBraunstonePark'));
const LeicesterAbbeyPark = lazy(() => import('./pages/town/LeicesterAbbeyPark'));
const LeicesterFrogIsland = lazy(() => import('./pages/town/LeicesterFrogIsland'));
const LeicesterLeicesterAbbey = lazy(() => import('./pages/town/LeicesterLeicesterAbbey'));
const LeicesterBlackFriars = lazy(() => import('./pages/town/LeicesterBlackFriars'));
const LeicesterStrettonMagna = lazy(() => import('./pages/town/LeicesterStrettonMagna'));
const LeicesterWestKnighton = lazy(() => import('./pages/town/LeicesterWestKnighton'));
const LeicesterLeicesterFrith = lazy(() => import('./pages/town/LeicesterLeicesterFrith'));
const LeicesterAnsteyPastures = lazy(() => import('./pages/town/LeicesterAnsteyPastures'));
const LeicesterBraunstone = lazy(() => import('./pages/town/LeicesterBraunstone'));
const LeicesterSpencefield = lazy(() => import('./pages/town/LeicesterSpencefield'));
const LincolnBrayfordSideNorth = lazy(() => import('./pages/town/LincolnBrayfordSideNorth'));
const LincolnBrayfordWharfNorth = lazy(() => import('./pages/town/LincolnBrayfordWharfNorth'));
const LincolnNewland = lazy(() => import('./pages/town/LincolnNewland'));
const LincolnBrayfordWharfEast = lazy(() => import('./pages/town/LincolnBrayfordWharfEast'));
const LincolnBrayfordWharf = lazy(() => import('./pages/town/LincolnBrayfordWharf'));
const LincolnNewBoultham = lazy(() => import('./pages/town/LincolnNewBoultham'));
const LincolnErmine = lazy(() => import('./pages/town/LincolnErmine'));
const LincolnBoultham = lazy(() => import('./pages/town/LincolnBoultham'));
const LincolnLings = lazy(() => import('./pages/town/LincolnLings'));
const LincolnStCatherines = lazy(() => import('./pages/town/LincolnStCatherines'));
const LincolnOdder = lazy(() => import('./pages/town/LincolnOdder'));
const LincolnScampton = lazy(() => import('./pages/town/LincolnScampton'));
const LincolnBracebridge = lazy(() => import('./pages/town/LincolnBracebridge'));
const LincolnBurtonWaters = lazy(() => import('./pages/town/LincolnBurtonWaters'));
const LincolnFallows = lazy(() => import('./pages/town/LincolnFallows'));
const LiverpoolWavertree = lazy(() => import('./pages/town/LiverpoolWavertree'));
const LiverpoolKensington = lazy(() => import('./pages/town/LiverpoolKensington'));
const LiverpoolAigburth = lazy(() => import('./pages/town/LiverpoolAigburth'));
const LiverpoolFairfield = lazy(() => import('./pages/town/LiverpoolFairfield'));
const LiverpoolPrincesPark = lazy(() => import('./pages/town/LiverpoolPrincesPark'));
const LiverpoolToxteth = lazy(() => import('./pages/town/LiverpoolToxteth'));
const LiverpoolEdgeHill = lazy(() => import('./pages/town/LiverpoolEdgeHill'));
const LiverpoolAllerton = lazy(() => import('./pages/town/LiverpoolAllerton'));
const LiverpoolMossleyHill = lazy(() => import('./pages/town/LiverpoolMossleyHill'));
const LiverpoolLowHill = lazy(() => import('./pages/town/LiverpoolLowHill'));
const LiverpoolSeftonPark = lazy(() => import('./pages/town/LiverpoolSeftonPark'));
const LiverpoolEverton = lazy(() => import('./pages/town/LiverpoolEverton'));
const LiverpoolGeorgianQuarter = lazy(() => import('./pages/town/LiverpoolGeorgianQuarter'));
const LiverpoolElmPark = lazy(() => import('./pages/town/LiverpoolElmPark'));
const LiverpoolLiverpoolLimeStreetStation = lazy(() => import('./pages/town/LiverpoolLiverpoolLimeStreetStation'));
const LiverpoolStMichaels = lazy(() => import('./pages/town/LiverpoolStMichaels'));
const LiverpoolOldSwan = lazy(() => import('./pages/town/LiverpoolOldSwan'));
const LiverpoolTuebrook = lazy(() => import('./pages/town/LiverpoolTuebrook'));
const LiverpoolKirkdale = lazy(() => import('./pages/town/LiverpoolKirkdale'));
const LiverpoolStoneycroft = lazy(() => import('./pages/town/LiverpoolStoneycroft'));
const LiverpoolBevingtonBush = lazy(() => import('./pages/town/LiverpoolBevingtonBush'));
const LiverpoolCalderstones = lazy(() => import('./pages/town/LiverpoolCalderstones'));
const LiverpoolDingle = lazy(() => import('./pages/town/LiverpoolDingle'));
const LiverpoolOtterspool = lazy(() => import('./pages/town/LiverpoolOtterspool'));
const LiverpoolCabbageHall = lazy(() => import('./pages/town/LiverpoolCabbageHall'));
const LiverpoolOliveMount = lazy(() => import('./pages/town/LiverpoolOliveMount'));
const LiverpoolSandownPark = lazy(() => import('./pages/town/LiverpoolSandownPark'));
const LiverpoolOakHillPark = lazy(() => import('./pages/town/LiverpoolOakHillPark'));
const LiverpoolWalton = lazy(() => import('./pages/town/LiverpoolWalton'));
const LiverpoolAnfield = lazy(() => import('./pages/town/LiverpoolAnfield'));
const LiverpoolSeaforth = lazy(() => import('./pages/town/LiverpoolSeaforth'));
const LiverpoolStanley = lazy(() => import('./pages/town/LiverpoolStanley'));
const LiverpoolWaterloo = lazy(() => import('./pages/town/LiverpoolWaterloo'));
const LiverpoolWoolton = lazy(() => import('./pages/town/LiverpoolWoolton'));
const LiverpoolClubmoor = lazy(() => import('./pages/town/LiverpoolClubmoor'));
const LiverpoolAigburthVale = lazy(() => import('./pages/town/LiverpoolAigburthVale'));
const LiverpoolBearbrands = lazy(() => import('./pages/town/LiverpoolBearbrands'));
const LiverpoolFarthingWood = lazy(() => import('./pages/town/LiverpoolFarthingWood'));
const LiverpoolHillfoot = lazy(() => import('./pages/town/LiverpoolHillfoot'));
const LiverpoolSuttonOak = lazy(() => import('./pages/town/LiverpoolSuttonOak'));
const LondonWansteadParkStation = lazy(() => import('./pages/town/LondonWansteadParkStation'));
const LondonCroydon = lazy(() => import('./pages/town/LondonCroydon'));
const LondonKingsRoadArea = lazy(() => import('./pages/town/LondonKingsRoadArea'));
const LondonNorthGreenwich = lazy(() => import('./pages/town/LondonNorthGreenwich'));
const LondonGreenwichPeninsula = lazy(() => import('./pages/town/LondonGreenwichPeninsula'));
const LondonFitzrovia = lazy(() => import('./pages/town/LondonFitzrovia'));
const LondonTowerBridge = lazy(() => import('./pages/town/LondonTowerBridge'));
const LondonArnosGroveStation = lazy(() => import('./pages/town/LondonArnosGroveStation'));
const LondonBakerStreetStation = lazy(() => import('./pages/town/LondonBakerStreetStation'));
const LondonBalhamStation = lazy(() => import('./pages/town/LondonBalhamStation'));
const LondonBrondesburyParkStation = lazy(() => import('./pages/town/LondonBrondesburyParkStation'));
const LondonArchway = lazy(() => import('./pages/town/LondonArchway'));
const LondonMillHarbour = lazy(() => import('./pages/town/LondonMillHarbour'));
const LondonRegentsPark = lazy(() => import('./pages/town/LondonRegentsPark'));
const LondonOldKentRoadArea = lazy(() => import('./pages/town/LondonOldKentRoadArea'));
const LondonRoyalOakStation = lazy(() => import('./pages/town/LondonRoyalOakStation'));
const LondonStroudGreen = lazy(() => import('./pages/town/LondonStroudGreen'));
const LondonSouthBank = lazy(() => import('./pages/town/LondonSouthBank'));
const LondonSpitalfields = lazy(() => import('./pages/town/LondonSpitalfields'));
const LondonArenaTramStop = lazy(() => import('./pages/town/LondonArenaTramStop'));
const LondonOldOakCommon = lazy(() => import('./pages/town/LondonOldOakCommon'));
const LondonBarking = lazy(() => import('./pages/town/LondonBarking'));
const LondonBowesParkStation = lazy(() => import('./pages/town/LondonBowesParkStation'));
const LondonBrickLane = lazy(() => import('./pages/town/LondonBrickLane'));
const LondonBromley = lazy(() => import('./pages/town/LondonBromley'));
const LondonIlford = lazy(() => import('./pages/town/LondonIlford'));
const LondonBeckenhamJunctionStation = lazy(() => import('./pages/town/LondonBeckenhamJunctionStation'));
const LondonStPaulsStation = lazy(() => import('./pages/town/LondonStPaulsStation'));
const LondonHainaultStation = lazy(() => import('./pages/town/LondonHainaultStation'));
const LondonWestHamStation = lazy(() => import('./pages/town/LondonWestHamStation'));
const LondonEmersonParkStation = lazy(() => import('./pages/town/LondonEmersonParkStation'));
const LondonLangdonParkStation = lazy(() => import('./pages/town/LondonLangdonParkStation'));
const LondonWoodStreetStation = lazy(() => import('./pages/town/LondonWoodStreetStation'));
const LondonOlympicPark = lazy(() => import('./pages/town/LondonOlympicPark'));
const LondonGipsyHill = lazy(() => import('./pages/town/LondonGipsyHill'));
const LondonChelseaHarbour = lazy(() => import('./pages/town/LondonChelseaHarbour'));
const LondonUpney = lazy(() => import('./pages/town/LondonUpney'));
const LondonKew = lazy(() => import('./pages/town/LondonKew'));
const LondonDagenham = lazy(() => import('./pages/town/LondonDagenham'));
const LondonBecontree = lazy(() => import('./pages/town/LondonBecontree'));
const LondonBrookGreen = lazy(() => import('./pages/town/LondonBrookGreen'));
const LondonTelegraphHill = lazy(() => import('./pages/town/LondonTelegraphHill'));
const LondonWhitehallPark = lazy(() => import('./pages/town/LondonWhitehallPark'));
const LondonRoyalWharf = lazy(() => import('./pages/town/LondonRoyalWharf'));
const LondonBatterseaPowerStation = lazy(() => import('./pages/town/LondonBatterseaPowerStation'));
const LondonDeanstonWharf = lazy(() => import('./pages/town/LondonDeanstonWharf'));
const LondonWoodGreenStation = lazy(() => import('./pages/town/LondonWoodGreenStation'));
const LondonBlackfriarsStation = lazy(() => import('./pages/town/LondonBlackfriarsStation'));
const LondonBromleyNorthStation = lazy(() => import('./pages/town/LondonBromleyNorthStation'));
const LondonAlexandraPalaceStation = lazy(() => import('./pages/town/LondonAlexandraPalaceStation'));
const LondonElephantnCastleNorthernStation = lazy(() => import('./pages/town/LondonElephantnCastleNorthernStation'));
const LondonHeronQuaysStation = lazy(() => import('./pages/town/LondonHeronQuaysStation'));
const LondonMileEndStation = lazy(() => import('./pages/town/LondonMileEndStation'));
const LondonBeddingtonLaneTramStop = lazy(() => import('./pages/town/LondonBeddingtonLaneTramStop'));
const LoughboroughBuckHill = lazy(() => import('./pages/town/LoughboroughBuckHill'));
const LoughboroughCowHill = lazy(() => import('./pages/town/LoughboroughCowHill'));
const LoughboroughSouthfieldsPark = lazy(() => import('./pages/town/LoughboroughSouthfieldsPark'));
const LoughboroughSnellsNook = lazy(() => import('./pages/town/LoughboroughSnellsNook'));
const LoughboroughThorpeAcre = lazy(() => import('./pages/town/LoughboroughThorpeAcre'));
const LoughboroughGarendon = lazy(() => import('./pages/town/LoughboroughGarendon'));
const LoughboroughDishley = lazy(() => import('./pages/town/LoughboroughDishley'));
const LoughboroughShelthorpe = lazy(() => import('./pages/town/LoughboroughShelthorpe'));
const LoughboroughSuttonBonington = lazy(() => import('./pages/town/LoughboroughSuttonBonington'));
const LoughboroughShepshed = lazy(() => import('./pages/town/LoughboroughShepshed'));
const LoughboroughSileby = lazy(() => import('./pages/town/LoughboroughSileby'));
const LoughboroughFinneyHill = lazy(() => import('./pages/town/LoughboroughFinneyHill'));
const LoughboroughParkHill = lazy(() => import('./pages/town/LoughboroughParkHill'));
const LoughboroughNanpantan = lazy(() => import('./pages/town/LoughboroughNanpantan'));
const LutonHyde = lazy(() => import('./pages/town/LutonHyde'));
const LutonLutonHoo = lazy(() => import('./pages/town/LutonLutonHoo'));
const LutonNewmillEnd = lazy(() => import('./pages/town/LutonNewmillEnd'));
const LutonWestHyde = lazy(() => import('./pages/town/LutonWestHyde'));
const LutonBuryPark = lazy(() => import('./pages/town/LutonBuryPark'));
const LutonNewTown = lazy(() => import('./pages/town/LutonNewTown'));
const LutonParkTown = lazy(() => import('./pages/town/LutonParkTown'));
const LutonWardown = lazy(() => import('./pages/town/LutonWardown'));
const LutonWinsdonHill = lazy(() => import('./pages/town/LutonWinsdonHill'));
const ManchesterSouthManchester = lazy(() => import('./pages/town/ManchesterSouthManchester'));
const ManchesterAlmaPark = lazy(() => import('./pages/town/ManchesterAlmaPark'));
const ManchesterAlbertPark = lazy(() => import('./pages/town/ManchesterAlbertPark'));
const ManchesterVictoriaPark = lazy(() => import('./pages/town/ManchesterVictoriaPark'));
const ManchesterAlexandraPark = lazy(() => import('./pages/town/ManchesterAlexandraPark'));
const ManchesterWillowBank = lazy(() => import('./pages/town/ManchesterWillowBank'));
const ManchesterEastDidsbury = lazy(() => import('./pages/town/ManchesterEastDidsbury'));
const ManchesterParrsWood = lazy(() => import('./pages/town/ManchesterParrsWood'));
const ManchesterFallowfield = lazy(() => import('./pages/town/ManchesterFallowfield'));
const ManchesterWithington = lazy(() => import('./pages/town/ManchesterWithington'));
const ManchesterLadybarn = lazy(() => import('./pages/town/ManchesterLadybarn'));
const ManchesterBarlowMoor = lazy(() => import('./pages/town/ManchesterBarlowMoor'));
const ManchesterFieldenPark = lazy(() => import('./pages/town/ManchesterFieldenPark'));
const ManchesterFordBank = lazy(() => import('./pages/town/ManchesterFordBank'));
const ManchesterRusholme = lazy(() => import('./pages/town/ManchesterRusholme'));
const ManchesterMarketStreetTramStop = lazy(() => import('./pages/town/ManchesterMarketStreetTramStop'));
const ManchesterLongsight = lazy(() => import('./pages/town/ManchesterLongsight'));
const ManchesterWestPoint = lazy(() => import('./pages/town/ManchesterWestPoint'));
const ManchesterMedlock = lazy(() => import('./pages/town/ManchesterMedlock'));
const ManchesterMossSide = lazy(() => import('./pages/town/ManchesterMossSide'));
const ManchesterCostonPark = lazy(() => import('./pages/town/ManchesterCostonPark'));
const ManchesterBirchfields = lazy(() => import('./pages/town/ManchesterBirchfields'));
const ManchesterGaythorn = lazy(() => import('./pages/town/ManchesterGaythorn'));
const ManchesterKnottMill = lazy(() => import('./pages/town/ManchesterKnottMill'));
const ManchesterHoltTown = lazy(() => import('./pages/town/ManchesterHoltTown'));
const ManchesterShawBrook = lazy(() => import('./pages/town/ManchesterShawBrook'));
const ManchesterSouthLevenshulme = lazy(() => import('./pages/town/ManchesterSouthLevenshulme'));
const ManchesterBroomLaneEnd = lazy(() => import('./pages/town/ManchesterBroomLaneEnd'));
const ManchesterGreenEnd = lazy(() => import('./pages/town/ManchesterGreenEnd'));
const ManchesterDidsbury = lazy(() => import('./pages/town/ManchesterDidsbury'));
const ManchesterBrunswick = lazy(() => import('./pages/town/ManchesterBrunswick'));
const ManchesterHigherArdwick = lazy(() => import('./pages/town/ManchesterHigherArdwick'));
const ManchesterBurnage = lazy(() => import('./pages/town/ManchesterBurnage'));
const ManchesterWestDidsbury = lazy(() => import('./pages/town/ManchesterWestDidsbury'));
const ManchesterGreenhays = lazy(() => import('./pages/town/ManchesterGreenhays'));
const ManchesterCornbrook = lazy(() => import('./pages/town/ManchesterCornbrook'));
const ManchesterStGeorges = lazy(() => import('./pages/town/ManchesterStGeorges'));
const ManchesterHullardHall = lazy(() => import('./pages/town/ManchesterHullardHall'));
const ManchesterHulme = lazy(() => import('./pages/town/ManchesterHulme'));
const ManchesterVictoria = lazy(() => import('./pages/town/ManchesterVictoria'));
const ManchesterStrangeways = lazy(() => import('./pages/town/ManchesterStrangeways'));
const ManchesterChortltonUponMedlock = lazy(() => import('./pages/town/ManchesterChortltonUponMedlock'));
const ManchesterMosssideEnterprisePark = lazy(() => import('./pages/town/ManchesterMosssideEnterprisePark'));
const ManchesterCastlefield = lazy(() => import('./pages/town/ManchesterCastlefield'));
const ManchesterDarleyPark = lazy(() => import('./pages/town/ManchesterDarleyPark'));
const ManchesterManleyPark = lazy(() => import('./pages/town/ManchesterManleyPark'));
const ManchesterNewWindsor = lazy(() => import('./pages/town/ManchesterNewWindsor'));
const ManchesterBarlowMoorRoad = lazy(() => import('./pages/town/ManchesterBarlowMoorRoad'));
const ManchesterBrooksBar = lazy(() => import('./pages/town/ManchesterBrooksBar'));
const ManchesterArdwick = lazy(() => import('./pages/town/ManchesterArdwick'));
const ManchesterRadcliffe = lazy(() => import('./pages/town/ManchesterRadcliffe'));
const ManchesterBlackLane = lazy(() => import('./pages/town/ManchesterBlackLane'));
const ManchesterConeyGreen = lazy(() => import('./pages/town/ManchesterConeyGreen'));
const ManchesterLightbourneGreen = lazy(() => import('./pages/town/ManchesterLightbourneGreen'));
const ManchesterLowerHeaps = lazy(() => import('./pages/town/ManchesterLowerHeaps'));
const ManchesterOutwood = lazy(() => import('./pages/town/ManchesterOutwood'));
const ManchesterPrestolee = lazy(() => import('./pages/town/ManchesterPrestolee'));
const ManchesterStoneclough = lazy(() => import('./pages/town/ManchesterStoneclough'));
const ManchesterThreeArrow = lazy(() => import('./pages/town/ManchesterThreeArrow'));
const ManchesterThreeArrows = lazy(() => import('./pages/town/ManchesterThreeArrows'));
const ManchesterRingley = lazy(() => import('./pages/town/ManchesterRingley'));
const ManchesterBottomOThFields = lazy(() => import('./pages/town/ManchesterBottomOThFields'));
const ManchesterChapelfield = lazy(() => import('./pages/town/ManchesterChapelfield'));
const ManchesterDeans = lazy(() => import('./pages/town/ManchesterDeans'));
const ManchesterNorthernQuarter = lazy(() => import('./pages/town/ManchesterNorthernQuarter'));
const ManchesterAncoats = lazy(() => import('./pages/town/ManchesterAncoats'));
const ManchesterOldTrafford = lazy(() => import('./pages/town/ManchesterOldTrafford'));
const ManchesterSpringGardens = lazy(() => import('./pages/town/ManchesterSpringGardens'));
const ManchesterMoorsideStation = lazy(() => import('./pages/town/ManchesterMoorsideStation'));
const ManchesterWorsley = lazy(() => import('./pages/town/ManchesterWorsley'));
const ManchesterCrowcroftPark = lazy(() => import('./pages/town/ManchesterCrowcroftPark'));
const ManchesterNorthLevenshulme = lazy(() => import('./pages/town/ManchesterNorthLevenshulme'));
const ManchesterTraffordPark = lazy(() => import('./pages/town/ManchesterTraffordPark'));
const ManchesterLittleHulton = lazy(() => import('./pages/town/ManchesterLittleHulton'));
const ManchesterGortonBrook = lazy(() => import('./pages/town/ManchesterGortonBrook'));
const ManchesterRushford = lazy(() => import('./pages/town/ManchesterRushford'));
const ManchesterWestGorton = lazy(() => import('./pages/town/ManchesterWestGorton'));
const ManchesterBartonMoss = lazy(() => import('./pages/town/ManchesterBartonMoss'));
const ManchesterBentLanes = lazy(() => import('./pages/town/ManchesterBentLanes'));
const ManchesterChorltonFold = lazy(() => import('./pages/town/ManchesterChorltonFold'));
const ManchesterLittleBolton = lazy(() => import('./pages/town/ManchesterLittleBolton'));
const ManchesterMonton = lazy(() => import('./pages/town/ManchesterMonton'));
const ManchesterPatricroft = lazy(() => import('./pages/town/ManchesterPatricroft'));
const ManchesterWestwoodPark = lazy(() => import('./pages/town/ManchesterWestwoodPark'));
const ManchesterBelleVue = lazy(() => import('./pages/town/ManchesterBelleVue'));
const ManchesterAlderForest = lazy(() => import('./pages/town/ManchesterAlderForest'));
const ManchesterBartonUponIrwell = lazy(() => import('./pages/town/ManchesterBartonUponIrwell'));
const ManchesterDumplington = lazy(() => import('./pages/town/ManchesterDumplington'));
const ManchesterHope = lazy(() => import('./pages/town/ManchesterHope'));
const ManchesterPeelGreen = lazy(() => import('./pages/town/ManchesterPeelGreen'));
const ManchesterWinton = lazy(() => import('./pages/town/ManchesterWinton'));
const ManchesterNutsfordVale = lazy(() => import('./pages/town/ManchesterNutsfordVale'));
const ManchesterMathersFold = lazy(() => import('./pages/town/ManchesterMathersFold'));
const ManchesterWhalleyRange = lazy(() => import('./pages/town/ManchesterWhalleyRange'));
const ManchesterOpenshaw = lazy(() => import('./pages/town/ManchesterOpenshaw'));
const ManchesterWhitefield = lazy(() => import('./pages/town/ManchesterWhitefield'));
const ManchesterCadishead = lazy(() => import('./pages/town/ManchesterCadishead'));
const ManchesterChorltonCumHardy = lazy(() => import('./pages/town/ManchesterChorltonCumHardy'));
const ManchesterChorltonville = lazy(() => import('./pages/town/ManchesterChorltonville'));
const ManchesterJennyGreen = lazy(() => import('./pages/town/ManchesterJennyGreen'));
const ManchesterThreeLanesEnd = lazy(() => import('./pages/town/ManchesterThreeLanesEnd'));
const ManchesterWalkden = lazy(() => import('./pages/town/ManchesterWalkden'));
const ManchesterBeswick = lazy(() => import('./pages/town/ManchesterBeswick'));
const ManchesterBradford = lazy(() => import('./pages/town/ManchesterBradford'));
const ManchesterHardy = lazy(() => import('./pages/town/ManchesterHardy'));
const ManchesterHigherOpenshaw = lazy(() => import('./pages/town/ManchesterHigherOpenshaw'));
const ManchesterHoughEnd = lazy(() => import('./pages/town/ManchesterHoughEnd'));
const ManchesterLongfordPark = lazy(() => import('./pages/town/ManchesterLongfordPark'));
const ManchesterLowerOpenshaw = lazy(() => import('./pages/town/ManchesterLowerOpenshaw'));
const ManchesterWhitemoss = lazy(() => import('./pages/town/ManchesterWhitemoss'));
const ManchesterCadisheadMoss = lazy(() => import('./pages/town/ManchesterCadisheadMoss'));
const ManchesterLowerIrlam = lazy(() => import('./pages/town/ManchesterLowerIrlam'));
const ManchesterTheCity = lazy(() => import('./pages/town/ManchesterTheCity'));
const ManchesterWoodsEnd = lazy(() => import('./pages/town/ManchesterWoodsEnd'));
const ManchesterTraffordDistributionCentre = lazy(() => import('./pages/town/ManchesterTraffordDistributionCentre'));
const MiddlesbroughTeesside = lazy(() => import('./pages/town/MiddlesbroughTeesside'));
const MiddlesbroughAyresome = lazy(() => import('./pages/town/MiddlesbroughAyresome'));
const MiddlesbroughGroveHill = lazy(() => import('./pages/town/MiddlesbroughGroveHill'));
const MiddlesbroughBelleVue = lazy(() => import('./pages/town/MiddlesbroughBelleVue'));
const MiddlesbroughMartonGrove = lazy(() => import('./pages/town/MiddlesbroughMartonGrove'));
const MiddlesbroughLonglands = lazy(() => import('./pages/town/MiddlesbroughLonglands'));
const MiddlesbroughLinthorpe = lazy(() => import('./pages/town/MiddlesbroughLinthorpe'));
const MiddlesbroughBattersbyStation = lazy(() => import('./pages/town/MiddlesbroughBattersbyStation'));
const MiddlesbroughNorthOrmesby = lazy(() => import('./pages/town/MiddlesbroughNorthOrmesby'));
const MiddlesbroughWhinneyBanks = lazy(() => import('./pages/town/MiddlesbroughWhinneyBanks'));
const NewcastleuponTyneNewcastleUponTyne = lazy(() => import('./pages/town/NewcastleuponTyneNewcastleUponTyne'));
const NewcastleuponTyneJesmond = lazy(() => import('./pages/town/NewcastleuponTyneJesmond'));
const NewcastleuponTyneNewcastleCityCentre = lazy(() => import('./pages/town/NewcastleuponTyneNewcastleCityCentre'));
const NewcastleuponTyneSandyford = lazy(() => import('./pages/town/NewcastleuponTyneSandyford'));
const NewcastleuponTyneJesmondVale = lazy(() => import('./pages/town/NewcastleuponTyneJesmondVale'));
const NewcastleuponTyneWellburnPark = lazy(() => import('./pages/town/NewcastleuponTyneWellburnPark'));
const NewcastleuponTyneTyneside = lazy(() => import('./pages/town/NewcastleuponTyneTyneside'));
const NewcastleuponTyneHeaton = lazy(() => import('./pages/town/NewcastleuponTyneHeaton'));
const NewcastleuponTyneNorthHeaton = lazy(() => import('./pages/town/NewcastleuponTyneNorthHeaton'));
const NewcastleuponTyneSouthJesmond = lazy(() => import('./pages/town/NewcastleuponTyneSouthJesmond'));
const NewcastleuponTyneWestJesmond = lazy(() => import('./pages/town/NewcastleuponTyneWestJesmond'));
const NewcastleuponTyneGallowgate = lazy(() => import('./pages/town/NewcastleuponTyneGallowgate'));
const NewcastleuponTyneQuayside = lazy(() => import('./pages/town/NewcastleuponTyneQuayside'));
const NewcastleuponTyneStepney = lazy(() => import('./pages/town/NewcastleuponTyneStepney'));
const NewcastleuponTyneShieldfield = lazy(() => import('./pages/town/NewcastleuponTyneShieldfield'));
const NewcastleuponTyneTownMoor = lazy(() => import('./pages/town/NewcastleuponTyneTownMoor'));
const NewcastleuponTyneBrandlingVillage = lazy(() => import('./pages/town/NewcastleuponTyneBrandlingVillage'));
const NewcastleuponTyneHollandPark = lazy(() => import('./pages/town/NewcastleuponTyneHollandPark'));
const NewcastleuponTyneGosforth = lazy(() => import('./pages/town/NewcastleuponTyneGosforth'));
const NewcastleuponTyneFenham = lazy(() => import('./pages/town/NewcastleuponTyneFenham'));
const NewcastleuponTyneLowBenwell = lazy(() => import('./pages/town/NewcastleuponTyneLowBenwell'));
const NewcastleuponTyneBattlefield = lazy(() => import('./pages/town/NewcastleuponTyneBattlefield'));
const NewcastleuponTyneTheLeazes = lazy(() => import('./pages/town/NewcastleuponTyneTheLeazes'));
const NewcastleuponTyneCastleGarth = lazy(() => import('./pages/town/NewcastleuponTyneCastleGarth'));
const NewcastleuponTyneSpitalTongues = lazy(() => import('./pages/town/NewcastleuponTyneSpitalTongues'));
const NewcastleuponTyneHaymarket = lazy(() => import('./pages/town/NewcastleuponTyneHaymarket'));
const NewcastleuponTyneBarrasBridge = lazy(() => import('./pages/town/NewcastleuponTyneBarrasBridge'));
const NewcastleuponTyneEldonSquare = lazy(() => import('./pages/town/NewcastleuponTyneEldonSquare'));
const NewcastleuponTyneNewMills = lazy(() => import('./pages/town/NewcastleuponTyneNewMills'));
const NewcastleuponTyneForthBanks = lazy(() => import('./pages/town/NewcastleuponTyneForthBanks'));
const NewcastleuponTyneArthursHill = lazy(() => import('./pages/town/NewcastleuponTyneArthursHill'));
const NewcastleuponTyneCruddasParkEstate = lazy(() => import('./pages/town/NewcastleuponTyneCruddasParkEstate'));
const NewcastleuponTyneRyeHill = lazy(() => import('./pages/town/NewcastleuponTyneRyeHill'));
const NewcastleuponTyneCruddasPark = lazy(() => import('./pages/town/NewcastleuponTyneCruddasPark'));
const NewcastleuponTyneSouthGosforth = lazy(() => import('./pages/town/NewcastleuponTyneSouthGosforth'));
const NewcastleuponTyneKingsManor = lazy(() => import('./pages/town/NewcastleuponTyneKingsManor'));
const NewcastleuponTyneMontagu = lazy(() => import('./pages/town/NewcastleuponTyneMontagu'));
const NewcastleuponTyneMontaguEstate = lazy(() => import('./pages/town/NewcastleuponTyneMontaguEstate'));
const NewcastleuponTyneMontague = lazy(() => import('./pages/town/NewcastleuponTyneMontague'));
const NewcastleuponTyneByker = lazy(() => import('./pages/town/NewcastleuponTyneByker'));
const NewcastleuponTyneChopwell = lazy(() => import('./pages/town/NewcastleuponTyneChopwell'));
const NewcastleuponTyneKenton = lazy(() => import('./pages/town/NewcastleuponTyneKenton'));
const NewcastleuponTyneStPetersEstate = lazy(() => import('./pages/town/NewcastleuponTyneStPetersEstate'));
const NewcastleuponTyneStLawrence = lazy(() => import('./pages/town/NewcastleuponTyneStLawrence'));
const NewcastleuponTyneNunsMoor = lazy(() => import('./pages/town/NewcastleuponTyneNunsMoor'));
const NewcastleuponTyneOuseburn = lazy(() => import('./pages/town/NewcastleuponTyneOuseburn'));
const NewcastleuponTyneNorthFenham = lazy(() => import('./pages/town/NewcastleuponTyneNorthFenham'));
const NewcastleuponTyneStPeters = lazy(() => import('./pages/town/NewcastleuponTyneStPeters'));
const NewcastleuponTyneStPetersBasin = lazy(() => import('./pages/town/NewcastleuponTyneStPetersBasin'));
const NewcastleuponTyneBykerVillage = lazy(() => import('./pages/town/NewcastleuponTyneBykerVillage'));
const NewcastleuponTyneStAnthonysEstate = lazy(() => import('./pages/town/NewcastleuponTyneStAnthonysEstate'));
const NewcastleuponTyneMiddlewoodPark = lazy(() => import('./pages/town/NewcastleuponTyneMiddlewoodPark'));
const NewcastleuponTyneWingrove = lazy(() => import('./pages/town/NewcastleuponTyneWingrove'));
const NewcastleuponTyneWatergateEstate = lazy(() => import('./pages/town/NewcastleuponTyneWatergateEstate'));
const NewcastleuponTyneOldWalker = lazy(() => import('./pages/town/NewcastleuponTyneOldWalker'));
const NewcastleuponTyneWhickham = lazy(() => import('./pages/town/NewcastleuponTyneWhickham'));
const NewcastleuponTyneWideopen = lazy(() => import('./pages/town/NewcastleuponTyneWideopen'));
const NewcastleuponTyneBenton = lazy(() => import('./pages/town/NewcastleuponTyneBenton'));
const NewcastleuponTyneBenwell = lazy(() => import('./pages/town/NewcastleuponTyneBenwell'));
const NewcastleuponTyneHighHeaton = lazy(() => import('./pages/town/NewcastleuponTyneHighHeaton'));
const NewcastleuponTyneGraingerPark = lazy(() => import('./pages/town/NewcastleuponTyneGraingerPark'));
const NewcastleuponTyneKentonBankFoot = lazy(() => import('./pages/town/NewcastleuponTyneKentonBankFoot'));
const NewcastleuponTyneNorthGosforth = lazy(() => import('./pages/town/NewcastleuponTyneNorthGosforth'));
const NewcastleuponTyneScotswood = lazy(() => import('./pages/town/NewcastleuponTyneScotswood'));
const NewcastleuponTyneWestMoor = lazy(() => import('./pages/town/NewcastleuponTyneWestMoor'));
const NewcastleuponTyneWalker = lazy(() => import('./pages/town/NewcastleuponTyneWalker'));
const NewcastleuponTyneBarronswood = lazy(() => import('./pages/town/NewcastleuponTyneBarronswood'));
const NewcastleuponTyneKentonBarEstate = lazy(() => import('./pages/town/NewcastleuponTyneKentonBarEstate'));
const NewcastleuponTyneMoorhead = lazy(() => import('./pages/town/NewcastleuponTyneMoorhead'));
const NewcastleuponTyneWalkerdene = lazy(() => import('./pages/town/NewcastleuponTyneWalkerdene'));
const NewcastleuponTyneWestBenwell = lazy(() => import('./pages/town/NewcastleuponTyneWestBenwell'));
const NewcastleuponTyneNorthKenton = lazy(() => import('./pages/town/NewcastleuponTyneNorthKenton'));
const NewcastleuponTyneRegentFarm = lazy(() => import('./pages/town/NewcastleuponTyneRegentFarm'));
const NewcastleuponTyneWoodlandsPark = lazy(() => import('./pages/town/NewcastleuponTyneWoodlandsPark'));
const NewcastleuponTyneDaisyHill = lazy(() => import('./pages/town/NewcastleuponTyneDaisyHill'));
const NewcastleuponTyneByermoor = lazy(() => import('./pages/town/NewcastleuponTyneByermoor'));
const NewcastleuponTyneFellsidePark = lazy(() => import('./pages/town/NewcastleuponTyneFellsidePark'));
const NewcastleuponTyneStreetgate = lazy(() => import('./pages/town/NewcastleuponTyneStreetgate'));
const NewcastleuponTyneBellsClose = lazy(() => import('./pages/town/NewcastleuponTyneBellsClose'));
const NewcastleuponTyneCragstonPark = lazy(() => import('./pages/town/NewcastleuponTyneCragstonPark'));
const NewcastleuponTyneDelaval = lazy(() => import('./pages/town/NewcastleuponTyneDelaval'));
const NewcastleuponTyneKentonBar = lazy(() => import('./pages/town/NewcastleuponTyneKentonBar'));
const NewcastleuponTyneOldBenwell = lazy(() => import('./pages/town/NewcastleuponTyneOldBenwell'));
const NewcastleuponTynePendower = lazy(() => import('./pages/town/NewcastleuponTynePendower'));
const NewcastleuponTyneSouthBenwell = lazy(() => import('./pages/town/NewcastleuponTyneSouthBenwell'));
const NewcastleuponTyneRegentCentre = lazy(() => import('./pages/town/NewcastleuponTyneRegentCentre'));
const NewcastleuponTyneRegentFarmEstate = lazy(() => import('./pages/town/NewcastleuponTyneRegentFarmEstate'));
const NewcastleuponTynePendowerEstate = lazy(() => import('./pages/town/NewcastleuponTynePendowerEstate'));
const NewportCastleView = lazy(() => import('./pages/town/NewportCastleView'));
const NewportChetwyndEnd = lazy(() => import('./pages/town/NewportChetwyndEnd'));
const NewportEdgmondManor = lazy(() => import('./pages/town/NewportEdgmondManor'));
const NewportCheneyhill = lazy(() => import('./pages/town/NewportCheneyhill'));
const NewportKingsHeadPark = lazy(() => import('./pages/town/NewportKingsHeadPark'));
const NewportIslington = lazy(() => import('./pages/town/NewportIslington'));
const NewportLowerBar = lazy(() => import('./pages/town/NewportLowerBar'));
const NewportPitchcroft = lazy(() => import('./pages/town/NewportPitchcroft'));
const NewportSummerhill = lazy(() => import('./pages/town/NewportSummerhill'));
const NewportUpperBar = lazy(() => import('./pages/town/NewportUpperBar'));
const NewportEdgmondPark = lazy(() => import('./pages/town/NewportEdgmondPark'));
const NewportEdgmondMarsh = lazy(() => import('./pages/town/NewportEdgmondMarsh'));
const NewportWrekinViewPark = lazy(() => import('./pages/town/NewportWrekinViewPark'));
const NewportFortonGlade = lazy(() => import('./pages/town/NewportFortonGlade'));
const NewportBeechFields = lazy(() => import('./pages/town/NewportBeechFields'));
const NewportConquermoorHeath = lazy(() => import('./pages/town/NewportConquermoorHeath'));
const NewportAqualate = lazy(() => import('./pages/town/NewportAqualate'));
const NewportBromsteadHeath = lazy(() => import('./pages/town/NewportBromsteadHeath'));
const NewportChurchAston = lazy(() => import('./pages/town/NewportChurchAston'));
const NewportLilleshall = lazy(() => import('./pages/town/NewportLilleshall'));
const NewportEdgmond = lazy(() => import('./pages/town/NewportEdgmond'));
const NewportTibberton = lazy(() => import('./pages/town/NewportTibberton'));
const NorthamptonTownCentre = lazy(() => import('./pages/town/NorthamptonTownCentre'));
const NorthamptonKingsleyPark = lazy(() => import('./pages/town/NorthamptonKingsleyPark'));
const NorthamptonPhippsville = lazy(() => import('./pages/town/NorthamptonPhippsville'));
const NorthamptonAbington = lazy(() => import('./pages/town/NorthamptonAbington'));
const NorthamptonTheMounts = lazy(() => import('./pages/town/NorthamptonTheMounts'));
const NorthamptonMounts = lazy(() => import('./pages/town/NorthamptonMounts'));
const NorthamptonKingsthorpe = lazy(() => import('./pages/town/NorthamptonKingsthorpe'));
const NorthamptonKingsley = lazy(() => import('./pages/town/NorthamptonKingsley'));
const NorthamptonQueensPark = lazy(() => import('./pages/town/NorthamptonQueensPark'));
const NorthamptonFarCotton = lazy(() => import('./pages/town/NorthamptonFarCotton'));
const NorthamptonRoselands = lazy(() => import('./pages/town/NorthamptonRoselands'));
const NorthamptonGrosvenorCentre = lazy(() => import('./pages/town/NorthamptonGrosvenorCentre'));
const NorthamptonBriarHill = lazy(() => import('./pages/town/NorthamptonBriarHill'));
const NorthamptonDelapre = lazy(() => import('./pages/town/NorthamptonDelapre'));
const NorthamptonKingsthorpeHollow = lazy(() => import('./pages/town/NorthamptonKingsthorpeHollow'));
const NorthamptonMereway = lazy(() => import('./pages/town/NorthamptonMereway'));
const NorthamptonSemilong = lazy(() => import('./pages/town/NorthamptonSemilong'));
const NorthamptonDanefield = lazy(() => import('./pages/town/NorthamptonDanefield'));
const NorthamptonMonksPark = lazy(() => import('./pages/town/NorthamptonMonksPark'));
const NorthamptonHillTop = lazy(() => import('./pages/town/NorthamptonHillTop'));
const NorthamptonRushmere = lazy(() => import('./pages/town/NorthamptonRushmere'));
const NorthamptonStDavids = lazy(() => import('./pages/town/NorthamptonStDavids'));
const NorthamptonCogenhoe = lazy(() => import('./pages/town/NorthamptonCogenhoe'));
const NorthamptonBaulmsholme = lazy(() => import('./pages/town/NorthamptonBaulmsholme'));
const NorthamptonDerngate = lazy(() => import('./pages/town/NorthamptonDerngate'));
const NorthamptonLinksView = lazy(() => import('./pages/town/NorthamptonLinksView'));
const NorthamptonMillMeadow = lazy(() => import('./pages/town/NorthamptonMillMeadow'));
const NorthamptonPoetsCorner = lazy(() => import('./pages/town/NorthamptonPoetsCorner'));
const NorthamptonBlackLionHill = lazy(() => import('./pages/town/NorthamptonBlackLionHill'));
const NorwichMarlpitEstate = lazy(() => import('./pages/town/NorwichMarlpitEstate'));
const NorwichLarkmanEstate = lazy(() => import('./pages/town/NorwichLarkmanEstate'));
const NorwichEarlham = lazy(() => import('./pages/town/NorwichEarlham'));
const NorwichWestEarlham = lazy(() => import('./pages/town/NorwichWestEarlham'));
const NorwichEarlhamRise = lazy(() => import('./pages/town/NorwichEarlhamRise'));
const NorwichNorwichCityCentre = lazy(() => import('./pages/town/NorwichNorwichCityCentre'));
const NorwichEaton = lazy(() => import('./pages/town/NorwichEaton'));
const NorwichBowthorpe = lazy(() => import('./pages/town/NorwichBowthorpe'));
const NorwichThreeScore = lazy(() => import('./pages/town/NorwichThreeScore'));
const NorwichHeigham = lazy(() => import('./pages/town/NorwichHeigham'));
const NorwichChapelBreak = lazy(() => import('./pages/town/NorwichChapelBreak'));
const NorwichCloverhill = lazy(() => import('./pages/town/NorwichCloverhill'));
const NorwichBracondale = lazy(() => import('./pages/town/NorwichBracondale'));
const NorwichChapelfieldGrove = lazy(() => import('./pages/town/NorwichChapelfieldGrove'));
const NorwichNewLakenham = lazy(() => import('./pages/town/NorwichNewLakenham'));
const NorwichRichmondHill = lazy(() => import('./pages/town/NorwichRichmondHill'));
const NorwichScolesGreen = lazy(() => import('./pages/town/NorwichScolesGreen'));
const NorwichThorpe = lazy(() => import('./pages/town/NorwichThorpe'));
const NorwichHeighamGrove = lazy(() => import('./pages/town/NorwichHeighamGrove'));
const NorwichNewCatton = lazy(() => import('./pages/town/NorwichNewCatton'));
const NorwichThorpeHamlet = lazy(() => import('./pages/town/NorwichThorpeHamlet'));
const NorwichLowerHellesdon = lazy(() => import('./pages/town/NorwichLowerHellesdon'));
const NorwichMileCross = lazy(() => import('./pages/town/NorwichMileCross'));
const NorwichCostessey = lazy(() => import('./pages/town/NorwichCostessey'));
const NorwichShipfield = lazy(() => import('./pages/town/NorwichShipfield'));
const NorwichPlumsteadEstate = lazy(() => import('./pages/town/NorwichPlumsteadEstate'));
const NorwichNewCostessey = lazy(() => import('./pages/town/NorwichNewCostessey'));
const NorwichWestPottergate = lazy(() => import('./pages/town/NorwichWestPottergate'));
const NorwichTrowseNewton = lazy(() => import('./pages/town/NorwichTrowseNewton'));
const NorwichCringleford = lazy(() => import('./pages/town/NorwichCringleford'));
const NorwichCostesseyPark = lazy(() => import('./pages/town/NorwichCostesseyPark'));
const NorwichMousehold = lazy(() => import('./pages/town/NorwichMousehold'));
const NorwichTrowseMillgate = lazy(() => import('./pages/town/NorwichTrowseMillgate'));
const NorwichTuckswood = lazy(() => import('./pages/town/NorwichTuckswood'));
const NottinghamLenton = lazy(() => import('./pages/town/NottinghamLenton'));
const NottinghamOldLenton = lazy(() => import('./pages/town/NottinghamOldLenton'));
const NottinghamOldRadford = lazy(() => import('./pages/town/NottinghamOldRadford'));
const NottinghamNewLenton = lazy(() => import('./pages/town/NottinghamNewLenton'));
const NottinghamNottinghamCityCentre = lazy(() => import('./pages/town/NottinghamNottinghamCityCentre'));
const NottinghamArboretum = lazy(() => import('./pages/town/NottinghamArboretum'));
const NottinghamBeeston = lazy(() => import('./pages/town/NottinghamBeeston'));
const NottinghamDunkirk = lazy(() => import('./pages/town/NottinghamDunkirk'));
const NottinghamForestFields = lazy(() => import('./pages/town/NottinghamForestFields'));
const NottinghamWestBridgford = lazy(() => import('./pages/town/NottinghamWestBridgford'));
const NottinghamLaceMarket = lazy(() => import('./pages/town/NottinghamLaceMarket'));
const NottinghamStAnns = lazy(() => import('./pages/town/NottinghamStAnns'));
const NottinghamHysonGreen = lazy(() => import('./pages/town/NottinghamHysonGreen'));
const NottinghamBobbersMill = lazy(() => import('./pages/town/NottinghamBobbersMill'));
const NottinghamWilfordHill = lazy(() => import('./pages/town/NottinghamWilfordHill'));
const NottinghamMapperley = lazy(() => import('./pages/town/NottinghamMapperley'));
const NottinghamComptonAcres = lazy(() => import('./pages/town/NottinghamComptonAcres'));
const NottinghamUniversityPark = lazy(() => import('./pages/town/NottinghamUniversityPark'));
const NottinghamWollaton = lazy(() => import('./pages/town/NottinghamWollaton'));
const NottinghamMapperleyPark = lazy(() => import('./pages/town/NottinghamMapperleyPark'));
const NottinghamHockley = lazy(() => import('./pages/town/NottinghamHockley'));
const NottinghamRadford = lazy(() => import('./pages/town/NottinghamRadford'));
const NottinghamThePark = lazy(() => import('./pages/town/NottinghamThePark'));
const NottinghamAdbolton = lazy(() => import('./pages/town/NottinghamAdbolton'));
const NottinghamChilwell = lazy(() => import('./pages/town/NottinghamChilwell'));
const NottinghamSneinton = lazy(() => import('./pages/town/NottinghamSneinton'));
const NottinghamArnoVale = lazy(() => import('./pages/town/NottinghamArnoVale'));
const NottinghamSherwoodRise = lazy(() => import('./pages/town/NottinghamSherwoodRise'));
const NottinghamThorneywood = lazy(() => import('./pages/town/NottinghamThorneywood'));
const NottinghamLentonAbbey = lazy(() => import('./pages/town/NottinghamLentonAbbey'));
const NottinghamRegentsPark = lazy(() => import('./pages/town/NottinghamRegentsPark'));
const NottinghamEdwaltonPark = lazy(() => import('./pages/town/NottinghamEdwaltonPark'));
const NottinghamEdwaltonGrange = lazy(() => import('./pages/town/NottinghamEdwaltonGrange'));
const NottinghamSouthfieldRise = lazy(() => import('./pages/town/NottinghamSouthfieldRise'));
const NottinghamSpringMeadows = lazy(() => import('./pages/town/NottinghamSpringMeadows'));
const NottinghamCarlton = lazy(() => import('./pages/town/NottinghamCarlton'));
const NottinghamBramcote = lazy(() => import('./pages/town/NottinghamBramcote'));
const NottinghamToton = lazy(() => import('./pages/town/NottinghamToton'));
const NottinghamBeestonRylands = lazy(() => import('./pages/town/NottinghamBeestonRylands'));
const NottinghamLadyBay = lazy(() => import('./pages/town/NottinghamLadyBay'));
const NottinghamClifton = lazy(() => import('./pages/town/NottinghamClifton'));
const NottinghamMeadows = lazy(() => import('./pages/town/NottinghamMeadows'));
const NottinghamEastMidlandsParkwayStation = lazy(() => import('./pages/town/NottinghamEastMidlandsParkwayStation'));
const NottinghamNewBasford = lazy(() => import('./pages/town/NottinghamNewBasford'));
const NottinghamSherwood = lazy(() => import('./pages/town/NottinghamSherwood'));
const NottinghamHeathfield = lazy(() => import('./pages/town/NottinghamHeathfield'));
const NottinghamGlapton = lazy(() => import('./pages/town/NottinghamGlapton'));
const NottinghamCarrington = lazy(() => import('./pages/town/NottinghamCarrington'));
const NottinghamBasford = lazy(() => import('./pages/town/NottinghamBasford'));
const NottinghamAspley = lazy(() => import('./pages/town/NottinghamAspley'));
const NottinghamPorchester = lazy(() => import('./pages/town/NottinghamPorchester'));
const NottinghamStrelleyEstate = lazy(() => import('./pages/town/NottinghamStrelleyEstate'));
const NottinghamCliftonSouthTramStop = lazy(() => import('./pages/town/NottinghamCliftonSouthTramStop'));
const NottinghamBeechdale = lazy(() => import('./pages/town/NottinghamBeechdale'));
const NottinghamBramcoteHills = lazy(() => import('./pages/town/NottinghamBramcoteHills'));
const NottinghamWollatonVale = lazy(() => import('./pages/town/NottinghamWollatonVale'));
const NottinghamArnold = lazy(() => import('./pages/town/NottinghamArnold'));
const NottinghamStapleford = lazy(() => import('./pages/town/NottinghamStapleford'));
const NottinghamWilford = lazy(() => import('./pages/town/NottinghamWilford'));
const NottinghamWhitemoor = lazy(() => import('./pages/town/NottinghamWhitemoor'));
const NottinghamNetherfieldStation = lazy(() => import('./pages/town/NottinghamNetherfieldStation'));
const OrmskirkChurchFieldGardens = lazy(() => import('./pages/town/OrmskirkChurchFieldGardens'));
const OrmskirkAughtonPark = lazy(() => import('./pages/town/OrmskirkAughtonPark'));
const OrmskirkPrioryGrove = lazy(() => import('./pages/town/OrmskirkPrioryGrove'));
const OrmskirkPrioryPark = lazy(() => import('./pages/town/OrmskirkPrioryPark'));
const OrmskirkScarthHill = lazy(() => import('./pages/town/OrmskirkScarthHill'));
const OrmskirkClockHouse = lazy(() => import('./pages/town/OrmskirkClockHouse'));
const OrmskirkLathom = lazy(() => import('./pages/town/OrmskirkLathom'));
const OrmskirkScarisbrick = lazy(() => import('./pages/town/OrmskirkScarisbrick'));
const OrmskirkBurscough = lazy(() => import('./pages/town/OrmskirkBurscough'));
const OrmskirkOrmskirkStation = lazy(() => import('./pages/town/OrmskirkOrmskirkStation'));
const OxfordCowley = lazy(() => import('./pages/town/OxfordCowley'));
const OxfordTempleCowley = lazy(() => import('./pages/town/OxfordTempleCowley'));
const OxfordStClements = lazy(() => import('./pages/town/OxfordStClements'));
const OxfordHeadington = lazy(() => import('./pages/town/OxfordHeadington'));
const OxfordNewHeadington = lazy(() => import('./pages/town/OxfordNewHeadington'));
const OxfordSladePark = lazy(() => import('./pages/town/OxfordSladePark'));
const OxfordOpenMagdalen = lazy(() => import('./pages/town/OxfordOpenMagdalen'));
const OxfordOldHeadington = lazy(() => import('./pages/town/OxfordOldHeadington'));
const OxfordFlorencePark = lazy(() => import('./pages/town/OxfordFlorencePark'));
const OxfordRoseHill = lazy(() => import('./pages/town/OxfordRoseHill'));
const OxfordOxfordCityCentre = lazy(() => import('./pages/town/OxfordOxfordCityCentre'));
const OxfordJericho = lazy(() => import('./pages/town/OxfordJericho'));
const OxfordBayswater = lazy(() => import('./pages/town/OxfordBayswater'));
const OxfordHeadingtonQuarry = lazy(() => import('./pages/town/OxfordHeadingtonQuarry'));
const OxfordSandhills = lazy(() => import('./pages/town/OxfordSandhills'));
const OxfordSandhillsEstate = lazy(() => import('./pages/town/OxfordSandhillsEstate'));
const OxfordWoodFarm = lazy(() => import('./pages/town/OxfordWoodFarm'));
const OxfordRisinghurst = lazy(() => import('./pages/town/OxfordRisinghurst'));
const OxfordParkTown = lazy(() => import('./pages/town/OxfordParkTown'));
const OxfordMarston = lazy(() => import('./pages/town/OxfordMarston'));
const OxfordNewHinksey = lazy(() => import('./pages/town/OxfordNewHinksey'));
const OxfordNewMarston = lazy(() => import('./pages/town/OxfordNewMarston'));
const OxfordHeadingtonHill = lazy(() => import('./pages/town/OxfordHeadingtonHill'));
const OxfordGrandpont = lazy(() => import('./pages/town/OxfordGrandpont'));
const OxfordNorthway = lazy(() => import('./pages/town/OxfordNorthway'));
const OxfordOsneyIsland = lazy(() => import('./pages/town/OxfordOsneyIsland'));
const OxfordNewOsney = lazy(() => import('./pages/town/OxfordNewOsney'));
const OxfordWaltonManor = lazy(() => import('./pages/town/OxfordWaltonManor'));
const OxfordOsney = lazy(() => import('./pages/town/OxfordOsney'));
const OxfordSummertown = lazy(() => import('./pages/town/OxfordSummertown'));
const OxfordNewBotley = lazy(() => import('./pages/town/OxfordNewBotley'));
const OxfordOldBotley = lazy(() => import('./pages/town/OxfordOldBotley'));
const OxfordSouthernSlopeEstate = lazy(() => import('./pages/town/OxfordSouthernSlopeEstate'));
const OxfordYarnellsHill = lazy(() => import('./pages/town/OxfordYarnellsHill'));
const OxfordBarton = lazy(() => import('./pages/town/OxfordBarton'));
const OxfordOldMarston = lazy(() => import('./pages/town/OxfordOldMarston'));
const OxfordSunnymead = lazy(() => import('./pages/town/OxfordSunnymead'));
const OxfordCutteslowe = lazy(() => import('./pages/town/OxfordCutteslowe'));
const OxfordChawley = lazy(() => import('./pages/town/OxfordChawley'));
const OxfordIffley = lazy(() => import('./pages/town/OxfordIffley'));
const OxfordBotley = lazy(() => import('./pages/town/OxfordBotley'));
const OxfordCumnorHill = lazy(() => import('./pages/town/OxfordCumnorHill'));
const OxfordRockleyHeath = lazy(() => import('./pages/town/OxfordRockleyHeath'));
const OxfordDeanCourt = lazy(() => import('./pages/town/OxfordDeanCourt'));
const OxfordLittlemore = lazy(() => import('./pages/town/OxfordLittlemore'));
const OxfordBlackbirdLeys = lazy(() => import('./pages/town/OxfordBlackbirdLeys'));
const PaisleyShortroods = lazy(() => import('./pages/town/PaisleyShortroods'));
const PlymouthMutley = lazy(() => import('./pages/town/PlymouthMutley'));
const PlymouthPennycomequick = lazy(() => import('./pages/town/PlymouthPennycomequick'));
const PlymouthLipson = lazy(() => import('./pages/town/PlymouthLipson'));
const PlymouthFordPark = lazy(() => import('./pages/town/PlymouthFordPark'));
const PlymouthStJudes = lazy(() => import('./pages/town/PlymouthStJudes'));
const PlymouthMountGould = lazy(() => import('./pages/town/PlymouthMountGould'));
const PlymouthGreenbank = lazy(() => import('./pages/town/PlymouthGreenbank'));
const PlymouthMannamead = lazy(() => import('./pages/town/PlymouthMannamead'));
const PlymouthMillbridge = lazy(() => import('./pages/town/PlymouthMillbridge'));
const PlymouthValletort = lazy(() => import('./pages/town/PlymouthValletort'));
const PlymouthTheHoe = lazy(() => import('./pages/town/PlymouthTheHoe'));
const PlymouthWestHoe = lazy(() => import('./pages/town/PlymouthWestHoe'));
const PlymouthMillbay = lazy(() => import('./pages/town/PlymouthMillbay'));
const PlymouthMillbayDocks = lazy(() => import('./pages/town/PlymouthMillbayDocks'));
const PlymouthMainstone = lazy(() => import('./pages/town/PlymouthMainstone'));
const PlymouthPeverell = lazy(() => import('./pages/town/PlymouthPeverell'));
const PlymouthDerriford = lazy(() => import('./pages/town/PlymouthDerriford'));
const PlymouthBarbican = lazy(() => import('./pages/town/PlymouthBarbican'));
const PlymouthStonehouse = lazy(() => import('./pages/town/PlymouthStonehouse'));
const PlymouthCattedown = lazy(() => import('./pages/town/PlymouthCattedown'));
const PlymouthStoke = lazy(() => import('./pages/town/PlymouthStoke'));
const PlymouthPlymstock = lazy(() => import('./pages/town/PlymouthPlymstock'));
const PlymouthPrinceRock = lazy(() => import('./pages/town/PlymouthPrinceRock'));
const PlymouthElburton = lazy(() => import('./pages/town/PlymouthElburton'));
const PontypriddTreforest = lazy(() => import('./pages/town/PontypriddTreforest'));
const PontypriddTheGraig = lazy(() => import('./pages/town/PontypriddTheGraig'));
const PontypriddTrehopcyn = lazy(() => import('./pages/town/PontypriddTrehopcyn'));
const PontypriddTroedRhiwTrwyn = lazy(() => import('./pages/town/PontypriddTroedRhiwTrwyn'));
const PontypriddThePark = lazy(() => import('./pages/town/PontypriddThePark'));
const PontypriddWhiterock = lazy(() => import('./pages/town/PontypriddWhiterock'));
const PontypriddYnysangharad = lazy(() => import('./pages/town/PontypriddYnysangharad'));
const PontypriddGlynTaf = lazy(() => import('./pages/town/PontypriddGlynTaf'));
const PontypriddRhydyfelin = lazy(() => import('./pages/town/PontypriddRhydyfelin'));
const PontypriddRhydfelen = lazy(() => import('./pages/town/PontypriddRhydfelen'));
const PontypriddGlanBad = lazy(() => import('./pages/town/PontypriddGlanBad'));
const PooleTalbotVillage = lazy(() => import('./pages/town/PooleTalbotVillage'));
const PooleBranksome = lazy(() => import('./pages/town/PooleBranksome'));
const PooleParkstone = lazy(() => import('./pages/town/PooleParkstone'));
const PooleBourneValley = lazy(() => import('./pages/town/PooleBourneValley'));
const PooleBourneBottom = lazy(() => import('./pages/town/PooleBourneBottom'));
const PooleRedlands = lazy(() => import('./pages/town/PooleRedlands'));
const PooleStAldhelms = lazy(() => import('./pages/town/PooleStAldhelms'));
const PooleBranksomePark = lazy(() => import('./pages/town/PooleBranksomePark'));
const PooleCanfordCliffs = lazy(() => import('./pages/town/PooleCanfordCliffs'));
const PooleLowerParkstone = lazy(() => import('./pages/town/PooleLowerParkstone'));
const PortsmouthCopnor = lazy(() => import('./pages/town/PortsmouthCopnor'));
const PortsmouthPortsea = lazy(() => import('./pages/town/PortsmouthPortsea'));
const PortsmouthOldPortsmouth = lazy(() => import('./pages/town/PortsmouthOldPortsmouth'));
const PortsmouthFratton = lazy(() => import('./pages/town/PortsmouthFratton'));
const PortsmouthBuckland = lazy(() => import('./pages/town/PortsmouthBuckland'));
const PortsmouthNorthEnd = lazy(() => import('./pages/town/PortsmouthNorthEnd'));
const PortsmouthThePoint = lazy(() => import('./pages/town/PortsmouthThePoint'));
const PortsmouthPembrokePark = lazy(() => import('./pages/town/PortsmouthPembrokePark'));
const PortsmouthTheDockyard = lazy(() => import('./pages/town/PortsmouthTheDockyard'));
const PortsmouthTheHard = lazy(() => import('./pages/town/PortsmouthTheHard'));
const PortsmouthLandport = lazy(() => import('./pages/town/PortsmouthLandport'));
const PortsmouthMileEnd = lazy(() => import('./pages/town/PortsmouthMileEnd'));
const PortsmouthRudmore = lazy(() => import('./pages/town/PortsmouthRudmore'));
const PortsmouthStMarys = lazy(() => import('./pages/town/PortsmouthStMarys'));
const PortsmouthMilton = lazy(() => import('./pages/town/PortsmouthMilton'));
const PortsmouthPortseaIsland = lazy(() => import('./pages/town/PortsmouthPortseaIsland'));
const PortsmouthGunwharfQuays = lazy(() => import('./pages/town/PortsmouthGunwharfQuays'));
const PortsmouthStamshaw = lazy(() => import('./pages/town/PortsmouthStamshaw'));
const PortsmouthWhaleIsland = lazy(() => import('./pages/town/PortsmouthWhaleIsland'));
const PortsmouthTipner = lazy(() => import('./pages/town/PortsmouthTipner'));
const PrestonPlungington = lazy(() => import('./pages/town/PrestonPlungington'));
const PrestonAdelphi = lazy(() => import('./pages/town/PrestonAdelphi'));
const PrestonAvenham = lazy(() => import('./pages/town/PrestonAvenham'));
const PrestonMaudlands = lazy(() => import('./pages/town/PrestonMaudlands'));
const PrestonAshtonOnRibble = lazy(() => import('./pages/town/PrestonAshtonOnRibble'));
const PrestonFulwood = lazy(() => import('./pages/town/PrestonFulwood'));
const PrestonCanaries = lazy(() => import('./pages/town/PrestonCanaries'));
const PrestonHolmeSlack = lazy(() => import('./pages/town/PrestonHolmeSlack'));
const PrestonCadley = lazy(() => import('./pages/town/PrestonCadley'));
const PrestonNooklands = lazy(() => import('./pages/town/PrestonNooklands'));
const PrestonSharoeGreen = lazy(() => import('./pages/town/PrestonSharoeGreen'));
const PrestonFernyhalgh = lazy(() => import('./pages/town/PrestonFernyhalgh'));
const PrestonGreenlands = lazy(() => import('./pages/town/PrestonGreenlands'));
const PrestonAshtonBank = lazy(() => import('./pages/town/PrestonAshtonBank'));
const PrestonAshtonFiveLaneEnds = lazy(() => import('./pages/town/PrestonAshtonFiveLaneEnds'));
const PrestonBrookfield = lazy(() => import('./pages/town/PrestonBrookfield'));
const PrestonLarches = lazy(() => import('./pages/town/PrestonLarches'));
const PrestonLongsands = lazy(() => import('./pages/town/PrestonLongsands'));
const PrestonMiddleforthGreen = lazy(() => import('./pages/town/PrestonMiddleforthGreen'));
const PrestonMoorNook = lazy(() => import('./pages/town/PrestonMoorNook'));
const PrestonNuttersPlatt = lazy(() => import('./pages/town/PrestonNuttersPlatt'));
const PrestonGillerFold = lazy(() => import('./pages/town/PrestonGillerFold'));
const PrestonKingsfold = lazy(() => import('./pages/town/PrestonKingsfold'));
const PrestonGreavesTown = lazy(() => import('./pages/town/PrestonGreavesTown'));
const PrestonLostockHallStation = lazy(() => import('./pages/town/PrestonLostockHallStation'));
const ReadingEarley = lazy(() => import('./pages/town/ReadingEarley'));
const ReadingWhitley = lazy(() => import('./pages/town/ReadingWhitley'));
const ReadingSouthernHill = lazy(() => import('./pages/town/ReadingSouthernHill'));
const ReadingNewTown = lazy(() => import('./pages/town/ReadingNewTown'));
const ReadingTheMount = lazy(() => import('./pages/town/ReadingTheMount'));
const ReadingWhiteknights = lazy(() => import('./pages/town/ReadingWhiteknights'));
const ReadingEarleyRise = lazy(() => import('./pages/town/ReadingEarleyRise'));
const ReadingColey = lazy(() => import('./pages/town/ReadingColey'));
const ReadingMaidenErlegh = lazy(() => import('./pages/town/ReadingMaidenErlegh'));
const ReadingLowerEarley = lazy(() => import('./pages/town/ReadingLowerEarley'));
const ReadingGreatLeaCommon = lazy(() => import('./pages/town/ReadingGreatLeaCommon'));
const ReadingWhitleyWood = lazy(() => import('./pages/town/ReadingWhitleyWood'));
const ReadingSpencersWood = lazy(() => import('./pages/town/ReadingSpencersWood'));
const ReadingThreeMileCross = lazy(() => import('./pages/town/ReadingThreeMileCross'));
const ReadingCaversham = lazy(() => import('./pages/town/ReadingCaversham'));
const ReadingLowerCaversham = lazy(() => import('./pages/town/ReadingLowerCaversham'));
const ReadingKingsMeadows = lazy(() => import('./pages/town/ReadingKingsMeadows'));
const ReadingPoundGreen = lazy(() => import('./pages/town/ReadingPoundGreen'));
const SalfordSeedley = lazy(() => import('./pages/town/SalfordSeedley'));
const SalfordWallness = lazy(() => import('./pages/town/SalfordWallness'));
const SalfordPendleton = lazy(() => import('./pages/town/SalfordPendleton'));
const SalfordIrlamsothHeight = lazy(() => import('./pages/town/SalfordIrlamsothHeight'));
const SalfordCharlestown = lazy(() => import('./pages/town/SalfordCharlestown'));
const SalfordCharlstown = lazy(() => import('./pages/town/SalfordCharlstown'));
const SalfordBrindleHeath = lazy(() => import('./pages/town/SalfordBrindleHeath'));
const SalfordMCstr = lazy(() => import('./pages/town/SalfordMCstr'));
const SalfordNewWindsor = lazy(() => import('./pages/town/SalfordNewWindsor'));
const SalfordOrdsall = lazy(() => import('./pages/town/SalfordOrdsall'));
const SalfordLittleBolton = lazy(() => import('./pages/town/SalfordLittleBolton'));
const SalfordScotHay = lazy(() => import('./pages/town/SalfordScotHay'));
const SalfordWeaste = lazy(() => import('./pages/town/SalfordWeaste'));
const SalfordLangworthy = lazy(() => import('./pages/town/SalfordLangworthy'));
const SalfordStrangeways = lazy(() => import('./pages/town/SalfordStrangeways'));
const SalfordHighTown = lazy(() => import('./pages/town/SalfordHighTown'));
const SalfordKersal = lazy(() => import('./pages/town/SalfordKersal'));
const SalfordLowerBroughton = lazy(() => import('./pages/town/SalfordLowerBroughton'));
const SalfordBroughton = lazy(() => import('./pages/town/SalfordBroughton'));
const SalfordKersalVale = lazy(() => import('./pages/town/SalfordKersalVale'));
const SalfordLowerKersal = lazy(() => import('./pages/town/SalfordLowerKersal'));
const SalfordTheCliff = lazy(() => import('./pages/town/SalfordTheCliff'));
const SalfordTheCliffe = lazy(() => import('./pages/town/SalfordTheCliffe'));
const SalfordAlbertPark = lazy(() => import('./pages/town/SalfordAlbertPark'));
const SalfordBroughtonPark = lazy(() => import('./pages/town/SalfordBroughtonPark'));
const SalfordCheetham = lazy(() => import('./pages/town/SalfordCheetham'));
const SalfordHighBroughton = lazy(() => import('./pages/town/SalfordHighBroughton'));
const SalfordSalfordQuays = lazy(() => import('./pages/town/SalfordSalfordQuays'));
const SalfordHigherBroughton = lazy(() => import('./pages/town/SalfordHigherBroughton'));
const SheffieldEcclesallRoadArea = lazy(() => import('./pages/town/SheffieldEcclesallRoadArea'));
const SheffieldCrookesmoor = lazy(() => import('./pages/town/SheffieldCrookesmoor'));
const SheffieldEcclesall = lazy(() => import('./pages/town/SheffieldEcclesall'));
const SheffieldSharrowVale = lazy(() => import('./pages/town/SheffieldSharrowVale'));
const SheffieldBrincliffe = lazy(() => import('./pages/town/SheffieldBrincliffe'));
const SheffieldCrookes = lazy(() => import('./pages/town/SheffieldCrookes'));
const SheffieldHeavygate = lazy(() => import('./pages/town/SheffieldHeavygate'));
const SheffieldCarsick = lazy(() => import('./pages/town/SheffieldCarsick'));
const SheffieldLydgate = lazy(() => import('./pages/town/SheffieldLydgate'));
const SheffieldSteelBank = lazy(() => import('./pages/town/SheffieldSteelBank'));
const SheffieldBroomhill = lazy(() => import('./pages/town/SheffieldBroomhill'));
const SheffieldSheffieldCityCentre = lazy(() => import('./pages/town/SheffieldSheffieldCityCentre'));
const SheffieldSharrow = lazy(() => import('./pages/town/SheffieldSharrow'));
const SheffieldPhiladelphia = lazy(() => import('./pages/town/SheffieldPhiladelphia'));
const SheffieldWoodside = lazy(() => import('./pages/town/SheffieldWoodside'));
const SheffieldNetherEdge = lazy(() => import('./pages/town/SheffieldNetherEdge'));
const SheffieldLowfields = lazy(() => import('./pages/town/SheffieldLowfields'));
const SheffieldHighfields = lazy(() => import('./pages/town/SheffieldHighfields'));
const SheffieldUpperthorpe = lazy(() => import('./pages/town/SheffieldUpperthorpe'));
const SheffieldWalkley = lazy(() => import('./pages/town/SheffieldWalkley'));
const SheffieldDenBank = lazy(() => import('./pages/town/SheffieldDenBank'));
const SheffieldCloughField = lazy(() => import('./pages/town/SheffieldCloughField'));
const SheffieldStephenHill = lazy(() => import('./pages/town/SheffieldStephenHill'));
const SheffieldUnderTofts = lazy(() => import('./pages/town/SheffieldUnderTofts'));
const SheffieldNorfolkPark = lazy(() => import('./pages/town/SheffieldNorfolkPark'));
const SheffieldHartshead = lazy(() => import('./pages/town/SheffieldHartshead'));
const SheffieldMoorfoot = lazy(() => import('./pages/town/SheffieldMoorfoot'));
const SheffieldBannerCross = lazy(() => import('./pages/town/SheffieldBannerCross'));
const SheffieldParkHill = lazy(() => import('./pages/town/SheffieldParkHill'));
const SheffieldWicker = lazy(() => import('./pages/town/SheffieldWicker'));
const SheffieldParkwoodSprings = lazy(() => import('./pages/town/SheffieldParkwoodSprings'));
const SheffieldNeepsend = lazy(() => import('./pages/town/SheffieldNeepsend'));
const SheffieldGreystones = lazy(() => import('./pages/town/SheffieldGreystones'));
const SheffieldHighStorrs = lazy(() => import('./pages/town/SheffieldHighStorrs'));
const SheffieldRinginglow = lazy(() => import('./pages/town/SheffieldRinginglow'));
const SheffieldSharrowHead = lazy(() => import('./pages/town/SheffieldSharrowHead'));
const SheffieldTaptonHill = lazy(() => import('./pages/town/SheffieldTaptonHill'));
const SheffieldWhiteleyWood = lazy(() => import('./pages/town/SheffieldWhiteleyWood'));
const SheffieldBentsGreen = lazy(() => import('./pages/town/SheffieldBentsGreen'));
const SheffieldBinghamPark = lazy(() => import('./pages/town/SheffieldBinghamPark'));
const SheffieldEndcliffe = lazy(() => import('./pages/town/SheffieldEndcliffe'));
const SheffieldGreystonesCliff = lazy(() => import('./pages/town/SheffieldGreystonesCliff'));
const SheffieldCarsickHill = lazy(() => import('./pages/town/SheffieldCarsickHill'));
const SheffieldHallamHead = lazy(() => import('./pages/town/SheffieldHallamHead'));
const SheffieldEndcliffeEdge = lazy(() => import('./pages/town/SheffieldEndcliffeEdge'));
const SheffieldKenwood = lazy(() => import('./pages/town/SheffieldKenwood'));
const SheffieldHeeley = lazy(() => import('./pages/town/SheffieldHeeley'));
const SheffieldKelhamIsland = lazy(() => import('./pages/town/SheffieldKelhamIsland'));
const SheffieldBirleyLaneTramStop = lazy(() => import('./pages/town/SheffieldBirleyLaneTramStop'));
const SheffieldCrosspool = lazy(() => import('./pages/town/SheffieldCrosspool'));
const SheffieldCrystalPeaksTramStop = lazy(() => import('./pages/town/SheffieldCrystalPeaksTramStop'));
const SheffieldLongsett = lazy(() => import('./pages/town/SheffieldLongsett'));
const SheffieldHeeleyGreen = lazy(() => import('./pages/town/SheffieldHeeleyGreen'));
const SheffieldHandsworth = lazy(() => import('./pages/town/SheffieldHandsworth'));
const SheffieldKivetonPark = lazy(() => import('./pages/town/SheffieldKivetonPark'));
const SheffieldBrightside = lazy(() => import('./pages/town/SheffieldBrightside'));
const SheffieldFirshill = lazy(() => import('./pages/town/SheffieldFirshill'));
const SheffieldLittledaleEstate = lazy(() => import('./pages/town/SheffieldLittledaleEstate'));
const SheffieldOrgreave = lazy(() => import('./pages/town/SheffieldOrgreave'));
const SheffieldRotherwood = lazy(() => import('./pages/town/SheffieldRotherwood'));
const SheffieldWoodseats = lazy(() => import('./pages/town/SheffieldWoodseats'));
const SheffieldDarnall = lazy(() => import('./pages/town/SheffieldDarnall'));
const SheffieldBallifield = lazy(() => import('./pages/town/SheffieldBallifield'));
const SheffieldFourLaneEnds = lazy(() => import('./pages/town/SheffieldFourLaneEnds'));
const SheffieldGreenland = lazy(() => import('./pages/town/SheffieldGreenland'));
const SheffieldHandsworthHill = lazy(() => import('./pages/town/SheffieldHandsworthHill'));
const SheffieldHillsborough = lazy(() => import('./pages/town/SheffieldHillsborough'));
const SheffieldRanmoor = lazy(() => import('./pages/town/SheffieldRanmoor'));
const SheffieldMillhouses = lazy(() => import('./pages/town/SheffieldMillhouses'));
const SheffieldHydeParkTramStop = lazy(() => import('./pages/town/SheffieldHydeParkTramStop'));
const SouthamptonPortswood = lazy(() => import('./pages/town/SouthamptonPortswood'));
const SouthamptonWhithedWood = lazy(() => import('./pages/town/SouthamptonWhithedWood'));
const SouthamptonSouthamptonCommon = lazy(() => import('./pages/town/SouthamptonSouthamptonCommon'));
const SouthamptonFitzhugh = lazy(() => import('./pages/town/SouthamptonFitzhugh'));
const SouthamptonBevoisTown = lazy(() => import('./pages/town/SouthamptonBevoisTown'));
const SouthamptonBevoisMount = lazy(() => import('./pages/town/SouthamptonBevoisMount'));
const SouthamptonBevoisValley = lazy(() => import('./pages/town/SouthamptonBevoisValley'));
const SouthamptonInnerAvenue = lazy(() => import('./pages/town/SouthamptonInnerAvenue'));
const SouthamptonPolygon = lazy(() => import('./pages/town/SouthamptonPolygon'));
const SouthamptonHighfield = lazy(() => import('./pages/town/SouthamptonHighfield'));
const SouthamptonWestwoodPark = lazy(() => import('./pages/town/SouthamptonWestwoodPark'));
const SouthamptonSwaythling = lazy(() => import('./pages/town/SouthamptonSwaythling'));
const SouthamptonMountPleasant = lazy(() => import('./pages/town/SouthamptonMountPleasant'));
const SouthamptonShirleyPark = lazy(() => import('./pages/town/SouthamptonShirleyPark'));
const SouthamptonHamptonPark = lazy(() => import('./pages/town/SouthamptonHamptonPark'));
const SouthamptonSouthamptonCityCentre = lazy(() => import('./pages/town/SouthamptonSouthamptonCityCentre'));
const SouthamptonBassett = lazy(() => import('./pages/town/SouthamptonBassett'));
const SouthamptonStDenys = lazy(() => import('./pages/town/SouthamptonStDenys'));
const SouthamptonBassetVillage = lazy(() => import('./pages/town/SouthamptonBassetVillage'));
const SouthamptonStMarys = lazy(() => import('./pages/town/SouthamptonStMarys'));
const SouthamptonBanistersPark = lazy(() => import('./pages/town/SouthamptonBanistersPark'));
const SouthamptonShirley = lazy(() => import('./pages/town/SouthamptonShirley'));
const SouthamptonNortham = lazy(() => import('./pages/town/SouthamptonNortham'));
const SouthamptonOldDocks = lazy(() => import('./pages/town/SouthamptonOldDocks'));
const SouthamptonPeartreeGreen = lazy(() => import('./pages/town/SouthamptonPeartreeGreen'));
const SouthamptonMillbank = lazy(() => import('./pages/town/SouthamptonMillbank'));
const SouthamptonBackOfTheWalls = lazy(() => import('./pages/town/SouthamptonBackOfTheWalls'));
const SouthamptonCrosshouse = lazy(() => import('./pages/town/SouthamptonCrosshouse'));
const SouthamptonDocks = lazy(() => import('./pages/town/SouthamptonDocks'));
const SouthamptonBelvidere = lazy(() => import('./pages/town/SouthamptonBelvidere'));
const SouthamptonFreemantle = lazy(() => import('./pages/town/SouthamptonFreemantle'));
const SouthamptonOceanVillage = lazy(() => import('./pages/town/SouthamptonOceanVillage'));
const SouthamptonMonksbridge = lazy(() => import('./pages/town/SouthamptonMonksbridge'));
const SouthamptonHollyHill = lazy(() => import('./pages/town/SouthamptonHollyHill'));
const SouthamptonBassettGreen = lazy(() => import('./pages/town/SouthamptonBassettGreen'));
const SouthamptonBotleyStation = lazy(() => import('./pages/town/SouthamptonBotleyStation'));
const SouthamptonChilworthOldVillage = lazy(() => import('./pages/town/SouthamptonChilworthOldVillage'));
const SouthamptonHutHill = lazy(() => import('./pages/town/SouthamptonHutHill'));
const SouthamptonWestMarlands = lazy(() => import('./pages/town/SouthamptonWestMarlands'));
const SouthamptonWimpson = lazy(() => import('./pages/town/SouthamptonWimpson'));
const SouthamptonBargate = lazy(() => import('./pages/town/SouthamptonBargate'));
const SouthamptonBedfordPlace = lazy(() => import('./pages/town/SouthamptonBedfordPlace'));
const SouthamptonChapel = lazy(() => import('./pages/town/SouthamptonChapel'));
const SouthamptonCharlottePlace = lazy(() => import('./pages/town/SouthamptonCharlottePlace'));
const SouthamptonBellevue = lazy(() => import('./pages/town/SouthamptonBellevue'));
const SouthamptonBlechynden = lazy(() => import('./pages/town/SouthamptonBlechynden'));
const SouthamptonHoglands = lazy(() => import('./pages/town/SouthamptonHoglands'));
const SouthamptonHoundwell = lazy(() => import('./pages/town/SouthamptonHoundwell'));
const SouthamptonKingslandPlace = lazy(() => import('./pages/town/SouthamptonKingslandPlace'));
const SouthamptonNicholsTown = lazy(() => import('./pages/town/SouthamptonNicholsTown'));
const SouthamptonOldWalls = lazy(() => import('./pages/town/SouthamptonOldWalls'));
const SouthamptonQueensPark = lazy(() => import('./pages/town/SouthamptonQueensPark'));
const SouthamptonQueensland = lazy(() => import('./pages/town/SouthamptonQueensland'));
const SouthamptonTannersBrook = lazy(() => import('./pages/town/SouthamptonTannersBrook'));
const SouthamptonFourposts = lazy(() => import('./pages/town/SouthamptonFourposts'));
const SouthamptonHill = lazy(() => import('./pages/town/SouthamptonHill'));
const SouthamptonLansdowneHill = lazy(() => import('./pages/town/SouthamptonLansdowneHill'));
const SouthamptonMansbridge = lazy(() => import('./pages/town/SouthamptonMansbridge'));
const SouthamptonAtlanticPark = lazy(() => import('./pages/town/SouthamptonAtlanticPark'));
const SouthamptonTownhillPark = lazy(() => import('./pages/town/SouthamptonTownhillPark'));
const SouthamptonWestEnd = lazy(() => import('./pages/town/SouthamptonWestEnd'));
const SouthamptonMoorgreen = lazy(() => import('./pages/town/SouthamptonMoorgreen'));
const SouthamptonSholing = lazy(() => import('./pages/town/SouthamptonSholing'));
const SouthamptonHatchBottom = lazy(() => import('./pages/town/SouthamptonHatchBottom'));
const SouthamptonWoolston = lazy(() => import('./pages/town/SouthamptonWoolston'));
const StirlingStirlingCounty = lazy(() => import('./pages/town/StirlingStirlingCounty'));
const StirlingCambuskenneth = lazy(() => import('./pages/town/StirlingCambuskenneth'));
const StirlingRaploch = lazy(() => import('./pages/town/StirlingRaploch'));
const StirlingRiverside = lazy(() => import('./pages/town/StirlingRiverside'));
const StirlingManorPowis = lazy(() => import('./pages/town/StirlingManorPowis'));
const StirlingManorSteps = lazy(() => import('./pages/town/StirlingManorSteps'));
const StirlingChartershallVillage = lazy(() => import('./pages/town/StirlingChartershallVillage'));
const StirlingCornton = lazy(() => import('./pages/town/StirlingCornton'));
const StirlingStNinians = lazy(() => import('./pages/town/StirlingStNinians'));
const StokeonTrentStokeOnTrent = lazy(() => import('./pages/town/StokeonTrentStokeOnTrent'));
const StokeonTrentHanley = lazy(() => import('./pages/town/StokeonTrentHanley'));
const StokeonTrentBotteslow = lazy(() => import('./pages/town/StokeonTrentBotteslow'));
const StokeonTrentFentonLow = lazy(() => import('./pages/town/StokeonTrentFentonLow'));
const StokeonTrentJoinersSquare = lazy(() => import('./pages/town/StokeonTrentJoinersSquare'));
const StokeonTrentSideway = lazy(() => import('./pages/town/StokeonTrentSideway'));
const StokeonTrentSpringfields = lazy(() => import('./pages/town/StokeonTrentSpringfields'));
const StokeonTrentTheBrampton = lazy(() => import('./pages/town/StokeonTrentTheBrampton'));
const StokeonTrentPenkhull = lazy(() => import('./pages/town/StokeonTrentPenkhull'));
const StokeonTrentBasford = lazy(() => import('./pages/town/StokeonTrentBasford'));
const StokeonTrentBoothen = lazy(() => import('./pages/town/StokeonTrentBoothen'));
const StokeonTrentHartshill = lazy(() => import('./pages/town/StokeonTrentHartshill'));
const StokeonTrentTrentVale = lazy(() => import('./pages/town/StokeonTrentTrentVale'));
const StokeonTrentOakHill = lazy(() => import('./pages/town/StokeonTrentOakHill'));
const StokeonTrentHarpfields = lazy(() => import('./pages/town/StokeonTrentHarpfields'));
const StokeonTrentThePotteries = lazy(() => import('./pages/town/StokeonTrentThePotteries'));
const StokeonTrentBarlastonStation = lazy(() => import('./pages/town/StokeonTrentBarlastonStation'));
const SunderlandAshbrooke = lazy(() => import('./pages/town/SunderlandAshbrooke'));
const SunderlandTunstallVale = lazy(() => import('./pages/town/SunderlandTunstallVale'));
const SunderlandThornhill = lazy(() => import('./pages/town/SunderlandThornhill'));
const SunderlandTunstallHills = lazy(() => import('./pages/town/SunderlandTunstallHills'));
const SunderlandNorthDock = lazy(() => import('./pages/town/SunderlandNorthDock'));
const SunderlandPannsBank = lazy(() => import('./pages/town/SunderlandPannsBank'));
const SunderlandFulwell = lazy(() => import('./pages/town/SunderlandFulwell'));
const SunderlandBarbaryCoast = lazy(() => import('./pages/town/SunderlandBarbaryCoast'));
const SunderlandStPeters = lazy(() => import('./pages/town/SunderlandStPeters'));
const SunderlandStPetersRiverside = lazy(() => import('./pages/town/SunderlandStPetersRiverside'));
const SunderlandStPetersCampus = lazy(() => import('./pages/town/SunderlandStPetersCampus'));
const SunderlandStPetersDevelopment = lazy(() => import('./pages/town/SunderlandStPetersDevelopment'));
const SunderlandNorthSands = lazy(() => import('./pages/town/SunderlandNorthSands'));
const SunderlandMonkwearmouthShore = lazy(() => import('./pages/town/SunderlandMonkwearmouthShore'));
const SunderlandNorthHaven = lazy(() => import('./pages/town/SunderlandNorthHaven'));
const SunderlandAyresQuay = lazy(() => import('./pages/town/SunderlandAyresQuay'));
const SunderlandMillfield = lazy(() => import('./pages/town/SunderlandMillfield'));
const SunderlandLowRow = lazy(() => import('./pages/town/SunderlandLowRow'));
const SunderlandHendonDock = lazy(() => import('./pages/town/SunderlandHendonDock'));
const SunderlandDeptford = lazy(() => import('./pages/town/SunderlandDeptford'));
const SunderlandEastEnd = lazy(() => import('./pages/town/SunderlandEastEnd'));
const SunderlandSouthDock = lazy(() => import('./pages/town/SunderlandSouthDock'));
const SunderlandTownMoor = lazy(() => import('./pages/town/SunderlandTownMoor'));
const SunderlandRoker = lazy(() => import('./pages/town/SunderlandRoker'));
const SunderlandMonkwearmouth = lazy(() => import('./pages/town/SunderlandMonkwearmouth'));
const SunderlandSheepfolds = lazy(() => import('./pages/town/SunderlandSheepfolds'));
const SunderlandBarnes = lazy(() => import('./pages/town/SunderlandBarnes'));
const SunderlandSouthwick = lazy(() => import('./pages/town/SunderlandSouthwick'));
const SunderlandNewSilksworth = lazy(() => import('./pages/town/SunderlandNewSilksworth'));
const SunderlandRyhope = lazy(() => import('./pages/town/SunderlandRyhope'));
const SunderlandSilksworth = lazy(() => import('./pages/town/SunderlandSilksworth'));
const SunderlandCleadon = lazy(() => import('./pages/town/SunderlandCleadon'));
const SunderlandHumbledonHill = lazy(() => import('./pages/town/SunderlandHumbledonHill'));
const SunderlandRedhouse = lazy(() => import('./pages/town/SunderlandRedhouse'));
const SunderlandLeechmereGrange = lazy(() => import('./pages/town/SunderlandLeechmereGrange'));
const SunderlandBrentwoodPark = lazy(() => import('./pages/town/SunderlandBrentwoodPark'));
const SunderlandFord = lazy(() => import('./pages/town/SunderlandFord'));
const SunderlandNookside = lazy(() => import('./pages/town/SunderlandNookside'));
const SunderlandSilksworthColliery = lazy(() => import('./pages/town/SunderlandSilksworthColliery'));
const SunderlandStGabriel = lazy(() => import('./pages/town/SunderlandStGabriel'));
const SunderlandWillowGrange = lazy(() => import('./pages/town/SunderlandWillowGrange'));
const SunderlandWitherwackEstate = lazy(() => import('./pages/town/SunderlandWitherwackEstate'));
const SunderlandEdenVale = lazy(() => import('./pages/town/SunderlandEdenVale'));
const SunderlandFordEstate = lazy(() => import('./pages/town/SunderlandFordEstate'));
const SunderlandGrangetown = lazy(() => import('./pages/town/SunderlandGrangetown'));
const SunderlandGrindonBroadway = lazy(() => import('./pages/town/SunderlandGrindonBroadway'));
const SunderlandHighBarnes = lazy(() => import('./pages/town/SunderlandHighBarnes'));
const SunderlandHighNewport = lazy(() => import('./pages/town/SunderlandHighNewport'));
const SunderlandHumbledon = lazy(() => import('./pages/town/SunderlandHumbledon'));
const SunderlandHyltonLaneEstate = lazy(() => import('./pages/town/SunderlandHyltonLaneEstate'));
const SunderlandHyltonRedHouseEstate = lazy(() => import('./pages/town/SunderlandHyltonRedHouseEstate'));
const SunderlandLeechmereGrangeEstate = lazy(() => import('./pages/town/SunderlandLeechmereGrangeEstate'));
const SunderlandLowPallion = lazy(() => import('./pages/town/SunderlandLowPallion'));
const SunderlandBarnesPark = lazy(() => import('./pages/town/SunderlandBarnesPark'));
const SunderlandNooksideEstate = lazy(() => import('./pages/town/SunderlandNooksideEstate'));
const SunderlandPallion = lazy(() => import('./pages/town/SunderlandPallion'));
const SunderlandPallionWorks = lazy(() => import('./pages/town/SunderlandPallionWorks'));
const SunderlandPennywell = lazy(() => import('./pages/town/SunderlandPennywell'));
const SunderlandPlainsFarm = lazy(() => import('./pages/town/SunderlandPlainsFarm'));
const SunderlandPlainsFarmEstate = lazy(() => import('./pages/town/SunderlandPlainsFarmEstate'));
const SunderlandRedHouseEstate = lazy(() => import('./pages/town/SunderlandRedHouseEstate'));
const SunderlandRyhopeColliery = lazy(() => import('./pages/town/SunderlandRyhopeColliery'));
const SunderlandStGabrielsEstate = lazy(() => import('./pages/town/SunderlandStGabrielsEstate'));
const SunderlandWhitburnVillage = lazy(() => import('./pages/town/SunderlandWhitburnVillage'));
const SunderlandWitherwack = lazy(() => import('./pages/town/SunderlandWitherwack'));
const SunderlandHighPlains = lazy(() => import('./pages/town/SunderlandHighPlains'));
const SunderlandLowFord = lazy(() => import('./pages/town/SunderlandLowFord'));
const SwanseaBrynmill = lazy(() => import('./pages/town/SwanseaBrynmill'));
const SwanseaUplands = lazy(() => import('./pages/town/SwanseaUplands'));
const SwanseaTheMarina = lazy(() => import('./pages/town/SwanseaTheMarina'));
const SwanseaSgeti = lazy(() => import('./pages/town/SwanseaSgeti'));
const SwanseaCwmgwyn = lazy(() => import('./pages/town/SwanseaCwmgwyn'));
const SwanseaGlanmor = lazy(() => import('./pages/town/SwanseaGlanmor'));
const SwanseaYCocyd = lazy(() => import('./pages/town/SwanseaYCocyd'));
const SwanseaStrand = lazy(() => import('./pages/town/SwanseaStrand'));
const SwanseaWaunWen = lazy(() => import('./pages/town/SwanseaWaunWen'));
const SwanseaBrynmelin = lazy(() => import('./pages/town/SwanseaBrynmelin'));
const SwanseaGrenfellPark = lazy(() => import('./pages/town/SwanseaGrenfellPark'));
const SwanseaHafod = lazy(() => import('./pages/town/SwanseaHafod'));
const SwanseaStHelens = lazy(() => import('./pages/town/SwanseaStHelens'));
const SwanseaPentreGuinea = lazy(() => import('./pages/town/SwanseaPentreGuinea'));
const SwanseaPortTennant = lazy(() => import('./pages/town/SwanseaPortTennant'));
const SwanseaSketty = lazy(() => import('./pages/town/SwanseaSketty'));
const SwanseaStThomas = lazy(() => import('./pages/town/SwanseaStThomas'));
const SwanseaSkettyPark = lazy(() => import('./pages/town/SwanseaSkettyPark'));
const SwanseaParcbeck = lazy(() => import('./pages/town/SwanseaParcbeck'));
const SwanseaTycoch = lazy(() => import('./pages/town/SwanseaTycoch'));
const SwanseaFforestfach = lazy(() => import('./pages/town/SwanseaFforestfach'));
const TwickenhamWhitton = lazy(() => import('./pages/town/TwickenhamWhitton'));
const TwickenhamMaswellPark = lazy(() => import('./pages/town/TwickenhamMaswellPark'));
const TwickenhamWhittonPark = lazy(() => import('./pages/town/TwickenhamWhittonPark'));
const UxbridgeColhamGreen = lazy(() => import('./pages/town/UxbridgeColhamGreen'));
const UxbridgeGouldsGreen = lazy(() => import('./pages/town/UxbridgeGouldsGreen'));
const UxbridgeUxbridgeCommon = lazy(() => import('./pages/town/UxbridgeUxbridgeCommon'));
const UxbridgeCowleyPeachey = lazy(() => import('./pages/town/UxbridgeCowleyPeachey'));
const UxbridgeWillowbank = lazy(() => import('./pages/town/UxbridgeWillowbank'));
const UxbridgeCowley = lazy(() => import('./pages/town/UxbridgeCowley'));
const UxbridgeHillingdon = lazy(() => import('./pages/town/UxbridgeHillingdon'));
const WinchesterStanmore = lazy(() => import('./pages/town/WinchesterStanmore'));
const WinchesterSleepersHill = lazy(() => import('./pages/town/WinchesterSleepersHill'));
const WinchesterOramsArbour = lazy(() => import('./pages/town/WinchesterOramsArbour'));
const WinchesterBadgerFarm = lazy(() => import('./pages/town/WinchesterBadgerFarm'));
const WinchesterLadwell = lazy(() => import('./pages/town/WinchesterLadwell'));
const WinchesterLainston = lazy(() => import('./pages/town/WinchesterLainston'));
const WinchesterSouthDown = lazy(() => import('./pages/town/WinchesterSouthDown'));
const WinchesterSilkstead = lazy(() => import('./pages/town/WinchesterSilkstead'));
const WinchesterBunstead = lazy(() => import('./pages/town/WinchesterBunstead'));
const WinchesterTheClose = lazy(() => import('./pages/town/WinchesterTheClose'));
const WinchesterTheSoke = lazy(() => import('./pages/town/WinchesterTheSoke'));
const WinchesterTheLawn = lazy(() => import('./pages/town/WinchesterTheLawn'));
const WinchesterWinnall = lazy(() => import('./pages/town/WinchesterWinnall'));
const WinchesterStMartins = lazy(() => import('./pages/town/WinchesterStMartins'));
const WinchesterStGiles = lazy(() => import('./pages/town/WinchesterStGiles'));
const WinchesterBereweek = lazy(() => import('./pages/town/WinchesterBereweek'));
const WinchesterKilhamLane = lazy(() => import('./pages/town/WinchesterKilhamLane'));
const WinchesterGreenhill = lazy(() => import('./pages/town/WinchesterGreenhill'));
const WinchesterWeeksHill = lazy(() => import('./pages/town/WinchesterWeeksHill'));
const WinchesterWestHill = lazy(() => import('./pages/town/WinchesterWestHill'));
const WinchesterWeeke = lazy(() => import('./pages/town/WinchesterWeeke'));
const WinchesterTegDown = lazy(() => import('./pages/town/WinchesterTegDown'));
const WinchesterHighcliffe = lazy(() => import('./pages/town/WinchesterHighcliffe'));
const WinchesterFulflood = lazy(() => import('./pages/town/WinchesterFulflood'));
const WinchesterKingAlfredPlace = lazy(() => import('./pages/town/WinchesterKingAlfredPlace'));
const WinchesterStCross = lazy(() => import('./pages/town/WinchesterStCross'));
const WinchesterSpringvale = lazy(() => import('./pages/town/WinchesterSpringvale'));
const WinchesterKingsgate = lazy(() => import('./pages/town/WinchesterKingsgate'));
const WinchesterPaintersFields = lazy(() => import('./pages/town/WinchesterPaintersFields'));
const WinchesterBarnesClose = lazy(() => import('./pages/town/WinchesterBarnesClose'));
const WinchesterChristchurchRoad = lazy(() => import('./pages/town/WinchesterChristchurchRoad'));
const WinchesterCulversRoad = lazy(() => import('./pages/town/WinchesterCulversRoad'));
const WinchesterWharfHill = lazy(() => import('./pages/town/WinchesterWharfHill'));
const WinchesterStSwithuns = lazy(() => import('./pages/town/WinchesterStSwithuns'));
const WinchesterBarEnd = lazy(() => import('./pages/town/WinchesterBarEnd'));
const WinchesterAndoverRoad = lazy(() => import('./pages/town/WinchesterAndoverRoad'));
const WinchesterGreenacre = lazy(() => import('./pages/town/WinchesterGreenacre'));
const WinchesterHarestock = lazy(() => import('./pages/town/WinchesterHarestock'));
const WinchesterWeere = lazy(() => import('./pages/town/WinchesterWeere'));
const WolverhamptonNewbridge = lazy(() => import('./pages/town/WolverhamptonNewbridge'));
const WolverhamptonTettenhall = lazy(() => import('./pages/town/WolverhamptonTettenhall'));
const WolverhamptonAldersley = lazy(() => import('./pages/town/WolverhamptonAldersley'));
const WolverhamptonClaregate = lazy(() => import('./pages/town/WolverhamptonClaregate'));
const WolverhamptonBlakeleyGreen = lazy(() => import('./pages/town/WolverhamptonBlakeleyGreen'));
const WolverhamptonPalmersCross = lazy(() => import('./pages/town/WolverhamptonPalmersCross'));
const WolverhamptonParkDale = lazy(() => import('./pages/town/WolverhamptonParkDale'));
const WolverhamptonWhitmoreReans = lazy(() => import('./pages/town/WolverhamptonWhitmoreReans'));
const WorcesterStJohns = lazy(() => import('./pages/town/WorcesterStJohns'));
const WorcesterUpperBroadheath = lazy(() => import('./pages/town/WorcesterUpperBroadheath'));
const WorcesterBroadmoorGreen = lazy(() => import('./pages/town/WorcesterBroadmoorGreen'));
const WorcesterDinesGreen = lazy(() => import('./pages/town/WorcesterDinesGreen'));
const WorcesterHenwick = lazy(() => import('./pages/town/WorcesterHenwick'));
const WorcesterHallowHeath = lazy(() => import('./pages/town/WorcesterHallowHeath'));
const WorcesterMonkwoodGreen = lazy(() => import('./pages/town/WorcesterMonkwoodGreen'));
const WorcesterPeachley = lazy(() => import('./pages/town/WorcesterPeachley'));
const WorcesterAshfield = lazy(() => import('./pages/town/WorcesterAshfield'));
const WorcesterShoulton = lazy(() => import('./pages/town/WorcesterShoulton'));
const WorcesterMoseley = lazy(() => import('./pages/town/WorcesterMoseley'));
const WorcesterArboretum = lazy(() => import('./pages/town/WorcesterArboretum'));
const WorcesterLowesmoor = lazy(() => import('./pages/town/WorcesterLowesmoor'));
const WorcesterSidbury = lazy(() => import('./pages/town/WorcesterSidbury'));
const WorcesterSpringHill = lazy(() => import('./pages/town/WorcesterSpringHill'));
const WorcesterWickEpiscopi = lazy(() => import('./pages/town/WorcesterWickEpiscopi'));
const WorcesterDeblinsGreen = lazy(() => import('./pages/town/WorcesterDeblinsGreen'));
const WorcesterPoleElm = lazy(() => import('./pages/town/WorcesterPoleElm'));
const WorcesterLowerWick = lazy(() => import('./pages/town/WorcesterLowerWick'));
const WorcesterDawshill = lazy(() => import('./pages/town/WorcesterDawshill'));
const WorcesterBrayswick = lazy(() => import('./pages/town/WorcesterBrayswick'));
const WorcesterStanbrook = lazy(() => import('./pages/town/WorcesterStanbrook'));
const WorcesterUpperBattenhall = lazy(() => import('./pages/town/WorcesterUpperBattenhall'));
const WorcesterNortonJuxtaKempsey = lazy(() => import('./pages/town/WorcesterNortonJuxtaKempsey'));
const WorcesterRedhill = lazy(() => import('./pages/town/WorcesterRedhill'));
const WorcesterNunnery = lazy(() => import('./pages/town/WorcesterNunnery'));
const WorcesterSwinesherd = lazy(() => import('./pages/town/WorcesterSwinesherd'));
const WorcesterBarbourne = lazy(() => import('./pages/town/WorcesterBarbourne'));
const WorcesterClerkenleap = lazy(() => import('./pages/town/WorcesterClerkenleap'));
const WorcesterDiglis = lazy(() => import('./pages/town/WorcesterDiglis'));
const WorcesterStPeterTheGreat = lazy(() => import('./pages/town/WorcesterStPeterTheGreat'));
const WorcesterBaynehall = lazy(() => import('./pages/town/WorcesterBaynehall'));
const WorcesterBrookEnd = lazy(() => import('./pages/town/WorcesterBrookEnd'));
const WorcesterDraycott = lazy(() => import('./pages/town/WorcesterDraycott'));
const WorcesterGreenStreet = lazy(() => import('./pages/town/WorcesterGreenStreet'));
const WorcesterPixham = lazy(() => import('./pages/town/WorcesterPixham'));
const WorcesterStonehall = lazy(() => import('./pages/town/WorcesterStonehall'));
const WorcesterNapleton = lazy(() => import('./pages/town/WorcesterNapleton'));
const WrexhamGardenVillage = lazy(() => import('./pages/town/WrexhamGardenVillage'));
const WrexhamKingsMills = lazy(() => import('./pages/town/WrexhamKingsMills'));
const WrexhamOldRhosrobin = lazy(() => import('./pages/town/WrexhamOldRhosrobin'));
const WrexhamPoolMouth = lazy(() => import('./pages/town/WrexhamPoolMouth'));
const WrexhamSpringfield = lazy(() => import('./pages/town/WrexhamSpringfield'));
const WrexhamWheatsheaf = lazy(() => import('./pages/town/WrexhamWheatsheaf'));
const WrexhamBorrasRiffre = lazy(() => import('./pages/town/WrexhamBorrasRiffre'));
const WrexhamGegin = lazy(() => import('./pages/town/WrexhamGegin'));
const WrexhamLittleMountain = lazy(() => import('./pages/town/WrexhamLittleMountain'));
const WrexhamMaesYDre = lazy(() => import('./pages/town/WrexhamMaesYDre'));
const WrexhamNewRhosrobin = lazy(() => import('./pages/town/WrexhamNewRhosrobin'));
const WrexhamPlasCoch = lazy(() => import('./pages/town/WrexhamPlasCoch'));
const WrexhamQueensPark = lazy(() => import('./pages/town/WrexhamQueensPark'));
const WrexhamRhosDdu = lazy(() => import('./pages/town/WrexhamRhosDdu'));
const WrexhamRhosnesni = lazy(() => import('./pages/town/WrexhamRhosnesni'));
const WrexhamTheDunks = lazy(() => import('./pages/town/WrexhamTheDunks'));
const WrexhamTheLodge = lazy(() => import('./pages/town/WrexhamTheLodge'));
const WrexhamWrexhamMaelor = lazy(() => import('./pages/town/WrexhamWrexhamMaelor'));
const WrexhamLlwynOnn = lazy(() => import('./pages/town/WrexhamLlwynOnn'));
const YorkTangHall = lazy(() => import('./pages/town/YorkTangHall'));
const YorkGarrowHill = lazy(() => import('./pages/town/YorkGarrowHill'));
const YorkHeworth = lazy(() => import('./pages/town/YorkHeworth'));
const YorkAppletreeVillage = lazy(() => import('./pages/town/YorkAppletreeVillage'));
const YorkBurnholme = lazy(() => import('./pages/town/YorkBurnholme'));
const YorkFossIslands = lazy(() => import('./pages/town/YorkFossIslands'));
const YorkOsbaldwick = lazy(() => import('./pages/town/YorkOsbaldwick'));
const YorkLayerthorpe = lazy(() => import('./pages/town/YorkLayerthorpe'));
const YorkBirchPark = lazy(() => import('./pages/town/YorkBirchPark'));
const YorkTheGroves = lazy(() => import('./pages/town/YorkTheGroves'));
const YorkYorkCityCentre = lazy(() => import('./pages/town/YorkYorkCityCentre'));
const YorkBurtonStoneLane = lazy(() => import('./pages/town/YorkBurtonStoneLane'));
const YorkClifton = lazy(() => import('./pages/town/YorkClifton'));
const YorkHeworthGreen = lazy(() => import('./pages/town/YorkHeworthGreen'));
const YorkFulford = lazy(() => import('./pages/town/YorkFulford'));
const YorkRawcliffe = lazy(() => import('./pages/town/YorkRawcliffe'));
const YorkBishopthorpeRoad = lazy(() => import('./pages/town/YorkBishopthorpeRoad'));
const YorkHeslingtonLane = lazy(() => import('./pages/town/YorkHeslingtonLane'));
const YorkHeslingtonRoad = lazy(() => import('./pages/town/YorkHeslingtonRoad'));
const YorkHuntingtonVillage = lazy(() => import('./pages/town/YorkHuntingtonVillage'));
const YorkBishopHill = lazy(() => import('./pages/town/YorkBishopHill'));
const YorkSouthBank = lazy(() => import('./pages/town/YorkSouthBank'));
const YorkHuntington = lazy(() => import('./pages/town/YorkHuntington'));
const YorkHopgrove = lazy(() => import('./pages/town/YorkHopgrove'));
const YorkMuncastergate = lazy(() => import('./pages/town/YorkMuncastergate'));
const YorkMonksCross = lazy(() => import('./pages/town/YorkMonksCross'));
const YorkBrockfield = lazy(() => import('./pages/town/YorkBrockfield'));
const YorkOldEarswick = lazy(() => import('./pages/town/YorkOldEarswick'));
const YorkBullCommercialCentre = lazy(() => import('./pages/town/YorkBullCommercialCentre'));
const YorkHungate = lazy(() => import('./pages/town/YorkHungate'));
// //*** js:import-townEnd

//*** jsStart:import-town-location
//*** jsEnd:import-town-location





function App() {
  return (
    <div className="App">        
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />          
          {/* routeSectionStart*/}                    

<Route path="student-accommodation-in-aberdeen" element={<Aberdeen/>}/>
<Route path="student-accommodation-in-aberystwyth" element={<Aberystwyth/>}/>
<Route path="student-accommodation-in-bangor" element={<Bangor/>}/>
<Route path="student-accommodation-in-bath" element={<Bath/>}/>
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
<Route path="student-accommodation-in-aberdeen-city-centre-aberdeen" element={<AberdeenAberdeenCityCentre/>}/>
<Route path="student-accommodation-in-middlefield-aberdeen" element={<AberdeenMiddlefield/>}/>
<Route path="student-accommodation-in-ruthrieston-aberdeen" element={<AberdeenRuthrieston/>}/>
<Route path="student-accommodation-in-kittybrewster-aberdeen" element={<AberdeenKittybrewster/>}/>
<Route path="student-accommodation-in-hilton-aberdeen" element={<AberdeenHilton/>}/>
<Route path="student-accommodation-in-rosehill-aberdeen" element={<AberdeenRosehill/>}/>
<Route path="student-accommodation-in-ferryhill-aberdeen" element={<AberdeenFerryhill/>}/>
<Route path="student-accommodation-in-rosemount-aberdeen" element={<AberdeenRosemount/>}/>
<Route path="student-accommodation-in-torry-aberdeen" element={<AberdeenTorry/>}/>
<Route path="student-accommodation-in-garthdee-aberdeen" element={<AberdeenGarthdee/>}/>
<Route path="student-accommodation-in-aberdeen-west-end-aberdeen" element={<AberdeenAberdeenWestEnd/>}/>
<Route path="student-accommodation-in-forrit-brae-aberdeen" element={<AberdeenForritBrae/>}/>
<Route path="student-accommodation-in-bankhead-aberdeen" element={<AberdeenBankhead/>}/>
<Route path="student-accommodation-in-chapel-of-stoneywood-aberdeen" element={<AberdeenChapelOfStoneywood/>}/>
<Route path="student-accommodation-in-greenburn-aberdeen" element={<AberdeenGreenburn/>}/>
<Route path="student-accommodation-in-newhills-aberdeen" element={<AberdeenNewhills/>}/>
<Route path="student-accommodation-in-upper-persley-aberdeen" element={<AberdeenUpperPersley/>}/>
<Route path="student-accommodation-in-tillydrone-aberdeen" element={<AberdeenTillydrone/>}/>
<Route path="student-accommodation-in-bucksburn-aberdeen" element={<AberdeenBucksburn/>}/>
<Route path="student-accommodation-in-hayton-aberdeen" element={<AberdeenHayton/>}/>
<Route path="student-accommodation-in-woodside-aberdeen" element={<AberdeenWoodside/>}/>
<Route path="student-accommodation-in-townhead-aberdeen" element={<AberdeenTownhead/>}/>
<Route path="student-accommodation-in-marybrae-aberdeen" element={<AberdeenMarybrae/>}/>
<Route path="student-accommodation-in-altries-aberdeen" element={<AberdeenAltries/>}/>
<Route path="student-accommodation-in-kingcausie-aberdeen" element={<AberdeenKingcausie/>}/>
<Route path="student-accommodation-in-kirkton-of-maryculter-aberdeen" element={<AberdeenKirktonOfMaryculter/>}/>
<Route path="student-accommodation-in-stranog-aberdeen" element={<AberdeenStranog/>}/>
<Route path="student-accommodation-in-wedderhill-aberdeen" element={<AberdeenWedderhill/>}/>
<Route path="student-accommodation-in-dyce-aberdeen" element={<AberdeenDyce/>}/>
<Route path="student-accommodation-in-stoneywood-aberdeen" element={<AberdeenStoneywood/>}/>
<Route path="student-accommodation-in-penparke-aberystwyth" element={<AberystwythPenparke/>}/>
<Route path="student-accommodation-in-waunfawr-aberystwyth" element={<AberystwythWaunfawr/>}/>
<Route path="student-accommodation-in-gelliangharad-aberystwyth" element={<AberystwythGelliangharad/>}/>
<Route path="student-accommodation-in-salem-aberystwyth" element={<AberystwythSalem/>}/>
<Route path="student-accommodation-in-caeffynnon-aberystwyth" element={<AberystwythCaeffynnon/>}/>
<Route path="student-accommodation-in-pen-llwyn-aberystwyth" element={<AberystwythPenLlwyn/>}/>
<Route path="student-accommodation-in-wallog-aberystwyth" element={<AberystwythWallog/>}/>
<Route path="student-accommodation-in-cwm-erfin-aberystwyth" element={<AberystwythCwmErfin/>}/>
<Route path="student-accommodation-in-pen-bont-rhydybeddau-aberystwyth" element={<AberystwythPenBontRhydybeddau/>}/>
<Route path="student-accommodation-in-dollwen-aberystwyth" element={<AberystwythDollwen/>}/>
<Route path="student-accommodation-in-old-goginan-aberystwyth" element={<AberystwythOldGoginan/>}/>
<Route path="student-accommodation-in-parc-y-llyn-aberystwyth" element={<AberystwythParcYLlyn/>}/>
<Route path="student-accommodation-in-rhyd-y-felin-aberystwyth" element={<AberystwythRhydYFelin/>}/>
<Route path="student-accommodation-in-broginin-aberystwyth" element={<AberystwythBroginin/>}/>
<Route path="student-accommodation-in-pen-rhiw-newydd-aberystwyth" element={<AberystwythPenRhiwNewydd/>}/>
<Route path="student-accommodation-in-troed-yr-hen-riw-aberystwyth" element={<AberystwythTroedYrHenRiw/>}/>
<Route path="student-accommodation-in-south-gate-aberystwyth" element={<AberystwythSouthGate/>}/>
<Route path="student-accommodation-in-gardd-denman-bangor" element={<BangorGarddDenman/>}/>
<Route path="student-accommodation-in-nant-porth-bangor" element={<BangorNantPorth/>}/>
<Route path="student-accommodation-in-caellepa-bangor" element={<BangorCaellepa/>}/>
<Route path="student-accommodation-in-ffriddoedd-bangor" element={<BangorFfriddoedd/>}/>
<Route path="student-accommodation-in-glan-adda-bangor" element={<BangorGlanAdda/>}/>
<Route path="student-accommodation-in-hirael-bangor" element={<BangorHirael/>}/>
<Route path="student-accommodation-in-maes-y-geirchen-bangor" element={<BangorMaesYGeirchen/>}/>
<Route path="student-accommodation-in-tyddyn-llwydyn-bangor" element={<BangorTyddynLlwydyn/>}/>
<Route path="student-accommodation-in-upper-garth-bangor" element={<BangorUpperGarth/>}/>
<Route path="student-accommodation-in-victoria-park-bangor" element={<BangorVictoriaPark/>}/>
<Route path="student-accommodation-in-upper-bangor-bangor" element={<BangorUpperBangor/>}/>
<Route path="student-accommodation-in-pendref-bangor" element={<BangorPendref/>}/>
<Route path="student-accommodation-in-port-penrhyn-bangor" element={<BangorPortPenrhyn/>}/>
<Route path="student-accommodation-in-penchwintan-bangor" element={<BangorPenchwintan/>}/>
<Route path="student-accommodation-in-penlon-bangor" element={<BangorPenlon/>}/>
<Route path="student-accommodation-in-penrhos-garnedd-bangor" element={<BangorPenrhosGarnedd/>}/>
<Route path="student-accommodation-in-siliwen-bangor" element={<BangorSiliwen/>}/>
<Route path="student-accommodation-in-tan-y-maes-bangor" element={<BangorTanYMaes/>}/>
<Route path="student-accommodation-in-waen-pentir-bangor" element={<BangorWaenPentir/>}/>
<Route path="student-accommodation-in-parc-vaynol-bangor" element={<BangorParcVaynol/>}/>
<Route path="student-accommodation-in-bryn-bangor" element={<BangorBryn/>}/>
<Route path="student-accommodation-in-parc-penrhyn-bangor" element={<BangorParcPenrhyn/>}/>
<Route path="student-accommodation-in-oldfield-park-bath" element={<BathOldfieldPark/>}/>
<Route path="student-accommodation-in-bath-spa-bath" element={<BathBathSpa/>}/>
<Route path="student-accommodation-in-sladebrook-bath" element={<BathSladebrook/>}/>
<Route path="student-accommodation-in-twerton-hill-bath" element={<BathTwertonHill/>}/>
<Route path="student-accommodation-in-the-oval-bath" element={<BathTheOval/>}/>
<Route path="student-accommodation-in-moorlands-bath" element={<BathMoorlands/>}/>
<Route path="student-accommodation-in-kingsway-bath" element={<BathKingsway/>}/>
<Route path="student-accommodation-in-bloomfield-bath" element={<BathBloomfield/>}/>
<Route path="student-accommodation-in-southdown-bath" element={<BathSouthdown/>}/>
<Route path="student-accommodation-in-south-twerton-bath" element={<BathSouthTwerton/>}/>
<Route path="student-accommodation-in-twerton-bath" element={<BathTwerton/>}/>
<Route path="student-accommodation-in-penn-hill-bath" element={<BathPennHill/>}/>
<Route path="student-accommodation-in-lower-weston-bath" element={<BathLowerWeston/>}/>
<Route path="student-accommodation-in-east-twerton-bath" element={<BathEastTwerton/>}/>
<Route path="student-accommodation-in-odd-down-bath" element={<BathOddDown/>}/>
<Route path="student-accommodation-in-newbridge-bath" element={<BathNewbridge/>}/>
<Route path="student-accommodation-in-widcombe-bath" element={<BathWidcombe/>}/>
<Route path="student-accommodation-in-bear-flat-bath" element={<BathBearFlat/>}/>
<Route path="student-accommodation-in-weston-bath" element={<BathWeston/>}/>
<Route path="student-accommodation-in-bailbrook-bath" element={<BathBailbrook/>}/>
<Route path="student-accommodation-in-yomede-park-bath" element={<BathYomedePark/>}/>
<Route path="student-accommodation-in-weston-park-bath" element={<BathWestonPark/>}/>
<Route path="student-accommodation-in-kensington-bath" element={<BathKensington/>}/>
<Route path="student-accommodation-in-larkhall-bath" element={<BathLarkhall/>}/>
<Route path="student-accommodation-in-snow-hill-bath" element={<BathSnowHill/>}/>
<Route path="student-accommodation-in-primrose-hill-bath" element={<BathPrimroseHill/>}/>
<Route path="student-accommodation-in-raglands-bath" element={<BathRaglands/>}/>
<Route path="student-accommodation-in-rosehill-bath" element={<BathRosehill/>}/>
<Route path="student-accommodation-in-rudmore-park-bath" element={<BathRudmorePark/>}/>
<Route path="student-accommodation-in-locksbrook-bath" element={<BathLocksbrook/>}/>
<Route path="student-accommodation-in-avon-park-bath" element={<BathAvonPark/>}/>
<Route path="student-accommodation-in-beacon-hill-bath" element={<BathBeaconHill/>}/>
<Route path="student-accommodation-in-twerton-on-avon-bath" element={<BathTwertonOnAvon/>}/>
<Route path="student-accommodation-in-hat-bath" element={<BathHat/>}/>
<Route path="student-accommodation-in-lyncombe-hill-bath" element={<BathLyncombeHill/>}/>
<Route path="student-accommodation-in-hatfield-buildings-bath" element={<BathHatfieldBuildings/>}/>
<Route path="student-accommodation-in-kingsmead-bath" element={<BathKingsmead/>}/>
<Route path="student-accommodation-in-upper-weston-bath" element={<BathUpperWeston/>}/>
<Route path="student-accommodation-in-beechen-cliff-bath" element={<BathBeechenCliff/>}/>
<Route path="student-accommodation-in-sion-hill-bath" element={<BathSionHill/>}/>
<Route path="student-accommodation-in-south-lyncombe-bath" element={<BathSouthLyncombe/>}/>
<Route path="student-accommodation-in-perrymead-bath" element={<BathPerrymead/>}/>
<Route path="student-accommodation-in-sydney-gardens-bath" element={<BathSydneyGardens/>}/>
<Route path="student-accommodation-in-villa-fields-bath" element={<BathVillaFields/>}/>
<Route path="student-accommodation-in-williamstowe-bath" element={<BathWilliamstowe/>}/>
<Route path="student-accommodation-in-crescent-gardens-bath" element={<BathCrescentGardens/>}/>
<Route path="student-accommodation-in-dolemeads-bath" element={<BathDolemeads/>}/>
<Route path="student-accommodation-in-lambridge-bath" element={<BathLambridge/>}/>
<Route path="student-accommodation-in-lower-swainswick-bath" element={<BathLowerSwainswick/>}/>
<Route path="student-accommodation-in-lyncombe-vale-bath" element={<BathLyncombeVale/>}/>
<Route path="student-accommodation-in-rush-hill-bath" element={<BathRushHill/>}/>
<Route path="student-accommodation-in-walcot-bath" element={<BathWalcot/>}/>
<Route path="student-accommodation-in-whiteway-bath" element={<BathWhiteway/>}/>
<Route path="student-accommodation-in-lansdown-bath" element={<BathLansdown/>}/>
<Route path="student-accommodation-in-fairfield-park-bath" element={<BathFairfieldPark/>}/>
<Route path="student-accommodation-in-bathwick-bath" element={<BathBathwick/>}/>
<Route path="student-accommodation-in-bradford-park-bath" element={<BathBradfordPark/>}/>
<Route path="student-accommodation-in-ralph-allen-park-bath" element={<BathRalphAllenPark/>}/>
<Route path="student-accommodation-in-combe-down-bath" element={<BathCombeDown/>}/>
<Route path="student-accommodation-in-tyning-bath" element={<BathTyning/>}/>
<Route path="student-accommodation-in-selly-oak-birmingham" element={<BirminghamSellyOak/>}/>
<Route path="student-accommodation-in-stirchley-street-birmingham" element={<BirminghamStirchleyStreet/>}/>
<Route path="student-accommodation-in-ten-acres-birmingham" element={<BirminghamTenAcres/>}/>
<Route path="student-accommodation-in-hazelwell-birmingham" element={<BirminghamHazelwell/>}/>
<Route path="student-accommodation-in-winson-green-outer-circle-tram-stop-birmingham" element={<BirminghamWinsonGreenOuterCircleTramStop/>}/>
<Route path="student-accommodation-in-bournville-birmingham" element={<BirminghamBournville/>}/>
<Route path="student-accommodation-in-bournbrook-birmingham" element={<BirminghamBournbrook/>}/>
<Route path="student-accommodation-in-edgbaston-birmingham" element={<BirminghamEdgbaston/>}/>
<Route path="student-accommodation-in-selly-park-birmingham" element={<BirminghamSellyPark/>}/>
<Route path="student-accommodation-in-harborne-birmingham" element={<BirminghamHarborne/>}/>
<Route path="student-accommodation-in-harts-green-birmingham" element={<BirminghamHartsGreen/>}/>
<Route path="student-accommodation-in-gravel-bank-birmingham" element={<BirminghamGravelBank/>}/>
<Route path="student-accommodation-in-ladywood-birmingham" element={<BirminghamLadywood/>}/>
<Route path="student-accommodation-in-stirchley-birmingham" element={<BirminghamStirchley/>}/>
<Route path="student-accommodation-in-jewellery-quarter-birmingham" element={<BirminghamJewelleryQuarter/>}/>
<Route path="student-accommodation-in-rotton-park-birmingham" element={<BirminghamRottonPark/>}/>
<Route path="student-accommodation-in-st-cuthberts-birmingham" element={<BirminghamStCuthberts/>}/>
<Route path="student-accommodation-in-summerfield-birmingham" element={<BirminghamSummerfield/>}/>
<Route path="student-accommodation-in-summerfield-park-birmingham" element={<BirminghamSummerfieldPark/>}/>
<Route path="student-accommodation-in-hockley-birmingham" element={<BirminghamHockley/>}/>
<Route path="student-accommodation-in-nechells-green-birmingham" element={<BirminghamNechellsGreen/>}/>
<Route path="student-accommodation-in-balsall-heath-birmingham" element={<BirminghamBalsallHeath/>}/>
<Route path="student-accommodation-in-bournville-station-birmingham" element={<BirminghamBournvilleStation/>}/>
<Route path="student-accommodation-in-the-vale-birmingham" element={<BirminghamTheVale/>}/>
<Route path="student-accommodation-in-pakenham-village-birmingham" element={<BirminghamPakenhamVillage/>}/>
<Route path="student-accommodation-in-bordesley-green-birmingham" element={<BirminghamBordesleyGreen/>}/>
<Route path="student-accommodation-in-five-ways-birmingham" element={<BirminghamFiveWays/>}/>
<Route path="student-accommodation-in-calthorpe-fields-birmingham" element={<BirminghamCalthorpeFields/>}/>
<Route path="student-accommodation-in-calthorpe-estates-birmingham" element={<BirminghamCalthorpeEstates/>}/>
<Route path="student-accommodation-in-beech-lanes-birmingham" element={<BirminghamBeechLanes/>}/>
<Route path="student-accommodation-in-nechells-birmingham" element={<BirminghamNechells/>}/>
<Route path="student-accommodation-in-brindley-birmingham" element={<BirminghamBrindley/>}/>
<Route path="student-accommodation-in-the-wharf-birmingham" element={<BirminghamTheWharf/>}/>
<Route path="student-accommodation-in-bordesley-birmingham" element={<BirminghamBordesley/>}/>
<Route path="student-accommodation-in-duddeston-birmingham" element={<BirminghamDuddeston/>}/>
<Route path="student-accommodation-in-ashted-birmingham" element={<BirminghamAshted/>}/>
<Route path="student-accommodation-in-netchells-green-birmingham" element={<BirminghamNetchellsGreen/>}/>
<Route path="student-accommodation-in-kings-norton-birmingham" element={<BirminghamKingsNorton/>}/>
<Route path="student-accommodation-in-alvechurch-station-birmingham" element={<BirminghamAlvechurchStation/>}/>
<Route path="student-accommodation-in-cannon-hill-birmingham" element={<BirminghamCannonHill/>}/>
<Route path="student-accommodation-in-cotteridge-birmingham" element={<BirminghamCotteridge/>}/>
<Route path="student-accommodation-in-brownhills-green-birmingham" element={<BirminghamBrownhillsGreen/>}/>
<Route path="student-accommodation-in-weoley-castle-birmingham" element={<BirminghamWeoleyCastle/>}/>
<Route path="student-accommodation-in-highgate-birmingham" element={<BirminghamHighgate/>}/>
<Route path="student-accommodation-in-brownshill-green-birmingham" element={<BirminghamBrownshillGreen/>}/>
<Route path="student-accommodation-in-digbeth-birmingham" element={<BirminghamDigbeth/>}/>
<Route path="student-accommodation-in-chinatown-birmingham" element={<BirminghamChinatown/>}/>
<Route path="student-accommodation-in-chad-valley-birmingham" element={<BirminghamChadValley/>}/>
<Route path="student-accommodation-in-quinton-birmingham" element={<BirminghamQuinton/>}/>
<Route path="student-accommodation-in-northfield-birmingham" element={<BirminghamNorthfield/>}/>
<Route path="student-accommodation-in-alum-rock-birmingham" element={<BirminghamAlumRock/>}/>
<Route path="student-accommodation-in-handsworth-birmingham" element={<BirminghamHandsworth/>}/>
<Route path="student-accommodation-in-moseley-birmingham" element={<BirminghamMoseley/>}/>
<Route path="student-accommodation-in-great-barr-birmingham" element={<BirminghamGreatBarr/>}/>
<Route path="student-accommodation-in-hall-green-birmingham" element={<BirminghamHallGreen/>}/>
<Route path="student-accommodation-in-perry-barr-birmingham" element={<BirminghamPerryBarr/>}/>
<Route path="student-accommodation-in-small-heath-birmingham" element={<BirminghamSmallHeath/>}/>
<Route path="student-accommodation-in-sparkhill-birmingham" element={<BirminghamSparkhill/>}/>
<Route path="student-accommodation-in-stechford-birmingham" element={<BirminghamStechford/>}/>
<Route path="student-accommodation-in-saltley-birmingham" element={<BirminghamSaltley/>}/>
<Route path="student-accommodation-in-aston-birmingham" element={<BirminghamAston/>}/>
<Route path="student-accommodation-in-winson-green-birmingham" element={<BirminghamWinsonGreen/>}/>
<Route path="student-accommodation-in-moor-green-birmingham" element={<BirminghamMoorGreen/>}/>
<Route path="student-accommodation-in-turves-green-birmingham" element={<BirminghamTurvesGreen/>}/>
<Route path="student-accommodation-in-deritend-birmingham" element={<BirminghamDeritend/>}/>
<Route path="student-accommodation-in-spring-vale-birmingham" element={<BirminghamSpringVale/>}/>
<Route path="student-accommodation-in-church-hill-birmingham" element={<BirminghamChurchHill/>}/>
<Route path="student-accommodation-in-colehall-birmingham" element={<BirminghamColehall/>}/>
<Route path="student-accommodation-in-hawkesley-birmingham" element={<BirminghamHawkesley/>}/>
<Route path="student-accommodation-in-lee-bank-birmingham" element={<BirminghamLeeBank/>}/>
<Route path="student-accommodation-in-upper-witton-birmingham" element={<BirminghamUpperWitton/>}/>
<Route path="student-accommodation-in-wake-green-birmingham" element={<BirminghamWakeGreen/>}/>
<Route path="student-accommodation-in-bearwood-birmingham" element={<BirminghamBearwood/>}/>
<Route path="student-accommodation-in-northfield-station-birmingham" element={<BirminghamNorthfieldStation/>}/>
<Route path="student-accommodation-in-dixon-green-bolton" element={<BoltonDixonGreen/>}/>
<Route path="student-accommodation-in-farnworth-bolton" element={<BoltonFarnworth/>}/>
<Route path="student-accommodation-in-new-bury-bolton" element={<BoltonNewBury/>}/>
<Route path="student-accommodation-in-rosehill-bolton" element={<BoltonRosehill/>}/>
<Route path="student-accommodation-in-springfield-bolton" element={<BoltonSpringfield/>}/>
<Route path="student-accommodation-in-astley-bridge-bolton" element={<BoltonAstleyBridge/>}/>
<Route path="student-accommodation-in-harper-green-bolton" element={<BoltonHarperGreen/>}/>
<Route path="student-accommodation-in-moses-gate-bolton" element={<BoltonMosesGate/>}/>
<Route path="student-accommodation-in-oaken-bottom-bolton" element={<BoltonOakenBottom/>}/>
<Route path="student-accommodation-in-tonge-moor-bolton" element={<BoltonTongeMoor/>}/>
<Route path="student-accommodation-in-great-lever-bolton" element={<BoltonGreatLever/>}/>
<Route path="student-accommodation-in-hall-ith-wood-bolton" element={<BoltonHallIthWood/>}/>
<Route path="student-accommodation-in-the-haulgh-bolton" element={<BoltonTheHaulgh/>}/>
<Route path="student-accommodation-in-tonge-fold-bolton" element={<BoltonTongeFold/>}/>
<Route path="student-accommodation-in-top-o-th-brow-bolton" element={<BoltonTopOThBrow/>}/>
<Route path="student-accommodation-in-burnden-bolton" element={<BoltonBurnden/>}/>
<Route path="student-accommodation-in-princeville-bradford" element={<BradfordPrinceville/>}/>
<Route path="student-accommodation-in-dirk-hill-bradford" element={<BradfordDirkHill/>}/>
<Route path="student-accommodation-in-chapel-green-bradford" element={<BradfordChapelGreen/>}/>
<Route path="student-accommodation-in-holme-top-bradford" element={<BradfordHolmeTop/>}/>
<Route path="student-accommodation-in-eastbrook-bradford" element={<BradfordEastbrook/>}/>
<Route path="student-accommodation-in-broomfields-bradford" element={<BradfordBroomfields/>}/>
<Route path="student-accommodation-in-wapping-bradford" element={<BradfordWapping/>}/>
<Route path="student-accommodation-in-lidget-green-bradford" element={<BradfordLidgetGreen/>}/>
<Route path="student-accommodation-in-clayton-bradford" element={<BradfordClayton/>}/>
<Route path="student-accommodation-in-fairweather-green-bradford" element={<BradfordFairweatherGreen/>}/>
<Route path="student-accommodation-in-heaton-grove-bradford" element={<BradfordHeatonGrove/>}/>
<Route path="student-accommodation-in-horton-bank-bottom-bradford" element={<BradfordHortonBankBottom/>}/>
<Route path="student-accommodation-in-paradise-green-bradford" element={<BradfordParadiseGreen/>}/>
<Route path="student-accommodation-in-barkerend-bradford" element={<BradfordBarkerend/>}/>
<Route path="student-accommodation-in-birks-bradford" element={<BradfordBirks/>}/>
<Route path="student-accommodation-in-crossley-hall-bradford" element={<BradfordCrossleyHall/>}/>
<Route path="student-accommodation-in-hill-side-villas-bradford" element={<BradfordHillSideVillas/>}/>
<Route path="student-accommodation-in-new-leeds-bradford" element={<BradfordNewLeeds/>}/>
<Route path="student-accommodation-in-scholemoor-bradford" element={<BradfordScholemoor/>}/>
<Route path="student-accommodation-in-upper-green-bradford" element={<BradfordUpperGreen/>}/>
<Route path="student-accommodation-in-bradford-forster-square-station-bradford" element={<BradfordBradfordForsterSquareStation/>}/>
<Route path="student-accommodation-in-bedminster-station-bristol" element={<BristolBedminsterStation/>}/>
<Route path="student-accommodation-in-bristol-city-centre-bristol" element={<BristolBristolCityCentre/>}/>
<Route path="student-accommodation-in-clifton-bristol" element={<BristolClifton/>}/>
<Route path="student-accommodation-in-filton-bristol" element={<BristolFilton/>}/>
<Route path="student-accommodation-in-horfield-bristol" element={<BristolHorfield/>}/>
<Route path="student-accommodation-in-st-pauls-bristol" element={<BristolStPauls/>}/>
<Route path="student-accommodation-in-st-michaels-bristol" element={<BristolStMichaels/>}/>
<Route path="student-accommodation-in-moorfields-bristol" element={<BristolMoorfields/>}/>
<Route path="student-accommodation-in-pile-marsh-bristol" element={<BristolPileMarsh/>}/>
<Route path="student-accommodation-in-brandon-hill-bristol" element={<BristolBrandonHill/>}/>
<Route path="student-accommodation-in-fishponds-bristol" element={<BristolFishponds/>}/>
<Route path="student-accommodation-in-redland-bristol" element={<BristolRedland/>}/>
<Route path="student-accommodation-in-bishopston-bristol" element={<BristolBishopston/>}/>
<Route path="student-accommodation-in-cotham-bristol" element={<BristolCotham/>}/>
<Route path="student-accommodation-in-tyndalls-park-bristol" element={<BristolTyndallsPark/>}/>
<Route path="student-accommodation-in-kingsdown-bristol" element={<BristolKingsdown/>}/>
<Route path="student-accommodation-in-woolcott-park-bristol" element={<BristolWoolcottPark/>}/>
<Route path="student-accommodation-in-stokes-croft-bristol" element={<BristolStokesCroft/>}/>
<Route path="student-accommodation-in-clay-bottom-bristol" element={<BristolClayBottom/>}/>
<Route path="student-accommodation-in-rose-green-bristol" element={<BristolRoseGreen/>}/>
<Route path="student-accommodation-in-crofts-end-bristol" element={<BristolCroftsEnd/>}/>
<Route path="student-accommodation-in-hudds-barton-bristol" element={<BristolHuddsBarton/>}/>
<Route path="student-accommodation-in-stoke-park-bristol" element={<BristolStokePark/>}/>
<Route path="student-accommodation-in-tankards-close-bristol" element={<BristolTankardsClose/>}/>
<Route path="student-accommodation-in-temple-bristol" element={<BristolTemple/>}/>
<Route path="student-accommodation-in-ashley-down-bristol" element={<BristolAshleyDown/>}/>
<Route path="student-accommodation-in-canons-marsh-bristol" element={<BristolCanonsMarsh/>}/>
<Route path="student-accommodation-in-cathay-bristol" element={<BristolCathay/>}/>
<Route path="student-accommodation-in-stoke-gifford-bristol" element={<BristolStokeGifford/>}/>
<Route path="student-accommodation-in-avonmouth-station-bristol" element={<BristolAvonmouthStation/>}/>
<Route path="student-accommodation-in-northville-bristol" element={<BristolNorthville/>}/>
<Route path="student-accommodation-in-westbury-on-trym-bristol" element={<BristolWestburyOnTrym/>}/>
<Route path="student-accommodation-in-stapleton-bristol" element={<BristolStapleton/>}/>
<Route path="student-accommodation-in-golden-hill-bristol" element={<BristolGoldenHill/>}/>
<Route path="student-accommodation-in-cheswick-village-bristol" element={<BristolCheswickVillage/>}/>
<Route path="student-accommodation-in-southmead-bristol" element={<BristolSouthmead/>}/>
<Route path="student-accommodation-in-the-galleries-bristol" element={<BristolTheGalleries/>}/>
<Route path="student-accommodation-in-st-andrews-bristol" element={<BristolStAndrews/>}/>
<Route path="student-accommodation-in-hotwells-bristol" element={<BristolHotwells/>}/>
<Route path="student-accommodation-in-lockleaze-bristol" element={<BristolLockleaze/>}/>
<Route path="student-accommodation-in-bedminster-bristol" element={<BristolBedminster/>}/>
<Route path="student-accommodation-in-st-augustines-bristol" element={<BristolStAugustines/>}/>
<Route path="student-accommodation-in-clifton-wood-bristol" element={<BristolCliftonWood/>}/>
<Route path="student-accommodation-in-eastville-bristol" element={<BristolEastville/>}/>
<Route path="student-accommodation-in-oldbury-court-estate-bristol" element={<BristolOldburyCourtEstate/>}/>
<Route path="student-accommodation-in-hillfields-bristol" element={<BristolHillfields/>}/>
<Route path="student-accommodation-in-oldbury-court-bristol" element={<BristolOldburyCourt/>}/>
<Route path="student-accommodation-in-st-george-bristol" element={<BristolStGeorge/>}/>
<Route path="student-accommodation-in-russell-town-bristol" element={<BristolRussellTown/>}/>
<Route path="student-accommodation-in-the-dings-bristol" element={<BristolTheDings/>}/>
<Route path="student-accommodation-in-westbury-park-bristol" element={<BristolWestburyPark/>}/>
<Route path="student-accommodation-in-summer-hill-bristol" element={<BristolSummerHill/>}/>
<Route path="student-accommodation-in-netham-bristol" element={<BristolNetham/>}/>
<Route path="student-accommodation-in-kingswood-bristol" element={<BristolKingswood/>}/>
<Route path="student-accommodation-in-montpelier-bristol" element={<BristolMontpelier/>}/>
<Route path="student-accommodation-in-st-philips-bristol" element={<BristolStPhilips/>}/>
<Route path="student-accommodation-in-southville-bristol" element={<BristolSouthville/>}/>
<Route path="student-accommodation-in-burchells-green-bristol" element={<BristolBurchellsGreen/>}/>
<Route path="student-accommodation-in-brislington-bristol" element={<BristolBrislington/>}/>
<Route path="student-accommodation-in-lower-easton-bristol" element={<BristolLowerEaston/>}/>
<Route path="student-accommodation-in-mayfield-park-bristol" element={<BristolMayfieldPark/>}/>
<Route path="student-accommodation-in-potters-wood-bristol" element={<BristolPottersWood/>}/>
<Route path="student-accommodation-in-easton-bristol" element={<BristolEaston/>}/>
<Route path="student-accommodation-in-rockleaze-bristol" element={<BristolRockleaze/>}/>
<Route path="student-accommodation-in-watleys-end-bristol" element={<BristolWatleysEnd/>}/>
<Route path="student-accommodation-in-two-mile-hill-bristol" element={<BristolTwoMileHill/>}/>
<Route path="student-accommodation-in-cockshott-hill-bristol" element={<BristolCockshottHill/>}/>
<Route path="student-accommodation-in-hopewell-hill-bristol" element={<BristolHopewellHill/>}/>
<Route path="student-accommodation-in-lower-soundwell-bristol" element={<BristolLowerSoundwell/>}/>
<Route path="student-accommodation-in-chester-park-bristol" element={<BristolChesterPark/>}/>
<Route path="student-accommodation-in-air-balloon-hill-bristol" element={<BristolAirBalloonHill/>}/>
<Route path="student-accommodation-in-bell-hill-bristol" element={<BristolBellHill/>}/>
<Route path="student-accommodation-in-chessels-bristol" element={<BristolChessels/>}/>
<Route path="student-accommodation-in-merrywood-bristol" element={<BristolMerrywood/>}/>
<Route path="student-accommodation-in-brentry-bristol" element={<BristolBrentry/>}/>
<Route path="student-accommodation-in-staple-hill-bristol" element={<BristolStapleHill/>}/>
<Route path="student-accommodation-in-redcliffe-bristol" element={<BristolRedcliffe/>}/>
<Route path="student-accommodation-in-kensington-hill-bristol" element={<BristolKensingtonHill/>}/>
<Route path="student-accommodation-in-conham-bristol" element={<BristolConham/>}/>
<Route path="student-accommodation-in-jeffries-hill-bristol" element={<BristolJeffriesHill/>}/>
<Route path="student-accommodation-in-kensington-park-bristol" element={<BristolKensingtonPark/>}/>
<Route path="student-accommodation-in-hanham-green-bristol" element={<BristolHanhamGreen/>}/>
<Route path="student-accommodation-in-emersons-green-bristol" element={<BristolEmersonsGreen/>}/>
<Route path="student-accommodation-in-downend-bristol" element={<BristolDownend/>}/>
<Route path="student-accommodation-in-upper-eastville-bristol" element={<BristolUpperEastville/>}/>
<Route path="student-accommodation-in-warmley-hill-bristol" element={<BristolWarmleyHill/>}/>
<Route path="student-accommodation-in-whites-hill-bristol" element={<BristolWhitesHill/>}/>
<Route path="student-accommodation-in-windmill-hill-bristol" element={<BristolWindmillHill/>}/>
<Route path="student-accommodation-in-woodstock-bristol" element={<BristolWoodstock/>}/>
<Route path="student-accommodation-in-stone-hill-bristol" element={<BristolStoneHill/>}/>
<Route path="student-accommodation-in-the-batch-bristol" element={<BristolTheBatch/>}/>
<Route path="student-accommodation-in-sandy-park-bristol" element={<BristolSandyPark/>}/>
<Route path="student-accommodation-in-cadbury-heath-bristol" element={<BristolCadburyHeath/>}/>
<Route path="student-accommodation-in-park-wall-bristol" element={<BristolParkWall/>}/>
<Route path="student-accommodation-in-north-common-bristol" element={<BristolNorthCommon/>}/>
<Route path="student-accommodation-in-lantern-bottom-bristol" element={<BristolLanternBottom/>}/>
<Route path="student-accommodation-in-cockroad-bottom-bristol" element={<BristolCockroadBottom/>}/>
<Route path="student-accommodation-in-mount-hill-bristol" element={<BristolMountHill/>}/>
<Route path="student-accommodation-in-warmley-tower-bristol" element={<BristolWarmleyTower/>}/>
<Route path="student-accommodation-in-oldland-bristol" element={<BristolOldland/>}/>
<Route path="student-accommodation-in-henleaze-bristol" element={<BristolHenleaze/>}/>
<Route path="student-accommodation-in-hanham-bristol" element={<BristolHanham/>}/>
<Route path="student-accommodation-in-pucklechurch-bristol" element={<BristolPucklechurch/>}/>
<Route path="student-accommodation-in-soundwell-bristol" element={<BristolSoundwell/>}/>
<Route path="student-accommodation-in-redfield-bristol" element={<BristolRedfield/>}/>
<Route path="student-accommodation-in-broom-hill-bristol" element={<BristolBroomHill/>}/>
<Route path="student-accommodation-in-totterdown-bristol" element={<BristolTotterdown/>}/>
<Route path="student-accommodation-in-lyde-green-bristol" element={<BristolLydeGreen/>}/>
<Route path="student-accommodation-in-lee-woods-bristol" element={<BristolLeeWoods/>}/>
<Route path="student-accommodation-in-bristol-temple-meads-station-bristol" element={<BristolBristolTempleMeadsStation/>}/>
<Route path="student-accommodation-in-temple-quay-bristol" element={<BristolTempleQuay/>}/>
<Route path="student-accommodation-in-chewton-keynsham-bristol" element={<BristolChewtonKeynsham/>}/>
<Route path="student-accommodation-in-wellsway-bristol" element={<BristolWellsway/>}/>
<Route path="student-accommodation-in-the-park-bristol" element={<BristolThePark/>}/>
<Route path="student-accommodation-in-barton-hill-bristol" element={<BristolBartonHill/>}/>
<Route path="student-accommodation-in-arnos-vale-bristol" element={<BristolArnosVale/>}/>
<Route path="student-accommodation-in-knowle-bristol" element={<BristolKnowle/>}/>
<Route path="student-accommodation-in-patchway-bristol" element={<BristolPatchway/>}/>
<Route path="student-accommodation-in-keynsham-bristol" element={<BristolKeynsham/>}/>
<Route path="student-accommodation-in-greenbank-bristol" element={<BristolGreenbank/>}/>
<Route path="student-accommodation-in-hambrook-bristol" element={<BristolHambrook/>}/>
<Route path="student-accommodation-in-henbury-bristol" element={<BristolHenbury/>}/>
<Route path="student-accommodation-in-leigh-woods-bristol" element={<BristolLeighWoods/>}/>
<Route path="student-accommodation-in-mangotsfield-bristol" element={<BristolMangotsfield/>}/>
<Route path="student-accommodation-in-shirehampton-bristol" element={<BristolShirehampton/>}/>
<Route path="student-accommodation-in-speedwell-bristol" element={<BristolSpeedwell/>}/>
<Route path="student-accommodation-in-st-agnes-bristol" element={<BristolStAgnes/>}/>
<Route path="student-accommodation-in-st-werburghs-bristol" element={<BristolStWerburghs/>}/>
<Route path="student-accommodation-in-stoke-bishop-bristol" element={<BristolStokeBishop/>}/>
<Route path="student-accommodation-in-whitehall-bristol" element={<BristolWhitehall/>}/>
<Route path="student-accommodation-in-yate-bristol" element={<BristolYate/>}/>
<Route path="student-accommodation-in-barrs-court-bristol" element={<BristolBarrsCourt/>}/>
<Route path="student-accommodation-in-bradley-stoke-bristol" element={<BristolBradleyStoke/>}/>
<Route path="student-accommodation-in-blackhorse-bristol" element={<BristolBlackhorse/>}/>
<Route path="student-accommodation-in-catbrain-bristol" element={<BristolCatbrain/>}/>
<Route path="student-accommodation-in-hengrove-park-bristol" element={<BristolHengrovePark/>}/>
<Route path="student-accommodation-in-vinney-green-bristol" element={<BristolVinneyGreen/>}/>
<Route path="student-accommodation-in-blaise-bristol" element={<BristolBlaise/>}/>
<Route path="student-accommodation-in-blaise-hamlet-bristol" element={<BristolBlaiseHamlet/>}/>
<Route path="student-accommodation-in-cribbs-causeway-bristol" element={<BristolCribbsCauseway/>}/>
<Route path="student-accommodation-in-filwood-bristol" element={<BristolFilwood/>}/>
<Route path="student-accommodation-in-filwood-park-bristol" element={<BristolFilwoodPark/>}/>
<Route path="student-accommodation-in-hursley-hill-bristol" element={<BristolHursleyHill/>}/>
<Route path="student-accommodation-in-lower-knowle-bristol" element={<BristolLowerKnowle/>}/>
<Route path="student-accommodation-in-pen-pole-bristol" element={<BristolPenPole/>}/>
<Route path="student-accommodation-in-stockwell-hill-bristol" element={<BristolStockwellHill/>}/>
<Route path="student-accommodation-in-vinny-green-bristol" element={<BristolVinnyGreen/>}/>
<Route path="student-accommodation-in-northavon-bristol" element={<BristolNorthavon/>}/>
<Route path="student-accommodation-in-kings-weston-bristol" element={<BristolKingsWeston/>}/>
<Route path="student-accommodation-in-siston-hill-bristol" element={<BristolSistonHill/>}/>
<Route path="student-accommodation-in-wapping-wharf-bristol" element={<BristolWappingWharf/>}/>
<Route path="student-accommodation-in-mount-pleasant-buckingham" element={<BuckinghamMountPleasant/>}/>
<Route path="student-accommodation-in-bone-hill-buckingham" element={<BuckinghamBoneHill/>}/>
<Route path="student-accommodation-in-bourtonville-buckingham" element={<BuckinghamBourtonville/>}/>
<Route path="student-accommodation-in-prebend-end-buckingham" element={<BuckinghamPrebendEnd/>}/>
<Route path="student-accommodation-in-romsey-town-cambridge" element={<CambridgeRomseyTown/>}/>
<Route path="student-accommodation-in-brookfields-cambridge" element={<CambridgeBrookfields/>}/>
<Route path="student-accommodation-in-coldhams-common-cambridge" element={<CambridgeColdhamsCommon/>}/>
<Route path="student-accommodation-in-ditton-fields-cambridge" element={<CambridgeDittonFields/>}/>
<Route path="student-accommodation-in-fen-ditton-cambridge" element={<CambridgeFenDitton/>}/>
<Route path="student-accommodation-in-midsummer-common-cambridge" element={<CambridgeMidsummerCommon/>}/>
<Route path="student-accommodation-in-broad-end-cambridge" element={<CambridgeBroadEnd/>}/>
<Route path="student-accommodation-in-delver-end-cambridge" element={<CambridgeDelverEnd/>}/>
<Route path="student-accommodation-in-lowbridge-hole-cambridge" element={<CambridgeLowbridgeHole/>}/>
<Route path="student-accommodation-in-fallow-field-cambridge" element={<CambridgeFallowField/>}/>
<Route path="student-accommodation-in-jesus-green-cambridge" element={<CambridgeJesusGreen/>}/>
<Route path="student-accommodation-in-new-chesterton-cambridge" element={<CambridgeNewChesterton/>}/>
<Route path="student-accommodation-in-brockley-end-cambridge" element={<CambridgeBrockleyEnd/>}/>
<Route path="student-accommodation-in-childerley-cambridge" element={<CambridgeChilderley/>}/>
<Route path="student-accommodation-in-commercial-end-cambridge" element={<CambridgeCommercialEnd/>}/>
<Route path="student-accommodation-in-eddington-cambridge" element={<CambridgeEddington/>}/>
<Route path="student-accommodation-in-burwell-cambridge" element={<CambridgeBurwell/>}/>
<Route path="student-accommodation-in-chesterton-fen-road-estate-cambridge" element={<CambridgeChestertonFenRoadEstate/>}/>
<Route path="student-accommodation-in-st-thomass-hill-canterbury" element={<CanterburyStThomassHill/>}/>
<Route path="student-accommodation-in-thanington-without-canterbury" element={<CanterburyThaningtonWithout/>}/>
<Route path="student-accommodation-in-parkwood-canterbury" element={<CanterburyParkwood/>}/>
<Route path="student-accommodation-in-hales-place-canterbury" element={<CanterburyHalesPlace/>}/>
<Route path="student-accommodation-in-honey-hill-canterbury" element={<CanterburyHoneyHill/>}/>
<Route path="student-accommodation-in-hall-place-canterbury" element={<CanterburyHallPlace/>}/>
<Route path="student-accommodation-in-dane-john-canterbury" element={<CanterburyDaneJohn/>}/>
<Route path="student-accommodation-in-st-martins-canterbury" element={<CanterburyStMartins/>}/>
<Route path="student-accommodation-in-vauxhall-estate-canterbury" element={<CanterburyVauxhallEstate/>}/>
<Route path="student-accommodation-in-vauxhall-road-estate-canterbury" element={<CanterburyVauxhallRoadEstate/>}/>
<Route path="student-accommodation-in-whitefriars-canterbury" element={<CanterburyWhitefriars/>}/>
<Route path="student-accommodation-in-oldpark-canterbury" element={<CanterburyOldpark/>}/>
<Route path="student-accommodation-in-spring-lane-canterbury" element={<CanterburySpringLane/>}/>
<Route path="student-accommodation-in-martyrs-field-canterbury" element={<CanterburyMartyrsField/>}/>
<Route path="student-accommodation-in-barton-estate-canterbury" element={<CanterburyBartonEstate/>}/>
<Route path="student-accommodation-in-barton-road-estate-canterbury" element={<CanterburyBartonRoadEstate/>}/>
<Route path="student-accommodation-in-south-canterbury-canterbury" element={<CanterburySouthCanterbury/>}/>
<Route path="student-accommodation-in-thanington-canterbury" element={<CanterburyThanington/>}/>
<Route path="student-accommodation-in-nunnery-fields-canterbury" element={<CanterburyNunneryFields/>}/>
<Route path="student-accommodation-in-st-dunstans-canterbury" element={<CanterburyStDunstans/>}/>
<Route path="student-accommodation-in-london-road-estate-canterbury" element={<CanterburyLondonRoadEstate/>}/>
<Route path="student-accommodation-in-black-princes-chantry-canterbury" element={<CanterburyBlackPrincesChantry/>}/>
<Route path="student-accommodation-in-wincheap-canterbury" element={<CanterburyWincheap/>}/>
<Route path="student-accommodation-in-rough-common-canterbury" element={<CanterburyRoughCommon/>}/>
<Route path="student-accommodation-in-tyler-hill-canterbury" element={<CanterburyTylerHill/>}/>
<Route path="student-accommodation-in-harbledown-canterbury" element={<CanterburyHarbledown/>}/>
<Route path="student-accommodation-in-petty-france-canterbury" element={<CanterburyPettyFrance/>}/>
<Route path="student-accommodation-in-bekesbourne-station-canterbury" element={<CanterburyBekesbourneStation/>}/>
<Route path="student-accommodation-in-cardiff-city--cardiff" element={<CardiffCardiffCity/>}/>
<Route path="student-accommodation-in-plasnewydd-cardiff" element={<CardiffPlasnewydd/>}/>
<Route path="student-accommodation-in-roath-park-cardiff" element={<CardiffRoathPark/>}/>
<Route path="student-accommodation-in-cathays-cardiff" element={<CardiffCathays/>}/>
<Route path="student-accommodation-in-cardiff-city-centre-cardiff" element={<CardiffCardiffCityCentre/>}/>
<Route path="student-accommodation-in-roath-cardiff" element={<CardiffRoath/>}/>
<Route path="student-accommodation-in-adamsdown-cardiff" element={<CardiffAdamsdown/>}/>
<Route path="student-accommodation-in-y-rhath-cardiff" element={<CardiffYRhath/>}/>
<Route path="student-accommodation-in-cardiff-do-cardiff" element={<CardiffCardiffDo/>}/>
<Route path="student-accommodation-in-rhydypennau-cardiff" element={<CardiffRhydypennau/>}/>
<Route path="student-accommodation-in-the-wharf-cardiff" element={<CardiffTheWharf/>}/>
<Route path="student-accommodation-in-y-lanfa-cardiff" element={<CardiffYLanfa/>}/>
<Route path="student-accommodation-in-ocean-park-cardiff" element={<CardiffOceanPark/>}/>
<Route path="student-accommodation-in-queen-alexander-dock-cardiff" element={<CardiffQueenAlexanderDock/>}/>
<Route path="student-accommodation-in-bute-docks-cardiff" element={<CardiffButeDocks/>}/>
<Route path="student-accommodation-in-butetown-cardiff" element={<CardiffButetown/>}/>
<Route path="student-accommodation-in-capital-waterside-cardiff" element={<CardiffCapitalWaterside/>}/>
<Route path="student-accommodation-in-cardiff-workshops-cardiff" element={<CardiffCardiffWorkshops/>}/>
<Route path="student-accommodation-in-glanfa-iwerydd-cardiff" element={<CardiffGlanfaIwerydd/>}/>
<Route path="student-accommodation-in-glannaur-brifddinas-cardiff" element={<CardiffGlannaurBrifddinas/>}/>
<Route path="student-accommodation-in-loudoun-square-cardiff" element={<CardiffLoudounSquare/>}/>
<Route path="student-accommodation-in-atlantic-wharf-cardiff" element={<CardiffAtlanticWharf/>}/>
<Route path="student-accommodation-in-queens-arcade-cardiff" element={<CardiffQueensArcade/>}/>
<Route path="student-accommodation-in-capitol-exchange-cardiff" element={<CardiffCapitolExchange/>}/>
<Route path="student-accommodation-in-st-davids-centre-cardiff" element={<CardiffStDavidsCentre/>}/>
<Route path="student-accommodation-in-queens-west-cardiff" element={<CardiffQueensWest/>}/>
<Route path="student-accommodation-in-maendy-cardiff" element={<CardiffMaendy/>}/>
<Route path="student-accommodation-in-heath-cardiff" element={<CardiffHeath/>}/>
<Route path="student-accommodation-in-maindy-cardiff" element={<CardiffMaindy/>}/>
<Route path="student-accommodation-in-glenwood-cardiff" element={<CardiffGlenwood/>}/>
<Route path="student-accommodation-in-cathays-park-cardiff" element={<CardiffCathaysPark/>}/>
<Route path="student-accommodation-in-hill-rise-cardiff" element={<CardiffHillRise/>}/>
<Route path="student-accommodation-in-springwood-cardiff" element={<CardiffSpringwood/>}/>
<Route path="student-accommodation-in-splott-cardiff" element={<CardiffSplott/>}/>
<Route path="student-accommodation-in-gabalfa-cardiff" element={<CardiffGabalfa/>}/>
<Route path="student-accommodation-in-riverside-cardiff" element={<CardiffRiverside/>}/>
<Route path="student-accommodation-in-treganna-cardiff" element={<CardiffTreganna/>}/>
<Route path="student-accommodation-in-penhill-cardiff" element={<CardiffPenhill/>}/>
<Route path="student-accommodation-in-wholesale-fruit-centre-cardiff" element={<CardiffWholesaleFruitCentre/>}/>
<Route path="student-accommodation-in-y-sblot-cardiff" element={<CardiffYSblot/>}/>
<Route path="student-accommodation-in-cantwn-cardiff" element={<CardiffCantwn/>}/>
<Route path="student-accommodation-in-penylan-cardiff" element={<CardiffPenylan/>}/>
<Route path="student-accommodation-in-city-gardens-cardiff" element={<CardiffCityGardens/>}/>
<Route path="student-accommodation-in-gripoly-mills-cardiff" element={<CardiffGripolyMills/>}/>
<Route path="student-accommodation-in-lakeside-cardiff" element={<CardiffLakeside/>}/>
<Route path="student-accommodation-in-sovereign-chase-cardiff" element={<CardiffSovereignChase/>}/>
<Route path="student-accommodation-in-cyncoed-cardiff" element={<CardiffCyncoed/>}/>
<Route path="student-accommodation-in-roath-lake-cardiff" element={<CardiffRoathLake/>}/>
<Route path="student-accommodation-in-windsor-quay-cardiff" element={<CardiffWindsorQuay/>}/>
<Route path="student-accommodation-in-carlton-gardens-cardiff" element={<CardiffCarltonGardens/>}/>
<Route path="student-accommodation-in-grangetown-cardiff" element={<CardiffGrangetown/>}/>
<Route path="student-accommodation-in-bishopswood-cardiff" element={<CardiffBishopswood/>}/>
<Route path="student-accommodation-in-cennen-mead-cardiff" element={<CardiffCennenMead/>}/>
<Route path="student-accommodation-in-chatfield-park-cardiff" element={<CardiffChatfieldPark/>}/>
<Route path="student-accommodation-in-glyn-cleddau-cardiff" element={<CardiffGlynCleddau/>}/>
<Route path="student-accommodation-in-pontcanna-cardiff" element={<CardiffPontcanna/>}/>
<Route path="student-accommodation-in-ceiriog-park-cardiff" element={<CardiffCeiriogPark/>}/>
<Route path="student-accommodation-in-conway-park-cardiff" element={<CardiffConwayPark/>}/>
<Route path="student-accommodation-in-pontprennau-cardiff" element={<CardiffPontprennau/>}/>
<Route path="student-accommodation-in-whitchurch-cardiff" element={<CardiffWhitchurch/>}/>
<Route path="student-accommodation-in-castleton-cardiff" element={<CardiffCastleton/>}/>
<Route path="student-accommodation-in-cyntwell-cardiff" element={<CardiffCyntwell/>}/>
<Route path="student-accommodation-in-pengam-cardiff" element={<CardiffPengam/>}/>
<Route path="student-accommodation-in-mynydd-bychan-cardiff" element={<CardiffMynyddBychan/>}/>
<Route path="student-accommodation-in-splottlands-cardiff" element={<CardiffSplottlands/>}/>
<Route path="student-accommodation-in-sweldon-cardiff" element={<CardiffSweldon/>}/>
<Route path="student-accommodation-in-the-exchange-cardiff" element={<CardiffTheExchange/>}/>
<Route path="student-accommodation-in-y-waun-cardiff" element={<CardiffYWaun/>}/>
<Route path="student-accommodation-in-cas-bach-cardiff" element={<CardiffCasBach/>}/>
<Route path="student-accommodation-in-trelai-cardiff" element={<CardiffTrelai/>}/>
<Route path="student-accommodation-in-roath-docks-cardiff" element={<CardiffRoathDocks/>}/>
<Route path="student-accommodation-in-maerun-cardiff" element={<CardiffMaerun/>}/>
<Route path="student-accommodation-in-llanbedr-gwynllwg-cardiff" element={<CardiffLlanbedrGwynllwg/>}/>
<Route path="student-accommodation-in-coed-y-gores-cardiff" element={<CardiffCoedYGores/>}/>
<Route path="student-accommodation-in-watford-park-cardiff" element={<CardiffWatfordPark/>}/>
<Route path="student-accommodation-in-ely-cardiff" element={<CardiffEly/>}/>
<Route path="student-accommodation-in-beaulieu-chelmsford" element={<ChelmsfordBeaulieu/>}/>
<Route path="student-accommodation-in-newlands-spring-chelmsford" element={<ChelmsfordNewlandsSpring/>}/>
<Route path="student-accommodation-in-fambridge-end-chelmsford" element={<ChelmsfordFambridgeEnd/>}/>
<Route path="student-accommodation-in-peppers-green-chelmsford" element={<ChelmsfordPeppersGreen/>}/>
<Route path="student-accommodation-in-boyton-cross-chelmsford" element={<ChelmsfordBoytonCross/>}/>
<Route path="student-accommodation-in-chalk-end-chelmsford" element={<ChelmsfordChalkEnd/>}/>
<Route path="student-accommodation-in-clatterford-end-chelmsford" element={<ChelmsfordClatterfordEnd/>}/>
<Route path="student-accommodation-in-hoe-street-chelmsford" element={<ChelmsfordHoeStreet/>}/>
<Route path="student-accommodation-in-souther-cross-chelmsford" element={<ChelmsfordSoutherCross/>}/>
<Route path="student-accommodation-in-stagden-cross-chelmsford" element={<ChelmsfordStagdenCross/>}/>
<Route path="student-accommodation-in-chignal-st-james-chelmsford" element={<ChelmsfordChignalStJames/>}/>
<Route path="student-accommodation-in-high-easter-chelmsford" element={<ChelmsfordHighEaster/>}/>
<Route path="student-accommodation-in-chatley-chelmsford" element={<ChelmsfordChatley/>}/>
<Route path="student-accommodation-in-gubbions-green-chelmsford" element={<ChelmsfordGubbionsGreen/>}/>
<Route path="student-accommodation-in-brook-end-chelmsford" element={<ChelmsfordBrookEnd/>}/>
<Route path="student-accommodation-in-chelmer-village-chelmsford" element={<ChelmsfordChelmerVillage/>}/>
<Route path="student-accommodation-in-wymans-brook-cheltenham" element={<CheltenhamWymansBrook/>}/>
<Route path="student-accommodation-in-hasbury-cheltenham" element={<CheltenhamHasbury/>}/>
<Route path="student-accommodation-in-leckhampton-cheltenham" element={<CheltenhamLeckhampton/>}/>
<Route path="student-accommodation-in-bourton-on-the-water-cheltenham" element={<CheltenhamBourtonOnTheWater/>}/>
<Route path="student-accommodation-in-wyck-rissington-cheltenham" element={<CheltenhamWyckRissington/>}/>
<Route path="student-accommodation-in-benhall-cheltenham" element={<CheltenhamBenhall/>}/>
<Route path="student-accommodation-in-lilley-brook-cheltenham" element={<CheltenhamLilleyBrook/>}/>
<Route path="student-accommodation-in-moorend-cheltenham" element={<CheltenhamMoorend/>}/>
<Route path="student-accommodation-in-up-end-cheltenham" element={<CheltenhamUpEnd/>}/>
<Route path="student-accommodation-in-little-herberts-cheltenham" element={<CheltenhamLittleHerberts/>}/>
<Route path="student-accommodation-in-two-mills-chester" element={<ChesterTwoMills/>}/>
<Route path="student-accommodation-in-bache-chester" element={<ChesterBache/>}/>
<Route path="student-accommodation-in-abbots-meads-chester" element={<ChesterAbbotsMeads/>}/>
<Route path="student-accommodation-in-abbotts-mead-chester" element={<ChesterAbbottsMead/>}/>
<Route path="student-accommodation-in-balmoral-park-chester" element={<ChesterBalmoralPark/>}/>
<Route path="student-accommodation-in-laylands-green-chester" element={<ChesterLaylandsGreen/>}/>
<Route path="student-accommodation-in-garden-lane-chester" element={<ChesterGardenLane/>}/>
<Route path="student-accommodation-in-hoole-chester" element={<ChesterHoole/>}/>
<Route path="student-accommodation-in-tarvin-bridge-chester" element={<ChesterTarvinBridge/>}/>
<Route path="student-accommodation-in-newton-chester" element={<ChesterNewton/>}/>
<Route path="student-accommodation-in-pipers-ash-chester" element={<ChesterPipersAsh/>}/>
<Route path="student-accommodation-in-boughton-chester" element={<ChesterBoughton/>}/>
<Route path="student-accommodation-in-boughton-heath-chester" element={<ChesterBoughtonHeath/>}/>
<Route path="student-accommodation-in-broughton-heath-chester" element={<ChesterBroughtonHeath/>}/>
<Route path="student-accommodation-in-blacon-chester" element={<ChesterBlacon/>}/>
<Route path="student-accommodation-in-mold-junction-chester" element={<ChesterMoldJunction/>}/>
<Route path="student-accommodation-in-roodee-chester" element={<ChesterRoodee/>}/>
<Route path="student-accommodation-in-caldecott-chester" element={<ChesterCaldecott/>}/>
<Route path="student-accommodation-in-christleton-chester" element={<ChesterChristleton/>}/>
<Route path="student-accommodation-in-crabwell-chester" element={<ChesterCrabwell/>}/>
<Route path="student-accommodation-in-dee-hills-park-chester" element={<ChesterDeeHillsPark/>}/>
<Route path="student-accommodation-in-flookersbrook-chester" element={<ChesterFlookersbrook/>}/>
<Route path="student-accommodation-in-little-saughall-chester" element={<ChesterLittleSaughall/>}/>
<Route path="student-accommodation-in-newton-bank-chester" element={<ChesterNewtonBank/>}/>
<Route path="student-accommodation-in-newton-by-chester-chester" element={<ChesterNewtonByChester/>}/>
<Route path="student-accommodation-in-hoole-park-chester" element={<ChesterHoolePark/>}/>
<Route path="student-accommodation-in-irish-hill-chester" element={<ChesterIrishHill/>}/>
<Route path="student-accommodation-in-the-castle-chester" element={<ChesterTheCastle/>}/>
<Route path="student-accommodation-in-portfield-chichester" element={<ChichesterPortfield/>}/>
<Route path="student-accommodation-in-rumboldswhyke-chichester" element={<ChichesterRumboldswhyke/>}/>
<Route path="student-accommodation-in-whyke-chichester" element={<ChichesterWhyke/>}/>
<Route path="student-accommodation-in-the-beeches-cirencester" element={<CirencesterTheBeeches/>}/>
<Route path="student-accommodation-in-kings-hill-cirencester" element={<CirencesterKingsHill/>}/>
<Route path="student-accommodation-in-watermoor-cirencester" element={<CirencesterWatermoor/>}/>
<Route path="student-accommodation-in-beeches-estate-cirencester" element={<CirencesterBeechesEstate/>}/>
<Route path="student-accommodation-in-chesterton-cirencester" element={<CirencesterChesterton/>}/>
<Route path="student-accommodation-in-mercian-close-cirencester" element={<CirencesterMercianClose/>}/>
<Route path="student-accommodation-in-phoenix-way-cirencester" element={<CirencesterPhoenixWay/>}/>
<Route path="student-accommodation-in-sperringate-cirencester" element={<CirencesterSperringate/>}/>
<Route path="student-accommodation-in-sunhill-cirencester" element={<CirencesterSunhill/>}/>
<Route path="student-accommodation-in-wiggold-cirencester" element={<CirencesterWiggold/>}/>
<Route path="student-accommodation-in-ablington-cirencester" element={<CirencesterAblington/>}/>
<Route path="student-accommodation-in-kilkenny-cirencester" element={<CirencesterKilkenny/>}/>
<Route path="student-accommodation-in-maiseyhampton-cirencester" element={<CirencesterMaiseyhampton/>}/>
<Route path="student-accommodation-in-parsons-heath-colchester" element={<ColchesterParsonsHeath/>}/>
<Route path="student-accommodation-in-welshwood-park-colchester" element={<ColchesterWelshwoodPark/>}/>
<Route path="student-accommodation-in-greenstead-colchester" element={<ColchesterGreenstead/>}/>
<Route path="student-accommodation-in-wivenhoe-colchester" element={<ColchesterWivenhoe/>}/>
<Route path="student-accommodation-in-new-quay-colchester" element={<ColchesterNewQuay/>}/>
<Route path="student-accommodation-in-the-hythe-colchester" element={<ColchesterTheHythe/>}/>
<Route path="student-accommodation-in-middlewick-colchester" element={<ColchesterMiddlewick/>}/>
<Route path="student-accommodation-in-old-heath-colchester" element={<ColchesterOldHeath/>}/>
<Route path="student-accommodation-in-potts-green-colchester" element={<ColchesterPottsGreen/>}/>
<Route path="student-accommodation-in-copford-green-colchester" element={<ColchesterCopfordGreen/>}/>
<Route path="student-accommodation-in-long-green-colchester" element={<ColchesterLongGreen/>}/>
<Route path="student-accommodation-in-broad-green-colchester" element={<ColchesterBroadGreen/>}/>
<Route path="student-accommodation-in-monksdown-colchester" element={<ColchesterMonksdown/>}/>
<Route path="student-accommodation-in-marks-hall-colchester" element={<ColchesterMarksHall/>}/>
<Route path="student-accommodation-in-tey-cross-colchester" element={<ColchesterTeyCross/>}/>
<Route path="student-accommodation-in-coggeshall-colchester" element={<ColchesterCoggeshall/>}/>
<Route path="student-accommodation-in-kelvedon-colchester" element={<ColchesterKelvedon/>}/>
<Route path="student-accommodation-in-east-bay-colchester" element={<ColchesterEastBay/>}/>
<Route path="student-accommodation-in-riverside-park-colchester" element={<ColchesterRiversidePark/>}/>
<Route path="student-accommodation-in-chandlers-row-colchester" element={<ColchesterChandlersRow/>}/>
<Route path="student-accommodation-in-cowdray-centre-colchester" element={<ColchesterCowdrayCentre/>}/>
<Route path="student-accommodation-in-east-hill-colchester" element={<ColchesterEastHill/>}/>
<Route path="student-accommodation-in-gore-pit-colchester" element={<ColchesterGorePit/>}/>
<Route path="student-accommodation-in-birch-holt-colchester" element={<ColchesterBirchHolt/>}/>
<Route path="student-accommodation-in-little-birch-holt-colchester" element={<ColchesterLittleBirchHolt/>}/>
<Route path="student-accommodation-in-stoke-coventry" element={<CoventryStoke/>}/>
<Route path="student-accommodation-in-canley-coventry" element={<CoventryCanley/>}/>
<Route path="student-accommodation-in-gosford-green-coventry" element={<CoventryGosfordGreen/>}/>
<Route path="student-accommodation-in-westwood-heath-coventry" element={<CoventryWestwoodHeath/>}/>
<Route path="student-accommodation-in-kirby-corner-coventry" element={<CoventryKirbyCorner/>}/>
<Route path="student-accommodation-in-tile-hill-coventry" element={<CoventryTileHill/>}/>
<Route path="student-accommodation-in-earlsdon-coventry" element={<CoventryEarlsdon/>}/>
<Route path="student-accommodation-in-foleshill-coventry" element={<CoventryFoleshill/>}/>
<Route path="student-accommodation-in-upper-stoke-coventry" element={<CoventryUpperStoke/>}/>
<Route path="student-accommodation-in-stoke-park-coventry" element={<CoventryStokePark/>}/>
<Route path="student-accommodation-in-gibbet-hill-coventry" element={<CoventryGibbetHill/>}/>
<Route path="student-accommodation-in-westwood-gardens-coventry" element={<CoventryWestwoodGardens/>}/>
<Route path="student-accommodation-in-beechwood-gardens-coventry" element={<CoventryBeechwoodGardens/>}/>
<Route path="student-accommodation-in-canley-gardens-coventry" element={<CoventryCanleyGardens/>}/>
<Route path="student-accommodation-in-pinley-coventry" element={<CoventryPinley/>}/>
<Route path="student-accommodation-in-pinley-gardens-coventry" element={<CoventryPinleyGardens/>}/>
<Route path="student-accommodation-in-stoke-aldermoor-coventry" element={<CoventryStokeAldermoor/>}/>
<Route path="student-accommodation-in-hillfields-coventry" element={<CoventryHillfields/>}/>
<Route path="student-accommodation-in-spon-end-coventry" element={<CoventrySponEnd/>}/>
<Route path="student-accommodation-in-walsgrave-coventry" element={<CoventryWalsgrave/>}/>
<Route path="student-accommodation-in-bishopgate-green-coventry" element={<CoventryBishopgateGreen/>}/>
<Route path="student-accommodation-in-edgwick-coventry" element={<CoventryEdgwick/>}/>
<Route path="student-accommodation-in-four-lanes-end-coventry" element={<CoventryFourLanesEnd/>}/>
<Route path="student-accommodation-in-market-end-coventry" element={<CoventryMarketEnd/>}/>
<Route path="student-accommodation-in-newdigate-colliery-coventry" element={<CoventryNewdigateColliery/>}/>
<Route path="student-accommodation-in-paradise-coventry" element={<CoventryParadise/>}/>
<Route path="student-accommodation-in-parting-of-the-heaths-coventry" element={<CoventryPartingOfTheHeaths/>}/>
<Route path="student-accommodation-in-great-heath-coventry" element={<CoventryGreatHeath/>}/>
<Route path="student-accommodation-in-harnall-coventry" element={<CoventryHarnall/>}/>
<Route path="student-accommodation-in-chapelfields-coventry" element={<CoventryChapelfields/>}/>
<Route path="student-accommodation-in-whoberley-coventry" element={<CoventryWhoberley/>}/>
<Route path="student-accommodation-in-stoke-green-coventry" element={<CoventryStokeGreen/>}/>
<Route path="student-accommodation-in-coundon-coventry" element={<CoventryCoundon/>}/>
<Route path="student-accommodation-in-radford-coventry" element={<CoventryRadford/>}/>
<Route path="student-accommodation-in-coventry-city-centre-coventry" element={<CoventryCoventryCityCentre/>}/>
<Route path="student-accommodation-in-drapers-field-coventry" element={<CoventryDrapersField/>}/>
<Route path="student-accommodation-in-stivichall-coventry" element={<CoventryStivichall/>}/>
<Route path="student-accommodation-in-kings-hill-coventry" element={<CoventryKingsHill/>}/>
<Route path="student-accommodation-in-cheylesmore-coventry" element={<CoventryCheylesmore/>}/>
<Route path="student-accommodation-in-green-lane-coventry" element={<CoventryGreenLane/>}/>
<Route path="student-accommodation-in-wyken-coventry" element={<CoventryWyken/>}/>
<Route path="student-accommodation-in-lime-tree-park-coventry" element={<CoventryLimeTreePark/>}/>
<Route path="student-accommodation-in-pickford-coventry" element={<CoventryPickford/>}/>
<Route path="student-accommodation-in-binley-coventry" element={<CoventryBinley/>}/>
<Route path="student-accommodation-in-binley-colliery-village-coventry" element={<CoventryBinleyCollieryVillage/>}/>
<Route path="student-accommodation-in-finham-coventry" element={<CoventryFinham/>}/>
<Route path="student-accommodation-in-styvechale-coventry" element={<CoventryStyvechale/>}/>
<Route path="student-accommodation-in-the-holmes-derby" element={<DerbyTheHolmes/>}/>
<Route path="student-accommodation-in-strutts-park-derby" element={<DerbyStruttsPark/>}/>
<Route path="student-accommodation-in-moorway-derby" element={<DerbyMoorway/>}/>
<Route path="student-accommodation-in-owens-bank-derby" element={<DerbyOwensBank/>}/>
<Route path="student-accommodation-in-derby-city-centre-derby" element={<DerbyDerbyCityCentre/>}/>
<Route path="student-accommodation-in-little-chester-derby" element={<DerbyLittleChester/>}/>
<Route path="student-accommodation-in-darley-abbey-derby" element={<DerbyDarleyAbbey/>}/>
<Route path="student-accommodation-in-new-normanton-derby" element={<DerbyNewNormanton/>}/>
<Route path="student-accommodation-in-kegworth-derby" element={<DerbyKegworth/>}/>
<Route path="student-accommodation-in-littleover-derby" element={<DerbyLittleover/>}/>
<Route path="student-accommodation-in-alvaston-derby" element={<DerbyAlvaston/>}/>
<Route path="student-accommodation-in-allenton-derby" element={<DerbyAllenton/>}/>
<Route path="student-accommodation-in-rose-hill-derby" element={<DerbyRoseHill/>}/>
<Route path="student-accommodation-in-dundee-west-end-dundee" element={<DundeeDundeeWestEnd/>}/>
<Route path="student-accommodation-in-dundee-city-centre-dundee" element={<DundeeDundeeCityCentre/>}/>
<Route path="student-accommodation-in-stannergate-dundee" element={<DundeeStannergate/>}/>
<Route path="student-accommodation-in-dundee-technology-park-dundee" element={<DundeeDundeeTechnologyPark/>}/>
<Route path="student-accommodation-in-broughty-ferry-station-dundee" element={<DundeeBroughtyFerryStation/>}/>
<Route path="student-accommodation-in-broughty-ferry-dundee" element={<DundeeBroughtyFerry/>}/>
<Route path="student-accommodation-in-gilesgate-durham" element={<DurhamGilesgate/>}/>
<Route path="student-accommodation-in-stockton-on-tees-durham" element={<DurhamStocktonOnTees/>}/>
<Route path="student-accommodation-in-low-burnhall-durham" element={<DurhamLowBurnhall/>}/>
<Route path="student-accommodation-in-merryoaks-durham" element={<DurhamMerryoaks/>}/>
<Route path="student-accommodation-in-new-elvet-durham" element={<DurhamNewElvet/>}/>
<Route path="student-accommodation-in-potters-bank-durham" element={<DurhamPottersBank/>}/>
<Route path="student-accommodation-in-the-downs-durham" element={<DurhamTheDowns/>}/>
<Route path="student-accommodation-in-byers-garth-durham" element={<DurhamByersGarth/>}/>
<Route path="student-accommodation-in-broomside-durham" element={<DurhamBroomside/>}/>
<Route path="student-accommodation-in-deerness-junction-durham" element={<DurhamDeernessJunction/>}/>
<Route path="student-accommodation-in-western-hill-durham" element={<DurhamWesternHill/>}/>
<Route path="student-accommodation-in-wharton-park-durham" element={<DurhamWhartonPark/>}/>
<Route path="student-accommodation-in-whitesmocks-durham" element={<DurhamWhitesmocks/>}/>
<Route path="student-accommodation-in-high-grange-estate-durham" element={<DurhamHighGrangeEstate/>}/>
<Route path="student-accommodation-in-belmont-durham" element={<DurhamBelmont/>}/>
<Route path="student-accommodation-in-dryburn-durham" element={<DurhamDryburn/>}/>
<Route path="student-accommodation-in-newton-hall-estate-durham" element={<DurhamNewtonHallEstate/>}/>
<Route path="student-accommodation-in-low-carrs-durham" element={<DurhamLowCarrs/>}/>
<Route path="student-accommodation-in-newton-hall-durham" element={<DurhamNewtonHall/>}/>
<Route path="student-accommodation-in-meadow-green-durham" element={<DurhamMeadowGreen/>}/>
<Route path="student-accommodation-in-derepark-durham" element={<DurhamDerepark/>}/>
<Route path="student-accommodation-in-pit-house-durham" element={<DurhamPitHouse/>}/>
<Route path="student-accommodation-in-langley-moor-durham" element={<DurhamLangleyMoor/>}/>
<Route path="student-accommodation-in-framwellgate-moor-durham" element={<DurhamFramwellgateMoor/>}/>
<Route path="student-accommodation-in-gilesgate-moor-durham" element={<DurhamGilesgateMoor/>}/>
<Route path="student-accommodation-in-meadowfield-durham" element={<DurhamMeadowfield/>}/>
<Route path="student-accommodation-in-nevilles-cross-durham" element={<DurhamNevillesCross/>}/>
<Route path="student-accommodation-in-pity-me-durham" element={<DurhamPityMe/>}/>
<Route path="student-accommodation-in-carrville-durham" element={<DurhamCarrville/>}/>
<Route path="student-accommodation-in-shotton-colliery-durham" element={<DurhamShottonColliery/>}/>
<Route path="student-accommodation-in-hartside-durham" element={<DurhamHartside/>}/>
<Route path="student-accommodation-in-haswell-durham" element={<DurhamHaswell/>}/>
<Route path="student-accommodation-in-sacriston-durham" element={<DurhamSacriston/>}/>
<Route path="student-accommodation-in-sherburn-durham" element={<DurhamSherburn/>}/>
<Route path="student-accommodation-in-brandon-durham" element={<DurhamBrandon/>}/>
<Route path="student-accommodation-in-edmondsley-fell-durham" element={<DurhamEdmondsleyFell/>}/>
<Route path="student-accommodation-in-crossgate-moor-durham" element={<DurhamCrossgateMoor/>}/>
<Route path="student-accommodation-in-northfields-ealing" element={<EalingNorthfields/>}/>
<Route path="student-accommodation-in-edinburgh-south-edinburgh" element={<EdinburghEdinburghSouth/>}/>
<Route path="student-accommodation-in-edinburgh-north-edinburgh" element={<EdinburghEdinburghNorth/>}/>
<Route path="student-accommodation-in-leith-edinburgh" element={<EdinburghLeith/>}/>
<Route path="student-accommodation-in-edinburgh-east-edinburgh" element={<EdinburghEdinburghEast/>}/>
<Route path="student-accommodation-in-edinburgh-west-edinburgh" element={<EdinburghEdinburghWest/>}/>
<Route path="student-accommodation-in-gorgie-edinburgh" element={<EdinburghGorgie/>}/>
<Route path="student-accommodation-in-newington-edinburgh" element={<EdinburghNewington/>}/>
<Route path="student-accommodation-in-lochend-edinburgh" element={<EdinburghLochend/>}/>
<Route path="student-accommodation-in-dalry-edinburgh" element={<EdinburghDalry/>}/>
<Route path="student-accommodation-in-hermits-croft-edinburgh" element={<EdinburghHermitsCroft/>}/>
<Route path="student-accommodation-in-terrars-croft-edinburgh" element={<EdinburghTerrarsCroft/>}/>
<Route path="student-accommodation-in-marionville-edinburgh" element={<EdinburghMarionville/>}/>
<Route path="student-accommodation-in-tollcross-edinburgh" element={<EdinburghTollcross/>}/>
<Route path="student-accommodation-in-restalrig-edinburgh" element={<EdinburghRestalrig/>}/>
<Route path="student-accommodation-in-abbeyhill-edinburgh" element={<EdinburghAbbeyhill/>}/>
<Route path="student-accommodation-in-bonnington-edinburgh" element={<EdinburghBonnington/>}/>
<Route path="student-accommodation-in-bruntsfield-edinburgh" element={<EdinburghBruntsfield/>}/>
<Route path="student-accommodation-in-mayfield-edinburgh" element={<EdinburghMayfield/>}/>
<Route path="student-accommodation-in-merchiston-edinburgh" element={<EdinburghMerchiston/>}/>
<Route path="student-accommodation-in-boroughmuirhead-edinburgh" element={<EdinburghBoroughmuirhead/>}/>
<Route path="student-accommodation-in-grange-edinburgh" element={<EdinburghGrange/>}/>
<Route path="student-accommodation-in-the-grange-edinburgh" element={<EdinburghTheGrange/>}/>
<Route path="student-accommodation-in-causewayside-edinburgh" element={<EdinburghCausewayside/>}/>
<Route path="student-accommodation-in-meadows-edinburgh" element={<EdinburghMeadows/>}/>
<Route path="student-accommodation-in-the-meadows-edinburgh" element={<EdinburghTheMeadows/>}/>
<Route path="student-accommodation-in-old-town-edinburgh" element={<EdinburghOldTown/>}/>
<Route path="student-accommodation-in-pilrig-edinburgh" element={<EdinburghPilrig/>}/>
<Route path="student-accommodation-in-prestonfield-edinburgh" element={<EdinburghPrestonfield/>}/>
<Route path="student-accommodation-in-the-inch-edinburgh" element={<EdinburghTheInch/>}/>
<Route path="student-accommodation-in-craigmillar-park-edinburgh" element={<EdinburghCraigmillarPark/>}/>
<Route path="student-accommodation-in-blackford-edinburgh" element={<EdinburghBlackford/>}/>
<Route path="student-accommodation-in-liberton-edinburgh" element={<EdinburghLiberton/>}/>
<Route path="student-accommodation-in-meadowbank-edinburgh" element={<EdinburghMeadowbank/>}/>
<Route path="student-accommodation-in-wardieburn-edinburgh" element={<EdinburghWardieburn/>}/>
<Route path="student-accommodation-in-lauriston-edinburgh" element={<EdinburghLauriston/>}/>
<Route path="student-accommodation-in-chesser-edinburgh" element={<EdinburghChesser/>}/>
<Route path="student-accommodation-in-morningside-edinburgh" element={<EdinburghMorningside/>}/>
<Route path="student-accommodation-in-stenhouse-edinburgh" element={<EdinburghStenhouse/>}/>
<Route path="student-accommodation-in-saughton-edinburgh" element={<EdinburghSaughton/>}/>
<Route path="student-accommodation-in-granton-edinburgh" element={<EdinburghGranton/>}/>
<Route path="student-accommodation-in-slateford-edinburgh" element={<EdinburghSlateford/>}/>
<Route path="student-accommodation-in-dean-edinburgh" element={<EdinburghDean/>}/>
<Route path="student-accommodation-in-dean-village-edinburgh" element={<EdinburghDeanVillage/>}/>
<Route path="student-accommodation-in-new-town-edinburgh" element={<EdinburghNewTown/>}/>
<Route path="student-accommodation-in-newhaven-edinburgh" element={<EdinburghNewhaven/>}/>
<Route path="student-accommodation-in-edinburgh-northwest-edinburgh" element={<EdinburghEdinburghNorthWest/>}/>
<Route path="student-accommodation-in-trinity-edinburgh" element={<EdinburghTrinity/>}/>
<Route path="student-accommodation-in-west-end-edinburgh" element={<EdinburghWestEnd/>}/>
<Route path="student-accommodation-in-boswall-edinburgh" element={<EdinburghBoswall/>}/>
<Route path="student-accommodation-in-greenbank-edinburgh" element={<EdinburghGreenbank/>}/>
<Route path="student-accommodation-in-kings-buildings-university-edinburgh" element={<EdinburghKingsBuildingsUniversity/>}/>
<Route path="student-accommodation-in-comely-bank-edinburgh" element={<EdinburghComelyBank/>}/>
<Route path="student-accommodation-in-crewe-edinburgh" element={<EdinburghCrewe/>}/>
<Route path="student-accommodation-in-duddingston-village-edinburgh" element={<EdinburghDuddingstonVillage/>}/>
<Route path="student-accommodation-in-gracemount-edinburgh" element={<EdinburghGracemount/>}/>
<Route path="student-accommodation-in-inch-edinburgh" element={<EdinburghInch/>}/>
<Route path="student-accommodation-in-kaimes-edinburgh" element={<EdinburghKaimes/>}/>
<Route path="student-accommodation-in-murrayfield-edinburgh" element={<EdinburghMurrayfield/>}/>
<Route path="student-accommodation-in-southfield-edinburgh" element={<EdinburghSouthfield/>}/>
<Route path="student-accommodation-in-stockbridge-edinburgh" element={<EdinburghStockbridge/>}/>
<Route path="student-accommodation-in-barnton-edinburgh" element={<EdinburghBarnton/>}/>
<Route path="student-accommodation-in-braepark-edinburgh" element={<EdinburghBraepark/>}/>
<Route path="student-accommodation-in-fishwives-causeway-indust-estate-edinburgh" element={<EdinburghFishwivesCausewayIndustEstate/>}/>
<Route path="student-accommodation-in-cramond-edinburgh" element={<EdinburghCramond/>}/>
<Route path="student-accommodation-in-portobello-edinburgh" element={<EdinburghPortobello/>}/>
<Route path="student-accommodation-in-royston-edinburgh" element={<EdinburghRoyston/>}/>
<Route path="student-accommodation-in-craigleith-edinburgh" element={<EdinburghCraigleith/>}/>
<Route path="student-accommodation-in-gilmerton-edinburgh" element={<EdinburghGilmerton/>}/>
<Route path="student-accommodation-in-wick-egham" element={<EghamWick/>}/>
<Route path="student-accommodation-in-englefield-green-egham" element={<EghamEnglefieldGreen/>}/>
<Route path="student-accommodation-in-bell-weir-lock-egham" element={<EghamBellWeirLock/>}/>
<Route path="student-accommodation-in-bishopsgate-egham" element={<EghamBishopsgate/>}/>
<Route path="student-accommodation-in-glanty-egham" element={<EghamGlanty/>}/>
<Route path="student-accommodation-in-pennsylvania-exeter" element={<ExeterPennsylvania/>}/>
<Route path="student-accommodation-in-duryard-exeter" element={<ExeterDuryard/>}/>
<Route path="student-accommodation-in-st-davids-exeter" element={<ExeterStDavids/>}/>
<Route path="student-accommodation-in-heavitree-park-exeter" element={<ExeterHeavitreePark/>}/>
<Route path="student-accommodation-in-east-wonford-exeter" element={<ExeterEastWonford/>}/>
<Route path="student-accommodation-in-northernhay-exeter" element={<ExeterNorthernhay/>}/>
<Route path="student-accommodation-in-polsloe-park-exeter" element={<ExeterPolsloePark/>}/>
<Route path="student-accommodation-in-polsloe-exeter" element={<ExeterPolsloe/>}/>
<Route path="student-accommodation-in-polsloe-bridge-exeter" element={<ExeterPolsloeBridge/>}/>
<Route path="student-accommodation-in-polsloe-priory-exeter" element={<ExeterPolsloePriory/>}/>
<Route path="student-accommodation-in-newtown-exeter" element={<ExeterNewtown/>}/>
<Route path="student-accommodation-in-lions-holt-exeter" element={<ExeterLionsHolt/>}/>
<Route path="student-accommodation-in-st-james-exeter" element={<ExeterStJames/>}/>
<Route path="student-accommodation-in-beacon-heath-estate-exeter" element={<ExeterBeaconHeathEstate/>}/>
<Route path="student-accommodation-in-stoke-hill-exeter" element={<ExeterStokeHill/>}/>
<Route path="student-accommodation-in-heavitree-exeter" element={<ExeterHeavitree/>}/>
<Route path="student-accommodation-in-st-leonards-exeter" element={<ExeterStLeonards/>}/>
<Route path="student-accommodation-in-red-cow-village-exeter" element={<ExeterRedCowVillage/>}/>
<Route path="student-accommodation-in-wonford-exeter" element={<ExeterWonford/>}/>
<Route path="student-accommodation-in-haven-banks-exeter" element={<ExeterHavenBanks/>}/>
<Route path="student-accommodation-in-higher-wear-exeter" element={<ExeterHigherWear/>}/>
<Route path="student-accommodation-in-south-wonford-exeter" element={<ExeterSouthWonford/>}/>
<Route path="student-accommodation-in-beacon-heath-exeter" element={<ExeterBeaconHeath/>}/>
<Route path="student-accommodation-in-bedford-precinct-exeter" element={<ExeterBedfordPrecinct/>}/>
<Route path="student-accommodation-in-friars-green-exeter" element={<ExeterFriarsGreen/>}/>
<Route path="student-accommodation-in-mount-radford-exeter" element={<ExeterMountRadford/>}/>
<Route path="student-accommodation-in-barnfield-exeter" element={<ExeterBarnfield/>}/>
<Route path="student-accommodation-in-the-close-exeter" element={<ExeterTheClose/>}/>
<Route path="student-accommodation-in-mount-dinham-exeter" element={<ExeterMountDinham/>}/>
<Route path="student-accommodation-in-exe-island-exeter" element={<ExeterExeIsland/>}/>
<Route path="student-accommodation-in-st-john-exeter" element={<ExeterStJohn/>}/>
<Route path="student-accommodation-in-stepcote-hill-exeter" element={<ExeterStepcoteHill/>}/>
<Route path="student-accommodation-in-broadfields-exeter" element={<ExeterBroadfields/>}/>
<Route path="student-accommodation-in-halsfordwood-exeter" element={<ExeterHalsfordwood/>}/>
<Route path="student-accommodation-in-exwick-exeter" element={<ExeterExwick/>}/>
<Route path="student-accommodation-in-st-thomas-exeter" element={<ExeterStThomas/>}/>
<Route path="student-accommodation-in-st-loyes-exeter" element={<ExeterStLoyes/>}/>
<Route path="student-accommodation-in-cowick-exeter" element={<ExeterCowick/>}/>
<Route path="student-accommodation-in-st-hill-alphington-exeter" element={<ExeterStHillAlphington/>}/>
<Route path="student-accommodation-in-cowley-exeter" element={<ExeterCowley/>}/>
<Route path="student-accommodation-in-great-shilhay-exeter" element={<ExeterGreatShilhay/>}/>
<Route path="student-accommodation-in-marsh-barton-exeter" element={<ExeterMarshBarton/>}/>
<Route path="student-accommodation-in-redhills-exeter" element={<ExeterRedhills/>}/>
<Route path="student-accommodation-in-the-fairways-exeter" element={<ExeterTheFairways/>}/>
<Route path="student-accommodation-in-tregatreath-falmouth" element={<FalmouthTregatreath/>}/>
<Route path="student-accommodation-in-bareppa-falmouth" element={<FalmouthBareppa/>}/>
<Route path="student-accommodation-in-brill-falmouth" element={<FalmouthBrill/>}/>
<Route path="student-accommodation-in-carvedras-falmouth" element={<FalmouthCarvedras/>}/>
<Route path="student-accommodation-in-nancenoy-falmouth" element={<FalmouthNancenoy/>}/>
<Route path="student-accommodation-in-polwheveral-falmouth" element={<FalmouthPolwheveral/>}/>
<Route path="student-accommodation-in-ponjeravah-falmouth" element={<FalmouthPonjeravah/>}/>
<Route path="student-accommodation-in-seworgan-falmouth" element={<FalmouthSeworgan/>}/>
<Route path="student-accommodation-in-trewardreva-falmouth" element={<FalmouthTrewardreva/>}/>
<Route path="student-accommodation-in-tregew-falmouth" element={<FalmouthTregew/>}/>
<Route path="student-accommodation-in-penjerrick-falmouth" element={<FalmouthPenjerrick/>}/>
<Route path="student-accommodation-in-brillwater-falmouth" element={<FalmouthBrillwater/>}/>
<Route path="student-accommodation-in-durgan-falmouth" element={<FalmouthDurgan/>}/>
<Route path="student-accommodation-in-penwerris-falmouth" element={<FalmouthPenwerris/>}/>
<Route path="student-accommodation-in-swanvale-falmouth" element={<FalmouthSwanvale/>}/>
<Route path="student-accommodation-in-the-beacon-falmouth" element={<FalmouthTheBeacon/>}/>
<Route path="student-accommodation-in-mount-pleasant-farnham" element={<FarnhamMountPleasant/>}/>
<Route path="student-accommodation-in-bridge-field-farnham" element={<FarnhamBridgeField/>}/>
<Route path="student-accommodation-in-weybourne-farnham" element={<FarnhamWeybourne/>}/>
<Route path="student-accommodation-in-wrecclesham-farnham" element={<FarnhamWrecclesham/>}/>
<Route path="student-accommodation-in-bentley-farnham" element={<FarnhamBentley/>}/>
<Route path="student-accommodation-in-alice-holt-farnham" element={<FarnhamAliceHolt/>}/>
<Route path="student-accommodation-in-ewshot-farnham" element={<FarnhamEwshot/>}/>
<Route path="student-accommodation-in-blantyre-station-glasgow" element={<GlasgowBlantyreStation/>}/>
<Route path="student-accommodation-in-airbles-station-glasgow" element={<GlasgowAirblesStation/>}/>
<Route path="student-accommodation-in-westerton-station-glasgow" element={<GlasgowWestertonStation/>}/>
<Route path="student-accommodation-in-glasgow-west-glasgow" element={<GlasgowGlasgowWest/>}/>
<Route path="student-accommodation-in-glasgow-west-end-glasgow" element={<GlasgowGlasgowWestEnd/>}/>
<Route path="student-accommodation-in-glasgow-east-glasgow" element={<GlasgowGlasgowEast/>}/>
<Route path="student-accommodation-in-glasgow-south-glasgow" element={<GlasgowGlasgowSouth/>}/>
<Route path="student-accommodation-in-glasgow-central-glasgow" element={<GlasgowGlasgowCentral/>}/>
<Route path="student-accommodation-in-partick-glasgow" element={<GlasgowPartick/>}/>
<Route path="student-accommodation-in-maryhill-glasgow" element={<GlasgowMaryhill/>}/>
<Route path="student-accommodation-in-hillhead-glasgow" element={<GlasgowHillhead/>}/>
<Route path="student-accommodation-in-kelvingrove-glasgow" element={<GlasgowKelvingrove/>}/>
<Route path="student-accommodation-in-finnieston-glasgow" element={<GlasgowFinnieston/>}/>
<Route path="student-accommodation-in-dowanhill-glasgow" element={<GlasgowDowanhill/>}/>
<Route path="student-accommodation-in-broomhill-glasgow" element={<GlasgowBroomhill/>}/>
<Route path="student-accommodation-in-glasgow-north-glasgow" element={<GlasgowGlasgowNorth/>}/>
<Route path="student-accommodation-in-thornwood-glasgow" element={<GlasgowThornwood/>}/>
<Route path="student-accommodation-in-kirklee-glasgow" element={<GlasgowKirklee/>}/>
<Route path="student-accommodation-in-dennistoun-glasgow" element={<GlasgowDennistoun/>}/>
<Route path="student-accommodation-in-balshagray-glasgow" element={<GlasgowBalshagray/>}/>
<Route path="student-accommodation-in-north-kelvin-glasgow" element={<GlasgowNorthKelvin/>}/>
<Route path="student-accommodation-in-hyndland-glasgow" element={<GlasgowHyndland/>}/>
<Route path="student-accommodation-in-kelvinbridge-glasgow" element={<GlasgowKelvinbridge/>}/>
<Route path="student-accommodation-in-bowling-station-glasgow" element={<GlasgowBowlingStation/>}/>
<Route path="student-accommodation-in-tradeston-glasgow" element={<GlasgowTradeston/>}/>
<Route path="student-accommodation-in-port-dundas-glasgow" element={<GlasgowPortDundas/>}/>
<Route path="student-accommodation-in-garnethill-glasgow" element={<GlasgowGarnethill/>}/>
<Route path="student-accommodation-in-partickhill-glasgow" element={<GlasgowPartickhill/>}/>
<Route path="student-accommodation-in-anderston-glasgow" element={<GlasgowAnderston/>}/>
<Route path="student-accommodation-in-dixon-blazes-glasgow" element={<GlasgowDixonBlazes/>}/>
<Route path="student-accommodation-in-cranstonhill-glasgow" element={<GlasgowCranstonhill/>}/>
<Route path="student-accommodation-in-kevinbridge-glasgow" element={<GlasgowKevinbridge/>}/>
<Route path="student-accommodation-in-kingston-glasgow" element={<GlasgowKingston/>}/>
<Route path="student-accommodation-in-woodside-glasgow" element={<GlasgowWoodside/>}/>
<Route path="student-accommodation-in-anniesland-station-glasgow" element={<GlasgowAnnieslandStation/>}/>
<Route path="student-accommodation-in-baillieston-station-glasgow" element={<GlasgowBailliestonStation/>}/>
<Route path="student-accommodation-in-murano-street-village-glasgow" element={<GlasgowMuranoStreetVillage/>}/>
<Route path="student-accommodation-in-firhill-glasgow" element={<GlasgowFirhill/>}/>
<Route path="student-accommodation-in-bridgeton-glasgow" element={<GlasgowBridgeton/>}/>
<Route path="student-accommodation-in-gallowgate-glasgow" element={<GlasgowGallowgate/>}/>
<Route path="student-accommodation-in-claythorne-glasgow" element={<GlasgowClaythorne/>}/>
<Route path="student-accommodation-in-kelvinside-glasgow" element={<GlasgowKelvinside/>}/>
<Route path="student-accommodation-in-meadowside-glasgow" element={<GlasgowMeadowside/>}/>
<Route path="student-accommodation-in-wellpark-glasgow" element={<GlasgowWellpark/>}/>
<Route path="student-accommodation-in-govanhill-glasgow" element={<GlasgowGovanhill/>}/>
<Route path="student-accommodation-in-kelvindale-glasgow" element={<GlasgowKelvindale/>}/>
<Route path="student-accommodation-in-merchant-city-glasgow" element={<GlasgowMerchantCity/>}/>
<Route path="student-accommodation-in-shawlands-glasgow" element={<GlasgowShawlands/>}/>
<Route path="student-accommodation-in-argyle-street-station-glasgow" element={<GlasgowArgyleStreetStation/>}/>
<Route path="student-accommodation-in-garrowhill-glasgow" element={<GlasgowGarrowhill/>}/>
<Route path="student-accommodation-in-yoker-glasgow" element={<GlasgowYoker/>}/>
<Route path="student-accommodation-in-yorkhill-glasgow" element={<GlasgowYorkhill/>}/>
<Route path="student-accommodation-in-trongate-glasgow" element={<GlasgowTrongate/>}/>
<Route path="student-accommodation-in-queens-park-glasgow" element={<GlasgowQueensPark/>}/>
<Route path="student-accommodation-in-shettleston-glasgow" element={<GlasgowShettleston/>}/>
<Route path="student-accommodation-in-saltmarket-glasgow" element={<GlasgowSaltmarket/>}/>
<Route path="student-accommodation-in-mansewood-glasgow" element={<GlasgowMansewood/>}/>
<Route path="student-accommodation-in-kinning-park-glasgow" element={<GlasgowKinningPark/>}/>
<Route path="student-accommodation-in-pollokshaws-glasgow" element={<GlasgowPollokshaws/>}/>
<Route path="student-accommodation-in-kennishead-glasgow" element={<GlasgowKennishead/>}/>
<Route path="student-accommodation-in-crosshill-glasgow" element={<GlasgowCrosshill/>}/>
<Route path="student-accommodation-in-ibrox-glasgow" element={<GlasgowIbrox/>}/>
<Route path="student-accommodation-in-gorbals-glasgow" element={<GlasgowGorbals/>}/>
<Route path="student-accommodation-in-candleriggs-glasgow" element={<GlasgowCandleriggs/>}/>
<Route path="student-accommodation-in-wyndford-glasgow" element={<GlasgowWyndford/>}/>
<Route path="student-accommodation-in-broomielaw-glasgow" element={<GlasgowBroomielaw/>}/>
<Route path="student-accommodation-in-oatlands-glasgow" element={<GlasgowOatlands/>}/>
<Route path="student-accommodation-in-govan-glasgow" element={<GlasgowGovan/>}/>
<Route path="student-accommodation-in-haghill-glasgow" element={<GlasgowHaghill/>}/>
<Route path="student-accommodation-in-eastwood-glasgow" element={<GlasgowEastwood/>}/>
<Route path="student-accommodation-in-anniesland-glasgow" element={<GlasgowAnniesland/>}/>
<Route path="student-accommodation-in-baillieston-glasgow" element={<GlasgowBaillieston/>}/>
<Route path="student-accommodation-in-rutherglen-glasgow" element={<GlasgowRutherglen/>}/>
<Route path="student-accommodation-in-bishopbriggs-glasgow" element={<GlasgowBishopbriggs/>}/>
<Route path="student-accommodation-in-accademy-park-glasgow" element={<GlasgowAccademyPark/>}/>
<Route path="student-accommodation-in-bailheston-glasgow" element={<GlasgowBailheston/>}/>
<Route path="student-accommodation-in-barnhill-glasgow" element={<GlasgowBarnhill/>}/>
<Route path="student-accommodation-in-crossmyloof-glasgow" element={<GlasgowCrossmyloof/>}/>
<Route path="student-accommodation-in-plantation-glasgow" element={<GlasgowPlantation/>}/>
<Route path="student-accommodation-in-pollokshields-glasgow" element={<GlasgowPollokshields/>}/>
<Route path="student-accommodation-in-temple-glasgow" element={<GlasgowTemple/>}/>
<Route path="student-accommodation-in-auchinairn-glasgow" element={<GlasgowAuchinairn/>}/>
<Route path="student-accommodation-in-calton-glasgow" element={<GlasgowCalton/>}/>
<Route path="student-accommodation-in-camphill-glasgow" element={<GlasgowCamphill/>}/>
<Route path="student-accommodation-in-carntyne-glasgow" element={<GlasgowCarntyne/>}/>
<Route path="student-accommodation-in-cathcart-glasgow" element={<GlasgowCathcart/>}/>
<Route path="student-accommodation-in-dalmarnock-glasgow" element={<GlasgowDalmarnock/>}/>
<Route path="student-accommodation-in-high-carntyne-glasgow" element={<GlasgowHighCarntyne/>}/>
<Route path="student-accommodation-in-jordanhill-glasgow" element={<GlasgowJordanhill/>}/>
<Route path="student-accommodation-in-knightswood-glasgow" element={<GlasgowKnightswood/>}/>
<Route path="student-accommodation-in-polmadie-glasgow" element={<GlasgowPolmadie/>}/>
<Route path="student-accommodation-in-ruchill-glasgow" element={<GlasgowRuchill/>}/>
<Route path="student-accommodation-in-scotstoun-glasgow" element={<GlasgowScotstoun/>}/>
<Route path="student-accommodation-in-scotstoun-west-glasgow" element={<GlasgowScotstounWest/>}/>
<Route path="student-accommodation-in-sighthill-glasgow" element={<GlasgowSighthill/>}/>
<Route path="student-accommodation-in-springburn-glasgow" element={<GlasgowSpringburn/>}/>
<Route path="student-accommodation-in-strathbungo-glasgow" element={<GlasgowStrathbungo/>}/>
<Route path="student-accommodation-in-tollcross-glasgow" element={<GlasgowTollcross/>}/>
<Route path="student-accommodation-in-barrachnie-glasgow" element={<GlasgowBarrachnie/>}/>
<Route path="student-accommodation-in-springhill-farm-glasgow" element={<GlasgowSpringhillFarm/>}/>
<Route path="student-accommodation-in-drumpark-glasgow" element={<GlasgowDrumpark/>}/>
<Route path="student-accommodation-in-woodhill-glasgow" element={<GlasgowWoodhill/>}/>
<Route path="student-accommodation-in-millhall-glasgow" element={<GlasgowMillhall/>}/>
<Route path="student-accommodation-in-garscaden-glasgow" element={<GlasgowGarscaden/>}/>
<Route path="student-accommodation-in-hutchesontown-glasgow" element={<GlasgowHutchesontown/>}/>
<Route path="student-accommodation-in-possil-park-glasgow" element={<GlasgowPossilPark/>}/>
<Route path="student-accommodation-in-eaglesham-glasgow" element={<GlasgowEaglesham/>}/>
<Route path="student-accommodation-in-tredworth-gloucester" element={<GloucesterTredworth/>}/>
<Route path="student-accommodation-in-bownham-gloucester" element={<GloucesterBownham/>}/>
<Route path="student-accommodation-in-wotton-village-gloucester" element={<GloucesterWottonVillage/>}/>
<Route path="student-accommodation-in-houndscroft-gloucester" element={<GloucesterHoundscroft/>}/>
<Route path="student-accommodation-in-llanthony-gloucester" element={<GloucesterLlanthony/>}/>
<Route path="student-accommodation-in-gluocester-gloucester" element={<GloucesterGluocester/>}/>
<Route path="student-accommodation-in-high-orchard-gloucester" element={<GloucesterHighOrchard/>}/>
<Route path="student-accommodation-in-kingsholm-gloucester" element={<GloucesterKingsholm/>}/>
<Route path="student-accommodation-in-sandyleaze-gloucester" element={<GloucesterSandyleaze/>}/>
<Route path="student-accommodation-in-st-pauls-gloucester" element={<GloucesterStPauls/>}/>
<Route path="student-accommodation-in-pool-meadow-gloucester" element={<GloucesterPoolMeadow/>}/>
<Route path="student-accommodation-in-the-island-gloucester" element={<GloucesterTheIsland/>}/>
<Route path="student-accommodation-in-linden-gloucester" element={<GloucesterLinden/>}/>
<Route path="student-accommodation-in-barton-gloucester" element={<GloucesterBarton/>}/>
<Route path="student-accommodation-in-park-barn-guildford" element={<GuildfordParkBarn/>}/>
<Route path="student-accommodation-in-woodbridge-hill-guildford" element={<GuildfordWoodbridgeHill/>}/>
<Route path="student-accommodation-in-pinks-hill-guildford" element={<GuildfordPinksHill/>}/>
<Route path="student-accommodation-in-pitch-place-guildford" element={<GuildfordPitchPlace/>}/>
<Route path="student-accommodation-in-rydeshill-guildford" element={<GuildfordRydeshill/>}/>
<Route path="student-accommodation-in-stoughton-guildford" element={<GuildfordStoughton/>}/>
<Route path="student-accommodation-in-bellfields-guildford" element={<GuildfordBellfields/>}/>
<Route path="student-accommodation-in-slyfield-guildford" element={<GuildfordSlyfield/>}/>
<Route path="student-accommodation-in-slyfield-green-guildford" element={<GuildfordSlyfieldGreen/>}/>
<Route path="student-accommodation-in-stoke-park-guildford" element={<GuildfordStokePark/>}/>
<Route path="student-accommodation-in-worplesdon-guildford" element={<GuildfordWorplesdon/>}/>
<Route path="student-accommodation-in-onslow-village-guildford" element={<GuildfordOnslowVillage/>}/>
<Route path="student-accommodation-in-pewley-hill-guildford" element={<GuildfordPewleyHill/>}/>
<Route path="student-accommodation-in-bushy-hill-guildford" element={<GuildfordBushyHill/>}/>
<Route path="student-accommodation-in-charlotteville-guildford" element={<GuildfordCharlotteville/>}/>
<Route path="student-accommodation-in-pewley-common-guildford" element={<GuildfordPewleyCommon/>}/>
<Route path="student-accommodation-in-st-catherines-guildford" element={<GuildfordStCatherines/>}/>
<Route path="student-accommodation-in-guildford-park-guildford" element={<GuildfordGuildfordPark/>}/>
<Route path="student-accommodation-in-ash-guildford" element={<GuildfordAsh/>}/>
<Route path="student-accommodation-in-whitmoor-guildford" element={<GuildfordWhitmoor/>}/>
<Route path="student-accommodation-in-keens-park-guildford" element={<GuildfordKeensPark/>}/>
<Route path="student-accommodation-in-roe-green-hatfield" element={<HatfieldRoeGreen/>}/>
<Route path="student-accommodation-in-wilkins-green-hatfield" element={<HatfieldWilkinsGreen/>}/>
<Route path="student-accommodation-in-symonds-hyde-hatfield" element={<HatfieldSymondsHyde/>}/>
<Route path="student-accommodation-in-nast-hyde-hatfield" element={<HatfieldNastHyde/>}/>
<Route path="student-accommodation-in-roestock-hatfield" element={<HatfieldRoestock/>}/>
<Route path="student-accommodation-in-hatfield-garden-village-hatfield" element={<HatfieldHatfieldGardenVillage/>}/>
<Route path="student-accommodation-in-ellenbrook-hatfield" element={<HatfieldEllenbrook/>}/>
<Route path="student-accommodation-in-astwick-hatfield" element={<HatfieldAstwick/>}/>
<Route path="student-accommodation-in-south-hatfield-hatfield" element={<HatfieldSouthHatfield/>}/>
<Route path="student-accommodation-in-oxlease-hatfield" element={<HatfieldOxlease/>}/>
<Route path="student-accommodation-in-marshmoor-hatfield" element={<HatfieldMarshmoor/>}/>
<Route path="student-accommodation-in-mount-pleasant-hatfield" element={<HatfieldMountPleasant/>}/>
<Route path="student-accommodation-in-the-ryde-hatfield" element={<HatfieldTheRyde/>}/>
<Route path="student-accommodation-in-bull-stag-green-hatfield" element={<HatfieldBullStagGreen/>}/>
<Route path="student-accommodation-in-batterdale-hatfield" element={<HatfieldBatterdale/>}/>
<Route path="student-accommodation-in-new-town-hatfield" element={<HatfieldNewTown/>}/>
<Route path="student-accommodation-in-birchwood-hatfield" element={<HatfieldBirchwood/>}/>
<Route path="student-accommodation-in-birchwood-estate-hatfield" element={<HatfieldBirchwoodEstate/>}/>
<Route path="student-accommodation-in-brookmans-park-hatfield" element={<HatfieldBrookmansPark/>}/>
<Route path="student-accommodation-in-dixons-hill-hatfield" element={<HatfieldDixonsHill/>}/>
<Route path="student-accommodation-in-mill-green-hatfield" element={<HatfieldMillGreen/>}/>
<Route path="student-accommodation-in-water-end-hatfield" element={<HatfieldWaterEnd/>}/>
<Route path="student-accommodation-in-the-rookery-hatfield" element={<HatfieldTheRookery/>}/>
<Route path="student-accommodation-in-bishops-hatfield-hatfield" element={<HatfieldBishopsHatfield/>}/>
<Route path="student-accommodation-in-hawkeshead-hatfield" element={<HatfieldHawkeshead/>}/>
<Route path="student-accommodation-in-old-hatfield-hatfield" element={<HatfieldOldHatfield/>}/>
<Route path="student-accommodation-in-warrengate-estate-hatfield" element={<HatfieldWarrengateEstate/>}/>
<Route path="student-accommodation-in-brookmans-park-station-hatfield" element={<HatfieldBrookmansParkStation/>}/>
<Route path="student-accommodation-in-west-wycombe-village-high-wycombe" element={<HighWycombeWestWycombeVillage/>}/>
<Route path="student-accommodation-in-west-wycombe-high-wycombe" element={<HighWycombeWestWycombe/>}/>
<Route path="student-accommodation-in-booker-high-wycombe" element={<HighWycombeBooker/>}/>
<Route path="student-accommodation-in-micklefield-high-wycombe" element={<HighWycombeMicklefield/>}/>
<Route path="student-accommodation-in-terriers-high-wycombe" element={<HighWycombeTerriers/>}/>
<Route path="student-accommodation-in-totteridge-high-wycombe" element={<HighWycombeTotteridge/>}/>
<Route path="student-accommodation-in-bowerdean-high-wycombe" element={<HighWycombeBowerdean/>}/>
<Route path="student-accommodation-in-downley-common-high-wycombe" element={<HighWycombeDownleyCommon/>}/>
<Route path="student-accommodation-in-high-wycombe-station-high-wycombe" element={<HighWycombeHighWycombeStation/>}/>
<Route path="student-accommodation-in-folly-hall-huddersfield" element={<HuddersfieldFollyHall/>}/>
<Route path="student-accommodation-in-rashcliffe-huddersfield" element={<HuddersfieldRashcliffe/>}/>
<Route path="student-accommodation-in-springwood-huddersfield" element={<HuddersfieldSpringwood/>}/>
<Route path="student-accommodation-in-gledholt-huddersfield" element={<HuddersfieldGledholt/>}/>
<Route path="student-accommodation-in-edgerton-huddersfield" element={<HuddersfieldEdgerton/>}/>
<Route path="student-accommodation-in-bay-hall-huddersfield" element={<HuddersfieldBayHall/>}/>
<Route path="student-accommodation-in-lower-fold-huddersfield" element={<HuddersfieldLowerFold/>}/>
<Route path="student-accommodation-in-paddock-foot-huddersfield" element={<HuddersfieldPaddockFoot/>}/>
<Route path="student-accommodation-in-johnny-moores-hill-huddersfield" element={<HuddersfieldJohnnyMooresHill/>}/>
<Route path="student-accommodation-in-lockwood-huddersfield" element={<HuddersfieldLockwood/>}/>
<Route path="student-accommodation-in-bradley-mills-huddersfield" element={<HuddersfieldBradleyMills/>}/>
<Route path="student-accommodation-in-wood-end-huddersfield" element={<HuddersfieldWoodEnd/>}/>
<Route path="student-accommodation-in-paddock-brow-huddersfield" element={<HuddersfieldPaddockBrow/>}/>
<Route path="student-accommodation-in-seed-hill-huddersfield" element={<HuddersfieldSeedHill/>}/>
<Route path="student-accommodation-in-shearing-cross-huddersfield" element={<HuddersfieldShearingCross/>}/>
<Route path="student-accommodation-in-marsh-fold-huddersfield" element={<HuddersfieldMarshFold/>}/>
<Route path="student-accommodation-in-lee-head-huddersfield" element={<HuddersfieldLeeHead/>}/>
<Route path="student-accommodation-in-close-hill-huddersfield" element={<HuddersfieldCloseHill/>}/>
<Route path="student-accommodation-in-hall-bower-huddersfield" element={<HuddersfieldHallBower/>}/>
<Route path="student-accommodation-in-newsome-cross-huddersfield" element={<HuddersfieldNewsomeCross/>}/>
<Route path="student-accommodation-in-tunnacliffe-hill-huddersfield" element={<HuddersfieldTunnacliffeHill/>}/>
<Route path="student-accommodation-in-stile-common-huddersfield" element={<HuddersfieldStileCommon/>}/>
<Route path="student-accommodation-in-newsome-huddersfield" element={<HuddersfieldNewsome/>}/>
<Route path="student-accommodation-in-moldgreen-huddersfield" element={<HuddersfieldMoldgreen/>}/>
<Route path="student-accommodation-in-aspley-huddersfield" element={<HuddersfieldAspley/>}/>
<Route path="student-accommodation-in-round-hill-bottom-huddersfield" element={<HuddersfieldRoundHillBottom/>}/>
<Route path="student-accommodation-in-trough-huddersfield" element={<HuddersfieldTrough/>}/>
<Route path="student-accommodation-in-dalton-huddersfield" element={<HuddersfieldDalton/>}/>
<Route path="student-accommodation-in-elland-upper-edge-huddersfield" element={<HuddersfieldEllandUpperEdge/>}/>
<Route path="student-accommodation-in-grimescar-huddersfield" element={<HuddersfieldGrimescar/>}/>
<Route path="student-accommodation-in-cowcliffe-huddersfield" element={<HuddersfieldCowcliffe/>}/>
<Route path="student-accommodation-in-croft-hollow-huddersfield" element={<HuddersfieldCroftHollow/>}/>
<Route path="student-accommodation-in-badger-hill-huddersfield" element={<HuddersfieldBadgerHill/>}/>
<Route path="student-accommodation-in-burn-huddersfield" element={<HuddersfieldBurn/>}/>
<Route path="student-accommodation-in-seventy-acres-huddersfield" element={<HuddersfieldSeventyAcres/>}/>
<Route path="student-accommodation-in-cowcliffe-side-huddersfield" element={<HuddersfieldCowcliffeSide/>}/>
<Route path="student-accommodation-in-storth-huddersfield" element={<HuddersfieldStorth/>}/>
<Route path="student-accommodation-in-top-of-cowcliffe-huddersfield" element={<HuddersfieldTopOfCowcliffe/>}/>
<Route path="student-accommodation-in-scotgate-huddersfield" element={<HuddersfieldScotgate/>}/>
<Route path="student-accommodation-in-netheroyd-hill-huddersfield" element={<HuddersfieldNetheroydHill/>}/>
<Route path="student-accommodation-in-dalton-fold-huddersfield" element={<HuddersfieldDaltonFold/>}/>
<Route path="student-accommodation-in-dalton-green-huddersfield" element={<HuddersfieldDaltonGreen/>}/>
<Route path="student-accommodation-in-long-lane-bottom-huddersfield" element={<HuddersfieldLongLaneBottom/>}/>
<Route path="student-accommodation-in-rawthorpe-huddersfield" element={<HuddersfieldRawthorpe/>}/>
<Route path="student-accommodation-in-grove-place-huddersfield" element={<HuddersfieldGrovePlace/>}/>
<Route path="student-accommodation-in-kidroyd-huddersfield" element={<HuddersfieldKidroyd/>}/>
<Route path="student-accommodation-in-primrose-hill-huddersfield" element={<HuddersfieldPrimroseHill/>}/>
<Route path="student-accommodation-in-benomley-huddersfield" element={<HuddersfieldBenomley/>}/>
<Route path="student-accommodation-in-greenside-huddersfield" element={<HuddersfieldGreenside/>}/>
<Route path="student-accommodation-in-longley-huddersfield" element={<HuddersfieldLongley/>}/>
<Route path="student-accommodation-in-golcar-huddersfield" element={<HuddersfieldGolcar/>}/>
<Route path="student-accommodation-in-longwood-huddersfield" element={<HuddersfieldLongwood/>}/>
<Route path="student-accommodation-in-cliff-end-huddersfield" element={<HuddersfieldCliffEnd/>}/>
<Route path="student-accommodation-in-dodlee-huddersfield" element={<HuddersfieldDodlee/>}/>
<Route path="student-accommodation-in-leymoor-huddersfield" element={<HuddersfieldLeymoor/>}/>
<Route path="student-accommodation-in-royds-hall-huddersfield" element={<HuddersfieldRoydsHall/>}/>
<Route path="student-accommodation-in-colne-valley-huddersfield" element={<HuddersfieldColneValley/>}/>
<Route path="student-accommodation-in-newland-park-hull" element={<HullNewlandPark/>}/>
<Route path="student-accommodation-in-sulcoates-hull" element={<HullSulcoates/>}/>
<Route path="student-accommodation-in-sculcoates-hull" element={<HullSculcoates/>}/>
<Route path="student-accommodation-in-stoneferry-hull" element={<HullStoneferry/>}/>
<Route path="student-accommodation-in-cross-bridges-hull" element={<HullCrossBridges/>}/>
<Route path="student-accommodation-in-inglemire-hull" element={<HullInglemire/>}/>
<Route path="student-accommodation-in-bransholme-hull" element={<HullBransholme/>}/>
<Route path="student-accommodation-in-derringham-bank-hull" element={<HullDerringhamBank/>}/>
<Route path="student-accommodation-in-brooklands-park-hull" element={<HullBrooklandsPark/>}/>
<Route path="student-accommodation-in-paragon-hull" element={<HullParagon/>}/>
<Route path="student-accommodation-in-priory-grange-hull" element={<HullPrioryGrange/>}/>
<Route path="student-accommodation-in-bixley-heath-ipswich" element={<IpswichBixleyHeath/>}/>
<Route path="student-accommodation-in-redhouse-park-ipswich" element={<IpswichRedhousePark/>}/>
<Route path="student-accommodation-in-california-ipswich" element={<IpswichCalifornia/>}/>
<Route path="student-accommodation-in-priory-heath-ipswich" element={<IpswichPrioryHeath/>}/>
<Route path="student-accommodation-in-st-johns-ipswich" element={<IpswichStJohns/>}/>
<Route path="student-accommodation-in-warren-heath-ipswich" element={<IpswichWarrenHeath/>}/>
<Route path="student-accommodation-in-kingston-upon-thames-kingston-upon-thames" element={<KingstonuponThamesKingstonUponThames/>}/>
<Route path="student-accommodation-in-norbiton-kingston-upon-thames" element={<KingstonuponThamesNorbiton/>}/>
<Route path="student-accommodation-in-primrose-hill-lancaster" element={<LancasterPrimroseHill/>}/>
<Route path="student-accommodation-in-the-greaves-lancaster" element={<LancasterTheGreaves/>}/>
<Route path="student-accommodation-in-westfield-war-memorial-village-lancaster" element={<LancasterWestfieldWarMemorialVillage/>}/>
<Route path="student-accommodation-in-hall-park-lancaster" element={<LancasterHallPark/>}/>
<Route path="student-accommodation-in-abraham-heights-lancaster" element={<LancasterAbrahamHeights/>}/>
<Route path="student-accommodation-in-marsh-lancaster" element={<LancasterMarsh/>}/>
<Route path="student-accommodation-in-bulk-lancaster" element={<LancasterBulk/>}/>
<Route path="student-accommodation-in-scotforth-lancaster" element={<LancasterScotforth/>}/>
<Route path="student-accommodation-in-skerton-lancaster" element={<LancasterSkerton/>}/>
<Route path="student-accommodation-in-scale-hall-lancaster" element={<LancasterScaleHall/>}/>
<Route path="student-accommodation-in-holleth-lancaster" element={<LancasterHolleth/>}/>
<Route path="student-accommodation-in-ward-houses-lancaster" element={<LancasterWardHouses/>}/>
<Route path="student-accommodation-in-blea-tarn-lancaster" element={<LancasterBleaTarn/>}/>
<Route path="student-accommodation-in-knowe-hill-lancaster" element={<LancasterKnoweHill/>}/>
<Route path="student-accommodation-in-hampson-green-lancaster" element={<LancasterHampsonGreen/>}/>
<Route path="student-accommodation-in-galgate-lancaster" element={<LancasterGalgate/>}/>
<Route path="student-accommodation-in-ellel-lancaster" element={<LancasterEllel/>}/>
<Route path="student-accommodation-in-haverbreaks-lancaster" element={<LancasterHaverbreaks/>}/>
<Route path="student-accommodation-in-hyde-park-leeds" element={<LeedsHydePark/>}/>
<Route path="student-accommodation-in-headingley-leeds" element={<LeedsHeadingley/>}/>
<Route path="student-accommodation-in-woodhouse-leeds" element={<LeedsWoodhouse/>}/>
<Route path="student-accommodation-in-miles-hill-leeds" element={<LeedsMilesHill/>}/>
<Route path="student-accommodation-in-burley-leeds" element={<LeedsBurley/>}/>
<Route path="student-accommodation-in-headingley-hill-leeds" element={<LeedsHeadingleyHill/>}/>
<Route path="student-accommodation-in-hyde-park-corner-leeds" element={<LeedsHydeParkCorner/>}/>
<Route path="student-accommodation-in-new-huddersfield-leeds" element={<LeedsNewHuddersfield/>}/>
<Route path="student-accommodation-in-burley-lawns-leeds" element={<LeedsBurleyLawns/>}/>
<Route path="student-accommodation-in-woodhouse-carr-leeds" element={<LeedsWoodhouseCarr/>}/>
<Route path="student-accommodation-in-woodhouse-cliff-leeds" element={<LeedsWoodhouseCliff/>}/>
<Route path="student-accommodation-in-far-headingley-leeds" element={<LeedsFarHeadingley/>}/>
<Route path="student-accommodation-in-kirkstall-leeds" element={<LeedsKirkstall/>}/>
<Route path="student-accommodation-in-meanwood-leeds" element={<LeedsMeanwood/>}/>
<Route path="student-accommodation-in-buslingthorpe-leeds" element={<LeedsBuslingthorpe/>}/>
<Route path="student-accommodation-in-harehills-corner-leeds" element={<LeedsHarehillsCorner/>}/>
<Route path="student-accommodation-in-sheepscar-leeds" element={<LeedsSheepscar/>}/>
<Route path="student-accommodation-in-queenswood-leeds" element={<LeedsQueenswood/>}/>
<Route path="student-accommodation-in-weetwood-leeds" element={<LeedsWeetwood/>}/>
<Route path="student-accommodation-in-horsforth-woodside-leeds" element={<LeedsHorsforthWoodside/>}/>
<Route path="student-accommodation-in-steander-leeds" element={<LeedsSteander/>}/>
<Route path="student-accommodation-in-pottery-field-leeds" element={<LeedsPotteryField/>}/>
<Route path="student-accommodation-in-school-close-leeds" element={<LeedsSchoolClose/>}/>
<Route path="student-accommodation-in-mint-leeds" element={<LeedsMint/>}/>
<Route path="student-accommodation-in-fearns-island-leeds" element={<LeedsFearnsIsland/>}/>
<Route path="student-accommodation-in-knowsthorpe-leeds" element={<LeedsKnowsthorpe/>}/>
<Route path="student-accommodation-in-far-royds-leeds" element={<LeedsFarRoyds/>}/>
<Route path="student-accommodation-in-camp-field-leeds" element={<LeedsCampField/>}/>
<Route path="student-accommodation-in-cavalier-hill-leeds" element={<LeedsCavalierHill/>}/>
<Route path="student-accommodation-in-crown-point-leeds" element={<LeedsCrownPoint/>}/>
<Route path="student-accommodation-in-bagby-fields-leeds" element={<LeedsBagbyFields/>}/>
<Route path="student-accommodation-in-west-park-leeds" element={<LeedsWestPark/>}/>
<Route path="student-accommodation-in-scott-hall-leeds" element={<LeedsScottHall/>}/>
<Route path="student-accommodation-in-horsforth-leeds" element={<LeedsHorsforth/>}/>
<Route path="student-accommodation-in-wiring-field-leeds" element={<LeedsWiringField/>}/>
<Route path="student-accommodation-in-green-hill-leeds" element={<LeedsGreenHill/>}/>
<Route path="student-accommodation-in-beeston-royds-leeds" element={<LeedsBeestonRoyds/>}/>
<Route path="student-accommodation-in-armley-leeds" element={<LeedsArmley/>}/>
<Route path="student-accommodation-in-burmantofts-leeds" element={<LeedsBurmantofts/>}/>
<Route path="student-accommodation-in-parklands-leeds" element={<LeedsParklands/>}/>
<Route path="student-accommodation-in-the-leylands-leeds" element={<LeedsTheLeylands/>}/>
<Route path="student-accommodation-in-little-london-leeds" element={<LeedsLittleLondon/>}/>
<Route path="student-accommodation-in-graveleythorpe-leeds" element={<LeedsGraveleythorpe/>}/>
<Route path="student-accommodation-in-holt-park-leeds" element={<LeedsHoltPark/>}/>
<Route path="student-accommodation-in-cookridge-leeds" element={<LeedsCookridge/>}/>
<Route path="student-accommodation-in-hawksworth-leeds" element={<LeedsHawksworth/>}/>
<Route path="student-accommodation-in-swinnow-moor-leeds" element={<LeedsSwinnowMoor/>}/>
<Route path="student-accommodation-in-the-oval-leeds" element={<LeedsTheOval/>}/>
<Route path="student-accommodation-in-mabgate-leeds" element={<LeedsMabgate/>}/>
<Route path="student-accommodation-in-brianside-leeds" element={<LeedsBrianside/>}/>
<Route path="student-accommodation-in-seacroft-leeds" element={<LeedsSeacroft/>}/>
<Route path="student-accommodation-in-hunslet-leeds" element={<LeedsHunslet/>}/>
<Route path="student-accommodation-in-holbeck-leeds" element={<LeedsHolbeck/>}/>
<Route path="student-accommodation-in-potternewton-leeds" element={<LeedsPotternewton/>}/>
<Route path="student-accommodation-in-roundhay-leeds" element={<LeedsRoundhay/>}/>
<Route path="student-accommodation-in-yeadon-leeds" element={<LeedsYeadon/>}/>
<Route path="student-accommodation-in-beeston-leeds" element={<LeedsBeeston/>}/>
<Route path="student-accommodation-in-chapel-allerton-leeds" element={<LeedsChapelAllerton/>}/>
<Route path="student-accommodation-in-gamble-hill-leeds" element={<LeedsGambleHill/>}/>
<Route path="student-accommodation-in-hill-end-leeds" element={<LeedsHillEnd/>}/>
<Route path="student-accommodation-in-richmond-hill-leeds" element={<LeedsRichmondHill/>}/>
<Route path="student-accommodation-in-swallow-hill-leeds" element={<LeedsSwallowHill/>}/>
<Route path="student-accommodation-in-wortley-leeds" element={<LeedsWortley/>}/>
<Route path="student-accommodation-in-henshaw-leeds" element={<LeedsHenshaw/>}/>
<Route path="student-accommodation-in-cabbage-hill-leeds" element={<LeedsCabbageHill/>}/>
<Route path="student-accommodation-in-carr-crofts-leeds" element={<LeedsCarrCrofts/>}/>
<Route path="student-accommodation-in-far-fold-leeds" element={<LeedsFarFold/>}/>
<Route path="student-accommodation-in-green-thorpe-estate-leeds" element={<LeedsGreenThorpeEstate/>}/>
<Route path="student-accommodation-in-hough-side-leeds" element={<LeedsHoughSide/>}/>
<Route path="student-accommodation-in-lane-ends-leeds" element={<LeedsLaneEnds/>}/>
<Route path="student-accommodation-in-low-moor-side-leeds" element={<LeedsLowMoorSide/>}/>
<Route path="student-accommodation-in-parkspring-leeds" element={<LeedsParkspring/>}/>
<Route path="student-accommodation-in-dean-head-leeds" element={<LeedsDeanHead/>}/>
<Route path="student-accommodation-in-scotland-leeds" element={<LeedsScotland/>}/>
<Route path="student-accommodation-in-oakwood-leeds" element={<LeedsOakwood/>}/>
<Route path="student-accommodation-in-farnley-leeds" element={<LeedsFarnley/>}/>
<Route path="student-accommodation-in-clarendon-park-leicester" element={<LeicesterClarendonPark/>}/>
<Route path="student-accommodation-in-leicester-city-centre-leicester" element={<LeicesterLeicesterCityCentre/>}/>
<Route path="student-accommodation-in-knighton-leicester" element={<LeicesterKnighton/>}/>
<Route path="student-accommodation-in-sparkenhoe-leicester" element={<LeicesterSparkenhoe/>}/>
<Route path="student-accommodation-in-southfields-leicester" element={<LeicesterSouthfields/>}/>
<Route path="student-accommodation-in-stoneygate-leicester" element={<LeicesterStoneygate/>}/>
<Route path="student-accommodation-in-evington-leicester" element={<LeicesterEvington/>}/>
<Route path="student-accommodation-in-aylestone-park-leicester" element={<LeicesterAylestonePark/>}/>
<Route path="student-accommodation-in-knighton-fields-leicester" element={<LeicesterKnightonFields/>}/>
<Route path="student-accommodation-in-wood-hill-leicester" element={<LeicesterWoodHill/>}/>
<Route path="student-accommodation-in-spinney-hills-leicester" element={<LeicesterSpinneyHills/>}/>
<Route path="student-accommodation-in-highfields-leicester" element={<LeicesterHighfields/>}/>
<Route path="student-accommodation-in-park-vale-leicester" element={<LeicesterParkVale/>}/>
<Route path="student-accommodation-in-western-park-leicester" element={<LeicesterWesternPark/>}/>
<Route path="student-accommodation-in-west-bridge-leicester" element={<LeicesterWestBridge/>}/>
<Route path="student-accommodation-in-dane-hills-leicester" element={<LeicesterDaneHills/>}/>
<Route path="student-accommodation-in-kirby-frith-leicester" element={<LeicesterKirbyFrith/>}/>
<Route path="student-accommodation-in-aylestone-leicester" element={<LeicesterAylestone/>}/>
<Route path="student-accommodation-in-dominion-estate-leicester" element={<LeicesterDominionEstate/>}/>
<Route path="student-accommodation-in-new-parks-estate-leicester" element={<LeicesterNewParksEstate/>}/>
<Route path="student-accommodation-in-newfound-pool-leicester" element={<LeicesterNewfoundPool/>}/>
<Route path="student-accommodation-in-braunstone-frith-leicester" element={<LeicesterBraunstoneFrith/>}/>
<Route path="student-accommodation-in-braunstone-park-leicester" element={<LeicesterBraunstonePark/>}/>
<Route path="student-accommodation-in-abbey-park-leicester" element={<LeicesterAbbeyPark/>}/>
<Route path="student-accommodation-in-frog-island-leicester" element={<LeicesterFrogIsland/>}/>
<Route path="student-accommodation-in-leicester-abbey-leicester" element={<LeicesterLeicesterAbbey/>}/>
<Route path="student-accommodation-in-black-friars-leicester" element={<LeicesterBlackFriars/>}/>
<Route path="student-accommodation-in-stretton-magna-leicester" element={<LeicesterStrettonMagna/>}/>
<Route path="student-accommodation-in-west-knighton-leicester" element={<LeicesterWestKnighton/>}/>
<Route path="student-accommodation-in-leicester-frith-leicester" element={<LeicesterLeicesterFrith/>}/>
<Route path="student-accommodation-in-anstey-pastures-leicester" element={<LeicesterAnsteyPastures/>}/>
<Route path="student-accommodation-in-braunstone-leicester" element={<LeicesterBraunstone/>}/>
<Route path="student-accommodation-in-spencefield-leicester" element={<LeicesterSpencefield/>}/>
<Route path="student-accommodation-in-brayford-side-north-lincoln" element={<LincolnBrayfordSideNorth/>}/>
<Route path="student-accommodation-in-brayford-wharf-north-lincoln" element={<LincolnBrayfordWharfNorth/>}/>
<Route path="student-accommodation-in-newland-lincoln" element={<LincolnNewland/>}/>
<Route path="student-accommodation-in-brayford-wharf-east-lincoln" element={<LincolnBrayfordWharfEast/>}/>
<Route path="student-accommodation-in-brayford-wharf-lincoln" element={<LincolnBrayfordWharf/>}/>
<Route path="student-accommodation-in-new-boultham-lincoln" element={<LincolnNewBoultham/>}/>
<Route path="student-accommodation-in-ermine-lincoln" element={<LincolnErmine/>}/>
<Route path="student-accommodation-in-boultham-lincoln" element={<LincolnBoultham/>}/>
<Route path="student-accommodation-in-lings-lincoln" element={<LincolnLings/>}/>
<Route path="student-accommodation-in-st-catherines-lincoln" element={<LincolnStCatherines/>}/>
<Route path="student-accommodation-in-odder-lincoln" element={<LincolnOdder/>}/>
<Route path="student-accommodation-in-scampton-lincoln" element={<LincolnScampton/>}/>
<Route path="student-accommodation-in-bracebridge-lincoln" element={<LincolnBracebridge/>}/>
<Route path="student-accommodation-in-burton-waters-lincoln" element={<LincolnBurtonWaters/>}/>
<Route path="student-accommodation-in-fallows-lincoln" element={<LincolnFallows/>}/>
<Route path="student-accommodation-in-wavertree-liverpool" element={<LiverpoolWavertree/>}/>
<Route path="student-accommodation-in-kensington-liverpool" element={<LiverpoolKensington/>}/>
<Route path="student-accommodation-in-aigburth-liverpool" element={<LiverpoolAigburth/>}/>
<Route path="student-accommodation-in-fairfield-liverpool" element={<LiverpoolFairfield/>}/>
<Route path="student-accommodation-in-princes-park-liverpool" element={<LiverpoolPrincesPark/>}/>
<Route path="student-accommodation-in-toxteth-liverpool" element={<LiverpoolToxteth/>}/>
<Route path="student-accommodation-in-edge-hill-liverpool" element={<LiverpoolEdgeHill/>}/>
<Route path="student-accommodation-in-allerton-liverpool" element={<LiverpoolAllerton/>}/>
<Route path="student-accommodation-in-mossley-hill-liverpool" element={<LiverpoolMossleyHill/>}/>
<Route path="student-accommodation-in-low-hill-liverpool" element={<LiverpoolLowHill/>}/>
<Route path="student-accommodation-in-sefton-park-liverpool" element={<LiverpoolSeftonPark/>}/>
<Route path="student-accommodation-in-everton-liverpool" element={<LiverpoolEverton/>}/>
<Route path="student-accommodation-in-georgian-quarter-liverpool" element={<LiverpoolGeorgianQuarter/>}/>
<Route path="student-accommodation-in-elm-park-liverpool" element={<LiverpoolElmPark/>}/>
<Route path="student-accommodation-in-liverpool-lime-street-station-liverpool" element={<LiverpoolLiverpoolLimeStreetStation/>}/>
<Route path="student-accommodation-in-st-michaels-liverpool" element={<LiverpoolStMichaels/>}/>
<Route path="student-accommodation-in-old-swan-liverpool" element={<LiverpoolOldSwan/>}/>
<Route path="student-accommodation-in-tuebrook-liverpool" element={<LiverpoolTuebrook/>}/>
<Route path="student-accommodation-in-kirkdale-liverpool" element={<LiverpoolKirkdale/>}/>
<Route path="student-accommodation-in-stoneycroft-liverpool" element={<LiverpoolStoneycroft/>}/>
<Route path="student-accommodation-in-bevington-bush-liverpool" element={<LiverpoolBevingtonBush/>}/>
<Route path="student-accommodation-in-calderstones-liverpool" element={<LiverpoolCalderstones/>}/>
<Route path="student-accommodation-in-dingle-liverpool" element={<LiverpoolDingle/>}/>
<Route path="student-accommodation-in-otterspool-liverpool" element={<LiverpoolOtterspool/>}/>
<Route path="student-accommodation-in-cabbage-hall-liverpool" element={<LiverpoolCabbageHall/>}/>
<Route path="student-accommodation-in-olive-mount-liverpool" element={<LiverpoolOliveMount/>}/>
<Route path="student-accommodation-in-sandown-park-liverpool" element={<LiverpoolSandownPark/>}/>
<Route path="student-accommodation-in-oak-hill-park-liverpool" element={<LiverpoolOakHillPark/>}/>
<Route path="student-accommodation-in-walton-liverpool" element={<LiverpoolWalton/>}/>
<Route path="student-accommodation-in-anfield-liverpool" element={<LiverpoolAnfield/>}/>
<Route path="student-accommodation-in-seaforth-liverpool" element={<LiverpoolSeaforth/>}/>
<Route path="student-accommodation-in-stanley-liverpool" element={<LiverpoolStanley/>}/>
<Route path="student-accommodation-in-waterloo-liverpool" element={<LiverpoolWaterloo/>}/>
<Route path="student-accommodation-in-woolton-liverpool" element={<LiverpoolWoolton/>}/>
<Route path="student-accommodation-in-clubmoor-liverpool" element={<LiverpoolClubmoor/>}/>
<Route path="student-accommodation-in-aigburth-vale-liverpool" element={<LiverpoolAigburthVale/>}/>
<Route path="student-accommodation-in-bearbrands-liverpool" element={<LiverpoolBearbrands/>}/>
<Route path="student-accommodation-in-farthing-wood-liverpool" element={<LiverpoolFarthingWood/>}/>
<Route path="student-accommodation-in-hillfoot-liverpool" element={<LiverpoolHillfoot/>}/>
<Route path="student-accommodation-in-sutton-oak-liverpool" element={<LiverpoolSuttonOak/>}/>
<Route path="student-accommodation-in-wanstead-park-station-london" element={<LondonWansteadParkStation/>}/>
<Route path="student-accommodation-in-croydon-london" element={<LondonCroydon/>}/>
<Route path="student-accommodation-in-kings-road-area-london" element={<LondonKingsRoadArea/>}/>
<Route path="student-accommodation-in-north-greenwich-london" element={<LondonNorthGreenwich/>}/>
<Route path="student-accommodation-in-greenwich-peninsula-london" element={<LondonGreenwichPeninsula/>}/>
<Route path="student-accommodation-in-fitzrovia-london" element={<LondonFitzrovia/>}/>
<Route path="student-accommodation-in-tower-bridge-london" element={<LondonTowerBridge/>}/>
<Route path="student-accommodation-in-arnos-grove-station-london" element={<LondonArnosGroveStation/>}/>
<Route path="student-accommodation-in-baker-street-station-london" element={<LondonBakerStreetStation/>}/>
<Route path="student-accommodation-in-balham-station-london" element={<LondonBalhamStation/>}/>
<Route path="student-accommodation-in-brondesbury-park-station-london" element={<LondonBrondesburyParkStation/>}/>
<Route path="student-accommodation-in-archway-london" element={<LondonArchway/>}/>
<Route path="student-accommodation-in-mill-harbour-london" element={<LondonMillHarbour/>}/>
<Route path="student-accommodation-in-regents-park-london" element={<LondonRegentsPark/>}/>
<Route path="student-accommodation-in-old-kent-road-area-london" element={<LondonOldKentRoadArea/>}/>
<Route path="student-accommodation-in-royal-oak-station-london" element={<LondonRoyalOakStation/>}/>
<Route path="student-accommodation-in-stroud-green-london" element={<LondonStroudGreen/>}/>
<Route path="student-accommodation-in-south-bank-london" element={<LondonSouthBank/>}/>
<Route path="student-accommodation-in-spitalfields-london" element={<LondonSpitalfields/>}/>
<Route path="student-accommodation-in-arena-tram-stop-london" element={<LondonArenaTramStop/>}/>
<Route path="student-accommodation-in-old-oak-common-london" element={<LondonOldOakCommon/>}/>
<Route path="student-accommodation-in-barking-london" element={<LondonBarking/>}/>
<Route path="student-accommodation-in-bowes-park-station-london" element={<LondonBowesParkStation/>}/>
<Route path="student-accommodation-in-brick-lane-london" element={<LondonBrickLane/>}/>
<Route path="student-accommodation-in-bromley-london" element={<LondonBromley/>}/>
<Route path="student-accommodation-in-ilford-london" element={<LondonIlford/>}/>
<Route path="student-accommodation-in-beckenham-junction-station-london" element={<LondonBeckenhamJunctionStation/>}/>
<Route path="student-accommodation-in-st-pauls-station-london" element={<LondonStPaulsStation/>}/>
<Route path="student-accommodation-in-hainault-station-london" element={<LondonHainaultStation/>}/>
<Route path="student-accommodation-in-west-ham-station-london" element={<LondonWestHamStation/>}/>
<Route path="student-accommodation-in-emerson-park-station-london" element={<LondonEmersonParkStation/>}/>
<Route path="student-accommodation-in-langdon-park-station-london" element={<LondonLangdonParkStation/>}/>
<Route path="student-accommodation-in-wood-street-station-london" element={<LondonWoodStreetStation/>}/>
<Route path="student-accommodation-in-olympic-park-london" element={<LondonOlympicPark/>}/>
<Route path="student-accommodation-in-gipsy-hill-london" element={<LondonGipsyHill/>}/>
<Route path="student-accommodation-in-chelsea-harbour-london" element={<LondonChelseaHarbour/>}/>
<Route path="student-accommodation-in-upney-london" element={<LondonUpney/>}/>
<Route path="student-accommodation-in-kew-london" element={<LondonKew/>}/>
<Route path="student-accommodation-in-dagenham-london" element={<LondonDagenham/>}/>
<Route path="student-accommodation-in-becontree-london" element={<LondonBecontree/>}/>
<Route path="student-accommodation-in-brook-green-london" element={<LondonBrookGreen/>}/>
<Route path="student-accommodation-in-telegraph-hill-london" element={<LondonTelegraphHill/>}/>
<Route path="student-accommodation-in-whitehall-park-london" element={<LondonWhitehallPark/>}/>
<Route path="student-accommodation-in-royal-wharf-london" element={<LondonRoyalWharf/>}/>
<Route path="student-accommodation-in-battersea-power-station-london" element={<LondonBatterseaPowerStation/>}/>
<Route path="student-accommodation-in-deanston-wharf-london" element={<LondonDeanstonWharf/>}/>
<Route path="student-accommodation-in-wood-green-station-london" element={<LondonWoodGreenStation/>}/>
<Route path="student-accommodation-in-blackfriars-station-london" element={<LondonBlackfriarsStation/>}/>
<Route path="student-accommodation-in-bromley-north-station-london" element={<LondonBromleyNorthStation/>}/>
<Route path="student-accommodation-in-alexandra-palace-station-london" element={<LondonAlexandraPalaceStation/>}/>
<Route path="student-accommodation-in-elephant-n-castle--northern--station-london" element={<LondonElephantnCastleNorthernStation/>}/>
<Route path="student-accommodation-in-heron-quays-station-london" element={<LondonHeronQuaysStation/>}/>
<Route path="student-accommodation-in-mile-end-station-london" element={<LondonMileEndStation/>}/>
<Route path="student-accommodation-in-beddington-lane-tram-stop-london" element={<LondonBeddingtonLaneTramStop/>}/>
<Route path="student-accommodation-in-buck-hill-loughborough" element={<LoughboroughBuckHill/>}/>
<Route path="student-accommodation-in-cow-hill-loughborough" element={<LoughboroughCowHill/>}/>
<Route path="student-accommodation-in-southfields-park-loughborough" element={<LoughboroughSouthfieldsPark/>}/>
<Route path="student-accommodation-in-snells-nook-loughborough" element={<LoughboroughSnellsNook/>}/>
<Route path="student-accommodation-in-thorpe-acre-loughborough" element={<LoughboroughThorpeAcre/>}/>
<Route path="student-accommodation-in-garendon-loughborough" element={<LoughboroughGarendon/>}/>
<Route path="student-accommodation-in-dishley-loughborough" element={<LoughboroughDishley/>}/>
<Route path="student-accommodation-in-shelthorpe-loughborough" element={<LoughboroughShelthorpe/>}/>
<Route path="student-accommodation-in-sutton-bonington-loughborough" element={<LoughboroughSuttonBonington/>}/>
<Route path="student-accommodation-in-shepshed-loughborough" element={<LoughboroughShepshed/>}/>
<Route path="student-accommodation-in-sileby-loughborough" element={<LoughboroughSileby/>}/>
<Route path="student-accommodation-in-finney-hill-loughborough" element={<LoughboroughFinneyHill/>}/>
<Route path="student-accommodation-in-park-hill-loughborough" element={<LoughboroughParkHill/>}/>
<Route path="student-accommodation-in-nanpantan-loughborough" element={<LoughboroughNanpantan/>}/>
<Route path="student-accommodation-in-hyde-luton" element={<LutonHyde/>}/>
<Route path="student-accommodation-in-luton-hoo-luton" element={<LutonLutonHoo/>}/>
<Route path="student-accommodation-in-newmill-end-luton" element={<LutonNewmillEnd/>}/>
<Route path="student-accommodation-in-west-hyde-luton" element={<LutonWestHyde/>}/>
<Route path="student-accommodation-in-bury-park-luton" element={<LutonBuryPark/>}/>
<Route path="student-accommodation-in-new-town-luton" element={<LutonNewTown/>}/>
<Route path="student-accommodation-in-park-town-luton" element={<LutonParkTown/>}/>
<Route path="student-accommodation-in-wardown-luton" element={<LutonWardown/>}/>
<Route path="student-accommodation-in-winsdon-hill-luton" element={<LutonWinsdonHill/>}/>
<Route path="student-accommodation-in-south-manchester-manchester" element={<ManchesterSouthManchester/>}/>
<Route path="student-accommodation-in-alma-park-manchester" element={<ManchesterAlmaPark/>}/>
<Route path="student-accommodation-in-albert-park-manchester" element={<ManchesterAlbertPark/>}/>
<Route path="student-accommodation-in-victoria-park-manchester" element={<ManchesterVictoriaPark/>}/>
<Route path="student-accommodation-in-alexandra-park-manchester" element={<ManchesterAlexandraPark/>}/>
<Route path="student-accommodation-in-willow-bank-manchester" element={<ManchesterWillowBank/>}/>
<Route path="student-accommodation-in-east-didsbury-manchester" element={<ManchesterEastDidsbury/>}/>
<Route path="student-accommodation-in-parrs-wood-manchester" element={<ManchesterParrsWood/>}/>
<Route path="student-accommodation-in-fallowfield-manchester" element={<ManchesterFallowfield/>}/>
<Route path="student-accommodation-in-withington-manchester" element={<ManchesterWithington/>}/>
<Route path="student-accommodation-in-ladybarn-manchester" element={<ManchesterLadybarn/>}/>
<Route path="student-accommodation-in-barlow-moor-manchester" element={<ManchesterBarlowMoor/>}/>
<Route path="student-accommodation-in-fielden-park-manchester" element={<ManchesterFieldenPark/>}/>
<Route path="student-accommodation-in-ford-bank-manchester" element={<ManchesterFordBank/>}/>
<Route path="student-accommodation-in-rusholme-manchester" element={<ManchesterRusholme/>}/>
<Route path="student-accommodation-in-market-street-tram-stop-manchester" element={<ManchesterMarketStreetTramStop/>}/>
<Route path="student-accommodation-in-longsight-manchester" element={<ManchesterLongsight/>}/>
<Route path="student-accommodation-in-west-point-manchester" element={<ManchesterWestPoint/>}/>
<Route path="student-accommodation-in-medlock-manchester" element={<ManchesterMedlock/>}/>
<Route path="student-accommodation-in-moss-side-manchester" element={<ManchesterMossSide/>}/>
<Route path="student-accommodation-in-coston-park-manchester" element={<ManchesterCostonPark/>}/>
<Route path="student-accommodation-in-birchfields-manchester" element={<ManchesterBirchfields/>}/>
<Route path="student-accommodation-in-gaythorn-manchester" element={<ManchesterGaythorn/>}/>
<Route path="student-accommodation-in-knott-mill-manchester" element={<ManchesterKnottMill/>}/>
<Route path="student-accommodation-in-holt-town-manchester" element={<ManchesterHoltTown/>}/>
<Route path="student-accommodation-in-shaw-brook-manchester" element={<ManchesterShawBrook/>}/>
<Route path="student-accommodation-in-south-levenshulme-manchester" element={<ManchesterSouthLevenshulme/>}/>
<Route path="student-accommodation-in-broom-lane-end-manchester" element={<ManchesterBroomLaneEnd/>}/>
<Route path="student-accommodation-in-green-end-manchester" element={<ManchesterGreenEnd/>}/>
<Route path="student-accommodation-in-didsbury-manchester" element={<ManchesterDidsbury/>}/>
<Route path="student-accommodation-in-brunswick-manchester" element={<ManchesterBrunswick/>}/>
<Route path="student-accommodation-in-higher-ardwick-manchester" element={<ManchesterHigherArdwick/>}/>
<Route path="student-accommodation-in-burnage-manchester" element={<ManchesterBurnage/>}/>
<Route path="student-accommodation-in-west-didsbury-manchester" element={<ManchesterWestDidsbury/>}/>
<Route path="student-accommodation-in-greenhays-manchester" element={<ManchesterGreenhays/>}/>
<Route path="student-accommodation-in-cornbrook-manchester" element={<ManchesterCornbrook/>}/>
<Route path="student-accommodation-in-st-georges-manchester" element={<ManchesterStGeorges/>}/>
<Route path="student-accommodation-in-hullard-hall-manchester" element={<ManchesterHullardHall/>}/>
<Route path="student-accommodation-in-hulme-manchester" element={<ManchesterHulme/>}/>
<Route path="student-accommodation-in-victoria-manchester" element={<ManchesterVictoria/>}/>
<Route path="student-accommodation-in-strangeways-manchester" element={<ManchesterStrangeways/>}/>
<Route path="student-accommodation-in-chortlton-upon-medlock-manchester" element={<ManchesterChortltonUponMedlock/>}/>
<Route path="student-accommodation-in-mossside-enterprise-park-manchester" element={<ManchesterMosssideEnterprisePark/>}/>
<Route path="student-accommodation-in-castlefield-manchester" element={<ManchesterCastlefield/>}/>
<Route path="student-accommodation-in-darley-park-manchester" element={<ManchesterDarleyPark/>}/>
<Route path="student-accommodation-in-manley-park-manchester" element={<ManchesterManleyPark/>}/>
<Route path="student-accommodation-in-new-windsor-manchester" element={<ManchesterNewWindsor/>}/>
<Route path="student-accommodation-in-barlow-moor-road-manchester" element={<ManchesterBarlowMoorRoad/>}/>
<Route path="student-accommodation-in-brooks-bar-manchester" element={<ManchesterBrooksBar/>}/>
<Route path="student-accommodation-in-ardwick-manchester" element={<ManchesterArdwick/>}/>
<Route path="student-accommodation-in-radcliffe-manchester" element={<ManchesterRadcliffe/>}/>
<Route path="student-accommodation-in-black-lane-manchester" element={<ManchesterBlackLane/>}/>
<Route path="student-accommodation-in-coney-green-manchester" element={<ManchesterConeyGreen/>}/>
<Route path="student-accommodation-in-lightbourne-green-manchester" element={<ManchesterLightbourneGreen/>}/>
<Route path="student-accommodation-in-lower-heaps-manchester" element={<ManchesterLowerHeaps/>}/>
<Route path="student-accommodation-in-outwood-manchester" element={<ManchesterOutwood/>}/>
<Route path="student-accommodation-in-prestolee-manchester" element={<ManchesterPrestolee/>}/>
<Route path="student-accommodation-in-stoneclough-manchester" element={<ManchesterStoneclough/>}/>
<Route path="student-accommodation-in-three-arrow-manchester" element={<ManchesterThreeArrow/>}/>
<Route path="student-accommodation-in-three-arrows-manchester" element={<ManchesterThreeArrows/>}/>
<Route path="student-accommodation-in-ringley-manchester" element={<ManchesterRingley/>}/>
<Route path="student-accommodation-in-bottom-oth-fields-manchester" element={<ManchesterBottomOThFields/>}/>
<Route path="student-accommodation-in-chapelfield-manchester" element={<ManchesterChapelfield/>}/>
<Route path="student-accommodation-in-deans-manchester" element={<ManchesterDeans/>}/>
<Route path="student-accommodation-in-northern-quarter-manchester" element={<ManchesterNorthernQuarter/>}/>
<Route path="student-accommodation-in-ancoats-manchester" element={<ManchesterAncoats/>}/>
<Route path="student-accommodation-in-old-trafford-manchester" element={<ManchesterOldTrafford/>}/>
<Route path="student-accommodation-in-spring-gardens-manchester" element={<ManchesterSpringGardens/>}/>
<Route path="student-accommodation-in-moorside-station-manchester" element={<ManchesterMoorsideStation/>}/>
<Route path="student-accommodation-in-worsley-manchester" element={<ManchesterWorsley/>}/>
<Route path="student-accommodation-in-crowcroft-park-manchester" element={<ManchesterCrowcroftPark/>}/>
<Route path="student-accommodation-in-north-levenshulme-manchester" element={<ManchesterNorthLevenshulme/>}/>
<Route path="student-accommodation-in-trafford-park-manchester" element={<ManchesterTraffordPark/>}/>
<Route path="student-accommodation-in-little-hulton-manchester" element={<ManchesterLittleHulton/>}/>
<Route path="student-accommodation-in-gorton-brook-manchester" element={<ManchesterGortonBrook/>}/>
<Route path="student-accommodation-in-rushford-manchester" element={<ManchesterRushford/>}/>
<Route path="student-accommodation-in-west-gorton-manchester" element={<ManchesterWestGorton/>}/>
<Route path="student-accommodation-in-barton-moss-manchester" element={<ManchesterBartonMoss/>}/>
<Route path="student-accommodation-in-bent-lanes-manchester" element={<ManchesterBentLanes/>}/>
<Route path="student-accommodation-in-chorlton-fold-manchester" element={<ManchesterChorltonFold/>}/>
<Route path="student-accommodation-in-little-bolton-manchester" element={<ManchesterLittleBolton/>}/>
<Route path="student-accommodation-in-monton-manchester" element={<ManchesterMonton/>}/>
<Route path="student-accommodation-in-patricroft-manchester" element={<ManchesterPatricroft/>}/>
<Route path="student-accommodation-in-westwood-park-manchester" element={<ManchesterWestwoodPark/>}/>
<Route path="student-accommodation-in-belle-vue-manchester" element={<ManchesterBelleVue/>}/>
<Route path="student-accommodation-in-alder-forest-manchester" element={<ManchesterAlderForest/>}/>
<Route path="student-accommodation-in-barton-upon-irwell-manchester" element={<ManchesterBartonUponIrwell/>}/>
<Route path="student-accommodation-in-dumplington-manchester" element={<ManchesterDumplington/>}/>
<Route path="student-accommodation-in-hope-manchester" element={<ManchesterHope/>}/>
<Route path="student-accommodation-in-peel-green-manchester" element={<ManchesterPeelGreen/>}/>
<Route path="student-accommodation-in-winton-manchester" element={<ManchesterWinton/>}/>
<Route path="student-accommodation-in-nutsford-vale-manchester" element={<ManchesterNutsfordVale/>}/>
<Route path="student-accommodation-in-mathers-fold-manchester" element={<ManchesterMathersFold/>}/>
<Route path="student-accommodation-in-whalley-range-manchester" element={<ManchesterWhalleyRange/>}/>
<Route path="student-accommodation-in-openshaw-manchester" element={<ManchesterOpenshaw/>}/>
<Route path="student-accommodation-in-whitefield-manchester" element={<ManchesterWhitefield/>}/>
<Route path="student-accommodation-in-cadishead-manchester" element={<ManchesterCadishead/>}/>
<Route path="student-accommodation-in-chorlton-cum-hardy-manchester" element={<ManchesterChorltonCumHardy/>}/>
<Route path="student-accommodation-in-chorltonville-manchester" element={<ManchesterChorltonville/>}/>
<Route path="student-accommodation-in-jenny-green-manchester" element={<ManchesterJennyGreen/>}/>
<Route path="student-accommodation-in-three-lanes-end-manchester" element={<ManchesterThreeLanesEnd/>}/>
<Route path="student-accommodation-in-walkden-manchester" element={<ManchesterWalkden/>}/>
<Route path="student-accommodation-in-beswick-manchester" element={<ManchesterBeswick/>}/>
<Route path="student-accommodation-in-bradford-manchester" element={<ManchesterBradford/>}/>
<Route path="student-accommodation-in-hardy-manchester" element={<ManchesterHardy/>}/>
<Route path="student-accommodation-in-higher-openshaw-manchester" element={<ManchesterHigherOpenshaw/>}/>
<Route path="student-accommodation-in-hough-end-manchester" element={<ManchesterHoughEnd/>}/>
<Route path="student-accommodation-in-longford-park-manchester" element={<ManchesterLongfordPark/>}/>
<Route path="student-accommodation-in-lower-openshaw-manchester" element={<ManchesterLowerOpenshaw/>}/>
<Route path="student-accommodation-in-whitemoss-manchester" element={<ManchesterWhitemoss/>}/>
<Route path="student-accommodation-in-cadishead-moss-manchester" element={<ManchesterCadisheadMoss/>}/>
<Route path="student-accommodation-in-lower-irlam-manchester" element={<ManchesterLowerIrlam/>}/>
<Route path="student-accommodation-in-the-city-manchester" element={<ManchesterTheCity/>}/>
<Route path="student-accommodation-in-woods-end-manchester" element={<ManchesterWoodsEnd/>}/>
<Route path="student-accommodation-in-trafford-distribution-centre-manchester" element={<ManchesterTraffordDistributionCentre/>}/>
<Route path="student-accommodation-in-teesside-middlesbrough" element={<MiddlesbroughTeesside/>}/>
<Route path="student-accommodation-in-ayresome-middlesbrough" element={<MiddlesbroughAyresome/>}/>
<Route path="student-accommodation-in-grove-hill-middlesbrough" element={<MiddlesbroughGroveHill/>}/>
<Route path="student-accommodation-in-belle-vue-middlesbrough" element={<MiddlesbroughBelleVue/>}/>
<Route path="student-accommodation-in-marton-grove-middlesbrough" element={<MiddlesbroughMartonGrove/>}/>
<Route path="student-accommodation-in-longlands-middlesbrough" element={<MiddlesbroughLonglands/>}/>
<Route path="student-accommodation-in-linthorpe-middlesbrough" element={<MiddlesbroughLinthorpe/>}/>
<Route path="student-accommodation-in-battersby-station-middlesbrough" element={<MiddlesbroughBattersbyStation/>}/>
<Route path="student-accommodation-in-north-ormesby-middlesbrough" element={<MiddlesbroughNorthOrmesby/>}/>
<Route path="student-accommodation-in-whinney-banks-middlesbrough" element={<MiddlesbroughWhinneyBanks/>}/>
<Route path="student-accommodation-in-newcastle-upon-tyne-newcastle-upon-tyne" element={<NewcastleuponTyneNewcastleUponTyne/>}/>
<Route path="student-accommodation-in-jesmond-newcastle-upon-tyne" element={<NewcastleuponTyneJesmond/>}/>
<Route path="student-accommodation-in-newcastle-city-centre-newcastle-upon-tyne" element={<NewcastleuponTyneNewcastleCityCentre/>}/>
<Route path="student-accommodation-in-sandyford-newcastle-upon-tyne" element={<NewcastleuponTyneSandyford/>}/>
<Route path="student-accommodation-in-jesmond-vale-newcastle-upon-tyne" element={<NewcastleuponTyneJesmondVale/>}/>
<Route path="student-accommodation-in-wellburn-park-newcastle-upon-tyne" element={<NewcastleuponTyneWellburnPark/>}/>
<Route path="student-accommodation-in-tyneside-newcastle-upon-tyne" element={<NewcastleuponTyneTyneside/>}/>
<Route path="student-accommodation-in-heaton-newcastle-upon-tyne" element={<NewcastleuponTyneHeaton/>}/>
<Route path="student-accommodation-in-north-heaton-newcastle-upon-tyne" element={<NewcastleuponTyneNorthHeaton/>}/>
<Route path="student-accommodation-in-south-jesmond-newcastle-upon-tyne" element={<NewcastleuponTyneSouthJesmond/>}/>
<Route path="student-accommodation-in-west-jesmond-newcastle-upon-tyne" element={<NewcastleuponTyneWestJesmond/>}/>
<Route path="student-accommodation-in-gallowgate-newcastle-upon-tyne" element={<NewcastleuponTyneGallowgate/>}/>
<Route path="student-accommodation-in-quayside-newcastle-upon-tyne" element={<NewcastleuponTyneQuayside/>}/>
<Route path="student-accommodation-in-stepney-newcastle-upon-tyne" element={<NewcastleuponTyneStepney/>}/>
<Route path="student-accommodation-in-shieldfield-newcastle-upon-tyne" element={<NewcastleuponTyneShieldfield/>}/>
<Route path="student-accommodation-in-town-moor-newcastle-upon-tyne" element={<NewcastleuponTyneTownMoor/>}/>
<Route path="student-accommodation-in-brandling-village-newcastle-upon-tyne" element={<NewcastleuponTyneBrandlingVillage/>}/>
<Route path="student-accommodation-in-holland-park-newcastle-upon-tyne" element={<NewcastleuponTyneHollandPark/>}/>
<Route path="student-accommodation-in-gosforth-newcastle-upon-tyne" element={<NewcastleuponTyneGosforth/>}/>
<Route path="student-accommodation-in-fenham-newcastle-upon-tyne" element={<NewcastleuponTyneFenham/>}/>
<Route path="student-accommodation-in-low-benwell-newcastle-upon-tyne" element={<NewcastleuponTyneLowBenwell/>}/>
<Route path="student-accommodation-in-battlefield-newcastle-upon-tyne" element={<NewcastleuponTyneBattlefield/>}/>
<Route path="student-accommodation-in-the-leazes-newcastle-upon-tyne" element={<NewcastleuponTyneTheLeazes/>}/>
<Route path="student-accommodation-in-castle-garth-newcastle-upon-tyne" element={<NewcastleuponTyneCastleGarth/>}/>
<Route path="student-accommodation-in-spital-tongues-newcastle-upon-tyne" element={<NewcastleuponTyneSpitalTongues/>}/>
<Route path="student-accommodation-in-haymarket-newcastle-upon-tyne" element={<NewcastleuponTyneHaymarket/>}/>
<Route path="student-accommodation-in-barras-bridge-newcastle-upon-tyne" element={<NewcastleuponTyneBarrasBridge/>}/>
<Route path="student-accommodation-in-eldon-square-newcastle-upon-tyne" element={<NewcastleuponTyneEldonSquare/>}/>
<Route path="student-accommodation-in-new-mills-newcastle-upon-tyne" element={<NewcastleuponTyneNewMills/>}/>
<Route path="student-accommodation-in-forth-banks-newcastle-upon-tyne" element={<NewcastleuponTyneForthBanks/>}/>
<Route path="student-accommodation-in-arthurs-hill-newcastle-upon-tyne" element={<NewcastleuponTyneArthursHill/>}/>
<Route path="student-accommodation-in-cruddas-park-estate-newcastle-upon-tyne" element={<NewcastleuponTyneCruddasParkEstate/>}/>
<Route path="student-accommodation-in-rye-hill-newcastle-upon-tyne" element={<NewcastleuponTyneRyeHill/>}/>
<Route path="student-accommodation-in-cruddas-park-newcastle-upon-tyne" element={<NewcastleuponTyneCruddasPark/>}/>
<Route path="student-accommodation-in-south-gosforth-newcastle-upon-tyne" element={<NewcastleuponTyneSouthGosforth/>}/>
<Route path="student-accommodation-in-kings-manor-newcastle-upon-tyne" element={<NewcastleuponTyneKingsManor/>}/>
<Route path="student-accommodation-in-montagu-newcastle-upon-tyne" element={<NewcastleuponTyneMontagu/>}/>
<Route path="student-accommodation-in-montagu-estate-newcastle-upon-tyne" element={<NewcastleuponTyneMontaguEstate/>}/>
<Route path="student-accommodation-in-montague-newcastle-upon-tyne" element={<NewcastleuponTyneMontague/>}/>
<Route path="student-accommodation-in-byker-newcastle-upon-tyne" element={<NewcastleuponTyneByker/>}/>
<Route path="student-accommodation-in-chopwell-newcastle-upon-tyne" element={<NewcastleuponTyneChopwell/>}/>
<Route path="student-accommodation-in-kenton-newcastle-upon-tyne" element={<NewcastleuponTyneKenton/>}/>
<Route path="student-accommodation-in-st-peters-estate-newcastle-upon-tyne" element={<NewcastleuponTyneStPetersEstate/>}/>
<Route path="student-accommodation-in-st-lawrence-newcastle-upon-tyne" element={<NewcastleuponTyneStLawrence/>}/>
<Route path="student-accommodation-in-nuns-moor-newcastle-upon-tyne" element={<NewcastleuponTyneNunsMoor/>}/>
<Route path="student-accommodation-in-ouseburn-newcastle-upon-tyne" element={<NewcastleuponTyneOuseburn/>}/>
<Route path="student-accommodation-in-north-fenham-newcastle-upon-tyne" element={<NewcastleuponTyneNorthFenham/>}/>
<Route path="student-accommodation-in-st-peters-newcastle-upon-tyne" element={<NewcastleuponTyneStPeters/>}/>
<Route path="student-accommodation-in-st-peters-basin-newcastle-upon-tyne" element={<NewcastleuponTyneStPetersBasin/>}/>
<Route path="student-accommodation-in-byker-village-newcastle-upon-tyne" element={<NewcastleuponTyneBykerVillage/>}/>
<Route path="student-accommodation-in-st-anthonys-estate-newcastle-upon-tyne" element={<NewcastleuponTyneStAnthonysEstate/>}/>
<Route path="student-accommodation-in-middlewood-park-newcastle-upon-tyne" element={<NewcastleuponTyneMiddlewoodPark/>}/>
<Route path="student-accommodation-in-wingrove-newcastle-upon-tyne" element={<NewcastleuponTyneWingrove/>}/>
<Route path="student-accommodation-in-watergate-estate-newcastle-upon-tyne" element={<NewcastleuponTyneWatergateEstate/>}/>
<Route path="student-accommodation-in-old-walker-newcastle-upon-tyne" element={<NewcastleuponTyneOldWalker/>}/>
<Route path="student-accommodation-in-whickham-newcastle-upon-tyne" element={<NewcastleuponTyneWhickham/>}/>
<Route path="student-accommodation-in-wideopen-newcastle-upon-tyne" element={<NewcastleuponTyneWideopen/>}/>
<Route path="student-accommodation-in-benton-newcastle-upon-tyne" element={<NewcastleuponTyneBenton/>}/>
<Route path="student-accommodation-in-benwell-newcastle-upon-tyne" element={<NewcastleuponTyneBenwell/>}/>
<Route path="student-accommodation-in-high-heaton-newcastle-upon-tyne" element={<NewcastleuponTyneHighHeaton/>}/>
<Route path="student-accommodation-in-grainger-park-newcastle-upon-tyne" element={<NewcastleuponTyneGraingerPark/>}/>
<Route path="student-accommodation-in-kenton-bank-foot-newcastle-upon-tyne" element={<NewcastleuponTyneKentonBankFoot/>}/>
<Route path="student-accommodation-in-north-gosforth-newcastle-upon-tyne" element={<NewcastleuponTyneNorthGosforth/>}/>
<Route path="student-accommodation-in-scotswood-newcastle-upon-tyne" element={<NewcastleuponTyneScotswood/>}/>
<Route path="student-accommodation-in-west-moor-newcastle-upon-tyne" element={<NewcastleuponTyneWestMoor/>}/>
<Route path="student-accommodation-in-walker-newcastle-upon-tyne" element={<NewcastleuponTyneWalker/>}/>
<Route path="student-accommodation-in-barronswood-newcastle-upon-tyne" element={<NewcastleuponTyneBarronswood/>}/>
<Route path="student-accommodation-in-kenton-bar-estate-newcastle-upon-tyne" element={<NewcastleuponTyneKentonBarEstate/>}/>
<Route path="student-accommodation-in-moorhead-newcastle-upon-tyne" element={<NewcastleuponTyneMoorhead/>}/>
<Route path="student-accommodation-in-walkerdene-newcastle-upon-tyne" element={<NewcastleuponTyneWalkerdene/>}/>
<Route path="student-accommodation-in-west-benwell-newcastle-upon-tyne" element={<NewcastleuponTyneWestBenwell/>}/>
<Route path="student-accommodation-in-north-kenton-newcastle-upon-tyne" element={<NewcastleuponTyneNorthKenton/>}/>
<Route path="student-accommodation-in-regent-farm-newcastle-upon-tyne" element={<NewcastleuponTyneRegentFarm/>}/>
<Route path="student-accommodation-in-woodlands-park-newcastle-upon-tyne" element={<NewcastleuponTyneWoodlandsPark/>}/>
<Route path="student-accommodation-in-daisy-hill-newcastle-upon-tyne" element={<NewcastleuponTyneDaisyHill/>}/>
<Route path="student-accommodation-in-byermoor-newcastle-upon-tyne" element={<NewcastleuponTyneByermoor/>}/>
<Route path="student-accommodation-in-fellside-park-newcastle-upon-tyne" element={<NewcastleuponTyneFellsidePark/>}/>
<Route path="student-accommodation-in-streetgate-newcastle-upon-tyne" element={<NewcastleuponTyneStreetgate/>}/>
<Route path="student-accommodation-in-bells-close-newcastle-upon-tyne" element={<NewcastleuponTyneBellsClose/>}/>
<Route path="student-accommodation-in-cragston-park-newcastle-upon-tyne" element={<NewcastleuponTyneCragstonPark/>}/>
<Route path="student-accommodation-in-delaval-newcastle-upon-tyne" element={<NewcastleuponTyneDelaval/>}/>
<Route path="student-accommodation-in-kenton-bar-newcastle-upon-tyne" element={<NewcastleuponTyneKentonBar/>}/>
<Route path="student-accommodation-in-old-benwell-newcastle-upon-tyne" element={<NewcastleuponTyneOldBenwell/>}/>
<Route path="student-accommodation-in-pendower-newcastle-upon-tyne" element={<NewcastleuponTynePendower/>}/>
<Route path="student-accommodation-in-south-benwell-newcastle-upon-tyne" element={<NewcastleuponTyneSouthBenwell/>}/>
<Route path="student-accommodation-in-regent-centre-newcastle-upon-tyne" element={<NewcastleuponTyneRegentCentre/>}/>
<Route path="student-accommodation-in-regent-farm-estate-newcastle-upon-tyne" element={<NewcastleuponTyneRegentFarmEstate/>}/>
<Route path="student-accommodation-in-pendower-estate-newcastle-upon-tyne" element={<NewcastleuponTynePendowerEstate/>}/>
<Route path="student-accommodation-in-castle-view-newport" element={<NewportCastleView/>}/>
<Route path="student-accommodation-in-chetwynd-end-newport" element={<NewportChetwyndEnd/>}/>
<Route path="student-accommodation-in-edgmond-manor-newport" element={<NewportEdgmondManor/>}/>
<Route path="student-accommodation-in-cheneyhill-newport" element={<NewportCheneyhill/>}/>
<Route path="student-accommodation-in-kings-head-park-newport" element={<NewportKingsHeadPark/>}/>
<Route path="student-accommodation-in-islington-newport" element={<NewportIslington/>}/>
<Route path="student-accommodation-in-lower-bar-newport" element={<NewportLowerBar/>}/>
<Route path="student-accommodation-in-pitchcroft-newport" element={<NewportPitchcroft/>}/>
<Route path="student-accommodation-in-summerhill-newport" element={<NewportSummerhill/>}/>
<Route path="student-accommodation-in-upper-bar-newport" element={<NewportUpperBar/>}/>
<Route path="student-accommodation-in-edgmond-park-newport" element={<NewportEdgmondPark/>}/>
<Route path="student-accommodation-in-edgmond-marsh-newport" element={<NewportEdgmondMarsh/>}/>
<Route path="student-accommodation-in-wrekin-view-park-newport" element={<NewportWrekinViewPark/>}/>
<Route path="student-accommodation-in-forton-glade-newport" element={<NewportFortonGlade/>}/>
<Route path="student-accommodation-in-beech-fields-newport" element={<NewportBeechFields/>}/>
<Route path="student-accommodation-in-conquermoor-heath-newport" element={<NewportConquermoorHeath/>}/>
<Route path="student-accommodation-in-aqualate-newport" element={<NewportAqualate/>}/>
<Route path="student-accommodation-in-bromstead-heath-newport" element={<NewportBromsteadHeath/>}/>
<Route path="student-accommodation-in-church-aston-newport" element={<NewportChurchAston/>}/>
<Route path="student-accommodation-in-lilleshall-newport" element={<NewportLilleshall/>}/>
<Route path="student-accommodation-in-edgmond-newport" element={<NewportEdgmond/>}/>
<Route path="student-accommodation-in-tibberton-newport" element={<NewportTibberton/>}/>
<Route path="student-accommodation-in-town-centre-northampton" element={<NorthamptonTownCentre/>}/>
<Route path="student-accommodation-in-kingsley-park-northampton" element={<NorthamptonKingsleyPark/>}/>
<Route path="student-accommodation-in-phippsville-northampton" element={<NorthamptonPhippsville/>}/>
<Route path="student-accommodation-in-abington-northampton" element={<NorthamptonAbington/>}/>
<Route path="student-accommodation-in-the-mounts-northampton" element={<NorthamptonTheMounts/>}/>
<Route path="student-accommodation-in-mounts-northampton" element={<NorthamptonMounts/>}/>
<Route path="student-accommodation-in-kingsthorpe-northampton" element={<NorthamptonKingsthorpe/>}/>
<Route path="student-accommodation-in-kingsley-northampton" element={<NorthamptonKingsley/>}/>
<Route path="student-accommodation-in-queens-park-northampton" element={<NorthamptonQueensPark/>}/>
<Route path="student-accommodation-in-far-cotton-northampton" element={<NorthamptonFarCotton/>}/>
<Route path="student-accommodation-in-roselands-northampton" element={<NorthamptonRoselands/>}/>
<Route path="student-accommodation-in-grosvenor-centre-northampton" element={<NorthamptonGrosvenorCentre/>}/>
<Route path="student-accommodation-in-briar-hill-northampton" element={<NorthamptonBriarHill/>}/>
<Route path="student-accommodation-in-delapre-northampton" element={<NorthamptonDelapre/>}/>
<Route path="student-accommodation-in-kingsthorpe-hollow-northampton" element={<NorthamptonKingsthorpeHollow/>}/>
<Route path="student-accommodation-in-mereway-northampton" element={<NorthamptonMereway/>}/>
<Route path="student-accommodation-in-semilong-northampton" element={<NorthamptonSemilong/>}/>
<Route path="student-accommodation-in-danefield-northampton" element={<NorthamptonDanefield/>}/>
<Route path="student-accommodation-in-monks-park-northampton" element={<NorthamptonMonksPark/>}/>
<Route path="student-accommodation-in-hill-top-northampton" element={<NorthamptonHillTop/>}/>
<Route path="student-accommodation-in-rushmere-northampton" element={<NorthamptonRushmere/>}/>
<Route path="student-accommodation-in-st-davids-northampton" element={<NorthamptonStDavids/>}/>
<Route path="student-accommodation-in-cogenhoe-northampton" element={<NorthamptonCogenhoe/>}/>
<Route path="student-accommodation-in-baulmsholme-northampton" element={<NorthamptonBaulmsholme/>}/>
<Route path="student-accommodation-in-derngate-northampton" element={<NorthamptonDerngate/>}/>
<Route path="student-accommodation-in-links-view-northampton" element={<NorthamptonLinksView/>}/>
<Route path="student-accommodation-in-mill-meadow-northampton" element={<NorthamptonMillMeadow/>}/>
<Route path="student-accommodation-in-poets-corner-northampton" element={<NorthamptonPoetsCorner/>}/>
<Route path="student-accommodation-in-black-lion-hill-northampton" element={<NorthamptonBlackLionHill/>}/>
<Route path="student-accommodation-in-marlpit-estate-norwich" element={<NorwichMarlpitEstate/>}/>
<Route path="student-accommodation-in-larkman-estate-norwich" element={<NorwichLarkmanEstate/>}/>
<Route path="student-accommodation-in-earlham-norwich" element={<NorwichEarlham/>}/>
<Route path="student-accommodation-in-west-earlham-norwich" element={<NorwichWestEarlham/>}/>
<Route path="student-accommodation-in-earlham-rise-norwich" element={<NorwichEarlhamRise/>}/>
<Route path="student-accommodation-in-norwich-city-centre-norwich" element={<NorwichNorwichCityCentre/>}/>
<Route path="student-accommodation-in-eaton-norwich" element={<NorwichEaton/>}/>
<Route path="student-accommodation-in-bowthorpe-norwich" element={<NorwichBowthorpe/>}/>
<Route path="student-accommodation-in-three-score-norwich" element={<NorwichThreeScore/>}/>
<Route path="student-accommodation-in-heigham-norwich" element={<NorwichHeigham/>}/>
<Route path="student-accommodation-in-chapel-break-norwich" element={<NorwichChapelBreak/>}/>
<Route path="student-accommodation-in-cloverhill-norwich" element={<NorwichCloverhill/>}/>
<Route path="student-accommodation-in-bracondale-norwich" element={<NorwichBracondale/>}/>
<Route path="student-accommodation-in-chapelfield-grove-norwich" element={<NorwichChapelfieldGrove/>}/>
<Route path="student-accommodation-in-new-lakenham-norwich" element={<NorwichNewLakenham/>}/>
<Route path="student-accommodation-in-richmond-hill-norwich" element={<NorwichRichmondHill/>}/>
<Route path="student-accommodation-in-scoles-green-norwich" element={<NorwichScolesGreen/>}/>
<Route path="student-accommodation-in-thorpe-norwich" element={<NorwichThorpe/>}/>
<Route path="student-accommodation-in-heigham-grove-norwich" element={<NorwichHeighamGrove/>}/>
<Route path="student-accommodation-in-new-catton-norwich" element={<NorwichNewCatton/>}/>
<Route path="student-accommodation-in-thorpe-hamlet-norwich" element={<NorwichThorpeHamlet/>}/>
<Route path="student-accommodation-in-lower-hellesdon-norwich" element={<NorwichLowerHellesdon/>}/>
<Route path="student-accommodation-in-mile-cross-norwich" element={<NorwichMileCross/>}/>
<Route path="student-accommodation-in-costessey-norwich" element={<NorwichCostessey/>}/>
<Route path="student-accommodation-in-shipfield-norwich" element={<NorwichShipfield/>}/>
<Route path="student-accommodation-in-plumstead-estate-norwich" element={<NorwichPlumsteadEstate/>}/>
<Route path="student-accommodation-in-new-costessey-norwich" element={<NorwichNewCostessey/>}/>
<Route path="student-accommodation-in-west-pottergate-norwich" element={<NorwichWestPottergate/>}/>
<Route path="student-accommodation-in-trowse-newton-norwich" element={<NorwichTrowseNewton/>}/>
<Route path="student-accommodation-in-cringleford-norwich" element={<NorwichCringleford/>}/>
<Route path="student-accommodation-in-costessey-park-norwich" element={<NorwichCostesseyPark/>}/>
<Route path="student-accommodation-in-mousehold-norwich" element={<NorwichMousehold/>}/>
<Route path="student-accommodation-in-trowse-millgate-norwich" element={<NorwichTrowseMillgate/>}/>
<Route path="student-accommodation-in-tuckswood-norwich" element={<NorwichTuckswood/>}/>
<Route path="student-accommodation-in-lenton-nottingham" element={<NottinghamLenton/>}/>
<Route path="student-accommodation-in-old-lenton-nottingham" element={<NottinghamOldLenton/>}/>
<Route path="student-accommodation-in-old-radford-nottingham" element={<NottinghamOldRadford/>}/>
<Route path="student-accommodation-in-new-lenton-nottingham" element={<NottinghamNewLenton/>}/>
<Route path="student-accommodation-in-nottingham-city-centre-nottingham" element={<NottinghamNottinghamCityCentre/>}/>
<Route path="student-accommodation-in-arboretum-nottingham" element={<NottinghamArboretum/>}/>
<Route path="student-accommodation-in-beeston-nottingham" element={<NottinghamBeeston/>}/>
<Route path="student-accommodation-in-dunkirk-nottingham" element={<NottinghamDunkirk/>}/>
<Route path="student-accommodation-in-forest-fields-nottingham" element={<NottinghamForestFields/>}/>
<Route path="student-accommodation-in-west-bridgford-nottingham" element={<NottinghamWestBridgford/>}/>
<Route path="student-accommodation-in-lace-market-nottingham" element={<NottinghamLaceMarket/>}/>
<Route path="student-accommodation-in-st-anns-nottingham" element={<NottinghamStAnns/>}/>
<Route path="student-accommodation-in-hyson-green-nottingham" element={<NottinghamHysonGreen/>}/>
<Route path="student-accommodation-in-bobbers-mill-nottingham" element={<NottinghamBobbersMill/>}/>
<Route path="student-accommodation-in-wilford-hill-nottingham" element={<NottinghamWilfordHill/>}/>
<Route path="student-accommodation-in-mapperley-nottingham" element={<NottinghamMapperley/>}/>
<Route path="student-accommodation-in-compton-acres-nottingham" element={<NottinghamComptonAcres/>}/>
<Route path="student-accommodation-in-university-park-nottingham" element={<NottinghamUniversityPark/>}/>
<Route path="student-accommodation-in-wollaton-nottingham" element={<NottinghamWollaton/>}/>
<Route path="student-accommodation-in-mapperley-park-nottingham" element={<NottinghamMapperleyPark/>}/>
<Route path="student-accommodation-in-hockley-nottingham" element={<NottinghamHockley/>}/>
<Route path="student-accommodation-in-radford-nottingham" element={<NottinghamRadford/>}/>
<Route path="student-accommodation-in-the-park-nottingham" element={<NottinghamThePark/>}/>
<Route path="student-accommodation-in-adbolton-nottingham" element={<NottinghamAdbolton/>}/>
<Route path="student-accommodation-in-chilwell-nottingham" element={<NottinghamChilwell/>}/>
<Route path="student-accommodation-in-sneinton-nottingham" element={<NottinghamSneinton/>}/>
<Route path="student-accommodation-in-arno-vale-nottingham" element={<NottinghamArnoVale/>}/>
<Route path="student-accommodation-in-sherwood-rise-nottingham" element={<NottinghamSherwoodRise/>}/>
<Route path="student-accommodation-in-thorneywood-nottingham" element={<NottinghamThorneywood/>}/>
<Route path="student-accommodation-in-lenton-abbey-nottingham" element={<NottinghamLentonAbbey/>}/>
<Route path="student-accommodation-in-regents-park-nottingham" element={<NottinghamRegentsPark/>}/>
<Route path="student-accommodation-in-edwalton-park-nottingham" element={<NottinghamEdwaltonPark/>}/>
<Route path="student-accommodation-in-edwalton-grange-nottingham" element={<NottinghamEdwaltonGrange/>}/>
<Route path="student-accommodation-in-southfield-rise-nottingham" element={<NottinghamSouthfieldRise/>}/>
<Route path="student-accommodation-in-spring-meadows-nottingham" element={<NottinghamSpringMeadows/>}/>
<Route path="student-accommodation-in-carlton-nottingham" element={<NottinghamCarlton/>}/>
<Route path="student-accommodation-in-bramcote-nottingham" element={<NottinghamBramcote/>}/>
<Route path="student-accommodation-in-toton-nottingham" element={<NottinghamToton/>}/>
<Route path="student-accommodation-in-beeston-rylands-nottingham" element={<NottinghamBeestonRylands/>}/>
<Route path="student-accommodation-in-lady-bay-nottingham" element={<NottinghamLadyBay/>}/>
<Route path="student-accommodation-in-clifton-nottingham" element={<NottinghamClifton/>}/>
<Route path="student-accommodation-in-meadows-nottingham" element={<NottinghamMeadows/>}/>
<Route path="student-accommodation-in-east-midlands-parkway-station-nottingham" element={<NottinghamEastMidlandsParkwayStation/>}/>
<Route path="student-accommodation-in-new-basford-nottingham" element={<NottinghamNewBasford/>}/>
<Route path="student-accommodation-in-sherwood-nottingham" element={<NottinghamSherwood/>}/>
<Route path="student-accommodation-in-heathfield-nottingham" element={<NottinghamHeathfield/>}/>
<Route path="student-accommodation-in-glapton-nottingham" element={<NottinghamGlapton/>}/>
<Route path="student-accommodation-in-carrington-nottingham" element={<NottinghamCarrington/>}/>
<Route path="student-accommodation-in-basford-nottingham" element={<NottinghamBasford/>}/>
<Route path="student-accommodation-in-aspley-nottingham" element={<NottinghamAspley/>}/>
<Route path="student-accommodation-in-porchester-nottingham" element={<NottinghamPorchester/>}/>
<Route path="student-accommodation-in-strelley-estate-nottingham" element={<NottinghamStrelleyEstate/>}/>
<Route path="student-accommodation-in-clifton-south-tram-stop-nottingham" element={<NottinghamCliftonSouthTramStop/>}/>
<Route path="student-accommodation-in-beechdale-nottingham" element={<NottinghamBeechdale/>}/>
<Route path="student-accommodation-in-bramcote-hills-nottingham" element={<NottinghamBramcoteHills/>}/>
<Route path="student-accommodation-in-wollaton-vale-nottingham" element={<NottinghamWollatonVale/>}/>
<Route path="student-accommodation-in-arnold-nottingham" element={<NottinghamArnold/>}/>
<Route path="student-accommodation-in-stapleford-nottingham" element={<NottinghamStapleford/>}/>
<Route path="student-accommodation-in-wilford-nottingham" element={<NottinghamWilford/>}/>
<Route path="student-accommodation-in-whitemoor-nottingham" element={<NottinghamWhitemoor/>}/>
<Route path="student-accommodation-in-netherfield-station-nottingham" element={<NottinghamNetherfieldStation/>}/>
<Route path="student-accommodation-in-church-field-gardens-ormskirk" element={<OrmskirkChurchFieldGardens/>}/>
<Route path="student-accommodation-in-aughton-park-ormskirk" element={<OrmskirkAughtonPark/>}/>
<Route path="student-accommodation-in-priory-grove-ormskirk" element={<OrmskirkPrioryGrove/>}/>
<Route path="student-accommodation-in-priory-park-ormskirk" element={<OrmskirkPrioryPark/>}/>
<Route path="student-accommodation-in-scarth-hill-ormskirk" element={<OrmskirkScarthHill/>}/>
<Route path="student-accommodation-in-clock-house-ormskirk" element={<OrmskirkClockHouse/>}/>
<Route path="student-accommodation-in-lathom-ormskirk" element={<OrmskirkLathom/>}/>
<Route path="student-accommodation-in-scarisbrick-ormskirk" element={<OrmskirkScarisbrick/>}/>
<Route path="student-accommodation-in-burscough-ormskirk" element={<OrmskirkBurscough/>}/>
<Route path="student-accommodation-in-ormskirk-station-ormskirk" element={<OrmskirkOrmskirkStation/>}/>
<Route path="student-accommodation-in-cowley-oxford" element={<OxfordCowley/>}/>
<Route path="student-accommodation-in-temple-cowley-oxford" element={<OxfordTempleCowley/>}/>
<Route path="student-accommodation-in-st-clements-oxford" element={<OxfordStClements/>}/>
<Route path="student-accommodation-in-headington-oxford" element={<OxfordHeadington/>}/>
<Route path="student-accommodation-in-new-headington-oxford" element={<OxfordNewHeadington/>}/>
<Route path="student-accommodation-in-slade-park-oxford" element={<OxfordSladePark/>}/>
<Route path="student-accommodation-in-open-magdalen-oxford" element={<OxfordOpenMagdalen/>}/>
<Route path="student-accommodation-in-old-headington-oxford" element={<OxfordOldHeadington/>}/>
<Route path="student-accommodation-in-florence-park-oxford" element={<OxfordFlorencePark/>}/>
<Route path="student-accommodation-in-rose-hill-oxford" element={<OxfordRoseHill/>}/>
<Route path="student-accommodation-in-oxford-city-centre-oxford" element={<OxfordOxfordCityCentre/>}/>
<Route path="student-accommodation-in-jericho-oxford" element={<OxfordJericho/>}/>
<Route path="student-accommodation-in-bayswater-oxford" element={<OxfordBayswater/>}/>
<Route path="student-accommodation-in-headington-quarry-oxford" element={<OxfordHeadingtonQuarry/>}/>
<Route path="student-accommodation-in-sandhills-oxford" element={<OxfordSandhills/>}/>
<Route path="student-accommodation-in-sandhills-estate-oxford" element={<OxfordSandhillsEstate/>}/>
<Route path="student-accommodation-in-wood-farm-oxford" element={<OxfordWoodFarm/>}/>
<Route path="student-accommodation-in-risinghurst-oxford" element={<OxfordRisinghurst/>}/>
<Route path="student-accommodation-in-park-town-oxford" element={<OxfordParkTown/>}/>
<Route path="student-accommodation-in-marston-oxford" element={<OxfordMarston/>}/>
<Route path="student-accommodation-in-new-hinksey-oxford" element={<OxfordNewHinksey/>}/>
<Route path="student-accommodation-in-new-marston-oxford" element={<OxfordNewMarston/>}/>
<Route path="student-accommodation-in-headington-hill-oxford" element={<OxfordHeadingtonHill/>}/>
<Route path="student-accommodation-in-grandpont-oxford" element={<OxfordGrandpont/>}/>
<Route path="student-accommodation-in-northway-oxford" element={<OxfordNorthway/>}/>
<Route path="student-accommodation-in-osney-island-oxford" element={<OxfordOsneyIsland/>}/>
<Route path="student-accommodation-in-new-osney-oxford" element={<OxfordNewOsney/>}/>
<Route path="student-accommodation-in-walton-manor-oxford" element={<OxfordWaltonManor/>}/>
<Route path="student-accommodation-in-osney-oxford" element={<OxfordOsney/>}/>
<Route path="student-accommodation-in-summertown-oxford" element={<OxfordSummertown/>}/>
<Route path="student-accommodation-in-new-botley-oxford" element={<OxfordNewBotley/>}/>
<Route path="student-accommodation-in-old-botley-oxford" element={<OxfordOldBotley/>}/>
<Route path="student-accommodation-in-southern-slope-estate-oxford" element={<OxfordSouthernSlopeEstate/>}/>
<Route path="student-accommodation-in-yarnells-hill-oxford" element={<OxfordYarnellsHill/>}/>
<Route path="student-accommodation-in-barton-oxford" element={<OxfordBarton/>}/>
<Route path="student-accommodation-in-old-marston-oxford" element={<OxfordOldMarston/>}/>
<Route path="student-accommodation-in-sunnymead-oxford" element={<OxfordSunnymead/>}/>
<Route path="student-accommodation-in-cutteslowe-oxford" element={<OxfordCutteslowe/>}/>
<Route path="student-accommodation-in-chawley-oxford" element={<OxfordChawley/>}/>
<Route path="student-accommodation-in-iffley-oxford" element={<OxfordIffley/>}/>
<Route path="student-accommodation-in-botley-oxford" element={<OxfordBotley/>}/>
<Route path="student-accommodation-in-cumnor-hill-oxford" element={<OxfordCumnorHill/>}/>
<Route path="student-accommodation-in-rockley-heath-oxford" element={<OxfordRockleyHeath/>}/>
<Route path="student-accommodation-in-dean-court-oxford" element={<OxfordDeanCourt/>}/>
<Route path="student-accommodation-in-littlemore-oxford" element={<OxfordLittlemore/>}/>
<Route path="student-accommodation-in-blackbird-leys-oxford" element={<OxfordBlackbirdLeys/>}/>
<Route path="student-accommodation-in-shortroods-paisley" element={<PaisleyShortroods/>}/>
<Route path="student-accommodation-in-mutley-plymouth" element={<PlymouthMutley/>}/>
<Route path="student-accommodation-in-pennycomequick-plymouth" element={<PlymouthPennycomequick/>}/>
<Route path="student-accommodation-in-lipson-plymouth" element={<PlymouthLipson/>}/>
<Route path="student-accommodation-in-ford-park-plymouth" element={<PlymouthFordPark/>}/>
<Route path="student-accommodation-in-st-judes-plymouth" element={<PlymouthStJudes/>}/>
<Route path="student-accommodation-in-mount-gould-plymouth" element={<PlymouthMountGould/>}/>
<Route path="student-accommodation-in-greenbank-plymouth" element={<PlymouthGreenbank/>}/>
<Route path="student-accommodation-in-mannamead-plymouth" element={<PlymouthMannamead/>}/>
<Route path="student-accommodation-in-millbridge-plymouth" element={<PlymouthMillbridge/>}/>
<Route path="student-accommodation-in-valletort-plymouth" element={<PlymouthValletort/>}/>
<Route path="student-accommodation-in-the-hoe-plymouth" element={<PlymouthTheHoe/>}/>
<Route path="student-accommodation-in-west-hoe-plymouth" element={<PlymouthWestHoe/>}/>
<Route path="student-accommodation-in-millbay-plymouth" element={<PlymouthMillbay/>}/>
<Route path="student-accommodation-in-millbay-docks-plymouth" element={<PlymouthMillbayDocks/>}/>
<Route path="student-accommodation-in-mainstone-plymouth" element={<PlymouthMainstone/>}/>
<Route path="student-accommodation-in-peverell-plymouth" element={<PlymouthPeverell/>}/>
<Route path="student-accommodation-in-derriford-plymouth" element={<PlymouthDerriford/>}/>
<Route path="student-accommodation-in-barbican-plymouth" element={<PlymouthBarbican/>}/>
<Route path="student-accommodation-in-stonehouse-plymouth" element={<PlymouthStonehouse/>}/>
<Route path="student-accommodation-in-cattedown-plymouth" element={<PlymouthCattedown/>}/>
<Route path="student-accommodation-in-stoke-plymouth" element={<PlymouthStoke/>}/>
<Route path="student-accommodation-in-plymstock-plymouth" element={<PlymouthPlymstock/>}/>
<Route path="student-accommodation-in-prince-rock-plymouth" element={<PlymouthPrinceRock/>}/>
<Route path="student-accommodation-in-elburton-plymouth" element={<PlymouthElburton/>}/>
<Route path="student-accommodation-in-treforest-pontypridd" element={<PontypriddTreforest/>}/>
<Route path="student-accommodation-in-the-graig-pontypridd" element={<PontypriddTheGraig/>}/>
<Route path="student-accommodation-in-trehopcyn-pontypridd" element={<PontypriddTrehopcyn/>}/>
<Route path="student-accommodation-in-troed-rhiw-trwyn-pontypridd" element={<PontypriddTroedRhiwTrwyn/>}/>
<Route path="student-accommodation-in-the-park-pontypridd" element={<PontypriddThePark/>}/>
<Route path="student-accommodation-in-whiterock-pontypridd" element={<PontypriddWhiterock/>}/>
<Route path="student-accommodation-in-ynysangharad-pontypridd" element={<PontypriddYnysangharad/>}/>
<Route path="student-accommodation-in-glyn-taf-pontypridd" element={<PontypriddGlynTaf/>}/>
<Route path="student-accommodation-in-rhydyfelin-pontypridd" element={<PontypriddRhydyfelin/>}/>
<Route path="student-accommodation-in-rhydfelen-pontypridd" element={<PontypriddRhydfelen/>}/>
<Route path="student-accommodation-in-glan-bad-pontypridd" element={<PontypriddGlanBad/>}/>
<Route path="student-accommodation-in-talbot-village-poole" element={<PooleTalbotVillage/>}/>
<Route path="student-accommodation-in-branksome-poole" element={<PooleBranksome/>}/>
<Route path="student-accommodation-in-parkstone-poole" element={<PooleParkstone/>}/>
<Route path="student-accommodation-in-bourne-valley-poole" element={<PooleBourneValley/>}/>
<Route path="student-accommodation-in-bourne-bottom-poole" element={<PooleBourneBottom/>}/>
<Route path="student-accommodation-in-redlands-poole" element={<PooleRedlands/>}/>
<Route path="student-accommodation-in-st-aldhelms-poole" element={<PooleStAldhelms/>}/>
<Route path="student-accommodation-in-branksome-park-poole" element={<PooleBranksomePark/>}/>
<Route path="student-accommodation-in-canford-cliffs-poole" element={<PooleCanfordCliffs/>}/>
<Route path="student-accommodation-in-lower-parkstone-poole" element={<PooleLowerParkstone/>}/>
<Route path="student-accommodation-in-copnor-portsmouth" element={<PortsmouthCopnor/>}/>
<Route path="student-accommodation-in-portsea-portsmouth" element={<PortsmouthPortsea/>}/>
<Route path="student-accommodation-in-old-portsmouth-portsmouth" element={<PortsmouthOldPortsmouth/>}/>
<Route path="student-accommodation-in-fratton-portsmouth" element={<PortsmouthFratton/>}/>
<Route path="student-accommodation-in-buckland-portsmouth" element={<PortsmouthBuckland/>}/>
<Route path="student-accommodation-in-north-end-portsmouth" element={<PortsmouthNorthEnd/>}/>
<Route path="student-accommodation-in-the-point-portsmouth" element={<PortsmouthThePoint/>}/>
<Route path="student-accommodation-in-pembroke-park-portsmouth" element={<PortsmouthPembrokePark/>}/>
<Route path="student-accommodation-in-the-dockyard-portsmouth" element={<PortsmouthTheDockyard/>}/>
<Route path="student-accommodation-in-the-hard-portsmouth" element={<PortsmouthTheHard/>}/>
<Route path="student-accommodation-in-landport-portsmouth" element={<PortsmouthLandport/>}/>
<Route path="student-accommodation-in-mile-end-portsmouth" element={<PortsmouthMileEnd/>}/>
<Route path="student-accommodation-in-rudmore-portsmouth" element={<PortsmouthRudmore/>}/>
<Route path="student-accommodation-in-st-marys-portsmouth" element={<PortsmouthStMarys/>}/>
<Route path="student-accommodation-in-milton-portsmouth" element={<PortsmouthMilton/>}/>
<Route path="student-accommodation-in-portsea-island-portsmouth" element={<PortsmouthPortseaIsland/>}/>
<Route path="student-accommodation-in-gunwharf-quays-portsmouth" element={<PortsmouthGunwharfQuays/>}/>
<Route path="student-accommodation-in-stamshaw-portsmouth" element={<PortsmouthStamshaw/>}/>
<Route path="student-accommodation-in-whale-island-portsmouth" element={<PortsmouthWhaleIsland/>}/>
<Route path="student-accommodation-in-tipner-portsmouth" element={<PortsmouthTipner/>}/>
<Route path="student-accommodation-in-plungington-preston" element={<PrestonPlungington/>}/>
<Route path="student-accommodation-in-adelphi-preston" element={<PrestonAdelphi/>}/>
<Route path="student-accommodation-in-avenham-preston" element={<PrestonAvenham/>}/>
<Route path="student-accommodation-in-maudlands-preston" element={<PrestonMaudlands/>}/>
<Route path="student-accommodation-in-ashton-on-ribble-preston" element={<PrestonAshtonOnRibble/>}/>
<Route path="student-accommodation-in-fulwood-preston" element={<PrestonFulwood/>}/>
<Route path="student-accommodation-in-canaries-preston" element={<PrestonCanaries/>}/>
<Route path="student-accommodation-in-holme-slack-preston" element={<PrestonHolmeSlack/>}/>
<Route path="student-accommodation-in-cadley-preston" element={<PrestonCadley/>}/>
<Route path="student-accommodation-in-nooklands-preston" element={<PrestonNooklands/>}/>
<Route path="student-accommodation-in-sharoe-green-preston" element={<PrestonSharoeGreen/>}/>
<Route path="student-accommodation-in-fernyhalgh-preston" element={<PrestonFernyhalgh/>}/>
<Route path="student-accommodation-in-greenlands-preston" element={<PrestonGreenlands/>}/>
<Route path="student-accommodation-in-ashton-bank-preston" element={<PrestonAshtonBank/>}/>
<Route path="student-accommodation-in-ashton-five-lane-ends-preston" element={<PrestonAshtonFiveLaneEnds/>}/>
<Route path="student-accommodation-in-brookfield-preston" element={<PrestonBrookfield/>}/>
<Route path="student-accommodation-in-larches-preston" element={<PrestonLarches/>}/>
<Route path="student-accommodation-in-longsands-preston" element={<PrestonLongsands/>}/>
<Route path="student-accommodation-in-middleforth-green-preston" element={<PrestonMiddleforthGreen/>}/>
<Route path="student-accommodation-in-moor-nook-preston" element={<PrestonMoorNook/>}/>
<Route path="student-accommodation-in-nutters-platt-preston" element={<PrestonNuttersPlatt/>}/>
<Route path="student-accommodation-in-giller-fold-preston" element={<PrestonGillerFold/>}/>
<Route path="student-accommodation-in-kingsfold-preston" element={<PrestonKingsfold/>}/>
<Route path="student-accommodation-in-greaves-town-preston" element={<PrestonGreavesTown/>}/>
<Route path="student-accommodation-in-lostock-hall-station-preston" element={<PrestonLostockHallStation/>}/>
<Route path="student-accommodation-in-earley-reading" element={<ReadingEarley/>}/>
<Route path="student-accommodation-in-whitley-reading" element={<ReadingWhitley/>}/>
<Route path="student-accommodation-in-southern-hill-reading" element={<ReadingSouthernHill/>}/>
<Route path="student-accommodation-in-new-town-reading" element={<ReadingNewTown/>}/>
<Route path="student-accommodation-in-the-mount-reading" element={<ReadingTheMount/>}/>
<Route path="student-accommodation-in-whiteknights-reading" element={<ReadingWhiteknights/>}/>
<Route path="student-accommodation-in-earley-rise-reading" element={<ReadingEarleyRise/>}/>
<Route path="student-accommodation-in-coley-reading" element={<ReadingColey/>}/>
<Route path="student-accommodation-in-maiden-erlegh-reading" element={<ReadingMaidenErlegh/>}/>
<Route path="student-accommodation-in-lower-earley-reading" element={<ReadingLowerEarley/>}/>
<Route path="student-accommodation-in-great-lea-common-reading" element={<ReadingGreatLeaCommon/>}/>
<Route path="student-accommodation-in-whitley-wood-reading" element={<ReadingWhitleyWood/>}/>
<Route path="student-accommodation-in-spencers-wood-reading" element={<ReadingSpencersWood/>}/>
<Route path="student-accommodation-in-three-mile-cross-reading" element={<ReadingThreeMileCross/>}/>
<Route path="student-accommodation-in-caversham-reading" element={<ReadingCaversham/>}/>
<Route path="student-accommodation-in-lower-caversham-reading" element={<ReadingLowerCaversham/>}/>
<Route path="student-accommodation-in-kings-meadows-reading" element={<ReadingKingsMeadows/>}/>
<Route path="student-accommodation-in-pound-green-reading" element={<ReadingPoundGreen/>}/>
<Route path="student-accommodation-in-seedley-salford" element={<SalfordSeedley/>}/>
<Route path="student-accommodation-in-wallness-salford" element={<SalfordWallness/>}/>
<Route path="student-accommodation-in-pendleton-salford" element={<SalfordPendleton/>}/>
<Route path="student-accommodation-in-irlams-o-th-height-salford" element={<SalfordIrlamsothHeight/>}/>
<Route path="student-accommodation-in-charlestown-salford" element={<SalfordCharlestown/>}/>
<Route path="student-accommodation-in-charlstown-salford" element={<SalfordCharlstown/>}/>
<Route path="student-accommodation-in-brindle-heath-salford" element={<SalfordBrindleHeath/>}/>
<Route path="student-accommodation-in-mcstr-salford" element={<SalfordMCstr/>}/>
<Route path="student-accommodation-in-new-windsor-salford" element={<SalfordNewWindsor/>}/>
<Route path="student-accommodation-in-ordsall-salford" element={<SalfordOrdsall/>}/>
<Route path="student-accommodation-in-little-bolton-salford" element={<SalfordLittleBolton/>}/>
<Route path="student-accommodation-in-scot-hay-salford" element={<SalfordScotHay/>}/>
<Route path="student-accommodation-in-weaste-salford" element={<SalfordWeaste/>}/>
<Route path="student-accommodation-in-langworthy-salford" element={<SalfordLangworthy/>}/>
<Route path="student-accommodation-in-strangeways-salford" element={<SalfordStrangeways/>}/>
<Route path="student-accommodation-in-high-town-salford" element={<SalfordHighTown/>}/>
<Route path="student-accommodation-in-kersal-salford" element={<SalfordKersal/>}/>
<Route path="student-accommodation-in-lower-broughton-salford" element={<SalfordLowerBroughton/>}/>
<Route path="student-accommodation-in-broughton-salford" element={<SalfordBroughton/>}/>
<Route path="student-accommodation-in-kersal-vale-salford" element={<SalfordKersalVale/>}/>
<Route path="student-accommodation-in-lower-kersal-salford" element={<SalfordLowerKersal/>}/>
<Route path="student-accommodation-in-the-cliff-salford" element={<SalfordTheCliff/>}/>
<Route path="student-accommodation-in-the-cliffe-salford" element={<SalfordTheCliffe/>}/>
<Route path="student-accommodation-in-albert-park-salford" element={<SalfordAlbertPark/>}/>
<Route path="student-accommodation-in-broughton-park-salford" element={<SalfordBroughtonPark/>}/>
<Route path="student-accommodation-in-cheetham-salford" element={<SalfordCheetham/>}/>
<Route path="student-accommodation-in-high-broughton-salford" element={<SalfordHighBroughton/>}/>
<Route path="student-accommodation-in-salford-quays-salford" element={<SalfordSalfordQuays/>}/>
<Route path="student-accommodation-in-higher-broughton-salford" element={<SalfordHigherBroughton/>}/>
<Route path="student-accommodation-in-ecclesall-road-area-sheffield" element={<SheffieldEcclesallRoadArea/>}/>
<Route path="student-accommodation-in-crookesmoor-sheffield" element={<SheffieldCrookesmoor/>}/>
<Route path="student-accommodation-in-ecclesall-sheffield" element={<SheffieldEcclesall/>}/>
<Route path="student-accommodation-in-sharrow-vale-sheffield" element={<SheffieldSharrowVale/>}/>
<Route path="student-accommodation-in-brincliffe-sheffield" element={<SheffieldBrincliffe/>}/>
<Route path="student-accommodation-in-crookes-sheffield" element={<SheffieldCrookes/>}/>
<Route path="student-accommodation-in-heavygate-sheffield" element={<SheffieldHeavygate/>}/>
<Route path="student-accommodation-in-carsick-sheffield" element={<SheffieldCarsick/>}/>
<Route path="student-accommodation-in-lydgate-sheffield" element={<SheffieldLydgate/>}/>
<Route path="student-accommodation-in-steel-bank-sheffield" element={<SheffieldSteelBank/>}/>
<Route path="student-accommodation-in-broomhill-sheffield" element={<SheffieldBroomhill/>}/>
<Route path="student-accommodation-in-sheffield-city-centre-sheffield" element={<SheffieldSheffieldCityCentre/>}/>
<Route path="student-accommodation-in-sharrow-sheffield" element={<SheffieldSharrow/>}/>
<Route path="student-accommodation-in-philadelphia-sheffield" element={<SheffieldPhiladelphia/>}/>
<Route path="student-accommodation-in-woodside-sheffield" element={<SheffieldWoodside/>}/>
<Route path="student-accommodation-in-nether-edge-sheffield" element={<SheffieldNetherEdge/>}/>
<Route path="student-accommodation-in-lowfields-sheffield" element={<SheffieldLowfields/>}/>
<Route path="student-accommodation-in-highfields-sheffield" element={<SheffieldHighfields/>}/>
<Route path="student-accommodation-in-upperthorpe-sheffield" element={<SheffieldUpperthorpe/>}/>
<Route path="student-accommodation-in-walkley-sheffield" element={<SheffieldWalkley/>}/>
<Route path="student-accommodation-in-den-bank-sheffield" element={<SheffieldDenBank/>}/>
<Route path="student-accommodation-in-clough-field-sheffield" element={<SheffieldCloughField/>}/>
<Route path="student-accommodation-in-stephen-hill-sheffield" element={<SheffieldStephenHill/>}/>
<Route path="student-accommodation-in-under-tofts-sheffield" element={<SheffieldUnderTofts/>}/>
<Route path="student-accommodation-in-norfolk-park-sheffield" element={<SheffieldNorfolkPark/>}/>
<Route path="student-accommodation-in-hartshead-sheffield" element={<SheffieldHartshead/>}/>
<Route path="student-accommodation-in-moorfoot-sheffield" element={<SheffieldMoorfoot/>}/>
<Route path="student-accommodation-in-banner-cross-sheffield" element={<SheffieldBannerCross/>}/>
<Route path="student-accommodation-in-park-hill-sheffield" element={<SheffieldParkHill/>}/>
<Route path="student-accommodation-in-wicker-sheffield" element={<SheffieldWicker/>}/>
<Route path="student-accommodation-in-parkwood-springs-sheffield" element={<SheffieldParkwoodSprings/>}/>
<Route path="student-accommodation-in-neepsend-sheffield" element={<SheffieldNeepsend/>}/>
<Route path="student-accommodation-in-greystones-sheffield" element={<SheffieldGreystones/>}/>
<Route path="student-accommodation-in-high-storrs-sheffield" element={<SheffieldHighStorrs/>}/>
<Route path="student-accommodation-in-ringinglow-sheffield" element={<SheffieldRinginglow/>}/>
<Route path="student-accommodation-in-sharrow-head-sheffield" element={<SheffieldSharrowHead/>}/>
<Route path="student-accommodation-in-tapton-hill-sheffield" element={<SheffieldTaptonHill/>}/>
<Route path="student-accommodation-in-whiteley-wood-sheffield" element={<SheffieldWhiteleyWood/>}/>
<Route path="student-accommodation-in-bents-green-sheffield" element={<SheffieldBentsGreen/>}/>
<Route path="student-accommodation-in-bingham-park-sheffield" element={<SheffieldBinghamPark/>}/>
<Route path="student-accommodation-in-endcliffe-sheffield" element={<SheffieldEndcliffe/>}/>
<Route path="student-accommodation-in-greystones-cliff-sheffield" element={<SheffieldGreystonesCliff/>}/>
<Route path="student-accommodation-in-carsick-hill-sheffield" element={<SheffieldCarsickHill/>}/>
<Route path="student-accommodation-in-hallam-head-sheffield" element={<SheffieldHallamHead/>}/>
<Route path="student-accommodation-in-endcliffe-edge-sheffield" element={<SheffieldEndcliffeEdge/>}/>
<Route path="student-accommodation-in-kenwood-sheffield" element={<SheffieldKenwood/>}/>
<Route path="student-accommodation-in-heeley-sheffield" element={<SheffieldHeeley/>}/>
<Route path="student-accommodation-in-kelham-island-sheffield" element={<SheffieldKelhamIsland/>}/>
<Route path="student-accommodation-in-birley-lane-tram-stop-sheffield" element={<SheffieldBirleyLaneTramStop/>}/>
<Route path="student-accommodation-in-crosspool-sheffield" element={<SheffieldCrosspool/>}/>
<Route path="student-accommodation-in-crystal-peaks-tram-stop-sheffield" element={<SheffieldCrystalPeaksTramStop/>}/>
<Route path="student-accommodation-in-longsett-sheffield" element={<SheffieldLongsett/>}/>
<Route path="student-accommodation-in-heeley-green-sheffield" element={<SheffieldHeeleyGreen/>}/>
<Route path="student-accommodation-in-handsworth-sheffield" element={<SheffieldHandsworth/>}/>
<Route path="student-accommodation-in-kiveton-park-sheffield" element={<SheffieldKivetonPark/>}/>
<Route path="student-accommodation-in-brightside-sheffield" element={<SheffieldBrightside/>}/>
<Route path="student-accommodation-in-firshill-sheffield" element={<SheffieldFirshill/>}/>
<Route path="student-accommodation-in-littledale-estate-sheffield" element={<SheffieldLittledaleEstate/>}/>
<Route path="student-accommodation-in-orgreave-sheffield" element={<SheffieldOrgreave/>}/>
<Route path="student-accommodation-in-rotherwood-sheffield" element={<SheffieldRotherwood/>}/>
<Route path="student-accommodation-in-woodseats-sheffield" element={<SheffieldWoodseats/>}/>
<Route path="student-accommodation-in-darnall-sheffield" element={<SheffieldDarnall/>}/>
<Route path="student-accommodation-in-ballifield-sheffield" element={<SheffieldBallifield/>}/>
<Route path="student-accommodation-in-four-lane-ends-sheffield" element={<SheffieldFourLaneEnds/>}/>
<Route path="student-accommodation-in-greenland-sheffield" element={<SheffieldGreenland/>}/>
<Route path="student-accommodation-in-handsworth-hill-sheffield" element={<SheffieldHandsworthHill/>}/>
<Route path="student-accommodation-in-hillsborough-sheffield" element={<SheffieldHillsborough/>}/>
<Route path="student-accommodation-in-ranmoor-sheffield" element={<SheffieldRanmoor/>}/>
<Route path="student-accommodation-in-millhouses-sheffield" element={<SheffieldMillhouses/>}/>
<Route path="student-accommodation-in-hyde-park-tram-stop-sheffield" element={<SheffieldHydeParkTramStop/>}/>
<Route path="student-accommodation-in-portswood-southampton" element={<SouthamptonPortswood/>}/>
<Route path="student-accommodation-in-whithed-wood-southampton" element={<SouthamptonWhithedWood/>}/>
<Route path="student-accommodation-in-southampton-common-southampton" element={<SouthamptonSouthamptonCommon/>}/>
<Route path="student-accommodation-in-fitzhugh-southampton" element={<SouthamptonFitzhugh/>}/>
<Route path="student-accommodation-in-bevois-town-southampton" element={<SouthamptonBevoisTown/>}/>
<Route path="student-accommodation-in-bevois-mount-southampton" element={<SouthamptonBevoisMount/>}/>
<Route path="student-accommodation-in-bevois-valley-southampton" element={<SouthamptonBevoisValley/>}/>
<Route path="student-accommodation-in-inner-avenue-southampton" element={<SouthamptonInnerAvenue/>}/>
<Route path="student-accommodation-in-polygon-southampton" element={<SouthamptonPolygon/>}/>
<Route path="student-accommodation-in-highfield-southampton" element={<SouthamptonHighfield/>}/>
<Route path="student-accommodation-in-westwood-park-southampton" element={<SouthamptonWestwoodPark/>}/>
<Route path="student-accommodation-in-swaythling-southampton" element={<SouthamptonSwaythling/>}/>
<Route path="student-accommodation-in-mount-pleasant-southampton" element={<SouthamptonMountPleasant/>}/>
<Route path="student-accommodation-in-shirley-park-southampton" element={<SouthamptonShirleyPark/>}/>
<Route path="student-accommodation-in-hampton-park-southampton" element={<SouthamptonHamptonPark/>}/>
<Route path="student-accommodation-in-southampton-city-centre-southampton" element={<SouthamptonSouthamptonCityCentre/>}/>
<Route path="student-accommodation-in-bassett-southampton" element={<SouthamptonBassett/>}/>
<Route path="student-accommodation-in-st-denys-southampton" element={<SouthamptonStDenys/>}/>
<Route path="student-accommodation-in-basset-village-southampton" element={<SouthamptonBassetVillage/>}/>
<Route path="student-accommodation-in-st-marys-southampton" element={<SouthamptonStMarys/>}/>
<Route path="student-accommodation-in-banisters-park-southampton" element={<SouthamptonBanistersPark/>}/>
<Route path="student-accommodation-in-shirley-southampton" element={<SouthamptonShirley/>}/>
<Route path="student-accommodation-in-northam-southampton" element={<SouthamptonNortham/>}/>
<Route path="student-accommodation-in-old-docks-southampton" element={<SouthamptonOldDocks/>}/>
<Route path="student-accommodation-in-peartree-green-southampton" element={<SouthamptonPeartreeGreen/>}/>
<Route path="student-accommodation-in-millbank-southampton" element={<SouthamptonMillbank/>}/>
<Route path="student-accommodation-in-back-of-the-walls-southampton" element={<SouthamptonBackOfTheWalls/>}/>
<Route path="student-accommodation-in-crosshouse-southampton" element={<SouthamptonCrosshouse/>}/>
<Route path="student-accommodation-in-docks-southampton" element={<SouthamptonDocks/>}/>
<Route path="student-accommodation-in-belvidere-southampton" element={<SouthamptonBelvidere/>}/>
<Route path="student-accommodation-in-freemantle-southampton" element={<SouthamptonFreemantle/>}/>
<Route path="student-accommodation-in-ocean-village-southampton" element={<SouthamptonOceanVillage/>}/>
<Route path="student-accommodation-in-monksbridge-southampton" element={<SouthamptonMonksbridge/>}/>
<Route path="student-accommodation-in-holly-hill-southampton" element={<SouthamptonHollyHill/>}/>
<Route path="student-accommodation-in-bassett-green-southampton" element={<SouthamptonBassettGreen/>}/>
<Route path="student-accommodation-in-botley-station-southampton" element={<SouthamptonBotleyStation/>}/>
<Route path="student-accommodation-in-chilworth-old-village-southampton" element={<SouthamptonChilworthOldVillage/>}/>
<Route path="student-accommodation-in-hut-hill-southampton" element={<SouthamptonHutHill/>}/>
<Route path="student-accommodation-in-west-marlands-southampton" element={<SouthamptonWestMarlands/>}/>
<Route path="student-accommodation-in-wimpson-southampton" element={<SouthamptonWimpson/>}/>
<Route path="student-accommodation-in-bargate-southampton" element={<SouthamptonBargate/>}/>
<Route path="student-accommodation-in-bedford-place-southampton" element={<SouthamptonBedfordPlace/>}/>
<Route path="student-accommodation-in-chapel-southampton" element={<SouthamptonChapel/>}/>
<Route path="student-accommodation-in-charlotte-place-southampton" element={<SouthamptonCharlottePlace/>}/>
<Route path="student-accommodation-in-bellevue-southampton" element={<SouthamptonBellevue/>}/>
<Route path="student-accommodation-in-blechynden-southampton" element={<SouthamptonBlechynden/>}/>
<Route path="student-accommodation-in-hoglands-southampton" element={<SouthamptonHoglands/>}/>
<Route path="student-accommodation-in-houndwell-southampton" element={<SouthamptonHoundwell/>}/>
<Route path="student-accommodation-in-kingsland-place-southampton" element={<SouthamptonKingslandPlace/>}/>
<Route path="student-accommodation-in-nichols-town-southampton" element={<SouthamptonNicholsTown/>}/>
<Route path="student-accommodation-in-old-walls-southampton" element={<SouthamptonOldWalls/>}/>
<Route path="student-accommodation-in-queens-park-southampton" element={<SouthamptonQueensPark/>}/>
<Route path="student-accommodation-in-queensland-southampton" element={<SouthamptonQueensland/>}/>
<Route path="student-accommodation-in-tanners-brook-southampton" element={<SouthamptonTannersBrook/>}/>
<Route path="student-accommodation-in-fourposts-southampton" element={<SouthamptonFourposts/>}/>
<Route path="student-accommodation-in-hill-southampton" element={<SouthamptonHill/>}/>
<Route path="student-accommodation-in-lansdowne-hill-southampton" element={<SouthamptonLansdowneHill/>}/>
<Route path="student-accommodation-in-mansbridge-southampton" element={<SouthamptonMansbridge/>}/>
<Route path="student-accommodation-in-atlantic-park-southampton" element={<SouthamptonAtlanticPark/>}/>
<Route path="student-accommodation-in-townhill-park-southampton" element={<SouthamptonTownhillPark/>}/>
<Route path="student-accommodation-in-west-end-southampton" element={<SouthamptonWestEnd/>}/>
<Route path="student-accommodation-in-moorgreen-southampton" element={<SouthamptonMoorgreen/>}/>
<Route path="student-accommodation-in-sholing-southampton" element={<SouthamptonSholing/>}/>
<Route path="student-accommodation-in-hatch-bottom-southampton" element={<SouthamptonHatchBottom/>}/>
<Route path="student-accommodation-in-woolston-southampton" element={<SouthamptonWoolston/>}/>
<Route path="student-accommodation-in-stirling--county--stirling" element={<StirlingStirlingCounty/>}/>
<Route path="student-accommodation-in-cambuskenneth-stirling" element={<StirlingCambuskenneth/>}/>
<Route path="student-accommodation-in-raploch-stirling" element={<StirlingRaploch/>}/>
<Route path="student-accommodation-in-riverside-stirling" element={<StirlingRiverside/>}/>
<Route path="student-accommodation-in-manor-powis-stirling" element={<StirlingManorPowis/>}/>
<Route path="student-accommodation-in-manor-steps-stirling" element={<StirlingManorSteps/>}/>
<Route path="student-accommodation-in-chartershall-village-stirling" element={<StirlingChartershallVillage/>}/>
<Route path="student-accommodation-in-cornton-stirling" element={<StirlingCornton/>}/>
<Route path="student-accommodation-in-st-ninians-stirling" element={<StirlingStNinians/>}/>
<Route path="student-accommodation-in-stoke-on-trent-stoke-on-trent" element={<StokeonTrentStokeOnTrent/>}/>
<Route path="student-accommodation-in-hanley-stoke-on-trent" element={<StokeonTrentHanley/>}/>
<Route path="student-accommodation-in-botteslow-stoke-on-trent" element={<StokeonTrentBotteslow/>}/>
<Route path="student-accommodation-in-fenton-low-stoke-on-trent" element={<StokeonTrentFentonLow/>}/>
<Route path="student-accommodation-in-joiners-square-stoke-on-trent" element={<StokeonTrentJoinersSquare/>}/>
<Route path="student-accommodation-in-sideway-stoke-on-trent" element={<StokeonTrentSideway/>}/>
<Route path="student-accommodation-in-springfields-stoke-on-trent" element={<StokeonTrentSpringfields/>}/>
<Route path="student-accommodation-in-the-brampton-stoke-on-trent" element={<StokeonTrentTheBrampton/>}/>
<Route path="student-accommodation-in-penkhull-stoke-on-trent" element={<StokeonTrentPenkhull/>}/>
<Route path="student-accommodation-in-basford-stoke-on-trent" element={<StokeonTrentBasford/>}/>
<Route path="student-accommodation-in-boothen-stoke-on-trent" element={<StokeonTrentBoothen/>}/>
<Route path="student-accommodation-in-hartshill-stoke-on-trent" element={<StokeonTrentHartshill/>}/>
<Route path="student-accommodation-in-trent-vale-stoke-on-trent" element={<StokeonTrentTrentVale/>}/>
<Route path="student-accommodation-in-oak-hill-stoke-on-trent" element={<StokeonTrentOakHill/>}/>
<Route path="student-accommodation-in-harpfields-stoke-on-trent" element={<StokeonTrentHarpfields/>}/>
<Route path="student-accommodation-in-the-potteries-stoke-on-trent" element={<StokeonTrentThePotteries/>}/>
<Route path="student-accommodation-in-barlaston-station-stoke-on-trent" element={<StokeonTrentBarlastonStation/>}/>
<Route path="student-accommodation-in-ashbrooke-sunderland" element={<SunderlandAshbrooke/>}/>
<Route path="student-accommodation-in-tunstall-vale-sunderland" element={<SunderlandTunstallVale/>}/>
<Route path="student-accommodation-in-thornhill-sunderland" element={<SunderlandThornhill/>}/>
<Route path="student-accommodation-in-tunstall-hills-sunderland" element={<SunderlandTunstallHills/>}/>
<Route path="student-accommodation-in-north-dock-sunderland" element={<SunderlandNorthDock/>}/>
<Route path="student-accommodation-in-panns-bank-sunderland" element={<SunderlandPannsBank/>}/>
<Route path="student-accommodation-in-fulwell-sunderland" element={<SunderlandFulwell/>}/>
<Route path="student-accommodation-in-barbary-coast-sunderland" element={<SunderlandBarbaryCoast/>}/>
<Route path="student-accommodation-in-st-peters-sunderland" element={<SunderlandStPeters/>}/>
<Route path="student-accommodation-in-st-peters-riverside-sunderland" element={<SunderlandStPetersRiverside/>}/>
<Route path="student-accommodation-in-st-peters-campus-sunderland" element={<SunderlandStPetersCampus/>}/>
<Route path="student-accommodation-in-st-peters-development-sunderland" element={<SunderlandStPetersDevelopment/>}/>
<Route path="student-accommodation-in-north-sands-sunderland" element={<SunderlandNorthSands/>}/>
<Route path="student-accommodation-in-monkwearmouth-shore-sunderland" element={<SunderlandMonkwearmouthShore/>}/>
<Route path="student-accommodation-in-north-haven-sunderland" element={<SunderlandNorthHaven/>}/>
<Route path="student-accommodation-in-ayres-quay-sunderland" element={<SunderlandAyresQuay/>}/>
<Route path="student-accommodation-in-millfield-sunderland" element={<SunderlandMillfield/>}/>
<Route path="student-accommodation-in-low-row-sunderland" element={<SunderlandLowRow/>}/>
<Route path="student-accommodation-in-hendon-dock-sunderland" element={<SunderlandHendonDock/>}/>
<Route path="student-accommodation-in-deptford-sunderland" element={<SunderlandDeptford/>}/>
<Route path="student-accommodation-in-east-end-sunderland" element={<SunderlandEastEnd/>}/>
<Route path="student-accommodation-in-south-dock-sunderland" element={<SunderlandSouthDock/>}/>
<Route path="student-accommodation-in-town-moor-sunderland" element={<SunderlandTownMoor/>}/>
<Route path="student-accommodation-in-roker-sunderland" element={<SunderlandRoker/>}/>
<Route path="student-accommodation-in-monkwearmouth-sunderland" element={<SunderlandMonkwearmouth/>}/>
<Route path="student-accommodation-in-sheepfolds-sunderland" element={<SunderlandSheepfolds/>}/>
<Route path="student-accommodation-in-barnes-sunderland" element={<SunderlandBarnes/>}/>
<Route path="student-accommodation-in-southwick-sunderland" element={<SunderlandSouthwick/>}/>
<Route path="student-accommodation-in-new-silksworth-sunderland" element={<SunderlandNewSilksworth/>}/>
<Route path="student-accommodation-in-ryhope-sunderland" element={<SunderlandRyhope/>}/>
<Route path="student-accommodation-in-silksworth-sunderland" element={<SunderlandSilksworth/>}/>
<Route path="student-accommodation-in-cleadon-sunderland" element={<SunderlandCleadon/>}/>
<Route path="student-accommodation-in-humbledon-hill-sunderland" element={<SunderlandHumbledonHill/>}/>
<Route path="student-accommodation-in-redhouse-sunderland" element={<SunderlandRedhouse/>}/>
<Route path="student-accommodation-in-leechmere-grange-sunderland" element={<SunderlandLeechmereGrange/>}/>
<Route path="student-accommodation-in-brentwood-park-sunderland" element={<SunderlandBrentwoodPark/>}/>
<Route path="student-accommodation-in-ford-sunderland" element={<SunderlandFord/>}/>
<Route path="student-accommodation-in-nookside-sunderland" element={<SunderlandNookside/>}/>
<Route path="student-accommodation-in-silksworth-colliery-sunderland" element={<SunderlandSilksworthColliery/>}/>
<Route path="student-accommodation-in-st-gabriel-sunderland" element={<SunderlandStGabriel/>}/>
<Route path="student-accommodation-in-willow-grange-sunderland" element={<SunderlandWillowGrange/>}/>
<Route path="student-accommodation-in-witherwack-estate-sunderland" element={<SunderlandWitherwackEstate/>}/>
<Route path="student-accommodation-in-eden-vale-sunderland" element={<SunderlandEdenVale/>}/>
<Route path="student-accommodation-in-ford-estate-sunderland" element={<SunderlandFordEstate/>}/>
<Route path="student-accommodation-in-grangetown-sunderland" element={<SunderlandGrangetown/>}/>
<Route path="student-accommodation-in-grindon-broadway-sunderland" element={<SunderlandGrindonBroadway/>}/>
<Route path="student-accommodation-in-high-barnes-sunderland" element={<SunderlandHighBarnes/>}/>
<Route path="student-accommodation-in-high-newport-sunderland" element={<SunderlandHighNewport/>}/>
<Route path="student-accommodation-in-humbledon-sunderland" element={<SunderlandHumbledon/>}/>
<Route path="student-accommodation-in-hylton-lane-estate-sunderland" element={<SunderlandHyltonLaneEstate/>}/>
<Route path="student-accommodation-in-hylton-red-house-estate-sunderland" element={<SunderlandHyltonRedHouseEstate/>}/>
<Route path="student-accommodation-in-leechmere-grange-estate-sunderland" element={<SunderlandLeechmereGrangeEstate/>}/>
<Route path="student-accommodation-in-low-pallion-sunderland" element={<SunderlandLowPallion/>}/>
<Route path="student-accommodation-in-barnes-park-sunderland" element={<SunderlandBarnesPark/>}/>
<Route path="student-accommodation-in-nookside-estate-sunderland" element={<SunderlandNooksideEstate/>}/>
<Route path="student-accommodation-in-pallion-sunderland" element={<SunderlandPallion/>}/>
<Route path="student-accommodation-in-pallion-works-sunderland" element={<SunderlandPallionWorks/>}/>
<Route path="student-accommodation-in-pennywell-sunderland" element={<SunderlandPennywell/>}/>
<Route path="student-accommodation-in-plains-farm-sunderland" element={<SunderlandPlainsFarm/>}/>
<Route path="student-accommodation-in-plains-farm-estate-sunderland" element={<SunderlandPlainsFarmEstate/>}/>
<Route path="student-accommodation-in-red-house-estate-sunderland" element={<SunderlandRedHouseEstate/>}/>
<Route path="student-accommodation-in-ryhope-colliery-sunderland" element={<SunderlandRyhopeColliery/>}/>
<Route path="student-accommodation-in-st-gabriels-estate-sunderland" element={<SunderlandStGabrielsEstate/>}/>
<Route path="student-accommodation-in-whitburn-village-sunderland" element={<SunderlandWhitburnVillage/>}/>
<Route path="student-accommodation-in-witherwack-sunderland" element={<SunderlandWitherwack/>}/>
<Route path="student-accommodation-in-high-plains-sunderland" element={<SunderlandHighPlains/>}/>
<Route path="student-accommodation-in-low-ford-sunderland" element={<SunderlandLowFord/>}/>
<Route path="student-accommodation-in-brynmill-swansea" element={<SwanseaBrynmill/>}/>
<Route path="student-accommodation-in-uplands-swansea" element={<SwanseaUplands/>}/>
<Route path="student-accommodation-in-the-marina-swansea" element={<SwanseaTheMarina/>}/>
<Route path="student-accommodation-in-sgeti-swansea" element={<SwanseaSgeti/>}/>
<Route path="student-accommodation-in-cwmgwyn-swansea" element={<SwanseaCwmgwyn/>}/>
<Route path="student-accommodation-in-glanmor-swansea" element={<SwanseaGlanmor/>}/>
<Route path="student-accommodation-in-y-cocyd-swansea" element={<SwanseaYCocyd/>}/>
<Route path="student-accommodation-in-strand-swansea" element={<SwanseaStrand/>}/>
<Route path="student-accommodation-in-waun-wen-swansea" element={<SwanseaWaunWen/>}/>
<Route path="student-accommodation-in-brynmelin-swansea" element={<SwanseaBrynmelin/>}/>
<Route path="student-accommodation-in-grenfell-park-swansea" element={<SwanseaGrenfellPark/>}/>
<Route path="student-accommodation-in-hafod-swansea" element={<SwanseaHafod/>}/>
<Route path="student-accommodation-in-st-helens-swansea" element={<SwanseaStHelens/>}/>
<Route path="student-accommodation-in-pentre-guinea-swansea" element={<SwanseaPentreGuinea/>}/>
<Route path="student-accommodation-in-port-tennant-swansea" element={<SwanseaPortTennant/>}/>
<Route path="student-accommodation-in-sketty-swansea" element={<SwanseaSketty/>}/>
<Route path="student-accommodation-in-st-thomas-swansea" element={<SwanseaStThomas/>}/>
<Route path="student-accommodation-in-sketty-park-swansea" element={<SwanseaSkettyPark/>}/>
<Route path="student-accommodation-in-parcbeck-swansea" element={<SwanseaParcbeck/>}/>
<Route path="student-accommodation-in-tycoch-swansea" element={<SwanseaTycoch/>}/>
<Route path="student-accommodation-in-fforestfach-swansea" element={<SwanseaFforestfach/>}/>
<Route path="student-accommodation-in-whitton-twickenham" element={<TwickenhamWhitton/>}/>
<Route path="student-accommodation-in-maswell-park-twickenham" element={<TwickenhamMaswellPark/>}/>
<Route path="student-accommodation-in-whitton-park-twickenham" element={<TwickenhamWhittonPark/>}/>
<Route path="student-accommodation-in-colham-green-uxbridge" element={<UxbridgeColhamGreen/>}/>
<Route path="student-accommodation-in-goulds-green-uxbridge" element={<UxbridgeGouldsGreen/>}/>
<Route path="student-accommodation-in-uxbridge-common-uxbridge" element={<UxbridgeUxbridgeCommon/>}/>
<Route path="student-accommodation-in-cowley-peachey-uxbridge" element={<UxbridgeCowleyPeachey/>}/>
<Route path="student-accommodation-in-willowbank-uxbridge" element={<UxbridgeWillowbank/>}/>
<Route path="student-accommodation-in-cowley-uxbridge" element={<UxbridgeCowley/>}/>
<Route path="student-accommodation-in-hillingdon-uxbridge" element={<UxbridgeHillingdon/>}/>
<Route path="student-accommodation-in-stanmore-winchester" element={<WinchesterStanmore/>}/>
<Route path="student-accommodation-in-sleepers-hill-winchester" element={<WinchesterSleepersHill/>}/>
<Route path="student-accommodation-in-orams-arbour-winchester" element={<WinchesterOramsArbour/>}/>
<Route path="student-accommodation-in-badger-farm-winchester" element={<WinchesterBadgerFarm/>}/>
<Route path="student-accommodation-in-ladwell-winchester" element={<WinchesterLadwell/>}/>
<Route path="student-accommodation-in-lainston-winchester" element={<WinchesterLainston/>}/>
<Route path="student-accommodation-in-south-down-winchester" element={<WinchesterSouthDown/>}/>
<Route path="student-accommodation-in-silkstead-winchester" element={<WinchesterSilkstead/>}/>
<Route path="student-accommodation-in-bunstead-winchester" element={<WinchesterBunstead/>}/>
<Route path="student-accommodation-in-the-close-winchester" element={<WinchesterTheClose/>}/>
<Route path="student-accommodation-in-the-soke-winchester" element={<WinchesterTheSoke/>}/>
<Route path="student-accommodation-in-the-lawn-winchester" element={<WinchesterTheLawn/>}/>
<Route path="student-accommodation-in-winnall-winchester" element={<WinchesterWinnall/>}/>
<Route path="student-accommodation-in-st-martins-winchester" element={<WinchesterStMartins/>}/>
<Route path="student-accommodation-in-st-giles-winchester" element={<WinchesterStGiles/>}/>
<Route path="student-accommodation-in-bereweek-winchester" element={<WinchesterBereweek/>}/>
<Route path="student-accommodation-in-kilham-lane-winchester" element={<WinchesterKilhamLane/>}/>
<Route path="student-accommodation-in-greenhill-winchester" element={<WinchesterGreenhill/>}/>
<Route path="student-accommodation-in-weeks-hill-winchester" element={<WinchesterWeeksHill/>}/>
<Route path="student-accommodation-in-west-hill-winchester" element={<WinchesterWestHill/>}/>
<Route path="student-accommodation-in-weeke-winchester" element={<WinchesterWeeke/>}/>
<Route path="student-accommodation-in-teg-down-winchester" element={<WinchesterTegDown/>}/>
<Route path="student-accommodation-in-highcliffe-winchester" element={<WinchesterHighcliffe/>}/>
<Route path="student-accommodation-in-fulflood-winchester" element={<WinchesterFulflood/>}/>
<Route path="student-accommodation-in-king-alfred-place-winchester" element={<WinchesterKingAlfredPlace/>}/>
<Route path="student-accommodation-in-st-cross-winchester" element={<WinchesterStCross/>}/>
<Route path="student-accommodation-in-springvale-winchester" element={<WinchesterSpringvale/>}/>
<Route path="student-accommodation-in-kingsgate-winchester" element={<WinchesterKingsgate/>}/>
<Route path="student-accommodation-in-painters-fields-winchester" element={<WinchesterPaintersFields/>}/>
<Route path="student-accommodation-in-barnes-close-winchester" element={<WinchesterBarnesClose/>}/>
<Route path="student-accommodation-in-christchurch-road-winchester" element={<WinchesterChristchurchRoad/>}/>
<Route path="student-accommodation-in-culvers-road-winchester" element={<WinchesterCulversRoad/>}/>
<Route path="student-accommodation-in-wharf-hill-winchester" element={<WinchesterWharfHill/>}/>
<Route path="student-accommodation-in-st-swithuns-winchester" element={<WinchesterStSwithuns/>}/>
<Route path="student-accommodation-in-bar-end-winchester" element={<WinchesterBarEnd/>}/>
<Route path="student-accommodation-in-andover-road-winchester" element={<WinchesterAndoverRoad/>}/>
<Route path="student-accommodation-in-greenacre-winchester" element={<WinchesterGreenacre/>}/>
<Route path="student-accommodation-in-harestock-winchester" element={<WinchesterHarestock/>}/>
<Route path="student-accommodation-in-weere-winchester" element={<WinchesterWeere/>}/>
<Route path="student-accommodation-in-newbridge-wolverhampton" element={<WolverhamptonNewbridge/>}/>
<Route path="student-accommodation-in-tettenhall-wolverhampton" element={<WolverhamptonTettenhall/>}/>
<Route path="student-accommodation-in-aldersley-wolverhampton" element={<WolverhamptonAldersley/>}/>
<Route path="student-accommodation-in-claregate-wolverhampton" element={<WolverhamptonClaregate/>}/>
<Route path="student-accommodation-in-blakeley-green-wolverhampton" element={<WolverhamptonBlakeleyGreen/>}/>
<Route path="student-accommodation-in-palmers-cross-wolverhampton" element={<WolverhamptonPalmersCross/>}/>
<Route path="student-accommodation-in-park-dale-wolverhampton" element={<WolverhamptonParkDale/>}/>
<Route path="student-accommodation-in-whitmore-reans-wolverhampton" element={<WolverhamptonWhitmoreReans/>}/>
<Route path="student-accommodation-in-st-johns-worcester" element={<WorcesterStJohns/>}/>
<Route path="student-accommodation-in-upper-broadheath-worcester" element={<WorcesterUpperBroadheath/>}/>
<Route path="student-accommodation-in-broadmoor-green-worcester" element={<WorcesterBroadmoorGreen/>}/>
<Route path="student-accommodation-in-dines-green-worcester" element={<WorcesterDinesGreen/>}/>
<Route path="student-accommodation-in-henwick-worcester" element={<WorcesterHenwick/>}/>
<Route path="student-accommodation-in-hallow-heath-worcester" element={<WorcesterHallowHeath/>}/>
<Route path="student-accommodation-in-monkwood-green-worcester" element={<WorcesterMonkwoodGreen/>}/>
<Route path="student-accommodation-in-peachley-worcester" element={<WorcesterPeachley/>}/>
<Route path="student-accommodation-in-ashfield-worcester" element={<WorcesterAshfield/>}/>
<Route path="student-accommodation-in-shoulton-worcester" element={<WorcesterShoulton/>}/>
<Route path="student-accommodation-in-moseley-worcester" element={<WorcesterMoseley/>}/>
<Route path="student-accommodation-in-arboretum-worcester" element={<WorcesterArboretum/>}/>
<Route path="student-accommodation-in-lowesmoor-worcester" element={<WorcesterLowesmoor/>}/>
<Route path="student-accommodation-in-sidbury-worcester" element={<WorcesterSidbury/>}/>
<Route path="student-accommodation-in-spring-hill-worcester" element={<WorcesterSpringHill/>}/>
<Route path="student-accommodation-in-wick-episcopi-worcester" element={<WorcesterWickEpiscopi/>}/>
<Route path="student-accommodation-in-deblins-green-worcester" element={<WorcesterDeblinsGreen/>}/>
<Route path="student-accommodation-in-pole-elm-worcester" element={<WorcesterPoleElm/>}/>
<Route path="student-accommodation-in-lower-wick-worcester" element={<WorcesterLowerWick/>}/>
<Route path="student-accommodation-in-dawshill-worcester" element={<WorcesterDawshill/>}/>
<Route path="student-accommodation-in-brayswick-worcester" element={<WorcesterBrayswick/>}/>
<Route path="student-accommodation-in-stanbrook-worcester" element={<WorcesterStanbrook/>}/>
<Route path="student-accommodation-in-upper-battenhall-worcester" element={<WorcesterUpperBattenhall/>}/>
<Route path="student-accommodation-in-norton-juxta-kempsey-worcester" element={<WorcesterNortonJuxtaKempsey/>}/>
<Route path="student-accommodation-in-redhill-worcester" element={<WorcesterRedhill/>}/>
<Route path="student-accommodation-in-nunnery-worcester" element={<WorcesterNunnery/>}/>
<Route path="student-accommodation-in-swinesherd-worcester" element={<WorcesterSwinesherd/>}/>
<Route path="student-accommodation-in-barbourne-worcester" element={<WorcesterBarbourne/>}/>
<Route path="student-accommodation-in-clerkenleap-worcester" element={<WorcesterClerkenleap/>}/>
<Route path="student-accommodation-in-diglis-worcester" element={<WorcesterDiglis/>}/>
<Route path="student-accommodation-in-st-peter-the-great-worcester" element={<WorcesterStPeterTheGreat/>}/>
<Route path="student-accommodation-in-baynehall-worcester" element={<WorcesterBaynehall/>}/>
<Route path="student-accommodation-in-brook-end-worcester" element={<WorcesterBrookEnd/>}/>
<Route path="student-accommodation-in-draycott-worcester" element={<WorcesterDraycott/>}/>
<Route path="student-accommodation-in-green-street-worcester" element={<WorcesterGreenStreet/>}/>
<Route path="student-accommodation-in-pixham-worcester" element={<WorcesterPixham/>}/>
<Route path="student-accommodation-in-stonehall-worcester" element={<WorcesterStonehall/>}/>
<Route path="student-accommodation-in-napleton-worcester" element={<WorcesterNapleton/>}/>
<Route path="student-accommodation-in-garden-village-wrexham" element={<WrexhamGardenVillage/>}/>
<Route path="student-accommodation-in-kings-mills-wrexham" element={<WrexhamKingsMills/>}/>
<Route path="student-accommodation-in-old-rhosrobin-wrexham" element={<WrexhamOldRhosrobin/>}/>
<Route path="student-accommodation-in-pool-mouth-wrexham" element={<WrexhamPoolMouth/>}/>
<Route path="student-accommodation-in-springfield-wrexham" element={<WrexhamSpringfield/>}/>
<Route path="student-accommodation-in-wheatsheaf-wrexham" element={<WrexhamWheatsheaf/>}/>
<Route path="student-accommodation-in-borras-riffre-wrexham" element={<WrexhamBorrasRiffre/>}/>
<Route path="student-accommodation-in-gegin-wrexham" element={<WrexhamGegin/>}/>
<Route path="student-accommodation-in-little-mountain-wrexham" element={<WrexhamLittleMountain/>}/>
<Route path="student-accommodation-in-maes-y-dre-wrexham" element={<WrexhamMaesYDre/>}/>
<Route path="student-accommodation-in-new-rhosrobin-wrexham" element={<WrexhamNewRhosrobin/>}/>
<Route path="student-accommodation-in-plas-coch-wrexham" element={<WrexhamPlasCoch/>}/>
<Route path="student-accommodation-in-queens-park-wrexham" element={<WrexhamQueensPark/>}/>
<Route path="student-accommodation-in-rhos-ddu-wrexham" element={<WrexhamRhosDdu/>}/>
<Route path="student-accommodation-in-rhosnesni-wrexham" element={<WrexhamRhosnesni/>}/>
<Route path="student-accommodation-in-the-dunks-wrexham" element={<WrexhamTheDunks/>}/>
<Route path="student-accommodation-in-the-lodge-wrexham" element={<WrexhamTheLodge/>}/>
<Route path="student-accommodation-in-wrexham-maelor-wrexham" element={<WrexhamWrexhamMaelor/>}/>
<Route path="student-accommodation-in-llwyn-onn-wrexham" element={<WrexhamLlwynOnn/>}/>
<Route path="student-accommodation-in-tang-hall-york" element={<YorkTangHall/>}/>
<Route path="student-accommodation-in-garrow-hill-york" element={<YorkGarrowHill/>}/>
<Route path="student-accommodation-in-heworth-york" element={<YorkHeworth/>}/>
<Route path="student-accommodation-in-appletree-village-york" element={<YorkAppletreeVillage/>}/>
<Route path="student-accommodation-in-burnholme-york" element={<YorkBurnholme/>}/>
<Route path="student-accommodation-in-foss-islands-york" element={<YorkFossIslands/>}/>
<Route path="student-accommodation-in-osbaldwick-york" element={<YorkOsbaldwick/>}/>
<Route path="student-accommodation-in-layerthorpe-york" element={<YorkLayerthorpe/>}/>
<Route path="student-accommodation-in-birch-park-york" element={<YorkBirchPark/>}/>
<Route path="student-accommodation-in-the-groves-york" element={<YorkTheGroves/>}/>
<Route path="student-accommodation-in-york-city-centre-york" element={<YorkYorkCityCentre/>}/>
<Route path="student-accommodation-in-burton-stone-lane-york" element={<YorkBurtonStoneLane/>}/>
<Route path="student-accommodation-in-clifton-york" element={<YorkClifton/>}/>
<Route path="student-accommodation-in-heworth-green-york" element={<YorkHeworthGreen/>}/>
<Route path="student-accommodation-in-fulford-york" element={<YorkFulford/>}/>
<Route path="student-accommodation-in-rawcliffe-york" element={<YorkRawcliffe/>}/>
<Route path="student-accommodation-in-bishopthorpe-road-york" element={<YorkBishopthorpeRoad/>}/>
<Route path="student-accommodation-in-heslington-lane-york" element={<YorkHeslingtonLane/>}/>
<Route path="student-accommodation-in-heslington-road-york" element={<YorkHeslingtonRoad/>}/>
<Route path="student-accommodation-in-huntington-village-york" element={<YorkHuntingtonVillage/>}/>
<Route path="student-accommodation-in-bishop-hill-york" element={<YorkBishopHill/>}/>
<Route path="student-accommodation-in-south-bank-york" element={<YorkSouthBank/>}/>
<Route path="student-accommodation-in-huntington-york" element={<YorkHuntington/>}/>
<Route path="student-accommodation-in-hopgrove-york" element={<YorkHopgrove/>}/>
<Route path="student-accommodation-in-muncastergate-york" element={<YorkMuncastergate/>}/>
<Route path="student-accommodation-in-monks-cross-york" element={<YorkMonksCross/>}/>
<Route path="student-accommodation-in-brockfield-york" element={<YorkBrockfield/>}/>
<Route path="student-accommodation-in-old-earswick-york" element={<YorkOldEarswick/>}/>
<Route path="student-accommodation-in-bull-commercial-centre-york" element={<YorkBullCommercialCentre/>}/>
<Route path="student-accommodation-in-hungate-york" element={<YorkHungate/>}/>
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
