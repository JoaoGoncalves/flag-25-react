import { useEffect } from "react";
import { useState } from "react";


export default function SayHello() {

    const greetings = ['Olá' , 'Hola', 'Bonjour', 'Ciao', 'Good Morning'];

    const [index, setIndex] = useState(0);


    // use effect, utilizar sempre que tenha um side effect na componente
    // executar sempre que o qualquer state for alterado
    useEffect(
        () => { 
            document.title = greetings[index]
        }
    )


    const updateGreetings = () => {
        setIndex(Math.floor(Math.random() * greetings.length));
    }

  return (
    <section>
        <p> {greetings[index]} </p>
        <button onClick={updateGreetings}> SAY HELLO </button>
    </section>
  );
}
