/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import './HomePage.css';
import ScrollAnimate from '../animate/ScrollAnimate';
import { FeatureDemo } from '@/components/Features';
import FeaturesDetail from '@/components/ui/features-detail';
import { AnimatedTestimonialsDemo } from '@/components/Profile';
import Home from '@/components/FeaturesCard';


// Helper component để render icon (hỗ trợ cả emoji và ảnh)


const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'centered',
      title: 'Quản lý nhà hàng',
      highlight: 'thông minh',
      subtitle: 'Tăng trưởng doanh thu',
      description: 'TEAFLOW - Hệ thống quản lý toàn diện cho nhà hàng, quán café, chuỗi F&B. Tích hợp bán hàng, thanh toán, kho, báo cáo và nhân viên trong một nền tảng.',
      bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      badge: '✨ Giải pháp quản lý F&B số 1',
      backgroundImage: 'https://images.wallpaperscraft.com/image/single/cup_tea_flowers_166493_1920x1080.jpg',
    },
    {
      type: 'split',
      title: 'Tối ưu hóa',
      highlight: 'quy trình bán hàng',
      subtitle: 'Tăng hiệu quả 45%',
      description: 'Quản lý đơn hàng, bàn, khách hàng một cách thông minh. Tích hợp POS, thanh toán đa kênh, quản lý khuyến mãi và chương trình tích điểm.',
      bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      badge: '🚀 Công nghệ tiên tiến',
      backgroundImage: 'https://th.bing.com/th/id/R.954ceb37992313e84a5e51c35ae0b352?rik=X63vxz2MW4kREg&riu=http%3a%2f%2fteaflowusa.com%2fcdn%2fshop%2ffiles%2fTeaFlow_logo_vert_white.jpg%3fv%3d1689617968%26width%3d2048&ehk=G4CrM%2bEfQkZ0LIA%2fSsj1Bngqoz45uGbACDtHLtaDIEE%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      type: 'minimal',
      title: 'Quản lý kho',
      highlight: 'thông minh',
      subtitle: 'Giảm lãng phí 30%',
      description: 'Hệ thống quản lý tồn kho tự động, cảnh báo hết hàng, tối ưu chi phí lưu trữ. Theo dõi xuất nhập tồn realtime, tích hợp với nhà cung cấp.',
      bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      badge: '📊 Phân tích dữ liệu',
      backgroundImage: 'https://wallpapercave.com/wp/wp6751238.jpg',
    },
    {
      type: 'banner',
      title: 'Báo cáo',
      highlight: 'trực quan',
      subtitle: 'Đưa ra quyết định đúng đắn',
      description: 'Dashboard trực quan, báo cáo chi tiết doanh thu, chi phí, lợi nhuận. Phân tích xu hướng, dự báo nhu cầu, hỗ trợ ra quyết định kinh doanh.',
      bgGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      badge: '💡 Trí tuệ nhân tạo',
      backgroundImage: 'https://wallup.net/wp-content/uploads/2017/11/22/317633-photography-food-tea.jpg',
    },
  ];

    const headingRef = useRef<HTMLHeadingElement>(null)
      const textRef = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const stats = [
    { number: '10K+', label: 'Nhà hàng tin dùng' },
    { number: '50K+', label: 'Đơn hàng/ngày' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Hỗ trợ' },
  ];

  // const features = [
  //   {
  //     icon: '🛒',
  //     title: 'Phân hệ Bán Hàng',
  //     description: 'Quản lý đơn hàng, bàn, khách hàng một cách hiệu quả. Tích hợp POS, thanh toán đa kênh, quản lý khuyến mãi, chương trình tích điểm và voucher. Hỗ trợ đặt bàn online, giao hàng tận nơi.',
  //   },
  //   {
  //     icon: '💳',
  //     title: 'Phân hệ Thanh Toán',
  //     description: 'Hệ thống thanh toán đa dạng: tiền mặt, thẻ ngân hàng, ví điện tử (MoMo, ZaloPay, VNPay), QR code. Tích hợp máy in hóa đơn, xuất hóa đơn điện tử, thanh toán tự động.',
  //   },
  //   {
  //     icon: '📦',
  //     title: 'Phân hệ Kho',
  //     description: 'Quản lý tồn kho thông minh, cảnh báo hết hàng tự động, tối ưu chi phí lưu trữ. Theo dõi xuất nhập tồn realtime, quản lý nhiều kho, tích hợp với nhà cung cấp, tính giá vốn tự động.',
  //   },
  //   {
  //     icon: '📊',
  //     title: 'Phân hệ Báo cáo',
  //     description: 'Báo cáo chi tiết doanh thu, chi phí, lợi nhuận theo ngày, tuần, tháng, năm. Dashboard trực quan với biểu đồ, phân tích xu hướng, dự báo nhu cầu, báo cáo theo từng sản phẩm, nhân viên.',
  //   },
  //   {
  //     icon: '👥',
  //     title: 'Phân hệ Nhân viên',
  //     description: 'Quản lý nhân sự, ca làm việc, chấm công, tính lương tự động. Đánh giá hiệu suất, phân quyền theo chức vụ, quản lý phụ cấp, thưởng, báo cáo hiệu suất làm việc.',
  //   },
  //   {
  //     icon: '👨‍🍳',
  //     title: 'Phân hệ Bếp',
  //     description: 'Quản lý đơn hàng bếp, ưu tiên món ăn, theo dõi thời gian chế biến. In phiếu bếp tự động, quản lý công thức nấu ăn, tính giá thành món, cảnh báo hết nguyên liệu.',
  //   },
  // ];

  // const departments = [
  //   {
  //     icon: '💻',
  //     title: 'Công nghệ',
  //     description: 'Đội ngũ phát triển phần mềm chuyên nghiệp, luôn cập nhật công nghệ mới nhất.',
  //     count: '25+',
  //     label: 'Nhân viên',
  //   },
  //   {
  //     icon: '🎨',
  //     title: 'Thiết kế',
  //     description: 'Tạo ra giao diện đẹp mắt, trực quan, dễ sử dụng cho người dùng.',
  //     count: '8+',
  //     label: 'Designers',
  //   },
  //   {
  //     icon: '📱',
  //     title: 'Sản phẩm',
  //     description: 'Nghiên cứu và phát triển tính năng mới, cải thiện trải nghiệm người dùng.',
  //     count: '12+',
  //     label: 'Members',
  //   },
  //   {
  //     icon: '🎯',
  //     title: 'Kinh doanh',
  //     description: 'Tư vấn và hỗ trợ khách hàng, mở rộng thị trường và phát triển đối tác.',
  //     count: '15+',
  //     label: 'Nhân viên',
  //   },
  // ];

  // const featuredServices = [
  //   {
  //     icon: '🚀',
  //     title: 'Triển khai nhanh',
  //     description: 'Triển khai hệ thống trong 24h, hướng dẫn đầy đủ, hỗ trợ setup tận nơi.',
  //     color: '#667eea',
  //   },
  //   {
  //     icon: '🔧',
  //     title: 'Bảo trì 24/7',
  //     description: 'Hỗ trợ kỹ thuật 24/7, sửa chữa nhanh chóng, đảm bảo hệ thống hoạt động ổn định.',
  //     color: '#f5576c',
  //   },
  //   {
  //     icon: '📚',
  //     title: 'Đào tạo miễn phí',
  //     description: 'Đào tạo nhân viên miễn phí, tài liệu chi tiết, video hướng dẫn đầy đủ.',
  //     color: '#4facfe',
  //   },
  //   {
  //     icon: '🔄',
  //     title: 'Cập nhật thường xuyên',
  //     description: 'Cập nhật tính năng mới miễn phí, cải thiện liên tục dựa trên feedback khách hàng.',
  //     color: '#43e97b',
  //   },
  //   {
  //     icon: '📊',
  //     title: 'Tư vấn tối ưu',
  //     description: 'Tư vấn quy trình, tối ưu hóa hoạt động, nâng cao hiệu quả kinh doanh.',
  //     color: '#f093fb',
  //   },
  //   {
  //     icon: '🔒',
  //     title: 'Bảo mật cao',
  //     description: 'Bảo mật dữ liệu tuyệt đối, backup tự động, tuân thủ quy định bảo mật.',
  //     color: '#764ba2',
  //   },
  // ];

  // const teamMembers = [
  //   {
  //     name: 'Nguyễn Hoàng Minh Nhật',
  //     role: 'CEO & Founder',
  //     description: '15 năm kinh nghiệm trong lĩnh vực công nghệ và F&B. Tốt nghiệp ĐH Bách Khoa.',
  //     avatar: '👨‍💼',
  //     social: { linkedin: '#', email: '#' },
  //   },
  //   {
  //     name: 'Nguyễn Hoàng Phúc Hậu',
  //     role: 'CTO',
  //     description: 'Chuyên gia công nghệ với 12 năm kinh nghiệm. Từng làm việc tại các công ty công nghệ hàng đầu.',
  //     avatar: '👩‍💻',
  //     social: { linkedin: '#', email: '#' },
  //   },
  //   {
  //     name: 'Trần Thị Thu Hiền',
  //     role: 'Head of Product',
  //     description: '10 năm kinh nghiệm trong phát triển sản phẩm SaaS. Đam mê tạo ra trải nghiệm người dùng tuyệt vời.',
  //     avatar: '👨‍🎨',
  //     social: { linkedin: '#', email: '#' },
  //   },
  //   {
  //     name: 'Lê Mai Trang',
  //     role: 'Head of Sales',
  //     description: 'Chuyên viên kinh doanh với 8 năm kinh nghiệm. Đã giúp hàng nghìn khách hàng thành công.',
  //     avatar: '👩‍💼',
  //     social: { linkedin: '#', email: '#' },
  //   },
  //   {
  //     name: 'Trần Công Tâm',
  //     role: 'Head of Engineering',
  //     description: 'Kỹ sư phần mềm với 10 năm kinh nghiệm. Chuyên về hệ thống quy mô lớn và kiến trúc phần mềm.',
  //     avatar: '👨‍🔧',
  //     social: { linkedin: '#', email: '#' },
  //   },
  //   {
  //     name: 'Lưu Nguyên Trương',
  //     role: 'Head of Design',
  //     description: 'Nhà thiết kế UX/UI với 7 năm kinh nghiệm. Tạo ra giao diện đẹp mắt và dễ sử dụng.',
  //     avatar: '👩‍🎨',
  //     social: { linkedin: '#', email: '#' },
  //   },
  // ];

  const benefits = [
    {
      title: 'Dễ sử dụng',
      description: 'Giao diện thân thiện, trực quan, dễ học. Không cần đào tạo phức tạp, nhân viên có thể sử dụng ngay. Hỗ trợ đa ngôn ngữ, hướng dẫn chi tiết.',
    },
    {
      title: 'Tích hợp đầy đủ',
      description: 'Tất cả phân hệ được tích hợp liền mạch, quản lý tập trung một nơi. Đồng bộ dữ liệu realtime, không cần nhập liệu nhiều lần, tiết kiệm thời gian.',
    },
    {
      title: 'Bảo mật cao',
      description: 'Dữ liệu được mã hóa SSL 256-bit, backup tự động hàng ngày, đảm bảo an toàn thông tin. Tuân thủ GDPR, có hệ thống phòng chống tấn công DDoS.',
    },
    {
      title: 'Scalable',
      description: 'Mở rộng dễ dàng từ quán nhỏ đến chuỗi nhà hàng lớn. Hỗ trợ nhiều chi nhánh, quản lý tập trung, báo cáo tổng hợp từ nhiều cửa hàng.',
    },
  ];

  // const testimonials = [
  //   {
  //     name: 'Nguyễn Văn A',
  //     role: 'Giám đốc Nhà hàng ABC',
  //     content: 'TEAFLOW giúp chúng tôi quản lý hiệu quả hơn rất nhiều. Doanh thu tăng 40% sau 3 tháng sử dụng. Giao diện dễ dùng, nhân viên học nhanh.',
  //     rating: 5,
  //   },
  //   {
  //     name: 'Trần Thị B',
  //     role: 'Chủ chuỗi Café XYZ',
  //     content: 'Hệ thống tích hợp đầy đủ, từ bán hàng đến kho, báo cáo. Tiết kiệm thời gian và chi phí đáng kể. Hỗ trợ khách hàng rất tốt.',
  //     rating: 5,
  //   },
  //   {
  //     name: 'Lê Văn C',
  //     role: 'Quản lý Nhà hàng DEF',
  //     content: 'Báo cáo chi tiết giúp tôi đưa ra quyết định kinh doanh đúng đắn. Quản lý kho tự động, không còn lo hết hàng hay lãng phí.',
  //     rating: 5,
  //   },
  // ];

  const renderSlide = (slide: typeof slides[0], index: number) => {
    const isActive = index === currentSlide;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const slideAny = slide as any;
    
    // Tính toán style cho background
    const getSlideStyle = () => {
      const style: React.CSSProperties = {};
      if (slideAny.backgroundImage) {
        // Dùng background image với overlay gradient để text dễ đọc
        style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slideAny.backgroundImage})`;
        style.backgroundSize = 'cover';
        style.backgroundPosition = 'center';
        style.backgroundRepeat = 'no-repeat';
      } else {
        style.background = slide.bgGradient;
      }
      return style;
    };
    
    switch (slide.type) {
      case 'centered':
        return (
          <div key={index} className={`slide centered ${isActive ? 'active' : ''}`} style={getSlideStyle()}>
            <div className="slide-content centered-content">
              <div className="hero-badge"><span>{slide.badge}</span></div>
              {slideAny.imageUrl ? (
                <img src={slideAny.imageUrl} alt={slide.title} className="slide-icon-large slide-icon-image" />
              ) : (
                slideAny.image && <div className="slide-icon-large">{slideAny.image}</div>
              )}
              <h1 className="hero-title">
                {slide.title}
                <span className="gradient-text"> {slide.highlight}</span>
                <br />
                {slide.subtitle}
              </h1>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-cta">
                <a href="/contact" className="btn btn-primary">Dùng thử miễn phí</a>
                <a href="/features" className="btn btn-secondary">Xem tính năng</a>
              </div>
            </div>
          </div>
        );
      
      case 'split':
        return (
          <div key={index} className={`slide split ${isActive ? 'active' : ''}`} style={getSlideStyle()}>
            <div className="slide-content split-content">
              <div className="split-left">
                <div className="hero-badge"><span>{slide.badge}</span></div>
                <h1 className="hero-title">
                  {slide.title}
                  <span className="gradient-text"> {slide.highlight}</span>
                  <br />
                  {slide.subtitle}
                </h1>
                <p className="hero-description">{slide.description}</p>
                {/* <div className="hero-cta">
                  <a href="/contact" className="btn btn-primary">Dùng thử miễn phí</a>
                </div> */}
              </div>
              <div className="split-right">
                {slideAny.imageUrl ? (
                  <img src={slideAny.imageUrl} alt={slide.title} className="split-visual split-visual-image" />
                ) : (
                  slideAny.image && <div className="split-visual">{slideAny.image}</div>
                )}
              </div>
            </div>
          </div>
        );
      
      case 'minimal':
        return (
          <div key={index} className={`slide minimal ${isActive ? 'active' : ''}`} style={getSlideStyle()}>
            <div className="slide-content minimal-content">
              <div className="hero-badge"><span>{slide.badge}</span></div>
              <h1 className="hero-title minimal-title">
                {slide.title}
                <span className="gradient-text"> {slide.highlight}</span>
              </h1>
              <p className="hero-description minimal-description">{slide.description}</p>
              <div className="hero-cta">
                <a href="/contact" className="btn btn-primary">Bắt đầu ngay</a>
              </div>
            </div>
          </div>
        );
      
      case 'banner':
        return (
          <div key={index} className={`slide banner ${isActive ? 'active' : ''}`} style={getSlideStyle()}>
            <div className="slide-content banner-content">
            
                <div className="hero-badge"><span>{slide.badge}</span></div>
                {slideAny.imageUrl ? (
                  <img src={slideAny.imageUrl} alt={slide.title} className="banner-icon banner-icon-image" />
                ) : (
                  slideAny.image && <div className="banner-icon">{slideAny.image}</div>
                )}

              <h1 className="hero-title banner-title">
                {slide.title}
                <span className="gradient-text"> {slide.highlight}</span>
              </h1>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-stats">
                {stats.map((stat, statIndex) => (
                  <div key={statIndex} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="homepage">
      {/* Hero Slider Section */}
      <section className="hero-slider-section">
        <div className="slider-container">
          {slides.map((slide, index) => renderSlide(slide, index))}
        </div>
        <div className="slider-controls">
          <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous slide">‹</button>
          <button className="slider-btn next" onClick={nextSlide} aria-label="Next slide">›</button>
        </div>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="section-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">
                Về <span className="gradient-text">TEAFLOW</span>
              </h2>
              <p className="about-description">
                TEAFLOW được thành lập với sứ mệnh giúp các doanh nghiệp F&B Việt Nam 
                chuyển đổi số thành công. Chúng tôi hiểu rõ những thách thức của ngành 
                và đã xây dựng giải pháp toàn diện, dễ sử dụng và hiệu quả.
              </p>
              <p className="about-description">
                Với hơn 5 năm kinh nghiệm trong lĩnh vực công nghệ và F&B, đội ngũ của 
                chúng tôi luôn không ngừng cải tiến sản phẩm để đáp ứng nhu cầu ngày càng 
                cao của khách hàng. TEAFLOW đã và đang được tin dùng bởi hơn 10,000 nhà hàng 
                trên khắp cả nước.
              </p>
              <div className="about-features">
                <div className="about-feature-item">
                  <div className="about-feature-icon">🎯</div>
                  <div>
                    <h4>Mục tiêu</h4>
                    <p>Giúp F&B Việt Nam phát triển bền vững</p>
                  </div>
                </div>
                <div className="about-feature-item">
                  <div className="about-feature-icon">💪</div>
                  <div>
                    <h4>Giá trị cốt lõi</h4>
                    <p>Đổi mới, Tin cậy, Tận tâm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-stats">
                <div className="about-stat-card">
                  <div className="about-stat-number">10K+</div>
                  <div className="about-stat-label">Khách hàng</div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-number">5+</div>
                  <div className="about-stat-label">Năm kinh nghiệm</div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-number">50+</div>
                  <div className="about-stat-label">Nhân viên</div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-number">99.9%</div>
                  <div className="about-stat-label">Uptime</div>
                </div>
              </div>
              <div className="about-mission">
                <h3>Sứ mệnh</h3>
                <p>
                  Đơn giản hóa quy trình quản lý, tối ưu hiệu quả vận hành, 
                  giúp các doanh nghiệp F&B tập trung vào phục vụ khách hàng 
                  và phát triển kinh doanh.
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </section>

      {/* Feature Department Section */}
      <section className="departments-section">
       < FeatureDemo />
        {/* <div className="section-container">
          <ScrollAnimate animation="fade-up" className="section-header">
            <h2 className="section-title">Feature Department</h2>
            <p className="section-description">
              Các phòng ban chuyên nghiệp của chúng tôi
            </p>
          </ScrollAnimate>
          <div className="departments-grid">
            {departments.map((dept, index) => (
              <ScrollAnimate key={index} animation="bounce-in" delay={index * 0.1}>
                <div className="department-card">
                  <IconRenderer icon={dept.icon} iconUrl={(dept as any).iconUrl} alt={dept.title} className="department-icon" />
                  <h3 className="department-title">{dept.title}</h3>
                  <p className="department-description">{dept.description}</p>
                  <div className="department-count">
                    <span className="count-number">{dept.count}</span>
                    <span className="count-label">{dept.label}</span>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div> */}
        
      </section>

      {/* Featured Services Section */}
      <section className="featured-services-section py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50/50">
      <div className="section-container container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ScrollAnimate animation="fade-up" className="section-header text-center mb-12">
          <h2 className="section-title text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Dịch Vụ Nổi Bật
          </h2>
          <p className="section-description text-lg md:text-xl text-muted-foreground mt-4">
            Những tính năng cốt lõi giúp chủ quán trà sữa vận hành chuyên nghiệp và tăng trưởng nhanh chóng.
          </p>
         <Home />
        </ScrollAnimate>

      
      </div>
    </section>

      {/* Team Members Section */}
      <section className="team-section">
        <div className="section-container">
          <ScrollAnimate animation="fade-up" className="section-header">
            
            <AnimatedTestimonialsDemo />
            
          </ScrollAnimate>
         
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <ScrollAnimate animation="fade-up" className="section-header">
            <h1 
              ref={headingRef}
              className="text-4xl text-center font-bold tracking-tight sm:text-5xl mb-4"
            >
              Hệ thống quản lý <br /> 
              <span className="gradient-text">thông minh & hiệu quả</span>
            </h1>
            <p 
              ref={textRef}
              className="mt-4 text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto"
            >
              Khám phá các tính năng nổi bật chính giúp TEAFLOW trở thành giải pháp quản lý F&B được yêu thích nhất tại Việt Nam.
            </p>
          <FeaturesDetail />
          </ScrollAnimate>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="section-container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2 className="section-title">
                Tại sao chọn <span className="gradient-text">TEAFLOW</span>?
              </h2>
              <p className="section-description">
                Chúng tôi hiểu những thách thức của ngành F&B và đã xây dựng 
                giải pháp toàn diện để giúp bạn thành công.
              </p>
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="benefit-check">✓</div>
                    <div>
                      <h4 className="benefit-title">{benefit.title}</h4>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="benefits-visual">
              <div className="benefits-card">
                <div className="benefits-stats-grid">
                  <div className="benefit-stat">
                    <div className="benefit-stat-number">+45%</div>
                    <div className="benefit-stat-label">Tăng hiệu quả</div>
                  </div>
                  <div className="benefit-stat">
                    <div className="benefit-stat-number">-30%</div>
                    <div className="benefit-stat-label">Giảm chi phí</div>
                  </div>
                  <div className="benefit-stat">
                    <div className="benefit-stat-number">+60%</div>
                    <div className="benefit-stat-label">Tăng doanh thu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="testimonials-section">
        <div className="section-container">
          <ScrollAnimate animation="fade-up" className="section-header">
            <h2 className="section-title">Khách hàng nói gì về chúng tôi</h2>
            <p className="section-description">
              Hơn 10,000 nhà hàng đã tin tưởng và sử dụng TEAFLOW
            </p>
          </ScrollAnimate>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimate key={index} animation="fade-up" delay={index * 0.15}>
                <div className="testimonial-card">
                  <div className="testimonial-rating">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="testimonial-content">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <ScrollAnimate animation="fade-up" className="cta-content">
            <h2 className="cta-title">Sẵn sàng bắt đầu?</h2>
            <p className="cta-description">
              Dùng thử miễn phí 14 ngày. Không cần thẻ tín dụng. Hủy bất cứ lúc nào.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary btn-large">Bắt đầu ngay</a>
              <a href="/about" className="btn btn-outline btn-large">Liên hệ tư vấn</a>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
