export const SITE_CONFIG = {
  // Tiêu đề mặc định của trang web
  title: "Vock Tech - Cập nhật xu hướng Công nghệ & AI thực chiến",

  // Tên thương hiệu / Tên blog (dùng cho copyright, logo alt, v.v.)
  siteName: "Vock Tech",

  // Mô tả mặc định cho SEO
  description: "Website chia sẻ thủ thuật công nghệ, kiến thức AI, IT, Marketing và xu hướng kỷ nguyên số.",

  // Ngôn ngữ chính của trang web (dùng cho thẻ <html lang="...">)
  lang: "vi",

  // Thông tin liên hệ mặc định
  contact: {
    email: "sangphamv.ee@gmail.com",
    phone: "(+84) 707297069",
    address: "Q6, TP. Ho Chi Minh",
  },

  // Mạng xã hội / Footer links
  social: {
    github: "https://github.com/sangphamv",
    website: "https://vocktech.pages.dev/"
  },

  // ---------------------------------------------------------
  // CÁC TÍCH HỢP (INTEGRATIONS) BÊN THỨ 3
  // ---------------------------------------------------------

  // 1. Bình luận Giscus (Dùng Github Discussions)
  giscus: {
    enabled: true,
    repo: "sangphamv/VockTech",
    repoId: "R_kgDOS9Ezzg",
    category: "Announcements",
    categoryId: "DIC_kwDOS9Ezzs4C_trU",
    mapping: "pathname", // Sử dụng URL bài viết làm định danh
    strict: "0",
    reactionsEnabled: "1",
    emitMetadata: "0",
    inputPosition: "bottom",
    lang: "vi",
    loading: "lazy",
  },

  // 2. Phân tích & SEO (Google Analytics, Search Console)
  analytics: {
    ga4: {
      enabled: true,
      measurementId: "G-5M98B4LLJS", // Thay bằng mã GA4 của bạn
    },
    searchConsole: {
      enabled: true,
      metaVerification: "MZCOtIY9CXB2F2E5voyhF9lgftWUeoU5_TfFlWyD9gE", // Dùng cho thẻ <meta name="google-site-verification">
    },
  },

  // 3. Cấu hình Form (Liên hệ, Nhận bản tin)
  forms: {
    contact: {
      enabled: true,
      // Endpoint gửi data (ví dụ dùng Formspree, Getform.io, hoặc API riêng của bạn)
      endpoint: "https://formspree.io/f/YOUR_FORM_ID",
    },
    newsletter: {
      enabled: true,
      // Endpoint đăng ký email (Mailchimp, ConvertKit, Buttondown, v.v.)
      endpoint: "https://buttondown.email/api/emails/run-form-submit",
    }
  },

  // 4. Các tuỳ chỉnh UI chung
  ui: {
    enableThemeToggle: true, // Nút bật/tắt dark mode
    enableBackToTop: true,   // Nút cuộn lên đầu trang
  }
};
