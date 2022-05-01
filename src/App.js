import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewitem from './component/AddNewitem/AddNewitem';
import AllInventory from './component/AllInventory/AllInventory';
import Footer from './component/Footer/Footer';
import Heder from './component/Heder/Heder';
import Home from './component/Home/Home';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Register from './component/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute ';

function App() {
  return (
    <div>
      <Heder></Heder>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory' element={<PrivateRoute>
          <Inventory></Inventory>
        </PrivateRoute>}></Route>
        <Route path='/allinventory' element={<PrivateRoute>
          <AllInventory></AllInventory>
        </PrivateRoute>}></Route>
        <Route path='/addnewitem' element={<PrivateRoute>
          <AddNewitem></AddNewitem>
        </PrivateRoute>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
