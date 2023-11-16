import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductImg } from "../interfaces/interfaces";

export const ProductImage = ({ img, className, style }: ProductImg) =>{

    const { product } = useContext( ProductContext );
    let imageToShow: string;

    if( img ){
        imageToShow = img;
    }else if( product.img ){
        imageToShow = product.img;
    }else{
        imageToShow = noImage;
    }

    return (
        <img className={ `${styles.productImg} ${className}` } src={ imageToShow } alt="Product" style={ style } />
    )
}