import GlobalStyle from './globalStyles';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import { Footer, Navbar } from './components';
import Services from './pages/ServicesPage/Services';
import Products from './pages/ProductsPage/Products';
import SignUp from './pages/SignUpPage/SignUp';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
