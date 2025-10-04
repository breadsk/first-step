

const favoriteGames = ['megaman' , 'suikoden' , 'final fantasy' ]
    const isActive = true;
    const persona = {
        firstName:'Nicolas',
        lastName:'Caceres',
        age:42
     }

export const FirstStepsApp = () => {

    

  return (
    <>
        <p><b>{favoriteGames.join(', ')}</b></p>

        {favoriteGames.map((game, i) => (
            <h2 key={i}>{game}</h2>
        ))}

        {/* <h2>{  isActive.toString() }</h2> */}
        {/* <h2>{persona.toString()}</h2> */}
        <h1>{    isActive ? 'Activo' : 'No activo' }</h1>

        <h2>{JSON.stringify(persona)}</h2>
    </>
  )
}
