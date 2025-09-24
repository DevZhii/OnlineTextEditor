import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const filePath = path.join(process.cwd(), "data.json");
    const body = req.body;

    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), "utf8");
    res.status(200).json({ message: "Saved!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
