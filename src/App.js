import React  from 'react';
import './App.css';
import { Company , Stay , Form , Contact } from './Footer/Footerexport';

function App(){

  return (

      <footer className='Footer'>
          <Company margins ='100px 0px 120px 0px' widths ='250px' textaligns = 'center'/>
          <Stay styles = {{margin:'100px 0px 120px 0px' , width:'250px' , textAlign:'center'}}/>   
          <Form><p><a href='.'>Read More »</a></p></Form>
          <Contact><button className='Button' type="submit">Submit</button></Contact>
      </footer>

    );
  }

export default App;
