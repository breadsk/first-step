
import { ItemCounter } from "./shopping-cart/itemCounter"

interface ItemInCart {
  productName: string;
  quantity:number;
}

const itemsInCart:ItemInCart[] = [
  { productName: 'Nintendo Switch 2', quantity: 2 },
  { productName: 'Play Station 5', quantity: 3 },
  { productName: 'Game Boy', quantity: 4 },
]

export const FirstStepsApp = () => {

    
  return (
    <>        
        <h1>Carrito de Compras</h1>

        {
          itemsInCart.map( ({productName , quantity}) => (
              <ItemCounter
                key={productName}
                productName={productName} 
                quantity={quantity} />
          ))
        }
        
        {/* <ItemCounter itemName="Nintendo switch 2" quantity={2}/>
        <ItemCounter itemName="Play station 5" quantity={3}/>
        <ItemCounter itemName="Game Boy" quantity={4}/> */}
        
        
    </>
  )
}
