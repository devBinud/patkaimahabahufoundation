import { Link } from 'react-router-dom'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="cureo-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Patkai Mahabahu Foundation</h3>
          <p className="footer-subheading">Assam Flood Relief Fund</p>
          <p className="footer-desc">
            Live cash & goods contributions, emergency SOS locations, and village dispatch for the Assam flood relief drive.
          </p>
        </div>

        <div className="footer-col">
          <h4>Relief Pages</h4>
          <ul>
            <li><Link to="/">Live Relief Dashboard</Link></li>
            <li><Link to="/contribution">Provide Relief Materials</Link></li>
            <li><Link to="/ground-report">Ground Dispatch Report</Link></li>
            <li><Link to="/about">Meet Our Ground Team</Link></li>
            <li><Link to="/contact">Drop-off Point & Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-contact-col">
          <h4>Drop-Off Point & Contact</h4>
          <div className="footer-contact-card">
            <div className="footer-contact-item">
              <FaLocationDot className="footer-info-icon" />
              <div>
                <span className="contact-label">House Name: Deochora</span>
                <span className="contact-sub">Nearby Lane 10, Chandan Nagar Club Road, Assam</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <FaPhone className="footer-info-icon" />
              <div>
                <span className="contact-label">Organiser Contact</span>
                <span className="contact-sub">Pranab Milan Gogoi: +91 7002808115</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">
          © {new Date().getFullYear()} Patkai Mahabahu Foundation Flood Relief Drive. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
