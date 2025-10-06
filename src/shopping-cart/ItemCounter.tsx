import type { CSSProperties } from "react"

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


export const ItemCounter = ({productName,quantity}:Props) => {
    
    const handleClick = () => {
        console.log(`Click en ${productName}`);
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
            onClick={handleClick}
        >+1</button>
        <span>{quantity}</span>
        <button>-1</button>
    </section>
  )
}
