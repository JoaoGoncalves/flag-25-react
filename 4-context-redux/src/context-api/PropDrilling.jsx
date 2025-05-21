import { useState } from "react";


export default function PropDrilling() {

    const [nome, setNome] = useState('Joao');

  return (
    <section>
        <h1>Componente PropDrilling</h1>
        <Hello nome={nome} changeName={ ()=> setNome('Maria')} />
    </section>
  );
}


function Hello(props){
    return (
        <section>
            {/* <h1>Componente Hello</h1> */}
            <Greetings nome={props.nome} changeName={props.changeName} />
        </section>
    )
}


function Greetings(props){
    return (
        <section>
            <h1>Componente Greetings</h1>
            <p>Recebido do Avô (via Pai): {props.nome}</p>
            <button onClick={props.changeName}> mudar nome</button>
        </section>
    )
}