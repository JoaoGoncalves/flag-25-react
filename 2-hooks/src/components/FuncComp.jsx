import { useState } from "react";

export default function FuncComp() {

    const [name, setName] = useState('');

    const handleChange = (evt) => setName(evt.target.value);


  return (
    <div>
        <h1>Function</h1>
        <p>My Name is: {name}</p>
        <p>numero letras: {name.length}</p>
        <input type="text" value={name} onChange={handleChange} />

    </div>
  );
}
