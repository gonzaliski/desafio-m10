export default async function (req: any, res: any) {
  const response = await fetch(
    "https://preview.contentful.com/spaces/x1j2peljha18/environments/master/entries?content_type=eCommerceBrands&access_token=8HkLEdrPGMe3gdgJ-RZb60sFyXKtvOWaYCG23w8pNkU"
  );
  const data = await response.json();
  res.json(processData(data));
}

function processData(data: any) {
  return data.includes["Asset"].map((i: { fields: any }) => {
    return { name: i.fields.title, image: "https:" + i.fields.file.url };
  });
}
