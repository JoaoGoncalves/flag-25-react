import React, { useEffect } from 'react';
import { useState } from 'react';

export default function WindowSize() {

    const [size, setSize] = useState(getSize());

    function getSize(){
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }

    useEffect(() => {

      //console.log(size.width);
      window.addEventListener('resize', handleResize, false);


      function handleResize(){
        setSize(getSize());
      }

      return () => { // Cleanup function, e é sempre executad antes da componente ser destruida, e antes de cada render da compoente.
        window.removeEventListener('resize', handleResize, false);
      }

    }, []); // array de dependencias vazia, so é executado no inicio da construção da componente
    // Array de dependencias do Effect, que difine quando é executado o meu effect
    // classes, componentDidMount()

    


  return (
    <>
    <p> Width:  {size.width} ,  Height: {size.height}</p>
    </>
  );
}
