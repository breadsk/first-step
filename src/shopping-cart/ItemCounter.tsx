import type { CSSProperties } from "react"

const styles:CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
    }

interface Props {
    itemName:string;
    quantity?:number; // number | undefined
}


export const ItemCounter = ({itemName,quantity}:Props) => {

    console.log(itemName);

  return (
    <section style={styles}>
        <span style={{
            width: 150,

        }}>Nintendo Switch 2</span>
        <button>+1</button>
        <span>{quantity}</span>
        <button>-1</button>
    </section>
  )
}
