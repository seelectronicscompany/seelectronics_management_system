import { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-b7899c318e61486a9064d03a5d18f99c.r2.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "seelectronics-dashboard-media.502db6a88eaf3d5e6b4ed9aa91d8fcd9.r2.cloudflarestorage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "502db6a88eaf3d5e6b4ed9aa91d8fcd9.r2.cloudflarestorage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  serverExternalPackages: ["puppeteer-core", "@sparticuz/chromium"],
  outputFileTracingIncludes: {
    "/": ["./src/assets/**/*"],
  },
  experimental: {
    // missingSuspenseWithCSRBailout: false,
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  async redirects() {
    return [
      {
        source: "/servicestatus",
        destination: "/service-report",
        permanent: true,
      },
      {
        source: "/feedback",
        destination: "/service-feedback",
        permanent: true,
      },
      {
        source: "/servicetrack",
        destination: "/service-track",
        permanent: true,
      },
      {
        source: "/applicationtrack",
        destination: "/application-track",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
