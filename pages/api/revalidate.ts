import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {

  if (req.query.secret !== "123456") {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate("/about");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
