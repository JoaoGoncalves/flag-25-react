import { useState } from 'react';
import {bookables} from '../db.json';

export default function Bookables() {

    const [bookableIndex, setBookableIndex] = useState(0);

    const group = "Rooms";

    const bookablesInGroup = bookables.filter( b => b.group === group);

    //let bookableIndex = 2; 

    // clicar no li mudar o bookableindex
    /* const changeBookable = (index) => {
        bookableIndex = index;
        console.log(bookableIndex);
    } */


  return (
    <ul className='bookables'>
        {
            bookablesInGroup.map( (b, i) => (
                <li key={b.id} 
                    className={ i === bookableIndex ? "selected" : null}
                    onClick={ () => setBookableIndex(i) }>
                    {b.title}
                </li>
            ))
        }
    </ul>
  );
}
