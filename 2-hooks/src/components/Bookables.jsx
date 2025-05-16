import { useState } from "react";
import { bookables } from "../db.json";

export default function Bookables() {
  const [bookableIndex, setBookableIndex] = useState(0);
  const [group, setGroup] = useState("Rooms");
  const [hasDetails, setHasDetails] = useState(true);
  //useReducer() , serve para retirar dos states todos um unico valor

  const bookablesInGroup = bookables.filter((b) => b.group === group);

  const bookable = bookablesInGroup[bookableIndex];

  const groups = [...new Set(bookables.map((b) => b.group))];

  const nextBookable = (_) => {
    // setBookableIndex( (bookableIndex + 1) % bookablesInGroup.length);
    setBookableIndex((index) => (index + 1) % bookablesInGroup.length);
    // estou a delegar a responsabilidade de atualizacao do state ao react.
  };

  const changeGroup = (e) => {
    setBookableIndex(0);
    setGroup(e.target.value);
  }

  return (
    <>
      <div>
        <select value={group} onChange={changeGroup}>
          {groups.map((g, i) => (
            <option key={i}> {g} </option>
          ))}
        </select>
        <ul className="bookables">
          {bookablesInGroup.map((b, i) => (
            <li
              key={b.id}
              className={i === bookableIndex ? "selected" : null}
              onClick={() => setBookableIndex(i)}
            >
              {b.title}
            </li>
          ))}
        </ul>
        <p>
          <button autoFocus onClick={nextBookable}>
            Next
          </button>
        </p>
      </div>
      <div>
        {bookable && (
          <>
            <p>
              <label htmlFor="details">Show Details</label>
              <input
                type="checkbox"
                id="details"
                checked={hasDetails}
                onChange={(e) => setHasDetails(e.target.checked)}
              />
            </p>

            {
              //conditional rendering
              hasDetails && (
                <article>
                  <h2> {bookable.title} </h2>
                  <p> {bookable.notes}</p>
                </article>
              )
            }
          </>
        )}
      </div>
    </>
  );
}
