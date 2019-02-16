import React from 'react';

let Form = (props) => {

        return(

            <div className='Form'>
                <h2>From The Blog</h2>
                <p>Blog Post Title</p>
                <p>Posted by Admin on 00.00.0000</p>
                <br/>
                <p>Vestibulumaccumsan<br/></p>
                <p>egestibulum eu justo<br/></p>
                <p>convallis augue estas aenean elit<br/></p>
                <p>convallis augue estas aenean elit<br/></p>
                <p>intesque sed facilis pedeestas<br/></p>
                <p>aenean elit intesque sed<br/></p>
                <p>facilispede estibulu.<br/></p>
                <br/>
                {props.children}
            </div>
        );
    }

export { Form };