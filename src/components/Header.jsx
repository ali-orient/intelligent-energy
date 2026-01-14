import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import intelligentLogo from '../data/Intelligent New LOGO 2025.png';

export default function Header({ homeBelowHero = false } = {}) {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onPointerDown = e => {
      if (!headerRef.current) return;
      if (headerRef.current.contains(e.target)) return;
      setOpenDropdown(null);
    };
    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, []);

  useEffect(() => {
    let triggerY = 100;

    const computeTrigger = () => {
      if (!homeBelowHero) {
        triggerY = 100;
        return;
      }
      if (!headerRef.current) return;
      triggerY = headerRef.current.getBoundingClientRect().top + window.scrollY;
    };

    const handleScroll = () => {
      const y = window.scrollY || 0;
      setSticky(y >= triggerY);
    };

    const handleResize = () => {
      computeTrigger();
      handleScroll();
    };

    computeTrigger();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [homeBelowHero, location.pathname]);

  useLayoutEffect(() => {
    const update = () => {
      const h = headerRef.current ? headerRef.current.offsetHeight : 0;
      setPlaceholderHeight(h);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Helper to handle submenu toggling on mobile if needed, 
  // but for desktop we rely on CSS hover or simple React state if we were building a mobile menu from scratch.
  // The original site uses a side-nav for mobile. We'll focus on desktop structure first.
  const toggleMobileDropdown = (id) => {
    setMobileDropdownOpen(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
    {sticky ? <div style={{ height: placeholderHeight }} /> : null}
    <header
      ref={headerRef}
      id="header-1"
      className={`header header-home-two${homeBelowHero ? ' home-under-hero' : ''} ${sticky ? 'stricky-fixed' : 'stricky'}`}
    >
      <nav className="navbar navbar-default header-navigation">
        <div className="container clearfix has-badges">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button 
              className="side-nav-toggler side-nav-opener" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>

          <Link className="navbar-brand" to="/">
            <img className="default-logo" src={intelligentLogo} alt="Intelligent Energy" />
            <img className="sticky-logo" src={intelligentLogo} alt="Intelligent Energy" />
          </Link>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse main-navigation mainmenu" id="main-nav-bar" style={{display: 'block'}}> 
            {/* Added display:block to force show since we don't have the original JS for collapse */}
            
            <ul className="nav navbar-nav navigation-box">
              <li className={location.pathname === '/' ? 'current' : ''}>
                <Link to="/">Home</Link>
              </li>
              <li className={location.pathname === '/about' ? 'current' : ''}> 
                <Link to="/about">About Us</Link> 
              </li>

              <li className={`dropdown${openDropdown === 'solutions' ? ' open' : ''}`}>
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    setOpenDropdown(x => (x === 'solutions' ? null : 'solutions'));
                  }}
                >
                  Solutions
                </a>
                <ul className="sub-menu">
                    <li><Link to="/engineering">Engineering</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/product-support-parts">Parts</Link></li>
                </ul>
              </li>

              <li className={location.pathname === '/project' ? 'current' : ''}>
                <Link to="/project">Projects</Link>
              </li>
                  <li className={location.pathname === '/contact' ? 'current' : ''}>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          
        </div>
      </nav>
    </header>

    {/* Mobile Side Menu (simplified for now) */}
    {mobileMenuOpen && (
        <div className="hidden-sidebar active" style={{transform: 'translate(0px, 0px) scale(1, 1)', opacity: 1}}>
             <div className="sidebar-content">
                <div className="mb-toggle" style={{marginBottom: 20}}>
                     <span onClick={() => setMobileMenuOpen(false)}><p>✕ Close</p></span>
                </div>
                <ul className="navigation-box">
                    <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
                    <li>
                      <a className="mb-toggle">
                        <span className="subnav-toggler">
                          <p onClick={() => toggleMobileDropdown('solutions')}>
                            Solutions <span className="fa fa-caret-down"></span>
                          </p>
                        </span>
                      </a>
                      <ul
                        className="sub-menu"
                        style={{ width: '100%', display: mobileDropdownOpen['solutions'] ? 'block' : 'none' }}
                      >
                        <li className="mb-mega-sub-menu-ul-li">
                          <Link to="/engineering" onClick={() => setMobileMenuOpen(false)}>Engineering</Link>
                        </li>
                        <li className="mb-mega-sub-menu-ul-li">
                          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                        </li>
                        <li className="mb-mega-sub-menu-ul-li">
                          <Link to="/product-support-parts" onClick={() => setMobileMenuOpen(false)}>Parts</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/project" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                    </li>
                    <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
                </ul>
             </div>
        </div>
    )}
    </>
  );
}
