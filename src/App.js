import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Admin/Dashbord';
import Add from './Pages/Admin/category/Add';
import Category from './Pages/Admin/category/Category';
import Product from './Pages/Admin/Product/Product';
import Addproduct from './Pages/Admin/Product/Addproduct';
import Home from './Pages/User/Home';
import Userproduct from './Pages/User/Userproduct';
import Cart from './Pages/User/Cart';
import Productdetails from './Pages/Admin/Product/Productdetails';
import Userdetails from './Pages/Admin/Userdetails';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        {/* <Route path='/leftsidebar' element={<Leftsiderbar/>}/> */}
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/add' element={<Add/>}/>
        <Route path='/admin/category' element={<Category/>}/>
        <Route path='/admin/product' element={<Product/>}/>
        <Route path='/admin/addproduct' element={<Addproduct/>}/>
        <Route path='/productdetails/:id' element={<Productdetails/>}/>
        <Route path='/details/:id' element={<Userdetails/>}/>
       
        

        {/* user */}
        <Route path='/user/home' element={<Home/>}/>
        <Route path='/user/product' element={<Userproduct/>}/>
        <Route path='/user/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
