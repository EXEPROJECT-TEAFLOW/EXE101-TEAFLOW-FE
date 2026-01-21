import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Features.css';
import ScrollAnimate from '../animate/ScrollAnimate';

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const mainFeatures = [
    {
      icon: '🛒',
      title: 'Phân hệ Bán Hàng',
      description: 'Quản lý đơn hàng, bàn, khách hàng một cách hiệu quả. Tích hợp POS, thanh toán đa kênh, quản lý khuyến mãi, chương trình tích điểm và voucher.',
      features: [
        'Quản lý đơn hàng realtime',
        'Đặt bàn online',
        'Tích hợp POS',
        'Quản lý khuyến mãi',
        'Chương trình tích điểm',
        'Giao hàng tận nơi',
      ],
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800',
      color: '#2F80ED',
    },
    {
      icon: '💳',
      title: 'Phân hệ Thanh Toán',
      description: 'Hệ thống thanh toán đa dạng với tích hợp máy in hóa đơn, xuất hóa đơn điện tử và thanh toán tự động.',
      features: [
        'Thanh toán đa kênh',
        'Ví điện tử (MoMo, ZaloPay, VNPay)',
        'QR code payment',
        'Hóa đơn điện tử',
        'Máy in hóa đơn',
        'Quản lý giao dịch',
      ],
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
      color: '#2F80ED',
    },
    {
      icon: '📦',
      title: 'Phân hệ Kho',
      description: 'Quản lý tồn kho thông minh với cảnh báo hết hàng tự động, tối ưu chi phí lưu trữ và theo dõi xuất nhập tồn realtime.',
      features: [
        'Quản lý tồn kho realtime',
        'Cảnh báo hết hàng',
        'Quản lý nhiều kho',
        'Tích hợp nhà cung cấp',
        'Tính giá vốn tự động',
        'Báo cáo xuất nhập tồn',
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
      color: '#4facfe',
    },
    {
      icon: '📊',
      title: 'Phân hệ Báo cáo',
      description: 'Dashboard trực quan với báo cáo chi tiết doanh thu, chi phí, lợi nhuận và phân tích xu hướng.',
      features: [
        'Dashboard trực quan',
        'Báo cáo doanh thu',
        'Phân tích chi phí',
        'Dự báo nhu cầu',
        'Báo cáo xuất Excel',
        'Thống kê realtime',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      color: '#43e97b',
    },
    {
      icon: '👥',
      title: 'Phân hệ Nhân viên',
      description: 'Quản lý nhân viên chuyên nghiệp với tính lương tự động, chấm công và đánh giá hiệu suất.',
      features: [
        'Quản lý thông tin nhân viên',
        'Chấm công tự động',
        'Tính lương tự động',
        'Đánh giá hiệu suất',
        'Phân quyền chi tiết',
        'Báo cáo nhân sự',
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      color: '#fa709a',
    },
    {
      icon: '🍳',
      title: 'Phân hệ Bếp',
      description: 'Quản lý bếp chuyên nghiệp với kết nối POS, quản lý đơn bếp, và tối ưu quy trình chế biến.',
      features: [
        'Kết nối POS',
        'Quản lý đơn bếp',
        'Tối ưu quy trình',
        'Cảnh báo thời gian',
        'Quản lý nguyên liệu',
        'Báo cáo bếp',
      ],
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800',
      color: '#feca57',
    },
  ];

  const allFeatures = [
    {
      category: 'Quản lý',
      items: [
        { icon: '⚡', title: 'Tốc độ nhanh', description: 'Xử lý hàng nghìn đơn hàng cùng lúc' },
        { icon: '🔒', title: 'Bảo mật cao', description: 'Mã hóa dữ liệu với tiêu chuẩn quốc tế' },
        { icon: '📱', title: 'Đa nền tảng', description: 'Hoạt động trên mọi thiết bị' },
        { icon: '☁️', title: 'Cloud-based', description: 'Truy cập mọi lúc, mọi nơi' },
      ],
    },
    {
      category: 'Tích hợp',
      items: [
        { icon: '🔗', title: 'API mở', description: 'Tích hợp dễ dàng với hệ thống khác' },
        { icon: '🛠️', title: 'Tùy biến', description: 'Cấu hình theo nhu cầu doanh nghiệp' },
        { icon: '📦', title: 'Add-ons', description: 'Mở rộng tính năng với các module' },
        { icon: '🔄', title: 'Đồng bộ', description: 'Đồng bộ dữ liệu realtime' },
      ],
    },
    {
      category: 'Hỗ trợ',
      items: [
        { icon: '🎓', title: 'Đào tạo', description: 'Chương trình đào tạo toàn diện' },
        { icon: '💬', title: 'Hỗ trợ 24/7', description: 'Đội ngũ hỗ trợ luôn sẵn sàng' },
        { icon: '📚', title: 'Tài liệu', description: 'Tài liệu chi tiết và video hướng dẫn' },
        { icon: '🔄', title: 'Cập nhật', description: 'Cập nhật thường xuyên và miễn phí' },
      ],
    },
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Tăng doanh thu',
      description: 'Tối ưu hóa quy trình bán hàng giúp tăng doanh thu lên đến 30%',
      stat: '+30%',
    },
    {
      icon: '⏱️',
      title: 'Tiết kiệm thời gian',
      description: 'Tự động hóa các quy trình giúp tiết kiệm 40% thời gian làm việc',
      stat: '-40%',
    },
    {
      icon: '📉',
      title: 'Giảm chi phí',
      description: 'Tối ưu quản lý kho và nhân sự giúp giảm chi phí vận hành',
      stat: '-25%',
    },
    {
      icon: '📈',
      title: 'Tăng hiệu suất',
      description: 'Công cụ phân tích giúp đưa ra quyết định nhanh chóng và chính xác',
      stat: '+50%',
    },
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero"  style={{ backgroundImage: "url('/public/feature.png')" }}>
        <div className="features-hero-content">
          <ScrollAnimate animation="fade-up">
            <h1 className="features-hero-title">
              Tính năng <span className="gradient-text">mạnh mẽ</span>
            </h1>
            <p className="features-hero-description">
              TEAFLOW cung cấp đầy đủ các công cụ cần thiết để quản lý toàn diện doanh nghiệp F&B của bạn. 
              Từ bán hàng, thanh toán đến quản lý kho và báo cáo - tất cả trong một nền tảng duy nhất.
            </p>
            <button className='text-white'>Khám phá ngay</button>
          </ScrollAnimate>
        </div>
        <div className="features-hero-pattern"></div>
      </section>

      {/* Main Features Tabs */}
      <section className="features-main-section">
        <div className="features-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="features-section-title">Các phân hệ chính</h2>
            <p className="features-section-subtitle">Khám phá các tính năng mạnh mẽ của TEAFLOW</p>
          </ScrollAnimate>

          <div className="features-tabs">
            {mainFeatures.map((feature, index) => (
              <button
                key={index}
                className={`features-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                style={{ '--tab-color': feature.color } as React.CSSProperties}
              >
                <span className="features-tab-icon">{feature.icon}</span>
                <span className="features-tab-title">{feature.title}</span>
              </button>
            ))}
          </div>

          <div className="features-content">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`features-content-panel ${activeTab === index ? 'active' : ''}`}
              >
                <ScrollAnimate animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                  <div className="features-content-grid">
                    <div className="features-content-info">
                      <div className="features-content-icon">{feature.icon}</div>
                      <h3 className="features-content-title">{feature.title}</h3>
                      <p className="features-content-description">{feature.description}</p>
                      <ul className="features-list">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="features-list-item">
                            <span className="features-list-icon">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact" className="features-cta-button">
                        Tìm hiểu thêm
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                    <div className="features-content-visual">
                      <div
                        className="features-visual-image"
                        style={{
                          background: `linear-gradient(135deg, ${feature.color}15 0%, ${feature.color}05 100%)`,
                        }}
                      >
                        <div className="features-visual-placeholder">
                          <span className="features-visual-icon">{feature.icon}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="features-grid-section">
        <div className="features-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="features-section-title">Tất cả tính năng</h2>
            <p className="features-section-subtitle">Mọi thứ bạn cần để vận hành doanh nghiệp hiệu quả</p>
          </ScrollAnimate>
          <div className="features-categories">
            {allFeatures.map((category, categoryIndex) => (
              <ScrollAnimate key={categoryIndex} animation="fade-up" delay={0.1 * categoryIndex}>
                <div className="features-category">
                  <h3 className="features-category-title">{category.category}</h3>
                  <div className="features-category-grid">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="features-item-card">
                        <div className="features-item-icon">{item.icon}</div>
                        <h4 className="features-item-title">{item.title}</h4>
                        <p className="features-item-description">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="features-benefits">
        <div className="features-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="features-section-title" style={{ color: 'white' }}>
              Lợi ích mang lại
            </h2>
            <p className="features-section-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Những con số chứng minh hiệu quả của TEAFLOW
            </p>
          </ScrollAnimate>
          <div className="features-benefits-grid">
            {benefits.map((benefit, index) => (
              <ScrollAnimate key={index} animation="scale-in" delay={0.1 * index}>
                <div className="features-benefit-card">
                  <div className="features-benefit-icon">{benefit.icon}</div>
                  <div className="features-benefit-stat">{benefit.stat}</div>
                  <h3 className="features-benefit-title">{benefit.title}</h3>
                  <p className="features-benefit-description">{benefit.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta">
        <div className="features-container">
          <ScrollAnimate animation="fade-up">
            <div className="features-cta-content">
              <h2 className="features-cta-title">Sẵn sàng trải nghiệm TEAFLOW?</h2>
              <p className="features-cta-description">
                Hãy đăng ký ngay để được tư vấn và demo miễn phí
              </p>
              <div className="features-cta-buttons">
                <Link to="/contact" className="features-cta-button-primary">
                  Liên hệ ngay
                </Link>
                <Link to="/about" className="features-cta-button-secondary">
                  Tìm hiểu thêm
                </Link>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
};

export default Features;
