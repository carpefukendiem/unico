import type { MetadataRoute } from "next"

const BASE_URL = "https://www.unicofutbolclub.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/coaches", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/camps", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/tryouts", changeFrequency: "monthly" as const, priority: 0.7 },
    {
      path: "/registration",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/resources/parent-player-agreement",
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      path: "/resources/parent-training-agreement",
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
  ]

  return staticPages.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
