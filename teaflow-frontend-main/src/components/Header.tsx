import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const productMenuItems = [
    { name: 'Phân hệ Bán Hàng', path: '/module/sales' },
    { name: 'Phân hệ Thanh Toán', path: '/module/payment' },
    { name: 'Phân hệ Kho', path: '/module/inventory' },
    { name: 'Phân hệ Báo cáo', path: '/module/reports' },
    { name: 'Phân hệ Nhân viên', path: '/module/staff' },
    { name: 'Phân hệ Bếp', path: '/module/kitchen' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/" className="logo-link">
            <div className="logo-wrapper">
              <span className="logo-text">TEAFLOW</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            {/* Product Dropdown */}
            <li className="nav-item nav-item-dropdown" ref={dropdownRef}>
              <button
                className={`nav-link dropdown-trigger ${isProductMenuOpen ? 'active' : ''}`}
                onMouseEnter={() => setIsProductMenuOpen(true)}
                onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                aria-haspopup="true"
                aria-expanded={isProductMenuOpen}
              >
                Products
                <svg
                  className={`dropdown-icon ${isProductMenuOpen ? 'open' : ''}`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4L6 8L10 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {isProductMenuOpen && (
                <div
                  className="dropdown-menu"
                  onMouseLeave={() => setIsProductMenuOpen(false)}
                >
                  {productMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="dropdown-item"
                      style={{ animationDelay: `${index * 0.05}s` }}
                      onClick={() => setIsProductMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li className="nav-item">
              <Link to="/features" className="nav-link">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                AboutUs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                ContactUs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
