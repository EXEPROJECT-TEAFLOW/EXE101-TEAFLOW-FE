import { Link } from 'react-router-dom';
import './ReportsModule.css';
import ScrollAnimate from '../animate/ScrollAnimate';

const ReportsModule = () => {
  const reports = [
    {
      category: 'Báo cáo bán hàng',
      icon: '📊',
      color: '#43e97b',
      items: [
        { title: 'Doanh thu theo ngày/tuần/tháng', size: 'large' },
        { title: 'Top sản phẩm bán chạy', size: 'medium' },
        { title: 'Doanh thu theo nhân viên', size: 'medium' },
        { title: 'So sánh các kỳ', size: 'small' },
      ],
    },
    {
      category: 'Báo cáo tài chính',
      icon: '💰',
      color: '#38f9d7',
      items: [
        { title: 'Lợi nhuận gộp', size: 'large' },
        { title: 'Chi phí vận hành', size: 'medium' },
        { title: 'Dòng tiền', size: 'small' },
        { title: 'Tỷ suất lợi nhuận', size: 'medium' },
      ],
    },
    {
      category: 'Báo cáo kho',
      icon: '📦',
      color: '#2F80ED',
      items: [
        { title: 'Tồn kho hiện tại', size: 'medium' },
        { title: 'Xuất nhập tồn', size: 'large' },
        { title: 'Hàng sắp hết', size: 'small' },
      ],
    },
    {
      category: 'Báo cáo nhân sự',
      icon: '👥',
      color: '#2F80ED',
      items: [
        { title: 'Hiệu suất nhân viên', size: 'large' },
        { title: 'Ca làm việc', size: 'medium' },
        { title: 'Chi phí nhân sự', size: 'medium' },
        { title: 'Tỷ lệ nghỉ việc', size: 'small' },
      ],
    },
  ];

  const features = [
    { icon: '📊', title: 'Dashboard trực quan', color: '#43e97b' },
    { icon: '💰', title: 'Báo cáo doanh thu', color: '#38f9d7' },
    { icon: '📉', title: 'Phân tích chi phí', color: '#2F80ED' },
    { icon: '🔮', title: 'Dự báo nhu cầu', color: '#2F80ED' },
    { icon: '📄', title: 'Xuất Excel', color: '#fa709a' },
    { icon: '⚡', title: 'Realtime', color: '#feca57' },
  ];

  return (
    <div className="reports-module-page">
      {/* Hero Section */}
      <section className="reports-hero">
        <div className="reports-hero-content">
          <ScrollAnimate animation="fade-up">
            <div className="reports-hero-icon">📊</div>
            <h1 className="reports-hero-title">Phân hệ Báo cáo</h1>
            <p className="reports-hero-description">
              Gallery showcase design - khám phá các loại báo cáo đa dạng được trình bày như một bộ sưu tập nghệ thuật, 
              mỗi báo cáo là một tác phẩm phân tích dữ liệu độc đáo.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="reports-gallery">
        <div className="reports-container">
          {reports.map((report, categoryIndex) => (
            <ScrollAnimate key={categoryIndex} animation="fade-up" delay={0.15 * categoryIndex}>
              <div className="reports-category-section">
                <div className="reports-category-header">
                  <div className="reports-category-icon" style={{ '--category-color': report.color } as React.CSSProperties}>
                    {report.icon}
                  </div>
                  <h2 className="reports-category-title">{report.category}</h2>
                </div>
                <div className="reports-masonry-grid">
                  {report.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`reports-gallery-item size-${item.size}`}
                      style={{ '--item-color': report.color } as React.CSSProperties}
                    >
                      <div className="reports-item-content">
                        <div className="reports-item-number">{itemIndex + 1}</div>
                        <h3 className="reports-item-title">{item.title}</h3>
                        <div className="reports-item-icon">{report.icon}</div>
                      </div>
                      <div className="reports-item-overlay"></div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="reports-features">
        <div className="reports-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="reports-section-title">Tính năng nổi bật</h2>
          </ScrollAnimate>
          <div className="reports-features-flex">
            {features.map((feature, index) => (
              <ScrollAnimate key={index} animation="scale-in" delay={0.1 * index}>
                <div className="reports-feature-pill" style={{ '--feature-color': feature.color } as React.CSSProperties}>
                  <span className="reports-feature-icon">{feature.icon}</span>
                  <span className="reports-feature-title">{feature.title}</span>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="reports-cta">
        <div className="reports-container">
          <ScrollAnimate animation="fade-up">
            <div className="reports-cta-content">
              <h2 className="reports-cta-title">Sẵn sàng trải nghiệm?</h2>
              <p className="reports-cta-description">Liên hệ ngay để được tư vấn và demo miễn phí</p>
              <div className="reports-cta-buttons">
                <Link to="/contact" className="reports-cta-btn reports-cta-primary">Liên hệ ngay</Link>
                <Link to="/features" className="reports-cta-btn reports-cta-secondary">Xem thêm</Link>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
};

export default ReportsModule;
