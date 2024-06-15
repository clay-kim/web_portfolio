import Canvas from "./Canvas/Canvas";
import './App.css';
import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Skills from "./Component/Skills";
import TimeLine from "./Component/TimeLine";
import ScrollToTop from "./Component/ScrollToTop";

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

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
    
        </section>

        <section id="contact">
          contact
        </section>

    
      </main>


    </div>
  );
}
export default App;
