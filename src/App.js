import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Shope } from './Pages/Shope';
import { ShopeCategory } from './Pages/ShopeCategory';
import { Product } from './Pages/Product';
import {CartContainer} from './Pages/CartContainer';
import { LoginSignUp } from './Pages/LoginSignUp';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Shope/>}/>
        <Route path='/men' element = {<ShopeCategory banner ={men_banner} category = "men"/>}/>
        <Route path='/women' element = {<ShopeCategory banner={women_banner} category = "women"/>}/>
        <Route path='/kids' element = {<ShopeCategory banner={kids_banner} category = "kid"/>}/>
        <Route path='/product' element = {<Product/>}>
          <Route path=':productID' element = {<Product/>}/>
        </Route>
        <Route path='/cartContainer' element = {<CartContainer/>}/>
        <Route path='/login' element = {<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
