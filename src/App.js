import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import AddNewitem from './component/AddNewitem/AddNewitem';
import AllInventory from './component/AllInventory/AllInventory';
import Blogs from './component/Blogs/Blogs';
import Footer from './component/Footer/Footer';
import Heder from './component/Heder/Heder';
import Home from './component/Home/Home';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import MyItems from './component/MyItems/MyItems';
import NotFound from './component/NotFound/NotFound';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Heder></Heder>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory/:serviceId' element={<RequireAuth>
          <Inventory></Inventory>
          </RequireAuth>}></Route>
        <Route path='/allinventory' element={<RequireAuth>
          <AllInventory></AllInventory>
          </RequireAuth>}></Route>
        <Route path='/addnewitem' element={<RequireAuth>
          <AddNewitem></AddNewitem>
          </RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth>
          <MyItems></MyItems>
          </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
