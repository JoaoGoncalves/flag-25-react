import React from 'react';
import { useState } from 'react';

export default function WindowSize() {

    const [size, setSize] = useState(getSize());

    function getSize(){
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }


  return (
    <>
    <p> Width:  {size.width} ,  Height: {size.height}</p>
    </>
  );
}
