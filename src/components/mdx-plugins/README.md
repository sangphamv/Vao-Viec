# Hướng dẫn sử dụng Plugin PromptGallery trong MDX

Plugin `PromptGallery` là một công cụ giúp bạn dễ dàng nhúng các thẻ ảnh (chứa Prompt AI và nút Copy nhanh) ngay bên trong các bài viết blog Markdown/MDX của Astro.

---

## 1. Mục đích
Thay vì phải tạo một trang thư viện ảnh riêng biệt, plugin này giúp bạn tạo ra các "mini-gallery" ngay phía dưới hoặc chèn vào giữa nội dung bài viết hướng dẫn của bạn (ví dụ: chia sẻ kinh nghiệm tạo ảnh bằng Midjourney, ChatGPT, Gemini...).

---

## 2. Cấu trúc thư mục bài viết
Để mọi thứ gọn gàng và dễ quản lý nhất (Co-location), bạn nên gom tất cả file liên quan đến một bài viết vào một thư mục riêng:

```text
src/content/blog/ten-bai-viet-cua-ban/
├── index.mdx              <-- File nội dung bài viết chính
└── images/                <-- Thư mục chứa các ảnh sử dụng trong bài
    ├── hinh-anh-1.jpg
    └── hinh-anh-2.png
```

---

## 3. Cách viết nội dung (`index.mdx`)

Dưới đây là template chuẩn để bạn copy và paste mỗi khi cần viết một bài mới có sử dụng plugin này.

```mdx
---
title: "Tiêu đề bài viết của bạn"
excerpt: "Mô tả ngắn gọn về bài viết (bắt buộc phải có để hiển thị ngoài trang chủ blog)."
publishDate: "2026-06-30T00:00:00.000Z"
category: "ca-nhan"
draft: false
image: "./images/hinh-anh-1.jpg"
author: "ten-tac-gia"
tags: ["ai", "midjourney", "prompt-engineering"]
---

{/* 1. IMPORT PLUGIN VÀ HÌNH ẢNH Ở NGAY DƯỚI DẤU --- */}
import PromptGallery from '@/components/mdx-plugins/PromptGallery.astro';
import img1 from './images/hinh-anh-1.jpg';
import img2 from './images/hinh-anh-2.png';

{/* 2. NỘI DUNG BÀI VIẾT BÌNH THƯỜNG */}
Chào các bạn, hôm nay mình sẽ hướng dẫn cách viết prompt để tạo ra những bức ảnh đẹp...

*(Viết nội dung ở đây... Bạn có thể dùng Markdown bình thường như **in đậm**, *in nghiêng*, list...)*

### Danh sách Prompt tham khảo

{/* 3. NHÚNG PLUGIN VÀ TRUYỀN DỮ LIỆU */}
Dưới đây là một số prompt mẫu, bấm nút để copy nhé:

<PromptGallery 
  items={[
    {
      title: "Chân dung Nữ phong cách Cyberpunk",
      prompt: "Close up portrait of a young woman in cyberpunk style, neon lights...",
      image: img1 // ← Truyền biến hình ảnh đã import ở trên vào đây
    },
    {
      title: "Phong cảnh tương lai",
      prompt: "A beautiful futuristic city, flying cars, glowing skyscrapers...",
      image: img2
    }
  ]}
/>

Cảm ơn các bạn đã đọc bài!
```

---

## 4. Những lưu ý quan trọng
- **Bắt buộc dùng định dạng `.mdx`**: Vì Markdown thuần (`.md`) không hỗ trợ import Component. Hãy luôn tạo file là `index.mdx`.
- **Luôn import ảnh trực tiếp**: Bằng cú pháp `import img from './images/...'`, Astro sẽ lấy được thông tin ảnh gốc và tự động nén kích thước, chuyển sang định dạng AVIF siêu nhẹ để tối ưu tốc độ website (SSG Performance). KHÔNG dùng đường dẫn URL dạng chuỗi (ví dụ: `"/images/..."`) ở thuộc tính `image`.
- **Trường Meta-data (Frontmatter)**: Luôn đảm bảo bạn điền đầy đủ các trường yêu cầu ở đầu file (`title`, `excerpt`, `publishDate`, `category`, `image`) để không bị lỗi build.

---

## 5. Plugin Mới: Download Card

Plugin `DownloadCard` giúp bạn cung cấp các file chất lượng cao (Preset, PDF, Source code...) cho người đọc tải về. Nó có tích hợp sẵn tính năng đếm ngược thời gian (Countdown timer) để tăng Time-on-page.

**Cách dùng:**
```mdx
import DownloadCard from '@/components/mdx-plugins/DownloadCard.astro';

Dưới đây là file quà tặng:

<DownloadCard 
  title="Preset Lightroom Cyberpunk V1" 
  description="Bao gồm 5 file .xmp tương thích với Lightroom Mobile & PC"
  fileSize="2.4 MB" 
  fileType="zip" 
  url="/downloads/preset-cyberpunk-v1.zip" 
  waitTime={5} 
/>
```

**Các Props:**
- `title` (Bắt buộc): Tên file.
- `description` (Tùy chọn): Mô tả ngắn (1 dòng).
- `fileSize` (Bắt buộc): Kích thước hiển thị (VD: "2.4 MB").
- `fileType` (Bắt buộc): Chấp nhận các loại `zip`, `pdf`, `psd`, hoặc bất kỳ chữ nào. Màu sắc icon sẽ thay đổi tùy theo loại.
- `url` (Bắt buộc): Đường dẫn file (nên bỏ vào thư mục `public/downloads/...`).
- `waitTime` (Tùy chọn): Số giây chờ đếm ngược trước khi tự động tải (Mặc định là 5s).
