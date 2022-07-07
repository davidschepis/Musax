import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div id="root" className="container-fluid">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
