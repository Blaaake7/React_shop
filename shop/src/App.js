import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Detail from './components/Detail';
import NotFound from './components/NotFound';
import Event from './components/Event';
import data from './components/data';
import Cart from './components/Cart';

export default function App() {
  const [shoes, setShoes] = useState(data);
  useEffect(()=>{
    if (localStorage.getItem('watched') == null) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  },[]);

  const changeShoes = (value) => {
    setShoes((prev) => prev.concat(value));
  }
  return (
    <div className="App">
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main shoes={shoes} changeShoes={changeShoes}/>}></Route>
        <Route path='/detail/:num' element={<Detail  shoes={shoes}/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰 받기</div>}></Route>
        </Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </>
    </div>
  );
}