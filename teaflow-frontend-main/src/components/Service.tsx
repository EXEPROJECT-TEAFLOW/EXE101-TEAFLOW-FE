import ScrollAnimate from '@/animate/ScrollAnimate';
import { Code, BarChart3, Store, TrendingUp } from 'lucide-react'; // Import icons phù hợp

// Dữ liệu mẫu cho Featured Services (bạn có thể thay bằng props hoặc fetch)
const featuredServices = [
  {
    title: "POS Bán Hàng Nhanh",
    description: "Giao diện POS tại quầy siêu tốc, hỗ trợ chọn size, topping, sweetness chỉ trong 1-2 cú chạm.",
    icon: <Code className="w-10 h-10" />, // Hoặc dùng SVG/icon khác
    color: "#10b981", // Xanh trà
    iconUrl: null, // Nếu dùng img, set URL ở đây
  },
  {
    title: "Dashboard Phân Tích",
    description: "Tổng quan doanh thu, lợi nhuận, tồn kho theo thời gian thực với biểu đồ đẹp mắt.",
    icon: <BarChart3 className="w-10 h-10" />,
    color: "#8b5cf6", // Tím nhạt
    iconUrl: null,
  },
  {
    title: "Multi-Branch Quản Lý",
    description: "Quản lý nhiều quán cùng lúc, so sánh hiệu suất giữa các chi nhánh dễ dàng.",
    icon: <Store className="w-10 h-10" />,
    color: "#ea580c", // Nâu cam trân châu
    iconUrl: null,
  },
  {
    title: "Báo Cáo & Tối Ưu",
    description: "Phát hiện xu hướng, xếp hạng quán, hỗ trợ ra quyết định kinh doanh dựa trên dữ liệu.",
    icon: <TrendingUp className="w-10 h-10" />,
    color: "#22c55e", // Xanh lá sáng
    iconUrl: null,
  },
];

function FeaturedServices() {
  return (
    <section className="featured-services-section py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50/50">
      <div className="section-container container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ScrollAnimate animation="fade-up" className="section-header text-center mb-12">
          <h2 className="section-title text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Dịch Vụ Nổi Bật
          </h2>
          <p className="section-description text-lg md:text-xl text-muted-foreground mt-4">
            Những tính năng cốt lõi giúp chủ quán trà sữa vận hành chuyên nghiệp và tăng trưởng nhanh chóng.
          </p>
        </ScrollAnimate>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredServices.map((service, index) => (
            <ScrollAnimate key={index} animation="scale-in" delay={index * 0.1}>
              <div
                className="service-card bg-gradient-to-br from-gray-50/40 to-white/10 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8 flex flex-col items-center text-center border border-gray-200/30 h-full"
                style={{ '--service-color': service.color } as React.CSSProperties}
              >
                <div className="service-icon-wrapper mb-6">
                  {service.iconUrl ? (
                    <img
                      src={service.iconUrl}
                      alt={service.title}
                      className="service-icon service-icon-image w-16 h-16 rounded-full object-cover"
                      style={{ background: `${service.color}20` }}
                    />
                  ) : (
                    <div
                      className="service-icon w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: `${service.color}20`, color: service.color }}
                    >
                      {service.icon}
                    </div>
                  )}
                </div>
                <h3 className="service-title text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="service-description text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;