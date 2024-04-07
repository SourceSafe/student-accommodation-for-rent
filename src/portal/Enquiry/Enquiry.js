import { useState } from 'react';
import { CTAPackage } from '../../components/CTAPackage/CTAPackage';
import  './Enquiry.css'
import {  useParams } from "react-router-dom";
import { ImCheckboxUnchecked, ImCheckboxChecked  } from "react-icons/im";
import { UtilityStrip } from '../../components/UtilityStrip/UtilityStrip';


export const Enquiry = () =>
{

    const { propertyId } = useParams();
    const [utilitiesChecked, setUtilitiesChecked] = useState(false);
    const [moreDetailsChecked, setMoreDetailsChecked] = useState(false);
    const [viewingChecked, setViewingChecked] = useState(false);



    return (
        <div className="main">       
        
            <div className = "enquiry">

            I would like: 
            <div className="row">

                <div style = {{display:'flex'}}>

                    <div className = "options">
                             
                        <div className = "option" onClick={() =>  setMoreDetailsChecked (state => !state)}>                                  
                            <div  >
                                {moreDetailsChecked === true ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>} 
                            </div>
                            <div>
                                More details
                            </div>  
                        </div>

                        <div className = "option" onClick={() =>  setViewingChecked (state => !state)}>                                  
                        <div  >
                                {viewingChecked === true ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>} 
                            </div>
                            <div>
                                To view a property
                            </div>  
                        </div>

                    </div>
                        
                </div>

            </div>
            
                
                <div className="row">
                    <div className="labelFieldPair">
                        <div className="label">
                            First Name
                        </div>
                        <div className="field fieldSmall">
                            Eg. John
                        </div>
                    </div>                            
                    <div className="labelFieldPair">
                        <div className="label">
                            Last Name
                        </div>
                        <div className="field fieldSmall">
                            Eg. Smith
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="labelFieldPair">
                        <div className="label">
                            Email
                        </div>
                        <div className="field fieldLarge">
                            Enter Here            
                        </div>
                    </div>                                            
                </div>

                
                <div className="row">
                <div className="labelFieldPair">
                        <div className="label">
                            Telephone
                        </div>
                        <div className="field fieldLarge">
                            Enter Here            
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="labelFieldPair">
                        <div className="label">
                            Email
                        </div>
                        <div className="field fieldLarge">
                            Eg. david@bittechno.com
                        </div>
                    </div>
                </div>

                
                <div className="row">
                <div className="labelFieldPair">
                        <div className="label">
                            Country
                        </div>
                        <div className="field fieldLarge">
                            Eg. UK
                        </div>
                    </div>
                </div>

                
                <div className="row">
                <div className="labelFieldPair">
                        <div className="label">
                            Postcode
                        </div>
                        <div className="field fieldLarge">
                            Eg. MK6 61AJ
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="labelFieldPair">
                        <div className="label">
                            Your message (Optional)
                        </div>
                        <div className="field fieldLarge fieldMessage">
                            Start typing
                        </div>
                    </div>
                </div>

                <div className="row">
                    <button className  = "sendEmail">
                        Send email
                    </button>                
                </div>





            </div>     


            

                <div className = "cat">
                                                
                    <div>
                        <h2>Enjoy All Inclusive Utility Bills for this property</h2>

                        <p>This property is EXCLUSIVE of bills. To make life easier we've partnered with Fused.com to offer an All Inclusive Utility Package on this Property. Let Fused.com  deal with your Gas, Electric, Water, Broadband and TV providers. All you need to do is pay an even split each month. </p>
   
                        <div className = "utilityoption"  onClick={() =>  setUtilitiesChecked (state => !state)}>                                  
                        <div >
                                {utilitiesChecked === true ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/> } 
                            </div>
                            <div>
                                I would you like to be contacted by FUSED.com to discuss an All Bills Inclusive Package
                            </div>  
                        </div>
                        <UtilityStrip/>
                                            
                        {utilitiesChecked === true && 
                        <div> 
                            {/* <UtilityStrip/> */}
                        {/* <CTAPackage tag1 = "Excellent !!!" tag2 = "We'll call you back ..."/>                     */}
                        
                        </div>
                        }
                    </div>                                
                </div>
            


        </div>
    )
}