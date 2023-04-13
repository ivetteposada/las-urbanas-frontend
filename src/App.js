import React from 'react';
import { Header } from './components/home/Header';
import { Home } from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/home/Footer';
import { Location } from './components/Location';
import { Route, Routes } from 'react-router-dom';
import { LogIn } from './components/login/LogIn';
import { Menu } from './components/menu/Menu';
import './App.css';
import { ShoppingCart } from './components/cart/ShoppingCart';
import { Entries } from './components/menu/Entries';
import { Boneless } from './components/menu/Boneless';
import { Burgers } from './components/menu/Burgers';
import { Tacos } from './components/menu/Tacos';
import { Drinks } from './components/menu/Drinks';
import { ForgotPassword } from './components/login/ForgotPassword';
import { Profile } from './components/profile/Profile';
import { SingUp } from './components/login/SignUp';
import { Address } from './components/profile/Address';
import {ProductDetails} from './components/menu/ProductDetails'

function App() {
  return (
    <div className="App">           
      <Header/>            
      <Routes>  
        <Route path="/" element={<Home/>} />                                   
        <Route path="/direccion" element={<Location/>} />        
        <Route path="/ingresar" element={<LogIn/>} />   
        <Route path="/menu" element={<Menu/>} />
        <Route path="/entradas" element={<Entries/>} />
        <Route path="/hamburguesas" element={<Burgers/>} />
        <Route path="/boneless" element={<Boneless/>} />
        <Route path="/tacos" element={<Tacos/>} />
        <Route path="/bebidas" element={<Drinks/>} />
        <Route path="/carrito" element={<ShoppingCart/>} />
        <Route path="/reestablecer-contraseña" element={<ForgotPassword/>} />
        <Route path="/perfil" element={<Profile/>} />
        <Route path="/perfil/direcciones" element={<Address/>} />        
        <Route path="/registrarse" element={<SingUp/>} />
        <Route path="/menu/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
