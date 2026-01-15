import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'Phân hệ Bán Hàng', path: '/sales' },
    { name: 'Phân hệ Thanh Toán', path: '/payment' },
    { name: 'Phân hệ Kho', path: '/warehouse' },
    { name: 'Phân hệ Báo cáo', path: '/reports' },
    { name: 'Phân hệ Nhân viên', path: '/employees' },
    { name: 'Phân hệ Bếp', path: '/kitchen' },
  ];

  const companyLinks = [
    { name: 'Về Chúng Tôi', path: '/about' },
    { name: 'Tính Năng', path: '/features' },
    { name: 'Liên Hệ', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const supportLinks = [
    { name: 'Trung Tâm Trợ Giúp', path: '/help' },
    { name: 'Tài Liệu', path: '/docs' },
    { name: 'API', path: '/api' },
    { name: 'Tình Trạng Hệ Thống', path: '/status' },
  ];

  const legalLinks = [
    { name: 'Chính Sách Bảo Mật', path: '/privacy' },
    { name: 'Điều Khoản Sử Dụng', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', path: '#' },
    { name: 'Twitter', icon: '🐦', path: '#' },
    { name: 'LinkedIn', icon: '💼', path: '#' },
    { name: 'Instagram', icon: '📷', path: '#' },
    { name: 'YouTube', icon: '📺', path: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-column footer-brand">
              <div className="footer-logo">
                <span className="footer-logo-text">TEAFLOW</span>
              </div>
              <p className="footer-description">
                Giải pháp quản lý toàn diện cho doanh nghiệp F&B hiện đại.
                Tối ưu hóa quy trình từ bán hàng đến kho, thanh toán và báo cáo.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.path}
                    className="social-link"
                    aria-label={social.name}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Products Column */}
            <div className="footer-column">
              <h3 className="footer-title">Sản Phẩm</h3>
              <ul className="footer-links">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="footer-link"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="footer-column">
              <h3 className="footer-title">Công Ty</h3>
              <ul className="footer-links">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="footer-link"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div className="footer-column">
              <h3 className="footer-title">Hỗ Trợ</h3>
              <ul className="footer-links">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="footer-link"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} TEAFLOW. Tất cả quyền được bảo lưu.
            </p>
            <div className="footer-legal">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="footer-legal-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
