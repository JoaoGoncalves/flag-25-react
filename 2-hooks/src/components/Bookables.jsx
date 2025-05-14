import {bookables} from '../db.json';

export default function Bookables() {

    const group = "Rooms";

    const bookablesInGroup = bookables.filter( b => b.group === group);

    

    /* const items = bookablesInGroup.map( b => (
        <li>{b.title}</li>
    )) */


  return (
    <ul className='bookables'>
        {
            bookablesInGroup.map( b => (
                <li key={b.id}>
                    {b.title}
                </li>
            ))
        }
    </ul>
  );
}
