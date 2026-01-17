import { Link } from 'react-router-dom';
import './InventoryModule.css';
import ScrollAnimate from '../animate/ScrollAnimate';

const InventoryModule = () => {
  const metrics = [
    { label: 'Giảm lãng phí', value: '30%', icon: '📉', color: '#4facfe', trend: 'down' },
    { label: 'Tối ưu chi phí', value: '25%', icon: '⚡', color: '#00f2fe', trend: 'down' },
    { label: 'Độ chính xác', value: '99.9%', icon: '✅', color: '#43e97b', trend: 'up' },
    { label: 'Hiệu quả quản lý', value: '50%', icon: '📈', color: '#2F80ED', trend: 'up' },
  ];

  const dashboardCards = [
    {
      title: 'Tồn kho hiện tại',
      value: '1,245',
      unit: 'sản phẩm',
      icon: '📦',
      status: 'good',
      details: ['Cảnh báo: 12', 'Hết hàng: 3', 'Tồn kho cao: 45'],
    },
    {
      title: 'Giá trị tồn kho',
      value: '2.5',
      unit: 'tỷ VNĐ',
      icon: '💰',
      status: 'warning',
      details: ['Tăng 5% so với tháng trước', 'Vòng quay: 8.5', 'ROI: 12%'],
    },
    {
      title: 'Xuất nhập tồn',
      value: '3,850',
      unit: 'giao dịch/tháng',
      icon: '🔄',
      status: 'good',
      details: ['Nhập: 1,920', 'Xuất: 1,930', 'Tỷ lệ: 50/50'],
    },
    {
      title: 'Dự báo nhu cầu',
      value: '1,520',
      unit: 'sản phẩm',
      icon: '🔮',
      status: 'info',
      details: ['Tuần tới: +15%', 'Tháng tới: +8%', 'Độ tin cậy: 92%'],
    },
  ];

  const features = [
    { icon: '📦', title: 'Quản lý tồn kho realtime', color: '#4facfe' },
    { icon: '⚠️', title: 'Cảnh báo hết hàng', color: '#00f2fe' },
    { icon: '🏢', title: 'Quản lý nhiều kho', color: '#43e97b' },
    { icon: '🤝', title: 'Tích hợp nhà cung cấp', color: '#2F80ED' },
    { icon: '💰', title: 'Tính giá vốn tự động', color: '#2F80ED' },
    { icon: '📊', title: 'Báo cáo xuất nhập tồn', color: '#fa709a' },
  ];

  return (
    <div className="inventory-module-page">
      {/* Hero Section */}
      <section className="inventory-hero">
        <div className="inventory-hero-content">
          <ScrollAnimate animation="fade-up">
            <div className="inventory-hero-icon">📦</div>
            <h1 className="inventory-hero-title">Phân hệ Kho</h1>
            <p className="inventory-hero-description">
              Dashboard metrics design - theo dõi tất cả chỉ số quan trọng của kho hàng trên một màn hình trực quan và dễ hiểu.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="inventory-metrics">
        <div className="inventory-container">
          <div className="inventory-metrics-grid">
            {metrics.map((metric, index) => (
              <ScrollAnimate key={index} animation="scale-in" delay={0.1 * index}>
                <div className="inventory-metric-card" style={{ '--metric-color': metric.color } as React.CSSProperties}>
                  <div className="inventory-metric-icon">{metric.icon}</div>
                  <div className="inventory-metric-value">{metric.value}</div>
                  <div className="inventory-metric-label">{metric.label}</div>
                  <div className={`inventory-metric-trend ${metric.trend}`}>
                    {metric.trend === 'up' ? '↑' : '↓'}
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="inventory-dashboard">
        <div className="inventory-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="inventory-section-title">Dashboard tổng quan</h2>
            <p className="inventory-section-subtitle">Theo dõi tất cả thông tin quan trọng về kho hàng</p>
          </ScrollAnimate>
          <div className="inventory-dashboard-grid">
            {dashboardCards.map((card, index) => (
              <ScrollAnimate key={index} animation="fade-up" delay={0.1 * index}>
                <div className={`inventory-dashboard-card status-${card.status}`}>
                  <div className="inventory-card-header">
                    <div className="inventory-card-icon">{card.icon}</div>
                    <div className="inventory-card-status-indicator"></div>
                  </div>
                  <h3 className="inventory-card-title">{card.title}</h3>
                  <div className="inventory-card-value">
                    <span className="inventory-card-number">{card.value}</span>
                    <span className="inventory-card-unit">{card.unit}</span>
                  </div>
                  <div className="inventory-card-details">
                    {card.details.map((detail, idx) => (
                      <div key={idx} className="inventory-card-detail-item">{detail}</div>
                    ))}
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="inventory-features">
        <div className="inventory-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="inventory-section-title">Tính năng chính</h2>
          </ScrollAnimate>
          <div className="inventory-features-grid">
            {features.map((feature, index) => (
              <ScrollAnimate key={index} animation="fade-up" delay={0.1 * index}>
                <div className="inventory-feature-item" style={{ '--feature-color': feature.color } as React.CSSProperties}>
                  <div className="inventory-feature-icon">{feature.icon}</div>
                  <div className="inventory-feature-title">{feature.title}</div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="inventory-cta">
        <div className="inventory-container">
          <ScrollAnimate animation="fade-up">
            <div className="inventory-cta-content">
              <h2 className="inventory-cta-title">Sẵn sàng trải nghiệm?</h2>
              <p className="inventory-cta-description">Liên hệ ngay để được tư vấn và demo miễn phí</p>
              <div className="inventory-cta-buttons">
                <Link to="/contact" className="inventory-cta-btn inventory-cta-primary">Liên hệ ngay</Link>
                <Link to="/features" className="inventory-cta-btn inventory-cta-secondary">Xem thêm</Link>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
};

export default InventoryModule;
