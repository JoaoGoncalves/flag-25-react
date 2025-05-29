
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <section className='App'>
     <h1>Contabilidade - React Router</h1>
     <nav>
      <Link to='/invoices'>Invoices</Link>
      <Link to='/expenses'>Expenses</Link>
      <Link to='/search?nome=joao&apelido=goncalves'>search</Link>
     </nav>
     <Outlet />
    </section>
  )
}

export default App
