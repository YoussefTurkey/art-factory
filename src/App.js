import './scss/main.scss';
import './js/main.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './views/Header'
import About from './views/About'
import Service from './views/Service'

function App() {
  return (
    <>
      <Header />
      <About />
      <Service />
    </>
  );
}

export default App;
