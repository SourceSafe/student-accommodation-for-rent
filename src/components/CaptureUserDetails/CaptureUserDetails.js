import  './CaptureUserDetails.css'


export const CaptureUserDetails = () =>
{
    return (
        <div className="main">


            <div className="row">
                <div className="labelFieldPair">
                    <div className="label">
                        First Name
                    </div>
                    <div className="field">
                        Enter Here            
                    </div>
                </div>                            
                <div className="labelFieldPair">
                    <div className="label">
                        Last Name
                    </div>
                    <div className="field">
                        Enter Here            
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="labelFieldPair">
                    <div className="label">
                        Email
                    </div>
                    <div className="field">
                        Enter Here            
                    </div>
                </div>                            
                <div className="labelFieldPair">
                    <div className="label">
                        Telephone
                    </div>
                    <div className="field">
                        Enter Here            
                    </div>
                </div>
            </div>


        </div>
    )
}