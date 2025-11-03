import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Admin from './pages/admin'
import NotFound from './pages/not_found'
import UnAuth from './pages/unauth'

function App() {
  return (
    <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/unauth" element={<UnAuth />} />
    </Routes>
  )
}

export default App
