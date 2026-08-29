import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBoxOpen,
  FaDroplet,
  FaTent,
  FaHouse,
  FaChevronRight,
  FaChevronLeft,
  FaExpand,
  FaXmark,
  FaArrowUpRightFromSquare,
  FaHeart,
} from 'react-icons/fa6'
import heroBg from '../../assets/hero/hero_bg.jpg'
import hero1 from '../../assets/hero/hero1.jpg'
import hero2 from '../../assets/hero/hero2.jpg'
import hero3 from '../../assets/hero/hero3.jpg'
import hero4 from '../../assets/hero/hero4.jpg'
import hero5 from '../../assets/hero/hero5.jpg'
import hero6 from '../../assets/hero/hero6.jpg'
import pranabImg from '../../assets/pranab.jpeg'
import gallery1 from '../../assets/gallery/1.jpeg'
import gallery2 from '../../assets/gallery/2.jpeg'
import gallery3 from '../../assets/gallery/3.jpeg'
import gallery4 from '../../assets/gallery/4.jpeg'
import gallery5 from '../../assets/gallery/5.jpeg'
import gallery6 from '../../assets/gallery/6.jpeg'
import gallery7 from '../../assets/gallery/7.jpeg'
import gallery8 from '../../assets/gallery/8.jpeg'
import mainImg from '../../assets/main.jpeg'
import rebuild1 from '../../assets/gallery/rebuilding_house_assessment/1.jpeg'
import rebuild2 from '../../assets/gallery/rebuilding_house_assessment/2.jpeg'
import rebuild3 from '../../assets/gallery/rebuilding_house_assessment/3.jpeg'
import './HomePage.css'

