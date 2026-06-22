# Kho Số - Blog & Website

Chào mừng đến với mã nguồn của **Kho Số**, một trang blog chia sẻ kiến thức về lập trình, công nghệ, thiết kế và cuộc sống. 
Trang web được xây dựng dựa trên Astro, MDX, TailwindCSS và hệ thống quản trị nội dung Keystatic.

🌍 **Live Demo:** [https://khoso.pages.dev/](https://khoso.pages.dev/)

## Tính năng chính

- ⚡️ Tốc độ tải trang cực nhanh với **Astro**
- 🎨 Giao diện tùy biến dễ dàng với **TailwindCSS**
- 📝 Viết bài bằng Markdown/MDX
- 🗄️ Quản lý nội dung trực quan với **Keystatic**
- 📱 Responsive 100% trên mọi thiết bị
- 🌙 Hỗ trợ Dark/Light mode
- 🔍 Tối ưu hóa SEO

## Cài đặt và Chạy thử (Development)

### 1. Clone repository

```bash
git clone https://github.com/sangphamv/Van-Sang-gogh.git
cd Van-Sang-gogh
```

### 2. Cài đặt thư viện

Bạn có thể sử dụng `npm`, `yarn`, hoặc `pnpm`:

```bash
npm install
# hoặc
yarn install
# hoặc (khuyên dùng)
pnpm install
```

### 3. Chạy Development Server

```bash
npm run dev
# hoặc
yarn dev
# hoặc (khuyên dùng)
pnpm dev
```

Mở trình duyệt ở địa chỉ `http://localhost:4321` để xem kết quả.
Để quản lý nội dung (Thêm, Sửa, Xóa bài viết/danh mục) với Keystatic, truy cập `http://localhost:4321/keystatic`.

## Build & Preview (Production)

```bash
npm run build
npm run preview
# hoặc
yarn build
yarn preview
# hoặc (khuyên dùng)
pnpm build
pnpm preview
```

## Cấu trúc thư mục

```text
/
├── public/           # Chứa các tài nguyên tĩnh (hình ảnh, favicon...)
├── src/
│   ├── assets/       # Hình ảnh dùng chung
│   ├── components/   # Các UI Component (Astro, React)
│   ├── content/      # Bài viết (blog) và danh mục (categories)
│   ├── layouts/      # Layout chung của trang
│   ├── pages/        # Định tuyến (Routes)
│   ├── utils/        # Các hàm tiện ích
│   └── site.config.ts # File cấu hình thông tin website (Tiêu đề, URL...)
├── astro.config.mjs  # Cấu hình chính của Astro
├── keystatic.config.ts # Cấu hình cho CMS Keystatic
└── package.json
```

## Thay đổi cấu hình website

Để thay đổi thông tin chung của trang web (Tiêu đề, mô tả, thông tin liên hệ, mạng xã hội), bạn chỉnh sửa file `src/site.config.ts`.

```typescript
export const SITE_CONFIG = {
  title: "Kho Số",
  siteName: "Kho Số",
  description: "Website chia sẻ về lập trình, công nghệ, và cuộc sống...",
  // ...
};
```

---

_Được xây dựng với ❤️ bằng [Astro](https://astro.build/)_
