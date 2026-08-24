import { Link } from 'react-router-dom'
import { 
  FaPhone, 
  FaLocationDot, 
  FaWhatsapp, 
  FaClock, 
  FaHandHoldingHeart, 
  FaMapLocationDot,
  FaArrowLeft,
  FaChevronRight
} from 'react-icons/fa6'
import './ContactPage.css'

export default function ContactPage() {
  const whatsappNumber = "917002808115";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Pranab Milan Gogoi, I would like to know more about the Assam Flood Relief Drive.")}`;

  return (
    <div className="contact-page-wrapper">
      
      {/* Hero Header */}
      <section className="contact-hero-header">
        <div className="contact-hero-container">
          <Link to="/" className="contact-back-link">
            <FaArrowLeft size={12} />
            <span>Back to Live Dashboard</span>
          </Link>

          <span className="contact-hero-tag">GET IN TOUCH · GROUND COORDINATION</span>
          <h1 className="contact-hero-title">Drop-off Point & Contact</h1>
          <p className="contact-hero-subtitle">
            Reach out to coordinate a relief material drop-off, check drive progress, or request emergency support directly from our ground units.
          </p>
        </div>
      </section>

      {/* Main Section (2-Column Full Width Container) */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          
          <div className="contact-grid-layout">
            
            {/* Left Column: Contact Details Card */}
            <div className="contact-details-card">
              <h2 className="contact-org-title">Patkai Mahabahu Foundation</h2>
              <p className="contact-lead-name">Pranab Milan Gogoi (Lead Ground Coordinator)</p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon-box">
                    <FaLocationDot />
                  </div>
                  <div>
                    <span className="contact-info-label">Drop-off Point</span>
                    <span className="contact-info-text">
                      House Name: Deochora, Nearby Lane 10, Chandan Nagar Club Road, Assam
                    </span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon-box" style={{ color: '#25D366', background: '#eafaf1', borderColor: '#bbf2d0' }}>
                    <FaWhatsapp />
                  </div>
                  <div>
                    <span className="contact-info-label">WhatsApp Coordination</span>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-info-link">
                      +91 70028 08115
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon-box">
                    <FaClock />
                  </div>
                  <div>
                    <span className="contact-info-label">Drop-off Hours</span>
                    <span className="contact-info-text">
                      Every day: 9:00 AM to 7:00 PM <br />
                      <small style={{ color: '#64748b' }}>(Call ahead for large vehicle deliveries)</small>
                    </span>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.google.com/maps?q=26.741777,94.220402" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-gmaps-link"
              >
                <FaMapLocationDot size={18} />
                <span>Open Location in Google Maps</span>
              </a>
            </div>

            {/* Right Column: Action Sidebar Card */}
            <div className="contact-sidebar-card">
              <div className="contact-sidebar-top">
                <span className="sidebar-action-tag">NEED SUPPORT OR WANT TO HELP?</span>
                <h3 className="sidebar-action-title">Get Involved With The Ground Team</h3>
                <p className="sidebar-action-desc">
                  If your household requires emergency relief supplies or if you wish to contribute materials, select an action below to get in direct touch with our volunteers.
                </p>
              </div>

              <div className="sidebar-cta-stack">
                <Link to="/appointment" className="btn-hero-primary">
                  <FaHandHoldingHeart />
                  <span>Request Relief Assistance</span>
                  <FaChevronRight size={14} />
                </Link>

                <Link to="/contribution" className="btn-hero-secondary">
                  <span>Pledge Relief Materials</span>
                  <FaChevronRight size={14} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
