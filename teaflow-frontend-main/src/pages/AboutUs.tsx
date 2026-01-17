import { Link } from 'react-router-dom';
import './AboutUs.css';
import ScrollAnimate from '../animate/ScrollAnimate';

const AboutUs = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Tập trung vào giá trị',
      description: 'Chúng tôi luôn đặt giá trị mang lại cho khách hàng lên hàng đầu trong mọi quyết định và sản phẩm.',
    },
    {
      icon: '🚀',
      title: 'Đổi mới liên tục',
      description: 'Không ngừng cải tiến và phát triển công nghệ để mang đến trải nghiệm tốt nhất.',
    },
    {
      icon: '🤝',
      title: 'Hợp tác chân thành',
      description: 'Xây dựng mối quan hệ bền vững với khách hàng dựa trên sự tin cậy và minh bạch.',
    },
    {
      icon: '💎',
      title: 'Chất lượng cao',
      description: 'Cam kết mang đến sản phẩm và dịch vụ chất lượng cao nhất trong ngành.',
    },
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Khởi đầu',
      description: 'TEAFLOW được thành lập với mục tiêu cách mạng hóa ngành F&B.',
      icon: '🌱',
    },
    {
      year: '2018',
      title: 'Mở rộng',
      description: 'Ra mắt phiên bản 2.0 với nhiều tính năng mới và mở rộng thị trường.',
      icon: '📈',
    },
    {
      year: '2020',
      title: 'Thành công',
      description: 'Đạt mốc 500+ khách hàng và được công nhận là giải pháp hàng đầu.',
      icon: '🏆',
    },
    {
      year: '2024',
      title: 'Tương lai',
      description: 'Tiếp tục phát triển với AI, công nghệ cloud và mở rộng toàn cầu.',
      icon: '🌟',
    },
  ];

  const team = [
    {
      name: 'Nguyễn Văn A',
      role: 'CEO & Founder',
      description: '15+ năm kinh nghiệm trong công nghệ và quản lý.',
      avatar: '👨‍💼',
    },
    {
      name: 'Trần Thị B',
      role: 'CTO',
      description: 'Chuyên gia về hệ thống phần mềm và kiến trúc công nghệ.',
      avatar: '👩‍💻',
    },
    {
      name: 'Lê Văn C',
      role: 'Head of Product',
      description: 'Đam mê tạo ra sản phẩm tuyệt vời cho người dùng.',
      avatar: '👨‍🚀',
    },
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <ScrollAnimate animation="fade-up">
            <h1 className="about-hero-title">
              Về <span className="gradient-text">TEAFLOW</span>
            </h1>
            <p className="about-hero-description">
              Chúng tôi là đội ngũ đam mê công nghệ, cam kết mang đến giải pháp quản lý tốt nhất cho doanh nghiệp F&B. 
              Với nhiều năm kinh nghiệm và sự hiểu biết sâu sắc về ngành, chúng tôi tự hào là đối tác tin cậy của hàng trăm doanh nghiệp.
            </p>
          </ScrollAnimate>
        </div>
        <div className="about-hero-pattern"></div>
      </section>

      {/* Mission Section */}
      <section className="about-section about-mission">
        <div className="about-container">
          <div className="about-mission-grid">
            <ScrollAnimate animation="fade-right" delay={0.1}>
              <div className="about-mission-card">
                <div className="about-mission-icon">🎯</div>
                <h2 className="about-mission-title">Sứ mệnh</h2>
                <p className="about-mission-text">
                  Chúng tôi cam kết cung cấp giải pháp công nghệ tiên tiến giúp doanh nghiệp F&B quản lý hiệu quả, 
                  tối ưu hóa chi phí và nâng cao trải nghiệm khách hàng. Sứ mệnh của chúng tôi là trở thành người bạn đồng hành 
                  tin cậy trên hành trình phát triển của mọi doanh nghiệp.
                </p>
              </div>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-left" delay={0.2}>
              <div className="about-mission-card">
                <div className="about-mission-icon">👁️</div>
                <h2 className="about-mission-title">Tầm nhìn</h2>
                <p className="about-mission-text">
                  Trở thành nền tảng quản lý F&B hàng đầu khu vực, được công nhận bởi tính đổi mới, 
                  độ tin cậy và khả năng thích ứng. Chúng tôi hướng tới tương lai nơi mọi doanh nghiệp 
                  có thể vận hành hiệu quả và phát triển bền vững nhờ công nghệ.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="about-section about-values">
        <div className="about-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="about-section-title">Giá trị cốt lõi</h2>
            <p className="about-section-subtitle">Những nguyên tắc định hướng mọi hoạt động của chúng tôi</p>
          </ScrollAnimate>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <ScrollAnimate key={index} animation="fade-up" delay={0.1 * (index + 1)}>
                <div className="about-value-card">
                  <div className="about-value-icon">{value.icon}</div>
                  <h3 className="about-value-title">{value.title}</h3>
                  <p className="about-value-description">{value.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-section about-timeline">
        <div className="about-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="about-section-title">Hành trình phát triển</h2>
            <p className="about-section-subtitle">Những cột mốc quan trọng trong chặng đường của chúng tôi</p>
          </ScrollAnimate>
          <div className="about-timeline-container">
            {timeline.map((item, index) => (
              <ScrollAnimate key={index} animation="fade-up" delay={0.1 * index}>
                <div className="about-timeline-item">
                  <div className="about-timeline-dot">
                    <span className="about-timeline-icon">{item.icon}</span>
                  </div>
                  <div className="about-timeline-content">
                    <div className="about-timeline-year">{item.year}</div>
                    <h3 className="about-timeline-title">{item.title}</h3>
                    <p className="about-timeline-description">{item.description}</p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section about-team">
        <div className="about-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="about-section-title">Đội ngũ lãnh đạo</h2>
            <p className="about-section-subtitle">Những người dẫn dắt TEAFLOW đến thành công</p>
          </ScrollAnimate>
          <div className="about-team-grid">
            {team.map((member, index) => (
              <ScrollAnimate key={index} animation="fade-up" delay={0.1 * (index + 1)}>
                <div className="about-team-card">
                  <div className="about-team-avatar">{member.avatar}</div>
                  <h3 className="about-team-name">{member.name}</h3>
                  <div className="about-team-role">{member.role}</div>
                  <p className="about-team-description">{member.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-container">
          <ScrollAnimate animation="fade-up">
            <div className="about-cta-content">
              <h2 className="about-cta-title">Sẵn sàng bắt đầu hành trình cùng chúng tôi?</h2>
              <p className="about-cta-description">
                Hãy liên hệ với chúng tôi ngay hôm nay để tìm hiểu cách TEAFLOW có thể giúp doanh nghiệp của bạn phát triển.
              </p>
              <div className="about-cta-buttons">
                <Link to="/contact" className="about-cta-button about-cta-primary">Liên hệ ngay</Link>
                <Link to="/features" className="about-cta-button about-cta-secondary">Xem tính năng</Link>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
