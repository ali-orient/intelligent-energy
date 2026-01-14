import React from 'react'
import { Link } from 'react-router-dom'
import intelligentLogo from '../data/Intelligent New LOGO 2025.png'

export default function Footer() {
  return (
    <footer className="footer footer-elegant">
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',gap:30}}>
          
          {/* Logo Section */}
          <div>
            <Link to="/" style={{display:'inline-block',marginBottom:20}}>
              <img src={intelligentLogo} alt="Intelligent Energy" style={{width:270,maxWidth:'100%'}} />
            </Link>
          </div>

          {/* OES Family */}
          <div>
            <h3>OES Family</h3>
            <ul style={{listStyle:'none',padding:0,margin:0,lineHeight:1.8}}>
              <li><span>Orient Oils</span></li>
              <li><span>Orient Rental Modaraba</span></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3>Links</h3>
            <ul style={{listStyle:'none',padding:0,margin:0,lineHeight:1.8}}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/quality-health-safety-and-environment">QHSE</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/request-a-quote">Request a Quote</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
              <li>
                  <a href="/Documents/oes-flyer-1.PDF" target="_blank" className="thm-btn" style={{padding: '5px 15px', fontSize: '12px', marginTop: '10px', display: 'inline-block'}}>
                      Download Flyer
                  </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
             <h3>Services</h3>
             <ul style={{listStyle:'none',padding:0,margin:0,lineHeight:1.8}}>
                <li><Link to="/engineering">Engineering</Link></li>
                <li><Link to="/services">Product Support Services</Link></li>
                <li><Link to="/product-support-parts">Product Support Parts</Link></li>
             </ul>
          </div>

          {/* Map */}
          <div>
            <img src="/img/map.png" alt="Map" style={{width:'100%',maxWidth:370,height:'auto'}} />
          </div>

        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Intelligent Energy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
