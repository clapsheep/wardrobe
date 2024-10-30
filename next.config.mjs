/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.msscdn.net", "img.29cm.co.kr"], // 추가된 부분
  },
  headers: async () => [
    {
      source: "/images/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=1000, immutable",
        },
      ],
    },
  ],
};

export default nextConfig;
