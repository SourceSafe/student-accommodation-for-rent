import { Link } from 'react-router-dom';import './styles-town.css';import { MdOutlineQueryStats } from "react-icons/md";import { BsFillHouseFill } from "react-icons/bs";import { FaMagnifyingGlassChart } from "react-icons/fa6";const  BathAvonParkStudio1 = () => {return (<><h1>Studio Apartments for Students in Avon Park, Bath</h1><ul><li><a href = "#average_rents_for_studio_apartments_for_students_in_avon_park,_bath">Average Rents for Studio Apartments for Students in Avon Park, Bath</a></li></ul><a id = "average_rents_for_studio_apartments_for_students_in_avon_park,_bath"> <h2>Average Rents for Studio Apartments for Students in Avon Park, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1309 per month </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71091" title = 'View our Studio Apartments for Students in Avon Park, Bath'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td></tr></table></p></>)};export default BathAvonParkStudio1;