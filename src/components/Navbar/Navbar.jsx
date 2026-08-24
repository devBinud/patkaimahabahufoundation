import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import {
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaXmark,
  FaChevronDown,
  FaMagnifyingGlass,
  FaGlobe,
  FaHeart,
  FaCalendarCheck
} from 'react-icons/fa6'
import { FiMenu } from 'react-icons/fi'
import logoImg from '../../assets/patkai_logo.jpg'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLang, setSelectedLang] = useState('English');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const location = useLocation();
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }
    return () => {
      document.body.classList.remove('drawer-open');
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setLangDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchOpen]);

  const toggleMobileDropdown = (key) => {
    setActiveMobileDropdown(activeMobileDropdown === key ? null : key);
  };

  const whatsappNumber = "917002808115";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Pranab Milan Gogoi, I would like to know more about the Assam Flood Relief Drive.")}`;

  const searchablePages = [
    { title: 'Live Relief Dashboard', link: '/', desc: 'Track the ongoing Assam flood relief drive' },
    { title: 'Provide Relief Materials', link: '/contribution', desc: 'Pledge clothes, food, hygiene kits & more' },
    { title: 'Ground Dispatch Report', link: '/ground-report', desc: 'Stories & photos from the flood relief ground team' },
    { title: 'Relief Categories', link: '/specialties', desc: 'Ration, water, shelter, medical & rehabilitation aid' },
    { title: 'Request Relief Assistance', link: '/appointment', desc: 'Ask for ration, medical, shelter or rescue support' },
    { title: 'Relief Drive Gallery', link: '/gallery', desc: 'Photos from the field and drop-off point' },
    { title: 'FAQs About the Relief Drive', link: '/philosophy', desc: 'Transparency, verification and volunteering questions' },
    { title: 'About Our Ground Team', link: '/about', desc: 'Meet the Patkai Mahabahu Foundation & organiser' },
    { title: 'Drop-off Point & Contact', link: '/contact', desc: 'Collection point address, map and phone numbers' }
  ];

  const filteredSearchResults = searchQuery.trim() === ''
    ? searchablePages
    : searchablePages.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <header className="cureo-header-wrapper">
      {/* Top Bar Navy */}
      <div className="top-bar-navy">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <a href="tel:+917002808115" className="phone-fullheight-link">
              <FaPhone size={11} />
              <span>+91 70028 08115</span>
            </a>
            <span className="topbar-tagline">
              Assam Flood Relief
            </span>
          </div>

          <div className="social-links-top">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="topbar-social-item">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className="topbar-social-item">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="X (Twitter)" className="topbar-social-item">
              <FaXTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube" className="topbar-social-item">
              <FaYoutube />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" title="WhatsApp" className="topbar-social-item">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Main Floating Paavai-Style Navigation Bar */}
      <div className={`cureo-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="header-content">

          {/* Foundation Logo */}
          <Link to="/" className="brand-wrapper" aria-label="Patkai Mahabahu Foundation Home">
            <img src={logoImg} alt="Patkai Mahabahu Foundation Logo" className="brand-logo" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="cureo-desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links">

              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end
                >
                  Home
                </NavLink>
              </li>

              {/* Dropdown 1: About the Drive */}
              <li className="nav-item has-dropdown">
                <span className="nav-link">
                  About the Drive
                  <FaChevronDown className="dropdown-chevron" />
                </span>
                <div className="nav-dropdown-menu">
                  <div className="dropdown-inner">
                    <Link to="/about" className="dropdown-item">
                      <span className="dropdown-item-title">About Patkai Mahabahu</span>
                    </Link>
                    <Link to="/philosophy" className="dropdown-item">
                      <span className="dropdown-item-title">FAQs & Transparency</span>
                    </Link>
                  </div>
                </div>
              </li>

              {/* Dropdown 2: Relief Efforts */}
              <li className="nav-item has-dropdown">
                <span className="nav-link">
                  Relief Efforts
                  <FaChevronDown className="dropdown-chevron" />
                </span>
                <div className="nav-dropdown-menu">
                  <div className="dropdown-inner">
                    <Link to="/specialties" className="dropdown-item">
                      <span className="dropdown-item-title">Relief Categories</span>
                    </Link>
                    <Link to="/ground-report" className="dropdown-item">
                      <span className="dropdown-item-title">Ground Dispatch Report</span>
                    </Link>
                  </div>
                </div>
              </li>

              {/* Dropdown 3: Get Involved */}
              <li className="nav-item has-dropdown">
                <span className="nav-link">
                  Get Involved
                  <FaChevronDown className="dropdown-chevron" />
                </span>
                <div className="nav-dropdown-menu">
                  <div className="dropdown-inner">
                    <Link to="/contribution" className="dropdown-item">
                      <span className="dropdown-item-title">Provide Relief Materials</span>
                    </Link>
                    <Link to="/appointment" className="dropdown-item">
                      <span className="dropdown-item-title">Request Relief Assistance</span>
                    </Link>
                    <Link to="/contact" className="dropdown-item">
                      <span className="dropdown-item-title">Drop-off Point & Contact</span>
                    </Link>
                  </div>
                </div>
              </li>

              {/* Dropdown 4: Showcase */}
              <li className="nav-item has-dropdown">
                <span className="nav-link">
                  Showcase
                  <FaChevronDown className="dropdown-chevron" />
                </span>
                <div className="nav-dropdown-menu">
                  <div className="dropdown-inner">
                    <Link to="/gallery" className="dropdown-item">
                      <span className="dropdown-item-title">Relief Drive Gallery</span>
                    </Link>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </nav>

          {/* Action Controls Group */}
          <div className="header-controls-right">

            {/* DONATE Pill Button */}
            <Link to="/contribution" className="btn-paavai-donate">
              <FaHeart size={14} />
              <span>Contribute</span>
            </Link>

            {/* Mobile Drawer Button */}
            <button
              className="cureo-mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <FiMenu size={22} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Off-Canvas Navigation Drawer */}
      <div className={`mobile-drawer-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`mobile-right-drawer ${mobileMenuOpen ? 'active' : ''}`}>

        <div className="drawer-header">
          <div className="drawer-logo-wrap">
            <span className="drawer-logo-title">PATKAI MAHABAHU</span>
            <span className="drawer-logo-sub">FOUNDATION</span>
          </div>
          <button className="drawer-close-btn" onClick={() => setMobileMenuOpen(false)}>
            <FaXmark size={20} />
          </button>
        </div>

        <div className="drawer-body">
          <ul className="drawer-nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => `drawer-nav-link ${isActive ? 'active' : ''}`} end>
                Live Relief Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `drawer-nav-link ${isActive ? 'active' : ''}`}>
                About the Drive
              </NavLink>
            </li>
            <li>
              <NavLink to="/specialties" className={({ isActive }) => `drawer-nav-link ${isActive ? 'active' : ''}`}>
                Relief Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/contribution" className={({ isActive }) => `drawer-nav-link ${isActive ? 'active' : ''}`}>
                Provide Relief Materials
              </NavLink>
            </li>
            <li>
              <NavLink to="/ground-report" className={({ isActive }) => `drawer-nav-link ${isActive ? 'active' : ''}`}>
                Ground Dispatch Report
              </NavLink>
            </li>
            <li>
              <NavLink to="/philosophy" className={({ isActive }) => `drawer-nav-link ${isActive ? 'active' : ''}`}>
                FAQs & Transparency
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }) => `drawer-nav-link ${isActive ? 'active' : ''}`}>
                Relief Drive Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `drawer-nav-link ${isActive ? 'active' : ''}`}>
                Drop-off Point & Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="drawer-footer">
          <Link to="/appointment" className="btn-paavai-donate drawer-cta-btn" style={{ width: '100%', justifyContent: 'center' }}>
            <FaCalendarCheck size={16} />
            <span>Request Relief Assistance</span>
          </Link>
          <a href="tel:+917002808115" className="drawer-phone-btn">
            <FaPhone size={13} />
            <span>Call Organiser: +91 70028 08115</span>
          </a>
        </div>
      </div>

      {/* Quick Search Modal Overlay */}
      {searchOpen && (
        <div className="search-modal-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="search-modal-header">
              <div className="search-input-box">
                <FaMagnifyingGlass className="search-box-icon" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search doctor profile, skin care, piles treatment, appointments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-modal-input"
                />
                {searchQuery && (
                  <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                    <FaXmark size={14} />
                  </button>
                )}
              </div>
              <button className="close-modal-btn" onClick={() => setSearchOpen(false)}>
                <FaXmark size={20} />
              </button>
            </div>

            <div className="search-modal-results">
              {filteredSearchResults.length > 0 ? (
                filteredSearchResults.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    className="search-result-card"
                    onClick={() => setSearchOpen(false)}
                  >
                    <div className="search-result-title">{item.title}</div>
                    <div className="search-result-desc">{item.desc}</div>
                  </Link>
                ))
              ) : (
                <div className="search-no-results">
                  No matching pages found for &quot;{searchQuery}&quot;
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
