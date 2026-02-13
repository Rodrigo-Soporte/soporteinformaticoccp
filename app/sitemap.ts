import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://soporteinformaticaccp.cl",
      lastModified: new Date(),
    },
    {
      url: "https://soporteinformaticaccp.cl/servicios",
      lastModified: new Date(),
    },
    {
      url: "https://soporteinformaticaccp.cl/quienes-somos",
      lastModified: new Date(),
    },
    {
      url: "https://soporteinformaticaccp.cl/contacto",
      lastModified: new Date(),
    },
  ];
}

