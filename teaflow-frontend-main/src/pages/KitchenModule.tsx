import { Link } from 'react-router-dom';
import './ModulePage.css';
import ScrollAnimate from '../animate/ScrollAnimate';

const KitchenModule = () => {
  const features = [
    {
      icon: '🔗',
      title: 'Kết nối POS',
      description: 'Tích hợp chặt chẽ với hệ thống POS, tự động nhận đơn hàng từ quầy thanh toán và cập nhật trạng thái.',
    },
    {
      icon: '📋',
      title: 'Quản lý đơn bếp',
      description: 'Hiển thị danh sách đơn bếp theo thứ tự ưu tiên, phân loại theo loại món và thời gian đặt hàng.',
    },
    {
      icon: '⚙️',
      title: 'Tối ưu quy trình',
      description: 'Sắp xếp đơn hàng hợp lý, gộp các món cùng loại để nấu cùng lúc, giảm thời gian chờ đợi.',
    },
    {
      icon: '⏰',
      title: 'Cảnh báo thời gian',
      description: 'Hệ thống cảnh báo khi món ăn sắp đến hạn, đảm bảo món được phục vụ đúng thời gian cam kết.',
    },
    {
      icon: '🥘',
      title: 'Quản lý nguyên liệu',
      description: 'Theo dõi nguyên liệu cần thiết cho từng đơn, cảnh báo khi thiếu nguyên liệu và gợi ý món thay thế.',
    },
    {
      icon: '📊',
      title: 'Báo cáo bếp',
      description: 'Báo cáo về hiệu suất bếp, thời gian chế biến món, món bán chạy và nguyên liệu sử dụng.',
    },
  ];

  const benefits = [
    { icon: '⚡', title: 'Tăng tốc độ', value: '40%' },
    { icon: '✅', title: 'Giảm sai sót', value: '80%' },
    { icon: '😊', title: 'Hài lòng khách', value: '95%' },
    { icon: '📈', title: 'Tăng hiệu suất', value: '35%' },
  ];

  const workflow = [
    {
      step: '01',
      title: 'Nhận đơn từ POS',
      description: 'Hệ thống tự động nhận đơn hàng từ quầy thanh toán và hiển thị trên màn hình bếp.',
    },
    {
      step: '02',
      title: 'Sắp xếp và phân loại',
      description: 'Đơn hàng được sắp xếp theo ưu tiên, phân loại theo món và thời gian để tối ưu quy trình nấu.',
    },
    {
      step: '03',
      title: 'Chế biến và cập nhật',
      description: 'Đầu bếp cập nhật trạng thái món: đang nấu, sắp xong, hoàn thành để quầy và khách hàng biết.',
    },
    {
      step: '04',
      title: 'Hoàn thành và xuất món',
      description: 'Xác nhận món đã hoàn thành, thông báo cho quầy phục vụ và cập nhật trạng thái đơn hàng.',
    },
  ];

  return (
    <div className="module-page kitchen-module">
      <section className="module-hero" style={{ background: 'linear-gradient(135deg, #feca57 0%, #ff6b6b 100%)' }}>
        <div className="module-hero-content">
          <ScrollAnimate animation="fade-up">
            <div className="module-hero-icon">🍳</div>
            <h1 className="module-hero-title">Phân hệ Bếp</h1>
            <p className="module-hero-description">
              Hệ thống quản lý bếp chuyên nghiệp, kết nối với POS để quản lý đơn bếp hiệu quả, 
              tối ưu quy trình chế biến và đảm bảo món ăn được phục vụ đúng thời gian.
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
                  Phân hệ Bếp của TEAFLOW cung cấp giải pháp quản lý bếp toàn diện cho doanh nghiệp F&B. 
                  Hệ thống kết nối chặt chẽ với POS, tự động nhận đơn hàng và hiển thị trên màn hình bếp 
                  để đầu bếp có thể xử lý nhanh chóng và hiệu quả.
                </p>
                <p className="module-section-text">
                  Với khả năng sắp xếp đơn hàng thông minh, cảnh báo thời gian và quản lý nguyên liệu, 
                  Phân hệ Bếp giúp tối ưu hóa quy trình chế biến, giảm thời gian chờ đợi và đảm bảo 
                  món ăn được phục vụ đúng thời gian. Báo cáo chi tiết giúp phân tích hiệu suất bếp và cải thiện quy trình.
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
            <p className="module-section-subtitle">Khám phá các tính năng mạnh mẽ của Phân hệ Bếp</p>
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

      <section className="module-workflow">
        <div className="module-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="module-section-title">Quy trình hoạt động</h2>
            <p className="module-section-subtitle">Từ nhận đơn đến hoàn thành - quy trình tối ưu</p>
          </ScrollAnimate>
          <div className="module-workflow-grid">
            {workflow.map((item, index) => (
              <ScrollAnimate key={index} animation="fade-up" delay={0.1 * index}>
                <div className="module-workflow-item">
                  <div className="module-workflow-step">{item.step}</div>
                  <h3 className="module-workflow-title">{item.title}</h3>
                  <p className="module-workflow-description">{item.description}</p>
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
              <h2 className="module-cta-title">Sẵn sàng trải nghiệm Phân hệ Bếp?</h2>
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

export default KitchenModule;
