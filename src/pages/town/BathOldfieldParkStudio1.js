
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


const  BathOldfieldParkStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-oldfield-park-bath.png')} alt='Studio Apartments for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_oldfield_park,_bath">Prices for Studio Apartments for Students in Oldfield Park, Bath</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__all_bills_inclusive">Studio Apartments for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_oldfield_park,_bath">Cheap Studio Apartments for Students in Oldfield Park, Bath</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__recently_added">Studio Apartments for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__recently_reduced">Studio Apartments for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_oldfield_park,_bath"> <h2>Prices for Studio Apartments for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1250 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a hassle-free accommodation option in Oldfield Park, Bath, Somerset? Look no further than <b>UniBills.com</b> for all your rental needs. Subscribing to an <b>all bills inclusive</b> service for your 1 bedroom student Studio will allow you to <b>concentrate on your studies</b> without worrying about utility bills or unexpected expenses. Enjoy the convenience of having your electricity, water, and internet bills all covered in one monthly payment. <b>UniBills.com</b> offers a simple and transparent pricing structure, making budgeting a breeze. Say goodbye to the stress of managing multiple bills and embrace the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from UniBills.</p><a id = "cheap_studio_apartments_for_students_in_oldfield_park,_bath"> <h2>Cheap Studio Apartments for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__recently_added"> <h2>Studio Apartments for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Studio Apartments for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for studio apartments for students in Oldfield Park, Bath can be a rewarding experience. These compact living spaces offer convenience, privacy, and independence for students looking to have their own place without the hassle of sharing with roommates. Oldfield Park, with its vibrant community and close proximity to the University of Bath, provides an ideal location for student living. With a range of amenities and transportation options nearby, students can enjoy a comfortable and convenient lifestyle in this charming neighborhood. Overall, studio apartments in Oldfield Park offer an attractive living option for students seeking a balance of affordability and quality accommodation.</p></>)
};

export default BathOldfieldParkStudio1;