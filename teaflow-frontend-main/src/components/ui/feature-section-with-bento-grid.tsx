import { Code, Palette, Package, Handshake } from 'lucide-react';

function Feature() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 to-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Header & Intro */}
          <div className="flex flex-col gap-4 md:gap-6 items-center max-w-3xl mx-auto">
  <h2 className="text-3xl md:text-5xl font-bold text-center" style={{color: '#2F80ED'}}>
   Đội ngũ chuyên gia từ chúng tôi
  </h2>
  <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
   Đội ngũ TeaFlow được xây dựng từ 4 phòng ban chuyên sâu, kết hợp công nghệ hiện
đại, thiết kế tinh tế, sản phẩm thực tiễn và kinh doanh am hiểu ngành F&B Việt Nam –
giúp chủ quán trà sữa vận hành hiệu quả và mở rộng chuỗi dễ dàng.
  </p>
</div>

          {/* Grid Departments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Phòng Công Nghệ - Card lớn */}
            <div className="lg:col-span-2">
              <div className="bg-white from-emerald-50/30 to-white/10 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8 flex flex-col gap-4 border border-emerald-100/50 h-full">
                <Code className="w-12 h-12 text-emerald-600" strokeWidth={1.5} />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900" style={{color: '#2F80ED'}}>
                  Phòng Công Nghệ (Technology)
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Đội ngũ kỹ sư và lập trình viên giàu kinh nghiệm xây dựng nền tảng TeaFlow vững chắc, an toàn và tốc độ cao. Từ backend multi-tenant, POS thời gian thực đến dashboard phân tích dữ liệu phức tạp – chúng tôi đảm bảo hệ thống luôn ổn định, dễ mở rộng khi bạn từ 1 quán lên chuỗi lớn.
                </p>
              </div>
            </div>

            {/* Phòng Thiết Kế */}
            <div className="bg-white from-purple-50/30 to-white/10 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8 flex flex-col gap-4 border border-purple-100/50">
              <Palette className="w-12 h-12 text-purple-600" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900" style={{color: '#2F80ED'}}>
                Phòng Thiết Kế (Design)
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Tập trung vào trải nghiệm người dùng (UX/UI) thân thiện, phù hợp với chủ quán và nhân viên quầy bận rộn. Giao diện POS nhanh, trực quan (chọn topping, size chỉ 1-2 cú chạm), dashboard đẹp mắt với biểu đồ dễ hiểu.
              </p>
            </div>

            {/* Phòng Sản Phẩm */}
            <div className="bg-white from-green-50/30 to-white/10 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8 flex flex-col gap-4 border border-green-100/50">
              <Package className="w-12 h-12 text-green-600" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900" style={{color: '#2F80ED'}}>
                Phòng Sản Phẩm (Product)
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Chuyên gia sản phẩm kết hợp insight từ hàng trăm chủ quán trà sữa thực tế để định hình tính năng cốt lõi: báo cáo so sánh hiệu suất, quản lý kho tự động, thống kê nhân viên. Chúng tôi luôn cập nhật để TeaFlow dẫn đầu ngành.
              </p>
            </div>

            
          </div>
          {/* Phòng Kinh Doanh - Card lớn */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="bg-white from-amber-50/30 to-white/10 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8 flex flex-col gap-4 border border-amber-100/50 h-full">
                <Handshake className="w-12 h-12 text-amber-600" strokeWidth={1.5} />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900" style={{color: '#2F80ED'}}>
                  Phòng Kinh Doanh (Business)
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Đội ngũ am hiểu thị trường F&B Việt Nam, hỗ trợ mô hình subscription linh hoạt, tư vấn mở rộng kinh doanh và tối ưu lợi nhuận. Chúng tôi không chỉ cung cấp công cụ – mà còn đồng hành giúp chuỗi trà sữa của bạn phát triển bền vững.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export { Feature };