
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


const  BathHatStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Hat, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-hat-bath.png')} alt='Studio Apartments for Students in Hat, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_hat,_bath">Prices for Studio Apartments for Students in Hat, Bath</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__all_bills_inclusive">Studio Apartments for Students in Hat, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_hat,_bath">Cheap Studio Apartments for Students in Hat, Bath</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__recently_added">Studio Apartments for Students in Hat, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__recently_reduced">Studio Apartments for Students in Hat, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_hat,_bath"> <h2>Prices for Studio Apartments for Students in Hat, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Hat, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_hat,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Hat, Bath - All Bills Inclusive</h2></a><p>Are you a student residing in a 1 bedroom studio in Hat, Bath, Somerset, and looking for a convenient way to manage your living expenses? Look no further than <b>UniBills.com</b>, where you can enjoy the benefits of an <b>all bills inclusive</b> service. By opting for this hassle-free option, you can <b>concentrate on your studies</b> without the added stress of managing utility bills. <b>UniBills.com</b> takes care of all your bills, including electricity, water, heating, and internet, allowing you to budget effectively and avoid any surprises at the end of the month. Say goodbye to the worry of splitting bills with housemates or dealing with multiple providers - simply enjoy the convenience and peace of mind that comes with an all inclusive package. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the ease and simplicity of the <b>all bills inclusive</b> service today.</p><a id = "cheap_studio_apartments_for_students_in_hat,_bath"> <h2>Cheap Studio Apartments for Students in Hat, Bath</h2></a><p><Portlet location="REGION^61721" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_hat,_bath__recently_added"> <h2>Studio Apartments for Students in Hat, Bath - Recently Added</h2></a><p><Portlet location="REGION^61721" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_hat,_bath__recently_reduced"> <h2>Studio Apartments for Students in Hat, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61721" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, looking for studio apartments for students in Hat, Bath can be a challenging yet rewarding process. With convenient locations near universities and amenities, these living spaces offer a cozy and independent environment for students to thrive in. From affordable prices to modern facilities, studio apartments in Hat, Bath cater to the specific needs of students, providing a comfortable and conducive space for studying and relaxation. In conclusion, the search for the perfect studio apartment in Hat, Bath is well worth the effort, offering students a convenient and enjoyable living experience during their academic journey. Whether you're after a quiet retreat or a vibrant social scene, studio apartments in Hat, Bath have something for everyone. Be sure to explore your options and find the perfect studio apartment that suits your needs and preferences.</p></>)
};

export default BathHatStudio1;