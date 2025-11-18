
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Playground from './components/Playground'
import Winner from './components/Winner'


const App = () => {


  return (
    <div className=''>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Playground'element={<Playground></Playground>}></Route>
        <Route path='/Winner' element={<Winner></Winner>}></Route>
      </Routes>

    </div>
  )
}

export default App