import { Link } from 'react-router-dom'
import { FaBoxOpen, FaDroplet, FaTent, FaStethoscope, FaBaby, FaHandHoldingHeart, FaCalendarCheck } from 'react-icons/fa6'

export default function SpecialtiesPage() {
  return (
    <div className="section" style={{ marginTop: '2.5rem' }}>
      <div className="section-header">
        <span className="section-tag">Relief Categories</span>
        <h2 className="section-title">Where Your Support Goes</h2>
        <p className="section-desc">Every relief category below is delivered directly to flood-affected families across Assam.</p>
      </div>

      <div className="specialty-grid" style={{ marginBottom: '3rem' }}>
        <div className="specialty-card">
          <div className="specialty-icon-box">
            <FaBoxOpen />
          </div>
          <h3>Emergency Ration & Food Kits</h3>
          <p style={{ marginBottom: '1rem' }}>
            Rice, pulses, oil and dry rations packed into family kits and distributed door-to-door in flood-affected villages, including areas reachable only by boat.
          </p>
          <Link to="/contribution" className="btn-hero-primary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
            <FaCalendarCheck /> <span>Contribute Ration</span>
          </Link>
        </div>

        <div className="specialty-card">
          <div className="specialty-icon-box">
            <FaStethoscope />
          </div>
          <h3>Medical Relief Camps</h3>
          <p style={{ marginBottom: '1.25rem' }}>
            Free healthcare consultations and essential medicines for communities cut off from regular medical access during the floods.
          </p>
          <Link to="/appointment" className="btn-hero-primary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
            <FaCalendarCheck /> <span>Request Medical Help</span>
          </Link>
        </div>

        <div className="specialty-card">
          <div className="specialty-icon-box">
            <FaDroplet />
          </div>
          <h3>Clean Water & Hygiene Kits</h3>
          <p style={{ marginBottom: '1.25rem' }}>
            Water purification supplies, soap, sanitary pads and disinfectants to prevent post-flood disease outbreaks.
          </p>
          <Link to="/contribution" className="btn-hero-primary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
            <FaCalendarCheck /> <span>Contribute Hygiene Kits</span>
          </Link>
        </div>

        <div className="specialty-card">
          <div className="specialty-icon-box">
            <FaTent />
          </div>
          <h3>Temporary Shelter Kits</h3>
          <p style={{ marginBottom: '1.25rem' }}>
            Tarpaulins, mats and blankets for families whose homes have been damaged or submerged by floodwaters.
          </p>
          <Link to="/contribution" className="btn-hero-primary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
            <FaCalendarCheck /> <span>Contribute Shelter Kits</span>
          </Link>
        </div>

        <div className="specialty-card">
          <div className="specialty-icon-box">
            <FaBaby />
          </div>
          <h3>Maternal & Child Support</h3>
          <p style={{ marginBottom: '1.25rem' }}>
            Baby food, nutrition supplies and dedicated care for expecting mothers and young children in relief camps.
          </p>
          <Link to="/contribution" className="btn-hero-primary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
            <FaCalendarCheck /> <span>Contribute Baby Care Items</span>
          </Link>
        </div>

        <div className="specialty-card">
          <div className="specialty-icon-box">
            <FaHandHoldingHeart />
          </div>
          <h3>Rehabilitation Relief Fund</h3>
          <p style={{ marginBottom: '1.25rem' }}>
            Long-term rebuilding support for the hardest-hit households once immediate flood relief needs are met.
          </p>
          <Link to="/contribution" className="btn-hero-primary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
            <FaCalendarCheck /> <span>Support Rehabilitation</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
