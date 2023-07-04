export default async function (req: any, res: any) {
  const url = "http://localhost:3001/api";
  const response = await fetch(url + "/products/featured");
  const data = await response.json();
  const products = data.results;
  res.json(products);
}
