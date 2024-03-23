
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom} from '../../portal/appState/appState'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathBloomfieldStudio1 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              

    const routeToPortal = (params ) => {                  
        const queryParameters = new URLSearchParams(params)
        const town= queryParameters.get("t  ownLocationId");
        const location = queryParameters.get("areaLocationId");
        const beds= queryParameters.get("beds");
        const homeType = queryParameters.get("type");        
        const newFilter = { town, location, beds, homeType};
        setFilters(newFilter)        
        setButtonClicked(true);
    }

    useEffect(()=> 
    {
        if(buttonClicked && filters) {
            navigate("/")
        }        
    }    
    ,[buttonClicked, filters]
    )

    return (<><h1>Studio Apartments for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-bloomfield-bath.png')} alt='Studio Apartments for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_bloomfield,_bath">Prices for Studio Apartments for Students in Bloomfield, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__all_bills_inclusive">Studio Apartments for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_bloomfield,_bath">Cheap Studio Apartments for Students in Bloomfield, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__recently_added">Studio Apartments for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__recently_reduced">Studio Apartments for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_bloomfield,_bath"> <h2>Prices for Studio Apartments for Students in Bloomfield, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 1-bedroom student Studio in Bloomfield, Bath, Somerset can offer you the ultimate convenience and peace of mind. By choosing <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by their service. With all bills such as electricity, water, internet, and council tax rolled into one monthly payment, you can focus all your energy on your studies without the stress of managing multiple bills. <b>UniBills.com</b> takes care of everything, allowing you to simply relax and concentrate on your academic pursuits. To simplify your student life and eliminate unnecessary distractions, consider opting for an <b>all bills inclusive</b> service like the one offered by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website to experience the benefits for yourself.</p><a id = "cheap_studio_apartments_for_students_in_bloomfield,_bath"> <h2>Cheap Studio Apartments for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bloomfield,_bath__recently_added"> <h2>Studio Apartments for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Studio Apartments for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a studio apartment for students in Bloomfield, Bath can be a challenging yet rewarding experience. With its close proximity to the university campus and vibrant student community, Bloomfield offers a great location for students looking for independence and convenience. Studio apartments provide the perfect balance of privacy and affordability, allowing students to focus on their studies while enjoying the perks of living in a bustling neighborhood. When searching for the ideal studio apartment, consider factors such as location, amenities, and budget to ensure a comfortable and enjoyable living experience. Ultimately, studio apartments in Bloomfield offer a great opportunity for students to thrive academically and socially in a welcoming and dynamic environment.</p></>)
};

export default BathBloomfieldStudio1;