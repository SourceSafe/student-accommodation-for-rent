import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {Portal} from "../portal/Portal"
import "../pages/town/styles-town.css"
import { VitalStats } from "../portal/VitalStats/VitalStats";
import { isDesktopAtom } from '../portal/appState/appState';
import { useAtomState } from '@zedux/react';

const Home = () => {
const [isDesktop, setIsDesktop] = useAtomState(isDesktopAtom);

const [windowSize, setWindowSize] = useState([
  window.innerWidth,
  window.innerHeight,
]);


useEffect(() => {
  const handleWindowResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  window.addEventListener('resize', handleWindowResize);

  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
}, []);




  setIsDesktop(windowSize[0] > 600);



  
  return (
    <div>
      <div style = {{display:'flex', justifyContent:'space-between'}}>
        <div>
          {isDesktop &&  <h1>Student Accommodation For Rent</h1>    }
        </div>
        <div>
          {/* {isDesktop && <VitalStats> </VitalStats>} */}
        </div>            
      </div>
      

      
      <Portal   initTown={1} initBeds={3} initArea={3} initType={1} ></Portal>;

      
      <ul style = {{display:"flex", flexWrap:"wrap"}}>
        {/* townSectionStart */}            
<li><Link to="/student-accommodation-in-aberdeen">Student Accommodation in Aberdeen</Link></li>
<li><Link to="/student-accommodation-in-aberystwyth">Student Accommodation in Aberystwyth</Link></li>
<li><Link to="/student-accommodation-in-bangor">Student Accommodation in Bangor</Link></li>
<li><Link to="/student-accommodation-in-bath">Student Accommodation in Bath</Link></li>
<li><Link to="/student-accommodation-in-belfast">Student Accommodation in Belfast</Link></li>
<li><Link to="/student-accommodation-in-birmingham">Student Accommodation in Birmingham</Link></li>
<li><Link to="/student-accommodation-in-bolton">Student Accommodation in Bolton</Link></li>
<li><Link to="/student-accommodation-in-bradford">Student Accommodation in Bradford</Link></li>
<li><Link to="/student-accommodation-in-brighton">Student Accommodation in Brighton</Link></li>
<li><Link to="/student-accommodation-in-bristol">Student Accommodation in Bristol</Link></li>
<li><Link to="/student-accommodation-in-buckingham">Student Accommodation in Buckingham</Link></li>
<li><Link to="/student-accommodation-in-cambridge">Student Accommodation in Cambridge</Link></li>
<li><Link to="/student-accommodation-in-canterbury">Student Accommodation in Canterbury</Link></li>
<li><Link to="/student-accommodation-in-cardiff">Student Accommodation in Cardiff</Link></li>
<li><Link to="/student-accommodation-in-carlisle">Student Accommodation in Carlisle</Link></li>
<li><Link to="/student-accommodation-in-carmarthen">Student Accommodation in Carmarthen</Link></li>
<li><Link to="/student-accommodation-in-chelmsford">Student Accommodation in Chelmsford</Link></li>
<li><Link to="/student-accommodation-in-cheltenham">Student Accommodation in Cheltenham</Link></li>
<li><Link to="/student-accommodation-in-chester">Student Accommodation in Chester</Link></li>
<li><Link to="/student-accommodation-in-chichester">Student Accommodation in Chichester</Link></li>
<li><Link to="/student-accommodation-in-cirencester">Student Accommodation in Cirencester</Link></li>
<li><Link to="/student-accommodation-in-colchester">Student Accommodation in Colchester</Link></li>
<li><Link to="/student-accommodation-in-coleraine">Student Accommodation in Coleraine</Link></li>
<li><Link to="/student-accommodation-in-coventry">Student Accommodation in Coventry</Link></li>
<li><Link to="/student-accommodation-in-cranfield">Student Accommodation in Cranfield</Link></li>
<li><Link to="/student-accommodation-in-derby">Student Accommodation in Derby</Link></li>
<li><Link to="/student-accommodation-in-dundee">Student Accommodation in Dundee</Link></li>
<li><Link to="/student-accommodation-in-durham">Student Accommodation in Durham</Link></li>
<li><Link to="/student-accommodation-in-ealing">Student Accommodation in Ealing</Link></li>
<li><Link to="/student-accommodation-in-edinburgh">Student Accommodation in Edinburgh</Link></li>
<li><Link to="/student-accommodation-in-egham">Student Accommodation in Egham</Link></li>
<li><Link to="/student-accommodation-in-exeter">Student Accommodation in Exeter</Link></li>
<li><Link to="/student-accommodation-in-falmouth">Student Accommodation in Falmouth</Link></li>
<li><Link to="/student-accommodation-in-farnham">Student Accommodation in Farnham</Link></li>
<li><Link to="/student-accommodation-in-glasgow">Student Accommodation in Glasgow</Link></li>
<li><Link to="/student-accommodation-in-gloucester">Student Accommodation in Gloucester</Link></li>
<li><Link to="/student-accommodation-in-guildford">Student Accommodation in Guildford</Link></li>
<li><Link to="/student-accommodation-in-hatfield">Student Accommodation in Hatfield</Link></li>
<li><Link to="/student-accommodation-in-high-wycombe">Student Accommodation in High Wycombe</Link></li>
<li><Link to="/student-accommodation-in-huddersfield">Student Accommodation in Huddersfield</Link></li>
<li><Link to="/student-accommodation-in-hull">Student Accommodation in Hull</Link></li>
<li><Link to="/student-accommodation-in-inverness">Student Accommodation in Inverness</Link></li>
<li><Link to="/student-accommodation-in-ipswich">Student Accommodation in Ipswich</Link></li>
<li><Link to="/student-accommodation-in-keele">Student Accommodation in Keele</Link></li>
<li><Link to="/student-accommodation-in-kingston-upon-thames">Student Accommodation in Kingston upon Thames</Link></li>
<li><Link to="/student-accommodation-in-lancaster">Student Accommodation in Lancaster</Link></li>
<li><Link to="/student-accommodation-in-leeds">Student Accommodation in Leeds</Link></li>
<li><Link to="/student-accommodation-in-leicester">Student Accommodation in Leicester</Link></li>
<li><Link to="/student-accommodation-in-lincoln">Student Accommodation in Lincoln</Link></li>
<li><Link to="/student-accommodation-in-liverpool">Student Accommodation in Liverpool</Link></li>
<li><Link to="/student-accommodation-in-london">Student Accommodation in London</Link></li>
<li><Link to="/student-accommodation-in-loughborough">Student Accommodation in Loughborough</Link></li>
<li><Link to="/student-accommodation-in-luton">Student Accommodation in Luton</Link></li>
<li><Link to="/student-accommodation-in-manchester">Student Accommodation in Manchester</Link></li>
<li><Link to="/student-accommodation-in-middlesbrough">Student Accommodation in Middlesbrough</Link></li>
<li><Link to="/student-accommodation-in-newcastle-upon-tyne">Student Accommodation in Newcastle upon Tyne</Link></li>
<li><Link to="/student-accommodation-in-newport">Student Accommodation in Newport</Link></li>
<li><Link to="/student-accommodation-in-northampton">Student Accommodation in Northampton</Link></li>
<li><Link to="/student-accommodation-in-norwich">Student Accommodation in Norwich</Link></li>
<li><Link to="/student-accommodation-in-nottingham">Student Accommodation in Nottingham</Link></li>
<li><Link to="/student-accommodation-in-ormskirk">Student Accommodation in Ormskirk</Link></li>
<li><Link to="/student-accommodation-in-oxford">Student Accommodation in Oxford</Link></li>
<li><Link to="/student-accommodation-in-paisley">Student Accommodation in Paisley</Link></li>
<li><Link to="/student-accommodation-in-plymouth">Student Accommodation in Plymouth</Link></li>
<li><Link to="/student-accommodation-in-pontypridd">Student Accommodation in Pontypridd</Link></li>
<li><Link to="/student-accommodation-in-poole">Student Accommodation in Poole</Link></li>
<li><Link to="/student-accommodation-in-portsmouth">Student Accommodation in Portsmouth</Link></li>
<li><Link to="/student-accommodation-in-preston">Student Accommodation in Preston</Link></li>
<li><Link to="/student-accommodation-in-reading">Student Accommodation in Reading</Link></li>
<li><Link to="/student-accommodation-in-salford">Student Accommodation in Salford</Link></li>
<li><Link to="/student-accommodation-in-sheffield">Student Accommodation in Sheffield</Link></li>
<li><Link to="/student-accommodation-in-southampton">Student Accommodation in Southampton</Link></li>
<li><Link to="/student-accommodation-in-st-andrews">Student Accommodation in St Andrews</Link></li>
<li><Link to="/student-accommodation-in-stirling">Student Accommodation in Stirling</Link></li>
<li><Link to="/student-accommodation-in-stoke-on-trent">Student Accommodation in Stoke-on-Trent</Link></li>
<li><Link to="/student-accommodation-in-sunderland">Student Accommodation in Sunderland</Link></li>
<li><Link to="/student-accommodation-in-swansea">Student Accommodation in Swansea</Link></li>
<li><Link to="/student-accommodation-in-twickenham">Student Accommodation in Twickenham</Link></li>
<li><Link to="/student-accommodation-in-uxbridge">Student Accommodation in Uxbridge</Link></li>
<li><Link to="/student-accommodation-in-winchester">Student Accommodation in Winchester</Link></li>
<li><Link to="/student-accommodation-in-wolverhampton">Student Accommodation in Wolverhampton</Link></li>
<li><Link to="/student-accommodation-in-worcester">Student Accommodation in Worcester</Link></li>
<li><Link to="/student-accommodation-in-wrexham">Student Accommodation in Wrexham</Link></li>
<li><Link to="/student-accommodation-in-york">Student Accommodation in York</Link></li>
        {/* townSectionEnd */}        
      </ul>

    </div>  
  )
};

export default Home;
