import hero1 from '../assets/hero/hero1.jpeg'
import hero2 from '../assets/hero/hero2.jpeg'
import hero3 from '../assets/hero/hero3.jpeg'
import pranabImg from '../assets/pranab.jpeg'
import assamFloodImg from '../assets/assam_flood.png'
import reliefDriveImg from '../assets/relief_drive.png'

export default function GalleryPage() {
  return (
    <div className="section" style={{ marginTop: '2.5rem' }}>
      <div className="section-header">
        <span className="section-tag">Relief Drive Gallery</span>
        <h2 className="section-title">Photos From The Field</h2>
        <p className="section-desc">Glimpses of ration distribution, medical camps and the drop-off point in Dibrugarh.</p>
      </div>

      <div className="gallery-grid" style={{ marginBottom: '3rem' }}>
        <div className="gallery-item">
          <img src={hero1} alt="Ration distribution to flood-affected families" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={hero2} alt="Medical relief camp for flood-affected villages" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={hero3} alt="Boat relief distribution across flooded areas" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={pranabImg} alt="Lead Ground Coordinator Pranab Milan Gogoi" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={assamFloodImg} alt="Assam Flood Relief Drive" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={reliefDriveImg} alt="Relief Drive Materials Distribution" className="gallery-img" />
        </div>
      </div>
    </div>
  )
}
