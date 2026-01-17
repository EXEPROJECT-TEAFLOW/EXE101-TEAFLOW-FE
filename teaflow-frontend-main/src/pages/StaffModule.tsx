import { Link } from 'react-router-dom';
import './ModulePage.css';
import ScrollAnimate from '../animate/ScrollAnimate';

const StaffModule = () => {
  const features = [
    {
      icon: '👤',
      title: 'Quản lý thông tin nhân viên',
      description: 'Lưu trữ đầy đủ thông tin nhân viên: hồ sơ cá nhân, hợp đồng, chứng chỉ, lịch sử làm việc.',
    },
    {
      icon: '⏰',
      title: 'Chấm công tự động',
      description: 'Hệ thống chấm công tự động qua QR code, vân tay hoặc khuôn mặt, ghi nhận giờ vào/ra chính xác.',
    },
    {
      icon: '💵',
      title: 'Tính lương tự động',
      description: 'Tự động tính lương theo ca làm việc, thưởng, phạt, bảo hiểm và các khoản khấu trừ khác.',
    },
    {
      icon: '📈',
      title: 'Đánh giá hiệu suất',
      description: 'Hệ thống đánh giá hiệu suất nhân viên dựa trên KPI, doanh số, và phản hồi khách hàng.',
    },
    {
      icon: '🔐',
      title: 'Phân quyền chi tiết',
      description: 'Phân quyền nhân viên theo vai trò, giới hạn quyền truy cập các chức năng và dữ liệu.',
    },
    {
      icon: '📋',
      title: 'Báo cáo nhân sự',
      description: 'Báo cáo chi tiết về nhân sự: tổng số nhân viên, ca làm việc, chi phí nhân sự, hiệu suất.',
    },
  ];

  const benefits = [
    { icon: '⏱️', title: 'Tiết kiệm thời gian', value: '70%' },
    { icon: '✅', title: 'Độ chính xác', value: '100%' },
    { icon: '📊', title: 'Minh bạch', value: '100%' },
    { icon: '💰', title: 'Tối ưu chi phí', value: '30%' },
  ];

  const capabilities = [
    {
      icon: '📅',
      title: 'Quản lý ca làm việc',
      description: 'Lập lịch ca làm việc, phân ca cho nhân viên, xử lý yêu cầu đổi ca và nghỉ phép.',
    },
    {
      icon: '💰',
      title: 'Quản lý lương thưởng',
      description: 'Tính lương tự động, quản lý thưởng, phạt, phụ cấp và các khoản khấu trừ.',
    },
    {
      icon: '📊',
      title: 'Theo dõi hiệu suất',
      description: 'Đo lường hiệu suất làm việc của nhân viên qua KPI, doanh số và đánh giá định kỳ.',
    },
    {
      icon: '🎓',
      title: 'Đào tạo nhân viên',
      description: 'Quản lý chương trình đào tạo, theo dõi tiến độ học tập và cấp chứng chỉ cho nhân viên.',
    },
  ];

  return (
    <div className="module-page staff-module">
      <section className="module-hero" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
        <div className="module-hero-content">
          <ScrollAnimate animation="fade-up">
            <div className="module-hero-icon">👥</div>
            <h1 className="module-hero-title">Phân hệ Nhân viên</h1>
            <p className="module-hero-description">
              Hệ thống quản lý nhân sự chuyên nghiệp, tự động hóa quy trình chấm công, tính lương và 
              đánh giá hiệu suất. Giúp quản lý đội ngũ nhân viên hiệu quả và minh bạch.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      <section className="module-overview">
        <div className="module-container">
          <div className="module-overview-grid">
            <ScrollAnimate animation="fade-right">
              <div className="module-overview-content">
                <h2 className="module-section-title">Tổng quan</h2>
                <p className="module-section-text">
                  Phân hệ Nhân viên của TEAFLOW cung cấp giải pháp quản lý nhân sự toàn diện cho doanh nghiệp F&B. 
                  Từ quản lý thông tin nhân viên, chấm công, tính lương đến đánh giá hiệu suất - 
                  tất cả đều được tự động hóa để tiết kiệm thời gian và giảm sai sót.
                </p>
                <p className="module-section-text">
                  Hệ thống phân quyền chi tiết giúp bảo mật thông tin và kiểm soát quyền truy cập. 
                  Báo cáo nhân sự cung cấp cái nhìn tổng quan về đội ngũ, giúp đưa ra quyết định nhân sự đúng đắn 
                  và tối ưu hóa chi phí lao động.
                </p>
              </div>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-left">
              <div className="module-overview-stats">
                {benefits.map((benefit, index) => (
                  <div key={index} className="module-stat-card">
                    <div className="module-stat-icon">{benefit.icon}</div>
                    <div className="module-stat-value">{benefit.value}</div>
                    <div className="module-stat-label">{benefit.title}</div>
                  </div>
                ))}
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      <section className="module-features">
        <div className="module-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="module-section-title">Tính năng chính</h2>
            <p className="module-section-subtitle">Khám phá các tính năng mạnh mẽ của Phân hệ Nhân viên</p>
          </ScrollAnimate>
          <div className="module-features-grid">
            {features.map((feature, index) => (
              <ScrollAnimate key={index} animation="fade-up" delay={0.1 * (index + 1)}>
                <div className="module-feature-card">
                  <div className="module-feature-icon">{feature.icon}</div>
                  <h3 className="module-feature-title">{feature.title}</h3>
                  <p className="module-feature-description">{feature.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <section className="module-capabilities">
        <div className="module-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="module-section-title">Khả năng quản lý</h2>
            <p className="module-section-subtitle">Quản lý toàn diện mọi khía cạnh của nhân sự</p>
          </ScrollAnimate>
          <div className="module-capabilities-grid">
            {capabilities.map((capability, index) => (
              <ScrollAnimate key={index} animation="fade-up" delay={0.1 * index}>
                <div className="module-capability-card">
                  <div className="module-capability-icon">{capability.icon}</div>
                  <h3 className="module-capability-title">{capability.title}</h3>
                  <p className="module-capability-description">{capability.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <section className="module-cta">
        <div className="module-container">
          <ScrollAnimate animation="fade-up">
            <div className="module-cta-content">
              <h2 className="module-cta-title">Sẵn sàng trải nghiệm Phân hệ Nhân viên?</h2>
              <p className="module-cta-description">
                Liên hệ ngay để được tư vấn và demo miễn phí
              </p>
              <div className="module-cta-buttons">
                <Link to="/contact" className="module-cta-button module-cta-primary">
                  Liên hệ ngay
                </Link>
                <Link to="/features" className="module-cta-button module-cta-secondary">
                  Xem tất cả tính năng
                </Link>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
};

export default StaffModule;
