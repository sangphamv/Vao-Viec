/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,mjs,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: '#F7F5F0', // Nền chính
          surface: '#B3A795',    // Cấu trúc/Border/Card
          foreground: '#1C1B1A', // Chữ chính
          accent: '#FF5722',     // Nhấn
          card: '#FFFFFF',       // Nền thẻ Card nổi bật
          muted: '#6F6A62',      // Chữ phụ / mờ
        },
        // Dark Mode
        dark: {
          background: '#161413', // Nền chính
          surface: '#2D2724',    // Cấu trúc/Card
          foreground: '#E6DFD3', // Chữ chính
          accent: '#00F5D4',     // Nhấn
          card: '#1E1B19',       // Nền thẻ Card tối
          muted: '#968E85',      // Chữ phụ / mờ
        },
      },
      // 👇 TÙY CHỈNH BORDER & RING TẠI ĐÂY
      borderColor: theme => ({
        DEFAULT: '#B3A795', // Khi viết class "border", nó sẽ tự lấy màu Taupe này (Light Mode)
      }),
      ringOffsetColor: {
        // Tạo sẵn các khoảng đệm trùng với màu nền để hiệu ứng ring "gầm" lên đẹp hơn
        'light': '#F7F5F0', 
        'dark': '#161413',
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.light.foreground'),
            '--tw-prose-headings': theme('colors.light.foreground'),
            '--tw-prose-links': theme('colors.light.accent'),
            '--tw-prose-bold': theme('colors.light.foreground'),
            '--tw-prose-quotes': theme('colors.light.foreground'),
            '--tw-prose-quote-borders': theme('colors.light.surface'),
            '--tw-prose-code': theme('colors.light.foreground'),
            '--tw-prose-hr': theme('colors.light.surface'),
            '--tw-prose-th-borders': theme('colors.light.surface'),
            '--tw-prose-td-borders': theme('colors.light.surface'),
            a: {
              color: theme('colors.light.accent'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeftWidth: '2px',
              fontStyle: 'normal',
              color: 'inherit',
            },
            code: {
              fontWeight: '400',
              backgroundColor: 'rgba(0,0,0,0.05)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': 'rgba(230, 223, 211, 0.7)',
            '--tw-prose-headings': theme('colors.dark.foreground'),
            '--tw-prose-links': theme('colors.dark.accent'),
            '--tw-prose-bold': theme('colors.dark.foreground'),
            '--tw-prose-quotes': theme('colors.dark.foreground'),
            '--tw-prose-quote-borders': theme('colors.dark.surface'),
            '--tw-prose-code': theme('colors.dark.foreground'),
            '--tw-prose-hr': theme('colors.dark.surface'),
            '--tw-prose-th-borders': theme('colors.dark.surface'),
            '--tw-prose-td-borders': theme('colors.dark.surface'),
            a: {
              color: theme('colors.dark.accent'),
            },
            code: {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            ).replace(/ /g, "%20")}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            ).replace(/ /g, "%20")}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            ).replace(/ /g, "%20")}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
