import { Link } from 'react-router-dom';import './styles-town.css';import { MdOutlineQueryStats } from "react-icons/md";import { BsFillHouseFill } from "react-icons/bs";import { FaMagnifyingGlassChart } from "react-icons/fa6";const  BathBeaconHillStudio1 = () => {return (<><h1>Studio Apartments for Students in Beacon Hill, Bath</h1><ul><li><a href = "#average_rents_for_studio_apartments_for_students_in_beacon_hill,_bath">Average Rents for Studio Apartments for Students in Beacon Hill, Bath</a></li></ul><a id = "average_rents_for_studio_apartments_for_students_in_beacon_hill,_bath"> <h2>Average Rents for Studio Apartments for Students in Beacon Hill, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1309 per month </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^61718" title = 'View our Studio Apartments for Students in Beacon Hill, Bath'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td></tr></table></p></>)};export default BathBeaconHillStudio1;