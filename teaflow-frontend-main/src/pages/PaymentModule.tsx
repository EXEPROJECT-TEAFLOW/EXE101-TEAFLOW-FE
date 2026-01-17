import { Link } from 'react-router-dom';
import './PaymentModule.css';
import ScrollAnimate from '../animate/ScrollAnimate';

const PaymentModule = () => {
  const paymentFlow = [
    {
      step: 1,
      title: 'Chọn phương thức thanh toán',
      description: 'Khách hàng chọn từ nhiều phương thức: tiền mặt, thẻ, ví điện tử, QR code',
      icon: '💳',
      methods: ['Tiền mặt', 'Thẻ ngân hàng', 'Ví điện tử'],
    },
    {
      step: 2,
      title: 'Xác thực giao dịch',
      description: 'Hệ thống tự động xác thực và bảo mật thông tin thanh toán',
      icon: '🔒',
      methods: ['Xác thực OTP', 'Mã PIN', 'Sinh trắc học'],
    },
    {
      step: 3,
      title: 'Xử lý thanh toán',
      description: 'Kết nối với ngân hàng và cổng thanh toán để xử lý giao dịch',
      icon: '⚡',
      methods: ['Gateway tích hợp', 'Xử lý realtime', 'Giao dịch an toàn'],
    },
    {
      step: 4,
      title: 'Hoàn tất và xuất hóa đơn',
      description: 'Tự động tạo hóa đơn điện tử và gửi thông báo xác nhận',
      icon: '✅',
      methods: ['Hóa đơn điện tử', 'SMS/Email', 'Lưu trữ'],
    },
  ];

  const methods = [
    { icon: '💵', name: 'Tiền mặt', color: '#4CAF50' },
    { icon: '💳', name: 'Thẻ ngân hàng', color: '#2196F3' },
    { icon: '📱', name: 'Ví điện tử', color: '#FF9800' },
    { icon: '📲', name: 'QR Code', color: '#9C27B0' },
  ];

  return (
    <div className="payment-module-page">
      {/* Hero Section */}
      <section className="payment-hero">
        <div className="payment-hero-content">
          <ScrollAnimate animation="fade-up">
            <div className="payment-hero-icon">💳</div>
            <h1 className="payment-hero-title">Phân hệ Thanh Toán</h1>
            <p className="payment-hero-description">
              Timeline flow design - theo dõi toàn bộ quy trình thanh toán từ đầu đến cuối một cách trực quan và rõ ràng.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Payment Methods Cards */}
      <section className="payment-methods-section">
        <div className="payment-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="payment-section-title">Phương thức thanh toán</h2>
          </ScrollAnimate>
          <div className="payment-methods-grid">
            {methods.map((method, index) => (
              <ScrollAnimate key={index} animation="scale-in" delay={0.1 * index}>
                <div className="payment-method-card" style={{ '--method-color': method.color } as React.CSSProperties}>
                  <div className="payment-method-icon">{method.icon}</div>
                  <div className="payment-method-name">{method.name}</div>
                  <div className="payment-method-indicator"></div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Flow */}
      <section className="payment-timeline-section">
        <div className="payment-container">
          <ScrollAnimate animation="fade-up">
            <h2 className="payment-section-title">Quy trình thanh toán</h2>
            <p className="payment-section-subtitle">4 bước đơn giản để hoàn tất giao dịch</p>
          </ScrollAnimate>
          <div className="payment-timeline">
            {paymentFlow.map((flow, index) => (
              <ScrollAnimate key={index} animation="fade-right" delay={0.15 * index}>
                <div className="payment-timeline-item">
                  <div className="payment-timeline-line"></div>
                  <div className="payment-timeline-dot">
                    <span className="payment-timeline-number">{flow.step}</span>
                  </div>
                  <div className="payment-timeline-content">
                    <div className="payment-timeline-icon">{flow.icon}</div>
                    <h3 className="payment-timeline-title">{flow.title}</h3>
                    <p className="payment-timeline-description">{flow.description}</p>
                    <div className="payment-timeline-tags">
                      {flow.methods.map((method, idx) => (
                        <span key={idx} className="payment-tag">{method}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="payment-cta">
        <div className="payment-container">
          <ScrollAnimate animation="fade-up">
            <div className="payment-cta-content">
              <h2 className="payment-cta-title">Sẵn sàng trải nghiệm?</h2>
              <p className="payment-cta-description">Liên hệ ngay để được tư vấn và demo miễn phí</p>
              <div className="payment-cta-buttons">
                <Link to="/contact" className="payment-cta-btn payment-cta-primary">Liên hệ ngay</Link>
                <Link to="/features" className="payment-cta-btn payment-cta-secondary">Xem thêm</Link>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
};

export default PaymentModule;
