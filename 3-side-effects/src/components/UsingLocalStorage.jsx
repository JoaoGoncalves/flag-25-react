import { useEffect, useState } from 'react';

export default function UsingLocalStorage() {

    /* localStorage.setItem('nome', 'Joao');
    localStorage.setItem('pais', 'Pt');
    console.log(localStorage.getItem('nome'));
    localStorage.removeItem('pais'); */
   // localStorage.clear();

   const [user, setUser] = useState('');
   const [xpto, setXpto] = useState('xpto state')


   useEffect(() => {
     //inicio na construcao da compoennete, verificar se tenho um user guardado
     console.log('inicio');
     const storedUser = localStorage.getItem('user');

     if(storedUser){
        setUser(storedUser);
     }
   }, [])


   useEffect(() => {// 
    localStorage.setItem('user', user);
    console.log('user: ', user);
   }, [user]);


   useEffect(() => {
    console.log('Chamado effect.....');
   })


  return (
    <>
        <h1>Using Depencies in Effect</h1>
        <select value={user} onChange={ (evt) => setUser(evt.target.value) }>
            <option>Joao</option>
            <option>Maria</option>
            <option>Joana</option>
            <option>Antonio</option>
            <option>Pedro</option>
            <option>Ines</option>
        </select> <br />
        <button onClick={()=> setXpto('alterado')}> {xpto} </button>
    </>
  );
}
