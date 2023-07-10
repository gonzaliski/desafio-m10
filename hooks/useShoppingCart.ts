import { isUserLogged } from "lib";
import { getShoppingCart } from "lib/api";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { shoppingCartState } from "recoil/atoms";

export function useShoppingCart() {
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);

  useEffect(() => {
    const fetchInitialCart = async () => {
      try {
        //solo si el usuario esta logeado se puede buscar sus favoritos
        if (isUserLogged()) {
          const initialCart = await getShoppingCart();
          console.log(initialCart);

          setShoppingCart(initialCart);
        }
      } catch (error) {
        console.error("Error al obtener los favoritos del usuario:", error);
      }
    };

    fetchInitialCart();
  }, []);

  return shoppingCart;
}
