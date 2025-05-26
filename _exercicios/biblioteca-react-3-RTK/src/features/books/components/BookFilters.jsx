import { useDispatch } from "react-redux";
import { showAllBooks, showNotReadBooks, showReadBooks } from "../booksSlice";


export default function BookFilters() {

    const dispatch = useDispatch()


  return (
    <section className="filters">
        <div>
            <button className="btn" onClick={ ()=> dispatch(showAllBooks()) }>All</button>
            <button className="btn" onClick={ ()=> dispatch(showReadBooks()) }>read</button>
            <button className="btn" onClick={ ()=> dispatch(showNotReadBooks()) }>not read</button>
        </div>
        <div>
            <label htmlFor="searchTxt">Search Title</label>
            <input type="search" className="searchTxt" id="searchTxt"/>
        </div>
    </section>
  );
}
