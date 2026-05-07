import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo" onClick={close}>Villa Sugaree</NavLink>

      <button
        className={`navbar-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${open ? 'open' : ''}`}>
        <li><NavLink to="/" end onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/villa" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Villa</NavLink></li>
        <li><NavLink to="/island" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Island</NavLink></li>
        <li><NavLink to="/guest-reviews" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Guest Reviews</NavLink></li>
        <li><NavLink to="/contact" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}
