import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Service from './components/pages/Service';

function App() {
  return (
    <>
   <Header/>
   <Routes>

        <Route path='/' element={<Home />} />
        <Route path='blog' element={<Blog/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='service' element={<Service/>}/>
    </Routes>
   <Footer/>
    </>

  );
}

export default App;
