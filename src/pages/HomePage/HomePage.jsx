import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FaCalendarCheck,
  FaStethoscope,
  FaArrowRight,
  FaBoxOpen,
  FaDroplet,
  FaTent,
  FaHouse,
  FaBaby,
  FaHandHoldingHeart,
  FaClipboardList,
  FaCircleCheck,
  FaTruckFast,
  FaChartLine,
  FaPeopleGroup,
  FaQuoteLeft,
  FaUserShield,
  FaGlobe,
  FaUserTie,
  FaChevronRight,
  FaExpand,
  FaXmark
} from 'react-icons/fa6'
import hero1 from '../../assets/hero/hero1.jpeg'
import hero2 from '../../assets/hero/hero2.jpeg'
import hero3 from '../../assets/hero/hero3.jpeg'
import heroBg from '../../assets/hero/hero_bg.jpg'
import heroBgMobile from '../../assets/hero/hero_bg_mobile.jpg'
import pranabImg from '../../assets/pranab.jpeg'
import assamFloodImg from '../../assets/assam_flood.png'
import reliefDriveImg from '../../assets/relief_drive.png'
import wiredBg from '../../assets/wired-background-brown.webp'
import './HomePage.css'

export default function HomePage() {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);

  const galleryItems = [
    { id: 1, image: hero1, title: 'Ration Kits Distribution' },
    { id: 2, image: assamFloodImg, title: 'Rescue & Supply Boat' },
    { id: 3, image: hero2, title: 'Water Purification Aid' },
    { id: 4, image: hero3, title: 'Temporary Tarpaulins' },
    { id: 5, image: hero1, title: 'Ground Action Drive' },
    { id: 6, image: assamFloodImg, title: 'Flood Riverway Dispatch' },
    { id: 7, image: hero2, title: 'Health Support Unit' },
    { id: 8, image: hero3, title: 'Village Rehabilitation' }
  ];

  return (
    <>
      {/* Full-Width Hero Section */}
      <section className="hero-full-section hero-slider-section">
        <div className="hero-slider-container">

          {/* Desktop Background */}
          <div
            className="hero-slide-bg hero-desktop-bg active"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div className="hero-gradient-overlay"></div>
          </div>

          {/* Mobile Image Wrapper */}
          <div className="hero-mobile-img-wrapper">
            <img src={heroBgMobile} alt="Assam Flood Relief Drive" className="hero-mobile-img" />
          </div>

          {/* Hero Text Content */}
          <div className="hero-content-wrapper">
            <div className="hero-text-block">
              <span className="hero-slide-tag">ASSAM FLOOD RELIEF DRIVE</span>

              <h1 className="hero-main-title">
                <span className="hero-title-blue">Reaching Every</span><br />
                <span className="hero-title-green">Flood-Affected Family</span>
              </h1>

              <p className="hero-banner-desc">
                Emergency ration kits, clean water and essential supplies delivered directly to families displaced by the Assam floods, village by village.
              </p>

              <div className="hero-banner-buttons">
                <Link to="/contribution" className="btn-hero-primary">
                  <span>Provide Relief Materials</span>
                  <FaChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Column Action Bar (Matching Reference Image Design) */}
      <section className="flood-action-wrapper">
        <div className="flood-action-container">
          {/* 1. Emergency Ration Kits */}
          <Link to="/appointment" className="flood-item">
            <FaBoxOpen className="flood-item-icon" />
            <span className="action-bar-title">Emergency Food & Ration Kits</span>
          </Link>

          {/* 2. Clean Drinking Water */}
          <Link to="/appointment" className="flood-item">
            <FaDroplet className="flood-item-icon" />
            <span className="action-bar-title">Clean Water & Hygiene Kits</span>
          </Link>

          {/* 3. Shelter & Tarpaulins */}
          <Link to="/appointment" className="flood-item">
            <FaTent className="flood-item-icon" />
            <span className="action-bar-title">Temporary Shelter Kits</span>
          </Link>

          {/* 4. Rebuilding Homes */}
          <Link to="/appointment" className="flood-item">
            <FaHouse className="flood-item-icon" />
            <span className="action-bar-title">Rebuilding Homes & Rehabilitation</span>
          </Link>
        </div>
      </section>

      {/* About Us Section (Matching Second UI Reference Layout) */}
      <section className="about-spotlight-section">
        <div className="about-spotlight-container">
          <div className="about-grid">

            {/* Left Content Column */}
            <div className="about-left-col">
              <span className="about-tag">ABOUT US</span>
              <h2 className="about-title">
                Relief Delivered.<br />
                <span className="about-title-highlight">Transparently Tracked.</span>
              </h2>
              <p className="about-desc">
                Patkai Mahabahu Foundation is deeply committed to delivering transparent, direct relief to flood-affected families across Assam. Guided by ground coordinator <strong>Pranab Milan Gogoi</strong> and our volunteer network, we ensure essential ration, clean water, and shelter reach every displaced household.
              </p>

              {/* Yellow Notice Information Box */}
              <div className="about-info-box">
                <p className="info-box-text">
                  Direct ground relief distribution is actively conducted across flood-hit villages in Assam. Please note that relief kits are distributed directly through our verified ground units and <strong>tracked transparently from drop-off to doorstep</strong>.
                </p>
              </div>

              <div>
                <Link to="/about" className="btn-hero-primary">
                  <span>Know More About Us</span>
                </Link>
              </div>
            </div>

            {/* Right Founder Spotlight Card (Matching Second UI Reference) */}
            <div className="founder-spotlight-card">
              <div className="founder-header">
                <img src={pranabImg} alt="Pranab Milan Gogoi" className="founder-avatar-img" />
                <div className="founder-info">
                  <h3 className="founder-name">Pranab Milan Gogoi</h3>
                  <span className="founder-role">Lead Ground Coordinator & Organiser</span>
                </div>
              </div>

              <div className="founder-quote-body">
                <span className="quote-mark-large">“</span>
                <p className="founder-quote-paragraph">
                  At <em>Patkai Mahabahu Foundation</em>, we are deeply committed to empowering every flood-affected family in Assam with <strong>direct, transparent ground support</strong> that provides immediate ration, clean water, and long-term rebuilding tailored to each village&apos;s emergency needs...
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brown Wired Background Separator Banner */}
      <section
        className="wired-separator-banner"
        style={{ backgroundImage: `linear-gradient(rgba(45, 12, 18, 0.88), rgba(45, 12, 18, 0.88)), url(${wiredBg})` }}
      >
        <div className="wired-separator-container">
          <div className="wired-separator-item">
            <FaHandHoldingHeart className="wired-sep-react-icon" />
            <div className="wired-sep-text-wrapper">
              <strong className="wired-sep-heading">Direct Community Support</strong>
            </div>
          </div>

          <div className="wired-sep-divider"></div>

          <div className="wired-separator-item">
            <FaUserShield className="wired-sep-react-icon" />
            <div className="wired-sep-text-wrapper">
              <strong className="wired-sep-heading">100% Transparent Relief</strong>
            </div>
          </div>

          <div className="wired-sep-divider"></div>

          <div className="wired-separator-item">
            <FaTruckFast className="wired-sep-react-icon" />
            <div className="wired-sep-text-wrapper">
              <strong className="wired-sep-heading">Verified Ground Units</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Active Relief Drive Showcase Section */}
      <section className="active-drive-section">
        <div className="active-drive-container">
          <div className="active-drive-grid">

            {/* Image Column showcasing relief_drive.png */}
            <div className="active-drive-img-col">
              <div className="drive-img-frame">
                <img
                  src={reliefDriveImg}
                  alt="Patkai Mahabahu Foundation Active Relief Drive"
                  className="drive-showcase-img"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="active-drive-content-col">
              <span className="about-tag">ACTIVE GROUND DRIVE</span>
              <h2 className="about-title">
                Direct Relief Materials & Community Support
              </h2>
              <p className="about-desc">
                Our active relief drive brings vital resources (food ration kits, clean drinking water, hygiene supplies, and emergency shelters) straight to flood-ravaged villages across Assam.
              </p>

              <div className="drive-stats-row">
                <div className="drive-stat-card">
                  <span className="drive-stat-number">5,000+</span>
                  <span className="drive-stat-label">Families Supported</span>
                </div>
                <div className="drive-stat-card">
                  <span className="drive-stat-number">40+</span>
                  <span className="drive-stat-label">Villages Reached</span>
                </div>
                <div className="drive-stat-card">
                  <span className="drive-stat-number">100%</span>
                  <span className="drive-stat-label">Direct & Tracked</span>
                </div>
              </div>

              <div style={{ marginTop: '1.75rem' }}>
                <Link to="/contribution" className="btn-hero-primary">
                  <span>Pledge Relief Materials</span>
                  <FaChevronRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section (Exact Match to Reference UI) */}
      <section className="hiw-wave-section">
        <div className="hiw-wave-container">
          <div className="hiw-wave-header">
            <span className="hiw-wave-tag">HOW IT WORKS</span>
            <h2 className="hiw-wave-title">
              SIMPLE STEPS TO TRANSPARENT<br />FLOOD RELIEF
            </h2>
          </div>

          <div className="hiw-wave-flow">
            {/* SVG Connecting Curved Yellow Arrows */}
            <svg className="hiw-svg-arrows" viewBox="0 0 1000 160" fill="none" preserveAspectRatio="none">
              <path
                d="M 190 50 Q 250 140 320 110"
                stroke="#F4D35E"
                strokeWidth="3"
                strokeDasharray="6 4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M 440 110 Q 500 20 570 50"
                stroke="#F4D35E"
                strokeWidth="3"
                strokeDasharray="6 4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M 690 50 Q 750 140 820 110"
                stroke="#F4D35E"
                strokeWidth="3"
                strokeDasharray="6 4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker id="arrowhead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#F4D35E" />
                </marker>
              </defs>
            </svg>

            <div className="hiw-wave-grid">
              {/* Step 1: High */}
              <div className="hiw-wave-step step-high">
                <div className="hiw-circle-wrapper">
                  <span className="hiw-num-badge">01</span>
                  <div className="hiw-circle-inner">
                    <FaClipboardList className="hiw-icon" />
                  </div>
                </div>
                <div className="hiw-step-content">
                  <h3 className="hiw-step-name">Report Need or Pledge</h3>
                  <p className="hiw-step-text">Request emergency kits or pledge cash and relief materials for flood families.</p>
                </div>
              </div>

              {/* Step 2: Low */}
              <div className="hiw-wave-step step-low">
                <div className="hiw-step-content">
                  <h3 className="hiw-step-name">Ground Team Verification</h3>
                  <p className="hiw-step-text">Volunteers verify village needs and prepare verified relief packages at dispatch point.</p>
                </div>
                <div className="hiw-circle-wrapper">
                  <span className="hiw-num-badge">02</span>
                  <div className="hiw-circle-inner">
                    <FaCircleCheck className="hiw-icon" />
                  </div>
                </div>
              </div>

              {/* Step 3: High */}
              <div className="hiw-wave-step step-high">
                <div className="hiw-circle-wrapper">
                  <span className="hiw-num-badge">03</span>
                  <div className="hiw-circle-inner">
                    <FaTruckFast className="hiw-icon" />
                  </div>
                </div>
                <div className="hiw-step-content">
                  <h3 className="hiw-step-name">Emergency Ground Dispatch</h3>
                  <p className="hiw-step-text">Relief boats and volunteers navigate flooded roads to hand packages directly to families.</p>
                </div>
              </div>

              {/* Step 4: Low */}
              <div className="hiw-wave-step step-low">
                <div className="hiw-step-content">
                  <h3 className="hiw-step-name">Transparent Tracking</h3>
                  <p className="hiw-step-text">Every contribution is logged openly on our live dashboard for complete accountability.</p>
                </div>
                <div className="hiw-circle-wrapper">
                  <span className="hiw-num-badge">04</span>
                  <div className="hiw-circle-inner">
                    <FaChartLine className="hiw-icon" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Ground Relief Gallery Section */}
      <section className="ground-gallery-section">
        <div className="ground-gallery-container">
          <div className="gallery-header">
            <span className="about-tag">Ground Relief Gallery</span>
            <h2 className="about-title" style={{ margin: '0.35rem 0' }}>
              Assam Flood Relief Drive In Action
            </h2>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setSelectedGalleryImg(item)}
              >
                <div className="gallery-img-wrapper">
                  <img src={item.image} alt="Ground Relief Photo" className="gallery-img" />
                  <div className="gallery-overlay">
                    <span className="gallery-zoom-icon"><FaExpand size={15} /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Photo Lightbox Modal */}
      {selectedGalleryImg && (
        <div className="gallery-modal-overlay" onClick={() => setSelectedGalleryImg(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setSelectedGalleryImg(null)}>
              <FaXmark size={20} />
            </button>
            <img
              src={selectedGalleryImg.image}
              alt={selectedGalleryImg.title}
              className="gallery-modal-img"
            />
            <div className="gallery-modal-caption">
              <h3 style={{ margin: '0', fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                {selectedGalleryImg.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