export default function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroSlides = [heroBg, hero1, hero2, hero3, hero4, hero5, hero6];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const dashboardStats = [
    { label: 'Cash Raised', value: '₹19,52,856' },
    { label: 'Cash Donors', value: '1,072' },
    { label: 'Goods Donors', value: '20' },
    { label: 'Goods Items', value: '48' },
    { label: 'Villages Attended', value: '35+' },
    { label: 'Contributions Pending', value: '12' }
  ];

  const rebuildingItems = [
    {
      id: 'rb1',
      image: rebuild1,
      title: 'Structural Flood Damage Assessment',
      location: 'Jorhat & Sivasagar District',
      desc: 'On-ground evaluation of damaged houses, eroded foundations, and wall stability to plan rebuilding aid.'
    },
    {
      id: 'rb2',
      image: rebuild2,
      title: 'Household Rebuilding & Rehabilitation Survey',
      location: 'Charaideo Flood-Hit Villages',
      desc: 'Documenting displaced families requiring immediate bamboo, tin roof sheets, and home repair materials.'
    },
    {
      id: 'rb3',
      image: rebuild3,
      title: 'Direct Relief & Home Restoration Support',
      location: 'Ground Team Action Drive',
      desc: 'Delivering rebuilding kits, roof tarpaulins, and structural support items directly to affected villagers.'
    }
  ];

  const galleryItems = [
    {
      id: 1,
      image: gallery1,
      title: 'Ground Relief & Emergency Supply Distribution',
      categoryLabel: 'Ground Relief',
      badgeBg: '#005C8A'
    },
    {
      id: 2,
      image: gallery2,
      title: 'Emergency Ration Kit Delivery to Flood Families',
      categoryLabel: 'Ground Relief',
      badgeBg: '#005C8A'
    },
    {
      id: 3,
      image: gallery3,
      title: 'Direct Household Sewa in Flood-Hit Villages',
      categoryLabel: 'Ground Relief',
      badgeBg: '#005C8A'
    },
    {
      id: 4,
      image: gallery4,
      title: 'Relief Material Loading & Transportation Drive',
      categoryLabel: 'Ground Relief',
      badgeBg: '#005C8A'
    },
    {
      id: 5,
      image: gallery5,
      title: 'Community Relief Support & Ground Team Sewa',
      categoryLabel: 'Ground Relief',
      badgeBg: '#005C8A'
    },
    {
      id: 6,
      image: gallery6,
      title: 'Emergency Aid Package Assembly for Flood Victims',
      categoryLabel: 'Ground Relief',
      badgeBg: '#005C8A'
    },
    {
      id: 7,
      image: gallery7,
      title: 'On-Ground Volunteer Coordination & Village Outreach',
      categoryLabel: 'Ground Relief',
      badgeBg: '#005C8A'
    },
    {
      id: 8,
      image: gallery8,
      title: 'On-Ground Volunteer Coordination & Village Outreach',
      categoryLabel: 'Ground Relief',
      badgeBg: '#005C8A'
    }
  ];

  const allHomeImages = [...galleryItems, ...rebuildingItems];

  const handlePrev = (e) => {
    if (e) e.stopPropagation()
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : allHomeImages.length - 1))
  }

  const handleNext = (e) => {
    if (e) e.stopPropagation()
    setSelectedIndex((prev) => (prev < allHomeImages.length - 1 ? prev + 1 : 0))
  }

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'Escape') {
        setSelectedIndex(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, allHomeImages.length])

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diffX = touchStartX - touchEndX
    if (diffX > 40) {
      handleNext()
    } else if (diffX < -40) {
      handlePrev()
    }
    setTouchStartX(null)
  }

  const selectedGalleryImg = selectedIndex !== null ? allHomeImages[selectedIndex] : null

  return (
    <>
      {/* Full-Width Hero Section */}
      <section className="hero-full-section hero-slider-section">
        <div className="hero-slider-container">

          {/* Desktop Background Fade Slider */}
          {heroSlides.map((slideImg, index) => (
            <div
              key={index}
              className={`hero-slide-bg hero-desktop-bg ${index === currentHeroSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slideImg})` }}
            ></div>
          ))}

          {/* Deep Teal Blue Gradient Overlay */}
          <div className="hero-gradient-overlay"></div>

          {/* Mobile Image Wrapper */}
          <div className="hero-mobile-img-wrapper">
            {heroSlides.map((slideImg, index) => (
              <img
                key={index}
                src={slideImg}
                alt="Assam Flood Relief Drive"
                className={`hero-mobile-img ${index === currentHeroSlide ? 'active' : ''}`}
              />
            ))}
          </div>

          {/* Hero Text Content */}
          <div className="hero-content-wrapper">
            <div className="hero-text-block">
              <span className="hero-slide-tag">ASSAM FLOOD RELIEF DRIVE</span>

              <h1 className="hero-main-title">
                <span className="hero-title-teal">Reaching Every</span><br />
                <span className="hero-title-bold">Flood-Affected Family</span>
              </h1>

              <p className="hero-banner-desc">
                Emergency ration kits, clean water and essential supplies delivered directly to families displaced by the Assam floods, village by village.
              </p>

              <div className="hero-banner-buttons">
                <Link to="/contribution" className="btn-hero-saffron">
                  <span>Provide Relief Materials</span>
                  <FaChevronRight size={14} />
                </Link>
              </div>

              {/* Slider Indicator Dots */}
              <div className="hero-slide-dots">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`hero-dot ${idx === currentHeroSlide ? 'active' : ''}`}
                    onClick={() => setCurrentHeroSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Dual-Color Rashtriya Sewa Bharati Style 4-Agenda Banner Section */}
      <section className="rsb-stats-banner">
        <div className="rsb-stats-header-bar">
          <span>OUR FOUR CORE SEWA AGENDAS</span>
        </div>
        <div className="rsb-stats-grid rsb-agendas-grid">
          {/* Agenda Column 1 (Green) */}
          <Link to="/contribution" className="rsb-agenda-card rsb-card-green">
            <div className="rsb-agenda-inner">
              <div className="rsb-agenda-icon">
                <FaBoxOpen />
              </div>
              <h3 className="rsb-agenda-title">Emergency Relief</h3>
            </div>
          </Link>

          {/* Agenda Column 2 (Teal) */}
          <Link to="/contribution" className="rsb-agenda-card rsb-card-teal">
            <div className="rsb-agenda-inner">
              <div className="rsb-agenda-icon">
                <FaDroplet />
              </div>
              <h3 className="rsb-agenda-title">Clean Water & Hygiene</h3>
            </div>
          </Link>

          {/* Agenda Column 3 (Teal) */}
          <Link to="/contribution" className="rsb-agenda-card rsb-card-teal">
            <div className="rsb-agenda-inner">
              <div className="rsb-agenda-icon">
                <FaTent />
              </div>
              <h3 className="rsb-agenda-title">Emergency Shelters</h3>
            </div>
          </Link>

          {/* Agenda Column 4 (Teal) */}
          <Link to="/contribution" className="rsb-agenda-card rsb-card-teal">
            <div className="rsb-agenda-inner">
              <div className="rsb-agenda-icon">
                <FaHouse />
              </div>
              <h3 className="rsb-agenda-title">Rebuilding Homes</h3>
            </div>
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
                Patkai Mahabahu Foundation is deeply committed to delivering transparent, direct relief to flood-affected families across Assam. Guided by Founder-Chairman <strong>Pranab Milan Gogoi</strong> and our volunteer network, we ensure essential ration, clean water, and shelter reach every displaced household.
              </p>

              {/* Ground Impact Statistics Grid */}
              <div className="about-stats-grid">
                <div className="about-stat-box">
                  <span className="stat-box-num">5,000+</span>
                  <span className="stat-box-label">Ration Kits Delivered</span>
                </div>
                <div className="about-stat-box">
                  <span className="stat-box-num">40+</span>
                  <span className="stat-box-label">Villages Covered</span>
                </div>
                <div className="about-stat-box">
                  <span className="stat-box-num">100%</span>
                  <span className="stat-box-label">Direct Ground Sewa</span>
                </div>
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
                  <span className="founder-role">Founder-Chairman</span>
                  <span className="founder-org">Patkai Mahabahu Foundation</span>
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

      {/* Live Flood Relief Impact Dashboard Section (Links to https://flood-relief.pages.dev/) */}
      <section className="live-dashboard-section">
        <div className="live-dashboard-container">

          <div className="dashboard-header">
            <h2 className="dashboard-main-title">
              Our Journey Begins Here
            </h2>
          </div>

          {/* Full-Width Live Dashboard Image Banner */}
          <a
            href="https://flood-relief.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="dashboard-main-banner-link"
            title="Open Live Flood Relief Dashboard"
          >
            <img src={mainImg} alt="Assam Flood Relief Live Sewa Dashboard" className="dashboard-main-banner-img" />
          </a>

          {/* 7 Metric Cards Wireframe Matching Live Dashboard */}
          <div className="dashboard-cards-grid">
            {dashboardStats.map((stat, idx) => (
              <a
                key={idx}
                href="https://flood-relief.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={`dashboard-metric-card ${stat.isAlert ? 'metric-card-alert' : ''}`}
                title="View Live Dashboard & Contributors List"
              >
                <span className={`metric-card-value ${stat.isAlert ? 'text-alert-red' : ''}`}>
                  {stat.value}
                </span>
                <span className="metric-card-label">{stat.label}</span>
              </a>
            ))}

            {/* View Full Dashboard CTA Card */}
            <a
              href="https://flood-relief.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="dashboard-cta-card"
              title="Open Live Dashboard"
            >
              <div className="cta-card-inner">
                <span className="cta-card-title">View Contributors List</span>
                <span className="cta-card-btn">
                  <span>Open Live Dashboard</span>
                  <FaArrowUpRightFromSquare size={12} />
                </span>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* Rebuilding House Assessment Section (Theme-Centric Full-Width Dark Navy/Teal Background) */}
      <section className="rebuilding-assessment-section">
        <div className="rebuilding-assessment-container">
          <div className="rebuilding-section-header">
            <span className="rebuilding-badge">
              <FaHouse size={13} style={{ marginRight: '0.4rem' }} /> House Rebuilding Drive
            </span>
            <h2 className="rebuilding-main-title">
              Rebuilding House & Damage Assessment
            </h2>
            <p className="rebuilding-subtitle">
              Direct ground evaluation of flood-damaged homes across Jorhat, Sivasagar, and Charaideo districts to deliver targeted structural rebuilding materials.
            </p>
          </div>

          <div className="rebuilding-cards-grid">
            {rebuildingItems.map((item, idx) => (
              <div
                key={item.id}
                className="rebuilding-card"
                onClick={() => setSelectedIndex(galleryItems.length + idx)}
              >
                <div className="rebuilding-img-wrapper">
                  <img src={item.image} alt={item.title} />
                  <div className="rebuilding-card-overlay">
                    <span className="rebuilding-zoom-icon"><FaExpand size={15} /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page Call to Action (CTA) Banner Section */}
      <section className="mid-page-cta-section">
        <div className="mid-page-cta-container">
          <div className="mid-page-cta-card">

            {/* Background Decorative Element */}
            <div className="cta-decorative-glow"></div>

            <div className="mid-cta-content-wrapper">
              <h2 className="mid-cta-title">
                বানে ক্ষতিগ্ৰস্ত ঘৰ পুনৰ নিৰ্মাণত সহায় কৰক
              </h2>
              <p className="mid-cta-description">
                Your direct contribution delivers essential structural rebuilding kits, tin roofing, clean drinking water, and emergency food supplies directly to displaced families across Jorhat, Sivasagar &amp; Charaideo.
              </p>

              {/* Action Button */}
              <div className="mid-cta-button-group">
                <Link to="/contribution" className="btn-cta-saffron">
                  <FaHeart size={14} />
                  <span>Help Rebuild Damaged Homes</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Ground Relief Photo Gallery Section (Dribbble Arch Layout) */}
      <section className="dribbble-gallery-section">
        <div className="dribbble-gallery-card">
          {/* Staggered Floating Photo Arch Grid */}
          <div className="dribbble-photos-wrapper">
            {galleryItems.map((item, index) => {
              const offsets = [
                'float-down',
                'float-up',
                'float-center-high',
                'float-top',
                'float-center-high',
                'float-up',
                'float-down'
              ];
              const offsetClass = offsets[index % offsets.length];
              return (
                <div
                  key={item.id}
                  className={`dribbble-photo-item ${offsetClass}`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <span className="gallery-zoom-icon"><FaExpand size={15} /></span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Center Content Block */}
          <div className="dribbble-center-content">
            <span className="dribbble-pill-badge">Ground Relief Sewa</span>
            <h2 className="dribbble-main-title">
              Direct Ground Sewa in Jorhat, Sivasagar & Charaideo
            </h2>
            <p className="dribbble-subtitle">
              Reaching flood-affected families across Jorhat, Sivasagar, and Charaideo districts of Assam with emergency ration packages, clean drinking water, and immediate rebuilding support.
            </p>
            <Link to="/gallery" className="btn-hero-primary" style={{ gap: '0.65rem' }}>
              <span>View Media & Photo Gallery</span>
              <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Photo Lightbox Modal with Swipe & Prev/Next Arrows */}
      {selectedGalleryImg && (
        <div
          className="gallery-modal-overlay"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-modal-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close photo"
            >
              <FaXmark size={20} />
            </button>

            <button
              className="gallery-modal-nav-prev"
              onClick={handlePrev}
              aria-label="Previous photo"
            >
              <FaChevronLeft size={20} />
            </button>

            <button
              className="gallery-modal-nav-next"
              onClick={handleNext}
              aria-label="Next photo"
            >
              <FaChevronRight size={20} />
            </button>

            <img
              src={selectedGalleryImg.image}
              alt={selectedGalleryImg.title}
              className="gallery-modal-img"
            />
          </div>
        </div>
      )}
    </>
  )
}
