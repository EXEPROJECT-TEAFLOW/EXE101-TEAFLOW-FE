import ExpandingCard from "../components/ExpandingCard"

const cards = [
  {
    title: "Triển khai nhanh ",
    description:
      "TeaFlow được thiết kế theo mô hình SaaS, giúp chủ quán có thể triển khai hệ thống chỉ trong vòng 24 giờ. Đội ngũ hỗ trợ cung cấp hướng dẫn chi tiết từng bước, hỗ trợ setup ban đầu và đảm bảo quán có thể vận hành ngay mà không cần kiến thức kỹ thuật.",
    image: "/image1.1.jpg?height=200&width=400",
  },
  {
    title: "Hỗ trợ & bảo trì 24/7",
    description:
      "CHệ thống TeaFlow được giám sát liên tục và hỗ trợ kỹ thuật 24/7. Mọi sự cố phát sinh trong quá trình vận hành sẽ được xử lý nhanh chóng, giúp quán duy trì hoạt động ổn định và không làm gián đoạn việc bán hàng.",
    image: "/image1.2.jpg?height=200&width=400",
  },
  {
    title: "Đào tạo nhân viên miễn phí",
    description:
      "TeaFlow cung cấp chương trình đào tạo nhân viên miễn phí, giúp quán nhanh chóng làm quen với hệ thống và sử dụng hiệu quả các tính năng. Đội ngũ đào tạo tận tình hỗ trợ từ cơ bản đến nâng cao, đảm bảo nhân viên có thể vận hành trơn tru.",
    image: "/image1.3.jpg?height=200&width=400",
  },
  {
    title: "Cập nhật tính năng liên tục",
    description:
      "TeaFlow được cải tiến và cập nhật thường xuyên với các tính năng mới hoàn toàn miễn phí. Hệ thống luôn lắng nghe phản hồi từ người dùng để tối ưu trải nghiệm, đảm bảo phù hợp với nhu cầu thực tế của các quán trà sữa.",
    image: "/image1.4.jpg?height=200&width=400",
  },
  {
    title: "Tư vấn & tối ưu vận hành",
    description:
      "TeaFlow cung cấp dịch vụ tư vấn và tối ưu vận hành, giúp quán nâng cao hiệu quả quản lý và kinh doanh. Đội ngũ chuyên gia hỗ trợ phân tích dữ liệu, đề xuất giải pháp phù hợp và đồng hành cùng quán trong quá trình phát triển.",
    image: "/image1.5.jpg?height=200&width=400",
  },
  {
    title: "Bảo mật dữ liệu cao",
    description:
      'Dữ liệu của quán được bảo mật nghiêm ngặt với cơ chế phân quyền rõ ràng, sao lưu tự động định kỳ và tuân thủ các tiêu chuẩn bảo mật. Chủ quán có thể yên tâm khi toàn bộ dữ liệu kinh doanh luôn được bảo vệ an toàn.',
    image: "/image1.6.jpg",
  },
]

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <ExpandingCard key={index} title={card.title} description={card.description} image={card.image} />
        ))}
      </div>
    </main>
  )
}
