/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://www.figma.com/design/WjMv2QJPXmsqLYlTKA7SYG/Food-Delivery-App-UI-Kit-Food-App-Design-Food-Mobile-App-Delivery-UI-(Community)?node-id=361-2286&p=f&t=chP8onnptNUPqk2b-0'], // Add the hosting domain of your image here
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
