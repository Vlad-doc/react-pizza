import { Route, Routes } from 'react-router-dom';
import './scss/app.scss'
import Header from './components/header';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Cart from './pages/cart';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
