import { Link } from 'react-router-dom';import './styles-town.css';import { MdOutlineQueryStats } from "react-icons/md";import { BsFillHouseFill } from "react-icons/bs";import { FaMagnifyingGlassChart } from "react-icons/fa6";const  BathKingsmeadFlat1 = () => {return (<><h1>Shared 1 Bedroom Flats for Students in Kingsmead, Bath</h1><ul><li><a href = "#average_rents_for_shared_1_bedroom_flats_for_students_in_kingsmead,_bath">Average Rents for Shared 1 Bedroom Flats for Students in Kingsmead, Bath</a></li></ul><a id = "average_rents_for_shared_1_bedroom_flats_for_students_in_kingsmead,_bath"> <h2>Average Rents for Shared 1 Bedroom Flats for Students in Kingsmead, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1250 per month </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71101" title = 'View our Shared 1 Bedroom Flats for Students in Kingsmead, Bath'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td></tr></table></p></>)};export default BathKingsmeadFlat1;