import React, { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import aboutSideImage from '../data/about-us.jpeg'

export default function GenericPage({ title }) {
  const location = useLocation()
  const isAbout = location.pathname === '/about'
  const isEngineering = location.pathname === '/engineering'
  const isProductSupportParts = location.pathname === '/product-support-parts'
  const isLubeOil = location.pathname === '/lube-oil'
  const isPowerGeneration = location.pathname === '/power-generation'
  const isRenewableEnergy = location.pathname === '/renewable-energy'
  const isFireSecurity = location.pathname === '/fire-security'
  const isHvacr = location.pathname === '/hvacr'
  const isPumpsCompressors = location.pathname === '/pumps-compressors'
  const isMachinery = location.pathname === '/machinery'
  const isEpcTransmissionDistributionSolution = location.pathname === '/epc-transmission-distribution-solution'

  const timeline = useMemo(
    () => [
      {
        id: 'year-1996',
        label: '1996',
        img: '/img/time-line-01.jpg',
        heading: 'The Beginning...',
        body:
          "Intelligent Energy started its journey in 1996 with five highly motivated people. The main objective was to set up a firm which could meet the growing needs of industries in terms of power generation, in the finest and most reliable way. Intelligent Energy started as the Asset Manager of one of the largest rental fleet in the country, Orix Leasing Pakistan Limited (OLP). By the grace of Almighty and efforts of the founders, this 5 people company turned into a group company in less than a decade’s time. Today, we have four independently running entities."
      },
      {
        id: 'year-1999',
        label: '1999',
        img: '/img/time-line-02.jpg',
        heading: "Jenbacher’s Distribution",
        body:
          "In 1999 the competition was getting intense. Ever rising cost of electricity followed by frequent power outages was making it tougher for regional industrial sector to compete. The sector required a reliable alternate solution. Intelligent Energy proudly offered power system solutions from Jenbacher which is still the world’s best and the largest gas generator manufacturer with the lowest gas consumption and operating cost. We has sold 875+ INNIO Jenbacher gas gensets generating more than 1245MW of power in the regional territory."
      },
      {
        id: 'year-2005',
        label: '2005',
        img: '/img/time-line-03.jpg',
        heading: 'OES Middle East',
        list: [
          'Head office in Dubai',
          'Office Area: 2,700 sq. ft',
          'Total Employees : 24',
          'OES FZCO (Free Zone Company)',
          'Intelligent Energy Generating Equipment Trading LLC',
          'Warehouse Area- JAFZA: 70,000 sq.ft , DAFZA: 3,500 sq.ft'
        ]
      },
      {
        id: 'year-2009',
        label: '2009',
        img: '/img/time-line-04.jpg',
        heading: 'Cummins Distribution',
        body:
          'In 2009, Intelligent Energy Pvt Ltd became the official Distributor for Cummins Diesel Engines & Genset. Offering diesel engine powered generator sets from 22 kVA to 3325 kVA. Just with in no time we had outdone itself and received "Brand of the Year" for Cummins Diesel Engines.'
      },
      {
        id: 'year-2012',
        label: '2012',
        img: '/img/time-line-05.jpg',
        heading: 'OES Building & 1000th Engine',
        body:
          'OES management, aims to create inspirational, collaborative, and healthy workspaces in the five-story building, spread over 5100 sq. yds. The office incorporates state-of-the-art building addresses the needs of tech companies, helping to attract an innovative workforce to us, ultimately making this a noteworthy building in one of the biggest industrial zone of region. In 2013, we sold 1000th Jenbacher gas genset which marked 1400 MW of sold power by us. It was the largest concentration of Jenbacher gas engines in any country around the World.'
      },
      {
        id: 'year-2014-Present',
        label: '2014-Present',
        img: '/img/time-line-06.jpg',
        heading: 'From then till now...',
        body:
          'Orient is providing the most indigenous solutions to industrial needs in terms of Power Generation, Heat Recovery, HVACR, Pumps, T&D, Earth Moving Machines, Compressors etc., Not only industrial needs but we have also served the IPPs for Power generation. Our K-Electric 193 MW (back in 2009), Zephyr 50 MW Wind Farm commissioned in Q1 2019, and many others which are available on our website have been the “Real Deal” for us, the Flagship projects to have added to the “Our  success stories”.'
      }
    ],
    []
  )
  const [activeYearId, setActiveYearId] = useState('year-1996')
  const activeYear = timeline.find(t => t.id === activeYearId) || timeline[0]
  const isServices = location.pathname === '/services' || location.pathname === '/product-support'
  const [lubeOilTab, setLubeOilTab] = useState('gas')
  const [powerGenerationTab, setPowerGenerationTab] = useState('diesel')
  const [renewableEnergyTab, setRenewableEnergyTab] = useState('solar')
  const [fireSecurityTab, setFireSecurityTab] = useState('security')

  if (isServices) {
    return (
      <div className="page-wrapper">
        <div
          className="inner-banner"
          style={{
            background:
              'linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(css/breadCrumbsBackgroundImages/engineering-banner.jpg) center center/cover no-repeat',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <h3 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Services
            </h3>
          </div>
        </div>

        <div className="container" style={{ padding: '60px 0' }}>
          <div className="row">
            <div className="col-md-9">
              <br />
              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: '500', marginBottom: '20px', textTransform: 'uppercase' }}>INTRODUCTION</h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                “The management at Intelligent Energy has designed its product support department in such a way, so as to provide the best customer support that is needed to attain the highest level of customer satisfaction”
              </p>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                We recognize the expectations of customers; therefore we are focused on delivering real 24/7 support. Our success is mainly dependant upon our ability to support our customers.
              </p>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our trained and qualified staff is vigilant in highlighting equipment performance that enables us to reduce the potential down time. Our after sales specialists are continuously in touch with customers for business guidance. Our spare parts ensure maximum service life and reliability to your equipment while our operation &amp; maintenance is a complete plant management package with cost effectiveness.
              </p>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our mobile service teams comprising of trained staff; regularly visit all customers in order to ensure that your machines run smoothly and for any other requirement we are always equipped with spare parts and hands-on services support.
              </p>

              <div id="more">
                <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: '500', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                  THAT IS THE REASON WE SAY 'Intelligent' PRODUCT SUPPORT, A FULLY INTEGRATED SOLUTION PROVIDER’.
                </h5>
                <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                  For almost 16 years, Intellignet Energy had a successful experience in power generation services; we hold excellent relationship with our clients and we aim to consistently provide our customers quick serving through our proactive sales team, reliable service, parts back up and technical expertise.
                </p>
                <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: '500', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                  OUR INTEGRATED CUSTOMER SUPPORT FUNCTIONS ENSURE THAT WE OFFER EXCELLENT CUSTOMER SERVICE AND MEET CUSTOMER SATISFACTION LEVELS.
                </h5>
                <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: '500', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                  OUR SERVICES
                </h5>
                <ul className="unorderList" style={{ paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                  <li>Field services (scheduled &amp; unscheduled maintenances).</li>
                  <li>Workshop services (overhauling &amp; repairing).</li>
                  <li>Specialized services (commissioning &amp; consultancy).</li>
                </ul>
                <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: '500', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                  PARTS
                </h5>
                <ul className="unorderList" style={{ paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                  <li>100% genuine parts</li>
                  <li>Parts Warranty coverage- as per policy</li>
                  <li>Parts distribution all over Middle East</li>
                  <li>Timely availability</li>
                  <li>Adequate inventory levels with respect to known population</li>
                  <li>Close coordination with principal for parts requirements</li>
                  <li>Technical support from principal for customer issues</li>
                  <li>State of the art software for inventory control &amp; management.</li>
                  <li>In process of upgrading software with latest version of Microsoft Dynamics AX</li>
                  <li>Planned cash counter to facilitate customer for spot purchases</li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="sidebar-wrapper" style={{ background: '#f9f9f9', padding: '30px 20px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
                  Quick Links
                </h4>
                <ul className="sidebar-nav" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/about" style={{ color: '#555', display: 'block' }}>About Us</Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/engineering" style={{ color: '#555', display: 'block' }}>Engineering</Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/services" style={{ color: '#555', display: 'block' }}>Services</Link>
                  </li>
                  
                </ul>
                <div className="sidebar-contact" style={{ marginTop: '40px' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
                    Contact
                  </h4>
                  <p style={{ marginBottom: '10px', color: '#666' }}><strong>Phone:</strong><br />+971 4 3926207</p>
                  <p style={{ marginBottom: '10px', color: '#666' }}><strong>Email:</strong><br />info@intelligentenergy.ae</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isProductSupportParts) {
    return (
      <div className="page-wrapper">
        <div
          className="inner-banner"
          style={{
            background:
              'linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(css/breadCrumbsBackgroundImages/engineering-banner.jpg) center center/cover no-repeat',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <h3 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Product Support Parts
            </h3>
          </div>
        </div>

        <div className="container" style={{ padding: '60px 0' }}>
          <div className="row">
            <div className="col-md-9">
              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase' }}>
                INTRODUCTION
              </h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our success is mainly depending upon our ability to support our customers. Our spare parts ensure maximum service life and reliability to your equipment.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                SPARE PARTS
              </h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our parts department sales support function and warehousing for Middle East region. Our newly designed tailor made warehouse meets huge spare parts demand to cater power generation business.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                FEATURES OF PARTS DEPARTMENT
              </h5>
              <ul className="unorderList1" style={{ paddingLeft: 0 }}>
                <li>100% genuine parts country wide availability.</li>
                <li>24/7 parts issuance.</li>
                <li>Parts distribution network all over Middle East.</li>
                <li>Warranty Coverage.</li>
                <li>Timely availability.</li>
                <li>Standby parts delivery van.</li>
              </ul>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                AFTER MARKET
              </h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our dedicated teams of after market specialists are available 24/7 for customers support not only in words but in true spirit. Our sales team comprises of market specialists. They closely work with customers and this is the key of our customer’s business knowledge.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                FEATURES OF AFTER SALES DEPARTMENT
              </h5>
              <ul className="unorderList1" style={{ paddingLeft: 0 }}>
                <li>After sales team with a friendly attitude.</li>
                <li>Always striving for building customer relationship.</li>
                <li>Proactive sales strategy to meet on time customer demands of parts &amp; services.</li>
                <li>Remarkable front desk customer support to cater customers’ needs.</li>
              </ul>

              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Contact us today to learn more about how we can help you with Product Support Parts.
              </p>
            </div>

            <div className="col-md-3">
              <div className="sidebar-wrapper" style={{ background: '#f9f9f9', padding: '30px 20px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
                  Quick Links
                </h4>
                <ul className="sidebar-nav" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/about" style={{ color: '#555', display: 'block' }}>About Us</Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/engineering" style={{ color: '#555', display: 'block' }}>Engineering</Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/services" style={{ color: '#555', display: 'block' }}>Services</Link>
                  </li>
                  
                </ul>

                <div className="sidebar-contact" style={{ marginTop: '40px' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
                    Contact
                  </h4>
                  <p style={{ marginBottom: '10px', color: '#666' }}><strong>Phone:</strong><br />+971 4 3926207</p>
                  <p style={{ marginBottom: '10px', color: '#666' }}><strong>Email:</strong><br />info@intelligentenergy.ae</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (isProductSupportParts) {
    return (
      <div className="page-wrapper">
        <div
          className="inner-banner"
          style={{
            background:
              'linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(css/breadCrumbsBackgroundImages/engineering-banner.jpg) center center/cover no-repeat',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <h3 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Product Support Parts
            </h3>
          </div>
        </div>

        <div className="container" style={{ padding: '60px 0' }}>
          <div className="row">
            <div className="col-md-9">
              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase' }}>
                INTRODUCTION
              </h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our success is mainly depending upon our ability to support our customers.
              </p>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our spare parts ensure maximum service life and reliability to your equipment.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                SPARE PARTS
              </h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our parts department sales support function and warehousing for Middle East region. Our newly designed tailor made warehouse meets huge spare parts demand to cater power generation business.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                FEATURES OF PARTS DEPARTMENT
              </h5>
              <ul className="unorderList1" style={{ paddingLeft: 0 }}>
                <li>100% genuine parts country wide availability.</li>
                <li>24/7 parts issuance.</li>
                <li>Parts distribution network all over Middle East.</li>
                <li>Warranty Coverage.</li>
                <li>Timely availability.</li>
                <li>Standby parts delivery van.</li>
              </ul>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                AFTER MARKET
              </h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our dedicated teams of after market specialists are available 24/7 for customers support not only in words but in true spirit. Our sales team comprises of market specialists. They closely work with customers and this is the key of our customer’s business knowledge.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                FEATURES OF AFTER SALES DEPARTMENT
              </h5>
              <ul className="unorderList1" style={{ paddingLeft: 0 }}>
                <li>After sales team with a friendly attitude.</li>
                <li>Always striving for building customer relationship.</li>
                <li>Proactive sales strategy to meet on time customer demands of parts &amp; services.</li>
                <li>Remarkable front desk customer support to cater customers’ needs.</li>
              </ul>

              <p className="introText" style={{ marginTop: '20px', marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Contact us today to learn more about how we can help you with Product Support Parts.
              </p>
            </div>

            <div className="col-md-3">
              <div className="sidebar-wrapper" style={{ background: '#f9f9f9', padding: '30px 20px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
                  Quick Links
                </h4>
                <ul className="sidebar-nav" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/about" style={{ color: '#555', display: 'block' }}>About Us</Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/engineering" style={{ color: '#555', display: 'block' }}>Engineering</Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/services" style={{ color: '#555', display: 'block' }}>Services</Link>
                  </li>
                  
                </ul>

                <div className="sidebar-contact" style={{ marginTop: '40px' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
                    Contact
                  </h4>
                  <p style={{ marginBottom: '10px', color: '#666' }}><strong>Phone:</strong><br />+971 4 3926207</p>
                  <p style={{ marginBottom: '10px', color: '#666' }}><strong>Email:</strong><br />info@intelligentenergy.ae</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isEngineering) {
    return (
      <div className="page-wrapper">
        <div
          className="inner-banner"
          style={{
            background:
              'linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(css/breadCrumbsBackgroundImages/engineering-banner.jpg) center center/cover no-repeat',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <h3 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Engineering
            </h3>
          </div>
        </div>

        <div className="container" style={{ padding: '60px 0' }}>
          <div className="row">
            <div className="col-md-9">
              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase' }}>
                INTRODUCTION
              </h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Comprising of highly qualified professionals, our Engineering department offers both Pre-Sales and Post-Sales support to our customers. Our experienced engineers with detailed product knowledge ensure a seamless and effective transfer from project designing to the installation phase.
              </p>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our engineering teams incorporate Electrical/Electronic, Mechanical & Civil engineers along with a dedicated team of Computer Aided Design (CAD) staff. The engineering teams support gas/diesel generation/HVAC/RO/Solar/Air compression projects. It means we are a one window solution provider to our valued customers. For industrial utilities, we have an un-match capability in the market.
              </p>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our engineers are highly trained and work closely with their principals in order to best integrate their products into projects. The team has comprehensive knowledge of a wide range of industrial utilities applications which can be drawn to support installation. The team provides input to projects from the sales stage and continues to engineering, installation complying the Principal standards & requirements.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                COMPUTER AIDED DESIGN
              </h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our CAD team provides accurate scale drawings, diagrams and process & instrumentation diagrams (P&amp;IDs) to support the sales, engineering and project management teams. Design work is typically conducted in three dimensions and utilises a number of tools including Autocad Plant, Autocad P&amp;ID and CADworks.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                MECHANICAL ENGINEERING
              </h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our experienced application/project engineers help support engineering of the mechanical elements of the plant.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                ELECTRICAL/ELECTRONIC ENGINEERING
              </h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Our employs a number of application and project electrical/electronic engineers who specialize in the electrical/electronic field to support the project. The team is an integral component of our engineering capabilities and is experienced in local/international electrical standards and requirements.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                PROJECT MANAGEMENT
              </h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Intelligent Energy provides added value to the customer by offering a comprehensive project management service for the installation of projects. At point of order, Intelligent Energy assigns a dedicated project engineer to the installation supervision job who is customer’s primary point of contact following the sales phase and coordinates the engineering, installation and commissioning of equipment.
              </p>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                For all EPC projects our project management team (including project/construction manager with team of QA/QC and HSE) follows a structured approach to deliver a high quality project on time and within budget whilst aiming to meet and exceed the customer expectations. We have trained engineers on Primavera software for controlling and monitoring project activities effectively by developing a S-Curve through software.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                HEALTH, SAFETY & ENVIROMENT
              </h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                We is dedicated to ensuring the safety of employees and subcontractors to the highest levels as to minimize any risks associated with work.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                HEAT RECOVERY OPTIONS
              </h5>
              <p className="introText" style={{ marginBottom: '10px', lineHeight: '1.8', color: '#666' }}>
                The efficient utilization of the waste heat from the engine to produce:
              </p>
              <ul className="unorderList1" style={{ paddingLeft: 0 }}>
                <li>Steam / hot water</li>
                <li>Cooling</li>
              </ul>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Together with Electrical Power from a single power plant, increases the overall efficiency of the plant.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                EXCELLENCE
              </h5>
              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                This is our core expertise to execute Co-generation as well as Tri-Generation project.
              </p>

              <p className="introText" style={{ marginBottom: '20px', lineHeight: '1.8', color: '#666' }}>
                Contact us today to learn more about how we can help you with Engineering.
              </p>
            </div>

            <div className="col-md-3">
              <div className="sidebar-wrapper" style={{ background: '#f9f9f9', padding: '30px 20px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
                  Quick Links
                </h4>
                <ul className="sidebar-nav" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/about" style={{ color: '#555', display: 'block' }}>About Us</Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/engineering" style={{ color: '#555', display: 'block' }}>Engineering</Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/services" style={{ color: '#555', display: 'block' }}>Services</Link>
                  </li>
                  
                </ul>

                <div className="sidebar-contact" style={{ marginTop: '40px' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
                    Contact
                  </h4>
                  <p style={{ marginBottom: '10px', color: '#666' }}><strong>Phone:</strong><br />+971 4 3926207</p>
                  <p style={{ marginBottom: '10px', color: '#666' }}><strong>Email:</strong><br />info@intelligentenergy.ae</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isAbout) {
    return (
      <div className="page-wrapper about">
        <div
          className="inner-banner"
          style={{
            background:
              'linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(css/breadCrumbsBackgroundImages/about.jpg) center center/cover no-repeat'
          }}
        >
          <div className="container">
            <h3>About Us</h3>
          </div>
        </div>

        <section className="about-style-three">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="about-img-box">
                  <img src={aboutSideImage} alt="About Us" style={{ width: '490px', height: '421px', objectFit: 'cover' }} />
                  <div className="content">
                    <h3>About Us</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="about-content">
                  <h3>Intelligent Energy</h3>
                  <p className="introText">
                    Intelligent Energy is one of the leading multinational engineering companies in Middle East and
                    South Asia, distributing internationally recognized power generation &amp; industrial solutions and
                    services. Intelligent Energy started its operation in the year 1996, pursuant to the company&apos;s
                    philosophy, &apos;Power for All&apos;, Intelligent Energy empowers people and their businesses by bringing to them the
                    best global performers of the field of power generation and industrial solutions. Our strength lies
                    in our ability to understand market demands, keeping up with the changing technological trends,
                    building relationships and offering solutions, which are the most dependable, efficient,
                    cost-effective and exceeding client expectations. Our diverse client-base ranges from household
                    consumers, government bodies, local industries and multinational giants, hence displaying our
                    capability and the power of the brands that we represent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-style-prof">
          <div className="container">
            <div className="row about-row">
              <div className="MISSION">
                <div className="about-prof">
                  <h3 className="introHeading">MISSION</h3>
                  <ul className="unorderList1">
                    <li>
                      To become the market leader and the most dependable power and industrial engineering solution
                      provider in the regions we serve.
                    </li>
                    <li>
                      To supply globally recognized and high performing equipment that is backed by paramount
                      engineering and product support.
                    </li>
                    <li>
                      To deliver best value to our customers, our principals and our people while adhering to the
                      highest standards of business conduct.
                    </li>
                    <li>
                      To strengthen Corporate Governance and aim at sustainable growth to enhance corporate values for
                      all stakeholders.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="VISION">
                <div className="about-prof">
                  <h3 className="introHeading">VISION</h3>
                  <p className="introText">
                    Our vision is to enable industrial growth through provision of the foremost reliable, technologically
                    advanced, efficient and environment friendly engineering products and services to our customers at an
                    unmatched value.
                  </p>
                </div>
              </div>
              <div className="VALUES">
                <div className="about-prof">
                  <h3 className="introHeading">VALUES</h3>
                  <ul className="unorderList1">
                    <li>Excellence and professionalism in our business practices and core activities.</li>
                    <li>Cohesiveness and integrity between our values and business goals.</li>
                    <li>Respect and prosperity for all stakeholders.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-style-two">
          <div className="container">
            <div className="row about">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-features-style-two hvr-bounce-to-bottom">
                  <div className="inner">
                    <i className="industrio-icon-innovation"></i>
                    <h3>Integrity</h3>
                    <p>
                      Honesty, Trust, Transparency; these are the tools which we have chosen to employ day in day out.
                      Be it dealing with our clients or working with co-workers, we believe that it is our integrity that
                      shines through to those who seek us out.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-features-style-two hvr-bounce-to-bottom">
                  <div className="inner">
                    <i className="industrio-icon-secure-shield"></i>
                    <h3>Commitment</h3>
                    <p>
                      Our journey of commitment is driven by passion. Our commitment to a cause helps us to overcome
                      challenges in the best possible manner.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-features-style-two hvr-bounce-to-bottom">
                  <div className="inner">
                    <i className="industrio-icon-support"></i>
                    <h3>Quality</h3>
                    <p>
                      With the combined efforts of all our team members and our own defined code of ethics, we ensure
                      that we deliver the best possible services to our customers that are up to the mark, both according
                      to their and our status.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (isLubeOil) {
    const gasText =
      'Valvoline is exclusively represented by Intelligent Energy. We are a leading multinational engineering company providing a wide range of clientele with breakthrough solutions and critical new technologies adding tangible value to the processes in a wide range of sectors and applications including the household consumers, government and semi-government bodies, local and multinational conglomerates from all the major industrial and commercial sectors such as fossil and renewable energy, general manufacturing, process, cement, construction, textile, oil and gas and others.'

    const dieselText =
      'The management of Intelligent Energy assumes as its mission the continuing stewardship, health and success of the organization as well as the Valvoline™ brand. Recruited from a variety of occupational and educational backgrounds, members of the executive team singly and collectively possess the character, integrity and drive to support the Valvoline brand and its customers, helping both to innovate and thrive. Unmatched quality & heritage of Valvoline coupled with immaculate services & high customer focus of Intelligent Energy will open long-term business avenues and future growth opportunities in Middle East.'

    return (
      <div className="page-wrapper lube-oil-page">
        <div
          className="inner-banner"
          style={{
            background:
              'linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(css/breadCrumbsBackgroundImages/engineering-banner.jpg) center center/cover no-repeat',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <h3 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', textTransform: 'uppercase' }}>Lube Oil</h3>
          </div>
        </div>

        <div className="container" style={{ padding: '60px 0' }}>
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <h5 className="introHeading">Lube Oil</h5>
              <p className="introText">{gasText}</p>
              <p className="introText">{dieselText}</p>

              <div className="service-item-box">
                <div className="row masonary-layout">
                  <div className="sidebar">
                    <div className="single-sidebar service-sidebar">
                      <ul className="service-list" id="service-list1">
                        <li
                          className={`ml-0 service-item-1 active-item${lubeOilTab === 'gas' ? ' active' : ''}`}
                        >
                          <a
                            href="#"
                            onClick={e => {
                              e.preventDefault()
                              setLubeOilTab('gas')
                            }}
                          >
                            Gas Engine Oil
                          </a>
                        </li>
                        <li className={`service-item-2 active-item${lubeOilTab === 'diesel' ? ' active' : ''}`}>
                          <a
                            href="#"
                            onClick={e => {
                              e.preventDefault()
                              setLubeOilTab('diesel')
                            }}
                          >
                            Diesel Engine Oil
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {lubeOilTab === 'gas' ? (
                    <div className="content-1">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="eco single-service-style-four">
                            <div className="img-box">
                              <h3></h3>
                              <p className="introText">{gasText}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="content-2">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="eco single-service-style-four">
                            <div className="img-box">
                              <h3></h3>
                              <p className="introText">{dieselText}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="clearfix visible-sm-block visible-xs-block"></div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="sidebar-wrapper" style={{ background: '#f9f9f9', padding: '30px 20px' }}>
                <h4
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    borderBottom: '2px solid #333',
                    paddingBottom: '10px'
                  }}
                >
                  Quick Links
                </h4>
                <ul className="sidebar-nav" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/about" style={{ color: '#555', display: 'block' }}>
                      About Us
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/engineering" style={{ color: '#555', display: 'block' }}>
                      Engineering
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/services" style={{ color: '#555', display: 'block' }}>
                      Services
                    </Link>
                  </li>
                </ul>

                <div className="sidebar-contact" style={{ marginTop: '40px' }}>
                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      borderBottom: '2px solid #333',
                      paddingBottom: '10px'
                    }}
                  >
                    Contact
                  </h4>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Phone:</strong>
                    <br />
                    +971 4 3926207
                  </p>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Email:</strong>
                    <br />
                    info@intelligentenergy.ae
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isPowerGeneration) {
    const introText =
      'As the global village grows, the competition is getting intense. Ever rising cost of electricity followed by frequent power outages is making it tougher for industrial sector to compete. The sector requires a reliable alternate solution. We have been in the field of Power Generation since 1996 and currently maintaining an installed base of ~4000 MW with around 3500+ satisfied customers. We offer turnkey solutions for Captive/ Non Captive Power & IPPs. The power generation solution is based on Gas, Diesel and HFO engines, Wind, Solar, Coal & Hydel Power in ON/OFF Grid & Island mode applications. We offer Pre/ Post Sale of the equipment & projects, Application Engineering, Project Management, Construction, Testing & Commissioning.'

    const dieselText =
      'Our diesel generator solutions are designed for dependable standby and prime power across industrial, commercial and critical applications, with a focus on efficiency, reliability and service support.'

    const gasText =
      'Our gas power solutions support high-efficiency generation for continuous operation where fuel availability and emissions targets drive total cost of ownership, supported by engineering and after-sales services.'

    return (
      <div className="page-wrapper power-generation-page">
        <div
          className="inner-banner"
          style={{
            background:
              'linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(css/breadCrumbsBackgroundImages/engineering-banner.jpg) center center/cover no-repeat',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <h3 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Power Generation
            </h3>
          </div>
        </div>

        <div className="container" style={{ padding: '60px 0' }}>
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <h5 className="introHeading">Power Generation</h5>
              <p className="introText">{introText}</p>

              <div className="service-item-box">
                <div className="row masonary-layout">
                  <div className="sidebar">
                    <div className="single-sidebar service-sidebar">
                      <ul className="service-list" id="power-generation-service-list">
                        <li
                          className={`ml-0 service-item-1 active-item${
                            powerGenerationTab === 'diesel' ? ' active' : ''
                          }`}
                        >
                          <a
                            href="#"
                            onClick={e => {
                              e.preventDefault()
                              setPowerGenerationTab('diesel')
                            }}
                          >
                            Diesel Power
                          </a>
                        </li>
                        <li
                          className={`service-item-2 active-item${powerGenerationTab === 'gas' ? ' active' : ''}`}
                        >
                          <a
                            href="#"
                            onClick={e => {
                              e.preventDefault()
                              setPowerGenerationTab('gas')
                            }}
                          >
                            Gas Power
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {powerGenerationTab === 'diesel' ? (
                    <div className="content-1">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="eco single-service-style-four">
                            <div className="img-box">
                              <h3 className="introHeading">Diesel Engines & Gensets</h3>
                              <p className="introText">
                                Diesel powered generator sets remain the number one choice for standby and emergency
                                power systems worldwide. Having the capability to start and assume load in on immediate
                                basis at rated load in a single step, Cummins diesel generator sets are the epitome of
                                rugged dependability, reliable mechanical and electrical performance. Diesel generators
                                are also well suited for utility peak lopping plants and Distributed Generation (DG)
                                facilities along with power management capabilities at large commercial or industrial
                                sites in operations around the globe.
                              </p>

                              <p className="introText">
                                Cummins Inc., global leader in power generation industry worldwide, is a corporation of
                                complementary business units that design, manufacture, distribute and provide services
                                for engines and related technologies, including fuel systems, controls, air handling,
                                filtration, emission solutions and electrical power generation systems.
                              </p>

                              <p className="introText">
                                Cummins generator sets are the result of state-of-the-art technology along with
                                integrated design and manufacturing which seeks to fulfill customer requirements for
                                reliability, product quality, rated performance and efficient operations. It offers
                                standby/emergency systems, multi-megawatt utility peak lopping systems for
                                sophisticated co-generation applications in order to provide effective solutions to
                                their valuable customers worldwide.
                              </p>

                              <p className="introText">
                                Intelligent Energyis a Distributor for Cummins Diesel Engines &
                                Genset in Middle East offers generator sets from 8.25 kVA to 3750 kVA. In addition to that
                                Cummins also provides complementary equipment ranging from automatic transfer switches
                                (40 amps to 4000 amps), to paralleling switchgear, load management systems, remote
                                monitoring systems and generator set controllers.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="content-2">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="eco single-service-style-four">
                            <div className="img-box">
                              <p className="introText">
                                Gas Engines as the global village grows, the competition is getting intense. Ever
                                rising cost of electricity followed by frequent power outages is making it tougher for
                                industrial sector to compete. We proudly offers power
                                system solutions from INNIO Jenbacher which is one of the world&apos;s best gas generator
                                manufacturer with highest efficiency and low operating cost. We have to-date installed
                                capacity of 2,110 MW+ INNIO Jenbacher gas gensets.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="clearfix visible-sm-block visible-xs-block"></div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="sidebar-wrapper" style={{ background: '#f9f9f9', padding: '30px 20px' }}>
                <h4
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    borderBottom: '2px solid #333',
                    paddingBottom: '10px'
                  }}
                >
                  Quick Links
                </h4>
                <ul className="sidebar-nav" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/about" style={{ color: '#555', display: 'block' }}>
                      About Us
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/engineering" style={{ color: '#555', display: 'block' }}>
                      Engineering
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/services" style={{ color: '#555', display: 'block' }}>
                      Services
                    </Link>
                  </li>
                </ul>

                <div className="sidebar-contact" style={{ marginTop: '40px' }}>
                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      borderBottom: '2px solid #333',
                      paddingBottom: '10px'
                    }}
                  >
                    Contact
                  </h4>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Phone:</strong>
                    <br />
                    +971 4 3926207
                  </p>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Email:</strong>
                    <br />
                    info@intelligentenergy.ae
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isRenewableEnergy) {
    const introText =
      'The escalating climatic crisis is driving the world more towards Renewable Energy technologies. We keep pace with it and holds ambitious plans to grow in Wind and Solar Power. We offer turnkey solution with World’s no. 1 ranked Wind Turbine Siemens Gamesa and with several brands for Solar Power.'

    const windText =
      'With the booming Wind Power concept round the globe, We have also expanded into Wind Power Business partnering with Siemens Gamesa Renewable Energy (SGRE) for their Wind Turbines. SGRE is World’s TOP Ranked manufacturer of Wind Turbine Generators and has an installed base of more than 83 GW in 90+ countries.'

    return (
      <div className="page-wrapper renewable-energy-page">
        <div
          className="inner-banner"
          style={{
            background:
              'linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(css/breadCrumbsBackgroundImages/engineering-banner.jpg) center center/cover no-repeat',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <h3 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Renewable Energy
            </h3>
          </div>
        </div>

        <div className="container" style={{ padding: '60px 0' }}>
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <h3 className="introHeading">Renewable Energy</h3>
              <p className="introText">{introText}</p>

              <div className="service-item-box">
                <div className="row masonary-layout">
                  <div className="sidebar">
                    <div className="single-sidebar service-sidebar">
                      <ul className="service-list" id="renewable-energy-service-list">
                        <li className={`ml-0 service-item-1 active-item${renewableEnergyTab === 'wind' ? ' active' : ''}`}>
                          <a
                            href="#"
                            onClick={e => {
                              e.preventDefault()
                              setRenewableEnergyTab('wind')
                            }}
                          >
                            Wind Power
                          </a>
                        </li>
                        <li className={`service-item-2 active-item${renewableEnergyTab === 'solar' ? ' active' : ''}`}>
                          <a
                            href="#"
                            onClick={e => {
                              e.preventDefault()
                              setRenewableEnergyTab('solar')
                            }}
                          >
                            Solar Energy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {renewableEnergyTab === 'wind' ? (
                    <div className="content-1">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-sm-12">
                          <h5 className="introHeading">Wind Power</h5>
                          <p className="introText">{windText}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="content-2">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-sm-12">
                          <h5 className="introHeading">Solar Energy</h5>
                          <p className="introText"></p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="clearfix visible-sm-block visible-xs-block"></div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="sidebar-wrapper" style={{ background: '#f9f9f9', padding: '30px 20px' }}>
                <h4
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    borderBottom: '2px solid #333',
                    paddingBottom: '10px'
                  }}
                >
                  Quick Links
                </h4>
                <ul className="sidebar-nav" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/about" style={{ color: '#555', display: 'block' }}>
                      About Us
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/engineering" style={{ color: '#555', display: 'block' }}>
                      Engineering
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/services" style={{ color: '#555', display: 'block' }}>
                      Services
                    </Link>
                  </li>
                </ul>

                <div className="sidebar-contact" style={{ marginTop: '40px' }}>
                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      borderBottom: '2px solid #333',
                      paddingBottom: '10px'
                    }}
                  >
                    Contact
                  </h4>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Phone:</strong>
                    <br />
                    +971 4 3926207
                  </p>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Email:</strong>
                    <br />
                    info@intelligentenergy.ae
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isHvacr) {
    return (
      <div className="page-wrapper hvacr-page">
        <div
          className="inner-banner"
          style={{
            background:
              'linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(css/breadCrumbsBackgroundImages/engineering-banner.jpg) center center/cover no-repeat',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <h3 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', textTransform: 'uppercase' }}>HVACR</h3>
          </div>
        </div>

        <div className="container" style={{ padding: '60px 0' }}>
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <h5 className="introHeading">HVACR</h5>
              <p className="introText">
                Being one of the most progressive engineering solutions company we,
                joined hands with some of the best international HVAC-R manufacturers from around the globe to provide
                air-conditioning chillers with best output and least energy costs.We represent multiple international
                brands of HVAC in region as this is an important part of residential as well as commercial structures,
                apartments, buildings, hotels, hospitals, medium to large industrial and office buildings etc.
                <br />
                <br />
                We have a huge reference in Pharma Industry / Food Sector / Textile Industry / Packaging Industry /
                Polymer Industry / Oil &amp; Gas field / Hospitals / Institutes / Banks / Commercial Buildings etc. We
                would request you to register us as a potential air conditioning equipment supplier and circulate us
                your upcoming inquiries whenever they are issue.
              </p>
            </div>

            <div className="col-md-3">
              <div className="sidebar-wrapper" style={{ background: '#f9f9f9', padding: '30px 20px' }}>
                <h4
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    borderBottom: '2px solid #333',
                    paddingBottom: '10px'
                  }}
                >
                  Quick Links
                </h4>
                <ul className="sidebar-nav" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/about" style={{ color: '#555', display: 'block' }}>
                      About Us
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/engineering" style={{ color: '#555', display: 'block' }}>
                      Engineering
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/services" style={{ color: '#555', display: 'block' }}>
                      Services
                    </Link>
                  </li>
                </ul>

                <div className="sidebar-contact" style={{ marginTop: '40px' }}>
                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      borderBottom: '2px solid #333',
                      paddingBottom: '10px'
                    }}
                  >
                    Contact
                  </h4>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Phone:</strong>
                    <br />
                    +971 4 3926207
                  </p>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Email:</strong>
                    <br />
                    info@intelligentenergy.ae
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isFireSecurity) {
    return (
      <div className="page-wrapper fire-security-page">
        <div
          className="inner-banner"
          style={{
            background:
              'linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(css/breadCrumbsBackgroundImages/engineering-banner.jpg) center center/cover no-repeat',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <h3 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Fire &amp; Security
            </h3>
          </div>
        </div>

        <div className="container" style={{ padding: '60px 0' }}>
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <h5 className="introHeading">Fire &amp; Security</h5>

              <p className="introText">
                We started its operation in the year 1996 and now Intelligent Energy 
                is one of the leading Engineering companies in the region that is distributing recognized Industrial and
                corporate power solution and services. We have expanded our domain to fire and security products in
                2014.
              </p>

              <p className="introText">
                Fire and Security Division primarily deals in Fire and Security Systems, catering for commercial &amp;
                industrial needs like Fire Fighting Equipment’s, CCTV surveillance, Public Addressing (PA), Access
                control, Gateway Security. The type of Fire Fighting Equipment’s varies between Fire Alarms systems,
                Fire Pumps, Fire Hydrants, Fire Sprinklers, Fire hoses, Fire Suppression gases Inergen, FM 200, Novec
                123, Co2 and Fire Extinguishers.
              </p>

              <p className="introText">
                 Intelligent Energy one-stop solution for all your Fire &amp; security needs. We are always ready to
                serve you with skilled technicians and round the clock support services. In addition, Intelligent Energy has
                earned a reputation synonymous with integrity, quality and reliability.
              </p>

              <div className="service-item-box">
                <div className="row masonary-layout">
                  <div className="sidebar">
                    <div className="single-sidebar service-sidebar">
                      <ul className="service-list" id="fire-security-service-list">
                        <li
                          className={`ml-0 service-item-1 active-item${fireSecurityTab === 'security' ? ' active' : ''}`}
                        >
                          <a
                            href="#"
                            onClick={e => {
                              e.preventDefault()
                              setFireSecurityTab('security')
                            }}
                          >
                            Security
                          </a>
                        </li>
                        <li className={`service-item-2 active-item${fireSecurityTab === 'fire' ? ' active' : ''}`}>
                          <a
                            href="#"
                            onClick={e => {
                              e.preventDefault()
                              setFireSecurityTab('fire')
                            }}
                          >
                            Fire
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {fireSecurityTab === 'security' ? (
                    <div className="content-1">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-sm-12">
                          <div className="eco single-service-style-four">
                            <div className="img-box">
                              <h3 className="introHeading">SECURITY PRODUCTS</h3>
                              <p className="introText">
                                · CCTV Video Surveillance and data analytics Systems
                                <br />
                                · Public Addressing System
                                <br />
                                · Voice Evacuation System
                                <br />
                                · Video Conferencing System
                                <br />
                                · Access Control System
                                <br />
                                · Ticketing &amp; Game Charging System
                                <br />
                                · Barriers, Turnstiles, walkthrough gates, Bollards, X-Ray Baggage Machines, Container
                                Scanning &amp; Entrance Security
                                <br />
                                · Network Infrastructure
                                <br />
                                <br />
                                BOSCH offers an extensive portfolio of innovative, high-quality products, solutions and
                                services for security, safety and communications systems – featuring intelligent
                                functionality and modular concepts that grow with your requirements.
                              </p>

                              <h3 className="introHeading">HANWA TECHWIN (FORMERLY SAMSUNG)</h3>
                              <p className="introText">
                                As a leading manufacturer in the security industry, Hanwha offers video surveillance
                                products including IP cameras, storage devices and management software founded on
                                world-class optical design, manufacturing and image processing technologies. It offers
                                end-to-end security solutions and have achieved global success across a wide range of
                                industry verticals including retail, transportation, education, banking, healthcare,
                                hospitality and airports. Hanwha’s recently introduced Wisenet line of innovative
                                security products demonstrates the value, technology and commitment we bring to market
                                including 12MP cameras, intelligent video analytics and H.265 support.
                              </p>

                              <h3 className="introHeading">HONEYWELL</h3>
                              <p className="introText">
                                As industry pioneers, Honeywell has developed many of the ground breaking advances that
                                have shaped today’s residential and commercial security systems. Honeywell made systems
                                easier to install and to use, developed the industry’s most reliable supervised wireless
                                products and the most flexible hybrid control panels on the market. It is also on the
                                forefront of advancements in long range radio, Internet alarm communications and sensor
                                technology-including the development of the world’s best-selling glass break detectors.
                              </p>

                              <h3 className="introHeading">HIK Vision</h3>
                              <p className="introText">
                                Hikvision is a world leading provider of security products and solutions. Featuring an
                                extensive and highly skilled R&amp;D workforce, Hikvision manufactures a full suite of
                                comprehensive products and solutions for a broad range of vertical markets. In addition
                                to the security industry, Hikvision extends its reach to smart home tech, industrial
                                automation, and automotive electronics industries to achieve its long-term vision.
                                Hikvision products also provide powerful business intelligence for end users, which can
                                enable more efficient operations and greater commercial success.
                              </p>

                              <h3 className="introHeading">DAHUA TECHNOLOGY</h3>
                              <p className="introText">
                                Zhejiang Dahua Technology Co., Ltd. (Dahua Technology) is a world-leading video-centric
                                smart IoT solution and service provider. Based on technological innovations, Dahua
                                Technology offers end-to-end security solutions, systems, and services to create values
                                for city operations, corporate management, and consumers.
                                <br />
                                With more than 16,000 employees and over 50% engaged in R&amp;D, Dahua solutions,
                                products, and services are applied in 180 countries and regions. Since the launch of the
                                industry’s first self-developed 8-channel embedded DVR in 2002, Dahua Technology has
                                devoted itself to technological innovation and been continually increasing its
                                investment in R&amp;D, putting around 10% of its annual sales revenue into R&amp;D. The
                                company continues to explore emerging opportunities based on video IoT technologies and
                                has already established business in machine vision, video conferencing systems,
                                professional drones, electronic license plates, RFID, and robotics etc.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="content-2">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-sm-12">
                          <div className="eco single-service-style-four">
                            <div className="img-box">
                              <h3 className="introHeading">Fire Detection Systems</h3>
                              <p className="introText">
                                Conventional &amp; Addressable Intelligent Fire Alarm Panels / Workstations, Addressable
                                Ionization Smoke Detectors, Optical Smoke Detectors, Optical Beam Detectors, Heat
                                Detectors, Multi- Sensor Detectors, Flame Detectors, LPG Gas Detectors, H2S Detectors,
                                Manual Call Points, Alarm Bells, Sounders, Water Leak Detection System and all forms of
                                passive fire protection.
                              </p>
                              <br />

                              <h3 className="introHeading">Fire Suppression System</h3>
                              <p className="introText">
                                Gaseous Fire Suppression Systems (FM200, NAF 227ea, NAF S125, Inergen, Novec, Aragonite,
                                Argon, Aerosol, Foam Based Fire Suppression System, Water Based Fire Suppression System
                                ( Water Mist, Hydrants, Sprinklers, Deluge Systems ) Wet Chemical Kitchen hood Systems.
                                Dry Mist Suppression system. Tube Technology Suppression System.
                              </p>
                              <br />

                              <h3 className="introHeading">Fire Extinguishers</h3>
                              <p className="introText">
                                Ozone Friendly Clean Agent Fire Extinguishers, ISI and KITE Marked ABC Dry Chemical
                                Powder Fire Extinguisher, Carbon Dioxide Extinguishers, Water Type Fire Extinguishers,
                                Wet Chemical Fire Extinguishers, Mechanical Foam, Water Mist, AFFF Foam Fire
                                Extinguishers.
                              </p>
                              <br />

                              <h3 className="introHeading">SFFECO</h3>
                              <p className="introText">
                                From the commencement in 1983, Saudi Factory for Fire Equipment (SFFECO) has forever
                                Considered Quality as their most important aim. Our Founder Mr. Ahmed Al Khatib
                                envisioned creating a distinguished manufacturing company, which was ultimately the
                                first ISO9001 certified fire equipment manufacturing company in the Middle East.
                                <br />
                                <br />
                                SFFECO employs a team of professionals from diverse background and cultures who believe
                                in the value of their work. More than 750 people working tirelessly to make SFFECO what
                                it is today. SFFECO’s engineering department, design department, sales and marketing
                                department, administrative department as well as their employees have a mission to
                                ensure superiority and distinction in the products and services and thus guaranteed the
                                ISO9001 certification. They are continually working with certification bodies,
                                government regulatory, partners and technology associations in efforts to provide
                                innovative and quality products that assure accuracy in performance from extensive
                                product testing, evaluation and continued product quality compliance.
                              </p>
                              <br />

                              <h3 className="introHeading">NAFCO</h3>
                              <p className="introText">
                                OSince National Fire Fighting Manufacturing FZCO (NAFFCO) was established, it has grown
                                to become the largest fire fighting equipment manufacturer in the Middle East and one
                                of the top manufacturers worldwide. The company’s core business focuses on design,
                                manufacture, supply, installation and after sales services with its highly trained and
                                experienced technicians and engineers for fire fighting products ranging from basic fire
                                extinguishers to highly sophisticated fire engines. The company provides total fire
                                protection solutions to the most prestigious developments around the world, including
                                residential buildings, commercial complexes, telecommunication centres, industrial
                                installations, oil refineries and petrochemical plants and airport installations. With
                                its presence in over 100 countries, NAFFCO headquarters is located in United Arab
                                Emirates, where a wide range of innovative fire fighting equipment is manufactured with
                                the company’s state-of-the-art technology. The company is renowned for providing superb
                                quality and assuring the timely performance of its products at all times. With simple
                                yet effective fire extinguishers of all sizes, custom made fire cabinets, heavy duty
                                fire hoses, high capacity powerful pumps, mobile fire fighting systems, including CAFS
                                systems, and highly advanced fire engines, NAFFCO has dedicated itself to the science of
                                fire fighting.
                              </p>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="clearfix visible-sm-block visible-xs-block"></div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="sidebar-wrapper" style={{ background: '#f9f9f9', padding: '30px 20px' }}>
                <h4
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    borderBottom: '2px solid #333',
                    paddingBottom: '10px'
                  }}
                >
                  Quick Links
                </h4>
                <ul className="sidebar-nav" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/about" style={{ color: '#555', display: 'block' }}>
                      About Us
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/engineering" style={{ color: '#555', display: 'block' }}>
                      Engineering
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/services" style={{ color: '#555', display: 'block' }}>
                      Services
                    </Link>
                  </li>
                </ul>

                <div className="sidebar-contact" style={{ marginTop: '40px' }}>
                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      borderBottom: '2px solid #333',
                      paddingBottom: '10px'
                    }}
                  >
                    Contact
                  </h4>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Phone:</strong>
                    <br />
                    +971 4 3926207
                  </p>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Email:</strong>
                    <br />
                    info@intelligentenergy.ae
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isPumpsCompressors) {
    return (
      <div className="page-wrapper pumps-compressors-page">
        <div
          className="inner-banner"
          style={{
            background:
              'linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(css/breadCrumbsBackgroundImages/engineering-banner.jpg) center center/cover no-repeat',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <h3 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Pumps & Compressors
            </h3>
          </div>
        </div>

        <div className="container" style={{ padding: '60px 0' }}>
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <h3 className="introHeading">Pumps & Compressors</h3>
              <p className="introText">
                Running a business means equipping it with the right tools and equipment which can make operations
                efficient. Investing in the right manufacturing infrastructure can support you in accomplishing your
                business goals and provide value for money. It has been a strategy of  ours to
                introduce the best industrial solutions in its network; solutions which can deliver peace of mind.
              </p>
              <p className="introText">
                Intelligent Energy is a distributor of various brands of pumping equipment and air compressors &amp; provides the
                products/turnkey solution throughout the region through its dedicated sales &amp; after sales support
                team.
              </p>
            </div>

            <div className="col-md-3">
              <div className="sidebar-wrapper" style={{ background: '#f9f9f9', padding: '30px 20px' }}>
                <h4
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    borderBottom: '2px solid #333',
                    paddingBottom: '10px'
                  }}
                >
                  Quick Links
                </h4>
                <ul className="sidebar-nav" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/about" style={{ color: '#555', display: 'block' }}>
                      About Us
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/engineering" style={{ color: '#555', display: 'block' }}>
                      Engineering
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/services" style={{ color: '#555', display: 'block' }}>
                      Services
                    </Link>
                  </li>
                </ul>

                <div className="sidebar-contact" style={{ marginTop: '40px' }}>
                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      borderBottom: '2px solid #333',
                      paddingBottom: '10px'
                    }}
                  >
                    Contact
                  </h4>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Phone:</strong>
                    <br />
                    +971 4 3926207
                  </p>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Email:</strong>
                    <br />
                    info@intelligentenergy.ae
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isMachinery) {
    return (
      <div className="page-wrapper machinery-page">
        <div
          className="inner-banner"
          style={{
            background:
              'linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(css/breadCrumbsBackgroundImages/engineering-banner.jpg) center center/cover no-repeat',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <h3 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Machinery
            </h3>
          </div>
        </div>

        <div className="container" style={{ padding: '60px 0' }}>
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <h5 className="introHeading">Machinery</h5>
              <p className="introText">
                Backed by almost two decades of experience in providing field proven results, Intelligent Energy
                continues to strive for innovative industrial engineering solutions.
              </p>
              <p className="introText">
                We meet the ever-changing needs of our clients by continuous revitalization of our products and their
                features. Our Machinery Sales division has state-of-the-art material handling and construction machinery
                under its umbrella.
              </p>
              <p className="introText">
                We are fully capable and equipped to add value in local construction. We are the distributors of various
                world renowned brands of machinery and earth- moving equipment which play a key role in construction
                &amp; material handling works.
              </p>
            </div>

            <div className="col-md-3">
              <div className="sidebar-wrapper" style={{ background: '#f9f9f9', padding: '30px 20px' }}>
                <h4
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    borderBottom: '2px solid #333',
                    paddingBottom: '10px'
                  }}
                >
                  Quick Links
                </h4>
                <ul className="sidebar-nav" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/about" style={{ color: '#555', display: 'block' }}>
                      About Us
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/engineering" style={{ color: '#555', display: 'block' }}>
                      Engineering
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/services" style={{ color: '#555', display: 'block' }}>
                      Services
                    </Link>
                  </li>
                </ul>

                <div className="sidebar-contact" style={{ marginTop: '40px' }}>
                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      borderBottom: '2px solid #333',
                      paddingBottom: '10px'
                    }}
                  >
                    Contact
                  </h4>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Phone:</strong>
                    <br />
                    +971 4 3926207
                  </p>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Email:</strong>
                    <br />
                    info@intelligentenergy.ae
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isEpcTransmissionDistributionSolution) {
    const introText =
      'The link between the Power Generation plant and the load is of vital importance. The growing loads and aged equipment lessen the efficiency of this system. Our T&D department is carrying out these activities in the most professional way by providing turnkey solutions & expert services in the power transmission & distribution segment.'

    return (
      <div className="page-wrapper epc-transmission-distribution-solution-page">
        <div
          className="inner-banner"
          style={{
            background:
              'linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(css/breadCrumbsBackgroundImages/engineering-banner.jpg) center center/cover no-repeat',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <h3 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Transmission & Distribution
            </h3>
          </div>
        </div>

        <div className="container" style={{ padding: '60px 0' }}>
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <h3 className="introHeading">Transmission & Distribution</h3>
              <p className="introText">{introText}</p>
            </div>

            <div className="col-md-3">
              <div className="sidebar-wrapper" style={{ background: '#f9f9f9', padding: '30px 20px' }}>
                <h4
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    borderBottom: '2px solid #333',
                    paddingBottom: '10px'
                  }}
                >
                  Quick Links
                </h4>
                <ul className="sidebar-nav" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/about" style={{ color: '#555', display: 'block' }}>
                      About Us
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/engineering" style={{ color: '#555', display: 'block' }}>
                      Engineering
                    </Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/services" style={{ color: '#555', display: 'block' }}>
                      Services
                    </Link>
                  </li>
                </ul>

                <div className="sidebar-contact" style={{ marginTop: '40px' }}>
                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      borderBottom: '2px solid #333',
                      paddingBottom: '10px'
                    }}
                  >
                    Contact
                  </h4>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Phone:</strong>
                    <br />
                    +971 4 3926207
                  </p>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    <strong>Email:</strong>
                    <br />
                    info@intelligentenergy.ae
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Map titles to specific background images if needed, or use a default
  // For now, using a default or trying to match the original naming convention
  const bgImage = '/css/breadCrumbsBackgroundImages/engineering-banner.jpg'; // Default fallback

  return (
    <div className="page-wrapper">
      {/* Inner Banner */}
      <div className="inner-banner" style={{
          background: `linear-gradient(rgba(0, 0 ,0 , .2), rgba(0, 0 ,0 , .2)), url(${bgImage}) center center/cover no-repeat`,
          height: '250px', // Approximated height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
      }}>
        <div className="container">
            <h3 style={{color: '#fff', fontSize: '36px', fontWeight: 'bold', textTransform: 'uppercase'}}>{title}</h3>
        </div>
      </div>

      <div className="container" style={{padding: '60px 0'}}>
        <div className="row">
            <div className="col-md-9">
                {/* Content Placeholder */}
                <h5 className="introHeading" style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase'}}>INTRODUCTION</h5>
                <p className="introText" style={{marginBottom: '20px', lineHeight: '1.8', color: '#666'}}>
                    {title} is a key part of our service offerings. We provide top-tier solutions tailored to meet the specific needs of our clients. Our team of experts ensures that every project is executed with precision and excellence.
                </p>
                <p className="introText" style={{marginBottom: '20px', lineHeight: '1.8', color: '#666'}}>
                    With years of experience in the industry, we have established ourselves as a trusted partner for {title}. We are committed to delivering quality and value in everything we do.
                </p>
                
                {/* Additional placeholder content to make the page look full */}
                <h5 className="introHeading" style={{fontSize: '20px', fontWeight: 'bold', marginTop: '30px', marginBottom: '20px', textTransform: 'uppercase'}}>KEY FEATURES</h5>
                <ul className="unorderList" style={{paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.8', color: '#666'}}>
                    <li style={{marginBottom: '10px'}}>Comprehensive solutions for {title}.</li>
                    <li style={{marginBottom: '10px'}}>Dedicated team of professionals.</li>
                    <li style={{marginBottom: '10px'}}> adherence to international standards.</li>
                    <li style={{marginBottom: '10px'}}>24/7 support and maintenance.</li>
                </ul>

                <p className="introText" style={{marginBottom: '20px', lineHeight: '1.8', color: '#666'}}>
                    Contact us today to learn more about how we can help you with {title}.
                </p>
            </div>

            <div className="col-md-3">
                {/* Sidebar */}
                <div className="sidebar-wrapper" style={{background: '#f9f9f9', padding: '30px 20px'}}>
                    <h4 style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px'}}>Quick Links</h4>
                    <ul className="sidebar-nav" style={{listStyle: 'none', padding: 0, margin: 0}}>
                        <li style={{marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px'}}>
                            <Link to="/about" style={{color: '#555', display: 'block'}}>About Us</Link>
                        </li>
                        <li style={{marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px'}}>
                            <Link to="/engineering" style={{color: '#555', display: 'block'}}>Engineering</Link>
                        </li>
                        <li style={{marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px'}}>
                            <Link to="/services" style={{color: '#555', display: 'block'}}>Services</Link>
                        </li>
                    </ul>

                    <div className="sidebar-contact" style={{marginTop: '40px'}}>
                        <h4 style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px'}}>Contact</h4>
                        <p style={{marginBottom: '10px', color: '#666'}}><strong>Phone:</strong><br/>+971 4 3926207</p>
                        <p style={{marginBottom: '10px', color: '#666'}}><strong>Email:</strong><br/>info@intelligentenergy.ae</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
