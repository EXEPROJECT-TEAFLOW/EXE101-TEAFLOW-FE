import { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const productMenuItems = [
    { name: 'Phân hệ Bán Hàng', path: '/sales' },
    { name: 'Phân hệ Thanh Toán', path: '/payment' },
    { name: 'Phân hệ Kho', path: '/warehouse' },
    { name: 'Phân hệ Báo cáo', path: '/reports' },
    { name: 'Phân hệ Nhân viên', path: '/employees' },
    { name: 'Phân hệ Bếp', path: '/kitchen' },
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
          <a href="/" className="logo-link">
            <div className="logo-wrapper">
              <span className="logo-text">TEAFLOW</span>
            </div>
          </a>
        </div>

        {/* Navigation */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
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
                    <a
                      key={index}
                      href={item.path}
                      className="dropdown-item"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li className="nav-item">
              <a href="/features" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                AboutUs
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                ContactUs
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
