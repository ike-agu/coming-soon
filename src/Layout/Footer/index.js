import React from 'react'
// import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './style.css'



export const Footer = () => {
  return (
<>
    <div className='footerSection'>
      <div className="footerColumn">
        <h2>Weekly service</h2>
        <p>Sunday service: 1:30pm - 3:45pm</p>
        <p>Wednesday Prayers on zoom: 9pm - 10pm</p>
        <p>Friday Bible study: 9pm - 10pm</p>
        <p>Night Vigil: Every last friday of the month 10pm -12 midnight</p>
      </div>
      <div className="footerColumn">
        <h2>Contact</h2>
        <p>97, East Barnet Road, New barnet, Hertfordshire</p>
        <p>info@graceempowermentassembly.org</p>
        <p>Mobile 1: 07984413361</p>
        <p>Mobile 2: 07494052360</p>
      </div>
      <div className="footerColumn">
         <h2>Connect with us</h2>
          <div className="iconLinks">
            <a href="https://www.youtube.com/channel/UC0g5vdBj6NUXYJ1up-PCoiA/videos" rel="noreferrer"  target="_blank"><FontAwesomeIcon icon={faYoutube} className="iconLinks"/></a>
            <a href="https://www.youtube.com/channel/UC0g5vdBj6NUXYJ1up-PCoiA/videos" rel="noreferrer"  target="_blank"><FontAwesomeIcon icon={faFacebook} className="iconLinks"/></a>
            <a href="https://www.youtube.com/channel/UC0g5vdBj6NUXYJ1up-PCoiA/videos" rel="noreferrer"  target="_blank"><FontAwesomeIcon icon={faInstagram} className="iconLinks"/></a>
            <a href="https://www.youtube.com/channel/UC0g5vdBj6NUXYJ1up-PCoiA/videos" rel="noreferrer"  target="_blank"><FontAwesomeIcon icon={faTwitter} className="iconLinks"/></a>
          </div>
      </div>
    </div>
    <div className="copyright">
      <p class="copyright"><i>© Grace Empowerment Assembly 2022. Charity number: 1173929

 Designed by</i>
              <i>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/ikenna-agulobi/" target="_blank"> Sinon Tech.</a>
              </i>

            </p>
    </div>
  </>
  )
}
