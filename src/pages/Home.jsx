import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import b1 from '../banner carousel/banner-1-1.jpg'
import b2 from '../banner carousel/banner-1-2.jpg'
import b3 from '../banner carousel/banner-1-3.jpg'
import b4 from '../banner carousel/banner-1-4.jpg'
import projects from '../data/projects'

export default function Home() {
  const banners = [b1, b2, b3, b4]
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const businesses = [
    { href: '/power-generation', img: 'img/a2.jpg', title: 'POWER GENERATION', cls: 'chemical' },
    { href: '/renewable-energy', img: 'img/re-1.jpg', title: 'RENEWABLE ENERGY', cls: 'chemical' },
    { href: '/hvacr', img: 'img/a6.jpg', title: 'HVACR', cls: 'eco' },
    { href: '/lube-oil', img: 'img/a5.jpg', title: 'LUBE OIL', cls: 'chemical' },
    { href: '/epc-transmission-distribution-solution', img: 'img/a4.jpg', title: 'T & D (TRANSMISSION & DISTRIBUTION)', cls: 'gas' },
    { href: '/pumps-compressors', img: 'img/a3.jpg', title: 'PUMPS & COMPRESSOR', cls: 'eco' },
    { href: '/machinery', img: 'img/a1.jpg', title: 'MACHINERY', cls: 'gas' },
    { href: '/fire-security', img: 'img/a7.jpg', title: 'FIRE & SECURITY', cls: 'chemical' }
  ]
  const [bizIndex, setBizIndex] = useState(0)
  const [bizPaused, setBizPaused] = useState(false)
  const [perView, setPerView] = useState(4)
  const progress = [
    { label: 'Time Management', value: 85 },
    { label: 'Commitments', value: 100 },
    { label: 'Quality', value: 89 }
  ]
  const [progressReady, setProgressReady] = useState(false)
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      setPerView(w < 576 ? 1 : w < 768 ? 2 : w < 992 ? 3 : 4)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  useEffect(() => {
    const t = setTimeout(() => setProgressReady(true), 300)
    return () => clearTimeout(t)
  }, [])
  useEffect(() => {
    if (bizPaused) return
    const t = setInterval(() => {
      setBizIndex(x => {
        const max = Math.max(0, businesses.length - perView)
        return x >= max ? 0 : x + 1
      })
    }, 4000)
    return () => clearInterval(t)
  }, [bizPaused, perView, businesses.length])
  const bizPrev = () => {
    const max = Math.max(0, businesses.length - perView)
    setBizIndex(x => (x <= 0 ? max : x - 1))
  }
  const bizNext = () => {
    const max = Math.max(0, businesses.length - perView)
    setBizIndex(x => (x >= max ? 0 : x + 1))
  }
  
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI(x => (x + 1) % banners.length), 5000)
    return () => clearInterval(t)
  }, [paused])
  
  const prev = () => setI(x => (x - 1 + banners.length) % banners.length)
  const next = () => setI(x => (x + 1) % banners.length)

  return (
    <div className="page-wrapper index">
      {/* Main Slider */}
      <section className="main-slider">
         <div className="rev_slider_wrapper fullwidthbanner-container elegant-hero">
             {/* Custom React Slider replacing Revolution Slider */}
             <div className="hero-slider" style={{position:'absolute', inset:0, zIndex:1}} 
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
             >
                <div className="hero-track" style={{transform:`translateX(-${i*100}%)`, transition:'transform 600ms ease', height: '100%', display: 'flex'}}>
                    {banners.map((src, idx) => (
                        <div key={idx} className="hero-slide" style={{minWidth: '100%', position: 'relative'}}>
                            <img src={src} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}} />
                        </div>
                    ))}
                </div>
                 <button className="hero-arrow left elegant-hero-arrow" onClick={prev}>‹</button>
                 <button className="hero-arrow right elegant-hero-arrow" onClick={next}>›</button>
             </div>
         </div>
      </section>

      {/* Our Businesses Section */}
      <section className="service-style-four about-page">
            <div className="container">
                <div className="sec-title">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Our <span>businesses</span></h3>
                        </div>
                        <div className="col-md-8"></div>
                    </div>
                </div>
                {/* Replaced Owl Carousel with Flex Grid/Scroll */}
                <div className="elegant-biz-carousel">
                  <div className="elegant-biz-viewport" onMouseEnter={() => setBizPaused(true)} onMouseLeave={() => setBizPaused(false)}>
                    <div className="elegant-biz-track" style={{transform:`translateX(-${(bizIndex*100)/perView}%)`}}>
                      {businesses.map((b, idx) => (
                        <div key={idx} className="elegant-biz-slide" style={{minWidth: `${100/perView}%`}}>
                          <div className={`single-service-style-four ${b.cls}`}>
                            <div className="img-box" style={{width: '100%'}}>
                              <img src={b.img} alt={b.title} style={{width:'100%'}} />
                              <div className="box">
                                <div className="content">
                                  <div className="content-head">
                                    <h3 className={b.title.length > 16 ? 'long-title' : ''}>{b.title}</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button aria-label="Previous" className="elegant-carousel-arrow left" onClick={bizPrev}>‹</button>
                  <button aria-label="Next" className="elegant-carousel-arrow right" onClick={bizNext}>›</button>
                </div>
            </div>
      </section>

      {/* Solutions We Provide Section */}
      <section className="service-style-three sec-pad">
            <div className="container">
                <div className="sec-title text-center">
                    <h3><span>Solutions</span> we provide</h3>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <Link to="/product-support-parts" className="solution-card">
                      <div className="solution-image-wrapper">
                        <img className="solution-image" src="img/service1.jpg" alt="Parts" />
                      </div>
                      <div className="solution-bar">
                        <span className="solution-title">Parts</span>
                      </div>
                      <div className="solution-icon">
                        <i className="fas fa-handshake"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <Link to="/services" className="solution-card">
                      <div className="solution-image-wrapper">
                        <img className="solution-image" src="img/service2.jpg" alt="Services" />
                      </div>
                      <div className="solution-bar">
                        <span className="solution-title">Services</span>
                      </div>
                      <div className="solution-icon">
                        <i className="fas fa-tools"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <Link to="/engineering" className="solution-card">
                      <div className="solution-image-wrapper">
                        <img className="solution-image" src="img/service3.jpg" alt="Engineering" />
                      </div>
                      <div className="solution-bar">
                        <span className="solution-title">Engineering</span>
                      </div>
                      <div className="solution-icon">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                    </Link>
                  </div>
                </div>
            </div>
      </section>

      {/* Why Choose Us / Fact Counter */}
      <section className="fact-counter-style-two fact-elegant">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="sec-title fact-elegant-title">
                            <h3>Why <span>choose us</span></h3>
                            <p>We are representing the world’s best and most renowned brands with a highly professional and knowledgeable team. One of the key elements of our business is establishing long-lasting relationships with our clients.</p>
                        </div>
                        <div>
                          {progress.map((p, idx) => (
                            <div key={idx} className="elegant-progress-row">
                              <div className="elegant-progress-head">
                                <span>{p.label}</span>
                                <span>{p.value}%</span>
                              </div>
                              <div className="elegant-progress-rail">
                                <div className="elegant-progress-bar" style={{width: progressReady ? `${p.value}%` : '0%'}}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="fact-counter row elegant-fact-counters">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="single-fact-counter elegant-fact-counter">
                                    <div className="icon-box"><i className="industrio-icon-team"></i></div>
                                    <div className="text-box">
                                        <div className="counter-head">
                                          <h3 className="counter">100</h3><h3>+</h3>
                                        </div>
                                        <div className="counter-down"><p>Employees</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="single-fact-counter elegant-fact-counter">
                                    <div className="icon-box"><i className="industrio-icon-child"></i></div>
                                    <div className="text-box">
                                        <div className="counter-head">
                                          <h3 className="counter">3500</h3><h3>+</h3>
                                        </div>
                                        <div className="counter-down"><p>Customers</p></div>
                                    </div>
                                </div>
                            </div>
                             <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="single-fact-counter elegant-fact-counter">
                                    <div className="icon-box"><i className="industrio-icon-atom"></i></div>
                                    <div className="text-box">
                                        <div className="counter-head">
                                          <h3 className="counter">3000</h3><h3>+</h3>
                                        </div>
                                        <div className="counter-down"><p>MW Installed</p></div>
                                    </div>
                                </div>
                            </div>
                             <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="single-fact-counter elegant-fact-counter">
                                    <div className="icon-box"><i className="far fa-building"></i></div>
                                    <div className="text-box">
                                        <div className="counter-head">
                                          <h3 className="counter">2</h3>
                                        </div>
                                        <div className="counter-down"><p>Regional Offices</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      {/* Feature Style One */}
      <section className="feature-style-one">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single-feature-style-one">
                            <div className="icon-box"><i className="industrio-icon-innovation"></i></div>
                            <div className="text-box"><h3>Innovative Solution</h3></div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single-feature-style-one light">
                            <div className="icon-box"><i className="industrio-icon-secure-shield"></i></div>
                            <div className="text-box"><h3>Customer Satisfaction</h3></div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single-feature-style-one light">
                            <div className="icon-box"><i className="industrio-icon-support"></i></div>
                            <div className="text-box"><h3>24/7 Support</h3></div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      {/* Projects */}
      <section className="portfolio-style-two full-width no-gutter sec-pad">
            <div className="container-fluid">
                <div className="sec-title text-center">
                    <h3>Projects for <span>inspirations</span></h3>
                    <div className="container">
                        <p>Intelligent Energy is a turnkey solution provider of power generation, including project management and cost-effective operational services.</p>
                    </div>
                </div>
                <div className="row masonary-layout filter-layout" style={{display:'flex', flexWrap:'wrap'}}>
                     {/* Static list of projects to match original layout visually */}
                    <div className="col-md-3 col-sm-6 col-xs-12 masonary-item">
                        <div className="single-portfolio-style-two">
                            <div className="img-box">
                                <img src="img/project1.jpg" alt="K-Electric" />
                            </div>
                        </div>
                    </div>
                     <div className="col-md-3 col-sm-6 col-xs-12 masonary-item">
                        <div className="single-portfolio-style-two">
                            <div className="img-box">
                                <img src="img/project3.jpg" alt="ZEPYR" />
                            </div>
                        </div>
                    </div>
                     <div className="col-md-3 col-sm-6 col-xs-12 masonary-item">
                        <div className="single-portfolio-style-two">
                            <div className="img-box">
                                <img src="img/project5.jpg" alt="KICTL" />
                            </div>
                        </div>
                    </div>
                     <div className="col-md-3 col-sm-6 col-xs-12 masonary-item">
                        <div className="single-portfolio-style-two">
                            <div className="img-box">
                                <img src="img/project-page-16.jpg" alt="ENERGY SERVICES" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      {/* Brand Carousel (Static) */}
      <section className="brand-carousel-area">
          <div className="container">
               <div className="sec-title">
                   <h3>Our <span>partners</span></h3>
               </div>
               <div className="row" style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:20}}>
                   <img src="img/b2.png" alt="INNIO" width="210" />
                   <img src="img/b1.png" alt="Cummins" width="81" />
                   <img src="img/b3.png" alt="Valvoline" width="118" />
                   <img src="img/b8.png" alt="Hangcha" width="110" />
                   <img src="img/b4.png" alt="Shuangliang" width="99" />
                   <img src="img/b5.png" alt="Dunham Bush" width="130" />
                   <img src="img/b7.png" alt="BOSCH" width="185" />
               </div>
          </div>
      </section>

    </div>
  )
}
