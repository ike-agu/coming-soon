import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './style.css'


export const Header = () => {
    return(
      <>
      <div className='navDetails'>
            <p><FontAwesomeIcon icon={faPhone} className="cardIcon"/> 07984413361</p>
            <p><FontAwesomeIcon icon={faLocationDot}  className="cardIcon" />  97 East Barnet Road New barnet Hertfordshire</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="cardIcon"/> info@graceempowermentassembly.com</p>
        </div>
        <nav>

          <div className='navLinks'>
            <h1>Site under construction </h1>
          </div>
        </nav>

      </>
    )
};
