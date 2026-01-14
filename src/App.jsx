import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import GenericPage from './pages/GenericPage.jsx'
import Gallery from './pages/Gallery.jsx'
import pages from './data/pages.js'
import Project from './pages/Project.jsx'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="app-shell">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media-gallery" element={<Gallery />} />
          <Route path="/project" element={<Project />} />
          {pages.map(p => (
            <Route key={p.path} path={p.path} element={<GenericPage title={p.title} />} />
          ))}
          <Route path="*" element={<GenericPage title="404 Not Found" />} />
        </Routes>
      </main>
      {location.pathname !== '/contact' ? (
        <section className="contact-info-style-one">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="sec-title title">
                  <h3>
                    Get in <span>touch</span>
                  </h3>
                  <p>Get answers to your questions about products, sales, support or any other query.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-infos">
                  <div className="single-contact-infos col-md-6">
                    <div className="icon-box">
                      <i className="industrio-icon-phone-call cIcons"></i>
                    </div>
                    <div className="text-box">
                      <h3>Call us</h3>
                      <p>+971 4 3926207</p>
                    </div>
                  </div>
                  <div className="single-contact-infos col-md-6">
                    <div className="icon-box">
                      <i className="industrio-icon-envelope cIcons"></i>
                    </div>
                    <div className="text-box">
                      <h3>Email us</h3>
                      <p>info@intelligentenergy.ae</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  )
}
