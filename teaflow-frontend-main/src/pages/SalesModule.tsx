import { Link } from 'react-router-dom';
import './SalesModule.css';
import ScrollAnimate from '../animate/ScrollAnimate';

const SalesModule = () => {
  const features = [
    {
      icon: '📋',
      title: 'Quản lý đơn hàng realtime',
      description: 'Theo dõi tất cả đơn hàng trong thời gian thực, cập nhật trạng thái tự động và thông báo ngay lập tức khi có thay đổi.',
      highlight: 'Realtime',
    },
    {
      icon: '🍽️',
      title: 'Đặt bàn online',
      description: 'Hệ thống đặt bàn trực tuyến cho phép khách hàng chọn thời gian, số lượng người và yêu cầu đặc biệt một cách dễ dàng.',
      highlight: 'Online',
    },
    {
      icon: '💻',
      title: 'Tích hợp POS',
      description: 'Kết nối với hệ thống POS, hỗ trợ nhiều loại thiết bị đầu cuối và tích hợp thanh toán không dây.',
      highlight: 'POS',
    },
    {
      icon: '🎁',
      title: 'Quản lý khuyến mãi',
      description: 'Tạo và quản lý các chương trình khuyến mãi phức tạp: giảm giá %, giảm giá cố định, mua 1 tặng 1, combo.',
      highlight: 'Promo',
    },
    {
      icon: '⭐',
      title: 'Chương trình tích điểm',
      description: 'Xây dựng lòng trung thành khách hàng với hệ thống tích điểm linh hoạt, đổi quà và ưu đãi đặc biệt.',
      highlight: 'Loyalty',
    },
    {
      icon: '🚚',
      title: 'Giao hàng tận nơi',
      description: 'Quản lý đơn giao hàng, theo dõi vị trí giao hàng realtime và thông báo tự động cho khách hàng.',
      highlight: 'Delivery',
    },
  ];

  const stats = [
    { number: '60%', label: 'Tăng tốc xử lý', color: '#2F80ED' },
    { number: '35%', label: 'Tăng doanh thu', color: '#2F80ED' },
    { number: '98%', label: 'Hài lòng KH', color: '#4facfe' },
    { number: '45%', label: 'Tăng đơn hàng', color: '#43e97b' },
  ];

  return (
    <div className="sales-module-page">
      {/* Hero Section */}
      <section className="sales-hero">
        <div className="sales-hero-content">
          <ScrollAnimate animation="fade-up">
            <div className="sales-hero-icon">🛒</div>
            <h1 className="sales-hero-title">Phân hệ Bán Hàng</h1>
            <p className="sales-hero-description">
              Hệ thống quản lý bán hàng toàn diện với zigzag flow design - mỗi tính năng được trình bày 
              một cách trực quan và dễ hiểu, giúp bạn nắm bắt toàn bộ quy trình một cách nhanh chóng.
            </p>
          </ScrollAnimate>
        </div>
        <div className="sales-hero-stats">
          {stats.map((stat, index) => (
            <ScrollAnimate key={index} animation="scale-in" delay={0.1 * index}>
              <div className="sales-stat-badge" style={{ '--stat-color': stat.color } as React.CSSProperties}>
                <div className="sales-stat-number">{stat.number}</div>
                <div className="sales-stat-label">{stat.label}</div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* Zigzag Features Section */}
      <section className="sales-features">
        <div className="sales-container">
          {features.map((feature, index) => (
            <ScrollAnimate key={index} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'} delay={0.1 * index}>
              <div className={`sales-feature-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="sales-feature-content">
                  <div className="sales-feature-badge">{feature.highlight}</div>
                  <div className="sales-feature-icon">{feature.icon}</div>
                  <h3 className="sales-feature-title">{feature.title}</h3>
                  <p className="sales-feature-description">{feature.description}</p>
                </div>
                <div className="sales-feature-visual">
                  <div className="sales-visual-circle"></div>
                  <div className="sales-visual-pattern"></div>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="sales-cta">
        <div className="sales-container">
          <ScrollAnimate animation="fade-up">
            <div className="sales-cta-content">
              <h2 className="sales-cta-title">Sẵn sàng trải nghiệm?</h2>
              <p className="sales-cta-description">Liên hệ ngay để được tư vấn và demo miễn phí</p>
              <div className="sales-cta-buttons">
                <Link to="/contact" className="sales-cta-btn sales-cta-primary">Liên hệ ngay</Link>
                <Link to="/features" className="sales-cta-btn sales-cta-secondary">Xem thêm</Link>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
};

export default SalesModule;
