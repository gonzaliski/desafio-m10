export default async function (req: any, res: any) {
  try {
    const url =
      "https://preview.contentful.com/spaces/" +
      process.env.CONTENTFUL_SPACE_ID +
      "/environments/master/entries?content_type=eCommerceBanner&access_token=" +
      process.env.CONTENTFUL_ACCESS_TOKEN;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    res.json(processData(data));
  } catch (e) {
    res.json(e);
  }
}

function processData(data: any) {
  // Crear un objeto para almacenar las imágenes agrupadas
  let groupedImagesList: {
    id: string;
    desktop: string;
    mobile: string;
    query: any;
  }[] = [];
  // Recorrer los items de la respuesta
  data.items.forEach((item: any) => {
    const desktopImageId = item.fields.desktop.sys.id;
    const mobileImageId = item.fields.mobile.sys.id;
    const query = item.fields.query;

    // Buscar las imágenes correspondientes en el includes
    const desktopImage = data.includes.Asset.find(
      (asset: any) => asset.sys.id === desktopImageId
    );
    const mobileImage = data.includes.Asset.find(
      (asset: any) => asset.sys.id === mobileImageId
    );

    // Verificar si se encontraron ambas imágenes
    if (desktopImage && mobileImage) {
      const entryId = item.sys.id;

      // Almacenar las imágenes agrupadas en el objeto
      groupedImagesList.push({
        id: entryId,
        query,
        desktop: "https:" + desktopImage.fields.file.url,
        mobile: "https:" + mobileImage.fields.file.url,
      });
    }
  });

  return groupedImagesList;
}
