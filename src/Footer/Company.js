import React from 'react';

let Company = (props) =>{

        return(

            <div className='Company' style={{margin:props.margins , width:props.widths , textAlign:props.textaligns}}>
                <h2>Company Details</h2>
                <p>Company Name</p>
                <p>Street Name & Number</p>
                <p>Town</p>
                <p>Postcode/Zip</p>
                <br/>
                <p>Tel: xxxxx xxxxxxxxxx</p>
                <p>Fax: xxxxx xxxxxxxxxx</p>
                <p>Email: contact@mydomain.com</p>
                <br/>
                <p>Office Hours</p>
                <p>Monday - Friday: 08:00 - 17:30</p>
                <p>Saturday: 08:00 - 13:00</p>
            </div>
        );
    }

export { Company };