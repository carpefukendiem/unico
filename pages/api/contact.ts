import type { NextApiRequest, NextApiResponse } from "next"

// =============================================================================
// GHL (GoHighLevel) Contact / Lead API Route
// Receives form submissions and creates contacts, opportunities, and notes.
// =============================================================================

const GHL_BASE = "https://services.leadconnectorhq.com"
const API_KEY = process.env.GHL_API_KEY || ""
const LOCATION_ID = process.env.GHL_LOCATION_ID || ""
const PIPELINE_ID = process.env.GHL_PIPELINE_ID || ""
const STAGE_ID = process.env.GHL_PIPELINE_STAGE_ID || ""
const WORKFLOW_ID = process.env.GHL_WORKFLOW_ID || ""
const OWNER_USER_ID = process.env.GHL_OWNER_USER_ID || ""

// ---------------------------------------------------------------------------
// Anti-spam helpers
// ---------------------------------------------------------------------------
const SPAM_EMAIL_PATTERNS = [
  /remotetact/i,
  /intellagency/i,
  /flowchat/i,
  /vettedvas/i,
]
const SPAM_COMPANY_PATTERNS = [
  /^[A-Za-z0-9]{18,}$/,
  /flowchat/i,
  /seo/i,
  /lead generation/i,
]
const MIN_FILL_MS = 4000

function isBot(
  hp: string,
  email: string,
  company: string,
  mountTime: string
): boolean {
  if (hp) return true
  if (SPAM_EMAIL_PATTERNS.some((p) => p.test(email))) return true
  if (company && SPAM_COMPANY_PATTERNS.some((p) => p.test(company))) return true
  if (mountTime) {
    const elapsed = Date.now() - parseInt(mountTime, 10)
    if (!isNaN(elapsed) && elapsed < MIN_FILL_MS) return true
  }
  return false
}

// ---------------------------------------------------------------------------
// GHL API helper
// ---------------------------------------------------------------------------
async function ghlFetch(
  path: string,
  body: Record<string, unknown>
): Promise<Record<string, unknown>> {
  const res = await fetch(`${GHL_BASE}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
    body: JSON.stringify(body),
  })
  return res.json() as Promise<Record<string, unknown>>
}

// ---------------------------------------------------------------------------
// CORS headers
// ---------------------------------------------------------------------------
function setCorsHeaders(res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  setCorsHeaders(res)

  // Preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end()
  }

  // Only POST allowed
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const {
      name = "",
      email = "",
      phone = "",
      playerAge = "",
      message = "",
      source = "Website",
      company = "",
      _hp = "",
      _t = "",
    } = req.body || {}

    // ----- Bot check -----
    if (isBot(_hp, email, company, _t)) {
      // Return success so bots don't retry
      return res.status(200).json({ success: true })
    }

    // ----- Parse name -----
    const nameParts = String(name).trim().split(/\s+/)
    const firstName = nameParts[0] || ""
    const lastName = nameParts.slice(1).join(" ") || ""

    // ----- 1. Create / update contact -----
    const contactPayload: Record<string, unknown> = {
      locationId: LOCATION_ID,
      firstName,
      lastName,
      email: String(email).trim(),
      phone: String(phone).trim(),
      tags: ["Website Lead", "Unico FC"],
      source,
      customFields: [
        { key: "player_age", field_value: String(playerAge) },
        { key: "message", field_value: String(message) },
      ],
    }

    const contactRes = await ghlFetch("/contacts/", contactPayload)
    const contact = (contactRes.contact || contactRes) as Record<string, string>
    const contactId = contact.id || ""

    // ----- 2. Create opportunity -----
    if (contactId && PIPELINE_ID && STAGE_ID) {
      const oppPayload: Record<string, unknown> = {
        locationId: LOCATION_ID,
        pipelineId: PIPELINE_ID,
        pipelineStageId: STAGE_ID,
        contactId,
        name: `${name} — Player Inquiry — Unico FC`,
        status: "open",
      }
      if (OWNER_USER_ID) {
        oppPayload.assignedTo = OWNER_USER_ID
      }
      await ghlFetch("/opportunities/", oppPayload).catch(() => {})
    }

    // ----- 3. Enroll in workflow -----
    if (contactId && WORKFLOW_ID) {
      await ghlFetch(`/contacts/${contactId}/workflow/${WORKFLOW_ID}`, {
        eventStartTime: new Date().toISOString(),
      }).catch(() => {})
    }

    // ----- 4. Create note -----
    if (contactId) {
      const noteLines = [
        `New website lead from ${source}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        playerAge ? `Player Age: ${playerAge}` : "",
        message ? `Message: ${message}` : "",
      ]
        .filter(Boolean)
        .join("\n")

      await ghlFetch(`/contacts/${contactId}/notes`, {
        body: noteLines,
      }).catch(() => {})
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error("Contact API error:", err)
    // Graceful degradation: always return success to the frontend
    return res.status(200).json({ success: true })
  }
}
