export default async function (req: any, res: any) {
  const url = "https://desafio-m9-lovat.vercel.app/api";
  const response = await fetch(
    "https://desafio-m9-lovat.vercel.app/api/products/featured",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const data = await response.json();
  const products = data.results;
  res.json(products);
}
