import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';

const products = [
    {
        id: '1',
        title: 'Coffe Mug - Card 1',
        img: './coffee-mug.png'
    },
    {
        id: '2',
        title: 'Coffe Mug - Card 2',
        img: './coffee-mug.png'
    },
    {
        id: '3',
        title: 'Coffe Mug - Card 3',
    }
    
]


export const ShoppingPage = () => {
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
           products.map(product =>{
                return <ProductCard key={ product.id } product={ product } className="bg-dark text-white" >
                    <ProductImage className="custom-image"/>
                    <ProductTitle className=" text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>
            })
        }

            <hr style={{
                width: '100%',
                margin: '20px'
            }}/>
            <h1 style={{
                width: '100%',

            }}>Otra forma</h1>

            <ProductCard product={ products[0] } className="bg-dark text-white" >
                <ProductCard.Image className="custom-image" />
                <ProductCard.Title title={ 'Capuchino' } className=" text-bold" />
                <ProductCard.Buttons className="custom-buttons" />  
            </ProductCard>

            <ProductCard product={ products[0] } style={{ backgroundColor: '#70D1F8'}}>
                <ProductCard.Image />
                <ProductCard.Title title={ 'Capuchino' } style={{ color: '#333', fontSize: '18px', fontWeight: 'bold' }} />
                <ProductCard.Buttons style={{ display: 'flex', justifyContent: 'end'}} />  
            </ProductCard>

          
        </div>

    </div>
  )
}
