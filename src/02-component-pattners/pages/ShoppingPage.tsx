import { useShoppingCart } from "../hooks/useShoppingCart";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";
import '../styles/custom-styles.css';


export const ShoppingPage = () => {

   const { shoppingCart, onProductCountChange } = useShoppingCart();


  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

            {
                products.map( product =>(
                    <ProductCard 
                        key={ product.id } 
                        product={ product } 
                        className="bg-dark text-white"
                        onChange={ onProductCountChange }
                        value={ shoppingCart[product.id]?.count || 0 }
                    >
                        <ProductImage className="custom-image"/>
                        <ProductTitle className=" text-bold"/>
                        <ProductButtons className="custom-buttons"/>
                    </ProductCard>
                ))
            }
          
        </div>

        <div className="shopping-cart">

            {
                Object.entries( shoppingCart ).map( ([ key, product]) => (
                    <ProductCard 
                        key={ key }
                        product={ product }
                        className="bg-dark text-white" 
                        style={{ 
                            width: '100px'
                        }}
                        onChange={ onProductCountChange }
                        value={ product.count }

                    >
                        <ProductCard.Image />
                        <ProductCard.Title title={ `${product.count}` } style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }} />
                        <ProductCard.Buttons style={{ display: 'flex', justifyContent: 'center'}} className="custom-buttons" />  
                    </ProductCard> 
                ))
            }

        </div>

        <div>
            <code>
                { JSON.stringify( shoppingCart, null, 5 ) }
            </code>
        </div>

    </div>
  )
}
