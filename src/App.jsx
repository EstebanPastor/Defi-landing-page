import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Developers from "./components/developers/Developers";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Developers />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
