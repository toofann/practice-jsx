import React from 'react';
import pinterest from '../img/3.png';

let Stay = props => {
  return (
    <div className="Stay" style={{ ...props.styles }}>
      <h2>Stay Social</h2>
      <div>
        <img src={require('../img/1.png')} alt="imgStay" />
        <a href=".">Get linked up in LinkedIn</a>
      </div>
      <div>
        <img src={require('../img/2.png')} alt="imgStay" />
        <a href=".">Keep up with our Tweets</a>
      </div>
      <div>
        <img src={pinterest} alt="imgStay" />
        <a href=".">Photos on Pinterest</a>
      </div>
      <div>
        <img src={require('../img/4.png')} alt="imgStay" />
        <a href=".">RSS Feed</a>
      </div>
      <div>
        <img src={require('../img/2.png')} alt="imgStay" />
        <a href=".">Keep up with our Tweets</a>
      </div>
      <div>
        <img src={require('../img/1.png')} alt="imgStay" />
        <a href=".">Get linked up in LinkedIn</a>
      </div>
    </div>
  );
};

export default Stay;
