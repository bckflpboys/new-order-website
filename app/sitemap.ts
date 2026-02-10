import { MetadataRoute } from 'next';

const BASE_URL = 'https://movie-pro.32d.one';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/how-it-works',
        '/vs-letterboxd',
        '/privacy-policy',
        '/tos',
    ];

    return routes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
    }));
}
