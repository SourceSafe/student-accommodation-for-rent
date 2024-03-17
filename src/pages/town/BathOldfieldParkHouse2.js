
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


const  BathOldfieldParkHouse2 = () => 
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

    return (<><h1>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-2-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 2 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£1170 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 2-bedroom student house in Oldfield Park, Bath, Somerset can be both exciting and challenging. With <b>UniBills.com</b>’s <b>all bills inclusive</b> service, you can enjoy the convenience of having all your bills covered in one easy payment. This means no more stressing about splitting utility costs with your housemates or dealing with unexpected expenses. By opting for the <b>all bills inclusive</b> option provided by <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life without the added burden of managing bills. Whether it’s gas, electricity, water, or internet, everything is taken care of for you. <b>UniBills.com</b> offers a hassle-free solution, allowing you to budget effectively and avoid any financial surprises. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and experience the freedom of worry-free living in your student house.</p><a id = "cheap_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, finding a shared 2 bedroom house for students in Oldfield Park, Bath can be a rewarding experience for those looking to live in a vibrant and student-friendly area. With its close proximity to local amenities, green spaces, and excellent transport links, Oldfield Park offers a convenient and lively living environment for students. The availability of 2 bedroom houses offers a great balance between privacy and shared living, making it an ideal option for those looking to live with a close friend or roommate. Additionally, the affordability of shared accommodation in Oldfield Park makes it an attractive choice for students looking to save on housing costs. In conclusion, exploring the options for shared 2 bedroom houses in Oldfield Park can lead to a comfortable and enjoyable student living experience in the heart of Bath.</p></>)
};

export default BathOldfieldParkHouse2;