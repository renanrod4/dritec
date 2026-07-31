// Sitemap for https://dri.tec.br/
// The site is a SPA, but we still want to provide a sitemap for SEO purposes. 
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {

    return [
        {
            url: 'https://dri.tec.br/',
            lastModified: new Date(),
            priority: 1.0,
        },
    ]
}