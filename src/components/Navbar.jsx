import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">Villa Sugaree</NavLink>
      <ul className="navbar-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/villa" className={({ isActive }) => isActive ? 'active' : ''}>Villa</NavLink></li>
        <li><NavLink to="/island" className={({ isActive }) => isActive ? 'active' : ''}>Island</NavLink></li>
        <li><NavLink to="/guest-reviews" className={({ isActive }) => isActive ? 'active' : ''}>Guest Reviews</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}
