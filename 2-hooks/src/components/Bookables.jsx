import { useState } from 'react';
import {bookables} from '../db.json';

export default function Bookables() {

    const [bookableIndex, setBookableIndex] = useState(0);

    const group = "Rooms";

    const bookablesInGroup = bookables.filter( b => b.group === group);

    const nextBookable = _ => {
       // setBookableIndex( (bookableIndex + 1) % bookablesInGroup.length);
       setBookableIndex ( index => (index +1) % bookablesInGroup.length);
       // estou a delegar a responsabilidade de atualizacao do state ao react.
    }

    /* 0 / 4 = 0 resto 0
    1 / 4 = 0 resto 1
    ...
    4 / 4 = 1  resto 0
    5 / 4 = 1 /resto 1
    6 / 4 = 1 /resto 2
 */

  return (
    <div>
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
        <p>
            <button autoFocus onClick={nextBookable}>Next</button>
        </p>
    </div>
  );
}
