import type { CSSProperties } from "react";


//const favoriteGames:string[] = ['megaman' , 'suikoden' , 'final fantasy' ]
const isActive = true;
const persona = {
    firstName:'Nicolas',
    lastName:'Caceres',
    age:42
  }

const myStyles: CSSProperties = {
            backgroundColor: 'red',
            color: isActive ? 'white' : 'yellow',
            borderRadius: 2,
            padding: 10,
            fontWeight: 'bold'
          }


export const FirstStepsApp = () => {

    

  return (
    <>
        {/* <p><b>{favoriteGames.join(', ')}</b></p> */}

        {/* {favoriteGames.map((game, i) => (
            <h2 key={i}>{game}</h2>
        ))} */}

        {/* <h2>{  isActive.toString() }</h2> */}
        {/* <h2>{persona.toString()}</h2> */}
        <h1>{    isActive ? 'Activo' : 'No activo' }</h1>

        <h2>{JSON.stringify(persona)}</h2>


        <p
          style={myStyles}
        >
          Hola mundo
        </p>
    </>
  )
}
