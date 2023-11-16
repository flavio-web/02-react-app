import { useContext } from "react";

import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import { ProductTilte } from "../interfaces/interfaces";

export const ProductTitle = ({ title, className, style }: ProductTilte) =>{
    
    const { product } = useContext( ProductContext );
    
    return (
        <span className={ `${styles.productDescription} ${className}` }  style={ style } >{ title ? title : product.title }</span>
    )
}