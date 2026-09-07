/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/service-area/long-beach",
        destination: "/service-area/los-angeles-lax",
      },
      {
        source: "/service-area/orange-county",
        destination: "/service-area/los-angeles-lax",
      },
      {
        source: "/service-area/oakland",
        destination: "/service-area/san-francisco-sfo",
      },
    ];
  },
};

export default nextConfig;