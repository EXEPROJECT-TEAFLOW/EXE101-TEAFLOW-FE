import { useState } from 'react';
import './ContactUs.css';
import ScrollAnimate from '../animate/ScrollAnimate';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý submit form ở đây
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Địa chỉ',
      content: '123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh',
      link: '#',
    },
    {
      icon: '📞',
      title: 'Điện thoại',
      content: '+84 123 456 789',
      link: 'tel:+84123456789',
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'contact@teaflow.com',
      link: 'mailto:contact@teaflow.com',
    },
    {
      icon: '🕒',
      title: 'Giờ làm việc',
      content: 'Thứ 2 - Thứ 6: 8:00 - 18:00',
      link: '#',
    },
  ];

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <ScrollAnimate animation="fade-up">
            <h1 className="contact-hero-title">
              Liên hệ với <span className="gradient-text">chúng tôi</span>
            </h1>
            <p className="contact-hero-description">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy gửi tin nhắn hoặc liên hệ trực tiếp với chúng tôi.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main-section">
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <ScrollAnimate animation="fade-right" delay={0.1}>
              <div className="contact-form-card">
                <h2 className="contact-form-title">Gửi tin nhắn cho chúng tôi</h2>
                <p className="contact-form-subtitle">Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Họ và tên *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Nhập họ và tên của bạn"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Số điện thoại</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+84 XXX XXX XXX"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Chủ đề *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Chọn chủ đề</option>
                        <option value="support">Hỗ trợ kỹ thuật</option>
                        <option value="sales">Tư vấn bán hàng</option>
                        <option value="partnership">Hợp tác</option>
                        <option value="feedback">Phản hồi</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Tin nhắn *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Nhập tin nhắn của bạn..."
                    />
                  </div>

                  <button type="submit" className="contact-submit-btn">
                    <span>Gửi tin nhắn</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 2.5L8.75 11.25M17.5 2.5L12.5 17.5L8.75 11.25M17.5 2.5L2.5 7.5L8.75 11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              </div>
            </ScrollAnimate>
          </div>

          {/* Contact Info & Map */}
          <div className="contact-info-wrapper">
            {/* Contact Info Cards */}
            <ScrollAnimate animation="fade-left" delay={0.2}>
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <ScrollAnimate key={index} animation="fade-up" delay={0.1 * (index + 1)}>
                    <div className="contact-info-card">
                      <div className="contact-info-icon">{info.icon}</div>
                      <h3 className="contact-info-title">{info.title}</h3>
                      {info.link !== '#' ? (
                        <a href={info.link} className="contact-info-content">
                          {info.content}
                        </a>
                      ) : (
                        <p className="contact-info-content">{info.content}</p>
                      )}
                    </div>
                  </ScrollAnimate>
                ))}
              </div>
            </ScrollAnimate>

            {/* Google Maps */}
            <ScrollAnimate animation="fade-up" delay={0.3}>
              <div className="contact-map-wrapper">
                <h3 className="contact-map-title">Vị trí văn phòng</h3>
                <div className="contact-map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.126036839096!2d106.62965431480322!3d10.82300839230507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529439e925141%3A0x814f4b7c09c7b8a3!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBLaG9hIGjDoG5n!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '16px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Văn phòng TEAFLOW"
                  />
                </div>
                <p className="contact-map-note">
                  💡 Bạn có thể kéo và phóng to bản đồ để xem chi tiết hơn
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
