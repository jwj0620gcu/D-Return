const BASE_ID = "appMAGAikG2aoUD0l";
const TABLES = {
  buy: "tbl6ds2LQAAb7GClZ",
  sell: "tbloK7PT0iuiQLMIp",
};

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    return res.status(500).json({ error: "Missing AIRTABLE_TOKEN" });
  }

  const { kind, fields } = req.body || {};
  const tableId = TABLES[kind];
  if (!tableId || !fields || typeof fields !== "object") {
    return res.status(400).json({ error: "Invalid submission payload" });
  }

  const airtableRes = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${tableId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields }),
  });

  const data = await airtableRes.json().catch(() => ({}));
  if (!airtableRes.ok || data.error) {
    return res.status(airtableRes.status || 500).json({
      error: data.error?.message || data.message || "Airtable request failed",
    });
  }

  return res.status(200).json({ id: data.id });
};
