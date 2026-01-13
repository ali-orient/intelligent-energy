import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
 
export default function Project() {
  const items = [
    { src: 'img/project-page-1.jpg', title: 'K-Electric', href: '/k-electric', classes: 'chemical' },
    { src: 'img/project-page-2.jpg', title: 'Zephyr', href: '/zephyr', classes: 'energy chemical' },
    { src: 'img/project-page-3.jpg', title: 'Gold Crest Mall', href: '/gold-crest-mall', classes: 'oil' },
    { src: 'img/project-page-4.jpg', title: 'Sapphire', href: '/sapphire', classes: 'chemical' },
    { src: 'img/project-page-5.jpg', title: 'Meezan Bank', href: '/meezan-bank', classes: 'chemical' },
    { src: 'img/project-page-6.jpg', title: 'Al Karam', href: '/al-karam', classes: 'chemical' },
    { src: 'img/project-page-7.jpg', title: 'Ahmad Jamal', href: '/ahmad-jamal', classes: 'chemical' },
    { src: 'img/project-page-8.jpg', title: 'Jadeed Feeds Industries', href: '/jadeed-feeds-industries', classes: 'chemical' },
    { src: 'img/project-page-9.jpg', title: 'Inmatec', href: '/inmatec', classes: 'construction' },
    { src: 'img/project-page-10.jpg', title: 'Lucky One Mall', href: '/luck-one-mall', classes: 'oil' },
    { src: 'img/project-page-11.jpg', title: 'Diamer Bhasha Dam WAPDA', href: '/diamer-bhasha-dam-wapda', classes: 'chemical' },
    { src: 'img/project-page-12.jpg', title: 'Shaukat Khanum Hospital', href: '/shaukat-khanum-memorial-cancer-hospital-peshawar', classes: 'chemical' },
    { src: 'img/project-page-13.jpg', title: 'M5 Motorway', href: '/m5-motorway', classes: 'chemical' },
    { src: 'img/project-page-14.jpg', title: 'Transmission & Distribution', href: '/t-d', classes: 'construction' },
    { src: 'img/project-page-15.jpg', title: 'Cummins Power Generation', href: '/cummins-power-generation', classes: 'chemical' },
    { src: 'img/project-page-16.jpg', title: 'Siemens Gamesa Renewable Energy', href: '/siemens-gamesa-renewable-energy', classes: 'energy' }
  ]

  const filters = [
    { key: '.masonary-item', label: 'All Projects', icon: 'industrio-icon-layers' },
    { key: '.chemical', label: 'Power Generation', icon: 'fab fa-battle-net' },
    { key: '.energy', label: 'Renewable Energy', icon: 'fas fa-bolt' },
    { key: '.oil', label: 'HVAC', icon: 'industrio-icon-drop-of-liquid' },
    { key: '.construction', label: 'Others', icon: 'industrio-icon-atom' }
  ]
  const [activeFilter, setActiveFilter] = useState('.masonary-item')
  const visibleItems = useMemo(() => {
    if (activeFilter === '.masonary-item') return items
    const cls = activeFilter.replace('.', '')
    return items.filter(it => it.classes.split(/\s+/).includes(cls))
  }, [activeFilter])
  return (
    <div className="page-wrapper project">
      <div className="inner-banner" style={{background: 'linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(css/breadCrumbsBackgroundImages/projects.jpg) center center/cover no-repeat'}}>
        <div className="container">
          <h3>Projects</h3>
        </div>
      </div>

      <section className="portfolio-style-two sec-pad">
        <div className="container">
          <div className="sec-title text-center">
            <h3>Captive Power Projects</h3>
            <p>
              Intelligent Energy is a turnkey solution provider of power generation, including project management and
              cost-effective operational services. We offer complete preventive, predictive, corrective and
              situational maintenances with depth of knowledge, expertise and quality commitments.
            </p>
          </div>

          <div className="gallery-filter">
            <ul className="post-filter masonary text-center">
              {filters.map(f => (
                <li key={f.key} className={`filter ${activeFilter === f.key ? 'active' : ''}`} data-filter={f.key}>
                  <span onClick={() => setActiveFilter(f.key)}>
                    <i className={f.icon}></i>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="row masonary-layout filter-layout" data-filter-class="filter" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {visibleItems.map((it, i) => (
              <div key={i} className={`col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item ${it.classes}`}>
                <div className="single-portfolio-style-two">
                  <div className="img-box">
                    <img src={it.src} alt={it.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
