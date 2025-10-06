
import { ItemCounter } from "./shopping-cart/itemCounter"

export const FirstStepsApp = () => {

    
  return (
    <>        
        <h1>Carrito de Compras</h1>
        
        <ItemCounter itemName="Nintendo switch 2" quantity={2}/>
        <ItemCounter itemName="Play station 5" quantity={3}/>
        <ItemCounter itemName="Game Boy" quantity={4}/>
        
        
    </>
  )
}
