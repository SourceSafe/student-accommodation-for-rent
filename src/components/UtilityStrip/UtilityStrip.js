import  './UtilityStrip.css'

const utilities = [{src:"https://cdn-p0.unihomes.co.uk/images/icons/22-icon-gas.png?id=7469a38637911d020330035443541388ef57c441", title:"Gas"},
{src:"https://cdn-p0.unihomes.co.uk/images/icons/22-icon-electricity.png?id=7469a38637911d020330035443541388ef57c441", title:"Electricity"},
{src:"https://cdn-p0.unihomes.co.uk/images/icons/22-icon-internet.png?id=7469a38637911d020330035443541388ef57c441", title:"Fibre Internet"},
{src:"https://cdn-p0.unihomes.co.uk/images/icons/22-icon-water.png?id=7469a38637911d020330035443541388ef57c441", title:"Water"},
{src:"https://cdn-p0.unihomes.co.uk/images/icons/22-icon-tv-licence.png?id=7469a38637911d020330035443541388ef57c441", title:"TV Licence"}]


export const UtilityStrip = () =>
{
    return(          
        <div className = "utilitiyIcons">       
        {utilities.map(item =>  
                <div className = "utilityTickPair">
                    <div className = "utilityImage">
                        <img className = "utilityImage" src = {item.src}></img>
                    </div>
                    <div className = "utility">
                        {item.title}
                    </div>
                </div>    
                    )}

        </div>            
    )   
}