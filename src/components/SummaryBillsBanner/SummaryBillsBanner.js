import "./SummaryBillsBanner.css"
export const SummaryBillsBanner = (props) =>
{

    const {billsOfferedByAgent} = props;

    return(
        <div>            
                {billsOfferedByAgent == true ?
                <div className = "offeredByAgent">                    
                     
                <div style={{ fontSize:'small',  display:'flex', flexDirection:'column', alignItems: 'center'}}>                    
                    <div>
                        All Bills Included
                    </div>
                    <div>
                        by Agent
                    </div>
                </div>
                </div>
                : <div className = "available">                    

                
                <div style={{ fontSize:'small',  display:'flex', flexDirection:'column', alignItems: 'center'}}>                    
                    <div>
                        All Bills Included
                    </div>
                    <div>
                        Option Available
                    </div>
                </div>


                    
                </div>               
                }                     
        </div>
    )
}