export default async function (req: any, res: any) {
  const url = "http://localhost:3001/api";
  const response = await fetch(url + "/search?search=nike&limit=20&offset=20");
  const data = await response.json();
  const products = data.results;
  res.json(products);
}
