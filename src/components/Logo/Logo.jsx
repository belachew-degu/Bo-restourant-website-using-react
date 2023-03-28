import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

export const Logo = ({
  className,
  src = '../../assets/img/logo.png',
  height = '60px',
  width,
}) => {
  // const navigate = useNavigate();
  return (
    <div
      className={`logo LL-Logo ${className ?? ''}`}
      onClick={() =><Link to='/'> </Link>}
      style={{ height, width }}
      role="banner"
    >
      <img src={src} alt="Little Lemon - Logo" title="Little Lemon - Home" />
    </div>
  );
};
