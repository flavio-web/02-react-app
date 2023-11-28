import { useState } from "react";
import { OnChangeArgs, ProductInCart, ShoppingCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState< ShoppingCart >({});

    const onProductCountChange = ({ count, product }: OnChangeArgs) =>{
        setShoppingCart( oldShoppingCard => {

           /*  const productInCart: ProductInCart = oldShoppingCard[product.id] || { ...product, count: 0 };

            if( Math.max( productInCart.count + count, 0 ) > 0 ){
                productInCart.count += count;
                return {
                    ...oldShoppingCard,
                    [product.id]: productInCart
                }
            } */

            //Borrar el producto
            /* const  {  [product.id ]: toDelete, ...resto } = oldShoppingCard;
            return { ...resto }; */

            if( count === 0 ){
                const  {  [product.id ]: toDelete, ...resto } = oldShoppingCard;
                return resto;
            }

            return {
                ...oldShoppingCard,
                [ product.id ]: { ...product, count }
            } 
        });
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}