import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import './App.css'
import Banner from './assets/pages/Banner'
import Header from './assets/pages/Header'
import Main from './assets/pages/Main';
import Footer from './assets/pages/Footer';
import BackToTopBtn from './assets/components/BackToTopBtn';
import { useEffect, useState } from 'react';

function App() {

  //the scroll position of window
  const [scroll,setScroll]=useState(0);

//constantly listen to the scroll position
  useEffect(()=>{
    window.addEventListener('scroll' ,()=>{
      setScroll(window.scrollY);
    });
    return()=>{
      window.removeEventListener('scroll' ,()=>{
        setScroll(window.scrollY);
    });
  }
  },[scroll])


  return (
    <>
   <Header scroll={scroll}/>
   <Banner/>
   <Main/>
   <Footer/>
   <BackToTopBtn  scroll={scroll}/>
   
    </>
  )
}

export default App
