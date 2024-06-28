import './App.css';
import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Skills from "./Component/Skills";
import TimeLine from "./Component/TimeLine";
import ScrollToTop from "./Component/ScrollToTop";
import ContactForm from "./Component/ContactForm";
import Projects from "./Component/Projects";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <Home />
          <ScrollToTop />
        </section>


        <section id="about">
          <About />
        </section>

        <section id="timeLine">
          <TimeLine />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <ContactForm />
        </section>


      </main>


    </div>
  );
}
export default App;
