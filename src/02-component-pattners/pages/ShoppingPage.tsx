import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

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
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

        {
           products.map(product =>{
                return <ProductCard key={ product.id } product={ product }  >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons/>
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

            <ProductCard product={ products[0] }  >
                <ProductCard.Image />
                <ProductCard.Title title={ 'Capuchino' } />
                <ProductCard.Buttons/>  
            </ProductCard>

          
        </div>

    </div>
  )
}
