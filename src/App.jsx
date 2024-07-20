import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Profile from './Pages/Profile'

function App() {
    return(
      <Routes>
        <Route exact path='/' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>

      </Routes>
    )
}

export default App
