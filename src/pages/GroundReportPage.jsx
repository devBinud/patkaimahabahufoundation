import { Link } from 'react-router-dom'
import { 
  FaArrowLeft, 
  FaPhone, 
  FaTruckFast, 
  FaShieldHalved,
  FaChevronRight 
} from 'react-icons/fa6'
import hero1 from '../assets/hero/hero1.jpeg'
import hero2 from '../assets/hero/hero2.jpeg'
import hero3 from '../assets/hero/hero3.jpeg'
import './GroundReportPage.css'

export default function GroundReportPage() {
  return (
    <div className="ground-report-wrapper">
      
      {/* Hero Header */}
      <section className="ground-hero-header">
        <div className="ground-hero-container">
          <Link to="/" className="ground-back-link">
            <FaArrowLeft size={12} />
            <span>Back to Live Dashboard</span>
          </Link>

          <span className="ground-hero-tag">GROUND DISPATCH REPORT · ASSAM FLOOD DRIVE</span>
          <h1 className="ground-hero-title">From The Road To The River</h1>
          <p className="ground-hero-subtitle">
            Relief materials carried in by boat and handed to each family directly. Over 5,000+ families and 40+ villages reached across flood-affected zones in Assam.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="ground-main-section">
        <div className="ground-main-container">
          
          <div className="ground-content-card">
            
            {/* Story Photos Grid */}
            <div className="ground-photos-grid">
              <div className="ground-photo-frame">
                <img src={hero3} alt="Boat relief distribution" className="ground-photo-img" />
              </div>
              <div className="ground-photo-frame">
                <img src={hero1} alt="Ration distribution" className="ground-photo-img" />
              </div>
              <div className="ground-photo-frame">
                <img src={hero2} alt="Medical relief camp" className="ground-photo-img" />
              </div>
            </div>

            {/* Narrative & Highlights */}
            <div className="ground-narrative-grid">
              <div className="ground-narrative-box">
                <div className="ground-narrative-header">
                  <FaTruckFast className="ground-narrative-icon" />
                  <h3 className="ground-narrative-title">Direct Household Delivery</h3>
                </div>
                <p className="ground-narrative-text">
                  Our team of dedicated volunteers led by ground coordinator Pranab Milan Gogoi navigates remote rivers and submerged roads to deliver rice, clean drinking water, baby food, tarpaulins, and emergency medical care directly into the hands of affected villagers.
                </p>
              </div>

              <div className="ground-narrative-box">
                <div className="ground-narrative-header">
                  <FaShieldHalved className="ground-narrative-icon" />
                  <h3 className="ground-narrative-title">Live Open Tracking</h3>
                </div>
                <p className="ground-narrative-text">
                  Every rupee donated and every bag of relief material contributed by the public is tracked with 100% transparency on our Live Relief Dashboard, ensuring complete integrity and community trust.
                </p>
              </div>
            </div>

            {/* Callout Box */}
            <div className="ground-cta-box">
              <h4 className="ground-cta-title">Want to help us reach the next village?</h4>
              <p className="ground-cta-desc">
                You can contribute essential items or join our active ground volunteer roster.
              </p>

              <div className="ground-cta-buttons">
                <Link to="/contribution" className="btn-hero-primary">
                  <span>Pledge Relief Materials</span>
                  <FaChevronRight size={14} />
                </Link>
                <a href="tel:7002808115" className="btn-hero-secondary">
                  <FaPhone size={13} />
                  <span>Call Organiser: +91 7002808115</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
