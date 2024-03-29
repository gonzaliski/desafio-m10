import { isUserLogged } from "lib";
import { getFavourites } from "lib/api";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { favouriteItemsState } from "recoil/atoms";

export function useFavourites() {
  const [favouriteItems, setFavouriteItems] =
    useRecoilState(favouriteItemsState);

  useEffect(() => {
    const fetchInitialFavourites = async () => {
      try {
        //solo si el usuario esta logeado se puede buscar sus favoritos
        if (isUserLogged()) {
          const initialFavourites = await getFavourites();
          console.log(initialFavourites);

          setFavouriteItems(initialFavourites);
        }
      } catch (error) {
        console.error("Error al obtener los favoritos del usuario:", error);
      }
    };

    fetchInitialFavourites();
  }, []);

  return favouriteItems;
}
