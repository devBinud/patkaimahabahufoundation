import { Link } from 'react-router-dom'
import { 
  FaHandHoldingHeart, 
  FaAward, 
  FaMapLocationDot, 
  FaPhone,
  FaShieldHalved,
  FaChevronRight,
  FaTruckFast
} from 'react-icons/fa6'
import pranabImg from '../../assets/pranab.jpeg'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about-page-wrapper">
      
      {/* Hero Header */}
      <section className="about-hero-header">
        <div className="about-hero-container">
          <span className="about-hero-tag">ABOUT PATKAI MAHABAHU FOUNDATION</span>
          <h1 className="about-hero-title">Direct Ground Action For Assam Flood Families</h1>
          <p className="about-hero-subtitle">
            Coordinating emergency ration kits, clean drinking water, medical aid, and transparent tracking across flood-hit villages in Assam.
          </p>
        </div>
      </section>

      {/* Main Mission & Coordinator Grid */}
      <section className="about-main-section">
        <div className="about-main-container">
          
          <div className="about-mission-grid">
            
            {/* Left Mission Column */}
            <div className="about-mission-card">
              <span className="about-badge-label">OUR MISSION</span>
              <h2 className="about-mission-title">No Village Left Waiting</h2>
              <p className="about-mission-text">
                Patkai Mahabahu Foundation has mobilized its ground volunteer network to respond directly to the Assam flood crisis. Our volunteers travel by boat, road, and on foot to deliver essential ration kits, clean drinking water, hygiene packages, and temporary shelter materials directly into the hands of affected households.
              </p>
              
              <p className="about-mission-text">
                Every contribution received is logged openly on our <strong>Live Relief Dashboard</strong>, ensuring complete transparency and accountability from pledge to doorstep.
              </p>

              {/* Value Badges */}
              <div className="about-values-row">
                <div className="about-value-pill">
                  <FaAward className="value-pill-icon" />
                  <span>Community-Led Drive</span>
                </div>
                <div className="about-value-pill">
                  <FaHandHoldingHeart className="value-pill-icon" />
                  <span>Direct Household Delivery</span>
                </div>
                <div className="about-value-pill">
                  <FaShieldHalved className="value-pill-icon" />
                  <span>100% Tracked & Transparent</span>
                </div>
              </div>
            </div>

            {/* Right Ground Coordinator Card featuring Pranab Milan Gogoi photo */}
            <div className="about-coordinator-card">
              <div className="coordinator-avatar-wrapper">
                <img src={pranabImg} alt="Pranab Milan Gogoi" className="coordinator-avatar-img" />
                <span className="coordinator-verified-badge">✓ Verified Coordinator</span>
              </div>

              <div className="coordinator-info">
                <span className="coordinator-role-tag">LEAD GROUND COORDINATOR</span>
                <h3 className="coordinator-name">Pranab Milan Gogoi</h3>
                
                <div className="coordinator-quote-box">
                  <p className="coordinator-quote-text">
                    &ldquo;We navigate submerged roads and rivers so that no village is left waiting. Every bag of relief material is handed to a family directly on the ground.&rdquo;
                  </p>
                </div>

                <div className="coordinator-contact-box">
                  <a href="tel:7002808115" className="coordinator-phone-btn">
                    <FaPhone size={14} />
                    <span>+91 70028 08115</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Key Impact Stats Row */}
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="stat-card-icon-wrapper"><FaHandHoldingHeart /></div>
              <div className="stat-card-number">5,000+</div>
              <div className="stat-card-label">Families Reached</div>
            </div>

            <div className="about-stat-card">
              <div className="stat-card-icon-wrapper"><FaTruckFast /></div>
              <div className="stat-card-number">40+</div>
              <div className="stat-card-label">Villages Covered</div>
            </div>

            <div className="about-stat-card">
              <div className="stat-card-icon-wrapper"><FaShieldHalved /></div>
              <div className="stat-card-number">100%</div>
              <div className="stat-card-label">Transparent Tracking</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="about-action-bar">
            <Link to="/contribution" className="btn-hero-primary">
              <span>Provide Relief Materials</span>
              <FaChevronRight size={14} />
            </Link>
            <Link to="/contact" className="btn-hero-secondary">
              <FaMapLocationDot />
              <span>Drop-off Point & Contact</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}
