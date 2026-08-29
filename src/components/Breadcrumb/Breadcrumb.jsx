import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa6'
import './Breadcrumb.css'

export default function Breadcrumb({ currentPage }) {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <Link to="/" className="breadcrumb-link">Home</Link>
      <FaChevronRight className="breadcrumb-icon" />
      <span className="breadcrumb-current">{currentPage}</span>
    </nav>
  )
}
