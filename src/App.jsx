import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ItemList from './components/ItemList';
import BookTable from './components/BookTable';
import Footer from './components/Footer';
import Review from './components/Review';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <ItemList />
      <BookTable />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
