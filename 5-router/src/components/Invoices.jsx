
import { Link, NavLink, Outlet } from 'react-router-dom';
import { getInvoices } from '../data';

export default function Invoices() {

  let invoices = getInvoices();
  

  return (
    <>
    <h1>Invoices</h1>
    <section className="invoices">
      <nav>
        {
          invoices.map( invoice => (
            <NavLink key={invoice.number} to={`/invoices/${invoice.number}`} >
              {invoice.name}
            </NavLink>
          ))
        }
      </nav>
      <Outlet />
    </section>
    </>
  );
}
