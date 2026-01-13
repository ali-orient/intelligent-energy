import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import GenericPage from './pages/GenericPage.jsx'
import Gallery from './pages/Gallery.jsx'
import pages from './data/pages.js'
import Project from './pages/Project.jsx'

export default function App() {
  const location = useLocation()

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
    </div>
  )
}
