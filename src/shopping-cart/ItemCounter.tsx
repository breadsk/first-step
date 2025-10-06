import { useState, type CSSProperties } from "react"

const styles:CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
    }

interface Props {
    key:string;
    productName:string;
    quantity?:number; // number | undefined
}


export const ItemCounter = ({productName,quantity = 1}:Props) => {
    
    const [ count , setCount ] = useState(quantity)

    // setCount(1000) esto no se hace, este dispatcher hara que se 
    // dibuje nuevamente el componente

    const handleClickAdd = () => {
        setCount(count + 1)
    }

    const handleSubstract = () => {
        if(count === 1) return;
        setCount(count - 1)
    }

  return (
    <section style={styles}>
        <span style={{
            width: 150,

        }}>{productName}</span>
        <button
            // onMouseEnter={() => {
            //     console.log(`Mouse enter ${productName}`);
            // }}
            onClick={handleClickAdd}
        >+1</button>
        <span>{count}</span>
        <button
            onClick={handleSubstract}
        >-1</button>
    </section>
  )
}
