import { API_URL } from "lib";

export default async ({ body }: Request, res: Response) => {
  const {  query } = JSON.parse(body);
  try {
    const data = await fetch(`${API_URL}/search?q=${query}`);
    const json = await data.json();
    res.status(200).json(json);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};