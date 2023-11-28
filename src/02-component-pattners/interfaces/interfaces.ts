import { CSSProperties, ReactElement } from "react";

export interface ProductCardProps {
    product     : Product;
    children?   : ReactElement | ReactElement[];
    className?  : string; 
    style?      : CSSProperties;
    onChange?   : ( args: OnChangeArgs ) => void;
    value?      : number;
}

export interface OnChangeArgs {
    product : Product;
    count   : number;
}

export interface UseProductArgs{
    product     : Product;
    onChange?   : ( args: OnChangeArgs ) => void;
    value?      : number;
}

export interface Product {
    id      : string;
    title   : string;
    img?    : string;
}

export interface ProductInCart extends Product{
   count: number;
}

export interface ShoppingCart{
    [key: string]: ProductInCart;
}

export interface ProductContextProps{
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title, className, style }: ProductTilte) => JSX.Element;
    Image: ({ img, className, style }: ProductImg) => JSX.Element;
    Buttons: ({ className, style }: ProductBtnsInterface) => JSX.Element;
}


export interface ProductTilte { 
    title?      : string, 
    className?  : string
    style?      : CSSProperties;
}

export interface ProductImg {
    img?        : string;
    className?  : string;
    style?      : CSSProperties;
}


export interface ProductBtnsInterface{
    className?  : string;
    style?      : CSSProperties;
}