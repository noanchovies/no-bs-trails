import { MetadataRoute } from 'next';
import siteConfig from "@/data/site-config.json"; 

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.siteName,
    short_name: siteConfig.siteName,
    description: "A mobile-first PWA template",
    start_url: '/',
    display: 'standalone',
    background_color: '#121212',
    theme_color: '#E12828',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
