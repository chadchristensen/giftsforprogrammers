/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/dswjpamey/**'
            }
        ],
    },
};

export default nextConfig;
