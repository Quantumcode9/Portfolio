import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="intro"><Intro /></section>
      <main>
      <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>

      </main>
      <Footer />
      

    </div>
  );
}

export default App;