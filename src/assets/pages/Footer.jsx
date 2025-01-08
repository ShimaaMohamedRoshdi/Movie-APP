import React from 'react'

import './footer.css';

import FooterNavItem from '../components/FooterNavItem'

const Footer = () => {
    const usefulLinks=[
        'Home',
        'Movies',
        'My List',
        'Terms of service',
        'Privacy Policy'
    ];
    const locations=[
        'Cairo',
        'Alexandria',
        'Port Said',
        'Suez',
        'Ismaelia'
    ]
  return (
   <footer id='footer ' className='footer'>
     <div className="footer-top">
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                    <a href="/" className='logo d-flex align-items-center '>
                      <span>CINEMA</span>
                      </a>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Eius quibusdam eveniet expedita, nesciunt nulla, optio r
                        eprehenderit illo nemo repellat .. 
                       
                      </p>
                      <div className="social-links mt-3">
                        <a href="#" className='twitter'>
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a href="#" className='facebook'>
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="#" className='instagram'>
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        <a href="#" className='youtube'>
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                      </div>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                    <h4>Our Cinemas</h4>
                    <ul>
                        {
                           
                            usefulLinks.map(link=>(
                                 <FooterNavItem key={link} name={link}/>
                             
                                
                            ))
                        }
                    </ul>

                </div>
                <div className="col-lg-2 col-6 footer-links">
                    <h4>Our Cinemas</h4>
                    <ul>
                        {
                            locations.map(link=>(
                                <FooterNavItem key={link} name={link}/>
                            ))
                        }
                    </ul>

                </div>
                <div className='col-lg-3 col-md-12 footer-contact text-center text-md-start'>
                    <h4>Contact Us</h4>
                    <p>
                        Street Name <br/>
                        City Name ,State 123456
                        <br/>
                        Australia<br/>
                        <br/>
                        <strong>Phone:</strong>00982347
                        <br/>
                        <strong>Email:</strong>shimaamohamedd462@gmail.com
                        <br/>
                    </p>

                </div>

            </div>
        </div>
     </div>
     <div className="container">
        <div className="copyright">
            <p>&copy; 2025 Cinema. All Rights Reserved</p>
        </div>
        <div className="credits">
            Designed by <a href="#">Shimaa Mohamed</a>
        </div>
     </div>
   </footer>
  )
}

export default Footer