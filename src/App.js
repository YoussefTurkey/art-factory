import './scss/main.scss';
import './js/main.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './views/Header'
import About from './views/About'
import Service from './views/Service'
import Frequently from './views/Frequently'
import Map from './views/Map'
import Footer from './views/Footer';

function App() {
  return (
    <>
      <Header />
      <About />
      <Service />
      <Frequently />
      <Map />
      <Footer />

      <div className="gototop js-top">
        <a href="#" className="js-gotop">
          <i className='bx bxs-chevrons-up'></i>
        </a>
      </div>
    </>
  );
}

export default App;
