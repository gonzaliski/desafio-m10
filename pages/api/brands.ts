export default async function (req: any, res: any) {
  try {
    const response = await fetch(
      `https://preview.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?content_type=eCommerceBrands&access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
    );
    const data = await response.json();
    console.log(data);

    res.json(processData(data));
  } catch (e) {
    res.json(e);
  }
}

function processData(data: any) {
  return data.includes["Asset"].map((i: { fields: any }) => {
    return { name: i.fields.title, image: "https:" + i.fields.file.url };
  });
}
