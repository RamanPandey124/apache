import './App.css';
import {Routes,Route} from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'
import Products from './components/pages/Products'
import Customers from './components/pages/Customers'
import Transactions from './components/pages/Transactions'
import Geography from './components/pages/Geography'
import Overview from './components/pages/Overview'
import Daily from './components/pages/Daily'
import Monthly from './components/pages/Monthly'
import Breakdown from './components/pages/Breakdown'
import Admin from './components/pages/Admin'
import Performance from './components/pages/Performance'

function App() {
  return <>
  <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/Customers' element={<Customers/>}/>
    <Route path='/Transactions' element={<Transactions/>}/>
    <Route path='/Geography' element={<Geography/>}/>
    <Route path='/Overview' element={<Overview/>}/>
    <Route path='/Daily' element={<Daily/>}/>
    <Route path='/Monthly' element={<Monthly/>}/>
    <Route path='/Breakdown' element={<Breakdown/>}/>
    <Route path='/Admin' element={<Admin/>}/>
    <Route path='/Performance' element={<Performance/>}/>
  </Routes>
  </>
}

export default App;
