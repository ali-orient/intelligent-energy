import React, { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import aboutSideImage from '../data/about-us.jpeg'

export default function GenericPage({ title }) {
  const location = useLocation()
  const isAbout = location.pathname === '/about'
  const isEngineering = location.pathname === '/engineering'
  const isProductSupportParts = location.pathname === '/product-support-parts'

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
          "In 1999 the competition was getting intense. Ever rising cost of electricity followed by frequent power outages was making it tougher for Pakistan’s industrial sector to compete. The sector required a reliable alternate solution. Intelligent Energy proudly offered power system solutions from Jenbacher which is still the world’s best and the largest gas generator manufacturer with the lowest gas consumption and operating cost. We has sold 875+ INNIO Jenbacher gas gensets generating more than 1245MW of power in the Pakistan territory."
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
          'In 2009, Intelligent Energy Pvt Ltd became the official Distributor for Cummins Diesel Engines & Genset in Pakistan. Offering diesel engine powered generator sets from 22 kVA to 3325 kVA. Just with in no time we had outdone itself and received "Brand of the Year" for Cummins Diesel Engines.'
      },
      {
        id: 'year-2012',
        label: '2012',
        img: '/img/time-line-05.jpg',
        heading: 'OES Building & 1000th Engine',
        body:
          'OES management, aims to create inspirational, collaborative, and healthy workspaces in the five-story building, spread over 5100 sq. yds. The office incorporates state-of-the-art building addresses the needs of tech companies, helping to attract an innovative workforce to us, ultimately making this a noteworthy building in one of the biggest industrial zone of Pakistan. In 2013, we sold 1000th Jenbacher gas genset which marked 1400 MW of sold power by us. It was the largest concentration of Jenbacher gas engines in any country around the World.'
      },
      {
        id: 'year-2014-Present',
        label: '2014-Present',
        img: '/img/time-line-06.jpg',
        heading: 'From then till now...',
        body:
          'Orient is providing the most indigenous solutions to industrial needs in terms of Power Generation, Heat Recovery, HVACR, Pumps, T&D, Earth Moving Machines, Compressors etc., Not only industrial needs but we have also served the IPPs for Power generation. Our K-Electric 193 MW (back in 2009), Zephyr 50 MW Wind Farm commissioned in Q1 2019, and many others which are available on our website have been the “Real Deal” for OES, the Flagship projects to have added to the “OES success stories”.'
      }
    ],
    []
  )
  const [activeYearId, setActiveYearId] = useState('year-1996')
  const activeYear = timeline.find(t => t.id === activeYearId) || timeline[0]

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
                Our parts department sales support function and warehousing for Pakistan region. Our newly designed tailor made warehouse meets huge spare parts demand to cater power generation business.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                FEATURES OF PARTS DEPARTMENT
              </h5>
              <ul className="unorderList1" style={{ paddingLeft: 0 }}>
                <li>100% genuine parts country wide availability.</li>
                <li>24/7 parts issuance.</li>
                <li>Parts distribution network all over Pakistan.</li>
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
                    <Link to="/product-support" style={{ color: '#555', display: 'block' }}>Services</Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/contact" style={{ color: '#555', display: 'block' }}>Contact Us</Link>
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
                Our parts department sales support function and warehousing for Pakistan region. Our newly designed tailor made warehouse meets huge spare parts demand to cater power generation business.
              </p>

              <h5 className="introHeading" style={{ fontSize: '20px', fontWeight: 'bold', margin: '30px 0 15px', textTransform: 'uppercase' }}>
                FEATURES OF PARTS DEPARTMENT
              </h5>
              <ul className="unorderList1" style={{ paddingLeft: 0 }}>
                <li>100% genuine parts country wide availability.</li>
                <li>24/7 parts issuance.</li>
                <li>Parts distribution network all over Pakistan.</li>
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
                    <Link to="/product-support" style={{ color: '#555', display: 'block' }}>Services</Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/contact" style={{ color: '#555', display: 'block' }}>Contact Us</Link>
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
                OES provides added value to the customer by offering a comprehensive project management service for the installation of projects. At point of order, OES assigns a dedicated project engineer to the installation supervision job who is customer’s primary point of contact following the sales phase and coordinates the engineering, installation and commissioning of equipment.
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
                This is our core expertise to execute Co-generation as well as Tri-Generation project in Pakistan.
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
                    <Link to="/product-support" style={{ color: '#555', display: 'block' }}>Services</Link>
                  </li>
                  <li style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <Link to="/contact" style={{ color: '#555', display: 'block' }}>Contact Us</Link>
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
                            <Link to="/product-support" style={{color: '#555', display: 'block'}}>Services</Link>
                        </li>
                        <li style={{marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px'}}>
                            <Link to="/contact" style={{color: '#555', display: 'block'}}>Contact Us</Link>
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
