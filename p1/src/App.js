import './App.css';
import w1 from "./assets/w1.png";
import w2 from "./assets/w2.jpg";
import w3 from "./assets/w3.jpg";
import Hero from "./components/Hero";
import Slider from './components/Slider';
import Navbar from "./components/Navbar";


const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "Serie" },
  { url: "#", title: "Movie" },
];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={w1} />
      <Slider imageSrc={w2}
        title={"Caerá del cielo!"}
        subtitle={". . ."}
      />
      <Slider imageSrc={w3}
        title={"Muy pronto!"}
        subtitle={"Esperala."}
        flipped={true}
      />
    </div>

  );
}

export default App;
