import React, { useState } from 'react';
import './Links.css';

const Links = function() {
  const [links, setLinks] = useState(["google.com","facebook.com","instagram.com","nike.com"]);

  return (
    <ul className="links">
     {links.map((link, idx) => {
       return <li id="{idx}">{link}</li>
      })}
    </ul>
  );
};

export default Links;
