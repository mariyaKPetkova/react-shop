import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Cart from './components/Cart/cartList';
import Details from './components/ProductItem/details';
import NotFound from './components/NotFound/not-found';
import SearchResult from './components/Search/search-result';
import Trainers from './components/Trainers/trainers';


function App() {
  
  return (
    <div data-test="app-component" className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:seachedWord" element={< SearchResult />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path='*' element={<NotFound />}/>
        <Route path='/trainers/:category' element={<Trainers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
