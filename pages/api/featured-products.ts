export default async function (req: any, res: any) {
  const response = await fetch(
    "https://desafio-m9-lovat.vercel.app/api/search?search=chair&limit=20&offset=20"
  );
  const data = await response.json();
  const products = data.results.slice(0, 3);
  res.json(products);
}
