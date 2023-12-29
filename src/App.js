import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";


//*** js:import-townStart
import {Birmingham} from "./pages/town";
import {BirminghamSellyOak} from "./pages/town";
import {BirminghamStirchleyStreet} from "./pages/town";
import {BirminghamTenAcres} from "./pages/town";
import {BirminghamHazelwell} from "./pages/town";
import {BirminghamWinsonGreenOuterCircleTramStop} from "./pages/town";
import {BirminghamBournville} from "./pages/town";
import {BirminghamBournbrook} from "./pages/town";
import {BirminghamEdgbaston} from "./pages/town";
import {BirminghamSellyPark} from "./pages/town";
import {BirminghamHarborne} from "./pages/town";
import {BirminghamHartsGreen} from "./pages/town";
import {BirminghamGravelBank} from "./pages/town";
import {BirminghamLadywood} from "./pages/town";
import {BirminghamStirchley} from "./pages/town";
import {BirminghamJewelleryQuarter} from "./pages/town";
import {BirminghamRottonPark} from "./pages/town";
import {BirminghamStCuthberts} from "./pages/town";
import {BirminghamSummerfield} from "./pages/town";
import {BirminghamSummerfieldPark} from "./pages/town";
import {BirminghamHockley} from "./pages/town";
import {BirminghamNechellsGreen} from "./pages/town";
import {BirminghamBalsallHeath} from "./pages/town";
import {BirminghamBournvilleStation} from "./pages/town";
import {BirminghamTheVale} from "./pages/town";
import {BirminghamPakenhamVillage} from "./pages/town";
import {BirminghamBordesleyGreen} from "./pages/town";
import {BirminghamFiveWays} from "./pages/town";
import {BirminghamCalthorpeFields} from "./pages/town";
import {BirminghamCalthorpeEstates} from "./pages/town";
import {BirminghamBeechLanes} from "./pages/town";
import {BirminghamNechells} from "./pages/town";
import {BirminghamBrindley} from "./pages/town";
import {BirminghamTheWharf} from "./pages/town";
import {BirminghamBordesley} from "./pages/town";
import {BirminghamDuddeston} from "./pages/town";
import {BirminghamAshted} from "./pages/town";
import {BirminghamNetchellsGreen} from "./pages/town";
import {BirminghamKingsNorton} from "./pages/town";
import {BirminghamAlvechurchStation} from "./pages/town";
import {BirminghamCannonHill} from "./pages/town";
import {BirminghamCotteridge} from "./pages/town";
import {BirminghamBrownhillsGreen} from "./pages/town";
import {BirminghamWeoleyCastle} from "./pages/town";
import {BirminghamHighgate} from "./pages/town";
import {BirminghamBrownshillGreen} from "./pages/town";
import {BirminghamDigbeth} from "./pages/town";
import {BirminghamChinatown} from "./pages/town";
import {BirminghamChadValley} from "./pages/town";
import {BirminghamQuinton} from "./pages/town";
import {BirminghamNorthfield} from "./pages/town";
import {BirminghamAlumRock} from "./pages/town";
import {BirminghamHandsworth} from "./pages/town";
import {BirminghamMoseley} from "./pages/town";
import {BirminghamGreatBarr} from "./pages/town";
import {BirminghamHallGreen} from "./pages/town";
import {BirminghamPerryBarr} from "./pages/town";
import {BirminghamSmallHeath} from "./pages/town";
import {BirminghamSparkhill} from "./pages/town";
import {BirminghamStechford} from "./pages/town";
import {BirminghamSaltley} from "./pages/town";
import {BirminghamAston} from "./pages/town";
import {BirminghamWinsonGreen} from "./pages/town";
import {BirminghamMoorGreen} from "./pages/town";
import {BirminghamTurvesGreen} from "./pages/town";
import {BirminghamDeritend} from "./pages/town";
import {BirminghamSpringVale} from "./pages/town";
import {BirminghamChurchHill} from "./pages/town";
import {BirminghamColehall} from "./pages/town";
import {BirminghamHawkesley} from "./pages/town";
import {BirminghamLeeBank} from "./pages/town";
import {BirminghamUpperWitton} from "./pages/town";
import {BirminghamWakeGreen} from "./pages/town";
import {BirminghamBearwood} from "./pages/town";
import {BirminghamNorthfieldStation} from "./pages/town";
import {Aberdeen} from "./pages/town";
import {AberdeenAberdeenCityCentre} from "./pages/town";
import {AberdeenMiddlefield} from "./pages/town";
import {AberdeenRuthrieston} from "./pages/town";
import {AberdeenKittybrewster} from "./pages/town";
import {AberdeenHilton} from "./pages/town";
import {AberdeenRosehill} from "./pages/town";
import {AberdeenFerryhill} from "./pages/town";
import {AberdeenRosemount} from "./pages/town";
import {AberdeenTorry} from "./pages/town";
import {AberdeenGarthdee} from "./pages/town";
import {AberdeenAberdeenWestEnd} from "./pages/town";
import {AberdeenForritBrae} from "./pages/town";
import {AberdeenBankhead} from "./pages/town";
import {AberdeenChapelOfStoneywood} from "./pages/town";
import {AberdeenGreenburn} from "./pages/town";
import {AberdeenNewhills} from "./pages/town";
import {AberdeenUpperPersley} from "./pages/town";
import {AberdeenTillydrone} from "./pages/town";
import {AberdeenBucksburn} from "./pages/town";
import {AberdeenHayton} from "./pages/town";
import {AberdeenWoodside} from "./pages/town";
import {AberdeenTownhead} from "./pages/town";
import {AberdeenMarybrae} from "./pages/town";
import {AberdeenAltries} from "./pages/town";
import {AberdeenKingcausie} from "./pages/town";
import {AberdeenKirktonOfMaryculter} from "./pages/town";
import {AberdeenStranog} from "./pages/town";
import {AberdeenWedderhill} from "./pages/town";
import {AberdeenDyce} from "./pages/town";
import {AberdeenStoneywood} from "./pages/town";
import {Aberystwyth} from "./pages/town";
import {AberystwythPenparke} from "./pages/town";
import {AberystwythWaunfawr} from "./pages/town";
import {AberystwythGelliangharad} from "./pages/town";
import {AberystwythSalem} from "./pages/town";
import {AberystwythCaeffynnon} from "./pages/town";
import {AberystwythPenLlwyn} from "./pages/town";
import {AberystwythWallog} from "./pages/town";
import {AberystwythCwmErfin} from "./pages/town";
import {AberystwythPenBontRhydybeddau} from "./pages/town";
import {AberystwythDollwen} from "./pages/town";
import {AberystwythOldGoginan} from "./pages/town";
import {AberystwythParcYLlyn} from "./pages/town";
import {AberystwythRhydYFelin} from "./pages/town";
import {AberystwythBroginin} from "./pages/town";
import {AberystwythPenRhiwNewydd} from "./pages/town";
import {AberystwythTroedYrHenRiw} from "./pages/town";
import {AberystwythSouthGate} from "./pages/town";
import {Bangor} from "./pages/town";
import {BangorGarddDenman} from "./pages/town";
import {BangorNantPorth} from "./pages/town";
import {BangorCaellepa} from "./pages/town";
import {BangorFfriddoedd} from "./pages/town";
import {BangorGlanAdda} from "./pages/town";
import {BangorHirael} from "./pages/town";
import {BangorMaesYGeirchen} from "./pages/town";
import {BangorTyddynLlwydyn} from "./pages/town";
import {BangorUpperGarth} from "./pages/town";
import {BangorVictoriaPark} from "./pages/town";
import {BangorUpperBangor} from "./pages/town";
import {BangorPendref} from "./pages/town";
import {BangorPortPenrhyn} from "./pages/town";
import {BangorPenchwintan} from "./pages/town";
import {BangorPenlon} from "./pages/town";
import {BangorPenrhosGarnedd} from "./pages/town";
import {BangorSiliwen} from "./pages/town";
import {BangorTanYMaes} from "./pages/town";
import {BangorWaenPentir} from "./pages/town";
import {BangorParcVaynol} from "./pages/town";
import {BangorBryn} from "./pages/town";
import {BangorParcPenrhyn} from "./pages/town";
import {Bath} from "./pages/town";
import {BathOldfieldPark} from "./pages/town";
import {BathBathSpa} from "./pages/town";
import {BathSladebrook} from "./pages/town";
import {BathTwertonHill} from "./pages/town";
import {BathTheOval} from "./pages/town";
import {BathMoorlands} from "./pages/town";
import {BathKingsway} from "./pages/town";
import {BathBloomfield} from "./pages/town";
import {BathSouthdown} from "./pages/town";
import {BathSouthTwerton} from "./pages/town";
import {BathTwerton} from "./pages/town";
import {BathPennHill} from "./pages/town";
import {BathLowerWeston} from "./pages/town";
import {BathEastTwerton} from "./pages/town";
import {BathOddDown} from "./pages/town";
import {BathNewbridge} from "./pages/town";
import {BathWidcombe} from "./pages/town";
import {BathBearFlat} from "./pages/town";
import {BathWeston} from "./pages/town";
import {BathBailbrook} from "./pages/town";
import {BathYomedePark} from "./pages/town";
import {BathWestonPark} from "./pages/town";
import {BathKensington} from "./pages/town";
import {BathLarkhall} from "./pages/town";
import {BathSnowHill} from "./pages/town";
import {BathPrimroseHill} from "./pages/town";
import {BathRaglands} from "./pages/town";
import {BathRosehill} from "./pages/town";
import {BathRudmorePark} from "./pages/town";
import {BathLocksbrook} from "./pages/town";
import {BathAvonPark} from "./pages/town";
import {BathBeaconHill} from "./pages/town";
import {BathTwertonOnAvon} from "./pages/town";
import {BathHat} from "./pages/town";
import {BathLyncombeHill} from "./pages/town";
import {BathHatfieldBuildings} from "./pages/town";
import {BathKingsmead} from "./pages/town";
import {BathUpperWeston} from "./pages/town";
import {BathBeechenCliff} from "./pages/town";
import {BathSionHill} from "./pages/town";
import {BathSouthLyncombe} from "./pages/town";
import {BathPerrymead} from "./pages/town";
import {BathSydneyGardens} from "./pages/town";
import {BathVillaFields} from "./pages/town";
import {BathWilliamstowe} from "./pages/town";
import {BathCrescentGardens} from "./pages/town";
import {BathDolemeads} from "./pages/town";
import {BathLambridge} from "./pages/town";
import {BathLowerSwainswick} from "./pages/town";
import {BathLyncombeVale} from "./pages/town";
import {BathRushHill} from "./pages/town";
import {BathWalcot} from "./pages/town";
import {BathWhiteway} from "./pages/town";
import {BathLansdown} from "./pages/town";
import {BathFairfieldPark} from "./pages/town";
import {BathBathwick} from "./pages/town";
import {BathBradfordPark} from "./pages/town";
import {BathRalphAllenPark} from "./pages/town";
import {BathCombeDown} from "./pages/town";
import {BathTyning} from "./pages/town";
import {Belfast} from "./pages/town";
import {Bolton} from "./pages/town";
import {BoltonDixonGreen} from "./pages/town";
import {BoltonFarnworth} from "./pages/town";
import {BoltonNewBury} from "./pages/town";
import {BoltonRosehill} from "./pages/town";
import {BoltonSpringfield} from "./pages/town";
import {BoltonAstleyBridge} from "./pages/town";
import {BoltonHarperGreen} from "./pages/town";
import {BoltonMosesGate} from "./pages/town";
import {BoltonOakenBottom} from "./pages/town";
import {BoltonTongeMoor} from "./pages/town";
import {BoltonGreatLever} from "./pages/town";
import {BoltonTheHaulgh} from "./pages/town";
import {BoltonTongeFold} from "./pages/town";
import {BoltonTopOThBrow} from "./pages/town";
import {BoltonBurnden} from "./pages/town";
import {Bradford} from "./pages/town";
import {BradfordPrinceville} from "./pages/town";
import {BradfordDirkHill} from "./pages/town";
import {BradfordChapelGreen} from "./pages/town";
import {BradfordHolmeTop} from "./pages/town";
import {BradfordEastbrook} from "./pages/town";
import {BradfordBroomfields} from "./pages/town";
import {BradfordWapping} from "./pages/town";
import {BradfordLidgetGreen} from "./pages/town";
import {BradfordClayton} from "./pages/town";
import {BradfordFairweatherGreen} from "./pages/town";
import {BradfordHeatonGrove} from "./pages/town";
import {BradfordHortonBankBottom} from "./pages/town";
import {BradfordParadiseGreen} from "./pages/town";
import {BradfordBarkerend} from "./pages/town";
import {BradfordBirks} from "./pages/town";
import {BradfordCrossleyHall} from "./pages/town";
import {BradfordHillSideVillas} from "./pages/town";
import {BradfordNewLeeds} from "./pages/town";
import {BradfordScholemoor} from "./pages/town";
import {BradfordUpperGreen} from "./pages/town";
import {BradfordBradfordForsterSquareStation} from "./pages/town";
import {Brighton} from "./pages/town";
import {Bristol} from "./pages/town";
import {BristolBedminsterStation} from "./pages/town";
import {BristolBristolCityCentre} from "./pages/town";
import {BristolClifton} from "./pages/town";
import {BristolFilton} from "./pages/town";
import {BristolHorfield} from "./pages/town";
import {BristolStPauls} from "./pages/town";
import {BristolStMichaels} from "./pages/town";
import {BristolMoorfields} from "./pages/town";
import {BristolPileMarsh} from "./pages/town";
import {BristolBrandonHill} from "./pages/town";
import {BristolFishponds} from "./pages/town";
import {BristolRedland} from "./pages/town";
import {BristolBishopston} from "./pages/town";
import {BristolCotham} from "./pages/town";
import {BristolTyndallsPark} from "./pages/town";
import {BristolKingsdown} from "./pages/town";
import {BristolWoolcottPark} from "./pages/town";
import {BristolStokesCroft} from "./pages/town";
import {BristolClayBottom} from "./pages/town";
import {BristolCroftsEnd} from "./pages/town";
import {BristolHuddsBarton} from "./pages/town";
import {BristolRoseGreen} from "./pages/town";
import {BristolStokePark} from "./pages/town";
import {BristolTankardsClose} from "./pages/town";
import {BristolTemple} from "./pages/town";
import {BristolAshleyDown} from "./pages/town";
import {BristolCanonsMarsh} from "./pages/town";
import {BristolCathay} from "./pages/town";
import {BristolStokeGifford} from "./pages/town";
import {BristolAvonmouthStation} from "./pages/town";
import {BristolNorthville} from "./pages/town";
import {BristolWestburyOnTrym} from "./pages/town";
import {BristolStapleton} from "./pages/town";
import {BristolGoldenHill} from "./pages/town";
import {BristolCheswickVillage} from "./pages/town";
import {BristolSouthmead} from "./pages/town";
import {BristolTheGalleries} from "./pages/town";
import {BristolStAndrews} from "./pages/town";
import {BristolHotwells} from "./pages/town";
import {BristolLockleaze} from "./pages/town";
import {BristolBedminster} from "./pages/town";
import {BristolStAugustines} from "./pages/town";
import {BristolCliftonWood} from "./pages/town";
import {BristolEastville} from "./pages/town";
import {BristolOldburyCourtEstate} from "./pages/town";
import {BristolHillfields} from "./pages/town";
import {BristolOldburyCourt} from "./pages/town";
import {BristolStGeorge} from "./pages/town";
import {BristolRussellTown} from "./pages/town";
import {BristolTheDings} from "./pages/town";
import {BristolWestburyPark} from "./pages/town";
import {BristolSummerHill} from "./pages/town";
import {BristolNetham} from "./pages/town";
import {BristolKingswood} from "./pages/town";
import {BristolMontpelier} from "./pages/town";
import {BristolStPhilips} from "./pages/town";
import {BristolSouthville} from "./pages/town";
import {BristolBurchellsGreen} from "./pages/town";
import {BristolBrislington} from "./pages/town";
import {BristolLowerEaston} from "./pages/town";
import {BristolMayfieldPark} from "./pages/town";
import {BristolPottersWood} from "./pages/town";
import {BristolCockshottHill} from "./pages/town";
import {BristolHopewellHill} from "./pages/town";
import {BristolLowerSoundwell} from "./pages/town";
import {BristolChesterPark} from "./pages/town";
import {BristolAirBalloonHill} from "./pages/town";
import {BristolBellHill} from "./pages/town";
import {BristolTwoMileHill} from "./pages/town";
import {BristolRockleaze} from "./pages/town";
import {BristolEaston} from "./pages/town";
import {BristolWatleysEnd} from "./pages/town";
import {BristolChessels} from "./pages/town";
import {BristolMerrywood} from "./pages/town";
import {BristolStapleHill} from "./pages/town";
import {BristolRedcliffe} from "./pages/town";
import {BristolBrentry} from "./pages/town";
import {BristolKensingtonHill} from "./pages/town";
import {BristolConham} from "./pages/town";
import {BristolJeffriesHill} from "./pages/town";
import {BristolKensingtonPark} from "./pages/town";
import {BristolHanhamGreen} from "./pages/town";
import {BristolEmersonsGreen} from "./pages/town";
import {BristolWarmleyHill} from "./pages/town";
import {BristolDownend} from "./pages/town";
import {BristolUpperEastville} from "./pages/town";
import {BristolStoneHill} from "./pages/town";
import {BristolSandyPark} from "./pages/town";
import {BristolTheBatch} from "./pages/town";
import {BristolWhitesHill} from "./pages/town";
import {BristolWindmillHill} from "./pages/town";
import {BristolWoodstock} from "./pages/town";
import {BristolCadburyHeath} from "./pages/town";
import {BristolParkWall} from "./pages/town";
import {BristolNorthCommon} from "./pages/town";
import {BristolLanternBottom} from "./pages/town";
import {BristolCockroadBottom} from "./pages/town";
import {BristolMountHill} from "./pages/town";
import {BristolWarmleyTower} from "./pages/town";
import {BristolOldland} from "./pages/town";
import {BristolHenleaze} from "./pages/town";
import {BristolHanham} from "./pages/town";
import {BristolPucklechurch} from "./pages/town";
import {BristolSoundwell} from "./pages/town";
import {BristolRedfield} from "./pages/town";
import {BristolBroomHill} from "./pages/town";
import {BristolTotterdown} from "./pages/town";
import {BristolLydeGreen} from "./pages/town";
import {BristolLeeWoods} from "./pages/town";
import {BristolBristolTempleMeadsStation} from "./pages/town";
import {BristolTempleQuay} from "./pages/town";
import {BristolChewtonKeynsham} from "./pages/town";
import {BristolWellsway} from "./pages/town";
import {BristolThePark} from "./pages/town";
import {BristolBartonHill} from "./pages/town";
import {BristolArnosVale} from "./pages/town";
import {BristolKnowle} from "./pages/town";
import {BristolPatchway} from "./pages/town";
import {BristolKeynsham} from "./pages/town";
import {BristolGreenbank} from "./pages/town";
import {BristolHambrook} from "./pages/town";
import {BristolHenbury} from "./pages/town";
import {BristolLeighWoods} from "./pages/town";
import {BristolMangotsfield} from "./pages/town";
import {BristolShirehampton} from "./pages/town";
import {BristolSpeedwell} from "./pages/town";
import {BristolStAgnes} from "./pages/town";
import {BristolStWerburghs} from "./pages/town";
import {BristolStokeBishop} from "./pages/town";
import {BristolWhitehall} from "./pages/town";
import {BristolYate} from "./pages/town";
import {BristolBarrsCourt} from "./pages/town";
import {BristolBradleyStoke} from "./pages/town";
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
<Route path="student-accommodation-in-birmingham" element={<Birmingham/>}/>
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
<Route path="student-accommodation-in-aberdeen" element={<Aberdeen/>}/>
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
<Route path="student-accommodation-in-aberystwyth" element={<Aberystwyth/>}/>
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
<Route path="student-accommodation-in-bangor" element={<Bangor/>}/>
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
<Route path="student-accommodation-in-bath" element={<Bath/>}/>
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
<Route path="student-accommodation-in-belfast" element={<Belfast/>}/>
<Route path="student-accommodation-in-bolton" element={<Bolton/>}/>
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
<Route path="student-accommodation-in-the-haulgh-bolton" element={<BoltonTheHaulgh/>}/>
<Route path="student-accommodation-in-tonge-fold-bolton" element={<BoltonTongeFold/>}/>
<Route path="student-accommodation-in-top-o-th-brow-bolton" element={<BoltonTopOThBrow/>}/>
<Route path="student-accommodation-in-burnden-bolton" element={<BoltonBurnden/>}/>
<Route path="student-accommodation-in-bradford" element={<Bradford/>}/>
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
<Route path="student-accommodation-in-brighton" element={<Brighton/>}/>
<Route path="student-accommodation-in-bristol" element={<Bristol/>}/>
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
<Route path="student-accommodation-in-crofts-end-bristol" element={<BristolCroftsEnd/>}/>
<Route path="student-accommodation-in-hudds-barton-bristol" element={<BristolHuddsBarton/>}/>
<Route path="student-accommodation-in-rose-green-bristol" element={<BristolRoseGreen/>}/>
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
<Route path="student-accommodation-in-cockshott-hill-bristol" element={<BristolCockshottHill/>}/>
<Route path="student-accommodation-in-hopewell-hill-bristol" element={<BristolHopewellHill/>}/>
<Route path="student-accommodation-in-lower-soundwell-bristol" element={<BristolLowerSoundwell/>}/>
<Route path="student-accommodation-in-chester-park-bristol" element={<BristolChesterPark/>}/>
<Route path="student-accommodation-in-air-balloon-hill-bristol" element={<BristolAirBalloonHill/>}/>
<Route path="student-accommodation-in-bell-hill-bristol" element={<BristolBellHill/>}/>
<Route path="student-accommodation-in-two-mile-hill-bristol" element={<BristolTwoMileHill/>}/>
<Route path="student-accommodation-in-rockleaze-bristol" element={<BristolRockleaze/>}/>
<Route path="student-accommodation-in-easton-bristol" element={<BristolEaston/>}/>
<Route path="student-accommodation-in-watleys-end-bristol" element={<BristolWatleysEnd/>}/>
<Route path="student-accommodation-in-chessels-bristol" element={<BristolChessels/>}/>
<Route path="student-accommodation-in-merrywood-bristol" element={<BristolMerrywood/>}/>
<Route path="student-accommodation-in-staple-hill-bristol" element={<BristolStapleHill/>}/>
<Route path="student-accommodation-in-redcliffe-bristol" element={<BristolRedcliffe/>}/>
<Route path="student-accommodation-in-brentry-bristol" element={<BristolBrentry/>}/>
<Route path="student-accommodation-in-kensington-hill-bristol" element={<BristolKensingtonHill/>}/>
<Route path="student-accommodation-in-conham-bristol" element={<BristolConham/>}/>
<Route path="student-accommodation-in-jeffries-hill-bristol" element={<BristolJeffriesHill/>}/>
<Route path="student-accommodation-in-kensington-park-bristol" element={<BristolKensingtonPark/>}/>
<Route path="student-accommodation-in-hanham-green-bristol" element={<BristolHanhamGreen/>}/>
<Route path="student-accommodation-in-emersons-green-bristol" element={<BristolEmersonsGreen/>}/>
<Route path="student-accommodation-in-warmley-hill-bristol" element={<BristolWarmleyHill/>}/>
<Route path="student-accommodation-in-downend-bristol" element={<BristolDownend/>}/>
<Route path="student-accommodation-in-upper-eastville-bristol" element={<BristolUpperEastville/>}/>
<Route path="student-accommodation-in-stone-hill-bristol" element={<BristolStoneHill/>}/>
<Route path="student-accommodation-in-sandy-park-bristol" element={<BristolSandyPark/>}/>
<Route path="student-accommodation-in-the-batch-bristol" element={<BristolTheBatch/>}/>
<Route path="student-accommodation-in-whites-hill-bristol" element={<BristolWhitesHill/>}/>
<Route path="student-accommodation-in-windmill-hill-bristol" element={<BristolWindmillHill/>}/>
<Route path="student-accommodation-in-woodstock-bristol" element={<BristolWoodstock/>}/>
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
