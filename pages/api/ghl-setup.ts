import type { NextApiRequest, NextApiResponse } from "next"

// =============================================================================
// GHL Setup Diagnostic Endpoint (Temporary)
// Protected by x-setup-token header. Proxies GET requests to the GHL API
// so you can inspect pipelines, users, custom fields, etc.
// =============================================================================

const GHL_BASE = "https://services.leadconnectorhq.com"
const API_KEY = process.env.GHL_API_KEY || ""
const LOCATION_ID = process.env.GHL_LOCATION_ID || ""
const SETUP_TOKEN = process.env.GHL_SETUP_TOKEN || ""

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // ---- Auth guard ----
  const token = req.headers["x-setup-token"]
  if (!SETUP_TOKEN || token !== SETUP_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" })
  }

  // ---- Only GET ----
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  // ---- Determine which GHL resource to fetch ----
  const resource = (req.query.resource as string) || "pipelines"

  const endpoints: Record<string, string> = {
    pipelines: `/opportunities/pipelines?locationId=${LOCATION_ID}`,
    users: `/users/?locationId=${LOCATION_ID}`,
    customFields: `/locations/${LOCATION_ID}/customFields`,
    workflows: `/workflows/?locationId=${LOCATION_ID}`,
    contacts: `/contacts/?locationId=${LOCATION_ID}&limit=5`,
    calendars: `/calendars/?locationId=${LOCATION_ID}`,
    tags: `/locations/${LOCATION_ID}/tags`,
  }

  const path = endpoints[resource]
  if (!path) {
    return res.status(400).json({
      error: `Unknown resource "${resource}"`,
      available: Object.keys(endpoints),
    })
  }

  try {
    const response = await fetch(`${GHL_BASE}${path}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
    })

    const data = await response.json()

    return res.status(200).json({
      resource,
      locationId: LOCATION_ID,
      data,
    })
  } catch (err) {
    console.error("GHL setup proxy error:", err)
    return res.status(500).json({ error: "Failed to fetch from GHL" })
  }
}
