import NavbarComponent from './components/navbar'
import SecondaryNav from './components/secondaryBar'
import Home from './pages/home'
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarouselComponent from './components/carousel'

function App() {
  return (
    <Router>
      <NavbarComponent />
      <SecondaryNav />
      <CarouselComponent />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;