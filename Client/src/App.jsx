import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Frontpage from './Components/Frontpage'
import Cricketers from './Components/Cricketers'
import Politicians from './Components/Politicians'
import Home from './Components/Home'
import Cities from './Components/Cities'
import Delete from './Components/Delete'

function App() {
 const [count, setCount] = useState(0)
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Frontpage />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Politicians" element={<Politicians />}></Route>
            <Route path="/Cricketers" element={<Cricketers />}></Route>
            <Route path="/Cities" element={<Cities />}></Route>
            <Route path='/Delete' element={<Delete />}></Route>

        </Routes>
        </BrowserRouter>
        
        </>
    )
}
export default App