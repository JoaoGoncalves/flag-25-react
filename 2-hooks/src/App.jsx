
import './App.css'
import Bookables from './components/Bookables'
import ClassComp from './components/ClassComp'
import FuncComp from './components/FuncComp'

function App() {

  return (
    <>
      <h1>Hooks em react</h1>
      <hr />
      <section className='App'>
        {/* <ClassComp />
        <FuncComp /> */}
        <Bookables />
      </section>
    </>
    
  )
}

export default App
