import React from 'react';

let Contact = (props) => {

        return(

            <div className='Contact'>
                <h2>Contact Us</h2>
                <input className='Input' placeholder='Name'></input>
                <input className='Input' placeholder='Email'></input>
                <textarea className='Textarea' placeholder='Message'></textarea>
                {props.children}
            </div>
        );
    }

export { Contact };