import React from 'react'
import images from '../data/images.json'

export default function Gallery() {
  return (
    <section className="page">
      <div className="container">
        <h2>Media Gallery</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:'12px'}}>
          {images.map((src, i) => (
            <div key={i} style={{border:'1px solid #e6e6e6',padding:'8px',background:'#fff'}}>
              <img src={src} alt="" style={{width:'100%',height:'140px',objectFit:'cover'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
