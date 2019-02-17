import React from 'react';

let Contact = props => {
  return (
    <div className="Contact">
      <h2>Contact Us</h2>
      <input className="Input" placeholder="Name" />
      <input className="Input" placeholder="Email" />
      <textarea className="Textarea" placeholder="Message" />
      <button className="Button" type="submit">
        Submit
      </button>
    </div>
  );
};

export { Contact };
